import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = [
  {
    title: "サイトマップ",
    links: [
      { name: "トップページ", href: "/" },
      { name: "会社概要", href: "/company" },
      { name: "企業の方へ", href: "/for-companies" },
      { name: "求職者の方へ", href: "/for-jobseekers" },
      { name: "よくある質問", href: "/faq" },
      { name: "お問い合わせ", href: "/contact" },
    ],
  },
  {
    title: "企業情報",
    links: [
      { name: "会社名: 田中島建設人材株式会社", href: "#" },
      { name: "所在地: 東京都新宿区西早稲田一丁目六番地3", href: "#" },
      { name: "設立: 2023年", href: "#" },
      { name: "資本金: 1,000万円", href: "#" },
      { name: "許認可: 有料職業紹介事業許可番号 〇〇-〇〇〇〇〇〇", href: "#" },
    ],
  },
  {
    title: "お問い合わせ",
    links: [
      { name: "TEL: 0120-XXX-XXX", href: "tel:0120XXXXXX" },
      { name: "受付時間: 平日9:00〜18:00", href: "#" },
      { name: "MAIL: info@jimaken.co.jp", href: "mailto:info@jimaken.co.jp" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* ロゴと説明 */}
          <div>
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-white">建築・施工管理転職の窓口</span>
            </Link>
            <p className="mt-4 text-gray-400">
              施工管理技士特化型人材紹介サービス。1級施工管理技士に届く、攻めの採用戦略で、あなたの会社に最適な人材を。
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* フッターリンク */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                利用規約
              </Link>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} 田中島建設人材株式会社 All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 