import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="pt-20">
      {/* ヘッダー */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">利用規約</h1>
            <p className="text-lg">
              本サービスをご利用いただく前に、以下の利用規約をよくお読みください。
            </p>
          </div>
        </div>
      </section>

      {/* コンテンツ */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">1. はじめに</h2>
                <p className="text-gray-700 mb-3">
                  本利用規約（以下「本規約」といいます）は、田中島建設人材株式会社（以下「当社」といいます）が提供する「建設・施工管理転職の窓口」（以下「本サービス」といいます）の利用条件を定めるものです。ユーザーの皆様（以下「ユーザー」といいます）には、本規約に従って本サービスをご利用いただきます。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">2. 本規約の適用</h2>
                <p className="text-gray-700 mb-3">
                  本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。当社は本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下「個別規定」といいます）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。
                </p>
                <p className="text-gray-700 mb-3">
                  本規約の規定が前条の個別規定の規定と矛盾する場合には、個別規定において特段の定めなき限り、個別規定の規定が優先されるものとします。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">3. 本サービスの内容</h2>
                <p className="text-gray-700 mb-3">
                  本サービスは、建設業界における施工管理技士と企業のマッチングを支援するサービスです。企業様向けには求人掲載、人材紹介、採用コンサルティングなどを、求職者様には転職サポート、キャリアコンサルティングなどを提供します。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">4. 利用登録</h2>
                <p className="text-gray-700 mb-3">
                  本サービスの一部機能は、利用登録が必要となる場合があります。利用登録にあたり、真実かつ正確な情報を提供していただく必要があります。万が一、虚偽の情報を登録された場合、当社はサービスの提供を停止する場合があります。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">5. 禁止事項</h2>
                <p className="text-gray-700 mb-3">
                  ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li>法令または公序良俗に違反する行為</li>
                  <li>犯罪行為に関連する行為</li>
                  <li>当社、本サービスの他のユーザー、または第三者の知的財産権、肖像権、プライバシー、名誉、その他の権利または利益を侵害する行為</li>
                  <li>本サービスに関し、虚偽の情報を当社に提供する行為</li>
                  <li>他のユーザーになりすます行為</li>
                  <li>当社が許可していない本サービス上での宣伝、広告、勧誘、または営業行為</li>
                  <li>当社のサービスの運営を妨害するおそれのある行為</li>
                  <li>反社会的勢力に対する利益供与、その他の協力行為</li>
                  <li>その他、当社が不適切と判断する行為</li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">6. 本サービスの提供の停止等</h2>
                <p className="text-gray-700 mb-3">
                  当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                  <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                  <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                  <li>その他、当社が本サービスの提供が困難と判断した場合</li>
                </ol>
                <p className="text-gray-700 mt-3">
                  当社は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">7. 免責事項</h2>
                <p className="text-gray-700 mb-3">
                  当社は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
                </p>
                <p className="text-gray-700 mb-3">
                  本サービスに関連してユーザーに発生した損害については、当社の故意または重過失による場合を除き、当社は責任を負いません。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">8. 本規約の変更</h2>
                <p className="text-gray-700 mb-3">
                  当社は、必要と判断した場合には、ユーザーに通知することなく本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を継続した場合、ユーザーは変更後の規約に同意したものとみなします。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">9. 準拠法・裁判管轄</h2>
                <p className="text-gray-700 mb-3">
                  本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
                </p>
              </div>

              <div>
                <p className="text-gray-700 text-right">
                  以上
                </p>
                <p className="text-gray-700 text-right">
                  2024年4月1日 制定
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-colors"
              >
                ホームに戻る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 