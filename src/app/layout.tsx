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
  description: "End-to-end real estate development, renovation, rentals, and investment advisory in Cyprus. Premium service, clear communication, reliable execution.",
  keywords: ["property development", "Cyprus real estate", "property management", "renovation", "investment advisory", "rentals"],
  openGraph: {
    title: "Milenny Property | Boutique Property Development & Management in Cyprus",
    description: "End-to-end real estate development, renovation, rentals, and investment advisory in Cyprus.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
