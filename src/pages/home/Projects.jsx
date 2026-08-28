import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight, FiMapPin } from "react-icons/fi";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import project1Image01 from "../../assets/images/project01.jpg";
import project1Image02 from "../../assets/images/project02.jpg";
import project1Image03 from "../../assets/images/project03.jpg";

const projects = [
  {
    id: "project-1",
    title: "تأمین آهن آلات شهرک صنعتی",
    location: "قندهار",
    year: "۱۴۰۳",
    type: "سازه فلزی",
    category: "سالن صنعتی",
    image: project1Image01,
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
    image: project1Image02,
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
    image: project1Image03,
    description:
      "اجرای سازه فلزی و بخش‌های اصلی کارخانه تولید قطعات صنعتی از جمله بخش‌های اصلی این پروژه بوده است.",
  },
];

function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  const [start, setStart] = useState(0);

  const visibleCount =
    typeof window !== "undefined" && window.innerWidth >= 1024
      ? 3
      : typeof window !== "undefined" && window.innerWidth >= 768
        ? 2
        : 1;

  const maxStart = Math.max(0, projects.length - visibleCount);

  const goNext = () => setStart((prev) => Math.min(prev + 1, maxStart));
  const goPrev = () => setStart((prev) => Math.max(prev - 1, 0));

  return (
    <section className="w-full bg-white py-14 lg:py-14">
      <div className="mx-auto max-w-[1160px] px-5 sm:px-8">
        {/* Section Header */}
        <FadeIn className="mb-14 flex flex-col items-center text-center">
          <span className="font-yekan text-[13px] font-medium text-bamikaGold tracking-wide">
            نمونه کارهای ما
          </span>
          <h2 className="font-Estedad mt-3 text-[32px] font-black leading-tight text-[#1E1E1E] sm:text-[40px]">
            پروژه‌های <span className="text-bamikaGold">شاخص</span>
          </h2>
          <p className="mt-4 max-w-[550px] font-yekan text-[15px] leading-7 text-[#777777]">
            نگاهی به برخی از پروژه‌های موفق شرکت بامیکا نیرو در سراسر افغانستان
          </p>
        </FadeIn>

        {/* Carousel */}
        <FadeIn>
          <div className="relative">
            {/* Arrow Left */}
            <button
              onClick={goPrev}
              disabled={start === 0}
              className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 hidden lg:flex w-11 h-11 rounded-full bg-white shadow-md items-center justify-center text-[#555] hover:text-bamikaGold transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <FiArrowRight size={18} />
            </button>

            {/* Arrow Right */}
            <button
              onClick={goNext}
              disabled={start >= maxStart}
              className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 hidden lg:flex w-11 h-11 rounded-full bg-white shadow-md items-center justify-center text-[#555] hover:text-bamikaGold transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <FiArrowLeft size={18} />
            </button>

            {/* Cards Track */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-5"
                animate={{
                  x: `-${start * (100 / visibleCount + 1.5)}%`,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {projects.map((project) => (
                  <Link
                    key={project.id}
                    to={`/project/${project.id}`}
                    state={{ project }}
                    className="
                      group
                      relative
                      block
                      min-w-[calc(33.333%-14px)]
                      lg:min-w-[calc(33.333%-14px)]
                      md:min-w-[calc(50%-10px)]
                      min-w-[calc(100%-0px)]
                      overflow-hidden
                      rounded-[16px]
                      aspect-[4/3]
                    "
                  >
                    {/* Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-0 right-0 left-0 p-5">
                      <h3 className="font-Estedad text-[17px] font-bold leading-[1.8] text-white">
                        {project.title}
                      </h3>
                      <div className="mt-2 flex items-center gap-2">
                        <FiMapPin size={15} className="text-bamikaGold" />
                        <span className="font-yekan text-[13px] text-white/70">
                          {project.location}
                        </span>
                      </div>
                    </div>

                    {/* Hover Border */}
                    <div className="absolute inset-0 rounded-[16px] border-2 border-transparent transition-all duration-500 group-hover:border-bamikaGold/50" />
                  </Link>
                ))}
              </motion.div>
            </div>

            {/* Mobile Arrows */}
            <div className="flex lg:hidden items-center justify-center gap-3 mt-6">
              <button
                onClick={goPrev}
                disabled={start === 0}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#555] hover:text-bamikaGold transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <FiArrowRight size={16} />
              </button>
              <div className="flex items-center gap-2">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setStart(Math.min(i, maxStart))}
                    className={`rounded-full transition-all duration-300 ${
                      i === start
                        ? "w-7 h-2 bg-bamikaGold"
                        : "w-2 h-2 bg-[#D4A72C]/30"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={goNext}
                disabled={start >= maxStart}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#555] hover:text-bamikaGold transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <FiArrowLeft size={16} />
              </button>
            </div>
          </div>
        </FadeIn>

        {/* View All Button */}
        <FadeIn className="mt-10 flex justify-center">
          <Link
            to="/project"
            className="
              group
              flex
              items-center
              gap-2
              px-8
              py-3.5
              rounded-[12px]
              border-2
              border-bamikaGold/40
              font-yekan
              text-[15px]
              font-bold
              text-bamikaGold
              transition-all
              duration-300
              hover:bg-bamikaGold
              hover:text-white
              hover:shadow-lg
              hover:shadow-bamikaGold/20
            "
          >
            مشاهده همه پروژه‌ها
            <FiArrowLeft
              size={18}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
