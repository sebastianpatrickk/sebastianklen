import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <html lang="en" className={` ${inter.variable}`}>
      <body className="font-sans antialiased">
        <div className="relative flex min-h-screen flex-col justify-between bg-background p-6 pt-0 text-text md:p-8">
          <div className="bg-fade-to-transparent pointer-events-none fixed left-0 top-0 z-50 h-14 w-full" />
          <div>
            <Header />
            <div className="mx-auto mt-6 w-full max-w-screen-sm text-sm">
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
