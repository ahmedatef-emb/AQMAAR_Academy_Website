"use client";

import React from "react";
import { ArrowRight, Layers, Cpu, Terminal } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { lang, t } = useLanguage();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-8 sm:pt-12 lg:pt-16 pb-16 overflow-hidden bg-space-dark">
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(148,163,184,0.06)_0%,transparent_70%)] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(52,211,153,0.03)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          <div className="lg:col-span-6 flex flex-col gap-6 text-start">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.1] text-white">
              {lang === "en" ? (
                <>
                  Tomorrow&apos;s Space <br />
                  Engineers, <br />
                </>
              ) : (
                <>
                  {t("hero.titlePre")} <br />
                  {t("hero.titleMiddle")} <br />
                </>
              )}
              <span className="bg-gradient-to-r from-silver-light via-white to-accent text-gradient">
                {t("hero.titlePost")}
              </span>
            </h1>

            <p className="text-sm sm:text-base text-silver leading-relaxed max-w-xl">
              {t("hero.description")}
            </p>

            <div className="grid grid-cols-3 gap-2 max-w-xs sm:max-w-sm mt-1">
              <div className="p-2 border border-white/[0.04] bg-space-deep/30 rounded-lg flex flex-col gap-1 glass">
                <Terminal className="w-4 h-4 text-silver" />
                <span className="text-[12px] font-semibold text-silver-light leading-tight">{t("hero.pillars.software")}</span>
                <span className="text-[10px] text-slate-500 leading-tight">{t("hero.pillars.softwareDesc")}</span>
              </div>
              <div className="p-2 border border-white/[0.04] bg-space-deep/30 rounded-lg flex flex-col gap-1 glass">
                <Cpu className="w-4 h-4  text-accent" />
                <span className="text-[12px] font-semibold text-silver-light leading-tight">{t("hero.pillars.hardware")}</span>
                <span className="text-[10px] text-slate-500 leading-tight">{t("hero.pillars.hardwareDesc")}</span>
              </div>
              <div className="p-2 border border-white/[0.04] bg-space-deep/30 rounded-lg flex flex-col gap-1 glass">
                <Layers className="w-4 h-4  text-silver" />
                <span className="text-[12px] font-semibold text-silver-light leading-tight">{t("hero.pillars.cad")}</span>
                <span className="text-[10px] text-slate-500 leading-tight">{t("hero.pillars.cadDesc")}</span>
              </div>
            </div>

            <div className="mt-2">
              <a
                href="#programs"
                onClick={(e) => handleScrollTo(e, "#programs")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-display font-semibold text-sm btn-accent"
              >
                <span>{t("hero.ctaExplore")}</span>
                <ArrowRight className={`w-4 h-4 transition-transform ${lang === "ar" ? "rotate-180" : ""}`} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center items-center relative w-full h-[320px] sm:h-[480px] lg:h-[560px] max-w-[650px] lg:max-w-none mx-auto">
            <div className="absolute inset-4 border border-dashed border-slate-900/60 rounded-full pointer-events-none animate-[orbit-spin_40s_linear_infinite]" />

            <div className="w-full h-full relative p-2 sm:p-4">
              <div className="relative w-full h-full rounded-2xl overflow-hidden glass border border-white/[0.08] shadow-2xl">
                <Image
                  src="/student_rocket_lab.png"
                  alt="Students assembling a cubesat satellite in a laboratory"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-dark/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
