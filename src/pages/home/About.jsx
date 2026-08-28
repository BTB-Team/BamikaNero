import { Link } from "react-router-dom";
import {
  HiOutlineCalendar,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiOutlineOfficeBuilding,
  HiArrowLeft,
} from "react-icons/hi";

import aboutImage from "../../assets/images/AboutImage.png";

const stats = [
  {
    icon: HiOutlineCalendar,
    number: "۱۴+",
    title: "سال‌ها تجربه",
    description: "از آغاز فعالیت",
  },
  {
    icon: HiOutlineShieldCheck,
    number: "ISO 9001",
    title: "گواهی‌نامه کیفیت",
    description: "استاندارد بین‌المللی",
  },
  {
    icon: HiOutlineUserGroup,
    number: "۳۰+",
    title: "تیم متخصص",
    description: "نیروی مجرب",
  },
  {
    icon: HiOutlineOfficeBuilding,
    number: "۱۰۰+",
    title: "پروژه موفق",
    description: "تا به امروز",
  },
];

export default function AboutStats() {
  return (
    <section
      dir="rtl"
      className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-18"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-14 lg:gap-12 xl:gap-16">
          {/* IMAGE */}
          <div className="relative w-full lg:w-[34%] shrink-0">
            <div className="hidden lg:grid absolute -top-4 -right-20 grid-cols-5 gap-[6px] z-20 pointer-events-none">
              {Array.from({ length: 25 }).map((_, i) => (
                <span
                  key={i}
                  className="w-[9px] h-[9px] rounded-full bg-gray-300/80"
                />
              ))}
            </div>

            <div className="absolute -bottom-14 -right-4 sm:-right-20 w-[33%] h-[23%] rounded-[0.84rem] bg-[#004545] z-0" />

            <div className="relative z-10 aspect-[7/10] w-full overflow-hidden rounded-[8%] border-[10px] border-white border-lg ">
              <img
                src={aboutImage}
                alt="صنعت ریخته‌گری"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>
          </div>

          {/* TEXT */}
          <div className="w-full lg:w-[30%] text-right pt-4 sm:pt-6 lg:pt-0">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-bamikaGold" />
              <span className="text-[#8A6A19] text-xs font-medium">
                درباره بامیکا نیرو
              </span>
            </div>

            <h2 className="font-Estedad font-black text-2xl sm:text-3xl lg:text-[2rem] xl:text-[2.2rem] leading-[1.7] text-[#1E1E1E] mb-5 md:text-5xl lg:leading-[1.6] xl:leading-[1.4]">
              پیشرو در صنعت ریخته‌گری
              <br />
              <span className="text-bamikaGold">با تعهد به کیفیت</span>
            </h2>

            <p className="text-gray-600 text-sm leading-7 mb-7 max-w-xl">
              بامیکا نیرو با بهره‌گیری از دانش فنی، تجهیزات مدرن و نیروی متخصص،
              در زمینه تولید قطعات ریخته‌گری فعالیت می‌کند و همواره کیفیت و
              رضایت مشتری را در اولویت قرار داده است.
            </p>

            <Link
              to="/about"
              className="group inline-flex items-center justify-center gap-2 border border-gray-300 bg-white text-[#1E1E1E] px-6 py-3 rounded-md text-sm font-medium hover:border-bamikaGold hover:text-bamikaGold transition-all duration-300"
            >
              بیشتر درباره ما
              <HiArrowLeft
                size={16}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            </Link>
          </div>

          {/* STATS */}
          <div className="w-full lg:flex-1 pt-4 sm:pt-6 lg:pt-0">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white border border-gray-100 rounded-lg px-4 py-5 sm:px-5 sm:py-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-right"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center mb-4 text-bamikaGold group-hover:bg-bamikaGold group-hover:text-white transition-all duration-300">
                      <Icon size={21} />
                    </div>
                    <p className="text-gray-500 text-[11px] mb-2">
                      {stat.title}
                    </p>
                    <div className="font-Estedad font-black text-lg sm:text-xl text-[#1E1E1E] mb-1">
                      {stat.number}
                    </div>
                    <p className="text-gray-400 text-[10px] leading-5">
                      {stat.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
