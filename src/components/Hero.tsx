export default function Hero() {
  return (
    <section className="relative bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 text-white pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Trust Pill */}
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-full text-amber-300 text-xs font-medium mb-6">
          <span>✨ Certified Male & Female Quran Tutors</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
          Learn Quran Online with <span className="text-amber-400">Proper Tajweed</span> & Confidence
        </h1>

        <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          One-on-one live interactive Quran, Arabic, and Islamic studies classes customized for kids and adults. Flexible schedules starting anytime.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center max-w-md mx-auto">
          <a
            href="#pricing"
            className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl text-center shadow-lg transition active:scale-95"
          >
            Start Your 3-Day Free Trial
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto bg-slate-800 border border-slate-700 text-slate-200 font-medium px-6 py-4 rounded-xl text-center transition active:scale-95"
          >
            Learn How It Works
          </a>
        </div>

        {/* Risk Reversal Guarantee */}
        <p className="text-xs text-slate-400 mt-4">
          🔒 No credit card required • 100% money-back guarantee
        </p>
      </div>
    </section>
  );
}