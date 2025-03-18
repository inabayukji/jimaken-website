import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

export default function CompanyPage() {
  return (
    <main className="pt-20">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              会社<span className="text-[#FF9900]">情報</span>
            </h1>
            <p className="text-xl mb-8">
              建設・施工管理転職の窓口を運営する田中島建設人材株式会社についてご紹介します。
            </p>
          </div>
        </div>
      </section>

      {/* 会社概要セクション */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            会社<span className="text-[#0052CC]">概要</span>
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="p-8">
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 px-4 text-left bg-gray-50 w-1/3 text-gray-700">会社名</th>
                    <td className="py-4 px-4 text-gray-700">田中島建設人材株式会社</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 px-4 text-left bg-gray-50 w-1/3 text-gray-700">設立</th>
                    <td className="py-4 px-4 text-gray-700">2024年4月</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 px-4 text-left bg-gray-50 w-1/3 text-gray-700">代表取締役</th>
                    <td className="py-4 px-4 text-gray-700">田中島 隆之介</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 px-4 text-left bg-gray-50 w-1/3 text-gray-700">資本金</th>
                    <td className="py-4 px-4 text-gray-700">500万円</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 px-4 text-left bg-gray-50 w-1/3 text-gray-700">事業内容</th>
                    <td className="py-4 px-4 text-gray-700">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>施工管理技士専門人材マッチングサービス「建設・施工管理転職の窓口」の運営</li>
                        <li>建設業界向け人材採用コンサルティング</li>
                        <li>施工管理技士向けキャリアコンサルティング</li>
                        <li>建設業界向け各種セミナー・イベントの企画・運営</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 px-4 text-left bg-gray-50 w-1/3 text-gray-700">所在地</th>
                    <td className="py-4 px-4 text-gray-700">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-[#0052CC] mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <p>〒169-0051</p>
                          <p>東京都新宿区西早稲田一丁目六番地3 フェリオ西早稲田 2階</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 px-4 text-left bg-gray-50 w-1/3 text-gray-700">連絡先</th>
                    <td className="py-4 px-4 text-gray-700">
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Phone className="h-5 w-5 text-[#0052CC] mr-2 flex-shrink-0" />
                          <a href="tel:0362659181" className="text-[#0052CC] hover:underline">03-6265-9181</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th className="py-4 px-4 text-left bg-gray-50 w-1/3 text-gray-700">営業時間</th>
                    <td className="py-4 px-4 text-gray-700">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-[#0052CC] mr-2 flex-shrink-0" />
                        <p>平日 9:00〜18:00（土日祝休）</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* アクセスマップセクション */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            アクセス<span className="text-[#0052CC]">マップ</span>
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="aspect-w-16 aspect-h-9 w-full h-96 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.602567066114!2d139.7082108!3d35.707463799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d1dc0d57e41%3A0xd0c66ce4bd033db4!2z44OV44Kn44Oq44Kq6KeY5rOi55Sw55qu!5e0!3m2!1sja!2sjp!4v1714535407744!5m2!1sja!2sjp" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">田中島建設人材株式会社 本社</h3>
              <p className="text-gray-700 mb-4">〒169-0051 東京都新宿区西早稲田一丁目六番地3 フェリオ西早稲田 2階</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-start">
                  <ExternalLink className="h-5 w-5 text-[#0052CC] mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">アクセス</p>
                    <p className="text-gray-700">東京メトロ東西線「早稲田駅」より徒歩5分</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            お問い合わせ
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            サービスに関するご質問や資料請求など、お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-[#0052CC] hover:bg-[#0052CC]/90 text-white text-lg px-8 py-6">
              <Link href="/contact?type=company">企業様向けフォーム</Link>
            </Button>
            <Button asChild size="lg" className="bg-[#FF9900] hover:bg-[#FF9900]/90 text-white text-lg px-8 py-6">
              <Link href="/contact?type=jobseeker">求職者様向けフォーム</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
} 