import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const siteUrl = "https://portfolio-beta-topaz-25.vercel.app";
const siteTitle = "Muaz Ali | Full-Stack Web Developer";
const siteDescription =
  "Full-Stack Web Developer with 2+ years of experience building modern web applications using Next.js, React, TypeScript, Node.js, and Tailwind CSS. Currently expanding into React Native.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  authors: [{ name: "Muaz Ali" }],
  creator: "Muaz Ali",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "Muaz Ali Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
