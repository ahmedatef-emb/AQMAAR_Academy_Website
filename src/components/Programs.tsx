"use client";

import React from "react";
import Image from "next/image";
import { Layers, Cpu, Terminal, ArrowRight, CheckCircle, ChevronDown, DollarSign } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { enrollLinks } from "@/data/enrollLinks";

interface ProgramPillars {
  cad: string;
  hardware: string;
  software: string;
}

interface ProgramTheme {
  /** Accent text color */
  accent: string;
  /** Lighter accent for icon backgrounds */
  accentMuted: string;
  /** Border glow on hover */
  borderHover: string;
  /** Age badge bg */
  badgeBg: string;
  /** Title gradient */
  titleGradient: string;
  /** Skill pill border hover */
  skillBorderHover: string;
  /** Details button active states */
  detailsActive: string;
  detailsActiveBg: string;
  detailsHoverBorder: string;
  detailsHoverBg: string;
  /** Enroll button gradient */
  enrollGradient: string;
  enrollHoverShadow: string;
  /** Pillar icon accent */
  pillarAccent: string;
  /** Price icon color */
  priceIcon: string;
  /** The permanent subtle colored border for the card */
  cardBorder: string;
  /** The glow shadow and border to apply when the details card is open */
  cardOpenGlow: string;
  /** The themed style for skill tags */
  skillBorder: string;
}

interface Program {
  title: string;
  age: string;
  duration: string;
  price: string;
  shortDesc: string;
  pillars: ProgramPillars;
  capstone: string;
  skills: string[];
  image: string;
  theme: ProgramTheme;
  enrollUrl: string;
}

/* ────────────────────────────────────────────
   Color themes per age group
   • Juniors (8–11):  Playful violet/purple
   • Seniors (12–14): Electric cyan/blue
   • Pioneers (15–18): Bold amber/orange
   ──────────────────────────────────────────── */
const juniorTheme: ProgramTheme = {
  accent: "text-violet-400",
  accentMuted: "text-violet-400/70",
  borderHover: "hover:border-violet-500/30",
  badgeBg: "bg-violet-950/80 border-violet-400/20",
  titleGradient: "from-white via-violet-200 to-violet-400",
  skillBorderHover: "hover:border-violet-500/40",
  detailsActive: "group-open:border-violet-400 group-open:text-violet-400",
  detailsActiveBg: "group-open:bg-violet-400/10",
  detailsHoverBorder: "hover:border-violet-400/40",
  detailsHoverBg: "hover:bg-violet-400/5",
  enrollGradient: "bg-gradient-to-r from-violet-400 via-violet-300 to-fuchsia-300",
  enrollHoverShadow: "hover:shadow-[0_8px_30px_rgba(167,139,250,0.25)]",
  pillarAccent: "text-violet-400",
  priceIcon: "text-violet-400",
  cardBorder: "border-violet-500/20",
  cardOpenGlow: "open:border-violet-400/50 open:shadow-[0_0_25px_rgba(167,139,250,0.15)]",
  skillBorder: "border-violet-500/25 text-violet-300",
};

const seniorTheme: ProgramTheme = {
  accent: "text-cyan-400",
  accentMuted: "text-cyan-400/70",
  borderHover: "hover:border-cyan-500/30",
  badgeBg: "bg-cyan-950/80 border-cyan-400/20",
  titleGradient: "from-white via-cyan-200 to-cyan-400",
  skillBorderHover: "hover:border-cyan-500/40",
  detailsActive: "group-open:border-cyan-400 group-open:text-cyan-400",
  detailsActiveBg: "group-open:bg-cyan-400/10",
  detailsHoverBorder: "hover:border-cyan-400/40",
  detailsHoverBg: "hover:bg-cyan-400/5",
  enrollGradient: "bg-gradient-to-r from-cyan-400 via-cyan-300 to-sky-300",
  enrollHoverShadow: "hover:shadow-[0_8px_30px_rgba(34,211,238,0.25)]",
  pillarAccent: "text-cyan-400",
  priceIcon: "text-cyan-400",
  cardBorder: "border-cyan-500/20",
  cardOpenGlow: "open:border-cyan-400/50 open:shadow-[0_0_25px_rgba(34,211,238,0.15)]",
  skillBorder: "border-cyan-500/25 text-cyan-300",
};

const pioneerTheme: ProgramTheme = {
  accent: "text-amber-400",
  accentMuted: "text-amber-400/70",
  borderHover: "hover:border-amber-500/30",
  badgeBg: "bg-amber-950/80 border-amber-400/20",
  titleGradient: "from-white via-amber-200 to-amber-400",
  skillBorderHover: "hover:border-amber-500/40",
  detailsActive: "group-open:border-amber-400 group-open:text-amber-400",
  detailsActiveBg: "group-open:bg-amber-400/10",
  detailsHoverBorder: "hover:border-amber-400/40",
  detailsHoverBg: "hover:bg-amber-400/5",
  enrollGradient: "bg-gradient-to-r from-amber-400 via-amber-300 to-orange-300",
  enrollHoverShadow: "hover:shadow-[0_8px_30px_rgba(251,191,36,0.25)]",
  pillarAccent: "text-amber-400",
  priceIcon: "text-amber-400",
  cardBorder: "border-amber-500/20",
  cardOpenGlow: "open:border-amber-400/50 open:shadow-[0_0_25px_rgba(251,191,36,0.15)]",
  skillBorder: "border-amber-500/25 text-amber-300",
};

function ProgramCard({ prog }: { prog: Program }) {
  const { lang, t: translate } = useLanguage();
  const themeStyles = prog.theme;
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      {...{ open: isOpen ? true : undefined }}
      className={`program-details w-full h-auto lg:h-[450px] open:h-auto open:grid open:grid-rows-[auto_1fr] flex flex-col rounded-2xl panel border ${themeStyles.cardBorder} bg-space-deep/90 group overflow-hidden ${themeStyles.borderHover} ${themeStyles.cardOpenGlow} transition-all duration-300`}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="program-summary flex flex-col flex-1 group-open:flex-none cursor-pointer select-none list-none"
      >
        {/* ── Overlay Image Header ── */}
        <div className="relative w-full h-48 sm:h-52 overflow-hidden">
          <Image
            src={prog.image}
            alt={`${prog.title} program`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-space-deep via-space-deep/50 to-space-deep/10 pointer-events-none" />

          {/* Age badge floated on image */}
          <span className={`absolute top-4 right-4 text-[10px] sm:text-xs font-semibold text-white uppercase tracking-wider backdrop-blur-sm border px-3 py-1.5 rounded-full ${themeStyles.badgeBg}`}>
            {prog.age}
          </span>

          {/* Title on image */}
          <div className="absolute bottom-4 left-5 right-5 z-[1]">
            <h3 className={`font-display font-extrabold text-2xl sm:text-[1.75rem] bg-gradient-to-r ${themeStyles.titleGradient} text-gradient tracking-tight leading-tight text-start`}>
              {prog.title}
            </h3>
          </div>
        </div>

        {/* ── Card Body ── */}
        <div className="flex flex-col flex-1 p-6 sm:p-7">
          <p className="text-sm text-silver-light leading-relaxed min-h-[5.75rem] text-start">
            {prog.shortDesc}
          </p>

          {/* Skill Tags */}
          <div className="flex flex-wrap gap-2 mt-4 justify-start">
            {prog.skills.map((skill) => (
              <span
                key={skill}
                className={`text-[10px] sm:text-[11px] font-medium px-2.5 py-1 rounded-md bg-space-dark border ${themeStyles.skillBorder} ${themeStyles.skillBorderHover} transition-colors duration-200`}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Footer: Duration + Details toggle */}
          <div className="border-t border-white/[0.04] pt-4 mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shrink-0">
            <span className="text-xs text-silver/50 font-semibold uppercase tracking-wider text-start">
              {prog.duration}
            </span>
            <span className={`w-full sm:w-auto flex items-center justify-center gap-1.5 py-2 px-4.5 rounded-full border border-white/10 ${themeStyles.detailsHoverBorder} bg-white/[0.01] ${themeStyles.detailsHoverBg} text-silver-light hover:text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 min-h-[38px] ${themeStyles.detailsActive} ${themeStyles.detailsActiveBg}`}>
              <span className="group-open:hidden">{translate("programs.details")}</span>
              <span className="hidden group-open:inline">{translate("programs.hideDetails")}</span>
              <ChevronDown className="w-4 h-4 shrink-0 group-open:rotate-180 transition-transform duration-300" />
            </span>
          </div>
        </div>
      </div>

      {/* ═══════ Expanded Details Panel ═══════ */}
      <div className="px-6 sm:px-7 pb-7 border-t border-white/[0.04] flex flex-col flex-1 hidden group-open:flex">
        {/* Curriculum header */}
        <div className="flex items-center gap-3.5 py-4 border-b border-white/[0.04]">
          <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-slate-800/80 shrink-0">
            <Image
              src={prog.image}
              alt=""
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <div className="text-start">
            <span className={`text-xs font-bold ${themeStyles.accent} uppercase tracking-widest block`}>
              {prog.title}
            </span>
            <h4 className="font-display font-bold text-base text-white">
              {translate("programs.curriculum")}
            </h4>
          </div>
        </div>

        {/* Three pillars */}
        <div className="flex flex-col gap-5 py-5">
          <div className="flex gap-3.5 items-start">
            <Terminal className={`w-4.5 h-4.5 ${themeStyles.accent} shrink-0 mt-0.5`} />
            <div className="flex flex-col gap-1 text-start">
              <span className="text-xs font-bold text-white uppercase tracking-wider">{translate("programs.pillars.software")}</span>
              <p className="text-xs sm:text-[13px] text-silver-light leading-relaxed lg:min-h-[5.75rem]">{prog.pillars.software}</p>
            </div>
          </div>

          <div className="flex gap-3.5 items-start">
            <Cpu className={`w-4.5 h-4.5 ${themeStyles.pillarAccent} shrink-0 mt-0.5`} />
            <div className="flex flex-col gap-1 text-start">
              <span className="text-xs font-bold text-white uppercase tracking-wider">{translate("programs.pillars.hardware")}</span>
              <p className="text-xs sm:text-[13px] text-silver-light leading-relaxed lg:min-h-[5.75rem]">{prog.pillars.hardware}</p>
            </div>
          </div>

          <div className="flex gap-3.5 items-start">
            <Layers className={`w-4.5 h-4.5 ${themeStyles.accent} shrink-0 mt-0.5`} />
            <div className="flex flex-col gap-1 text-start">
              <span className="text-xs font-bold text-white uppercase tracking-wider">{translate("programs.pillars.cad")}</span>
              <p className="text-xs sm:text-[13px] text-silver-light leading-relaxed lg:min-h-[5.75rem]">{prog.pillars.cad}</p>
            </div>
          </div>
        </div>

        {/* Capstone + Price — stacked vertically */}
        <div className="flex flex-col gap-3.5 pt-5 border-t border-white/[0.04] mt-auto">
          {/* Capstone Card */}
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-3 hover:bg-slate-900/60 hover:border-slate-700/60 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)] lg:min-h-[6.25rem]">
            <div className="w-9 h-9 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle className={`w-4 h-4 ${themeStyles.accentMuted}`} />
            </div>
            <div className="flex flex-col gap-0.5 min-w-0 text-start">
              <span className="text-[9px] font-bold text-silver-light/40 uppercase tracking-widest">{translate("programs.capstone")}</span>
              <span className="text-xs text-silver-bright font-medium leading-relaxed">{prog.capstone}</span>
            </div>
          </div>

          {/* Price Card */}
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-center gap-3 hover:bg-slate-900/60 hover:border-slate-700/60 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
            <div className="w-9 h-9 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-center shrink-0">
              <DollarSign className={`w-4 h-4 ${themeStyles.priceIcon}`} />
            </div>
            <div className="flex flex-col gap-0.5 text-start">
              <span className="text-[9px] font-bold text-silver-light/40 uppercase tracking-widest">{translate("programs.tuition")}</span>
              <span className="text-sm text-white font-bold tracking-tight">{prog.price}</span>
            </div>
          </div>

          {/* Enroll CTA */}
          <a
            href={prog.enrollUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full mt-1 py-3.5 rounded-full font-display font-semibold text-xs text-space-dark ${themeStyles.enrollGradient} ${themeStyles.enrollHoverShadow} flex items-center justify-center gap-1.5 transition-all duration-300 border border-white/20`}
          >
            <span>{translate("programs.enrollButton")}{prog.title}</span>
            <ArrowRight className={`w-3.5 h-3.5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Programs() {
  const { lang, t } = useLanguage();

  const tracksKeys = ["juniors", "seniors", "pioneers"] as const;
  const themes = {
    juniors: juniorTheme,
    seniors: seniorTheme,
    pioneers: pioneerTheme,
  };
  const images = {
    juniors: "/space_juniors.png",
    seniors: "/space_seniors.png",
    pioneers: "/space_pioneers.png",
  };

  const programsData: Program[] = tracksKeys.map((key) => {
    const trackTrans = t(`programs.tracks.${key}`);
    return {
      title: trackTrans.title,
      age: trackTrans.age,
      duration: trackTrans.duration,
      price: trackTrans.price,
      shortDesc: trackTrans.shortDesc,
      pillars: trackTrans.pillars,
      capstone: trackTrans.capstone,
      skills: trackTrans.skills,
      image: images[key],
      theme: themes[key],
      enrollUrl: enrollLinks[key],
    };
  });

  return (
    <section id="programs" className="relative py-16 bg-space-dark border-t border-slate-900/60">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(148,163,184,0.03)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center gap-4">
          <div className="section-label">
            <span className="text-xs font-semibold text-silver uppercase tracking-wider">{t("programs.label")}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            {t("programs.title")}{" "}
            <span className="bg-gradient-to-r from-silver-light via-silver-bright to-accent text-gradient">
              {t("programs.titleGradient")}
            </span>
          </h2>
          <p className="text-silver text-sm sm:text-base max-w-xl">
            {t("programs.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {programsData.map((prog) => (
            <ProgramCard key={prog.title} prog={prog} />
          ))}
        </div>
      </div>
    </section>
  );
}
