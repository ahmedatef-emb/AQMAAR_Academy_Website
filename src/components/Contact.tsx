"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Check, Share2, MessageSquare, ChevronDown } from "lucide-react";
import { contactConfig } from "@/data/contact";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { lang, t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "elementary",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Map selected subject key to user-friendly translated text label
    const subjects = t("contact.form.subjects");
    const subjectLabel = subjects[formData.subject as keyof typeof subjects] || subjects.general;

    // Format the pre-filled WhatsApp message body
    const whatsappMessage = lang === "en"
      ? `Hello AQMAAR Academy Admissions!\n\nI would like to inquire about your programs. Here are my details:\n• Name: ${formData.name}\n• Email: ${formData.email}\n• Program: ${subjectLabel}\n• Message: ${formData.message}`
      : `مرحباً بإدارة القبول والتسجيل في أكاديمية أقمار!\n\nأود الاستفسار عن برامجكم الدراسية. إليكم بياناتي:\n• الاسم: ${formData.name}\n• البريد الإلكتروني: ${formData.email}\n• المسار الدراسي: ${subjectLabel}\n• الرسالة: ${formData.message}`;

    const whatsappUrl = `${contactConfig.whatsapp.link}?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirect / open WhatsApp chat window
    window.open(whatsappUrl, "_blank");

    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "elementary", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-16 overflow-hidden bg-space-dark border-t border-slate-900/60">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(52,211,153,0.03)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <div className="section-label">
            <span className="text-xs font-semibold text-silver uppercase tracking-wider">{t("contact.label")}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            {t("contact.title")}{" "}
            <span className="bg-gradient-to-r from-silver-light via-silver-bright to-accent text-gradient">
              {t("contact.titleGradient")}
            </span>
          </h2>
          <p className="text-silver text-sm sm:text-base max-w-xl">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-between p-6 sm:p-10 rounded-2xl border border-white/[0.12] bg-space-card/95 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-transparent pointer-events-none" />

            <div className="flex flex-col gap-8">
              <div>
                <h3 className="font-display font-bold text-xl text-white text-start">
                  {lang === "en" ? "AQMAAR Academy" : "أكاديمية أقمار"}
                </h3>
                <p className="text-xs text-silver mt-1.5 leading-relaxed text-start">
                  {lang === "en"
                    ? "Innovative aerospace engineering education for the young generation."
                    : "تعليم هندسة الفضاء والابتكار للجيل الصاعد."}
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-space-deep border border-slate-800/80 flex items-center justify-center text-accent shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="text-start">
                    <span className="text-[11px] font-semibold text-silver uppercase tracking-wider block">{t("contact.sidebar.emailLabel")}</span>
                    <a href={`mailto:${contactConfig.email}`} className="text-sm text-silver-light hover:text-white transition-colors mt-0.5 block">
                      {contactConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-space-deep border border-slate-800/80 flex items-center justify-center text-accent shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-start">
                    <span className="text-[11px] font-semibold text-silver uppercase tracking-wider block">{t("contact.sidebar.phoneLabel")}</span>
                    <a href={`tel:${contactConfig.phone.raw}`} className="text-sm text-silver-light hover:text-white transition-colors mt-0.5 inline-block" dir="ltr">
                      {contactConfig.phone.display}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-space-deep border border-slate-800/80 flex items-center justify-center text-accent shrink-0">
                    <svg
                      className="w-4 h-4 fill-current text-accent"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.528 2.03 14.05 1.01 11.412 1.01c-5.437 0-9.863 4.371-9.867 9.801-.001 1.73.443 3.41 1.284 4.887l-.975 3.562 3.656-.959c1.552.84 3.09 1.295 4.548 1.295zm10.95-6.618c-.295-.148-1.747-.862-2.019-.96-.272-.099-.47-.148-.667.148-.198.296-.766.96-.94 1.157-.173.198-.347.222-.642.074-.295-.148-1.246-.459-2.375-1.464-.877-.782-1.47-1.747-1.642-2.044-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.667-1.609-.913-2.203-.24-.577-.482-.497-.667-.506-.172-.008-.371-.01-.57-.01-.198 0-.52.074-.792.371-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.747-.715 1.994-1.402.247-.687.247-1.277.173-1.402-.073-.125-.27-.199-.567-.346z" />
                    </svg>
                  </div>
                  <div className="text-start">
                    <span className="text-[11px] font-semibold text-silver uppercase tracking-wider block">{t("contact.sidebar.whatsappLabel")}</span>
                    <a
                      href={`${contactConfig.whatsapp.link}?text=${encodeURIComponent(contactConfig.whatsapp.defaultMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-silver-light hover:text-white transition-colors mt-0.5 inline-block"
                      dir="ltr"
                    >
                      {contactConfig.whatsapp.display}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-space-deep border border-slate-800/80 flex items-center justify-center text-accent shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-start">
                    <span className="text-[11px] font-semibold text-silver uppercase tracking-wider block">{t("contact.sidebar.campusLabel")}</span>
                    <a
                      href={contactConfig.address.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-silver-light hover:text-white transition-colors mt-0.5 block leading-relaxed underline decoration-accent/30 decoration-1 underline-offset-4 hover:decoration-accent transition-all duration-300"
                    >
                      {contactConfig.address.text}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-space-deep border border-slate-800/80 flex items-center justify-center text-accent shrink-0">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <div className="text-start">
                    <span className="text-[11px] font-semibold text-silver uppercase tracking-wider block">{t("contact.sidebar.followUs")}</span>
                    <div className="flex items-center gap-3 mt-2">
                      <a
                        href={contactConfig.socials.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full border border-slate-800 hover:border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all bg-space-deep/40"
                        aria-label="Facebook"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                        </svg>
                      </a>
                      <a
                        href={contactConfig.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full border border-slate-800 hover:border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all bg-space-deep/40"
                        aria-label="Instagram"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                        </svg>
                      </a>
                      <a
                        href={contactConfig.socials.tiktok}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full border border-slate-800 hover:border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all bg-space-deep/40"
                        aria-label="TikTok"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.61 4.17.96 1.09 2.3 1.83 3.74 2.08v3.9c-1.42-.03-2.81-.46-4-1.24-.37-.24-.71-.53-1.02-.85V14.5c.07 2.45-1.12 4.85-3.19 6.19-2.03 1.35-4.77 1.61-7.05.7-2.26-.88-3.95-3.04-4.3-5.45-.45-2.93.93-5.9 3.48-7.36 1.88-1.09 4.23-1.26 6.25-.47V12.2c-1.13-.53-2.5-.46-3.55.22-.97.61-1.55 1.74-1.47 2.87.05 1.13.7 2.18 1.68 2.75 1 .6 2.32.55 3.26-.15.82-.6 1.3-1.6 1.25-2.62V.02z" />
                        </svg>
                      </a>
                      <a
                        href={`${contactConfig.whatsapp.link}?text=${encodeURIComponent(contactConfig.whatsapp.defaultMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full border border-slate-800 hover:border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all bg-space-deep/40"
                        aria-label="WhatsApp"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.528 2.03 14.05 1.01 11.412 1.01c-5.437 0-9.863 4.371-9.867 9.801-.001 1.73.443 3.41 1.284 4.887l-.975 3.562 3.656-.959c1.552.84 3.09 1.295 4.548 1.295zm10.95-6.618c-.295-.148-1.747-.862-2.019-.96-.272-.099-.47-.148-.667.148-.198.296-.766.96-.94 1.157-.173.198-.347.222-.642.074-.295-.148-1.246-.459-2.375-1.464-.877-.782-1.47-1.747-1.642-2.044-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.667-1.609-.913-2.203-.24-.577-.482-.497-.667-.506-.172-.008-.371-.01-.57-.01-.198 0-.52.074-.792.371-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.747-.715 1.994-1.402.247-.687.247-1.277.173-1.402-.073-.125-.27-.199-.567-.346z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-900/60 text-[10px] text-silver/40 tracking-wider text-start">
              {t("contact.sidebar.responseTime")}
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 p-6 sm:p-10 rounded-2xl border border-white/[0.12] bg-space-card/95 shadow-xl relative overflow-hidden flex flex-col justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-transparent pointer-events-none" />

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5 text-start">
                    <label htmlFor="name" className="text-xs font-semibold text-silver uppercase tracking-wider">
                      {t("contact.form.name")}
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder={t("contact.form.namePlaceholder")}
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-space-deep border border-slate-800 focus:border-accent/40 focus:bg-space-dark rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-700 outline-none transition-colors duration-200"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 text-start">
                    <label htmlFor="email" className="text-xs font-semibold text-silver uppercase tracking-wider">
                      {t("contact.form.email")}
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder={t("contact.form.emailPlaceholder")}
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-space-deep border border-slate-800 focus:border-accent/40 focus:bg-space-dark rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-700 outline-none transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 text-start">
                  <label htmlFor="subject" className="text-xs font-semibold text-silver uppercase tracking-wider">
                    {t("contact.form.program")}
                  </label>
                  <div className="relative flex items-center">
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full appearance-none bg-space-deep border border-slate-800 focus:border-accent/40 focus:bg-space-dark rounded-lg pl-3.5 pr-10 rtl:pl-10 rtl:pr-3.5 py-2.5 text-sm text-silver-light outline-none transition-colors duration-200"
                    >
                      <option value="elementary">{t("contact.form.subjects.elementary")}</option>
                      <option value="preparatory">{t("contact.form.subjects.preparatory")}</option>
                      <option value="secondary">{t("contact.form.subjects.secondary")}</option>
                      <option value="general">{t("contact.form.subjects.general")}</option>
                    </select>
                    <ChevronDown className="absolute right-3.5 rtl:left-3.5 rtl:right-auto w-4 h-4 text-silver-light pointer-events-none" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 text-start">
                  <label htmlFor="message" className="text-xs font-semibold text-silver uppercase tracking-wider">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder={t("contact.form.messagePlaceholder")}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-space-deep border border-slate-800 focus:border-accent/40 focus:bg-space-dark rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-700 outline-none transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3 rounded-full font-display font-semibold text-sm btn-accent flex items-center justify-center gap-2"
                >
                  <Send className={`w-4 h-4 ${lang === 'ar' ? 'scale-x-[-1]' : ''}`} />
                  <span>{t("contact.form.submit")}</span>
                </button>
              </form>
            ) : (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-5">
                <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                  <Check className="w-6 h-6" />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-display font-bold text-lg text-white">
                    {t("contact.form.successTitle")}
                  </h3>
                  <p className="text-sm text-silver leading-relaxed max-w-xs">
                    {t("contact.form.successText")}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
