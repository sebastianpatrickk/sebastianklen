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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-mono antialiased`}
      >
        <div className="flex min-h-screen flex-col justify-between bg-background p-6 pt-0 text-text md:p-8">
          <Header />
          <div className="mx-auto w-full max-w-screen-md">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
