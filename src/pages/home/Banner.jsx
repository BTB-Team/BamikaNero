import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiArrowLeft,
  HiArrowRight,
  HiOutlineCog,
  HiUserGroup,
  HiGlobe,
} from "react-icons/hi";
import { MdOutlineCandlestickChart } from "react-icons/md";

import bannerImage1 from "../../assets/images/banner-image.jpg";
import bannerImage2 from "../../assets/images/banner-image01.jfif";
import bannerImage3 from "../../assets/images/banner-image03.jpg";

const slides = [
  {
    image: bannerImage1,
    badge: {
      icon: HiOutlineCog,
      text: "تخصص ما، کیفیت ماندگار شما",
    },
    heading: [
      { text: "کیفیت در ریخته‌گری", dark: true },
      { text: "قدرت در صنعت", gold: true },
    ],
    desc: "بامیکا نیرو با بهره‌گیری از تکنولوژی روز دنیا و تجربه متخصصان مجرب، قطعات ریخته‌گری دقیق و مقاوم برای صنایع مختلف تولید می‌کند.",
    btnPrimary: {
      label: "استعلام قیمت",
      icon: MdOutlineCandlestickChart,
      href: "/quote",
    },
    btnSecondary: {
      label: "مشاهده پروژه‌ها",
      href: "/projects",
    },
  },

  {
    image: bannerImage2,
    badge: {
      icon: HiUserGroup,
      text: "بیش از ۲۰۰ نفر اشتغال زایی",
    },
    heading: [
      { text: "خودکفایی در تولید", dark: true },
      { text: "رشد اقتصاد افغانستان", gold: true },
    ],
    desc: "با ایجاد کوتل تخت پارک صنعتی و تولید قطعات در داخل کشور، گامی مؤثر در جهت کاهش وابستگی به واردات و اشتغال‌زایی برداشته‌ایم.",
    btnPrimary: {
      label: "استعلام قیمت",
      icon: MdOutlineCandlestickChart,
      href: "/quote",
    },
    btnSecondary: {
      label: "درباره ما",
      href: "/about",
    },
  },

  {
    image: bannerImage3,
    badge: {
      icon: HiGlobe,
      text: "استانداردهای بین‌المللی",
    },
    heading: [
      { text: "قطعات چدنی، آهنی", dark: true },
      { text: "و آلومینیومی", gold: true },
    ],
    desc: "پمپ آب، منهول، سری بخاری ترکی، گیربکس، قیچی و ده‌ها محصول دیگر با بالاترین کیفیت و نازل‌ترین قیمت در خدمت شماست.",
    btnPrimary: {
      label: "استعلام قیمت",
      icon: MdOutlineCandlestickChart,
      href: "/quote",
    },
    btnSecondary: {
      label: "تماس با ما",
      href: "/contact",
    },
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),

  center: {
    x: 0,
    opacity: 1,
  },

  exit: (direction) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
};

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const total = slides.length;

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goTo = useCallback(
    (index) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current],
  );

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(goNext, 5000);

    return () => clearInterval(timer);
  }, [goNext, isPaused]);

  const slide = slides[current];

  const BadgeIcon = slide.badge.icon;
  const PrimaryIcon = slide.btnPrimary.icon;

  return (
    <section
      className="relative min-h-screen flex lg:flex-row-reverse overflow-hidden bg-[#F7F1E6]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* =========================================================
          IMAGE SIDE
          ========================================================= */}
      <div className="hidden lg:block lg:w-3/5 xl:w-[62%] relative overflow-visible">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
          >
            {/* =====================================================
                IMAGE + GOLD BORDER
                ===================================================== */}
            <svg
              className="absolute inset-0 w-full h-full overflow-visible"
              viewBox="0 0 1000 1000"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <clipPath id={`bannerClip-${current}`}>
                  <path
                    d="
                      M 0 0
                      H 675

                      C 710 18 750 42 790 68
                      C 825 90 860 112 895 134
                      C 930 156 965 180 988 210

                      C 997 222 1000 238 1000 252
                      L 1000 282

                      C 1000 295 994 306 984 316

                      C 950 347 915 376 880 404

                      L 82 1000

                      H 0
                      Z
                    "
                  />
                </clipPath>
              </defs>

              {/* IMAGE */}
              <image
                href={slide.image}
                x="0"
                y="0"
                width="1000"
                height="1000"
                preserveAspectRatio="xMidYMid slice"
                clipPath={`url(#bannerClip-${current})`}
              />

              {/* IMAGE OVERLAY */}
              <path
                d="
                  M 0 0
                  H 675

                  C 710 18 750 42 790 68
                  C 825 90 860 112 895 134
                  C 930 156 965 180 988 210

                  C 997 222 1000 238 1000 252
                  L 1000 282

                  C 1000 295 994 306 984 316

                  C 950 347 915 376 880 404

                  L 82 1000

                  H 0
                  Z
                "
                fill="rgba(0,0,0,0.08)"
              />

              {/* =================================================
                  GOLD BORDER
                  ================================================= */}
              <path
                d="
                  M 675 0

                  C 710 18 750 42 790 68
                  C 825 90 860 112 895 134
                  C 930 156 965 180 988 210

                  C 997 222 1000 238 1000 252
                  L 1000 282

                  C 1000 295 994 306 984 316

                  C 950 347 915 376 880 404

                  L 82 1000
                "
                fill="none"
                stroke="#D8A21B"
                strokeWidth="16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* TEAL ACCENT */}
              <path
                d="
                  M 99 1000
                  L 455 735
                "
                fill="none"
                stroke="#004545"
                strokeWidth="16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =========================================================
          RIGHT / CONTENT SIDE
          ========================================================= */}
      <div className="w-full lg:w-2/5 xl:w-[38%] flex items-center justify-center px-6 sm:px-10 lg:px-12 xl:px-16 relative">
        {/* =====================================================
            MOBILE BACKGROUND
            ===================================================== */}
        <div className="lg:hidden absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={slide.image}
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.08 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-[#F7F1E6]/95" />
        </div>

        {/* =====================================================
            DECORATIVE DOT GRID
            ===================================================== */}
        <div className="hidden lg:grid absolute top-8 right-6 xl:right-10 grid-cols-4 gap-1.5 z-0 pointer-events-none">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-gray-300/70" />
          ))}
        </div>

        {/* =====================================================
            CONTENT
            ===================================================== */}
        <div className="relative z-10 py-20 lg:py-0 max-w-lg w-full">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{
                x: direction > 0 ? 40 : -40,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              exit={{
                x: direction > 0 ? -40 : 40,
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              {/* =================================================
                  BADGE
                  ================================================= */}
              <div className="inline-flex items-center gap-2 mb-8">
                <BadgeIcon className="text-bamikaGold" size={18} />

                <span className="text-gray-700 text-xs font-medium tracking-wide">
                  {slide.badge.text}
                </span>
              </div>

              {/* =================================================
                  HEADING
                  ================================================= */}
              <h1 className="font-Estedad font-black text-3xl sm:text-4xl lg:text-[2.8rem] xl:text-[3.2rem] leading-[1.8] mb-6 md:text-5xl lg:leading-[1.6] xl:leading-[1.4]">
                {slide.heading
                  .map((line, i) =>
                    line.dark ? (
                      <span key={i} className="text-[#1E1E1E]">
                        {line.text}
                      </span>
                    ) : (
                      <span key={i} className="text-bamikaGold">
                        {line.text}
                      </span>
                    ),
                  )
                  .reduce((acc, el, i) => {
                    if (i === slide.heading.length - 1) {
                      return [...acc, el];
                    }

                    return [...acc, el, <br key={`br-${i}`} />];
                  }, [])}
              </h1>

              {/* =================================================
                  DESCRIPTION
                  ================================================= */}
              <p className="text-gray-600 text-sm sm:text-base leading-7 mb-10 max-w-md">
                {slide.desc}
              </p>

              {/* =================================================
                  BUTTONS
                  ================================================= */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* PRIMARY BUTTON */}
                <a
                  href={slide.btnPrimary.href}
                  className="group flex items-center justify-center gap-2 px-7 py-3.5 bg-bamikaGold text-white font-bold text-sm rounded-lg hover:bg-bamikaGold/90 transition-all duration-300 hover:shadow-lg hover:shadow-bamikaGold/20"
                >
                  {slide.btnPrimary.label}

                  <PrimaryIcon size={18} />
                </a>

                {/* SECONDARY BUTTON */}
                <a
                  href={slide.btnSecondary.href}
                  className="group flex items-center justify-center gap-2 px-7 py-3.5 bg-[#15473F] text-white font-medium text-sm rounded-lg hover:bg-[#0f3630] transition-all duration-300"
                >
                  {slide.btnSecondary.label}

                  <HiArrowLeft
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                  />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* =========================================================
          DESKTOP ARROW CONTROLS
          ========================================================= */}
      <button
        onClick={goPrev}
        aria-label="اسلاید قبلی"
        className="hidden lg:flex absolute left-6 xl:left-10 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/70 backdrop-blur-sm shadow-md items-center justify-center text-gray-600 hover:bg-white hover:text-bamikaGold transition-all duration-300"
      >
        <HiArrowLeft size={18} />
      </button>

      <button
        onClick={goNext}
        aria-label="اسلاید بعدی"
        className="hidden lg:flex absolute right-6 xl:right-10 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/70 backdrop-blur-sm shadow-md items-center justify-center text-gray-600 hover:bg-white hover:text-bamikaGold transition-all duration-300"
      >
        <HiArrowRight size={18} />
      </button>

      {/* =========================================================
          DESKTOP INDICATOR DOTS
          ========================================================= */}
      <div className="hidden lg:flex absolute bottom-16 left-[45%] -translate-x-1/2 items-center gap-2 z-20">
        <button
          onClick={() => goTo(0)}
          aria-label="اسلاید ۱"
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            current === 0
              ? "bg-bamikaGold ring-2 ring-bamikaGold/30 scale-110"
              : "bg-bamikaGold/40"
          }`}
        />

        <button
          onClick={() => goTo(1)}
          aria-label="اسلاید ۲"
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            current === 1
              ? "bg-[#15473F] ring-2 ring-[#15473F]/30 scale-110"
              : "bg-[#15473F]/40"
          }`}
        />

        <button
          onClick={() => goTo(2)}
          aria-label="اسلاید ۳"
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            current === 2
              ? "bg-gray-400 ring-2 ring-gray-300 scale-110"
              : "bg-gray-300"
          }`}
        />
      </div>

      {/* =========================================================
          MOBILE CONTROLS
          ========================================================= */}
      <div className="lg:hidden absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        <button
          onClick={goPrev}
          className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-500 hover:border-bamikaGold hover:text-bamikaGold transition-all"
        >
          <HiArrowRight size={14} />
        </button>

        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`اسلاید ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "w-7 h-2 bg-bamikaGold" : "w-2 h-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-500 hover:border-bamikaGold hover:text-bamikaGold transition-all"
        >
          <HiArrowLeft size={14} />
        </button>
      </div>
    </section>
  );
}
