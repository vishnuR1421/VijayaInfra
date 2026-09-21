import type { Metadata } from "next";
import { Manrope, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { COMPANY_DETAILS } from "@/data/company";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatBot from "@/components/ChatBot";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Vijaya Infrastructures Private Limited | Commercial Fit-Outs & Premium Interiors",
  description:
    "Turnkey commercial fit-outs, retail store execution, corporate office interiors, electrical works, ACP & glass facades, and turnkey residential interiors across South India.",
  keywords: [
    "Vijaya Infrastructures Private Limited",
    "Commercial Fit-outs South India",
    "Retail Store Fit-out Hyderabad",
    "Commercial Interiors Hyderabad",
    "Electrical Works South India",
    "ACP and Glass Facade Systems",
    "Style Union Contractor",
    "Residential Interiors",
    "Office Fit-outs Hyderabad",
    "Turnkey Interior Contractor",
  ],
  authors: [{ name: "Vijaya Infrastructures Private Limited" }],
  openGraph: {
    title: "Vijaya Infrastructures Private Limited | Commercial Fit-Outs & Premium Interiors",
    description:
      "Turnkey commercial fit-outs, retail store execution, corporate office interiors, electrical works, ACP & glass facades, and turnkey residential interiors across South India.",
    url: "https://www.vijayainfrastructures.com",
    siteName: "Vijaya Infrastructures Private Limited",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "GeneralContractor"],
    "name": COMPANY_DETAILS.name,
    "alternateName": ["Vijaya Infrastructures", "Vijaya Constructions"],
    "url": COMPANY_DETAILS.website,
    "logo": "https://www.vijayainfrastructures.com/logo.png",
    "description":
      "Turnkey commercial fit-outs, retail store execution, commercial interiors, electrical installations, ACP & glass facade systems, and turnkey residential interiors across South India.",
    "foundingDate": "2015",
    "identifier": [
      {
        "@type": "PropertyValue",
        "name": "CIN",
        "value": COMPANY_DETAILS.cin,
      },
      {
        "@type": "PropertyValue",
        "name": "GSTIN",
        "value": COMPANY_DETAILS.gstin,
      },
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": COMPANY_DETAILS.address.line1,
      "addressLocality": COMPANY_DETAILS.address.city,
      "addressRegion": COMPANY_DETAILS.address.state,
      "postalCode": COMPANY_DETAILS.address.pincode,
      "addressCountry": "IN",
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": `+91-${COMPANY_DETAILS.phones[0]}`,
        "contactType": "sales",
        "areaServed": "IN-SO",
        "availableLanguage": ["English", "Telugu", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        "telephone": `+91-${COMPANY_DETAILS.phones[1]}`,
        "contactType": "customer support",
        "areaServed": "IN-SO",
        "availableLanguage": ["English", "Telugu", "Hindi"],
      },
    ],
    "email": COMPANY_DETAILS.email,
    "areaServed": ["Telangana", "Andhra Pradesh", "Karnataka", "Tamil Nadu"],
  };

  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${playfair.variable} h-full scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#373435] antialiased relative">
        {children}
        <ChatBot />
        <WhatsAppButton />
      </body>
    </html>
  );
}
