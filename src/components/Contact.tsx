"use client";

import { motion } from "framer-motion";
import { MessageCircle, HeartHandshake } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-200 h-200 bg-emerald-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-150 h-150 bg-emerald-50 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-emerald-950 text-white rounded-3xl p-8 md:p-16 shadow-2xl"
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Accessible to Everyone</h2>
            <p className="text-emerald-100/90 text-lg">
              We believe that spiritual guidance should be available to all who seek it. Our services operate on a flexible donation model.
            </p>
          </div>

          <div className="bg-emerald-900/50 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-12 border border-emerald-800/50 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-emerald-800 flex items-center justify-center shrink-0">
              <HeartHandshake className="w-8 h-8 text-emerald-300" />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-white">Pay What You Like</h4>
              <p className="text-emerald-200">
                It's a paid service, but you decide the amount. Donate whatever you feel comfortable with as Hadiya.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://wa.me/1234567890?text=Assalamu%20Alaikum,%20I%20am%20interested%20in%20your%20Quranic%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 px-8 py-4 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] group"
            >
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Contact on WhatsApp to Begin
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}