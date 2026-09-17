import type { Metadata } from "next";
import { Amiri, Outfit } from "next/font/google";
import "./globals.css";

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hidayah | Premium Quranic Services & Spiritual Wazaif",
  description: "Experience beautiful Quran recitation with Tajweed and find peace with Islamic spiritual Wazaif for any problem.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${amiri.variable} ${outfit.variable} scroll-smooth antialiased bg-slate-50 text-slate-900`}
    >
      <body className="min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
