"use client";

export default function RotatingHeroModel() {
    return (
        <div className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px] lg:w-[560px] lg:h-[560px]">
            {/* Glow behind model */}
            <div className="absolute inset-0 rounded-full bg-electric-blue/5 blur-3xl" />

            {/* Rotating container */}
            <div
                className="relative w-full h-full"
                style={{
                    perspective: "1200px",
                }}
            >
                <div
                    className="w-full h-full"
                    style={{
                        transformStyle: "preserve-3d",
                        animation: "spin-slow 20s linear infinite",
                    }}
                >
                    {/* Technical wireframe SVG — abstract drone/airframe assembly */}
                    <svg
                        viewBox="0 0 500 500"
                        className="w-full h-full"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Central body */}
                        <rect
                            x="200" y="220" width="100" height="60" rx="4"
                            stroke="#0ea5e9" strokeWidth="1.5" opacity="0.8"
                        />
                        <rect
                            x="210" y="230" width="80" height="40" rx="2"
                            stroke="#0ea5e9" strokeWidth="0.8" opacity="0.4"
                        />

                        {/* Cross frame arms */}
                        <line x1="200" y1="250" x2="100" y2="180" stroke="#0ea5e9" strokeWidth="1.2" opacity="0.7" />
                        <line x1="200" y1="250" x2="100" y2="320" stroke="#0ea5e9" strokeWidth="1.2" opacity="0.7" />
                        <line x1="300" y1="250" x2="400" y2="180" stroke="#0ea5e9" strokeWidth="1.2" opacity="0.7" />
                        <line x1="300" y1="250" x2="400" y2="320" stroke="#0ea5e9" strokeWidth="1.2" opacity="0.7" />

                        {/* Motor mounts */}
                        <circle cx="100" cy="180" r="22" stroke="#0ea5e9" strokeWidth="1.2" opacity="0.6" />
                        <circle cx="100" cy="180" r="14" stroke="#0ea5e9" strokeWidth="0.8" opacity="0.3" />
                        <circle cx="100" cy="320" r="22" stroke="#0ea5e9" strokeWidth="1.2" opacity="0.6" />
                        <circle cx="100" cy="320" r="14" stroke="#0ea5e9" strokeWidth="0.8" opacity="0.3" />
                        <circle cx="400" cy="180" r="22" stroke="#0ea5e9" strokeWidth="1.2" opacity="0.6" />
                        <circle cx="400" cy="180" r="14" stroke="#0ea5e9" strokeWidth="0.8" opacity="0.3" />
                        <circle cx="400" cy="320" r="22" stroke="#0ea5e9" strokeWidth="1.2" opacity="0.6" />
                        <circle cx="400" cy="320" r="14" stroke="#0ea5e9" strokeWidth="0.8" opacity="0.3" />

                        {/* Propeller arcs */}
                        <path d="M 78 180 A 22 22 0 0 1 122 180" stroke="#f59e0b" strokeWidth="0.8" opacity="0.5" />
                        <path d="M 78 320 A 22 22 0 0 1 122 320" stroke="#f59e0b" strokeWidth="0.8" opacity="0.5" />
                        <path d="M 378 180 A 22 22 0 0 1 422 180" stroke="#f59e0b" strokeWidth="0.8" opacity="0.5" />
                        <path d="M 378 320 A 22 22 0 0 1 422 320" stroke="#f59e0b" strokeWidth="0.8" opacity="0.5" />

                        {/* Landing gear */}
                        <line x1="220" y1="280" x2="210" y2="320" stroke="#0ea5e9" strokeWidth="1" opacity="0.5" />
                        <line x1="280" y1="280" x2="290" y2="320" stroke="#0ea5e9" strokeWidth="1" opacity="0.5" />
                        <line x1="200" y1="320" x2="300" y2="320" stroke="#0ea5e9" strokeWidth="0.8" opacity="0.4" />

                        {/* Sensor dome */}
                        <ellipse cx="250" cy="220" rx="20" ry="10" stroke="#0ea5e9" strokeWidth="0.8" opacity="0.5" />
                        <circle cx="250" cy="215" r="5" stroke="#f59e0b" strokeWidth="0.8" opacity="0.6" />

                        {/* Detail lines on body */}
                        <line x1="215" y1="245" x2="235" y2="245" stroke="#0ea5e9" strokeWidth="0.6" opacity="0.3" />
                        <line x1="265" y1="245" x2="285" y2="245" stroke="#0ea5e9" strokeWidth="0.6" opacity="0.3" />
                        <line x1="215" y1="255" x2="235" y2="255" stroke="#0ea5e9" strokeWidth="0.6" opacity="0.3" />
                        <line x1="265" y1="255" x2="285" y2="255" stroke="#0ea5e9" strokeWidth="0.6" opacity="0.3" />

                        {/* Component labels — technical callouts */}
                        <line x1="250" y1="215" x2="320" y2="170" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.25" strokeDasharray="3 3" />
                        <text x="325" y="172" fill="#0ea5e9" fontSize="8" opacity="0.35" fontFamily="monospace">IMU/GPS</text>

                        <line x1="240" y1="260" x2="340" y2="290" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.25" strokeDasharray="3 3" />
                        <text x="345" y="292" fill="#0ea5e9" fontSize="8" opacity="0.35" fontFamily="monospace">FLIGHT CTRL</text>

                        <line x1="100" y1="180" x2="60" y2="145" stroke="#f59e0b" strokeWidth="0.5" opacity="0.25" strokeDasharray="3 3" />
                        <text x="20" y="142" fill="#f59e0b" fontSize="8" opacity="0.35" fontFamily="monospace">BLDC 2306</text>

                        {/* Dimension lines */}
                        <line x1="90" y1="350" x2="410" y2="350" stroke="#0ea5e9" strokeWidth="0.4" opacity="0.2" />
                        <line x1="90" y1="345" x2="90" y2="355" stroke="#0ea5e9" strokeWidth="0.4" opacity="0.2" />
                        <line x1="410" y1="345" x2="410" y2="355" stroke="#0ea5e9" strokeWidth="0.4" opacity="0.2" />
                        <text x="235" y="365" fill="#0ea5e9" fontSize="7" opacity="0.2" fontFamily="monospace">450mm</text>
                    </svg>
                </div>
            </div>

            {/* Corner brackets — technical frame */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-electric-blue/20" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-electric-blue/20" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-electric-blue/20" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-electric-blue/20" />
        </div>
    );
}
