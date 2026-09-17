"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-emerald-950 text-white">
      {/* Background patterns and gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900 to-emerald-950 opacity-90"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.83-25.46 25.459-25.458-25.46.83-.83 24.628 24.628L54.627 0zm-53.797 60l-.83-.83 25.46-25.459 25.458 25.46-.83.83-24.628-24.628L.83 60zm53.797 0l.83-.83-25.46-25.459-25.458 25.46.83.83 24.628-24.628L54.627 60zM0 54.627l.83.83-25.46-25.459-25.458 25.46-.83-.83 24.628-24.628L0 54.627zm60 0l-.83.83-25.46-25.459-25.458 25.46.83-.83 24.628-24.628L60 54.627zM29.172 29.172l.828-.828.828.828-.828.828-.828-.828z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")"
          }}
        ></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-5xl flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-block bg-emerald-800/50 backdrop-blur-sm border border-emerald-700/50 text-emerald-100 px-6 py-2 rounded-full font-serif italic text-lg"
        >
          Bismillah ir-Rahman ir-Rahim
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight tracking-tight drop-shadow-lg"
        >
          Divine Guidance &<br />
          <span className="text-emerald-400">Spiritual Healing</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-emerald-100/90 mb-10 max-w-2xl font-light leading-relaxed"
        >
          Discover the beauty of Quranic recitation with proper Tajweed and find solutions to life's challenges through powerful Islamic spiritual Wazaif.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="#services"
            className="bg-white text-emerald-950 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition-colors shadow-xl"
          >
            Explore Services
          </Link>
          <a
            href="https://wa.me/1234567890?text=Assalamu%20Alaikum,%20I%20am%20interested%20in%20your%20Quranic%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 bg-emerald-600/20 backdrop-blur-sm border border-emerald-500/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-600/40 transition-all"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
