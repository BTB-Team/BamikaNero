/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // تفکیک فونت عناوین و بدنه بر اساس تصمیم شما
        Estedad: ["Estedad", "sans-serif"], // مخصوص عناوین قدرتمند
        yekan: ["IranYekan", "sans-serif"], // مخصوص بدنه و متون فنی
      },
    },
  },
  plugins: [],
};
