export default function AccessibleSection() {
    return (
        <section className="w-full bg-slate-900 py-16 px-4">
            <div className="max-w-2xl mx-auto bg-[#032e22] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-emerald-900/50">

                <div className="text-emerald-400 mb-4">
                    {/* Simple quote icon */}
                    <svg className="w-10 h-10 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-50 mb-4 leading-tight">
                    Money should never stop you or your children from learning the Quran.
                </h2>

                <div className="space-y-4 text-emerald-100/90 font-light leading-relaxed mb-8">
                    <p>
                        Assalamu Alaikum. Our primary mission is to connect hearts with the Book of Allah, not just to run a business.
                    </p>
                    <p>
                        If our standard pricing plans do not fit your family's current budget, please do not let that stop you from reaching out. We operate on a sincere <strong>Hadiya (Pay-What-You-Can)</strong> model for those who need it.
                    </p>
                    <p>
                        Message us privately, tell us what you can comfortably afford, and we will match you with a teacher. No questions asked.
                    </p>
                </div>

                <a
                    href="https://wa.me/1234567890?text=Assalamu%20Alaikum,%20I%20am%20interested%20in%20the%20Hadiya%20program."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex px-8 py-4 bg-[#00c985] hover:bg-[#00b377] text-slate-950 font-bold rounded-xl transition-all active:scale-95 items-center gap-3"
                >
                    Message Us Privately on WhatsApp
                </a>
            </div>
        </section>
    );
}