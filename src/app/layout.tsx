import type { Metadata } from "next";
import Script from "next/script";
import FloatingActions from "@/components/FloatingActions";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cibhi Adhinath Padmanaban | Hardware Systems Engineer & Prototyping Specialist",
  description:
    "Personal technical portfolio of Cibhi Adhinath Padmanaban focused on helping teams design, prototype, integrate and manufacture real-world hardware systems.",
  keywords: [
    "hardware systems engineer",
    "prototyping specialist",
    "manufacturing execution",
    "CAD design",
    "DFM",
    "UAV integration",
    "embedded systems",
    "product development",
    "Cibhi Adhinath Padmanaban",
  ],
  openGraph: {
    title: "Cibhi Adhinath Padmanaban | Hardware Systems Engineer",
    description:
      "Personal technical portfolio of Cibhi Adhinath Padmanaban focused on helping teams design, prototype, integrate and manufacture real-world hardware systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* Calendly Stylesheet */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <FloatingActions />
        {children}

        {/* Calendly Scripts */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />

      </body>
    </html>
  );
}
