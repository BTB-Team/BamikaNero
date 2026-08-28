import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  HiOutlineShieldCheck,
  HiOutlineCog,
  HiOutlineUserGroup,
  HiOutlineOfficeBuilding,
} from "react-icons/hi";

const stats = [
  {
    icon: HiOutlineShieldCheck,
    number: "۱۰۰٪",
    label: "تضمین کیفیت",
  },
  {
    icon: HiOutlineCog,
    number: "۴+",
    label: "سال تجربه",
  },
  {
    icon: HiOutlineUserGroup,
    number: "۳۰+",
    label: "تیم متخصص",
  },
  {
    icon: HiOutlineOfficeBuilding,
    number: "۲۰۰+",
    label: "ظرفیت اشتغال",
  },
];

function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section dir="rtl" className=" w-full bg-[#013636] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="flex items-center gap-4 lg:gap-6 xl:gap-8 p-4 sm:p-5 lg:p-6 rounded-lg bg-[#004545]/10">
                  {/* Icon */}
                  <div
                    className="
                      w-14
                      h-14
                      rounded-xl
                      bg-white/10
                      flex
                      items-center
                      justify-center
                      shrink-0
                      text-white/90
                    "
                  >
                    <Icon size={28} />
                  </div>

                  {/* Text */}
                  <div>
                    <div className="font-Estedad font-black text-2xl sm:text-3xl text-white leading-none">
                      {stat.number}
                    </div>
                    <p className="font-yekan text-[13px] text-white/60 mt-1.5">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
