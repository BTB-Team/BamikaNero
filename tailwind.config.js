/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // رنگ‌های رسمی استخراج‌شده از هویت بصری بامیکا نیرو
        industrialBlack: "#050505", // مشکی صنعتی
        industrialGold: "#D4A72C", // طلایی سازمانی
        industrialGray: "#F8FAFC", // خاکستری روشن
      },
      colors: {
        // رنگ‌های رسمی بامیکا نیرو
        bamikaBlack: "#050505", // مشکی صنعتی
        bamikaGold: "#D4A72C", // طلایی اصلی برند
        bamikaGray: "#F8FAFC", // خاکستری خیلی روشن برای پس‌زمینه
      },
      fontFamily: {
        // تفکیک فونت عناوین و بدنه بر اساس تصمیم شما
        Estedad: ["Estedad", "sans-serif"], // مخصوص عناوین قدرتمند
        yekan: ["IranYekan", "sans-serif"], // مخصوص بدنه و متون فنی
      },
    },
  },
  plugins: [],
};
