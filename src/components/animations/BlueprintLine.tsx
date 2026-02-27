"use client";

export default function BlueprintLine({ className = "" }: { className?: string }) {
    return (
        <svg
            className={`absolute pointer-events-none ${className}`}
            width="100%"
            height="2"
            viewBox="0 0 1000 2"
            preserveAspectRatio="none"
        >
            <line
                x1="0"
                y1="1"
                x2="1000"
                y2="1"
                stroke="rgba(14,165,233,0.15)"
                strokeWidth="1"
                strokeDasharray="1000"
                strokeDashoffset="1000"
                className="animate-draw-line"
            />
        </svg>
    );
}
