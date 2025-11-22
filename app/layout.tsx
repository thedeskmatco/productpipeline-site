import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProductPipeline – AI-powered ecommerce automation",
  description:
    "ProductPipeline is a next-generation infrastructure layer for managing product data and workflows. Currently in development.",
  metadataBase: new URL("https://productpipeline.ai"),
  openGraph: {
    title: "ProductPipeline",
    description:
      "AI-powered ecommerce automation for modern merchants. Next-generation infrastructure for product data and workflows.",
    url: "https://productpipeline.ai",
    siteName: "ProductPipeline",
    images: [
      {
        url: "/og.png.png",
        width: 1200,
        height: 630,
        alt: "ProductPipeline brand mark",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProductPipeline",
    description:
      "AI-powered infrastructure for managing product data and ecommerce workflows.",
    images: ["/og.png.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
