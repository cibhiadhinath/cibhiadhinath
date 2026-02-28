"use client";

import { useState, useEffect } from "react";

const navLinks = [
    { href: "#work", label: "Work" },
    { href: "#services", label: "Services" },
    { href: "#case-studies", label: "Case Studies" },
    { href: "#process", label: "Process" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40);

            // Track active section
            const sections = navLinks.map((l) => l.href.slice(1)).concat(["contact"]);
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.getBoundingClientRect().top <= 150) {
                    setActiveSection(sections[i]);
                    return;
                }
            }
            setActiveSection("");
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-2xl ${scrolled
                ? "scale-[0.98] drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                : "scale-100"
                }`}
        >
            <div className="bg-[#050505]/60 backdrop-blur-2xl border border-white/10 rounded-full px-5 py-2.5 flex items-center justify-between">

                {/* Logo */}
                <a href="#" className="flex items-center gap-2.5 group shrink-0">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-electric-blue/20 transition-all duration-300">
                        <span className="text-white font-mono font-bold text-sm transition-colors group-hover:text-electric-blue">C</span>
                    </div>
                    <span className="hidden sm:inline-block text-white font-semibold tracking-wide text-[13px] leading-tight pr-4 border-r border-white/10">
                        CIBHI
                    </span>
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex flex-1 items-center justify-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`relative px-4 py-2 rounded-full text-[13px] font-medium tracking-wide transition-all duration-300 ${activeSection === link.href.slice(1)
                                ? "text-white bg-white/10"
                                : "text-muted hover:text-white hover:bg-white/5"
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA & Socials */}
                <div className="hidden md:flex items-center ml-4">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            // @ts-ignore
                            if (window.Calendly) {
                                // @ts-ignore
                                window.Calendly.initPopupWidget({ url: 'https://calendly.com/cibhi-unbound3d/30min' });
                            }
                        }}
                        className="px-5 py-2 bg-white text-black rounded-full text-[13px] font-bold tracking-wide hover:scale-105 active:scale-95 transition-all duration-300"
                    >
                        Let's Talk
                    </button>
                </div>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full hover:bg-white/10 transition-colors duration-300"
                    aria-label="Toggle navigation"
                >
                    <span
                        className={`w-4 h-0.5 bg-white transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                    />
                    <span
                        className={`w-4 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0 scale-0" : ""
                            }`}
                    />
                    <span
                        className={`w-4 h-0.5 bg-white transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                    />
                </button>
            </div>

            {/* Mobile menu - Dropdown specific for pill layout */}
            <div
                className={`md:hidden absolute top-full left-0 right-0 mt-3 rounded-3xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.1)] ${mobileOpen ? "max-h-[420px] opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
                    }`}
            >
                <div className="bg-[#111111]/90 backdrop-blur-3xl border border-white/10 px-6 py-6 flex flex-col gap-2 rounded-3xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className={`px-4 py-3.5 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 ${activeSection === link.href.slice(1)
                                ? "text-white bg-white/10"
                                : "text-muted hover:text-white hover:bg-white/5"
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="h-px w-full bg-white/10 my-2" />
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setMobileOpen(false);
                            // @ts-ignore
                            if (window.Calendly) {
                                // @ts-ignore
                                window.Calendly.initPopupWidget({ url: 'https://calendly.com/cibhi-unbound3d/30min' });
                            }
                        }}
                        className="mt-1 px-5 py-3.5 bg-white text-black rounded-xl text-sm font-bold text-center active:scale-95 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        Let's Talk
                    </button>


                </div>
            </div>
        </nav>
    );
}
