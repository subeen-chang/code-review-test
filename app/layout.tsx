import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ENHYPEN - Official Fan Page",
  description: "Connect different dimensions. Official fan page for ENHYPEN with latest news, member profiles, gallery, and community.",
  keywords: ["ENHYPEN", "엔하이픈", "KPOP", "ENGENE", "Heeseung", "Jay", "Jake", "Sunghoon", "Sunoo", "Jungwon", "Ni-ki"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
