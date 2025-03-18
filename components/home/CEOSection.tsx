"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CEOSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">代表紹介</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            建設業界の血が流れる創業者が語る、施工管理技士と企業の架け橋となる想い
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative md:col-span-4"
          >
            <div className="bg-[#0052CC]/10 absolute -top-4 -left-4 w-full h-full rounded-lg"></div>
            <div className="relative bg-gray-200 rounded-lg overflow-hidden aspect-square">
              {/* 実際の画像ができたら以下のようにImageコンポーネントで表示 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-400 text-lg">代表取締役 田中島隆之介</span>
              </div>
              {/* <Image 
                src="/images/ceo-portrait.jpg" 
                alt="代表取締役 田中島隆之介" 
                fill 
                className="object-cover" 
              /> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-8"
          >
            <h3 className="text-2xl font-bold mb-2">田中島 隆之介</h3>
            <p className="text-[#0052CC] font-medium mb-4">代表取締役</p>

            <div className="text-gray-700 space-y-4">
              <p>
                私、田中島隆之介は早稲田大学社会科学部在学中の19歳から始めたWebマーケティングを武器に、大学3年生の時に成果報酬型WEB広告代理店を創業しました。
              </p>
              <p>
                実は私の実家は47期にわたり建設・産業廃棄物処理業を営んでおり、物心がつく前から建設業界の空気を肌で感じて育ちました。広告代理店を運営するなかで、他業種の成果報酬型人材獲得のための広告運用に携わる機会を得ました。
              </p>
              <p>
                そこで気づいたのは、建設業界における深刻な人材不足の問題と、既存の人材配置の非効率さでした。優秀な施工管理技術者が必ずしも適材適所で活躍できていない現状を目の当たりにし、私はWebマーケティングとAIの技術を駆使することで、この状況を打破できると確信しました。
              </p>
              <p>
                建設業界の血が流れる私だからこそ見える課題と、新しいデジタル技術の可能性を融合させ、業界に新たな風を吹き込むべく当社を創業しました。
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg shadow-sm"
          >
            <h4 className="text-xl font-bold mb-4">求職者の皆様へ</h4>
            <p className="text-gray-700 mb-4">
              建設業界の最前線で活躍する施工管理技術者の皆様、あなたの技術と情熱は業界の未来を支える貴重な財産です。私たちは単なる求人紹介ではなく、あなたのキャリアビジョンと技術力を深く理解した上で、真にその力を必要とする企業とのマッチングを実現します。
            </p>
            <p className="text-gray-700 font-medium">
              あなたの経験とスキルが最大限に輝く場所を、共に見つけましょう。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg shadow-sm"
          >
            <h4 className="text-xl font-bold mb-4">企業様へ</h4>
            <p className="text-gray-700 mb-4">
              建設業界の経営者・人事ご担当者様、優秀な施工管理技術者の採用に苦戦されていませんか？私たちは建設業界を知り尽くした専門家として、貴社の企業文化や現場環境、プロジェクトの特性を深く理解した上で、本当に必要とする人材をご紹介します。
            </p>
            <p className="text-gray-700 font-medium">
              建設業界の持続的な発展のために、私たちはこれからも技術者と企業の架け橋となり、業界全体の価値向上に貢献してまいります。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 