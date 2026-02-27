"use client";

import { useEffect, useRef, ReactNode } from "react";

interface FadeInViewProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function FadeInView({
    children,
    className = "",
    delay = 0,
}: FadeInViewProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        node.style.opacity = "1";
                        node.style.transform = "translateY(0)";
                    }, delay);
                    observer.unobserve(node);
                }
            },
            { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [delay]);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            }}
        >
            {children}
        </div>
    );
}
