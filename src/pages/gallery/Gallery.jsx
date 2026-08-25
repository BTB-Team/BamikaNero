import React, { useState } from 'react';
import { 
  FiImage, FiUsers, FiAward, FiCalendar, FiDollarSign, 
  FiLayers, FiTool, FiBriefcase, FiGrid, FiChevronLeft, 
  FiChevronRight, FiX, FiDownload, FiPhoneCall, FiCheckCircle 
} from 'react-icons/fi';

// داده‌های نمونه برای شبیه‌سازی کامل گالری
const galleryData = [
  { id: 1, title: "ریخته گری فلز مذاب", category: "casting", img: "imagea.webp", desc: "فرآیند ریخته‌گری در مدرن‌ترین کوره‌های پیشرفته با تکنولوژی روز برای تولید قطعات صنعتی." },
  { id: 2, title: "قالب گیری چدن", category: "casting", img: "imageb.webp", desc: "قالب‌گیری دقیق قطعات چدنی سنگین متناسب با استانداردهای بین‌المللی." },
  { id: 3, title: "سالن تولید و مونتاژ", category: "factory", img: "imagec.webp", desc: "محیط یکپارچه و مجهز مونتاژ ماشین‌آلات و تجهیزات سنگین کارخانه." },
  { id: 4, title: "قطعات چدنی تولید شده", category: "products", img: "imaged.webp", desc: "نمونه محصولات نهایی چدنی با بالاترین دوام و بدون کوچک‌ترین تخلخل." },

];

export default function BamikaGallery() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImg, setSelectedImg] = useState(galleryData[0]);

  // فیلتر کردن تصاویر بر اساس تب انتخاب شده
  const filteredData = activeTab === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeTab);

  // ناوبری تصاویر در لایت‌باکس پایین
  const handleNext = () => {
    const currentIndex = galleryData.findIndex(item => item.id === selectedImg.id);
    if (currentIndex < galleryData.length - 1) {
      setSelectedImg(galleryData[currentIndex + 1]);
    } else {
      setSelectedImg(galleryData[0]); // بازگشت به اول
    }
  };

  const handlePrev = () => {
    const currentIndex = galleryData.findIndex(item => item.id === selectedImg.id);
    if (currentIndex > 0) {
      setSelectedImg(galleryData[currentIndex - 1]);
    } else {
      setSelectedImg(galleryData[galleryData.length - 1]); // رفتن به آخر
    }
  };

  return (
    <div className="w-full bg-[#fcfcfc] min-h-screen text-gray-800 font-sans" dir="rtl">
      
      {/* ۱. هدر اصلی گالری تصاویر */}
      {/* ۱. هدر اصلی گالری تصاویر (بخش هیرو با افکت برش کج) */}
<div className="relative w-full h-[320px] bg-white overflow-hidden shadow-sm border-b border-gray-100 flex items-center" dir="rtl">
  
  {/* لایه تصویر پس‌زمینه (سمت چپ) */}
  <div className="absolute left-0 top-0 w-full md:w-[65%] h-full z-0">
    <img 
      src="/src/assets/image/imagea.webp" 
      alt="ذوب فلز بامیکا نیرو" 
      className="w-full h-full object-cover"
    />
    {/* یک اورلی ملایم روی عکس برای هماهنگی بیشتر */}
    <div className="absolute inset-0 bg-black/10"></div>
  </div>
  
  {/* لایه سفید متقارن با برش کج مدرن (سمت راست) */}
  <div 
    className="absolute right-0 top-0 h-full bg-white z-10 w-full md:w-[50%] hidden md:block"
    style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
  ></div>

  {/* محتوای متنی هدر (دقیقاً روی لایه سفید یا به صورت ریسپانسیو در موبایل) */}
  <div className="w-full max-w-7xl mx-auto px-6 md:px-16 relative z-20 flex justify-end">
    <div className="text-right max-w-xl bg-white/95 md:bg-transparent p-6 md:p-0 rounded-2xl shadow-xl md:shadow-none border border-gray-100 md:border-transparent">
      
      {/* آیکون گالری و عنوان کوچک */}
      <div className="flex items-center justify-end gap-2 text-[#d48c24] font-bold mb-2">
        <h2 className="text-xl md:text-2xl font-black">گالری تصاویر</h2>
        <div className="bg-[#fcf5eb] p-2 rounded-lg text-[#d48c24]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 002-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
      
      {/* عنوان اصلی کامپوننت */}
      <h1 className="text-xl md:text-3xl font-black text-gray-900 mb-3">
        شرکت ریخته گری بامیکا نیرو
      </h1>
      
      {/* توضیحات تکمیلی زیر عنوان */}
      <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-medium">
        مستندات تصویری از فرآیند ریخته‌گری، فابریه، محصولات و تیم متخصص
        <br />
        شرکت ریخته گری بامیکا نیرو
      </p>
    </div>
  </div>

  {/* پترن نقطه‌ای ظریف سمت راست تصویر (اختیاری جهت شباهت ۱۰۰٪ به طرح شما) */}
  <div className="absolute right-6 top-12 hidden lg:flex flex-col gap-1 z-20 opacity-30">
    {[...Array(5)].map((_, i) => (
      <div key={i} className="flex gap-1">
        {[...Array(4)].map((_, j) => (
          <div key={j} className="w-1 h-1 bg-gray-400 rounded-full"></div>
        ))}
      </div>
    ))}
  </div>

</div>


      <div className="max-w-7xl mx-auto px-4 py-10">
        
        {/* ۲. بخش کارت‌های آمار و اطلاعات عددی */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {/* کارت اول: سرمایه */}
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col items-center justify-center text-center">
            <FiDollarSign className="text-2xl text-[#d48c24] mb-2" />
            <span className="text-xs text-gray-400 mb-1">سرمایه شرکت</span>
            <span className="text-xl font-bold text-gray-900">5M</span>
            <span className="text-xs text-[#d48c24]">میلیون افغانی</span>
          </div>
          {/* کارت دوم: سال تاسیس */}
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col items-center justify-center text-center">
            <FiCalendar className="text-2xl text-[#d48c24] mb-2" />
            <span className="text-xs text-gray-400 mb-1">سال تاسیس</span>
            <span className="text-xl font-bold text-gray-900">1402</span>
            <span className="text-xs text-[#d48c24]">هجری شمسی</span>
          </div>
          {/* کارت سوم: جواز رسمی */}
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col items-center justify-center text-center">
            <FiAward className="text-2xl text-[#d48c24] mb-2" />
            <span className="text-xs text-gray-400 mb-1">جواز رسمی</span>
            <span className="text-xl font-bold text-gray-900">88648</span>
            <span className="text-xs text-[#d48c24]">ثبت وزارت صنعت و تجارت</span>
          </div>
          {/* کارت چهارم: کارمندان */}
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col items-center justify-center text-center">
            <FiUsers className="text-2xl text-[#d48c24] mb-2" />
            <span className="text-xs text-gray-400 mb-1">کارمندان</span>
            <span className="text-xl font-bold text-gray-900">+30</span>
            <span className="text-xs text-[#d48c24]">نیروی متخصص</span>
          </div>
        </div>

        {/* ۳. منوی ناوبری تب‌ها (فیلتر گالری) */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-8 border-b border-gray-200 pb-4">
          <button 
            onClick={() => setActiveTab('all')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'all' ? 'bg-[#d48c24] text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
          >
            <FiGrid /> همه تصاویر
          </button>
          <button 
            onClick={() => setActiveTab('casting')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'casting' ? 'bg-[#d48c24] text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
          >
            <FiTool /> ریخته گری
          </button>
          <button 
            onClick={() => setActiveTab('factory')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'factory' ? 'bg-[#d48c24] text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
          >
            <FiLayers /> فابریه
          </button>
          <button 
            onClick={() => setActiveTab('products')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'products' ? 'bg-[#d48c24] text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
          >
            <FiBriefcase /> محصولات
          </button>
          <button 
            onClick={() => setActiveTab('staff')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'staff' ? 'bg-[#d48c24] text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
          >
            <FiUsers /> کارمندان
          </button>
        </div>

        {/* ۴. گرید اصلی نمایش تصاویر */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {filteredData.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedImg(item)}
              className={`group relative h-48 bg-gray-200 rounded-xl overflow-hidden cursor-pointer shadow-sm transition-all duration-300 hover:shadow-md border-2 ${selectedImg.id === item.id ? 'border-[#d48c24]' : 'border-transparent'}`}
            >
              <img 
                src={`/src/assets/image/${item.img}`} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* لایه تیره افکت هاور */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3 opacity-90 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xs font-semibold">{item.title}</span>
              </div>
            </div>
          ))}
        </div>

                {/* دکمه لود تصاویر بیشتر */}
        <div className="flex justify-center mb-16">
          <button className="flex items-center gap-2 border border-gray-300 px-6 py-2 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors">
            مشاهده تصاویر بیشتر <span className="mr-1">➔</span>
          </button>
        </div>

        {/* ۵. بخش نمایش جزئیات تصویر انتخاب شده (لایت باکس تعبیه شده) */}
        {selectedImg && (
          <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-md p-4 md:p-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* بخش تصویر بزرگ و دکمه‌های کنترلی سمت چپ */}
              <div className="md:col-span-6 relative bg-gray-900 rounded-xl overflow-hidden h-64 md:h-80 flex items-center justify-center">
                <img 
                  src={`/src/assets/image/${selectedImg.img}`} 
                  alt={selectedImg.title} 
                  className="w-full h-full object-cover"
                />
                
                {/* کلیدهای جابجایی قبلی و بعدی */}
                <button 
                  onClick={handlePrev}
                  className="absolute left-3 bg-white/80 p-2 rounded-full hover:bg-white text-gray-800 transition-colors shadow-sm"
                >
                  <FiChevronLeft size={20} />
                </button>
                <button 
                  onClick={handleNext}
                  className="absolute right-3 bg-white/80 p-2 rounded-full hover:bg-white text-gray-800 transition-colors shadow-sm"
                >
                  <FiChevronRight size={20} />
                </button>
              </div>

              {/* بخش توضیحات متنی سمت راست */}
              <div className="md:col-span-6 text-right flex flex-col justify-between h-full space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedImg.title}</h3>
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed mb-4">
                    {selectedImg.desc}
                  </p>
                  
                  <div className="space-y-2 border-t border-gray-100 pt-3 text-xs text-gray-600">
                    <div className="flex items-center gap-2 justify-end">
                      <span>دسته بندی: ریخته گری</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d48c24]"></div>
                    </div>
                    <div className="flex items-center gap-2 justify-end">
                      <span>تاریخ ثبت: 1403/12/05</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d48c24]"></div>
                    </div>
                    <div className="flex items-center gap-2 justify-end">
                      <span>مکان: فابریه بامیکا نیرو</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d48c24]"></div>
                    </div>
                  </div>
                </div>

                {/* دکمه دانلود عکس جاری */}
                <div className="pt-2">
                  <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#d48c24] text-white px-6 py-2.5 rounded-lg text-xs font-semibold hover:bg-[#bd7b1e] transition-colors shadow-sm">
                    دانلود تصویر <FiDownload size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* گالری بندانگشتی تصاویر زیر اسلایدر */}
            <div className="flex items-center gap-2 overflow-x-auto mt-4 pt-3 border-t border-gray-100 justify-start md:justify-center">
              {galleryData.slice(0, 6).map((thumb) => (
                <div 
                  key={thumb.id}
                  onClick={() => setSelectedImg(thumb)}
                  className={`w-16 h-12 rounded-md overflow-hidden cursor-pointer flex-shrink-0 border-2 transition-all ${selectedImg.id === thumb.id ? 'border-[#d48c24] scale-105' : 'border-transparent opacity-60'}`}
                >
                  <img src={`/src/assets/image/${thumb.img}`} className="w-full h-full object-cover" alt="" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ۶. بنر انتهای صفحه (آماده همکاری) */}
        <div className="w-full bg-[#fcf5eb] border border-[#f5e4cd] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right">
          <div className="flex items-center gap-3 justify-end order-2 md:order-1">
            <button className="flex items-center gap-2 bg-[#d48c24] text-white px-6 py-3 rounded-xl text-xs font-bold hover:bg-[#bd7b1e] transition-all shadow-md">
              تماس با ما <FiPhoneCall />
            </button>
          </div>
          
          <div className="order-1 md:order-2">
            <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">آماده همکاری با شما هستیم</h4>
            <p className="text-xs md:text-sm text-gray-600">
              برای دریافت مشاوره، ثبت سفارش و کسب اطلاعات بیشتر با ما تماس بگیرید.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-500 font-medium order-3">
            <span>کیفیت، تعهد، نوآوری هدف ما رضایت شماست</span>
            <FiCheckCircle className="text-[#d48c24] text-lg" />
          </div>
        </div>
        
        </div>
        </div>
  );
}