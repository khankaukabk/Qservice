import { MessageCircle, Calendar } from "lucide-react"; // install lucide-react or use standard SVG icons

export default function MobileStickyCTA() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 p-3 shadow-lg md:hidden flex gap-2 items-center">
            <a
                href="https://wa.me/1234567890?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20book%20a%20free%20trial%20class."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 text-white font-medium py-3 rounded-lg text-sm active:scale-95 transition-transform"
            >
                <span className="font-semibold">WhatsApp Us</span>
            </a>
            <a
                href="#pricing"
                className="flex-1 flex items-center justify-center gap-2 bg-amber-600 text-white font-semibold py-3 rounded-lg text-sm active:scale-95 transition-transform"
            >
                <span>Book Free Trial</span>
            </a>
        </div>
    );
}