import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionConfig } from "motion/react";
import "./globals.css";
import { personal } from "@/data/personal";
import { CosmicEffects } from "@/components/layout/CosmicEffects";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personal.name} | Developer Portfolio`,
    template: `%s | ${personal.name}`,
  },
  description: personal.introduction,
  openGraph: {
    title: `${personal.name} | Developer Portfolio`,
    description: personal.introduction,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${personal.name} — developer portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} | Developer Portfolio`,
    description: personal.introduction,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
        <CosmicEffects />
      </body>
    </html>
  );
}
