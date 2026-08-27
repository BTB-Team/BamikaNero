import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { HiChevronDown, HiPhone } from "react-icons/hi";

// TODO: save the conference-room photo you uploaded into your assets
// folder (matching the same path your banner images use) and point
// this import at it.
import ctaBg from "../../assets/images/collabrate.png";

const faqs = [
  {
    question: "چه موادی در ریخته‌گری استفاده می‌کنید؟",
    answer:
      "ما در بامیکا نیرو از چدن، آهن و آلومینیوم با کیفیت بالا برای تولید قطعات مختلف استفاده می‌کنیم و مواد اولیه پیش از ورود به خط تولید از نظر کیفیت بررسی می‌شوند.",
  },
  {
    question: "حداقل تیراژ سفارش چقدر است؟",
    answer:
      "حداقل تیراژ بسته به نوع قطعه و قالب مورد نیاز متفاوت است؛ برای اطالع از حداقل سفارش مربوط به محصول مدنظرتان با تیم ما تماس بگیرید.",
  },
  {
    question: "مدت زمان تحویل سفارش چقدر است؟",
    answer:
      "زمان تحویل بسته به حجم سفارش و نوع قطعه متفاوت است و پس از ثبت سفارش، زمان‌بندی دقیق توسط تیم ما به شما اعلام می‌شود.",
  },
  {
    question: "آیا امکان بازدید از کارخانه وجود دارد؟",
    answer:
      "بله، مشتریان عزیز می‌توانند با هماهنگی قبلی از خط تولید کارخانه در پارک صنعتی کوتل تخت بازدید نمایند.",
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

export default function CTA() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section dir="rtl" className="w-full bg-[#F7F1E6] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row-reverse items-stretch gap-6 lg:gap-8">
          {/* =====================================================
              LEFT: FAQ accordion
              ===================================================== */}
          <div className="w-full lg:w-1/2 bg-white border border-[#E7E7E7] rounded-2xl p-8 sm:p-10 lg:p-12">
            <FadeIn>
              <h2 className="font-Estedad font-black text-[24px] sm:text-[28px] text-[#1E1E1E] leading-[1.7] mb-8">
                سوالات <span className="text-bamikaGold">متداول</span>
              </h2>
            </FadeIn>

            <div className="space-y-1">
              {faqs.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <FadeIn key={index} delay={index * 0.08}>
                    <div className="border-b border-[#EFEFEF] last:border-none">
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-right"
                      >
                        <span className="font-yekan text-[15px] text-[#333]">
                          {item.question}
                        </span>
                        <HiChevronDown
                          size={18}
                          className={`shrink-0 text-bamikaGold transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="font-yekan text-[13px] text-[#666] leading-7 px-5 pb-4">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>

          {/* =====================================================
              RIGHT: Gold CTA box, with the conference-room photo
              as a background and a gold tint over it
              ===================================================== */}
          <div className="relative w-full lg:w-1/2 rounded-2xl overflow-hidden flex flex-col justify-center p-8 sm:p-10 lg:p-12">
            <img
              src={ctaBg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ backgroundColor: "rgba(212, 167, 44, 0.88)" }}
            />

            <FadeIn delay={0.2} className="relative z-10">
              <h2 className="font-Estedad font-black text-[22px] sm:text-[26px] text-white leading-[1.7] mb-4">
                آماده همکاری هستیم
              </h2>

              <p className="font-yekan text-[14px] text-white/85 leading-7 mb-8 max-w-sm">
                برای دریافت مشاوره تخصصی و استعلام قیمت، با ما در ارتباط باشید.
              </p>

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#004545] text-white font-bold text-sm rounded-lg hover:bg-[#003636] transition-all duration-300 hover:shadow-lg w-fit"
              >
                <HiPhone size={18} />
                تماس با ما
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
