import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function ProjectDetail() {
  return (
    <main
      dir="rtl"
      className="
        min-h-screen
        w-full
        bg-[#FAF9FC]
        px-5
        py-16
        sm:px-8
        sm:py-20
        lg:py-24
      "
    >
      {/*  PROJECT NOT FOUND*/}

      <section className="mx-auto w-full max-w-[1200px]">
        <div
          className="
            mx-auto
            flex
            min-h-[460px]
            w-full
            max-w-[640px]
            flex-col
            items-center
            justify-center
            rounded-[30px]
            border
            border-[#F0F0F0]
            bg-white
            px-6
            py-14
            text-center
            shadow-[0_2px_6px_rgba(0,0,0,0.04)]
            sm:min-h-[490px]
            sm:px-10
            sm:py-16
            lg:rounded-[32px]
          "
        >
          {/*  TITLE */}

          <h1
            className="
              font-Estedad
              text-[30px]
              font-bold
              leading-[1.7]
              text-bamikaBlack
              sm:text-[38px]
              lg:text-[42px]
            "
          >
            پروژه پیدا نشد
          </h1>

          {/* DESCRIPTION*/}

          <p
            className="
              mt-5
              max-w-[500px]
              font-yekan
              text-[17px]
              leading-[2.3]
              text-[#777777]
              sm:text-[20px]
            "
          >
            پروژه مورد نظر وجود ندارد یا حذف شده است.
          </p>

          {/*   BACK BUTTON */}

          <Link
            to="/project"
            className="
              mt-10
              flex
              h-[62px]
              w-full
              max-w-[365px]
              items-center
              justify-center
              gap-4
              rounded-[14px]
              bg-bamikaGold
              px-6
              font-yekan
              text-[17px]
              font-bold
              text-white
              transition-all
              duration-300
              hover:-translate-y-[1px]
              hover:opacity-90
              sm:h-[70px]
              sm:text-[19px]
            "
          >
            <FiArrowLeft size={23} strokeWidth={2} className="shrink-0" />

            <span>بازگشت به پروژه‌ها</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
