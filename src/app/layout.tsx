import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Milenny Property | Boutique Property Development & Management in Cyprus",
  description: "Cyprus-based boutique real estate company specialising in property development, renovation, rental management, and investment advisory. Premium service with European-standard professionalism.",
  keywords: [
    "property development Cyprus",
    "Cyprus real estate",
    "property management Limassol",
    "renovation Cyprus",
    "investment advisory Cyprus",
    "short-term rentals Cyprus",
    "long-term rentals Limassol",
    "real estate investment Cyprus",
    "property sales Cyprus",
    "luxury property Cyprus",
  ],
  authors: [{ name: "Milenny Property" }],
  creator: "Milenny Property",
  publisher: "Milenny Property",
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
  openGraph: {
    title: "Milenny Property | Boutique Property Development & Management in Cyprus",
    description: "End-to-end real estate development, renovation, rentals, and investment advisory in Cyprus. Premium service, clear communication, reliable execution.",
    url: "https://milennyproperty.com",
    siteName: "Milenny Property",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Milenny Property - Boutique Property Development in Cyprus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Milenny Property | Property Development & Management in Cyprus",
    description: "End-to-end real estate development, renovation, rentals, and investment advisory in Cyprus.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  metadataBase: new URL("https://milennyproperty.com"),
  alternates: {
    canonical: "/",
  },
  category: "Real Estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="geo.region" content="CY-05" />
        <meta name="geo.placename" content="Limassol, Cyprus" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
