import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, Star } from "lucide-react";

export default function ForJobseekersPage() {
  return (
    <main className="pt-20">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-400 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              あなたの<span className="text-[#0052CC]">スキル</span>と<span className="text-[#0052CC]">経験</span>を<br />
              最大限に活かせる職場へ
            </h1>
            <p className="text-xl mb-8">
              施工管理技士専門のマッチングサービスで、<br />
              理想のキャリアを実現しませんか？
            </p>
            <Button asChild size="lg" className="bg-[#0052CC] hover:bg-[#0052CC]/90 text-white text-lg px-8 py-6">
              <Link href="/contact?type=jobseeker">無料相談はこちら</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 悩みセクション */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">こんな<span className="text-[#FF9900]">悩み</span>はありませんか？</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "自分に合った職場がわからない", description: "求人情報だけでは、実際の職場環境や社風がわからない" },
              { title: "スキルを活かせる仕事がない", description: "持っているスキルや資格を十分に活かせる仕事に出会えない" },
              { title: "キャリアアップの道筋が見えない", description: "今の職場ではキャリアアップの道筋が見えず、将来に不安がある" },
              { title: "転職活動の時間がない", description: "現在の仕事が忙しく、転職活動に時間を割けない" },
              { title: "給与・待遇に不満がある", description: "現在の給与や待遇に不満があり、改善したいと考えている" },
              { title: "転職後のミスマッチが心配", description: "転職後に職場環境や仕事内容とのミスマッチが起きないか心配" }
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
            建築・施工管理転職の窓口の<span className="text-[#FF9900]">3つの特徴</span>
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            施工管理技士専門だからこそ実現できる、高精度なマッチングサービス
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="bg-orange-50 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl text-[#FF9900]">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">非公開求人多数</h3>
              <p className="text-gray-700">
                一般の求人サイトには掲載されていない非公開求人を多数保有。あなたのスキルや経験に最適な求人をご紹介します。
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="bg-orange-50 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl text-[#FF9900]">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">専任アドバイザー</h3>
              <p className="text-gray-700">
                建設業界に精通した専任アドバイザーが、あなたの希望や強みを丁寧にヒアリング。最適な職場をご提案します。
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="bg-orange-50 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl text-[#FF9900]">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">入社後サポート</h3>
              <p className="text-gray-700">
                入社後もフォローアップを実施。新しい環境での不安や悩みにも対応し、長期的なキャリア形成をサポートします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 対応職種セクション */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            対応<span className="text-[#0052CC]">職種</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "建築施工管理", description: "建築工事における工程管理、品質管理、安全管理などを担当" },
              { title: "土木施工管理", description: "土木工事における工程管理、品質管理、安全管理などを担当" },
              { title: "電気施工管理", description: "電気設備工事における工程管理、品質管理、安全管理などを担当" },
              { title: "設備施工管理", description: "空調・衛生設備工事における工程管理、品質管理などを担当" },
              { title: "現場監督", description: "建設現場全体の指揮・監督を行い、工事の円滑な進行を管理" },
              { title: "現場事務", description: "建設現場における書類作成や事務作業全般を担当" },
              { title: "積算・見積", description: "建設工事の費用を算出し、予算管理や見積書作成を担当" },
              { title: "CADオペレーター", description: "CADを使用した図面作成や修正作業を担当" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 転職成功事例セクション */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            転職<span className="text-[#FF9900]">成功事例</span>
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            実際に建築・施工管理転職の窓口を通じて転職された方々の事例をご紹介します
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 rounded-full w-12 h-12 mr-4"></div>
                <div>
                  <h3 className="font-bold">Aさん（35歳・男性）</h3>
                  <p className="text-sm text-gray-600">1級建築施工管理技士</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">転職満足度：5.0</p>
              </div>
              <div className="mb-4">
                <h4 className="font-bold text-sm mb-1">転職前</h4>
                <p className="text-gray-700 text-sm">大手ゼネコンの下請け企業で現場監督として勤務。長時間労働と低賃金に悩んでいた。</p>
              </div>
              <div className="mb-4">
                <h4 className="font-bold text-sm mb-1">転職後</h4>
                <p className="text-gray-700 text-sm">中堅ゼネコンの正社員として転職。年収120万円アップし、ワークライフバランスも改善。</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 rounded-full w-12 h-12 mr-4"></div>
                <div>
                  <h3 className="font-bold">Bさん（42歳・男性）</h3>
                  <p className="text-sm text-gray-600">1級土木施工管理技士</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">転職満足度：5.0</p>
              </div>
              <div className="mb-4">
                <h4 className="font-bold text-sm mb-1">転職前</h4>
                <p className="text-gray-700 text-sm">地方の建設会社で土木工事の現場監督として勤務。キャリアアップの機会がなく将来に不安を感じていた。</p>
              </div>
              <div className="mb-4">
                <h4 className="font-bold text-sm mb-1">転職後</h4>
                <p className="text-gray-700 text-sm">大手建設コンサルティング会社へ転職。専門性を活かせる環境で、年収も30%アップ。</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 rounded-full w-12 h-12 mr-4"></div>
                <div>
                  <h3 className="font-bold">Cさん（28歳・女性）</h3>
                  <p className="text-sm text-gray-600">2級建築施工管理技士</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex mb-1">
                  {[1, 2, 3, 4, 5].map((star, index) => (
                    <Star key={star} className={`h-4 w-4 ${index < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-400'}`} />
                  ))}
                </div>
                <p className="text-sm text-gray-600">転職満足度：4.0</p>
              </div>
              <div className="mb-4">
                <h4 className="font-bold text-sm mb-1">転職前</h4>
                <p className="text-gray-700 text-sm">設計事務所で勤務。現場経験を積みたいと考えていたが、機会がなかった。</p>
              </div>
              <div className="mb-4">
                <h4 className="font-bold text-sm mb-1">転職後</h4>
                <p className="text-gray-700 text-sm">中堅ゼネコンの施工管理職として転職。現場経験を積みながら、1級施工管理技士の資格取得をサポートしてもらえる環境に。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 転職サポートの流れセクション */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            転職サポートの<span className="text-[#0052CC]">流れ</span>
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            お問い合わせから転職成功まで、専任アドバイザーが伴走します
          </p>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { title: "無料相談", description: "お問い合わせフォームから無料相談をお申し込みください" },
                { title: "ヒアリング", description: "あなたのスキルや経験、希望条件などをヒアリングします" },
                { title: "求人紹介", description: "あなたに最適な求人をご紹介します" },
                { title: "面接対策", description: "面接対策や条件交渉のサポートを行います" },
                { title: "入社・定着", description: "入社後のフォローアップも実施します" }
              ].map((step, index) => (
                <div key={index} className="relative z-10 flex flex-col items-center">
                  <div className="bg-[#FF9900] rounded-full w-12 h-12 flex items-center justify-center text-white mb-4">
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
      <section className="py-16 bg-[#FF9900] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            あなたのキャリアアップを建築・施工管理転職の窓口がサポートします
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            まずは無料相談から。あなたの希望や悩みをお聞かせください。
          </p>
          <Button asChild size="lg" className="bg-white text-[#FF9900] hover:bg-white/90 text-lg px-8 py-6">
            <Link href="/contact?type=jobseeker">無料相談はこちら</Link>
          </Button>
        </div>
      </section>
    </main>
  );
} 