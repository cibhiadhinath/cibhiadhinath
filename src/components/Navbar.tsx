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
                <div className="hidden md:flex items-center gap-4 ml-4">
                    <div className="flex items-center gap-3 mr-2 border-r border-white/10 pr-4">
                        {[
                            { name: "LinkedIn", url: "https://www.linkedin.com/in/cibhiadhinath/", icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /> },
                            { name: "Instagram", url: "https://www.instagram.com/cibhiadhinath/", icon: <path d="M12 2.163v2.163c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.15-3.23 1.66-4.77 4.92-4.92 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07c-4.36.2-6.78 2.62-6.98 6.98C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.36-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84c-3.4 0-6.16 2.76-6.16 6.16s2.76 6.16 6.16 6.16 6.16-2.76 6.16-6.16-2.76-6.16-6.16-6.16zm0 10.16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm6.41-11.85c-.8 0-1.44.65-1.44 1.44s.65 1.44 1.44 1.44 1.44-.65 1.44-1.44-.65-1.44-1.44-1.44z" /> },
                            { name: "Spotify", url: "https://open.spotify.com/user/31rrhnogpr2nyrpyiahevz6xzm5i?si=MwBlN-m5SXmsWoxrSXpaVw", icon: <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.02.24-2.82-1.74-6.36-2.1-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.62-1.08 8.52-.66 11.64 1.26.3-.18.42.24.3.54v.541zm1.5-3.119c-.3.48-.961.66-1.44.3-3.24-1.98-8.221-2.58-12.061-1.381-.54.18-1.141-.12-1.321-.6-.18-.54.12-1.141.6-1.321 4.38-1.32 9.9-0.6 13.62 1.68.48.3.66.96.3 1.441l-.18.12-1.5-.24zm.12-3.24c-3.9-2.341-10.322-2.521-14.102-1.381-.6.18-1.261-.18-1.44-.78-.18-.6.18-1.261.78-1.441 4.32-1.321 11.4-1.019 15.961 1.681.54.3.72 1.02.42 1.56-.3.54-1.02.72-1.56.42l-.06-.06z" /> },
                            { name: "SoundCloud", url: "https://on.soundcloud.com/HZJ2VooKNxneraibA", icon: <path d="M11.56 8.35c.01-.01.01-.01 0 0zm-.01.01s.01-.01 0 0zm.01-.01c.01-.01.01-.01 0 0zm-1.02 11.63c.42.01.81-.22.95-.61l.01-.02c.16-.44.02-.93-.34-1.22l-.12-.08c-.28-.18-.64-.18-.92 0l-.12.08c-.36.29-.5.78-.34 1.22l.01.02c.14.39.53.62.95.61l-.08-.01zm1.5-1.5l.08.01s.01-.01 0 0zm2.23-1.49c.42.01.81-.22.95-.61l.01-.02c.16-.44.02-.93-.34-1.22l-.12-.08c-.28-.18-.64-.18-.92 0l-.12.08c-.36.29-.5.78-.34 1.22l.01.02c.14.39.53.62.95.61l-.08-.01zm1.5-1.5l.08.01s.01-.01 0 0zm2.23-1.49c.42.01.81-.22.95-.61l.01-.02c.16-.44.02-.93-.34-1.22l-.12-.08c-.28-.18-.64-.18-.92 0l-.12.08c-.36.29-.5.78-.34 1.22l.01.02c.14.39.53.62.95.61l-.08-.01zm1.5-1.5l.08.01s.01-.01 0 0zm2.23-1.48c.42.01.81-.22.95-.61l.01-.02c.16-.44.02-.93-.34-1.22l-.12-.08c-.28-.18-.64-.18-.92 0l-.12.08c-.36.29-.5.78-.34 1.22l.01.02c.14.39.53.62.95.61l-.08-.01zm1.51-1.51l.08.01s.01-.01 0 0zm2.23-1.49c.42.01.81-.22.95-.61l.01-.02c.16-.44.02-.93-.34-1.22l-.12-.08c-.28-.18-.64-.18-.92 0l-.12.08c-.36.29-.5.78-.34 1.22l.01.02c.14.39.53.62.95.61l-.08-.01zm1.5-1.5l.08.01s.01-.01 0 0zm2.24-1.49c.42.01.81-.22.95-.61l.01-.02c.16-.44.02-.93-.34-1.22l-.12-.08c-.28-.18-.64-.18-.92 0l-.12.08c-.36.29-.5.78-.34 1.22l.01.02c.14.39.53.62.95.61l-.08-.01zm1.5-1.5l.08.01s.01-.01 0 0zm1.72-3.41c1.7 0 3.3.4 4.5 1.1s2 1.8 2.1 3c1.7 0 3 1.3 3 2.9s-1.3 3-3 3h-8.8V10.4h.1s2.1-2.05 2.1-2.05zm.1.1l-.1-.1s-2.1 2.05-2.1 2.05s2.2-2.05 2.2-2.05z" /> }
                        ].map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted/50 hover:text-electric-blue transition-colors duration-300"
                                aria-label={social.name}
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    {social.icon}
                                </svg>
                            </a>
                        ))}
                    </div>
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

                    <div className="flex items-center justify-center gap-6 mt-6 pb-2">
                        {[
                            { name: "LinkedIn", url: "https://www.linkedin.com/in/cibhiadhinath/", icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /> },
                            { name: "Instagram", url: "https://www.instagram.com/cibhiadhinath/", icon: <path d="M12 2.163v2.163c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.15-3.23 1.66-4.77 4.92-4.92 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07c-4.36.2-6.78 2.62-6.98 6.98C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.36-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84c-3.4 0-6.16 2.76-6.16 6.16s2.76 6.16 6.16 6.16 6.16-2.76 6.16-6.16-2.76-6.16-6.16-6.16zm0 10.16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm6.41-11.85c-.8 0-1.44.65-1.44 1.44s.65 1.44 1.44 1.44 1.44-.65 1.44-1.44-.65-1.44-1.44-1.44z" /> },
                            { name: "Spotify", url: "https://open.spotify.com/user/31rrhnogpr2nyrpyiahevz6xzm5i?si=MwBlN-m5SXmsWoxrSXpaVw", icon: <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.02.24-2.82-1.74-6.36-2.1-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.62-1.08 8.52-.66 11.64 1.26.3-.18.42.24.3.54v.541zm1.5-3.119c-.3.48-.961.66-1.44.3-3.24-1.98-8.221-2.58-12.061-1.381-.54.18-1.141-.12-1.321-.6-.18-.54.12-1.141.6-1.321 4.38-1.32 9.9-0.6 13.62 1.68.48.3.66.96.3 1.441l-.18.12-1.5-.24zm.12-3.24c-3.9-2.341-10.322-2.521-14.102-1.381-.6.18-1.261-.18-1.44-.78-.18-.6.18-1.261.78-1.441 4.32-1.321 11.4-1.019 15.961 1.681.54.3.72 1.02.42 1.56-.3.54-1.02.72-1.56.42l-.06-.06z" /> },
                            { name: "SoundCloud", url: "https://on.soundcloud.com/HZJ2VooKNxneraibA", icon: <path d="M11.56 8.35c.01-.01.01-.01 0 0zm-.01.01s.01-.01 0 0zm.01-.01c.01-.01.01-.01 0 0zm-1.02 11.63c.42.01.81-.22.95-.61l.01-.02c.16-.44.02-.93-.34-1.22l-.12-.08c-.28-.18-.64-.18-.92 0l-.12.08c-.36.29-.5.78-.34 1.22l.01.02c.14.39.53.62.95.61l-.08-.01zm1.5-1.5l.08.01s.01-.01 0 0zm2.23-1.49c.42.01.81-.22.95-.61l.01-.02c.16-.44.02-.93-.34-1.22l-.12-.08c-.28-.18-.64-.18-.92 0l-.12.08c-.36.29-.5.78-.34 1.22l.01.02c.14.39.53.62.95.61l-.08-.01zm1.5-1.5l.08.01s.01-.01 0 0zm2.23-1.49c.42.01.81-.22.95-.61l.01-.02c.16-.44.02-.93-.34-1.22l-.12-.08c-.28-.18-.64-.18-.92 0l-.12.08c-.36.29-.5.78-.34 1.22l.01.02c.14.39.53.62.95.61l-.08-.01zm1.5-1.5l.08.01s.01-.01 0 0zm2.23-1.48c.42.01.81-.22.95-.61l.01-.02c.16-.44.02-.93-.34-1.22l-.12-.08c-.28-.18-.64-.18-.92 0l-.12.08c-.36.29-.5.78-.34 1.22l.01.02c.14.39.53.62.95.61l-.08-.01zm1.51-1.51l.08.01s.01-.01 0 0zm2.23-1.49c.42.01.81-.22.95-.61l.01-.02c.16-.44.02-.93-.34-1.22l-.12-.08c-.28-.18-.64-.18-.92 0l-.12.08c-.36.29-.5.78-.34 1.22l.01.02c.14.39.53.62.95.61l-.08-.01zm1.5-1.5l.08.01s.01-.01 0 0zm2.24-1.49c.42.01.81-.22.95-.61l.01-.02c.16-.44.02-.93-.34-1.22l-.12-.08c-.28-.18-.64-.18-.92 0l-.12.08c-.36.29-.5.78-.34 1.22l.01.02c.14.39.53.62.95.61l-.08-.01zm1.5-1.5l.08.01s.01-.01 0 0zm1.72-3.41c1.7 0 3.3.4 4.5 1.1s2 1.8 2.1 3c1.7 0 3 1.3 3 2.9s-1.3 3-3 3h-8.8V10.4h.1s2.1-2.05 2.1-2.05zm.1.1l-.1-.1s-2.1 2.05-2.1 2.05s2.2-2.05 2.2-2.05z" /> }
                        ].map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted/60 hover:text-electric-blue transition-colors duration-300"
                                aria-label={social.name}
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    {social.icon}
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
