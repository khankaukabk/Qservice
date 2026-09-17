export default function HowItWorks() {
    const steps = [
        {
            num: "01",
            title: "Get in Touch",
            desc: "Send us a quick message on WhatsApp. We usually reply within 15 minutes."
        },
        {
            num: "02",
            title: "Free Evaluation",
            desc: "Meet your teacher for a free 30-minute class to assess your current reading level."
        },
        {
            num: "03",
            title: "Start Learning",
            desc: "Choose a schedule that fits your life and begin your beautiful journey with the Quran."
        }
    ];

    return (
        <section className="py-16 bg-white px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900">How to Get Started</h2>
                    <p className="text-slate-600 mt-3">Three simple steps to begin your journey today.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative flex flex-col items-center text-center p-6">
                            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                                {step.num}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>

                            {/* Connector line for desktop - updated to h-0.5 */}
                            {idx !== 2 && (
                                <div className="hidden md:block absolute top-14 left-[60%] w-full h-0.5 bg-slate-100 -z-10"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}