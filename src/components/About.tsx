export default function About() {
    return (
        <section className="py-16 bg-white" id="about">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6 text-slate-800">Why Choose Us?</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
                    We are dedicated to spreading the light of the Quran. Our male and female tutors are Ijazah-certified and highly experienced in teaching students of all ages, ensuring proper Tajweed and memorization (Hifz) techniques.
                </p>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <div className="p-6 bg-slate-50 rounded-lg">
                        <h3 className="font-semibold text-xl mb-2">Certified Tutors</h3>
                        <p className="text-slate-600">Learn from native Arabic speakers and globally certified scholars.</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-lg">
                        <h3 className="font-semibold text-xl mb-2">Flexible Schedule</h3>
                        <p className="text-slate-600">Choose class timings that fit perfectly into your daily routine, 24/7.</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-lg">
                        <h3 className="font-semibold text-xl mb-2">1-on-1 Sessions</h3>
                        <p className="text-slate-600">Get personalized attention to master recitation at your own pace.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}