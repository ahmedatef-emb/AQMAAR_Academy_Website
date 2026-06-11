"use client";

import React from "react";
import { Users, BookOpen, Rocket, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface StatItem {
  id: string;
  label: string;
  value: string;
  icon: React.ReactNode;
}

const statsData: StatItem[] = [
  {
    id: "students",
    label: "Active Students",
    value: "1,000+",
    icon: <Users className="w-5 h-5 text-silver-light" />,
  },
  {
    id: "courses",
    label: "Design Projects",
    value: "100+",
    icon: <BookOpen className="w-5 h-5 text-accent" />,
  },
  {
    id: "projects",
    label: "Rocket Launches",
    value: "500+",
    icon: <Rocket className="w-5 h-5 text-silver-light" />,
  },
  {
    id: "mentors",
    label: "Aerospace Mentors",
    value: "50+",
    icon: <Award className="w-5 h-5 text-accent" />,
  },
];

export default function Stats() {
  const { t } = useLanguage();

  return (
    <section className="relative py-8 bg-space-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="glass rounded-2xl border border-white/[0.05] p-6 md:p-8 shadow-xl shadow-black/20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {statsData.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col items-center text-center gap-3 lg:px-6"
              >
                <div className="w-10 h-10 rounded-full bg-space-deep border border-slate-800/80 flex items-center justify-center">
                  {stat.icon}
                </div>

                <div className="flex flex-col gap-0.5">
                  <span className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-semibold text-silver uppercase tracking-wider">
                    {t(`stats.${stat.id}`)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
