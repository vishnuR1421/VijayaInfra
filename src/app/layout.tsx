import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vijaya Infrastructures | Turnkey Engineering & Premium Interiors",
  description: "Vijaya Infrastructures Private Limited is South India's premier turnkey contracting partner. Specializing in fast-track retail showroom rollouts, heavy civil constructions, structural glazing facades, and bespoke home decors.",
  keywords: ["Turnkey Construction", "Commercial Interiors", "Style Union Vendor", "Design Nest Interiors", "Civil Contractor South India", "Structural Glazing Hyderabad", "Retail Store Fit-out Telangana"],
  authors: [{ name: "Vijaya Infrastructures Private Limited" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-dark-obsidian text-slate-200">
        {children}
      </body>
    </html>
  );
}
