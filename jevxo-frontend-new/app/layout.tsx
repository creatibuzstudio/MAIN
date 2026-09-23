import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, DM_Serif_Display, Geist, Geist_Mono, Bai_Jamjuree, Manrope } from "next/font/google";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baiJamjuree = Bai_Jamjuree({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-bai-jamjuree",
});

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-manrope",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000";

export const viewport: Viewport = {
  themeColor: "#F85800",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Creatibuz Studio | B2B SaaS & Web Development",
    template: "%s | Creatibuz Studio - Digital Product Studio",
  },
  description:
    "Creatibuz Studio is a premier AI-native software studio. We design, train, and ship intelligent digital products, Next.js web applications, and B2B SaaS platforms in days, not months.",
  keywords: [
    "Creatibuz Studio",
    "Creatibuz Studio Agency",
    "AI Software Company",
    "Digital Product Agency",
    "UI/UX Design Agency",
    "Next.js Software Studio",
    "B2B SaaS Engineering",
    "Custom AI Models",
    "Full-Stack Web Development",
    "Mobile App Development",
    "Automation Workflows",
  ],
  authors: [{ name: "Creatibuz Studio Engineering Team", url: siteUrl }],
  creator: "Creatibuz Studio Software Studio",
  publisher: "Creatibuz Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/fav.jpg", type: "image/jpg" },
    ],
    shortcut: "/fav.jpg",
    apple: "/fav.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Creatibuz Studio - AI Software & Digital Product Studio",
    description:
      "Full-service UI/UX and development agency helping startups and businesses create fast, scalable, and user-focused digital products.",
    siteName: "Creatibuz Studio",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Creatibuz Studio Software Studio",
      }, 
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creatibuz Studio - AI Software & Digital Product Studio",
    description:
      "Full-service UI/UX and development agency helping startups and businesses create fast, scalable, and user-focused digital products.",
    images: ["/logo.jpg"],
    creator: "@Creatibuz Studio",
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Creatibuz Studio",
    url: siteUrl,
    logo: `${siteUrl}/logo.jpg`,
    description:
      "Creatibuz Studio is an AI software company and digital product studio that designs, builds, and deploys scalable web, mobile, and B2B SaaS solutions.",
    sameAs: [
      "https://facebook.com/Creatibuz Studio",
      "https://linkedin.com/company/Creatibuz Studio",
      "https://twitter.com/Creatibuz Studio",
      "https://instagram.com/Creatibuz Studio",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English", "Bengali"],
    },
  };

  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} ${geistSans.variable} ${geistMono.variable} ${baiJamjuree.variable} ${dmSerif.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col justify-between bg-[#080808] text-white font-sans selection:bg-[#F85800] selection:text-white">
        {children}
      </body>
    </html>
  );
}
