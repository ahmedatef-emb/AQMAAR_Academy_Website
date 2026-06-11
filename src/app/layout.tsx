import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AQMAAR Academy | Space Technology, Rocketry & AI Coding for Kids & Teens",
  description: "AQMAAR Academy is an innovative tech school empowering young learners to master space technology, rocket engineering, AI, coding, and robotics through interactive, project-based learning.",
  keywords: ["AQMAAR Academy", "Space Technology for Kids", "Rocket Science", "Coding for Kids", "Robotics for Teens", "AI Learning", "STEM Education", "Future Skills"],
  authors: [{ name: "AQMAAR Academy" }],
  icons: {
    icon: "/aqmaar_academy_logo.png",
    shortcut: "/aqmaar_academy_logo.png",
    apple: "/aqmaar_academy_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-slate-950 text-white font-sans antialiased selection:bg-accent/30 selection:text-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
