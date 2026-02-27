"use client";

import FadeInView from "@/components/animations/FadeInView";
const categories = [
    {
        label: "Field Testing",
        tag: "UAV",
        icon: (
            <svg className="w-12 h-12 text-electric-blue/80 group-hover:text-electric-blue transition-colors duration-500 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
        )
    },
    {
        label: "Assembly",
        tag: "MECHANICAL",
        icon: (
            <svg className="w-12 h-12 text-electric-blue/80 group-hover:text-electric-blue transition-colors duration-500 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        )
    },
    {
        label: "Electronics",
        tag: "PCB",
        icon: (
            <svg className="w-12 h-12 text-electric-blue/80 group-hover:text-electric-blue transition-colors duration-500 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
        )
    },
    {
        label: "Prototyping",
        tag: "ADDITIVE",
        icon: (
            <svg className="w-12 h-12 text-electric-blue/80 group-hover:text-electric-blue transition-colors duration-500 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
        )
    },
];

export default function Credibility() {
    return (
        <section id="work" className="relative py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
                <FadeInView>
                    <div className="mb-10 md:mb-16 max-w-2xl">
                        <span className="text-electric-blue font-mono text-[11px] tracking-[0.2em] uppercase mb-5 block">
                            // About Me
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-soft-white tracking-tight leading-tight">
                            Real Engineering Work
                        </h2>
                        <p className="text-muted mt-5 text-base md:text-lg leading-relaxed">
                            I work hands-on — from early-stage prototypes to production-ready
                            systems, built at the bench and validated in the field.
                        </p>
                    </div>
                </FadeInView>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                    {categories.map((cat, i) => (
                        <FadeInView key={cat.label} delay={i * 120}>
                            <div className="card-lift group relative aspect-[4/3] rounded-xl overflow-hidden bg-[#0a0a0a] border border-white/5 hover:border-electric-blue/20 p-6 flex flex-col justify-end transition-all duration-700 ease-out">

                                {/* Background Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                {/* Icon */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-4">
                                    {cat.icon}
                                </div>

                                {/* Tag */}
                                <div className="absolute top-4 left-4 px-2.5 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-md">
                                    <span className="text-electric-blue font-mono text-[9px] tracking-widest">{cat.tag}</span>
                                </div>

                                {/* Label */}
                                <div className="relative z-10 flex items-center justify-between mt-auto">
                                    <span className="text-soft-white text-[15px] font-semibold tracking-wide group-hover:text-electric-blue transition-colors duration-300">{cat.label}</span>
                                    {/* Arrow icon */}
                                    <div className="w-8 h-8 rounded-full bg-electric-blue/5 border border-electric-blue/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 shadow-[0_0_15px_rgba(0,194,255,0.1)]">
                                        <svg className="w-4 h-4 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </FadeInView>
                    ))}
                </div>
            </div>
        </section>
    );
}
