"use client";

import FadeInView from "@/components/animations/FadeInView";

const coreSkills = [
    "Hardware Architecture",
    "Rapid Prototyping",
    "Systems Integration",
    "Design for Manufacturing (DFM)",
    "Embedded Firmware",
    "Vendor Management",
    "Additive Manufacturing"
];

const capabilities = [
    {
        title: "Prototyping Support",
        description: "I help transition from digital CAD to physical, test-ready parts within days, leveraging SLA, FDM, and SLS for rapid validation.",
        icon: "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16zM3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"
    },
    {
        title: "Hardware Development Guidance",
        description: "I help optimize geometry, select the right components, and structure your BOMs to transition early prototypes into certified production runs.",
        icon: "M3 9h18M9 21V9 M3 3h18v18H3z"
    },
    {
        title: "System Integration & Troubleshooting",
        description: "I help bridge the gap between firmware and physics, integrating complex sensor suites and payload systems for field-tested reliability.",
        icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
    },
    {
        title: "Manufacturing & Vendor Coordination",
        description: "I help oversee small-batch runs, establish QA pipelines, and manage contract manufacturers to ensure your units ship on time.",
        icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
    }
];

export default function Services() {
    return (
        <section id="services" className="relative py-20 bg-[#050505]">
            <div className="section-divider" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-12">

                {/* Header Section */}
                <FadeInView className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-electric-blue font-mono text-[11px] tracking-[0.2em] uppercase mb-5 block">
                        // Capabilities
                    </span>
                    <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold text-white tracking-tight leading-[1.1] mb-10">
                        From napkin sketch <br className="hidden md:block" /> to assembly line.
                    </h2>

                    {/* Skills Pills Centered */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {coreSkills.map((skill) => (
                            <div
                                key={skill}
                                className="px-5 py-2.5 bg-white/[0.03] border border-white/10 rounded-full text-[13px] font-medium text-white/80 hover:border-electric-blue/40 hover:bg-electric-blue/5 hover:text-white transition-all cursor-default shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </FadeInView>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-20">
                    {capabilities.map((item, i) => (
                        <FadeInView key={item.title} delay={i * 100} className={`group relative card-lift bg-[#111111] border border-white/[0.08] p-8 md:p-10 rounded-[2rem] overflow-hidden hover:border-white/[0.15] ${i === 0 || i === 3 ? "md:aspect-[4/3] flex flex-col justify-between" : "md:aspect-video flex flex-col justify-center"}`}>
                            {/* Animated glowing background on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="relative z-10 w-14 h-14 shrink-0 rounded-2xl bg-[#1a1a1f] flex items-center justify-center text-white border border-white/10 group-hover:bg-electric-blue group-hover:border-electric-blue transition-all duration-500 mb-8 shadow-inner">
                                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d={item.icon} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-electric-blue transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-muted/90 text-base md:text-[17px] leading-relaxed font-light">
                                    {item.description}
                                </p>
                            </div>
                        </FadeInView>
                    ))}
                </div>
            </div>
        </section>
    );
}
