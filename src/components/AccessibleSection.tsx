export default function AccessibleSection() {
    return (
        <section className="w-full bg-slate-900 py-16 px-4">
            <div className="max-w-2xl mx-auto bg-[#032e22] text-white rounded-3xl p-6 sm:p-10 text-center shadow-2xl border border-emerald-900/50 flex flex-col items-center">

                <h2 className="text-2xl sm:text-3xl font-serif font-semibold tracking-wide text-emerald-50 mb-4 leading-tight">
                    Money should never stop you from learning the Quran.
                </h2>

                <p className="text-sm sm:text-base text-emerald-100/90 max-w-md mx-auto mb-8 font-light leading-relaxed">
                    Assalamu Alaikum. If standard pricing plans do not fit your family's budget, please reach out. We offer a flexible <strong>Hadiya (Pay-What-You-Can)</strong> option so everyone can access classes.
                </p>

                <div className="w-full bg-[#022118] border border-emerald-800/40 rounded-2xl p-6 mb-8 flex flex-col items-center shadow-inner">
                    <div className="w-14 h-14 rounded-full bg-[#044a37] flex items-center justify-center mb-4 text-emerald-300 shadow-md">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Pay What You Like</h3>
                    <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed max-w-sm">
                        It's a paid service, but you decide the amount. Donate whatever you feel comfortable with as Hadiya.
                    </p>
                </div>

                {/* Button with iPhone formatting fixes applied */}
                <a
                    href="https://wa.me/1234567890?text=Assalamu%20Alaikum,%20I%20am%20interested%20in%20the%20Hadiya%20program."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 sm:px-8 py-4 bg-[#00c985] hover:bg-[#00b377] text-slate-950 font-semibold text-sm sm:text-base rounded-full shadow-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 sm:gap-3 whitespace-nowrap"
                >
                    <svg className="w-5 h-5 shrink-0 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.34 5L2 22l5.12-1.31C8.57 21.53 10.24 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.55 0-3.03-.43-4.3-1.21l-.31-.19-3.04.78.81-2.97-.2-.32C4.16 14.8 3.7 13.43 3.7 12c0-4.58 3.72-8.3 8.3-8.3s8.3 3.72 8.3 8.3-3.72 8.3-8.3 8.3z" />
                    </svg>
                    <span>Contact on WhatsApp to Begin</span>
                </a>

            </div>
        </section>
    );
}