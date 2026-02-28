"use client";

import { useState, FormEvent } from "react";
import FadeInView from "@/components/animations/FadeInView";
import AnimatedGrid from "@/components/animations/AnimatedGrid";

export default function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        company: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="contact" className="relative py-32 md:py-40 overflow-hidden bg-[#050505]">
            <div className="absolute inset-0 opacity-30">
                <AnimatedGrid />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 lg:px-16">

                {/* Header Section */}
                <FadeInView>
                    <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
                        <span className="text-electric-blue font-mono text-[11px] tracking-[0.2em] uppercase mb-5 block">
                            // Get In Touch
                        </span>
                        <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold text-white tracking-tight leading-[1.05] mb-8">
                            Let's build <br className="hidden md:block" />something real.
                        </h2>
                        <p className="text-muted/90 text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto">
                            Whether you have a fully-funded startup or just a napkin sketch that obeys the laws of physics—drop me a line.
                        </p>
                    </div>
                </FadeInView>

                {/* Main Contact Container (Bento Style) */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

                    {/* Left Panel: Form */}
                    <FadeInView className="lg:col-span-3">
                        <div className="bg-[#111111] border border-white/[0.08] p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden h-full group hover:border-white/[0.15] transition-colors duration-500">
                            {/* Ambient Glow */}
                            <div className="absolute top-0 right-0 w-96 h-96 bg-electric-blue/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                            {submitted ? (
                                <div className="flex flex-col items-center justify-center h-full text-center py-10">
                                    <div className="w-20 h-20 mb-8 rounded-full bg-electric-blue/10 flex items-center justify-center border border-electric-blue/20">
                                        <svg className="w-8 h-8 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <h3 className="text-white text-3xl font-bold mb-4 tracking-tight">
                                        Message Received
                                    </h3>
                                    <p className="text-muted/80 text-lg leading-relaxed max-w-md">
                                        I'll review your project details and get back to you within 24 hours.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                        {[
                                            { name: "name" as const, label: "Your Name", type: "text", placeholder: "Elon Musk" },
                                            { name: "company" as const, label: "Company / Team", type: "text", placeholder: "SpaceX" },
                                        ].map((field) => (
                                            <div key={field.name} className="relative">
                                                <input
                                                    type={field.type}
                                                    required
                                                    value={formState[field.name]}
                                                    onChange={(e) => setFormState({ ...formState, [field.name]: e.target.value })}
                                                    placeholder={field.placeholder}
                                                    className="peer w-full bg-transparent border-b border-white/10 px-0 py-4 text-white text-lg placeholder-transparent focus:outline-none focus:border-electric-blue transition-colors duration-300"
                                                    id={field.name}
                                                />
                                                <label
                                                    htmlFor={field.name}
                                                    className="absolute left-0 -top-3 text-muted/60 text-[11px] font-mono tracking-widest uppercase transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted/40 peer-placeholder-shown:top-4 peer-placeholder-shown:font-sans peer-placeholder-shown:tracking-normal peer-placeholder-shown:capitalize peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-electric-blue peer-focus:font-mono peer-focus:tracking-widest peer-focus:uppercase"
                                                >
                                                    {field.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="relative">
                                        <input
                                            type="email"
                                            required
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            placeholder="elon@spacex.com"
                                            className="peer w-full bg-transparent border-b border-white/10 px-0 py-4 text-white text-lg placeholder-transparent focus:outline-none focus:border-electric-blue transition-colors duration-300"
                                            id="email"
                                        />
                                        <label
                                            htmlFor="email"
                                            className="absolute left-0 -top-3 text-muted/60 text-[11px] font-mono tracking-widest uppercase transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted/40 peer-placeholder-shown:top-4 peer-placeholder-shown:font-sans peer-placeholder-shown:tracking-normal peer-placeholder-shown:capitalize peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-electric-blue peer-focus:font-mono peer-focus:tracking-widest peer-focus:uppercase"
                                        >
                                            Email Address
                                        </label>
                                    </div>

                                    <div className="relative pt-4">
                                        <label className="text-muted/60 text-[11px] font-mono tracking-widest uppercase mb-4 block">
                                            Project Details
                                        </label>
                                        <textarea
                                            required
                                            rows={3}
                                            value={formState.message}
                                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                            placeholder="Tell me about the timeline, or the biggest technical blocker you're facing right now..."
                                            className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-5 text-white text-base placeholder:text-muted/40 focus:outline-none focus:border-electric-blue/50 focus:bg-electric-blue/[0.02] transition-colors duration-300 resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="group w-full sm:w-auto px-10 py-4 bg-white text-black font-semibold rounded-full text-sm tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] mt-8"
                                    >
                                        Transmit Message
                                    </button>
                                </form>
                            )}
                        </div>
                    </FadeInView>

                    {/* Right Panel: Direct Info */}
                    <FadeInView delay={200} className="lg:col-span-2 flex flex-col gap-6">

                        {/* Status Card */}
                        {/* Status Card */}
                        <div className="bg-[#111111] border border-white/[0.08] p-8 md:p-12 rounded-[2.5rem] flex-1 flex flex-col justify-center hover:border-white/[0.15] transition-colors duration-500 group">
                            <h3 className="text-white text-2xl font-bold mb-10 tracking-tight group-hover:text-electric-blue transition-colors">
                                Direct Lines
                            </h3>

                            <div className="space-y-8">
                                <a href="mailto:cibhi@unbound3d.com" className="flex items-center gap-5 group/link">
                                    <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover/link:bg-electric-blue group-hover/link:border-electric-blue transition-all duration-300">
                                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <span className="text-white/80 text-base font-light group-hover/link:text-white transition-colors">cibhi@unbound3d.com</span>
                                </a>

                                <a href="tel:+917540007449" className="flex items-center gap-5 group/link">
                                    <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover/link:bg-electric-blue group-hover/link:border-electric-blue transition-all duration-300">
                                        <svg className="w-5 h-5 text-white/80 group-hover/link:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.215-3.915-6.811-6.81l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                        </svg>
                                    </div>
                                    <span className="text-white/80 text-base font-light group-hover/link:text-white transition-colors">+91 7540007449</span>
                                </a>

                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                    </div>
                                    <span className="text-white/50 text-base font-light">Bengaluru, India</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Links Row */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                {
                                    name: "LinkedIn",
                                    url: "https://www.linkedin.com/in/cibhiadhinath/",
                                    color: "hover:text-blue-500",
                                    icon: (
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    )
                                },
                                {
                                    name: "Instagram",
                                    url: "https://www.instagram.com/cibhiadhinath/",
                                    color: "hover:text-pink-500",
                                    icon: (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                        </svg>
                                    )
                                },
                                {
                                    name: "Pinterest",
                                    url: "https://in.pinterest.com/cibhiadhinath/",
                                    color: "hover:text-red-500",
                                    icon: (
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                                        </svg>
                                    )
                                },
                                {
                                    name: "Spotify",
                                    url: "https://open.spotify.com/user/31rrhnogpr2nyrpyiahevz6xzm5i?si=MwBlN-m5SXmsWoxrSXpaVw",
                                    color: "hover:text-green-500",
                                    icon: (
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.02.24-2.82-1.74-6.36-2.1-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.62-1.08 8.52-.66 11.64 1.26.3-.18.42.24.3.54v.541zm1.5-3.119c-.3.48-.961.66-1.44.3-3.24-1.98-8.221-2.58-12.061-1.381-.54.18-1.141-.12-1.321-.6-.18-.54.12-1.141.6-1.321 4.38-1.32 9.9-0.6 13.62 1.68.48.3.66.96.3 1.441l-.18.12-1.5-.24zm.12-3.24c-3.9-2.341-10.322-2.521-14.102-1.381-.6.18-1.261-.18-1.44-.78-.18-.6.18-1.261.78-1.441 4.32-1.321 11.4-1.019 15.961 1.681.54.3.72 1.02.42 1.56-.3.54-1.02.72-1.56.42l-.06-.06z" />
                                        </svg>
                                    )
                                },
                                {
                                    name: "SoundCloud",
                                    url: "https://on.soundcloud.com/HZJ2VooKNxneraibA",
                                    color: "hover:text-orange-500",
                                    icon: (
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M1.2 13.2h.4v3.1h-.4v-3.1zm1.4.1h.4v2.7h-.4v-2.7zm1.3-.8h.5v3.6h-.5v-3.6zm1.4-1h.4v4.6h-.4v-4.6zm1.4.7h.4v3.9h-.4v-3.9zm1.4-1.5h.4v5.4h-.4v-5.4zm1.4 1h.4V17h-.4v-4.1zm1.4-1h.4v5.1h-.4V11.9zm1.4 1h.4v4.1h-.4v-4.1zm1.4-1h.4v5.1h-.4V11.9zm1.4 1h.4v4.1h-.4v-4.1zm1.4-1h.4v5.1h-.4V11.9zm1.4-.7h.5v4.8h-.5v-4.8zm1.4-.5h.4v5.3h-.4v-5.3zm1.4.5h.4v4.8h-.4v-4.8zm1.4 0h.4v4.8h-.4v-4.8zm1.4-.2h.4v5h-.4v-5zm1.4-1h.4v6h-.4v-6zm1.4-1h.4v7h-.4v-7zm1.5-.5h2.2c1.7 0 3.3.4 4.5 1.1s2 1.8 2.1 3c1.7 0 3 1.3 3 2.9s-1.3 3-3 3h-8.8V10.4z" />
                                        </svg>
                                    )
                                }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#111111] border border-white/[0.08] rounded-3xl p-5 flex flex-col items-center justify-center gap-3 hover:border-white/[0.2] hover:bg-white/[0.02] hover:-translate-y-1 transition-all duration-500 group"
                                >
                                    <div className={`text-muted transition-colors duration-300 ${social.color}`}>
                                        {social.icon}
                                    </div>
                                    <span className="text-[10px] font-mono tracking-widest uppercase text-muted group-hover:text-white transition-colors">
                                        {social.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </FadeInView>
                </div>
            </div>
        </section>
    );
}
