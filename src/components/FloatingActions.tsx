"use client";

import { useState, useEffect } from "react";

export default function FloatingActions() {
    const [isVisible, setIsVisible] = useState(false);

    // Show after scrolling down slightly
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // WhatsApp logic
    const handleWhatsApp = () => {
        window.open("https://wa.me/917540007449", "_blank");
    };

    // Calendly logic
    const handleCalendly = () => {
        // @ts-ignore
        if (window.Calendly) {
            // @ts-ignore
            window.Calendly.initPopupWidget({ url: 'https://calendly.com/cibhi-unbound3d/30min' });
        }
    };

    return (
        <div
            className={`fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-center transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.1)] ${isVisible ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-10 opacity-0 pointer-events-none'
                }`}
        >
            {/* WhatsApp Button */}
            <button
                onClick={handleWhatsApp}
                className="group relative flex items-center justify-center w-[52px] h-[52px] bg-green-500/10 backdrop-blur-md border border-green-500/20 rounded-full hover:bg-green-500 hover:scale-110 active:scale-95 transition-all duration-300 shadow-[0_4px_20px_rgba(34,197,94,0.15)] hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]"
                aria-label="Contact on WhatsApp"
            >
                {/* SVG from Tabler Icons / standard WhatsApp vector */}
                <svg
                    className="w-6 h-6 text-green-500 group-hover:text-white transition-colors duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                </svg>
                {/* Tooltip */}
                <div className="absolute right-full mr-4 bg-graphite border border-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap hidden md:block">
                    Chat on WhatsApp
                </div>
            </button>

            {/* Calendly Button */}
            <button
                onClick={handleCalendly}
                className="group relative flex items-center justify-center w-[52px] h-[52px] bg-electric-blue/10 backdrop-blur-md border border-electric-blue/20 rounded-full hover:bg-electric-blue hover:scale-110 active:scale-95 transition-all duration-300 shadow-[0_4px_20px_rgba(0,194,255,0.15)] hover:shadow-[0_0_25px_rgba(0,194,255,0.4)]"
                aria-label="Schedule a Meeting"
            >
                <svg
                    className="w-6 h-6 text-electric-blue group-hover:text-white transition-colors duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect x="4" y="5" width="16" height="16" rx="2" ry="2" />
                    <line x1="16" y1="3" x2="16" y2="7" />
                    <line x1="8" y1="3" x2="8" y2="7" />
                    <line x1="4" y1="11" x2="20" y2="11" />
                    <rect x="8" y="15" width="2" height="2" />
                </svg>
                {/* Tooltip */}
                <div className="absolute right-full mr-4 bg-graphite border border-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap hidden md:block">
                    Book a Call
                </div>
            </button>
        </div>
    );
}
