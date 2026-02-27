"use client";

import FadeInView from "@/components/animations/FadeInView";

const caseStudies = [
    {
        tag: "Featured Credential",
        title: "Fixed-Wing UAV Type Certification – Okulo Aerospace",
        context:
            "Okulo Aerospace required formal type certification for their fixed-wing UAV platform to operate commercially in India under stringent regulatory standards.",
        did:
            "Led the engineering coordination and execution support, acting as the technical bridge between internal R&D teams, certification bodies, and accredited labs.",
        approach:
            "Managed rigorous documentation and compliance trails, coordinated comprehensive validation and reliability testing, and actively troubleshot system readiness issues on the flight line.",
        outcome:
            "Successfully navigated complex regulatory requirements and cross-team bottlenecks, enabling the platform to achieve certification and enter the commercial market.",
        metrics: ["Type Certification", "Reliability Testing", "Regulatory Compliance"],
    },
    {
        tag: "Propulsion",
        title: "Solar Hybrid UAV Propulsion System",
        context:
            "A requirement for an ultra-long endurance UAV platform limited by standard battery density constraints and challenging operational environments.",
        did:
            "Contributed to a hybrid power architecture integrating solar arrays with high-density lithium-ion packs.",
        approach:
            "Evaluated custom MPPT circuits for optimal solar energy harvesting and supported the thermal management strategy for continuous daytime operation.",
        outcome:
            "Proved the viability of solar-hybrid integration for extended missions, expanding operational flight windows.",
        metrics: ["Solar Integration", "Thermal Mgmt", "Endurance Extension"],
    },
    {
        tag: "Avionics",
        title: "Long Range UAV Communication & Tracking",
        context:
            "BVLOS (Beyond Visual Line of Sight) operations necessitated a robust, failsafe communication and tracking link over vast distances.",
        did:
            "Engineered portions of a redundant communication architecture utilizing RF telemetry combined with cellular/satellite backup layers.",
        approach:
            "Integrated multi-band antennas and tested seamless failover protocols to maintain command authority during severe signal degradation.",
        outcome:
            "Achieved continuous, reliable telemetry and command links over extended ranges, ensuring operational safety and data integrity.",
        metrics: ["BVLOS", "Multi-band Failover", "Redundant Comms"],
    },
    {
        tag: "Robotics",
        title: "Autonomous UGV Deployment System",
        context:
            "Needed a reliable method to autonomously deploy, operate, and recover Unmanned Ground Vehicles (UGVs) in harsh, remote environments.",
        did:
            "Designed the mechanical deployment mechanism and integrated it with the central control and charging system.",
        approach:
            "Prototyped a robust docking station featuring precision alignment sensors and automated charging contacts capable of handling environmental debris.",
        outcome:
            "Enabled fully hands-off robotic deployment cycles, drastically reducing human intervention requirements in hazardous zones.",
        metrics: ["Auto-Docking", "Precision Alignment", "Hands-off Cycles"],
    },
    {
        tag: "Ecosystem Integration",
        title: "Hardware Prototyping & Manufacturing Interaction",
        context:
            "Hardware initiatives frequently struggle to transition early-stage prototypes into scalable, repeatable manufacturing processes.",
        did:
            "Acted as the engineering liaison between core design teams and external contract manufacturers to bridge the gap.",
        approach:
            "Optimized conceptual designs for DFM/DFA, established critical QC pipelines, and resolved complex tooling challenges on the factory floor.",
        outcome:
            "Reduced iteration cycles and unit costs significantly while ensuring the final physical products perfectly matched the digital engineering intent.",
        metrics: ["DFM/DFA Audits", "QC Pipelines", "Tooling Resolution"],
    },
];

const explorations = [
    { title: "Parametric Drone Chassis", type: "Generative Design" },
    { title: "BLDC Motor Controller", type: "Custom PCB" },
    { title: "Compliant Micro-Gripper", type: "3D Printing" }
];

export default function CaseStudies() {
    return (
        <section id="case-studies" className="relative py-16 md:py-20 bg-[#050505]">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

                {/* Section 1: Deep Dives Header */}
                <FadeInView>
                    <div className="mb-16 md:mb-20 text-center md:text-left">
                        <span className="text-electric-blue font-mono text-[11px] tracking-[0.2em] uppercase mb-4 block">
                            // Deep Dives
                        </span>
                        <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold text-white tracking-tight leading-[1.05]">
                            Selected Work
                        </h2>
                    </div>
                </FadeInView>

                {/* Massive Cards */}
                <div className="space-y-12 md:space-y-20">
                    {caseStudies.map((study, i) => (
                        <FadeInView key={study.title} delay={i * 100}>
                            <div className="group relative bg-[#111111] border border-white/[0.08] rounded-[2.5rem] overflow-hidden hover:border-white/[0.15] hover:scale-[1.01] transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.1)]">

                                {/* Background Glow on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                <div className="p-8 md:p-14 lg:p-20 relative z-10">
                                    {/* Tag & Counter */}
                                    <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
                                        <div className="inline-flex items-center px-4 py-2 bg-white/[0.03] border border-white/10 rounded-full">
                                            <span className="text-electric-blue font-mono text-[11px] tracking-widest uppercase">
                                                {study.tag}
                                            </span>
                                        </div>
                                        <span className="text-muted/40 font-mono text-sm tracking-widest">
                                            {String(i + 1).padStart(2, "0")} / 03
                                        </span>
                                    </div>

                                    {/* Huge Title */}
                                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-12 max-w-4xl group-hover:text-electric-blue transition-colors duration-500">
                                        {study.title}
                                    </h3>

                                    {/* 4-Column Content */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                                        {[
                                            { label: "Context", text: study.context },
                                            { label: "What I Did", text: study.did },
                                            { label: "Technical Approach", text: study.approach },
                                            { label: "Outcome / Learning", text: study.outcome },
                                        ].map((block) => (
                                            <div key={block.label}>
                                                <span className="text-muted/60 font-mono text-[11px] tracking-[0.2em] uppercase mb-4 block font-semibold border-b border-white/[0.05] pb-3">
                                                    {block.label}
                                                </span>
                                                <p className="text-muted/90 text-[14px] md:text-[15px] leading-[1.7] font-light">
                                                    {block.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Metrics Pill Row */}
                                    <div className="flex flex-wrap items-center gap-3 mt-14 pt-10 border-t border-white/[0.05]">
                                        {study.metrics.map((metric) => (
                                            <span
                                                key={metric}
                                                className="text-white/80 font-mono text-xs bg-white/[0.02] px-5 py-2.5 rounded-full border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                                            >
                                                {metric}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </FadeInView>
                    ))}
                </div>

                {/* Section 2: Playground (Bento Style) */}
                <div className="mt-24">
                    <FadeInView>
                        <div className="mb-12 text-center md:text-left">
                            <span className="text-muted/80 font-mono text-[11px] tracking-[0.2em] uppercase mb-4 block">
                                // Explorations
                            </span>
                            <h3 className="text-2xl md:text-3xl font-serif italic text-white/90">
                                The Playground...
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                            {explorations.map((item, i) => (
                                <div key={item.title} className="group relative bg-[#111111] p-8 rounded-3xl border border-white/[0.08] cursor-pointer hover:border-white/[0.2] hover:bg-[#151515] hover:-translate-y-1 transition-all duration-500">
                                    <div className="text-electric-blue/70 text-[10px] font-mono tracking-widest uppercase mb-4">{item.type}</div>
                                    <div className="text-xl font-semibold text-white group-hover:text-electric-blue transition-colors duration-300 pr-4">
                                        {item.title}
                                    </div>
                                    {/* Subtle arrow on hover */}
                                    <div className="absolute right-8 bottom-8 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                        <svg className="w-5 h-5 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeInView>
                </div>
            </div>
        </section>
    );
}
