"use client";

export default function AnimatedGrid() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Primary grid */}
            <div
                className="absolute inset-0 animate-grid-pulse"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(14,165,233,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14,165,233,0.08) 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                }}
            />
            {/* Secondary finer grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(14,165,233,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14,165,233,0.15) 1px, transparent 1px)
          `,
                    backgroundSize: "15px 15px",
                }}
            />
            {/* Radial gradient overlay for depth */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse at center, transparent 30%, #1a1a1f 80%)",
                }}
            />
        </div>
    );
}
