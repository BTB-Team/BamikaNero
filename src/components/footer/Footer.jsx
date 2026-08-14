import Logo from "../../assets/logo.jpg";
import {Link} from "react-router-dom";
import {FiMapPin, FiPhone, FiMail, FiClock} from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer dir="rtl" className="w-full bg-[#080808] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-4 lg:px-8">
        {/* ================= Main Footer ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* ================= اطلاعات تماس ================= */}
          <div className="px-0 py-4 lg:border-l lg:border-white/10 lg:pl-10">
            <h3 className="mb-5 text-base font-bold text-white">
              اطلاعات تماس
            </h3>

            <div className="mb-4 h-[2px] w-12 bg-[#D4A72C]" />

            <div className="space-y-4 text-sm text-slate-400">
              {/* Address */}
              <div className="flex items-start gap-3">
                <FiMapPin size={19} className="mt-1 shrink-0 text-[#D4A72C]" />

                <p className="leading-6">
                  سرک کابل قندهار نارسیده به قلعه حیدر خان
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <FiPhone size={18} className="shrink-0 text-[#D4A72C]" />

                <p dir="ltr">
                  {" "}
                  <a
                    href="tel:0777841099"
                    className="transition-colors hover:text-[#D4A72C] mr-3"
                  >
                    0777841099
                  </a>
                  <a
                    href="tel:0796685153"
                    className="transition-colors hover:text-[#D4A72C]"
                  >
                    0796685153
                  </a>
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <FiMail size={18} className="shrink-0 text-[#D4A72C]" />

                <a
                  href="mailto:ziayeeniquly@gmail.com"
                  dir="ltr"
                  className="break-all transition-colors hover:text-[#D4A72C]"
                >
                  ziayeeniquly@gmail.com
                </a>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3">
                <FiClock size={18} className="mt-1 shrink-0 text-[#D4A72C]" />

                <p className="leading-6">
                  ساعات کاری: شنبه تا پنجشنبه
                  <br />۸ صبح تا ۵ عصر
                </p>
              </div>
            </div>
          </div>

          {/* ================= خدمات ================= */}
          <div className="border-t border-white/10 px-0 py-4 md:border-t-0 lg:border-l lg:border-white/10 lg:px-10">
            <h3 className="mb-5 text-base font-bold text-white">خدمات</h3>

            <div className="mb-4 h-[2px] w-12 bg-[#D4A72C]" />

            <ul className="space-y-4 text-sm text-slate-400">
              <li className="transition-colors hover:text-[#D4A72C]">
                ریخته‌گری قطعات صنعتی
              </li>

              <li className="transition-colors hover:text-[#D4A72C]">
                ماشین‌کاری CNC
              </li>

              <li className="transition-colors hover:text-[#D4A72C]">
                طراحی و مهندسی
              </li>

              <li className="transition-colors hover:text-[#D4A72C]">
                عملیات حرارتی
              </li>

              <li className="transition-colors hover:text-[#D4A72C]">
                کنترل کیفیت
              </li>
            </ul>
          </div>

          {/* ================= دسترسی سریع ================= */}
          <div className="border-t border-white/10 px-0 py-4 md:border-t-0 md:px-10 lg:border-l lg:border-white/10">
            <h3 className="mb-5 text-base font-bold text-white">دسترسی سریع</h3>

            <div className="mb-4 h-[2px] w-12 bg-[#D4A72C]" />

            <ul className="space-y-4 text-sm text-white">
              <li>
                <Link to="/" className="transition-colors hover:text-[#D4A72C]">
                  صفحه اصلی
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="transition-colors hover:text-[#D4A72C]"
                >
                  درباره ما
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="transition-colors hover:text-[#D4A72C]"
                >
                  خدمات
                </Link>
              </li>

              <li>
                <Link
                  to="/project"
                  className="transition-colors hover:text-[#D4A72C]"
                >
                  پروژه‌ها
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="transition-colors hover:text-[#D4A72C]"
                >
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= شرکت ================= */}
          <div className="border-t border-white/10 px-0 py-4 md:border-t-0 md:px-10">
            <div className="flex items-start gap-3">
              {/* Logo */}
              <div className="flex h-[52px] w-[62px] shrink-0 items-center  mt-2">
                <img src={Logo} alt="بامیکا نیرو" className="h-full w-full " />
              </div>

              {/* Company Name */}
              <div className="leading-tight">
                <h2 className="text-xl font-bold text-white">بامیکا نیرو</h2>

                <p className="mt-1 text-[10px] text-slate-400">
                  شرکت ریخته‌گری بامیکا نیرو
                </p>

                <p className="mt-1 text-[8px] text-slate-500">
                  Bamika Nero Casting Company
                </p>
              </div>
            </div>

            <p className="mt-6 w-full md:max-w-sm text-sm leading-7 text-slate-400">
              شرکت ریخته‌گری بامیکا نیرو با بهره‌گیری از تجهیزات پیشرفته و نیروی
              متخصص، در زمینه تولید و ارائه محصولات ریخته‌گری و خدمات صنعتی
              فعالیت می‌کند.
            </p>
          </div>
        </div>

        {/* ================= Bottom ================= */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 text-xs font-light text-slate-300 sm:flex-row sm:items-center sm:justify-between">
            {/* سمت راست */}
            <div className=" text-center md:text-right">
              <p>
                طراحی و توسعه فنی:
                <span className="mr-1 font-medium text-slate-400">
                  تیم فرانت‌اند BTB
                </span>
              </p>
            </div>

            {/* سمت چپ */}
            <div className=" text-center md:text-right sm:text-left">
              <p>
                © {currentYear} شرکت ریخته‌گری بامیکا نیرو. تمام حقوق مادی و
                معنوی این وب‌سایت محفوظ است.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
