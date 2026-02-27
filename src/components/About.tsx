"use client";

import FadeInView from "@/components/animations/FadeInView";

export default function About() {
    return (
        <section id="about" className="relative py-24 md:py-32 bg-graphite/10">
            {/* Top divider */}
            <div className="section-divider" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left Column: The Philosophy (Sanaz Vibe) */}
                    <FadeInView>
                        <div className="max-w-2xl">
                            <span className="text-electric-blue font-mono text-[11px] tracking-[0.2em] uppercase mb-6 block">
                                // The Philosophy
                            </span>

                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-soft-white leading-tight mb-8">
                                "I don't just build prototypes. I build systems that survive in the real world."
                            </h2>

                            <div className="space-y-6 text-muted text-base md:text-lg leading-relaxed font-light">
                                <p>
                                    I started my career navigating the gap between what engineers design on a screen and what actually works in the field. I've learned that <strong className="text-soft-white font-medium">the best hardware isn't the most complex—it's the most resilient.</strong>
                                </p>
                                <p>
                                    Whether it's a complex propulsion system or a wearable device, my approach is the same: strip away the noise, focus on the physics, and design for manufacturing from day one.
                                </p>
                                <p className="text-white/80">
                                    I am the Co-Founder of <a href="http://www.unbound3d.com" target="_blank" rel="noopener noreferrer" className="text-electric-blue border-b border-electric-blue/30 hover:border-electric-blue transition-colors">Unbound3D</a>, a managed manufacturing ecosystem helping teams move from digital designs to real physical products. <span className="opacity-50">|</span> <a href="http://www.haznof.com" target="_blank" rel="noopener noreferrer" className="text-electric-blue border-b border-electric-blue/30 hover:border-electric-blue transition-colors">Haznof</a>
                                </p>
                            </div>

                            <div className="mt-10 flex items-center gap-4">
                                <a
                                    href="#contact"
                                    className="group inline-flex items-center gap-2 text-sm font-medium text-electric-blue hover:text-soft-white transition-colors duration-300"
                                >
                                    <span className="border-b border-electric-blue/40 group-hover:border-soft-white/40 pb-0.5 transition-colors">Let's build together</span>
                                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </FadeInView>

                    {/* Right Column: Visual/Stats (Aryan Vibe) */}
                    <FadeInView delay={200}>
                        <div className="relative rounded-2xl overflow-hidden bg-graphite/30 border border-graphite-light/20 p-8 md:p-10 card-lift">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-electric-blue/[0.03] rounded-bl-full" />

                            <div className="grid grid-cols-2 gap-8 relative z-10">
                                <div>
                                    <span className="block text-4xl md:text-5xl font-mono font-bold text-soft-white mb-2">5+</span>
                                    <span className="text-xs font-mono tracking-wider uppercase text-muted">Years Experience</span>
                                </div>
                                <div>
                                    <span className="block text-4xl md:text-5xl font-mono font-bold text-soft-white mb-2">50+</span>
                                    <span className="text-xs font-mono tracking-wider uppercase text-muted">Projects Shipped</span>
                                </div>
                                <div>
                                    <span className="block text-4xl md:text-5xl font-mono font-bold text-soft-white mb-2">3</span>
                                    <span className="text-xs font-mono tracking-wider uppercase text-muted">Patents/IPs</span>
                                </div>
                                <div>
                                    <span className="block text-4xl md:text-5xl font-mono font-bold text-soft-white mb-2">∞</span>
                                    <span className="text-xs font-mono tracking-wider uppercase text-muted">Coffee Cups</span>
                                </div>
                            </div>
                        </div>
                    </FadeInView>
                </div>
            </div>
        </section>
    );
}
