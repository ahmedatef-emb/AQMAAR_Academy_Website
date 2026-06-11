"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Globe } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

interface NavItem {
  name: string;
  href: string;
  key: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#home", key: "home" },
  { name: "Programs", href: "#programs", key: "programs" },
  { name: "FAQ", href: "#faq", key: "faq" },
  { name: "Contact", href: "#contact", key: "contact" },
];

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Helper to programmatically close the mobile drawer
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  // Sync body scrolling lock with mobile drawer state
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  // Sync window hash changes to close the drawer
  useEffect(() => {
    const handleHashChange = () => {
      setIsDrawerOpen(false);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="site-header">
      <div className="site-header-bar pointer-events-auto">
        <a href="#home" onClick={(e) => { handleScrollTo(e, "#home"); closeDrawer(); }} className="site-header-logo">
          <Image
            src="/aqmaar_academy_logo.png"
            alt="AQMAAR Academy"
            width={720}
            height={480}
            className="site-header-logo-img"
            priority
          />
        </a>

        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="relative px-5 py-2 text-[15px] sm:text-[17px] font-display font-semibold text-silver hover:text-white transition-colors duration-200 nav-link tracking-wide"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-800 hover:border-slate-700 text-xs font-semibold text-silver-light hover:text-white transition-all bg-space-deep/40 cursor-pointer pointer-events-auto"
          >
            <Globe className="w-3.5 h-3.5 text-silver-light pointer-events-none" />
            <span className="pointer-events-none">{lang === "en" ? "العربية" : "English"}</span>
          </button>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-display font-semibold text-sm btn-accent"
          >
            <span>{t("nav.enrollNow")}</span>
            <ArrowRight className={`w-3.5 h-3.5 transition-transform ${lang === "ar" ? "rotate-180" : ""}`} />
          </a>
        </div>

        <button
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          className="mobile-burger lg:hidden pointer-events-auto"
          aria-label={isDrawerOpen ? "Close menu" : "Open menu"}
        >
          {isDrawerOpen ? (
            <X className="w-6 h-6 pointer-events-none" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6 pointer-events-none" aria-hidden="true" />
          )}
        </button>
      </div>

      {isDrawerOpen && (
        <div
          onClick={() => setIsDrawerOpen(false)}
          className="mobile-nav-backdrop lg:hidden pointer-events-auto"
          aria-label="Close menu"
        />
      )}

      {isDrawerOpen && (
        <nav className="mobile-nav-drawer lg:hidden pointer-events-auto" aria-label="Mobile navigation">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  handleScrollTo(e, item.href);
                  closeDrawer();
                }}
                className="mobile-nav-link text-base font-medium text-silver hover:text-white py-3 border-b border-slate-900 transition-colors text-start"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}

            {/* Language Switcher on mobile */}
            <a
              href="#"
              role="button"
              onClick={(e) => {
                e.preventDefault();
                const nextLang = lang === "en" ? "ar" : "en";
                setIsDrawerOpen(false);
                setTimeout(() => {
                  setLang(nextLang);
                }, 50);
              }}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-full border border-slate-800 text-sm font-semibold text-silver-light hover:text-white transition-all bg-space-deep/40 cursor-pointer pointer-events-auto select-none"
            >
              <Globe className="w-4 h-4 text-silver-light pointer-events-none" />
              <span className="pointer-events-none">{lang === "en" ? "العربية" : "English"}</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                handleScrollTo(e, "#contact");
                closeDrawer();
              }}
              className="mobile-nav-link w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-display font-semibold text-sm text-space-dark bg-gradient-to-r from-silver-light via-white to-silver-bright"
            >
              <span>{t("nav.enrollNow")}</span>
              <ArrowRight className={`w-4 h-4 pointer-events-none ${lang === "ar" ? "rotate-180" : ""}`} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
