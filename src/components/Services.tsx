"use client";

import { motion } from "framer-motion";
import { BookOpen, HandHeart, CheckCircle2 } from "lucide-react";

export default function Services() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-emerald-950 mb-4">Our Spiritual Offerings</h2>
          <p className="text-slate-600 text-lg">Dedicated to helping you connect with Allah and find peace.</p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Service 1 */}
          <motion.div 
            variants={item}
            className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-100"
          >
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Quran Recitation & Tajweed</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Learn to recite the Holy Quran beautifully with exact pronunciation and Tajweed rules. Whether you are a beginner or looking to perfect your recitation, receive personalized guidance.
            </p>
            <ul className="space-y-3">
              {['Proper Makharij & Sifat', 'Personalized feedback', 'Flexible scheduling'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Service 2 */}
          <motion.div 
            variants={item}
            className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-100"
          >
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
              <HandHeart className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Islamic Spiritual Wazaif</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Find comfort and divine assistance for your everyday problems. We provide authentic, spiritually powerful Wazaif from the Quran and Sunnah to help ease your difficulties.
            </p>
            <ul className="space-y-3">
              {['Authentic supplications', 'Solutions for family & work', 'Spiritual healing (Ruqyah)'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
