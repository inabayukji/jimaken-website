"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center">
          {/* ロゴ */}
          <Link href="/" className="flex items-center">
            <span className={`text-sm sm:text-lg md:text-xl font-bold whitespace-nowrap ${isScrolled ? 'text-[#0052CC]' : 'text-white'}`}>
              田中島建設人材株式会社
            </span>
          </Link>

          {/* 空白スペース */}
          <div className="flex-1"></div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/for-companies"
              className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#0052CC]' : 'text-white hover:text-gray-200'}`}
            >
              企業様向け
            </Link>
            <Link
              href="/for-jobseekers"
              className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#0052CC]' : 'text-white hover:text-gray-200'}`}
            >
              求職者様向け
            </Link>
            {/* 導入事例は一時的にコメントアウト
            <Link
              href="/success-stories"
              className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#0052CC]' : 'text-white hover:text-gray-200'}`}
            >
              導入事例
            </Link>
            */}
            <Link
              href="/company"
              className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#0052CC]' : 'text-white hover:text-gray-200'}`}
            >
              会社情報
            </Link>
          </nav>

          {/* お問い合わせボタン */}
          <div className="hidden md:flex items-center ml-8">
            <Button asChild className={isScrolled ? "bg-[#0052CC] hover:bg-[#0052CC]/90 text-white" : "bg-white text-[#0052CC] hover:bg-white/90"}>
              <Link href="/contact">お問い合わせ</Link>
            </Button>
          </div>

          {/* モバイルメニューボタン */}
          <button
            className={`md:hidden ml-auto ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/for-companies"
                className="text-gray-700 hover:text-[#0052CC] font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                企業様向け
              </Link>
              <Link
                href="/for-jobseekers"
                className="text-gray-700 hover:text-[#0052CC] font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                求職者様向け
              </Link>
              {/* 導入事例は一時的にコメントアウト
              <Link
                href="/success-stories"
                className="text-gray-700 hover:text-[#0052CC] font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                導入事例
              </Link>
              */}
              <Link
                href="/company"
                className="text-gray-700 hover:text-[#0052CC] font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                会社情報
              </Link>
              <div className="pt-4 border-t border-gray-100">
                <Button asChild className="bg-[#0052CC] hover:bg-[#0052CC]/90 w-full">
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    お問い合わせ
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
} 