"use client";

import AnimatedGrid from "@/components/animations/AnimatedGrid";
import FadeInView from "@/components/animations/FadeInView";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden"
        >
            {/* Background elements (very minimal) */}
            <div className="absolute inset-0 bg-[#050505] -z-20" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10 opacity-30 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-blue/5 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10 w-full">
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex flex-col items-center text-center">

                    {/* Meta Row */}
                    <FadeInView delay={100}>
                        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-md">
                                <span className="text-muted/90 text-[11px] font-mono tracking-widest uppercase">
                                    Bengaluru, IN
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <a
                                    href="https://unbound3d.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-6 items-center px-3 rounded-full bg-electric-blue/[0.08] border border-electric-blue/20 hover:bg-electric-blue/20 transition-all duration-300 group/badge"
                                >
                                    <span className="relative flex h-2 w-2 mr-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-blue opacity-50"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-blue shadow-[0_0_8px_rgba(0,194,255,0.8)]"></span>
                                    </span>
                                    <span className="text-electric-blue text-[10px] font-mono tracking-widest uppercase">
                                        Unbound3D
                                    </span>
                                </a>
                            </div>
                        </div>
                    </FadeInView>

                    {/* Massive Typography */}
                    <FadeInView delay={200} className="w-full">
                        <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem] font-bold leading-[0.95] tracking-tight text-white mb-8">
                            Hi, I'm Cibhi.
                        </h1>
                    </FadeInView>

                    {/* Subtitle / Value Prop */}
                    <FadeInView delay={300}>
                        <p className="text-muted text-lg sm:text-xl leading-[1.6] max-w-3xl mx-auto mb-14 font-light">
                            I help startups and engineering teams convert hardware prototypes into reliable, manufacturable products — from validation and integration to vendor coordination and production readiness.
                        </p>
                    </FadeInView>

                    {/* Subtle, premium CTA */}
                    <FadeInView delay={400}>
                        <div className="flex flex-col items-center">
                            <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        // @ts-ignore
                                        if (window.Calendly) {
                                            // @ts-ignore
                                            window.Calendly.initPopupWidget({ url: 'https://calendly.com/cibhi-unbound3d/30min' });
                                        }
                                    }}
                                    className="px-8 py-4 bg-white text-black font-semibold rounded-full text-sm tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                                >
                                    Discuss a Project
                                </button>
                                <a
                                    href="#case-studies"
                                    className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full text-sm tracking-wide hover:bg-white/10 transition-all duration-300"
                                >
                                    View Experience
                                </a>
                            </div>
                            <span className="text-muted/60 text-xs font-mono tracking-wide">
                                Free 25-minute consultation — no commitment.
                            </span>
                        </div>
                    </FadeInView>
                </div>
            </div>
        </section>
    );
}
