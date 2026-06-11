"use client";

import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Image from "next/image";
import { contactConfig } from "@/data/contact";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { lang, t } = useLanguage();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      lang === "en"
        ? "Thank you for subscribing to AQMAAR Academy updates!"
        : "شكراً لك على الاشتراك في تحديثات أكاديمية أقمار!"
    );
  };

  return (
    <footer className="relative bg-space-dark border-t border-slate-900/60 overflow-hidden pt-16 pb-8">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-slate-800/5 rounded-full filter blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">

          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-5 flex flex-col gap-5 text-start">
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, "#home")}
              className="flex items-center group self-start"
            >
              <Image
                src="/aqmaar_academy_logo.png"
                alt="AQMAAR Academy"
                width={476}
                height={170}
                className="object-contain h-16 w-auto"
              />
            </a>

            <p className="text-xs sm:text-sm text-silver max-w-sm leading-relaxed text-start">
              {t("footer.about")}
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 max-w-sm mt-1">
              <label htmlFor="email-sub" className="text-xs font-semibold text-silver uppercase tracking-wider text-start">
                {lang === "en" ? "Subscribe to updates" : "اشترك في التحديثات"}
              </label>
              <div className="relative">
                <input
                  id="email-sub"
                  type="email"
                  placeholder={lang === "en" ? "your@email.com" : "email@domain.com"}
                  required
                  className="w-full bg-space-deep border border-slate-800 focus:border-accent/40 rounded-full px-4.5 py-2.5 text-xs text-white placeholder-slate-700 outline-none transition-all duration-200 pr-12 pl-4.5"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 p-2 rounded-full bg-gradient-to-r from-silver-light via-white to-silver-bright text-space-dark hover:shadow-[0_2px_10px_rgba(255,255,255,0.1)] transition-all duration-300 shadow-md flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  <Send className="w-3 h-3" />
                </button>
              </div>
            </form>
          </div>

          {/* Programs Column */}
          <div className="lg:col-span-2 flex flex-col gap-4 text-start">
            <h4 className="font-display font-semibold text-sm text-white">
              {t("footer.programs")}
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-silver">
              <li>
                <a href="#programs" onClick={(e) => handleScrollTo(e, "#programs")} className="hover:text-white transition-colors">
                  {t("programs.tracks.juniors.title")}
                </a>
              </li>
              <li>
                <a href="#programs" onClick={(e) => handleScrollTo(e, "#programs")} className="hover:text-white transition-colors">
                  {t("programs.tracks.seniors.title")}
                </a>
              </li>
              <li>
                <a href="#programs" onClick={(e) => handleScrollTo(e, "#programs")} className="hover:text-white transition-colors">
                  {t("programs.tracks.pioneers.title")}
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2 flex flex-col gap-4 text-start">
            <h4 className="font-display font-semibold text-sm text-white">
              {t("footer.quickLinks")}
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-silver">
              <li>
                <a href="#programs" onClick={(e) => handleScrollTo(e, "#programs")} className="hover:text-white transition-colors">
                  {t("nav.programs")}
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleScrollTo(e, "#faq")} className="hover:text-white transition-colors">
                  {t("nav.faq")}
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScrollTo(e, "#contact")} className="hover:text-white transition-colors">
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 flex flex-col gap-4 text-start">
            <h4 className="font-display font-semibold text-sm text-white">
              {t("footer.contact")}
            </h4>
            <ul className="flex flex-col gap-3.5 text-xs sm:text-sm text-silver">
              <li className="flex items-start gap-2.5 text-start">
                <Mail className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <a href={`mailto:${contactConfig.email}`} className="hover:text-white transition-colors break-all">
                  {contactConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-start">
                <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <a href={`tel:${contactConfig.phone.raw}`} className="hover:text-white transition-colors inline-block" dir="ltr">
                  {contactConfig.phone.display}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-start">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <a
                  href={contactConfig.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors leading-relaxed hover:underline decoration-accent/40"
                >
                  {lang === "en"
                    ? contactConfig.address.text
                    : "مبنى B1، مدينة المعرفة، العاصمة الإدارية الجديدة"}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-slate-900/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-start">
            © {new Date().getFullYear()} {t("footer.copyright")}
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a
              href={contactConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-slate-800 hover:border-slate-700 flex items-center justify-center text-slate-500 hover:text-white transition-all bg-space-deep/40"
              aria-label="Facebook"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            
            {/* Instagram */}
            <a
              href={contactConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-slate-800 hover:border-slate-700 flex items-center justify-center text-slate-500 hover:text-white transition-all bg-space-deep/40"
              aria-label="Instagram"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
            
            {/* TikTok */}
            <a
              href={contactConfig.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-slate-800 hover:border-slate-700 flex items-center justify-center text-slate-500 hover:text-white transition-all bg-space-deep/40"
              aria-label="TikTok"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.61 4.17.96 1.09 2.3 1.83 3.74 2.08v3.9c-1.42-.03-2.81-.46-4-1.24-.37-.24-.71-.53-1.02-.85V14.5c.07 2.45-1.12 4.85-3.19 6.19-2.03 1.35-4.77 1.61-7.05.7-2.26-.88-3.95-3.04-4.3-5.45-.45-2.93.93-5.9 3.48-7.36 1.88-1.09 4.23-1.26 6.25-.47V12.2c-1.13-.53-2.5-.46-3.55.22-.97.61-1.55 1.74-1.47 2.87.05 1.13.7 2.18 1.68 2.75 1 .6 2.32.55 3.26-.15.82-.6 1.3-1.6 1.25-2.62V.02z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href={`${contactConfig.whatsapp.link}?text=${encodeURIComponent(contactConfig.whatsapp.defaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-slate-800 hover:border-slate-700 flex items-center justify-center text-slate-500 hover:text-white transition-all bg-space-deep/40"
              aria-label="WhatsApp"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.528 2.03 14.05 1.01 11.412 1.01c-5.437 0-9.863 4.371-9.867 9.801-.001 1.73.443 3.41 1.284 4.887l-.975 3.562 3.656-.959c1.552.84 3.09 1.295 4.548 1.295zm10.95-6.618c-.295-.148-1.747-.862-2.019-.96-.272-.099-.47-.148-.667.148-.198.296-.766.96-.94 1.157-.173.198-.347.222-.642.074-.295-.148-1.246-.459-2.375-1.464-.877-.782-1.47-1.747-1.642-2.044-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.667-1.609-.913-2.203-.24-.577-.482-.497-.667-.506-.172-.008-.371-.01-.57-.01-.198 0-.52.074-.792.371-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.747-.715 1.994-1.402.247-.687.247-1.277.173-1.402-.073-.125-.27-.199-.567-.346z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
