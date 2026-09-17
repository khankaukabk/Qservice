export default function Testimonials() {
    return (
        <section className="py-16 bg-white" id="testimonials">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-10 text-slate-800">What Our Students Say</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-6 bg-slate-50 rounded-lg italic text-slate-700">
                        "Alhamdulillah, the tutors are incredibly patient. My tajweed has improved significantly in just a few months."
                        <div className="mt-4 font-semibold not-italic text-slate-900">- Ahmad K.</div>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-lg italic text-slate-700">
                        "Having a female tutor for my daughters has been a blessing. They look forward to their classes every week."
                        <div className="mt-4 font-semibold not-italic text-slate-900">- Fatima S.</div>
                    </div>
                </div>
            </div>
        </section>
    );
}