import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  HiOutlineCog,
  HiOutlineLightningBolt,
  HiOutlineShieldCheck,
  HiOutlineCube,
  HiOutlineRefresh,
  HiOutlineClipboardCheck,
} from "react-icons/hi";

const services = [
  {
    icon: HiOutlineCog,
    title: "ریخته‌گری چدن",
    desc: "تولید قطعات چدنی با کیفیت بالا برای مصارف صنعتی و عمرانی با رعایت استانداردهای بین‌المللی",
  },
  {
    icon: HiOutlineLightningBolt,
    title: "ریخته‌گری آهن",
    desc: "ساخت قطعات آهنی مقاوم و دقیق با استفاده از مواد اولیه مرغوب و تجهیزات پیشرفته",
  },
  {
    icon: HiOutlineCube,
    title: "ریخته‌گری آلومینیوم",
    desc: "تولید قطعات آلومینیومی سبک‌وزن و بادوام برای صنایع مختلف با دقت بالا",
  },
  {
    icon: HiOutlineClipboardCheck,
    title: "طراحی و مهندسی",
    desc: "طراحی قطعات سفارشی بر اساس نقشه و مشخصات فنی مشتری با نرم‌افزارهای حرفه‌ای",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "کنترل کیفیت",
    desc: "بازرسی و تست دقیق تمامی محصولات قبل از تحویل به منظور تضمین کیفیت خروجی",
  },
  {
    icon: HiOutlineRefresh,
    title: "مشاوره فنی",
    desc: "ارائه مشاوره تخصصی رایگان در زمینه انتخاب متریال، طراحی قالب و فرآیند ریخته‌گری",
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

export default function Services() {
  return (
    <section
      dir="rtl"
      className="relative w-full overflow-hidden bg-white py-14 lg:py-6"
    >
      {/* Background Gear Decorations */}
      <div className="absolute top-10 right-[-20px] pointer-events-none opacity-[0.04]">
        <svg
          width="200"
          height="200"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-[#1E1E1E]"
        >
          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.49.49 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 00-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1115.6 12 3.6 3.6 0 0112 15.6z" />
        </svg>
      </div>
      <div className="absolute bottom-10 left-[-30px] pointer-events-none opacity-[0.03] rotate-45">
        <svg
          width="260"
          height="260"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-[#1E1E1E]"
        >
          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.49.49 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 00-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1115.6 12 3.6 3.6 0 0112 15.6z" />
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <FadeIn className="mb-14 flex flex-col items-center text-center">
          <span className="font-yekan text-[13px] font-medium text-bamikaGold tracking-wide">
            آنچه ما انجام می‌دهیم
          </span>
          <h2 className="font-Estedad mt-3 text-[32px] font-black leading-tight text-[#1E1E1E] sm:text-[40px]">
            خدمات و <span className="text-bamikaGold">توانمندی‌های</span> ما
          </h2>
          <p className="mt-4 max-w-[550px] font-yekan text-[15px] leading-7 text-[#777777]">
            با بهره‌گیری از تجهیزات مدرن و تیم متخصص، خدمات جامع ریخته‌گری را با
            بالاترین کیفیت ارائه می‌دهیم
          </p>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <FadeIn key={index} delay={index * 0.08}>
                <div
                  className="
                    group
                    relative
                    bg-white
                    border
                    border-[#E7E7E7]
                    rounded-2xl
                    p-7
                    hover:border-bamikaGold/30
                    hover:-translate-y-1
                    hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                    transition-all
                    duration-300
                    h-full
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      w-[52px]
                      h-[52px]
                      rounded-xl
                      bg-bamikaGold/10
                      flex
                      items-center
                      justify-center
                      mb-5
                      text-bamikaGold
                      group-hover:bg-bamikaGold
                      group-hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    <Icon size={26} />
                  </div>

                  {/* Title */}
                  <h3 className="font-Estedad font-bold text-[17px] text-[#1E1E1E] mb-3 leading-relaxed">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-yekan text-[13px] leading-7 text-[#777777]">
                    {service.desc}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
