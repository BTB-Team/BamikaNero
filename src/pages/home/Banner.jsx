import { motion } from "framer-motion";
import { HiArrowLeft, HiOutlineCog } from "react-icons/hi";
import { MdOutlineCandlestickChart } from "react-icons/md";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/banner-image.jpg";

export default function Banner() {
  return (
    <section className="relative min-h-screen flex lg:flex-row-reverse overflow-hidden bg-white">
      {/* IMAGE SIDE */}
      <div className="hidden lg:block lg:w-[55%] xl:w-[58%] relative overflow-visible">
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full overflow-visible"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="bannerClip">
                <path d="M 0 0 H 675 C 710 18 750 42 790 68 C 825 90 860 112 895 134 C 930 156 965 180 988 210 C 997 222 1000 238 1000 252 L 1000 282 C 1000 295 994 306 984 316 C 950 347 915 376 880 404 L 82 1000 H 0 Z" />
              </clipPath>
            </defs>

            <image
              href={heroImage}
              x="0"
              y="0"
              width="1000"
              height="1000"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#bannerClip)"
            />

            <path
              d="M 0 0 H 675 C 710 18 750 42 790 68 C 825 90 860 112 895 134 C 930 156 965 180 988 210 C 997 222 1000 238 1000 252 L 1000 282 C 1000 295 994 306 984 316 C 950 347 915 376 880 404 L 82 1000 H 0 Z"
              fill="rgba(0,0,0,0.08)"
            />

            <path
              d="M 675 0 C 710 18 750 42 790 68 C 825 90 860 112 895 134 C 930 156 965 180 988 210 C 997 222 1000 238 1000 252 L 1000 282 C 1000 295 994 306 984 316 C 950 347 915 376 880 404 L 82 1000"
              fill="none"
              stroke="#D8A21B"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M 109 1000 L 465 733"
              fill="none"
              stroke="#004545"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* CONTENT SIDE */}
      <div className="w-full lg:w-[45%] xl:w-[42%] flex flex-col lg:flex-row lg:items-center lg:justify-center relative">
        {/* MOBILE IMAGE */}
        <div className="lg:hidden relative w-full h-[260px] sm:h-[340px] overflow-hidden">
          <img
            src={heroImage}
            alt="بامیکا نیرو"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-black/5 to-black/20" />
        </div>

        {/* DOT GRID */}
        <div className="hidden lg:grid absolute top-8 right-6 xl:right-10 grid-cols-4 gap-1.5 z-0 pointer-events-none">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="w-2.5 h-2.5 rounded-full bg-gray-300/70" />
          ))}
        </div>

        {/* CONTENT */}
        <div className="relative z-10 px-6 sm:px-10 lg:px-12 xl:px-16 py-10 lg:py-0 max-w-lg w-full mx-auto lg:mx-0">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <HiOutlineCog className="text-bamikaGold" size={18} />
            <span className="text-gray-700 text-xs font-medium tracking-wide">
              تخصص ما، کیفیت ماندگار شما
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="font-Estedad font-black text-3xl sm:text-4xl lg:text-[2.8rem] xl:text-[2.90rem] leading-[1.8] mb-6 md:text-5xl lg:leading-[1.6] xl:leading-[1.4]"
          >
            <span className="text-[#1E1E1E]  ">کیفیت در ریخته‌گری</span>
            <br />
            <span className="text-bamikaGold">قدرت در صنعت</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="text-gray-600 text-sm sm:text-base leading-7 mb-10 max-w-md"
          >
            بامیکا نیرو با بهره‌گیری از تکنولوژی روز دنیا و تجربه متخصصان مجرب،
            قطعات ریخته‌گری دقیق و مقاوم برای صنایع مختلف تولید می‌کند.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
          >
            <a
              href="/quote"
              className="group flex items-center justify-center gap-2 px-7 py-3.5 bg-bamikaGold text-white font-bold text-sm rounded-lg hover:bg-bamikaGold/90 transition-all duration-300 hover:shadow-lg hover:shadow-bamikaGold/20"
            >
              پروژه ها
              <MdOutlineCandlestickChart size={18} />
            </a>

            <Link
              to="/project"
              className="group flex items-center justify-center gap-2 px-7 py-3.5 bg-[#15473F] text-white font-medium text-sm rounded-lg hover:bg-[#0f3630] transition-all duration-300"
            >
              بازدید کوتاه
              <HiArrowLeft
                size={18}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
