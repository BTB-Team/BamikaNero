import {
  FiAward,
  FiBriefcase,
  FiCheckCircle,
  FiClock,
  FiCpu,
  FiEye,
  FiMail,
  FiMapPin,
  FiPhone,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

import contactBanner from "../../assets/images/contact-banner.png";
import companyImage from "../../assets/images/company.png";

import imageB from "../../assets/image/imageb.webp";
import imageC from "../../assets/image/imagec.webp";
import imageD from "../../assets/image/imaged.webp";
import imageE from "../../assets/image/imageE.webp";
import imageF from "../../assets/image/imagef.webp";

import {Link} from "react-router-dom";

const stats = [
  {
    value: "30+",
    title: "کارمند متخصص",
    description: "نیروی مجرب و متعهد",
    icon: FiUsers,
  },
  {
    value: "4+",
    title: "سال تجربه",
    description: "تجربه در صنعت ریخته‌گری",
    icon: FiClock,
  },
  {
    value: "5M",
    title: "افغانی سرمایه",
    description: "سرمایه ابتدایی شرکت",
    icon: FiTrendingUp,
  },
  {
    value: "200+",
    title: "فرصت شغلی",
    description: "اشتغال مستقیم و غیرمستقیم",
    icon: FiBriefcase,
  },
];

const values = [
  {
    title: "کیفیت",
    description:
      "ارائه خدمات و محصولات با بالاترین کیفیت و رعایت معیارهای فنی در تمام مراحل کاری.",
    icon: FiAward,
  },
  {
    title: "صداقت",
    description: "صداقت و شفافیت در تمام ارتباطات، معاملات و فعالیت‌های شرکت.",
    icon: FiShield,
  },
  {
    title: "مشتری‌مداری",
    description: "رضایت مشتریان اولویت اصلی ما در هر تصمیم و هر اقدام است.",
    icon: FiUsers,
  },
  {
    title: "نوآوری",
    description:
      "بهبود مستمر و استفاده از روش‌ها و فناوری‌های جدید برای ارائه خدمات بهتر.",
    icon: FiCpu,
  },
  {
    title: "تعهد",
    description:
      "پایبندی به اصول حرفه‌ای و انجام مسئولیت‌ها با دقت و مسئولیت‌پذیری.",
    icon: FiCheckCircle,
  },
];

const capabilities = [
  "ریخت قطعات چدنی",
  "ریخت قطعات آهنی",
  "ریخت قطعات المونیمی",
  "تولید پمپ آب",
  "تولید سری چری و بخاری",
  "تولید منهول و قیچی",
  "تولید قطعات گیربکس و ماشین‌آلات",
];

const team = [
  {
    name: "سید محمد علوی",
    role: "رئیس شرکت",
    image: imageB,
  },
  {
    name: "محمد رضایی",
    role: "معاون شرکت",
    image: imageD,
  },
  {
    name: "سید حمید حسینی",
    role: "انجنیر تخنیکی",
    image: imageC,
  },
  {
    name: "سید محمدحسین ضیایی",
    role: "مدیر مالی و اداری",
    image:imageE,
  },
  {
    name: "سید احمد حسینی",
    role: "مدیر خریداری",
    image: imageF,
  },
];

export default function About() {
  return (
    <main dir="rtl" className="bg-gray-50 text-gray-900">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <img
          src={contactBanner}
          alt="شرکت ریخته‌گری بامیکا نیرو"
          className="h-[260px] md:h-[330px] w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-l from-white via-white/75 to-transparent" />

        <div className="absolute inset-0">
          <div className="max-w-7xl mx-auto h-full px-6 md:px-12 flex items-center">
            <div className="w-full md:w-1/2 text-right">
              <h1 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
                درباره شرکت
              </h1>

              <div className="w-12 h-[3px] bg-[#c88a16] mt-5 mb-4" />

              <p className="text-gray-700 text-sm md:text-lg leading-8 max-w-xl">
                تجربه، کیفیت و تعهد در صنعت ریخته‌گری
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT COMPANY ================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Images - LEFT */}
            <div className="order-1 lg:order-1">
              <span className="text-[#c88a16] font-semibold">درباره شرکت</span>

              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                شرکت ریخته‌گری بامیکا نیرو
              </h2>

              <div className="w-14 h-[3px] bg-[#c88a16] mb-7" />

              <p className="text-gray-600 leading-8 mb-5">
                شرکت ریخته‌گری بامیکا نیرو در سال ۱۴۰۲ هجری شمسی در وزارت صنعت و
                تجارت و ریاست مرکزی ثبت گردیده و در بخش ریخت قطعات چدنی، آهنی و
                المونیمی فعالیت می‌نماید.
              </p>

              <p className="text-gray-600 leading-8 mb-5">
                این شرکت با هدف تولید قطعات مورد نیاز بازار داخلی و فراهم ساختن
                زمینه رشد صنعت و ساخت‌وساز در کشور تأسیس گردیده است. بامیکا نیرو
                تلاش دارد با استفاده از نیروی متخصص و تجهیزات مناسب، محصولات
                باکیفیت و مطابق نیاز مشتریان ارائه نماید.
              </p>

              <p className="text-gray-600 leading-8">
                هدف ما سهم‌گیری در خودکفایی کشور، ایجاد فرصت‌های کاری برای
                هموطنان و کمک به رشد اقتصادی افغانستان از طریق توسعه صنعت
                ریخته‌گری و تولید داخلی است.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-[#c88a16]/10 flex items-center justify-center text-[#c88a16]">
                    <FiCheckCircle size={20} />
                  </span>
                  <span className="font-medium">کیفیت و دقت در تولید</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-[#c88a16]/10 flex items-center justify-center text-[#c88a16]">
                    <FiCheckCircle size={20} />
                  </span>
                  <span className="font-medium">نیروی متخصص و مجرب</span>
                </div>
              </div>
            </div>

            {/* Content - RIGHT */}
            <div className="relative order-2 lg:order-2 min-h-[430px]">
              <div className="absolute top-0 left-0 w-[100%] h-full overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={companyImage}
                  alt="کارخانه بامیکا نیرو"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-14 left-8 bg-[#c88a16] text-white rounded-xl px-6 py-4 shadow-lg">
                <p className="text-2xl font-bold">1402</p>
                <p className="text-sm mt-1">سال تأسیس شرکت</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`p-6 md:p-8 text-center ${
                    index !== stats.length - 1
                      ? "border-l border-gray-200 border-b lg:border-b-0"
                      : ""
                  }`}
                >
                  <div className="mx-auto w-14 h-14 rounded-full bg-[#c88a16]/10 flex items-center justify-center text-[#c88a16]">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold mt-4">
                    {item.value}
                  </h3>

                  <p className="font-semibold mt-2">{item.title}</p>

                  <p className="text-sm text-gray-500 mt-2">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-7">
            {/* Mission */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8 md:p-10">
              <div className="w-14 h-14 rounded-xl bg-[#c88a16]/10 text-[#c88a16] flex items-center justify-center mb-6">
                <FiTarget size={28} />
              </div>

              <h2 className="text-2xl font-bold mb-4">ماموریت ما</h2>

              <p className="text-gray-600 leading-8">
                ارائه خدمات معیاری و باکیفیت در بخش ریخته‌گری قطعات چدنی، آهنی و
                المونیمی، با استفاده از نیروی متخصص و رعایت اصول فنی، به‌منظور
                سهم‌گیری مؤثر در توسعه زیرساخت‌ها و صنعت کشور.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-2xl bg-[#151515] text-white p-8 md:p-10">
              <div className="w-14 h-14 rounded-xl bg-[#c88a16]/20 text-[#d99a25] flex items-center justify-center mb-6">
                <FiEye size={28} />
              </div>

              <h2 className="text-2xl font-bold mb-4">چشم‌انداز ما</h2>

              <p className="text-gray-300 leading-8">
                تبدیل شدن به یکی از شرکت‌های پیشرو و معتبر در عرصه ریخته‌گری
                افغانستان و ارائه محصولات باکیفیت که بتواند بخشی از نیاز بازار
                داخلی را تأمین کرده و به خودکفایی کشور کمک نماید.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="text-[#c88a16] font-semibold">اصول کاری ما</span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">ارزش‌های ما</h2>

            <div className="w-12 h-[3px] bg-[#c88a16] mx-auto mt-5" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#c88a16]/10 text-[#c88a16] flex items-center justify-center">
                    <Icon size={27} />
                  </div>

                  <h3 className="font-bold text-lg mt-5 mb-3">{item.title}</h3>

                  <p className="text-sm text-gray-500 leading-7">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#c88a16] font-semibold">
                توانمندی‌های ما
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                تولید قطعات مورد نیاز بازار داخلی
              </h2>

              <div className="w-14 h-[3px] bg-[#c88a16] mb-7" />

              <p className="text-gray-600 leading-8 mb-7">
                شرکت بامیکا نیرو با تمرکز بر صنعت ریخته‌گری، توانایی تولید انواع
                قطعات مورد نیاز در بخش‌های مختلف را داشته و تلاش می‌کند محصولات
                باکیفیت را در زمان مناسب در اختیار مشتریان قرار دهد.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {capabilities.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <FiCheckCircle
                      className="text-[#c88a16] shrink-0"
                      size={20}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={companyImage}
                alt="توانمندی‌های شرکت ریخته‌گری بامیکا نیرو"
                className="w-full h-[380px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="text-[#c88a16] font-semibold">اعضای شرکت</span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">تیم مدیریت</h2>

            <div className="w-12 h-[3px] bg-[#c88a16] mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-center p-5">
                  <h3 className="font-bold text-base">{member.name}</h3>

                  <p className="text-[#c88a16] text-sm mt-2">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="rounded-2xl bg-gradient-to-l from-gray-50 to-white border border-gray-100 p-7 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-right">
              <h2 className="text-2xl md:text-3xl font-bold">
                همکاری با بامیکا نیرو
              </h2>

              <p className="text-gray-500 mt-3">
                ما آماده همکاری در پروژه‌های صنعتی شما هستیم.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-5 mt-5 text-sm text-gray-600">
                <span className="flex items-center gap-2">
                  <FiPhone className="text-[#c88a16]" />
                  0777841099
                </span>

                <span className="flex items-center gap-2">
                  <FiMail className="text-[#c88a16]" />
                  ziayeeniquly@gmail.com
                </span>

                <span className="flex items-center gap-2">
                  <FiMapPin className="text-[#c88a16]" />
                  سرک کابل قندهار نارسیده به قلعه حیدر خان
                </span>
              </div>
            </div>

            <Link
              to="/contact"
              type="button"
              className="shrink-0 inline-flex items-center gap-2 bg-[#c88a16] hover:bg-[#b77b0f] text-white px-7 py-3 rounded-lg transition-colors duration-300"
            >
              تماس با ما
              <FiPhone size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}