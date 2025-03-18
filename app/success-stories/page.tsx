import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Star } from "lucide-react";

export default function SuccessStoriesPage() {
  return (
    <main className="pt-20">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              導入<span className="text-[#FF9900]">事例</span>
            </h1>
            <p className="text-xl mb-8">
              建設・施工管理転職の窓口を活用した企業様と求職者様の成功事例をご紹介します。
            </p>
          </div>
        </div>
      </section>

      {/* 企業導入事例セクション */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            企業様<span className="text-[#0052CC]">導入事例</span>
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            建設・施工管理転職の窓口を導入し、採用課題を解決した企業様の事例をご紹介します
          </p>

          {/* 事例1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gray-100 p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">A建設株式会社</h3>
                  <p className="text-gray-600">大手ゼネコン / 従業員数：約500名</p>
                </div>
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">課題</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#0052CC] mr-2 flex-shrink-0 mt-0.5" />
                      <span>慢性的な施工管理技士の人材不足</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#0052CC] mr-2 flex-shrink-0 mt-0.5" />
                      <span>採用コストの高騰</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#0052CC] mr-2 flex-shrink-0 mt-0.5" />
                      <span>早期退職によるコスト損失</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">導入効果</h4>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-[#0052CC]">45%</p>
                      <p className="text-sm text-gray-700">採用コスト削減</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-[#0052CC]">2週間</p>
                      <p className="text-sm text-gray-700">採用期間短縮</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-[#0052CC]">95%</p>
                      <p className="text-sm text-gray-700">1年定着率</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    建設・施工管理転職の窓口の導入により、求人広告費を大幅に削減しながらも、スキルマッチした優秀な施工管理技士を短期間で採用することができました。また、入社後のフォローアップサービスにより、定着率も大幅に向上しました。
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="italic text-gray-700">
                      「これまで採用に苦戦していましたが、建設・施工管理転職の窓口のおかげで、当社の企業文化に合った優秀な人材を効率的に採用できるようになりました。採用コストの削減だけでなく、採用の質も向上し、現場の生産性が大きく改善しました。」
                    </p>
                    <p className="text-right mt-2 text-gray-600">- 人事部長 様</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 事例2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gray-100 p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">B工業株式会社</h3>
                  <p className="text-gray-600">中堅建設会社 / 従業員数：約150名</p>
                </div>
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">課題</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#0052CC] mr-2 flex-shrink-0 mt-0.5" />
                      <span>地方での人材確保の難しさ</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#0052CC] mr-2 flex-shrink-0 mt-0.5" />
                      <span>採用ノウハウの不足</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#0052CC] mr-2 flex-shrink-0 mt-0.5" />
                      <span>応募者の質のばらつき</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">導入効果</h4>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-[#0052CC]">8名</p>
                      <p className="text-sm text-gray-700">半年で採用</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-[#0052CC]">60%</p>
                      <p className="text-sm text-gray-700">採用工数削減</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-[#0052CC]">100%</p>
                      <p className="text-sm text-gray-700">採用目標達成</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    地方での採用に苦戦していましたが、建設・施工管理転職の窓口の全国ネットワークを活用し、UIターン希望者を含む優秀な施工管理技士の採用に成功しました。専任コンサルタントによる採用戦略の立案から、候補者の選定、面接調整まで一貫してサポートいただき、採用業務の効率化にも繋がりました。
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="italic text-gray-700">
                      「地方での採用活動は本当に難しく、長年課題でした。建設・施工管理転職の窓口は建設業界に特化しているため、当社の事業や現場環境を理解した上で最適な人材を紹介してくれました。おかげで採用目標を達成し、事業拡大が可能になりました。」
                    </p>
                    <p className="text-right mt-2 text-gray-600">- 代表取締役 様</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-[#0052CC] hover:bg-[#0052CC]/90 text-white text-lg px-8 py-6">
              <Link href="/contact?type=company">企業様向け無料相談はこちら</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 求職者成功事例セクション */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            求職者様<span className="text-[#FF9900]">成功事例</span>
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            建設・施工管理転職の窓口を通じて理想のキャリアを実現した方々の事例をご紹介します
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* 事例1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gray-200 rounded-full w-16 h-16 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Dさん（38歳・男性）</h3>
                    <p className="text-gray-600">1級建築施工管理技士</p>
                    <div className="flex mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">転職前の状況</h4>
                  <p className="text-gray-700 mb-4">
                    中小建設会社で10年以上勤務。技術力は評価されていたものの、給与面での不満と将来のキャリアパスに不安を感じていた。また、長時間労働が続き、プライベートとの両立が難しい状況だった。
                  </p>
                  <div className="bg-red-50 p-4 rounded-lg mb-4">
                    <h5 className="font-bold text-gray-900 mb-1">悩み・課題</h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>・給与水準の低さ（年収450万円）</li>
                      <li>・慢性的な長時間労働（月平均残業80時間）</li>
                      <li>・キャリアアップの機会不足</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">転職後の変化</h4>
                  <p className="text-gray-700 mb-4">
                    大手ゼネコンのグループ会社へ転職。スキルと経験を評価され、プロジェクトマネージャーとして採用された。ワークライフバランスが改善し、キャリアアップの道筋も明確になった。
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-bold text-gray-900 mb-1">改善点</h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>・年収150万円アップ（年収600万円に）</li>
                      <li>・残業時間の大幅削減（月平均残業30時間）</li>
                      <li>・明確なキャリアパスの提示</li>
                      <li>・資格取得支援制度の活用</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 事例2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gray-200 rounded-full w-16 h-16 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Eさん（32歳・女性）</h3>
                    <p className="text-gray-600">2級電気工事施工管理技士</p>
                    <div className="flex mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">転職前の状況</h4>
                  <p className="text-gray-700 mb-4">
                    電気設備工事会社で施工管理補助として勤務。女性が少ない職場環境で孤立感を感じることが多く、また、スキルアップの機会も限られていた。1級施工管理技士の資格取得を目指していたが、会社からのサポートが得られなかった。
                  </p>
                  <div className="bg-red-50 p-4 rounded-lg mb-4">
                    <h5 className="font-bold text-gray-900 mb-1">悩み・課題</h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>・女性が活躍できる環境の不足</li>
                      <li>・資格取得サポートの欠如</li>
                      <li>・専門性を高める機会の不足</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">転職後の変化</h4>
                  <p className="text-gray-700 mb-4">
                    大手設備会社のダイバーシティ推進部門で電気設備の施工管理職として採用。女性技術者のロールモデルとして活躍しながら、自身のキャリアも着実に構築できる環境を得た。
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-bold text-gray-900 mb-1">改善点</h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>・女性技術者が多く活躍する環境</li>
                      <li>・1級施工管理技士取得のための学習支援</li>
                      <li>・年収80万円アップ</li>
                      <li>・リモートワーク制度の活用で柔軟な働き方が可能に</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 事例3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gray-200 rounded-full w-16 h-16 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Fさん（45歳・男性）</h3>
                    <p className="text-gray-600">1級土木施工管理技士</p>
                    <div className="flex mt-1">
                      {[1, 2, 3, 4, 5].map((star, index) => (
                        <Star key={star} className={`h-4 w-4 ${index < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-400'}`} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">転職前の状況</h4>
                  <p className="text-gray-700 mb-4">
                    地方の建設会社で土木工事の現場監督として20年近く勤務。家庭の事情で都市部への引っ越しを検討していたが、年齢を理由に転職に不安を感じていた。
                  </p>
                  <div className="bg-red-50 p-4 rounded-lg mb-4">
                    <h5 className="font-bold text-gray-900 mb-1">悩み・課題</h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>・地方から都市部への転職の難しさ</li>
                      <li>・40代での転職への不安</li>
                      <li>・専門性を活かせる職場探しの難しさ</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">転職後の変化</h4>
                  <p className="text-gray-700 mb-4">
                    都市部の中堅ゼネコンで経験豊富な土木施工管理者として採用。長年の経験が評価され、若手技術者の指導役も任されるようになった。
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-bold text-gray-900 mb-1">改善点</h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>・都市部での安定した雇用</li>
                      <li>・経験を活かしたポジションの獲得</li>
                      <li>・技術指導者としての新たな役割</li>
                      <li>・福利厚生の充実（住宅手当など）</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 事例4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gray-200 rounded-full w-16 h-16 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Gさん（29歳・男性）</h3>
                    <p className="text-gray-600">2級建築施工管理技士</p>
                    <div className="flex mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">転職前の状況</h4>
                  <p className="text-gray-700 mb-4">
                    小規模な工務店で施工管理を担当。幅広い業務を経験できる一方で、専門性を高める機会が限られていた。また、将来的に独立を考えていたが、そのためのキャリアパスが見えなかった。
                  </p>
                  <div className="bg-red-50 p-4 rounded-lg mb-4">
                    <h5 className="font-bold text-gray-900 mb-1">悩み・課題</h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>・専門性を高める機会の不足</li>
                      <li>・将来の独立に向けたキャリアパスの不明確さ</li>
                      <li>・大規模プロジェクトの経験不足</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">転職後の変化</h4>
                  <p className="text-gray-700 mb-4">
                    特殊建築を手がける専門工事会社へ転職。技術力向上のための研修制度が充実しており、大規模プロジェクトにも参画できるようになった。
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-bold text-gray-900 mb-1">改善点</h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>・専門性の高い技術の習得</li>
                      <li>・大規模プロジェクトへの参画機会</li>
                      <li>・年収50万円アップ</li>
                      <li>・独立支援制度の存在（将来的な協力会社としての独立を支援）</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-[#FF9900] hover:bg-[#FF9900]/90 text-white text-lg px-8 py-6">
              <Link href="/contact?type=jobseeker">求職者様向け無料相談はこちら</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            あなたの成功事例を次は作りませんか？
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            建設・施工管理転職の窓口は、企業様の採用課題解決と、求職者様のキャリアアップを全力でサポートします。
            まずは無料相談から始めてみませんか？
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-[#0052CC] hover:bg-[#0052CC]/90 text-white text-lg px-8 py-6">
              <Link href="/contact?type=company">企業様向け無料相談</Link>
            </Button>
            <Button asChild size="lg" className="bg-[#FF9900] hover:bg-[#FF9900]/90 text-white text-lg px-8 py-6">
              <Link href="/contact?type=jobseeker">求職者様向け無料相談</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
} 