import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "施工管理Pro - 施工管理技士と建設会社をつなぐマッチングプラットフォーム",
  description: "施工管理技士と建設会社をつなぐ、業界特化型マッチングプラットフォーム。AIを活用した最適なマッチングで、建設業界の人材課題を解決します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
