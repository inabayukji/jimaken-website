import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-20">
      {/* ヘッダー */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">プライバシーポリシー</h1>
            <p className="text-lg">
              お客様の個人情報の取り扱いについて、以下のとおり定めています。
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
                  田中島建設人材株式会社（以下「当社」といいます）は、お客様の個人情報を尊重し、適切に保護することが社会的責務であると考えております。当社は、以下のプライバシーポリシー（以下「本ポリシー」といいます）に従って、お客様の個人情報を取り扱います。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">2. 個人情報の定義</h2>
                <p className="text-gray-700 mb-3">
                  本ポリシーにおいて「個人情報」とは、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含みます）を指します。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">3. 個人情報の収集方法</h2>
                <p className="text-gray-700 mb-3">
                  当社は、サービス提供のために必要な範囲内で、お客様から以下の情報を収集することがあります。
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>氏名</li>
                  <li>生年月日</li>
                  <li>住所</li>
                  <li>電話番号</li>
                  <li>メールアドレス</li>
                  <li>職歴や学歴などの経歴情報</li>
                  <li>保有資格情報</li>
                  <li>その他サービス提供に必要な情報</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">4. 個人情報の利用目的</h2>
                <p className="text-gray-700 mb-3">
                  当社は、お客様から収集した個人情報を、以下の目的で利用いたします。
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>当社サービス「建設・施工管理転職の窓口」の提供・運営のため</li>
                  <li>求職者と企業のマッチング支援のため</li>
                  <li>お問い合わせやご相談への対応のため</li>
                  <li>サービスの改善や新サービスの開発のため</li>
                  <li>キャンペーンや新サービスなどの情報提供のため</li>
                  <li>アンケート調査実施のため</li>
                  <li>法令や契約上の義務の履行のため</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  当社は、お客様から同意を得た場合、または法令で認められた場合を除き、収集した個人情報を上記の利用目的の範囲を超えて利用することはありません。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">5. 個人情報の第三者提供</h2>
                <p className="text-gray-700 mb-3">
                  当社は、以下のいずれかに該当する場合を除き、お客様の個人情報を第三者に提供することはありません。
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>お客様の同意がある場合</li>
                  <li>サービス提供に必要な範囲内で、求人企業にお客様の情報を提供する場合</li>
                  <li>法令に基づく場合</li>
                  <li>人の生命、身体または財産の保護のために必要がある場合であって、お客様の同意を得ることが困難である場合</li>
                  <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、お客様の同意を得ることが困難である場合</li>
                  <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、お客様の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">6. 個人情報の安全管理</h2>
                <p className="text-gray-700 mb-3">
                  当社は、お客様の個人情報の漏洩、滅失、毀損等を防止するため、適切なセキュリティ対策を講じます。また、個人情報を取り扱う従業員に対して、個人情報保護に関する教育・啓発活動を実施し、個人情報の適切な取り扱いを徹底します。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">7. 個人情報の開示・訂正・削除</h2>
                <p className="text-gray-700 mb-3">
                  お客様は、当社に対して、ご自身の個人情報の開示、訂正、追加、削除、利用停止または消去を請求することができます。その場合は、当社所定の方法によりご本人であることを確認した上で、合理的な期間内に対応いたします。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Cookieの使用について</h2>
                <p className="text-gray-700 mb-3">
                  当社のウェブサイトでは、サービスの利便性向上、アクセス状況の把握、広告配信などの目的でCookie（クッキー）を使用することがあります。Cookieの詳細については、「Cookieポリシー」をご確認ください。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">9. プライバシーポリシーの変更</h2>
                <p className="text-gray-700 mb-3">
                  当社は、法令の変更や当社の事業内容の変化などに応じて、本ポリシーを変更することがあります。変更後のプライバシーポリシーは、当社ウェブサイト上に掲載した時点から効力を生じるものとします。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">10. お問い合わせ窓口</h2>
                <p className="text-gray-700 mb-3">
                  本ポリシーに関するお問い合わせは、以下の窓口までご連絡ください。
                </p>
                <div className="bg-gray-100 p-4 rounded-lg text-gray-700">
                  <p>田中島建設人材株式会社</p>
                  <p>住所：〒169-0051 東京都新宿区西早稲田一丁目六番地3 フェリオ西早稲田 2階</p>
                  <p>電話番号：03-6265-9181</p>
                  <p>受付時間：平日 9:00〜18:00（土日祝休）</p>
                </div>
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