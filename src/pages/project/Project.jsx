import {
  FiChevronRight,
  FiBriefcase,
  FiAward,
  FiUsers,
  FiUser,
  FiArrowLeft,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import img04 from "./assets/04.png";
import Bg from "./assets/06.png";

export default function Portfolio() {
  return (
    <main dir="rtl" className="w-full overflow-hidden bg-white">
      {/* 
          HERO
       */}
     <section
  className="relative w-full overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage: `url(${Bg})`,
  }}
>
  {/* Overlay */}
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
      {/* HERO TEXT */}
      <div
        className="
          order-2
          mr-0
          py-4
          text-right
          sm:mr-20
          lg:order-1
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
              text-black
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
            className="text-black"
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

      {/* HERO IMAGE */}
      <div
        className="
          relative
          order-1
          lg:order-2
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
          "
        />
      </div>
    </div>
  </div>
</section>

      {/*  PROJECT NOT FOUND */}
      <section
        className="
          mx-auto
          w-full
          max-w-[1200px]
          px-5
          pb-10
          pt-10
          sm:px-8
          lg:pt-11
        "
      >
        <div
          className="
            flex
            min-h-[230px]
            w-full
            items-center
            justify-center
            rounded-[24px]
            border
            border-[#F0F0F0]
            bg-white
            px-6
            py-12
            shadow-[0_2px_8px_rgba(0,0,0,0.03)]
            sm:min-h-[235px]
            sm:rounded-[26px]
          "
        >
          <p
            className="
              font-yekan
              text-[15px]
              leading-[2]
              text-[#777777]
              sm:text-[17px]
            "
          >
            پروژه‌ای در این دسته‌بندی پیدا نشد.
          </p>
        </div>
      </section>

      {/*  STATISTICS */}
      <section
        className="
    mx-auto
    w-full
    max-w-[1200px]
    px-5
    pb-8
    sm:px-8
  "
      >
        <div
          className="
      grid
      grid-cols-1
      overflow-hidden
      rounded-[20px]
     
      border-[#EEEEEE]
      bg-white
      shadow-[0_2px_8px_rgba(0,0,0,0.03)]
      sm:grid-cols-2
      lg:grid-cols-4
      lg:border
    "
        >
          {/*  STAT 1 */}
          <div
            className="
        flex
        min-h-[125px]
        items-center
        justify-center
        border-b
        border-[#EEEEEE]
        px-5
        py-6
        sm:border-l
        lg:border-b-0
        lg:border-l-0
      "
          >
            <div
              className="
          flex
          w-[190px]
          items-center
          justify-center
          gap-4
          [direction:rtl]
        "
            >
              {/* ICON */}
              <div
                className="
            flex
            h-[58px]
            w-[58px]
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-bamikaGold
          "
              >
                <FiBriefcase
                  size={27}
                  strokeWidth={1.8}
                  className="text-white"
                />
              </div>

              {/* TEXT */}
              <div className="w-[105px] shrink-0 text-right">
                <div
                  className="
              font-Estedad
              text-[25px]
              font-bold
              leading-[1.4]
              text-bamikaGold
            "
                >
                  +500
                </div>

                <p
                  className="
              mt-1
              whitespace-nowrap
              font-yekan
              text-[13px]
              text-[#666666]
            "
                >
                  پروژه موفق
                </p>
              </div>
            </div>
          </div>

          {/*  STAT 2 */}
          <div
            className="
        flex
        min-h-[125px]
        items-center
        justify-center
        border-b
        border-[#EEEEEE]
        px-5
        py-6
        sm:border-b-0
        sm:border-l
        lg:border-l-0
      "
          >
            <div
              className="
          flex
          w-[190px]
          items-center
          justify-center
          gap-4
          [direction:rtl]
        "
            >
              {/* ICON */}
              <div
                className="
            flex
            h-[58px]
            w-[58px]
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-bamikaGold
          "
              >
                <FiAward size={27} strokeWidth={1.8} className="text-white" />
              </div>

              {/* TEXT */}
              <div className="w-[105px] shrink-0 text-right">
                <div
                  className="
              font-Estedad
              text-[25px]
              font-bold
              leading-[1.4]
              text-bamikaGold
            "
                >
                  +15
                </div>

                <p
                  className="
              mt-1
              whitespace-nowrap
              font-yekan
              text-[13px]
              text-[#666666]
            "
                >
                  سال تجربه
                </p>
              </div>
            </div>
          </div>

          {/*   STAT 3 */}
          <div
            className="
        flex
        min-h-[125px]
        items-center
        justify-center
        border-b
        border-[#EEEEEE]
        px-5
        py-6
        sm:border-l-0
        lg:border-b-0
        lg:border-l-0
      "
          >
            <div
              className="
          flex
          w-[190px]
          items-center
          justify-center
          gap-4
          [direction:rtl]
        "
            >
              {/* ICON */}
              <div
                className="
            flex
            h-[58px]
            w-[58px]
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-bamikaGold
          "
              >
                <FiUsers size={27} strokeWidth={1.8} className="text-white" />
              </div>

              {/* TEXT */}
              <div className="w-[105px] shrink-0 text-right">
                <div
                  className="
              font-Estedad
              text-[25px]
              font-bold
              leading-[1.4]
              text-bamikaGold
            "
                >
                  100%
                </div>

                <p
                  className="
              mt-1
              whitespace-nowrap
              font-yekan
              text-[13px]
              text-[#666666]
            "
                >
                  مشتریان راضی
                </p>
              </div>
            </div>
          </div>

          {/*  STAT 4*/}
          <div
            className="
        flex
        min-h-[125px]
        items-center
        justify-center
        px-5
        py-6
      "
          >
            <div
              className="
          flex
          w-[190px]
          items-center
          justify-center
          gap-4
          [direction:rtl]
        "
            >
              {/* ICON */}
              <div
                className="
            flex
            h-[58px]
            w-[58px]
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-bamikaGold
          "
              >
                <FiUser size={27} strokeWidth={1.8} className="text-white" />
              </div>

              {/* TEXT */}
              <div className="w-[105px] shrink-0 text-right">
                <div
                  className="
              font-Estedad
              text-[25px]
              font-bold
              leading-[1.4]
              text-bamikaGold
            "
                >
                  +20
                </div>

                <p
                  className="
              mt-1
              whitespace-nowrap
              font-yekan
              text-[13px]
              text-[#666666]
            "
                >
                  مهندس متخصص
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
    CTA */}
      <section
        className="
    mx-auto
    w-full
    max-w-[1200px]
    px-5
    pb-10
    sm:px-8
    lg:pb-12
  "
      >
        <div
          className="
      relative
      overflow-hidden
      rounded-[20px]
      border
      border-bamikaGold
      bg-white
      px-6
      py-8
      sm:px-8
      sm:py-9
      lg:px-10
      lg:py-10
    "
        >
          {/* Decorative Glow */}
          <div
            className="
        pointer-events-none
        absolute
        -left-16
        -top-16
        h-[160px]
        w-[160px]
        rounded-full
        bg-bamikaGold/10
        blur-3xl
      "
          />

          <div
            className="
        relative
        z-10
        flex
        flex-col
        gap-7
        lg:flex-row
        lg:items-center
        lg:justify-between
      "
          >
            {/* CTA TEXT */}
            <div className="text-right">
              <h2
                className="
            font-Estedad
            text-[23px]
            font-bold
            leading-[1.8]
            text-bamikaBlack
            sm:text-[27px]
          "
              >
                برای پروژه بعدی خود آماده‌اید؟
              </h2>

              <p
                className="
            mt-2
            max-w-[600px]
            font-yekan
            text-[13px]
            leading-[2.1]
            text-[#777777]
            sm:text-[14px]
          "
              >
                با تیم متخصص ما در ارتباط باشید و مشاوره رایگان دریافت کنید. ما
                همراه شما در تمام مراحل پروژه خواهیم بود.
              </p>
            </div>

            {/* CTA BUTTONS */}
            <div
              className="
          flex
          w-full
          flex-col
          gap-3
          sm:flex-row
          sm:justify-start
          lg:w-auto
          lg:shrink-0
        "
            >
              {/* CONTACT */}
              <Link
                to="/contact"
                className="
            flex
            h-[50px]
            min-w-[170px]
            items-center
            justify-center
            gap-3
            rounded-[9px]
            border
            border-bamikaGold
            bg-bamikaGold
            px-5
            font-yekan
            text-[13px]
            font-bold
            text-white
            transition-all
            duration-300
            hover:opacity-90
          "
              >
                <span>تماس با ما</span>

                <FiArrowLeft
                  size={19}
                  strokeWidth={2}
                  className="shrink-0 text-white"
                />
              </Link>

              {/* CONSULTATION */}
              <Link
                to="/contact"
                className="
            flex
            h-[50px]
            min-w-[170px]
            items-center
            justify-center
            gap-3
            rounded-[9px]
            border
            border-bamikaGold
            bg-white
            px-5
            font-yekan
            text-[13px]
            font-bold
            text-bamikaGold
            transition-all
            duration-300
            hover:bg-bamikaGold
            hover:text-white
          "
              >
                <span>درخواست مشاوره</span>

                <FiArrowLeft size={19} strokeWidth={2} className="shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
