import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personSchema, websiteSchema, projectsSchema, breadcrumbSchema } from "@/lib/jsonld";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",        // Prevent render-blocking — improves LCP
  preload: true,
});

// ─────────────────────────────────────────────────────────────────────────────
// Site-wide Metadata (Next.js Metadata API)
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://shashidhar-portfolio.netlify.app"),

  title: {
    default: "Shadiq Sardi | Portfolio, Projects & Certifications",
    template: "%s | Shadiq Sardi",
  },
  description:
    "Portofolio Shadiq Sardi — Software Engineer II dengan pengalaman 4+ tahun membangun aplikasi web enterprise yang skalabel. Ahli dalam React, Next.js, Node.js, TypeScript, dan stack MERN/MEVN. Kontributor open source.",

  keywords: [
    // Identity
    "Shashidhar Naik",
    "Shashidhar Naik Portfolio",
    "shashidhar developer",
    // Role keywords
    "Software Engineer II",
    "Full Stack Developer",
    "Full Stack Developer Portfolio",
    "Frontend Lead",
    "JavaScript Engineer",
    "JavaScript Developer",
    // Tech keywords
    "React Developer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "MERN Stack Developer",
    "MEVN Stack Developer",
    "Vue.js Developer",
    "Python Developer",
    // Domain
    "Warehouse Management System Developer",
    "Enterprise Web Application Developer",
    "Open Source Developer",
    "NPM Package Author",
    // Location
    "Software Engineer Bangalore",
    "Web Developer India",
    // Portfolio type
    "Developer Portfolio",
    "Web Application Portfolio",
    "Software Engineer Portfolio India",
  ],

  authors: [{ name: "Shadiq Sardi", url: "https://shashidhar-portfolio.netlify.app" }],
  creator: "Shadiq Sardi",
  publisher: "Shadiq Sardi",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // ── Canonical ──────────────────────────────────────────────────────────────
  alternates: {
    canonical: "/",
  },

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: "profile",
    firstName: "Shadiq",
    lastName: "Sardi",
    username: "shashi089",
    title: "Shadiq Sardi | Portofolio Full Stack Developer",
    description:
      "Software Engineer II dengan pengalaman 4+ tahun. React, Next.js, Node.js, TypeScript. Frontend Lead untuk Sistem Manajemen Gudang enterprise. Kontributor open source.",
    url: "https://shashidhar-portfolio.netlify.app",
    siteName: "Portofolio Shadiq Sardi",
    locale: "id_ID",
    images: [
      {
        url: "/portfolio_hero_section.png",
        width: 1200,
        height: 630,
        alt: "Shadiq Sardi — Pratinjau Portofolio Full Stack Developer",
        type: "image/png",
      },
    ],
  },

  // ── Twitter Card ──────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Shadiq Sardi | Full Stack Developer — React, Node.js, Next.js",
    description:
      "Software Engineer II berspesialisasi dalam aplikasi web enterprise yang skalabel. Ahli dalam stack MERN/MEVN dan alat open source.",
    images: [
      {
        url: "/portfolio_hero_section.png",
        alt: "Pratinjau Portofolio Shadiq Sardi",
      },
    ],
    creator: "@shashidhar_dev",
  },

  // ── Icons ─────────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  // ── Manifest ──────────────────────────────────────────────────────────────
  manifest: "/manifest.json",

  // ── Theme ─────────────────────────────────────────────────────────────────
  other: {
    "theme-color": "#0f172a",       // slate-950 — matches page background
    "color-scheme": "dark",
    "msapplication-TileColor": "#0f172a",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Root Layout
// ─────────────────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        {/* ── Font Performance: Preconnect to Google Fonts ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ── Preload OG Image for fast LCP ── */}
        <link
          rel="preload"
          as="image"
          href="/portfolio_hero_section.png"
          type="image/png"
        />

        {/* ── Theme color (supported by Chrome/Android) ── */}
        <meta name="theme-color" content="#0f172a" />
        <meta name="color-scheme" content="dark" />

        {/* ── Geo / Location signals ── */}
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore" />

        {/* ── JSON-LD: Person Schema ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />

        {/* ── JSON-LD: WebSite Schema ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* ── JSON-LD: Projects ItemList Schema ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
        />

        {/* ── JSON-LD: Breadcrumb Schema ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
