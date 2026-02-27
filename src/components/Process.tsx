"use client";

import FadeInView from "@/components/animations/FadeInView";

const steps = [
    {
        num: "01",
        title: "Discussion",
        desc: "I start by understanding the product, constraints, environment, and timeline before anything else.",
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
    },
    {
        num: "02",
        title: "Feasibility",
        desc: "Technical risk assessment, material selection, and manufacturing path analysis.",
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        ),
    },
    {
        num: "03",
        title: "Design",
        desc: "CAD modeling, system architecture, DFM review, and component specification.",
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        ),
    },
    {
        num: "04",
        title: "Prototype",
        desc: "Functional prototypes built, assembled, and validated against requirements.",
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
    },
    {
        num: "05",
        title: "Testing",
        desc: "Rigorous testing — thermal, structural, functional, and field validation.",
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        num: "06",
        title: "Delivery",
        desc: "Production handoff, vendor coordination, documentation, and ongoing support.",
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
        ),
    },
];

export default function Process() {
    return (
        <section id="process" className="relative py-20 md:py-24">
            <div className="section-divider" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-12 md:pt-16">
                <FadeInView>
                    <div className="mb-20 md:mb-24 max-w-2xl">
                        <span className="text-electric-blue font-mono text-[11px] tracking-[0.2em] uppercase mb-5 block">
                            // Methodology
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-soft-white tracking-tight leading-tight">
                            My Working Process
                        </h2>
                        <p className="text-muted mt-5 text-base md:text-lg leading-relaxed">
                            A structured, collaborative process refined over years of
                            shipping hardware products with teams of all sizes.
                        </p>
                    </div>
                </FadeInView>

                {/* Timeline grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {steps.map((step, i) => (
                        <FadeInView key={step.num} delay={i * 80}>
                            <div className="card-lift group relative bg-graphite/30 border border-graphite-light/15 rounded-xl p-7 md:p-8 hover:border-electric-blue/20">
                                {/* Number + Icon row */}
                                <div className="flex items-center justify-between mb-5">
                                    <span className="text-electric-blue font-mono text-2xl font-bold opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                                        {step.num}
                                    </span>
                                    <div className="w-10 h-10 rounded-lg bg-electric-blue/[0.06] border border-electric-blue/10 flex items-center justify-center text-electric-blue group-hover:bg-electric-blue/[0.1] transition-colors duration-500">
                                        {step.icon}
                                    </div>
                                </div>

                                <h3 className="text-soft-white font-semibold text-base mb-2.5 tracking-tight">
                                    {step.title}
                                </h3>
                                <p className="text-muted text-sm leading-[1.7]">
                                    {step.desc}
                                </p>

                                {/* Bottom connector */}
                                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-electric-blue/0 to-transparent group-hover:via-electric-blue/15 transition-all duration-700" />
                            </div>
                        </FadeInView>
                    ))}
                </div>
            </div>
        </section>
    );
}
