import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-mono antialiased">
        <div className="bg-background text-text relative flex min-h-screen flex-col justify-between p-6 pt-0 md:p-8">
          <div className="from-background pointer-events-none fixed top-0 left-0 z-50 h-6 w-full bg-linear-to-b to-transparent" />
          <div>
            <Header />
            <div className="mx-auto mt-12 w-full max-w-2xl">{children}</div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
