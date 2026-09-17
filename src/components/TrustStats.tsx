export default function TrustStats() {
    const stats = [
        { value: "500+", label: "Active Students" },
        { value: "100%", label: "Ijazah Certified Tutors" },
        { value: "4.9/5★", label: "Student Rating" },
        { value: "3 Days", label: "Free Trial Class" },
    ];

    return (
        <section className="bg-slate-900 text-white py-6 px-4 border-y border-slate-800">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-center">
                {stats.map((item, idx) => (
                    <div key={idx} className="p-3 bg-slate-800/50 rounded-xl border border-slate-800">
                        <div className="text-xl sm:text-2xl font-bold text-amber-400">{item.value}</div>
                        <div className="text-xs text-slate-300 mt-1 uppercase tracking-wider font-medium">{item.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}