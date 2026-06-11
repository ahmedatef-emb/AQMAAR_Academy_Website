"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const { lang, t } = useLanguage();
  const faqList: FAQItem[] = t("faq.faqs");

  return (
    <section id="faq" className="relative py-16 bg-space-dark border-t border-slate-900/60">
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(148,163,184,0.03)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <div className="section-label">
            <span className="text-xs font-semibold text-silver uppercase tracking-wider">{t("faq.label")}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            {t("faq.title")}{" "}
            <span className="bg-gradient-to-r from-silver-light via-silver-bright to-accent text-gradient">
              {t("faq.titleGradient")}
            </span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3.5 w-full">
          {faqList.map((faq, index) => (
            <details
              key={faq.question}
              className="faq-details border border-white/[0.05] rounded-2xl bg-space-deep/40 panel group"
              open={index === 0}
            >
              <summary className="faq-summary w-full px-6 py-5 flex items-center justify-between text-start gap-4 cursor-pointer select-none">
                <span className="font-display font-semibold text-sm sm:text-base text-white text-start">
                  {faq.question}
                </span>
                <ChevronDown className="w-4 h-4 shrink-0 text-silver group-open:rotate-180 group-open:text-accent transition-transform duration-200" />
              </summary>
              <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-silver leading-relaxed border-t border-white/[0.04] text-start">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
