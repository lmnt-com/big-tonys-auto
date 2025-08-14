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
  title:
    "Big Tony's Auto Emporium - Call (740) 224-2691 for Unbeatable Car Deals!",
  description:
    "Talk to Big Tony himself! Get incredible deals on cars, trucks, and SUVs. Expert advice, creative financing, and deals so good they're practically stealing. Call (740) 224-2691 now!",
  keywords:
    "car dealership, used cars, auto sales, car financing, trade-ins, Big Tony, auto emporium, car deals, (740) 224-2691",
  openGraph: {
    title:
      "Big Tony's Auto Emporium - Deals So Good, They're Practically Stealing!",
    description:
      "Call Big Tony at (740) 224-2691 for unbeatable car deals! Expert advice, creative financing, and more free stuff than you can handle.",
    type: "website",
    locale: "en_US",
    siteName: "Big Tony's Auto Emporium",
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Tony's Auto Emporium - Call (740) 224-2691",
    description:
      "Tony's waiting by the phone with deals you won't believe! Cars, trucks, SUVs - he's got them all!",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Big Tony's Auto Emporium" }],
  creator: "Big Tony's Auto Emporium",
  publisher: "Big Tony's Auto Emporium",
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
      </body>
    </html>
  );
}
