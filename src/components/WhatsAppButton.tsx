"use client";

import { contactConfig } from "@/data/contact";
import { useLanguage } from "@/context/LanguageContext";

export default function WhatsAppButton() {
  const { lang } = useLanguage();

  const message = lang === "en"
    ? "Hello AQMAAR Academy! I'd like to learn more about your space tech and rocket engineering programs for my child."
    : "مرحباً بأكاديمية أقمار! أود معرفة المزيد عن برامج تكنولوجيا الفضاء وهندسة الصواريخ لطفلي.";

  const whatsappUrl = `${contactConfig.whatsapp.link}?text=${encodeURIComponent(message)}`;

  return (
    <div className={`fixed bottom-6 ${lang === "ar" ? "left-6" : "right-6"} z-[9999] flex items-center group`}>
      {/* Tooltip Label */}
      <span className={`absolute ${lang === "ar" ? "left-full ml-3 origin-left" : "right-full mr-3 origin-right"} scale-0 group-hover:scale-100 transition-all duration-300 bg-space-card/95 backdrop-blur-md border border-white/[0.08] text-white text-[11px] font-semibold tracking-wider uppercase py-2 px-4 rounded-full shadow-xl pointer-events-none select-none whitespace-nowrap`}>
        {lang === "en" ? "Chat with Admissions" : "تحدث مع القبول والتسجيل"}
      </span>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 whatsapp-pulse cursor-pointer relative"
        aria-label={lang === "en" ? "Chat with AQMAAR Academy admissions team on WhatsApp" : "تحدث مع فريق القبول بأكاديمية أقمار على واتساب"}
      >
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.528 2.03 14.05 1.01 11.412 1.01c-5.437 0-9.863 4.371-9.867 9.801-.001 1.73.443 3.41 1.284 4.887l-.975 3.562 3.656-.959c1.552.84 3.09 1.295 4.548 1.295zm10.95-6.618c-.295-.148-1.747-.862-2.019-.96-.272-.099-.47-.148-.667.148-.198.296-.766.96-.94 1.157-.173.198-.347.222-.642.074-.295-.148-1.246-.459-2.375-1.464-.877-.782-1.47-1.747-1.642-2.044-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.667-1.609-.913-2.203-.24-.577-.482-.497-.667-.506-.172-.008-.371-.01-.57-.01-.198 0-.52.074-.792.371-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.747-.715 1.994-1.402.247-.687.247-1.277.173-1.402-.073-.125-.27-.199-.567-.346z" />
        </svg>
      </a>
    </div>
  );
}
