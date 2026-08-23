import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";

import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiSend,
  FiHeadphones,
  FiChevronLeft,
  FiUser,
  FiMessageSquare,
  FiLoader,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

import {z} from "zod";

import contactBanner from "../../assets/images/contact-banner.png";
import companyImage from "../../assets/images/company.png";

const INITIAL_VALUES = {
  name: "",
  phone: "",
  subject: "",
  email: "",
  message: "",
};

const SUBMIT_THROTTLE_MS = 1500;

const noHtmlTags = (val) => !/[<>]/.test(val);

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "نام و تخلص الزامی است.")
    .max(50, "نام نباید بیشتر از ۵۰ کاراکتر باشد.")
    .refine(noHtmlTags, "کاراکترهای غیرمجاز در نام استفاده نشود."),

  phone: z
    .string()
    .trim()
    .min(1, "شماره تماس الزامی است.")
    .regex(/^\d{9,14}$/, "شماره تماس باید فقط عدد و بین ۹ تا ۱۴ رقم باشد."),

  subject: z.string().trim().min(1, "موضوع مشاوره را انتخاب کنید."),

  email: z
    .string()
    .trim()
    .min(1, "ایمیل الزامی است.")
    .email("ایمیل واردشده معتبر نیست.")
    .max(100, "ایمیل بیش از حد طولانی است."),

  message: z
    .string()
    .trim()
    .min(10, "پیام باید حداقل ۱۰ حرف باشد.")
    .max(500, "پیام نباید بیشتر از ۵۰۰ کاراکتر باشد.")
    .refine(noHtmlTags, "کاراکترهای غیرمجاز در پیام استفاده نشود."),
});

function validate(values) {
  const result = contactSchema.safeParse(values);

  if (result.success) return {};

  const errors = {};

  for (const issue of result.error.issues) {
    const field = issue.path[0];

    if (!errors[field]) {
      errors[field] = issue.message;
    }
  }

  return errors;
}

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

function loadRecaptchaScript(siteKey) {
  if (document.querySelector('script[data-recaptcha="true"]')) {
    return;
  }

  const script = document.createElement("script");

  script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
  script.async = true;
  script.dataset.recaptcha = "true";

  document.head.appendChild(script);
}

async function getRecaptchaToken() {
  if (!RECAPTCHA_SITE_KEY || !window.grecaptcha) {
    return null;
  }

  try {
    return await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
      action: "contact_submit",
    });
  } catch {
    return null;
  }
}

/*
  فعلاً ارسال واقعی نداریم.
  بعداً این قسمت با API بک‌اند جایگزین می‌شود.
*/
function fakeSubmit() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ok: true});
    }, 1200);
  });
}
const labelClass = `
  block
  text-[13px]
  font-semibold
  text-gray-800
  mb-2
`;
function FieldError({children, id}) {
  if (!children) return null;

  return (
    <p id={id} className="mt-1.5 text-xs text-red-600">
      {children}
    </p>
  );
}

export default function Cantact() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const lastAttemptRef = useRef(0);

  const isLoading = status === "loading";

  useEffect(() => {
    if (RECAPTCHA_SITE_KEY) {
      loadRecaptchaScript(RECAPTCHA_SITE_KEY);
    }
  }, []);

  function handleChange(e) {
    const {name, value} = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }

    if (status !== "idle") {
      setStatus("idle");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const now = Date.now();

    if (isLoading || now - lastAttemptRef.current < SUBMIT_THROTTLE_MS) {
      return;
    }

    lastAttemptRef.current = now;

    const validationErrors = validate(values);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("loading");

    try {
      const recaptchaToken = await getRecaptchaToken();

      await fakeSubmit({
        ...values,
        recaptchaToken,
      });

      setStatus("success");
      setValues(INITIAL_VALUES);
    } catch {
      setStatus("error");
    }
  }

  return (
    <main dir="rtl" className="bg-gray-50 ">
      {/* ================= Hero ================= */}
      <section
        className="relative overflow-hidden 
        "
      >
        <img
          src={contactBanner}
          alt="شرکت ریخته گری بامیکا نیرو"
          className="h-[260px] md:h-[320px] w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-white via-white/75 to-transparent md:hidden" />

        {/* Hero Content */}
        <div className="absolute inset-0">
          <div className="max-w-7xl mx-auto h-full px-6 md:px-12 flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 text-right">
              درخواست مشاوره
            </h1>

            <div className="mt-4 flex items-center gap-3 text-sm md:text-lg">
              <Link
                to="/"
                className="text-gray-800 hover:text-bamikaGold transition-colors"
              >
                صفحه اصلی
              </Link>

              <FiChevronLeft className="text-gray-500" />

              <span className="text-gray-800 md:text-bamikaGold font-medium">
                درخواست مشاوره
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className=" w-full max-w-7xl mx-auto px-4 py-8">
        {/* ================= Contact Info ================= */}
        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          {/* Address */}
          <div className="flex items-center gap-5 p-6 md:p-7 text-right border-b lg:border-b-0 md:border-l border-gray-200">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-bamikaGold/10">
              <FiMapPin className="text-2xl text-bamikaGold" />
            </div>

            <div>
              <h3 className="font-bold text-gray-900">آدرس</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                سرک کابل قندهار نارسیده به قلعه حیدر خان
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-5 p-6 md:p-7 text-right border-b lg:border-b-0 md:border-l border-gray-200">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-bamikaGold/10">
              <FiPhone className="text-2xl text-bamikaGold" />
            </div>

            <div>
              <h3 className="font-bold text-gray-900">شماره تماس</h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                0777841099
                <br />
                0796685153
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-5 p-6 md:p-7 text-right border-b lg:border-b-0 md:border-l border-gray-200">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-bamikaGold/10">
              <FiMail className="text-2xl text-bamikaGold" />
            </div>

            <div>
              <h3 className="font-bold text-gray-900">ایمیل</h3>

              <p className="mt-2 text-sm text-gray-600 break-all">
                info@bamikanero.com
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-center gap-5 p-6 md:p-7 text-right">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-bamikaGold/10">
              <FiClock className="text-2xl text-bamikaGold" />
            </div>

            <div>
              <h3 className="font-bold text-gray-900">ساعات کاری</h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                شنبه تا پنجشنبه
                <br />
                8:00 صبح - 5:00 عصر
              </p>
            </div>
          </div>
        </section>

        {/* ================= Form + Contact ================= */}
        <section
          dir="ltr"
          className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* ================= Form ================= */}
          <div
            dir="rtl"
            className="lg:col-span-2 rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm"
          >
            <div className="mb-8 text-right">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  فرم درخواست مشاوره
                </h2>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bamikaGold/10">
                  <FiMessageSquare className="text-xl text-bamikaGold" />
                </div>
              </div>

              <div className="mt-3 h-1 w-12 rounded-full bg-bamikaGold" />
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-800">
                    نام و نام خانوادگی
                    <span className="text-red-500"> *</span>
                  </label>

                  <div className="relative">
                    <FiUser className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      disabled={isLoading}
                      placeholder="نام و نام خانوادگی"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`w-full rounded-lg border py-3 pr-11 pl-4 text-right outline-none transition
              ${
                errors.name
                  ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-400"
                  : "border-gray-300 focus:border-bamikaGold focus:ring-1 focus:ring-bamikaGold"
              }
              ${isLoading ? "bg-gray-100 cursor-not-allowed" : ""}
            `}
                    />
                  </div>

                  <FieldError id="name-error">{errors.name}</FieldError>
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-800">
                    شماره تماس
                    <span className="text-red-500"> *</span>
                  </label>

                  <div className="relative">
                    <FiPhone className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      type="text"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      disabled={isLoading}
                      placeholder="شماره تماس"
                      dir="ltr"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={
                        errors.phone ? "phone-error" : undefined
                      }
                      className={`w-full rounded-lg border py-3 pr-11 pl-4 text-left outline-none transition
              ${
                errors.phone
                  ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-400"
                  : "border-gray-300 focus:border-bamikaGold focus:ring-1 focus:ring-bamikaGold"
              }
              ${isLoading ? "bg-gray-100 cursor-not-allowed" : ""}
            `}
                    />
                  </div>

                  <FieldError id="phone-error">{errors.phone}</FieldError>
                </div>

                {/* Subject */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-800">
                    موضوع مشاوره
                    <span className="text-red-500"> *</span>
                  </label>

                  <select
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    disabled={isLoading}
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={
                      errors.subject ? "subject-error" : undefined
                    }
                    className={`w-full rounded-lg border px-4 py-3 text-right text-gray-600 outline-none transition
            ${
              errors.subject
                ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-400"
                : "border-gray-300 focus:border-bamikaGold focus:ring-1 focus:ring-bamikaGold"
            }
            ${isLoading ? "bg-gray-100 cursor-not-allowed" : ""}
          `}
                  >
                    <option value="">انتخاب کنید</option>

                    <option value="مشاوره پروژه">مشاوره پروژه</option>

                    <option value="خدمات ریخته گری">خدمات ریخته گری</option>

                    <option value="خدمات صنعتی">خدمات صنعتی</option>

                    <option value="همکاری">همکاری</option>

                    <option value="سایر">سایر</option>
                  </select>

                  <FieldError id="subject-error">{errors.subject}</FieldError>
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-800">
                    ایمیل
                    <span className="text-red-500"> *</span>
                  </label>

                  <div className="relative">
                    <FiMail className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      disabled={isLoading}
                      placeholder="ایمیل"
                      dir="ltr"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                      className={`w-full rounded-lg border py-3 pr-11 pl-4 text-left outline-none transition
              ${
                errors.email
                  ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-400"
                  : "border-gray-300 focus:border-bamikaGold focus:ring-1 focus:ring-bamikaGold"
              }
              ${isLoading ? "bg-gray-100 cursor-not-allowed" : ""}
            `}
                    />
                  </div>

                  <FieldError id="email-error">{errors.email}</FieldError>
                </div>
              </div>

              {/* Message */}
              <div className="mt-5">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-semibold text-gray-800">
                    پیام شما
                    <span className="text-red-500"> *</span>
                  </label>

                  <span className="text-xs text-gray-400">
                    {values.message.length}/500
                  </span>
                </div>

                <textarea
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  disabled={isLoading}
                  rows={6}
                  maxLength={500}
                  placeholder="توضیحات خود را وارد کنید..."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className={`w-full resize-none rounded-lg border px-4 py-3 text-right outline-none transition
          ${
            errors.message
              ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-400"
              : "border-gray-300 focus:border-bamikaGold focus:ring-1 focus:ring-bamikaGold"
          }
          ${isLoading ? "bg-gray-100 cursor-not-allowed" : ""}
        `}
                />

                <FieldError id="message-error">{errors.message}</FieldError>
              </div>

              {/* Success Message */}
              {status === "success" && (
                <div className="mt-5 flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                  <FiCheckCircle className="mt-0.5 shrink-0" />

                  <div>
                    <p className="font-semibold">
                      پیام شما با موفقیت ارسال شد.
                    </p>

                    <p className="mt-1 text-xs text-green-600">
                      کارشناسان ما در اولین فرصت با شما تماس خواهند گرفت.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {status === "error" && (
                <div className="mt-5 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  <FiAlertCircle className="mt-0.5 shrink-0" />

                  <div>
                    <p className="font-semibold">
                      ارسال پیام با مشکل مواجه شد.
                    </p>

                    <p className="mt-1 text-xs text-red-600">
                      لطفاً دوباره تلاش کنید.
                    </p>
                  </div>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-bamikaGold py-4 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? (
                  <>
                    <FiLoader className="animate-spin" />
                    <span>در حال ارسال...</span>
                  </>
                ) : (
                  <>
                    <span>ارسال پیام</span>
                    <FiSend />
                  </>
                )}
              </button>

              <div className="mt-5 flex items-center justify-center gap-2 text-sm text-gray-500">
                <FiHeadphones className="text-bamikaGold" />

                <span>کارشناسان ما در اولین فرصت با شما تماس خواهند گرفت.</span>
              </div>
            </form>
          </div>

          {/* ================= Sidebar ================= */}
          <div
            dir="rtl"
            className="rounded-2xl border border-bamikaGold/40 bg-white p-6 shadow-sm"
          >
            <div className="mb-7 text-right">
              <h2 className="text-2xl font-bold text-gray-900">
                راه‌های ارتباط با ما
              </h2>

              <div className="mt-3 h-1 w-12 rounded-full bg-bamikaGold" />
            </div>

            <div className="space-y-3">
              {/* Fixed Phone */}
              <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-4 transition hover:border-bamikaGold/50">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-bamikaGold text-white">
                  <FiPhone className="text-xl" />
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">تلفن ثابت</h4>

                  <p className="mt-1 text-sm text-gray-600">021-12345678</p>
                </div>
              </div>

              {/* Mobile */}
              <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-4 transition hover:border-bamikaGold/50">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-bamikaGold text-white">
                  <FiPhone className="text-xl" />
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">تلفن همراه</h4>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    0777841099
                    <br />
                    0796685153
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-4 transition hover:border-bamikaGold/50">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-bamikaGold text-white">
                  <FiMail className="text-xl" />
                </div>

                <div className="min-w-0">
                  <h4 className="font-bold text-gray-900">ایمیل</h4>

                  <p className="mt-1 text-sm text-gray-600 break-all">
                    info@bamikanero.com
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-4 transition hover:border-bamikaGold/50">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-bamikaGold text-white">
                  <FiMapPin className="text-xl" />
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">آدرس دفتر</h4>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    قلعه حیدر، تانک تیل آریانا، نارسیده به سرک کمپنی، بالاتر از
                    پل کمپی، ناحیه چهارم، کابل، افغانستان
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-4 transition hover:border-bamikaGold/50">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-bamikaGold text-white">
                  <FiClock className="text-xl" />
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">ساعات کاری</h4>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    شنبه تا پنجشنبه
                    <br />
                    8:00 صبح - 5:00 عصر
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= Map ================= */}
        <section
          dir="ltr"
          className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-6"
        >
          {/* Company Card */}
          <div
            dir="rtl"
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <img
              src={companyImage}
              alt="موقعیت شرکت بامیکا نیرو"
              className="h-44 w-full rounded-xl object-cover"
            />

            <h3 className="mt-4 text-xl font-bold text-gray-900">
              موقعیت شرکت
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              قلعه حیدر، تانک تیل آریانا، نارسیده به سرک کمپنی، بالاتر از پل
              کمپی، ناحیه چهارم، کابل، افغانستان
            </p>

            <button
              type="button"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-bamikaGold py-3 text-white transition hover:opacity-90"
            >
              <FiMapPin />
              <span>مشاهده در نقشه</span>
            </button>
          </div>

          {/* Google Map */}
          <div className="lg:col-span-3 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <iframe
              title="موقعیت شرکت بامیکا نیرو"
              className="h-[350px] w-full md:h-full"
              src="https://maps.google.com/maps?q=Kabul&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
