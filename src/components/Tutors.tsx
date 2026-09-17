export default function Tutors() {
    const tutors = [
        {
            name: "Sheikh Abdullah Al-Azhari",
            role: "Lead Tajweed Specialist",
            credentials: "Al-Azhar University Graduate • 10+ Yrs Exp.",
            specialty: "Advanced Tajweed & Hifz",
        },
        {
            name: "Ustadha Fatima Al-Zahra",
            role: "Female Quran Tutoress",
            credentials: "Ijazah in Hafs 'an 'Aasim • Qualified for Kids",
            specialty: "Quran Reading for Sisters & Children",
        },
    ];

    return (
        <section className="py-12 px-4 bg-white" id="tutors">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Learn From Verified Scholars</h2>
                    <p className="text-slate-600 text-sm sm:text-base mt-2">All our tutors hold authentic Ijazah credentials and undergo background checks.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    {tutors.map((tutor, idx) => (
                        <div key={idx} className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col justify-between">
                            <div>
                                <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 bg-amber-100 px-2.5 py-1 rounded-full">
                                    Verified Tutor
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 mt-3">{tutor.name}</h3>
                                <p className="text-sm font-medium text-slate-700 mt-1">{tutor.role}</p>
                                <p className="text-xs text-slate-500 mt-2">{tutor.credentials}</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-slate-200 text-xs text-slate-600 font-medium">
                                Focus: {tutor.specialty}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}