import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nebula Brush - AI-Powered Text-to-Nebula Image Generator",
  description: "Generate stunning and realistic nebula images from text descriptions using AI. Turn your imagination into cosmic art effortlessly.",
  generator: "Kodrish Innovation and Solutions LLP",
  keywords: [
    "AI Nebula Generator",
    "Text to Image AI",
    "Space Art Generator",
    "AI Cosmic Art",
    "Nebula Brush",
  ],
  authors: [{ name: "Kodrish Innovation & Solutions LLP", url: "https://kodrish.me" }],
  creator: "Kodrish Innovation & Solutions LLP",
  publisher: "Kodrish Innovation & Solutions LLP",
  robots: "index, follow",
  openGraph: {
    title: "Nebula Brush - AI-Powered Text-to-Nebula Image Generator",
    description: "Generate stunning nebula images from text descriptions using AI.",
    url: "https://kodrish.me/nebula-brush",
    siteName: "Nebula Brush",
    images: [
      {
        url: "/nebula-example.jpg", // Replace with an actual image URL in /public
        width: 1200,
        height: 630,
        alt: "AI-generated nebula example",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@kodrish", // Replace with your actual Twitter handle
    title: "Nebula Brush - AI-Powered Text-to-Nebula Image Generator",
    description: "Create mesmerizing nebula images using AI-powered text-to-image generation.",
    images: ["/nebula-example.jpg"], // Replace with an actual image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="canonical" href="https://kodrish.me" />

        {/* Favicon for different devices */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Google Fonts Preload */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col bg-black text-white">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}