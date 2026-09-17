"use client";

import { Moon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-slate-200 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Moon className="w-8 h-8 text-emerald-600 group-hover:text-emerald-500 transition-colors" />
          <span className="text-2xl font-semibold tracking-tight text-slate-900">
            Hidayah
          </span>
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="#services"
            className="hidden md:block text-slate-600 hover:text-emerald-600 transition-colors"
          >
            Services
          </Link>
          <Link
            href="#contact"
            className="bg-emerald-600 text-white px-5 py-2.5 rounded-full hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
