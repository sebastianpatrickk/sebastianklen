import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sebastianklen.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Sebastian Klen",
    template: "%s | Sebastian Klen",
  },
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="relative min-h-screen font-sans antialiased">
        <div className="pointer-events-none fixed left-0 top-0 z-50 h-8 w-full bg-fade-to-transparent md:h-14" />
        <div className="mx-auto max-w-screen-sm px-6 pt-8 md:pt-14">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
