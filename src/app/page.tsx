import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import About from "@/components/About";
import Services from "@/components/Services";
import Tutors from "@/components/Tutors";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-slate-50 text-slate-900 pb-16 md:pb-0">
      <Navbar />
      <Hero />
      <TrustStats />
      <About />
      <Services />
      <Tutors />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <MobileStickyCTA />

      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 mb-12 md:mb-0">
        <div className="max-w-6xl mx-auto px-4 text-center text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Hidayah Quranic Services. May Allah bless your learning journey.</p>
        </div>
      </footer>
    </main>
  );
}