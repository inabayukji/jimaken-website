import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function ForCompaniesPage() {
  return (
    <main className="pt-20">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              採用課題を解決する<br />
              <span className="text-[#FF9900]">最適な人材</span>をご紹介
            </h1>
            <p className="text-xl mb-8">
              施工管理技士専門のマッチングサービスで、<br />
              貴社の採用課題を解決します。
            </p>
            <Button asChild size="lg" className="bg-[#FF9900] hover:bg-[#FF9900]/90 text-white text-lg px-8 py-6">
              <Link href="/contact?type=company">無料相談はこちら</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 課題セクション */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">こんな<span className="text-[#0052CC]">採用課題</span>はありませんか？</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "応募が集まらない", description: "求人サイトに掲載しても、なかなか応募が集まらない" },
              { title: "良い人材に出会えない", description: "応募はあっても、求めるスキルや経験を持った人材に出会えない" },
              { title: "採用コストが高い", description: "求人広告費や採用にかかる工数が多く、コストが高くなっている" },
              { title: "早期退職が多い", description: "せっかく採用しても、ミスマッチで早期退職してしまう" },
              { title: "採用に時間がかかる", description: "採用活動に時間がかかり、現場の人手不足が解消できない" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* サービス特徴セクション */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            建築・施工管理転職の窓口の<span className="text-[#0052CC]">3つの特徴</span>
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            施工管理技士専門だからこそ実現できる、高精度なマッチングサービス
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl text-[#0052CC]">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">成果報酬型の料金体系</h3>
              <p className="text-gray-700">
                採用が決定するまで一切の費用は発生しません。採用成功時のみ、成果に応じた料金をいただく透明性の高い料金体系です。
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl text-[#0052CC]">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">定着保証制度</h3>
              <p className="text-gray-700">
                ご入社後の定着率にも自信があります。万が一の早期退職にも柔軟に対応する、安心の定着保証制度をご用意しています。退職した場合は返金いたします。
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl text-[#0052CC]">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">充実したサービスフロー</h3>
              <p className="text-gray-700">
                初回ヒアリングから採用後のフォローまで一貫したサポートをご提供。施工管理技士に特化した採用ノウハウで、スムーズな採用をサポートします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 導入メリットセクション */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            導入<span className="text-[#0052CC]">メリット</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-6">採用コストの削減</h3>
              <ul className="space-y-4">
                {[
                  "求人広告費の削減",
                  "採用担当者の工数削減",
                  "ミスマッチによる再採用コストの削減",
                  "早期退職リスクの低減"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-[#0052CC] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2 bg-white p-6 rounded-lg shadow-md">
              <div className="text-center">
                <span className="text-5xl font-bold text-[#0052CC]">40%</span>
                <p className="text-xl mt-2">採用コスト削減</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center">
                <span className="text-5xl font-bold text-[#0052CC]">88%</span>
                <p className="text-xl mt-2">6ヶ月定着率</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">採用品質の向上</h3>
              <ul className="space-y-4">
                {[
                  "スキル・経験のマッチング精度向上",
                  "企業文化との適合性を考慮",
                  "長期的なキャリアプランを考慮",
                  "定着率の大幅な向上"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-[#0052CC] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 導入の流れセクション */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            導入の<span className="text-[#0052CC]">流れ</span>
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            お問い合わせから採用成功まで、専任コンサルタントが伴走します
          </p>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { title: "無料相談", description: "お問い合わせフォームから無料相談をお申し込みください" },
                { title: "ヒアリング", description: "貴社の採用課題や求める人材像をヒアリングします" },
                { title: "候補者紹介", description: "厳選した候補者をご紹介します" },
                { title: "面接・選考", description: "候補者との面接・選考をサポートします" },
                { title: "採用・定着", description: "採用後のフォローアップも実施します" }
              ].map((step, index) => (
                <div key={index} className="relative z-10 flex flex-col items-center">
                  <div className="bg-[#0052CC] rounded-full w-12 h-12 flex items-center justify-center text-white mb-4">
                    {index + 1}
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-center">{step.title}</h4>
                  <p className="text-gray-600 text-center text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-16 bg-[#0052CC] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            採用課題の解決は建築・施工管理転職の窓口にお任せください
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            まずは無料相談から。貴社の採用課題をお聞かせください。
          </p>
          <Button asChild size="lg" className="bg-white text-[#0052CC] hover:bg-white/90 text-lg px-8 py-6">
            <Link href="/contact?type=company">無料相談はこちら</Link>
          </Button>
        </div>
      </section>
    </main>
  );
} 