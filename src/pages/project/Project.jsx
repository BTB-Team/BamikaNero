import {
  FiHome,
  FiCalendar,
  FiMapPin,
  FiSettings,
  FiChevronRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import img01 from "./assets/01.PNG";
import img02 from "./assets/02.PNG";
import img03 from "./assets/03.PNG";
import img04 from "./assets/04.png";
import Bg from "./assets/06.png";


// data
const project = [
  {
    id: "project-1",
    title: "تأمین آهن آلات شهرک صنعتی",
    location: "قندهار",
    year: "۱۴۰۳",
    type: "سازه فلزی",
    category: "سالن صنعتی",
    image: img01,
    description:
      "این پروژه شامل تأمین و اجرای سازه‌های فلزی مورد نیاز برای توسعه و تجهیز شهرک صنعتی می‌باشد.",
  },

  {
    id: "project-2",
    title: "سیلوهای ذخیره غلات",
    location: "مزار شریف",
    year: "۱۴۰۳",
    type: "سازه فلزی",
    category: "سیلو ذخیره",
    image: img02,
    description:
      "این پروژه با هدف ایجاد ظرفیت مناسب برای ذخیره‌سازی غلات و با استفاده از سازه‌های مقاوم اجرا شده است.",
  },

  {
    id: "project-3",
    title: "کارخانه تولید قطعات صنعتی",
    location: "کابل",
    year: "۱۴۰۲",
    type: "سازه فلزی",
    category: "کارخانه",
    image: img03,
    description:
      "اجرای سازه فلزی و بخش‌های اصلی کارخانه تولید قطعات صنعتی از جمله بخش‌های اصلی این پروژه بوده است.",
  },
];

export default function Portfolio() {
  return (
    <main
      dir="rtl"
      className="w-full overflow-hidden bg-white"
    >
      
      <section
  className="relative w-full overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: `url(${Bg})` }}
>
  <div className="absolute inset-0 bg-white/60" />
  <div className="relative z-10 mx-auto w-full px-5 sm:px-8 lg:px-12">
    <div
      className="
        grid
        min-h-[330px]
        grid-cols-1
        items-center
        sm:min-h-[230px]
        lg:h-[240px]
        lg:min-h-0
        lg:grid-cols-2
      "
    >
      {/* TEXT */}
      <div
        className="
          mr-0
          py-4
          text-right
          sm:mr-20
          lg:py-6
        "
      >
        <h1
          className="
            font-Estedad
            text-[30px]
            font-bold
            leading-[1.5]
            text-bamikaBlack
            sm:text-[38px]
            lg:text-[46px]
          "
        >
          پروژه‌های <span className="text-bamikaGold">ما</span>
        </h1>

        <p
          className="
            mt-3
            max-w-[380px]
            font-yekan
            text-[15px]
            leading-[2.1]
            text-[#777777]
            sm:mt-4
            sm:text-[14px]
            lg:text-[15px]
          "
        >
          نمونه‌ای از پروژه‌های موفق اجرا شده توسط شرکت فراز صنعت در زمینه
          طراحی، ساخت و نصب سازه‌های صنعتی
        </p>

      
        <div className="mt-4 flex items-center gap-3">
          <Link
            to="/"
            className="
              font-yekan
              text-[14px]
              font-bold
              transition-colors
              duration-300
              hover:text-bamikaGold
            "
          >
            خانه
          </Link>

          <FiChevronRight
            size={14}
            strokeWidth={2}
          />

          <Link
            to="/project"
            className="
              font-yekan
              text-[14px]
              font-bold
              text-bamikaGold
              transition-colors
              duration-300
            "
          >
            پروژه‌ها
          </Link>
        </div>
      </div>

      {/* IMAGE */}
      <div
    className="
  relative
  hidden
  lg:block
  lg:h-[240px]
  lg:-ml-12
  lg:mr-0

  
"
      >
        <img
          src={img04}
          alt="Industrial Project"
          className="
            h-full
            w-full
            object-cover
            object-center
            opacity-80
          "
        />
      </div>
    </div>
  </div>
</section>

      {/*   PROJECT CARDS */}
      <section className="mx-auto max-w-[1160px] px-5 py-10 sm:px-8 lg:py-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {project.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              state={{ project }}
              className="
                group
                block
                overflow-hidden
                rounded-[16px]
                border
                border-[#E7E7E7]
                bg-white
              "
            >
              {/* Card Image */}
              <div className="relative h-[220px] w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="px-5 pb-5 pt-4 ">
                <h3
                  className="
                    font-Estedad
                    text-[17px]
                    font-bold
                    leading-[1.8]
                    text-[#111111]
                  "
                >
                  {project.title}
                </h3>

                {/* Location */}
                <div className="mt-2 flex w-full items-center justify-center gap-2 ">
                  <FiMapPin
                    size={19}
                    className="shrink-0 text-bamikaGold"
                  />

                  <span className="font-yekan text-[13px] text-[#777777]">
                    {project.location}
                  </span>
                </div>
             
                <div className="my-4 h-px w-full bg-[#ECECEC] " />

                {/* Project Information */}
                <div className="flex items-center justify-between gap-2 font-Estedad font-bold">
                  {/* Category */}
                  <div className="flex min-w-0 items-center gap-2">
                    <FiHome
                      size={20}
                      className="shrink-0 text-bamikaGold"
                    />

                    <span className="truncate font-yekan text-[12px] text-[#777777]">
                      {project.category}
                    </span>
                  </div>

                  {/* Type */}
                  <div className="flex min-w-0 items-center gap-2">
                    <FiSettings
                      size={20}
                      className="shrink-0 text-bamikaGold"
                    />

                    <span className="truncate font-yekan text-[12px] text-[#777777]">
                      {project.type}
                    </span>
                  </div>

                  {/* Year */}
                  <div className="flex shrink-0 items-center gap-2">
                    <FiCalendar
                      size={20}
                      className="shrink-0 text-bamikaGold"
                    />

                    <span className="font-yekan text-[12px] text-[#777777]">
                      {project.year}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}