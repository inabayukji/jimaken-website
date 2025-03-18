"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 会社情報 */}
          <div>
            <div className="mb-4">
              <Link href="/" className="inline-block">
                <span className="text-xl font-bold text-white">田中島建設人材株式会社</span>
              </Link>
            </div>
            <p className="text-gray-400 mb-4">
              施工管理技士と建設会社をつなぐ、
              業界特化型マッチングプラットフォーム
            </p>
          </div>

          {/* サービス */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">サービス</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/for-companies" className="text-gray-400 hover:text-white transition-colors">
                  企業様向けサービス
                </Link>
              </li>
              <li>
                <Link href="/for-jobseekers" className="text-gray-400 hover:text-white transition-colors">
                  求職者様向けサービス
                </Link>
              </li>
              {/* 導入事例は一時的にコメントアウト
              <li>
                <Link href="/success-stories" className="text-gray-400 hover:text-white transition-colors">
                  導入事例
                </Link>
              </li>
              */}
            </ul>
          </div>

          {/* お問い合わせ */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">お問い合わせ</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/company" className="text-gray-400 hover:text-white transition-colors">
                  会社概要
                </Link>
              </li>
              <li className="text-gray-400">
                <span className="block">〒169-0051</span>
                <span className="block">東京都新宿区西早稲田一丁目六番地3</span>
                <span className="block">フェリオ西早稲田 2階</span>
              </li>
              <li>
                <a href="tel:0362659181" className="text-gray-400 hover:text-white transition-colors">
                  TEL: 03-6265-9181
                </a>
              </li>
              <li className="pt-2">
                <Link href="/contact" className="text-white bg-[#0052CC] hover:bg-[#0052CC]/90 px-4 py-2 rounded inline-block">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-sm text-gray-400">
              <p>&copy; {currentYear} 田中島建設人材株式会社 All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-4 md:justify-end text-sm text-gray-400">
              <Link href="/terms" className="hover:text-white transition-colors">
                利用規約
              </Link>
              <Link href="/privacy" className="hover:text-white transition-colors">
                プライバシーポリシー
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookie ポリシー
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 