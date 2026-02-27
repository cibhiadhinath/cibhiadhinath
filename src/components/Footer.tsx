export default function Footer() {
    return (
        <footer className="border-t border-graphite-light/15">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-14">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 border-2 border-electric-blue/30 rounded-lg flex items-center justify-center">
                            <span className="text-electric-blue font-mono font-bold text-xs">C</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-soft-white font-semibold tracking-wide text-sm leading-tight">
                                Cibhi Adhinath Padmanaban
                            </span>
                            <span className="text-muted/50 text-[11px] tracking-wide leading-tight mt-1">
                                Co-Founder, Unbound3D — Hardware Manufacturing & Execution Support
                            </span>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-6">
                        {["Services", "Case Studies", "Process", "Contact"].map(
                            (link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                                    className="text-muted/60 hover:text-electric-blue transition-colors duration-300 text-[13px] tracking-wide"
                                >
                                    {link}
                                </a>
                            )
                        )}
                    </div>

                    {/* Copyright */}
                    <p className="text-muted/40 text-[12px] font-mono tracking-wider">
                        &copy; {new Date().getFullYear()} Cibhi Adhinath Padmanaban
                    </p>
                </div>
            </div>
        </footer>
    );
}
