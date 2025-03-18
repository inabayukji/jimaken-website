"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "会社概要", href: "/company" },
  { name: "企業の方へ", href: "/for-companies" },
  { name: "求職者の方へ", href: "/for-jobseekers" },
  { name: "よくある質問", href: "/faq" },
  { name: "お問い合わせ", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white z-50 shadow-md border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* ロゴ */}
          <Link href="/" className="flex items-center">
            <span className="text-sm sm:text-base md:text-xl font-bold whitespace-nowrap">建築・施工管理転職の窓口</span>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#0052CC] font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTAボタン */}
          <div className="hidden md:flex space-x-4">
            <Button asChild variant="outline" className="border-[#0052CC] text-[#0052CC] hover:bg-[#0052CC] hover:text-white">
              <Link href="/for-jobseekers">求人情報を見る</Link>
            </Button>
            <Button asChild className="bg-[#FF9900] hover:bg-[#FF9900]/90 text-white">
              <Link href="/contact">無料相談はこちら</Link>
            </Button>
          </div>

          {/* モバイルメニューボタン */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t border-gray-100"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-[#0052CC] font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-4 pt-4">
              <Button asChild variant="outline" className="border-[#0052CC] text-[#0052CC] hover:bg-[#0052CC] hover:text-white w-full">
                <Link href="/for-jobseekers">求人情報を見る</Link>
              </Button>
              <Button asChild className="bg-[#FF9900] hover:bg-[#FF9900]/90 text-white w-full">
                <Link href="/contact">無料相談はこちら</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
} 