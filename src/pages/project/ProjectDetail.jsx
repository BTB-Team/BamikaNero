import React from "react";
import {
  FiArrowLeft,
  FiMapPin,
  FiHome,
  FiBriefcase,
  FiHeadphones,
} from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import img01 from "./assets/01.PNG";
import img02 from "./assets/02.PNG";
import img03 from "./assets/03.PNG";
import img05 from "./assets/05.PNG";

// PROJECT DATA
const projects = [
  {
    id: "project-1",
    title: "تأمین آهن آلات شهرک صنعتی",
    location: "قندهار",
    year: "۱۴۰۳",
    type: "سازه فلزی",
    category: "پروژه صنعتی",
    image: img01,
    description:
      "این پروژه شامل تأمین و اجرای سازه‌های فلزی مورد نیاز برای توسعه و تجهیز شهرک صنعتی می‌باشد. تمام مراحل پروژه با استفاده از استانداردهای فنی و کیفیت مناسب اجرا شده است.",
  },

  {
    id: "project-2",
    title: "سیلوهای ذخیره غلات",
    location: "مزار شریف",
    year: "۱۴۰۳",
    type: "سیلو ذخیره",
    category: "پروژه صنعتی",
    image: img02,
    description:
      "این پروژه با هدف ایجاد ظرفیت مناسب برای ذخیره‌سازی غلات و با استفاده از سازه‌های مقاوم و تجهیزات مورد نیاز اجرا شده است.",
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

// PROJECT DETAIL
export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  return (
    <main
      dir="rtl"
      className="w-full overflow-hidden bg-white"
    >
    
      <section
        className="relative h-[60px] w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${img05})`,
        }}
      >
 <div
  className="
    relative
    z-10
    mx-auto
    flex
    h-full
    max-w-[1200px]
    items-center
    px-5
    sm:px-8
  "
>
  <div
    className="
      mr-0
      flex
      items-center
      gap-5
      font-bold
      lg:mr-[-130px]
    "
  >
    <FiHome
      size={18}
      className="shrink-0 text-bamikaGold"
    />

    <Link
      to="/"
      className="font-yekan text-[13px] text-[#666666]"
    >
      خانه
    </Link>

    <span className="text-[#999999]">/</span>

    <Link
      to="/project"
      className="font-yekan text-[13px] text-[#666666]"
    >
      پروژه‌ها
    </Link>

    <span className="text-[#999999]">/</span>

    <span className="font-yekan text-[13px] font-medium text-bamikaGold">
      جزئیات پروژه
    </span>
  </div>
</div>
      </section>

    
      <section
        className="
          relative
          mx-auto
          max-w-[1200px]
          overflow-hidden
          px-5
          pb-9
          pt-11
          sm:px-8
          lg:pt-14
        "
      >
        <div className="relative z-10 text-center">
          {/* Title */}
          <h1
            className="
              font-Estedad
              text-[27px]
              font-bold
              leading-[1.4]
              text-[#101010]
              sm:text-[34px]
              lg:text-[30px]
            "
          >
            {project.title}
          </h1>

          {/* Gold Decoration */}
          <div className="mx-auto mt-1 flex items-center justify-center gap-2">
            <span className="h-[2px] w-[58px] bg-gradient-to-r from-bamikaGold to-bamikaGold/20" />
            <span className="h-[6px] w-[6px] rotate-45 bg-bamikaGold" />
            <span className="h-[2px] w-[58px] bg-gradient-to-r from-bamikaGold/20 to-bamikaGold" />
          </div>

          {/* Location */}
          <div className="relative z-10 mt-5 flex items-center justify-center gap-2">
            <span className="font-yekan text-[14px] text-[#666666]">
              {project.location}
            </span>
            <FiMapPin
              size={21}
              className="text-bamikaGold"
            />
          </div>
        </div>
      </section>

      {/*  MAIN PROJECT IMAGE */}
      <section className="mx-auto max-w-[1000px] px-5 sm:px-8">
        <div
          className="
            relative
            overflow-hidden
            rounded-[20px]
            border-2
            border-bamikaGold
            bg-white
            shadow-[0_12px_35px_rgba(0,0,0,0.07)]
          "
        >
          <img
            src={project.image}
            alt={project.title}
            className="
              h-[300px]
              w-full
              object-cover
              sm:h-[400px]
              lg:h-[400px]
            "
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

          {/* Category Badge */}
          <div
            className="
              absolute
              left-3
              top-3
              flex
              items-center
              gap-2
              rounded-[9px]
              bg-bamikaGold
              px-4
              py-2.5
              shadow-lg

              sm:left-6
              sm:top-6
            "
          >
            <FiBriefcase
              size={18}
              className="shrink-0 text-white"
            />

            <span className="font-yekan text-[12px] font-semibold text-white">
              {project.category}
            </span>
          </div>
        </div>
      </section>

    

      {/* PROJECT_DETAILS / CTA */}
      <section className="mx-auto max-w-[1000px] px-5 pb-10 pt-8 sm:px-8 ">
        <div
          className="
            overflow-hidden
            rounded-[18px]
            border
            border-[#E2D09B]
            bg-[#FCFAF4]
            p-5
            sm:p-7
            lg:p-8
          "
        >
          <div
            className="
              grid
              grid-cols-1
              gap-8
              lg:grid-cols-[1fr_auto_1fr]
              lg:items-center
              lg:[direction:ltr]
            "
          >
            {/* BUTTONS */}
            <div
              className="
                order-2
                flex
                justify-center
                lg:order-1
                lg:justify-start
                lg:translate-x-20
              "
            >
              <div className="flex w-full max-w-[250px] flex-col gap-3 ">
                {/* CONTACT */}
                <Link
                  to="/contact"
                  className="
                    flex
                    h-[50px]
                    min-w-0
                    items-center
                    justify-center
                    gap-4
                    rounded-[8px]
                    border
                    border-bamikaGold
                    bg-white
                    px-5
                    [direction:rtl]
                  "
                >
                  <span className="font-Estedad font-bold text-[13px] font-medium text-[#333333]">
                    تماس با ما
                  </span>

                  <FiArrowLeft
                    size={19}
                    className="shrink-0 text-bamikaGold"
                  />
                </Link>

                {/* CONSULTATION */}
                <Link
                  to="/contact"
                  className="
                    flex
                    h-[50px]
                    min-w-0
                    items-center
                    justify-center
                    gap-4
                    rounded-[8px]
                    bg-bamikaGold
                    px-5
                    [direction:rtl]
                  "
                >
                  <span className="font-Estedad font-boldtext-[13px] font-semibold text-white">
                    درخواست مشاوره
                  </span>

                  <FiArrowLeft
                    size={19}
                    className="shrink-0 text-white"
                  />
                </Link>
              </div>
            </div>

            {/*  CENTER DECORATIVE LINE */}
            <div
              className="
                relative
                order-3
                hidden
                h-[110px]
                w-[30px]
                items-center
                justify-center
                lg:order-2
                lg:flex
              "
            >
              {/* VERTICAL LINE */}
              <div
                className="
                  absolute
                  left-1/2
                  top-0
                  h-full
                  w-px
                  -translate-x-1/2
                  bg-bamikaGold/15
                "
              />

              {/* TOP GLOW */}
              <div
                className="
                  absolute
                  left-1/2
                  top-[20px]
                  h-[30px]
                  w-[30px]
                  -translate-x-1/2
                  rounded-full
                  bg-bamikaGold/5
                  blur-md
                "
              />

              {/* CENTER DIAMOND */}
              <div
                className="
                  relative
                  z-10
                  h-[7px]
                  w-[7px]
                  rotate-45
                  bg-bamikaGold/45
                "
              />

              {/* BOTTOM GLOW */}
              <div
                className="
                  absolute
                  bottom-[20px]
                  left-1/2
                  h-[30px]
                  w-[30px]
                  -translate-x-1/2
                  rounded-full
                  bg-bamikaGold/5
                  blur-md
                "
              />
            </div>

            {/*  HEADSET*/}
            <div
              className="
                order-1
                flex
                items-center
                justify-center
                gap-5 
                lg:order-3
                lg:justify-end
                lg:-translate-x-[20px]
              "
            >
              {/* TEXT */}
              <div className="text-right [direction:rtl]">
                <div className="text-right [direction:rtl]">
                  <div className="flex items-center justify-start gap-3">
                    <h2
                      className="
                        font-Estedad
                        text-[21px]
                        font-bold
                        leading-[1.8]
                        text-[#111111]
                        sm:text-[24px]
                      "
                    >
                      برای اجرای پروژه بعدی
                      <br />
                      خود آماده‌اید؟
                    </h2>

                    {/* HEADSET */}
                <div
           className="
             flex
             h-[48px]
             w-[48px]
             shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-[#E8DDBE]
            bg-white
            sm:h-[60px]
            sm:w-[60px]
            lg:h-[72px]
            lg:w-[72px]
  "
>
           <FiHeadphones
           size={24}
            className="text-bamikaGold sm:size-[28px] lg:size-[32px]"
          />
          </div>
                  </div>
                </div>

                <p
                  className="
                    mt-2
                    max-w-[380px]
                    font-yekan
                    text-[13px]
                    leading-[2.1]
                    text-[#777777]
                    sm:text-[14px]
                  "
                >
                  با تیم متخصص ما در ارتباط باشید و مشاوره رایگان دریافت
                  کنید. ما همراه شما در تمام مراحل پروژه خواهیم بود.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}