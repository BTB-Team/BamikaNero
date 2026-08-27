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
      className="relative w-full overflow-hidden bg-[#F7F1E6] py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 xl:gap-16">
          {/* =====================================================
              RIGHT: IMAGE — dots (top-right) and the teal square
              (bottom-right) both sit on the same side now
              ===================================================== */}
          <div className="relative w-full lg:w-[34%] shrink-0">
            {/* GRAY DOTS PATTERN */}
            <div
              className="
                hidden
                lg:grid
                absolute
                -top-4
                -right-20
                grid-cols-5
                gap-[6px]
                z-20
                pointer-events-none
              "
            >
              {Array.from({ length: 25 }).map((_, i) => (
                <span
                  key={i}
                  className="w-[3px] h-[3px] rounded-full bg-gray-300/80"
                />
              ))}
            </div>

            {/* TEAL ACCENT behind image — taller/narrower rectangle
                instead of a small near-square block */}
            <div
              className="
                absolute
                -bottom-10
                -right-6
                sm:-right-14
                w-[30%]
                h-[40%]
                rounded-[0.84rem]
                bg-[#004545]
                z-0
              "
            />

            {/* IMAGE */}
            <div
              className="
                relative
                z-10
                h-[260px]
                sm:h-[300px]
                lg:h-[320px]
                xl:h-[350px]
                overflow-hidden
                rounded-xl
              "
            >
              <img
                src={aboutImage}
                alt="صنعت ریخته‌گری"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>
          </div>

          {/* =====================================================
              MIDDLE: TEXT
              ===================================================== */}
          <div className="w-full lg:w-[30%] text-right">
            {/* SMALL LABEL */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-bamikaGold" />
              <span className="text-[#8A6A19] text-xs font-medium">
                درباره بامیکا نیرو
              </span>
            </div>

            {/* HEADING */}
            <h2 className="font-Estedad font-black text-2xl sm:text-3xl lg:text-[2rem] xl:text-[2.2rem] leading-[1.7] text-[#1E1E1E] mb-5 md:text-5xl lg:leading-[1.6] xl:leading-[1.4]">
              پیشرو در صنعت ریخته‌گری
              <br />
              <span className="text-bamikaGold">با تعهد به کیفیت</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-sm leading-7 mb-7 max-w-xl">
              بامیکا نیرو با بهره‌گیری از دانش فنی، تجهیزات مدرن و نیروی متخصص،
              در زمینه تولید قطعات ریخته‌گری فعالیت می‌کند و همواره کیفیت و
              رضایت مشتری را در اولویت قرار داده است.
            </p>

            {/* BUTTON */}
            <Link
              to="/about"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                border
                border-gray-300
                bg-white
                text-[#1E1E1E]
                px-6
                py-3
                rounded-md
                text-sm
                font-medium
                hover:border-bamikaGold
                hover:text-bamikaGold
                transition-all
                duration-300
              "
            >
              بیشتر درباره ما
              <HiArrowLeft
                size={16}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            </Link>
          </div>

          {/* =====================================================
              LEFT: STATS — 2x2 grid; there isn't enough width in
              this 3-column layout for 4-across without cramping
              ===================================================== */}
          <div className="w-full lg:flex-1 relative">
            {/* STATS GRID */}
            <div
              className="
                relative
                z-10
                grid
                grid-cols-2
                gap-3
                sm:gap-4
              "
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={index}
                    className="
                      group
                      bg-white
                      border
                      border-gray-100
                      rounded-lg
                      px-4
                      py-5
                      sm:px-5
                      sm:py-6
                      shadow-sm
                      hover:shadow-md
                      hover:-translate-y-1
                      transition-all
                      duration-300
                      text-right
                    "
                  >
                    {/* ICON */}
                    <div
                      className="
                        w-10
                        h-10
                        rounded-lg
                        bg-[#F7F1E6]
                        flex
                        items-center
                        justify-center
                        mb-4
                        text-[#004545]
                        group-hover:bg-[#004545]
                        group-hover:text-white
                        transition-all
                        duration-300
                      "
                    >
                      <Icon size={21} />
                    </div>

                    {/* TITLE */}
                    <p className="text-gray-500 text-[11px] mb-2">
                      {stat.title}
                    </p>

                    {/* NUMBER */}
                    <div className="font-Estedad font-black text-lg sm:text-xl text-[#1E1E1E] mb-1">
                      {stat.number}
                    </div>

                    {/* DESCRIPTION */}
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
