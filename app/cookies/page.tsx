import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <main className="pt-20">
      {/* ヘッダー */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Cookie ポリシー</h1>
            <p className="text-lg">
              当サイトでのCookieの使用についてご説明します。
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
                <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Cookieとは</h2>
                <p className="text-gray-700 mb-3">
                  Cookie（クッキー）とは、ウェブサイトがお客様のブラウザに保存する小さなテキストファイルです。Cookieを使用することで、ウェブサイトはお客様のブラウザを識別し、お客様の設定や好みを記憶することができます。これにより、次回のアクセス時にサイトの使い勝手を向上させることが可能となります。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">2. 当サイトが使用するCookieの種類</h2>
                <p className="text-gray-700 mb-3">
                  当サイト「建設・施工管理転職の窓口」では、以下の種類のCookieを使用しています。
                </p>
                <h3 className="font-bold text-gray-800 mt-4 mb-2">必須Cookie</h3>
                <p className="text-gray-700 mb-3">
                  これらのCookieは、当サイトの基本的な機能やセキュリティ機能を提供するために必要なものです。これらのCookieを無効にすると、サイトの一部が正常に動作しなくなる可能性があります。
                </p>
                <h3 className="font-bold text-gray-800 mt-4 mb-2">パフォーマンスCookie</h3>
                <p className="text-gray-700 mb-3">
                  これらのCookieは、お客様が当サイトをどのように利用しているかに関する情報を収集し、サイトの動作を監視・改善するために使用されます。例えば、最もよく閲覧されているページや、エラーメッセージの発生状況などを把握することができます。
                </p>
                <h3 className="font-bold text-gray-800 mt-4 mb-2">機能Cookie</h3>
                <p className="text-gray-700 mb-3">
                  これらのCookieにより、当サイトはお客様の設定や選択を記憶し、より個人化されたエクスペリエンスを提供することができます。例えば、ログイン情報や言語設定などを保存します。
                </p>
                <h3 className="font-bold text-gray-800 mt-4 mb-2">ターゲティングCookie</h3>
                <p className="text-gray-700 mb-3">
                  これらのCookieは、お客様の興味や行動に基づいて、関連性の高い広告を表示するために使用されます。また、広告キャンペーンの効果を測定する目的でも使用されます。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">3. 第三者のCookie</h2>
                <p className="text-gray-700 mb-3">
                  当サイトでは、アクセス解析やマーケティング目的で、以下のような第三者のCookieを使用することがあります。
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Google Analytics（アクセス解析）</li>
                  <li>Google広告（広告配信）</li>
                  <li>Facebook Pixel（広告効果測定）</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  これらのサービスが収集した情報は、各サービスのプライバシーポリシーに従って取り扱われます。詳細については、各サービスのプライバシーポリシーをご確認ください。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Cookieの管理</h2>
                <p className="text-gray-700 mb-3">
                  ほとんどのウェブブラウザでは、Cookieの受け入れを管理することができます。ブラウザの設定でCookieを拒否したり、Cookieが送信される前に通知を受け取るように設定することが可能です。ただし、必須Cookieを無効にすると、当サイトの一部の機能が正常に動作しなくなる可能性がありますのでご注意ください。
                </p>
                <p className="text-gray-700 mb-3">
                  Cookieの管理方法は、お使いのブラウザによって異なります。以下は主要なブラウザのCookie設定に関するリンクです。
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/ja/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mozilla Firefox</a></li>
                  <li><a href="https://support.microsoft.com/ja-jp/microsoft-edge/microsoft-edge-での-cookie-の削除-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Microsoft Edge</a></li>
                  <li><a href="https://support.apple.com/ja-jp/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Safari</a></li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Cookieポリシーの変更</h2>
                <p className="text-gray-700 mb-3">
                  当社は、法令の変更や当社の事業内容の変化などに応じて、本Cookieポリシーを変更することがあります。変更後のCookieポリシーは、当社ウェブサイト上に掲載した時点から効力を生じるものとします。重要な変更がある場合は、サイト上で通知します。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">6. お問い合わせ</h2>
                <p className="text-gray-700 mb-3">
                  本Cookieポリシーに関するお問い合わせは、以下の窓口までご連絡ください。
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