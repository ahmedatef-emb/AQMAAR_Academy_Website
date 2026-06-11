"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Programs from "@/components/Programs";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <WhatsAppButton />

      <div className="relative min-h-screen bg-space-dark text-white flex flex-col overflow-x-clip w-full pt-[4.5rem] sm:pt-20 lg:pt-24">
        {/* Background Star Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1.5px,transparent_1.5px)] bg-[size:24px_24px] pointer-events-none" />

        {/* Main Sections */}
        <main className="relative z-[1] flex-grow">
          <Hero />
          <Stats />
          <Programs />
          <FAQ />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}


