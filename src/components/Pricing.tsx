export default function Pricing() {
    return (
        <section className="py-16 bg-slate-50" id="pricing">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-10 text-center text-slate-800">Affordable Learning Plans</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Basic Plan */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center">
                        <h3 className="text-xl font-bold mb-4">Basic</h3>
                        <p className="text-4xl font-bold mb-6">$30<span className="text-lg text-slate-500 font-normal">/mo</span></p>
                        <ul className="text-slate-600 space-y-3 mb-8">
                            <li>2 Classes per week</li>
                            <li>30 min per session</li>
                            <li>Basic Tajweed rules</li>
                        </ul>
                        <button className="w-full py-2 bg-slate-800 text-white rounded hover:bg-slate-700 transition">Start Free Trial</button>
                    </div>
                    {/* Add more plans here like Standard and Premium */}
                </div>
            </div>
        </section>
    );
}