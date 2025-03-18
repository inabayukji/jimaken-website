"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, LineChart, Clock, DollarSign, CheckSquare } from "lucide-react";

export default function AIMatchingSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  const benefits = [
    { icon: <Clock className="h-6 w-6 text-[#0052CC]" />, title: "時間短縮", description: "採用プロセスを最大60%短縮" },
    { icon: <DollarSign className="h-6 w-6 text-[#0052CC]" />, title: "コスト削減", description: "採用コストを平均40%削減" },
    { icon: <CheckSquare className="h-6 w-6 text-[#0052CC]" />, title: "ミスマッチ防止", description: "6ヶ月定着率88%を実現" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeIn}
            custom={0}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            最適なマッチング
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            custom={1}
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
          >
            独自のマッチングシステムで、企業と施工管理技士の最適な出会いを実現します
          </motion.p>
        </motion.div>

        {/* マッチングシステムの概要 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">マッチングシステムの概要</h3>
            <p className="text-gray-700 mb-6">
              当社独自のマッチングシステムは、従来の人材紹介では見落とされがちな「相性」や「潜在能力」まで分析。
              単なるスキルや経験だけでなく、企業文化との適合性や長期的な成長可能性も考慮した、
              多次元的なマッチングを実現します。
            </p>
            <p className="text-gray-700">
              AIを活用した学習システムが、採用成功の可能性を高め、
              ミスマッチによる早期退職リスクを大幅に低減します。
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-80 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg overflow-hidden"
          >
            {/* バックアップ表示用のアイコン */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Users className="h-32 w-32 text-[#0052CC]/30" />
            </div>
            <Image 
              src="/images/matching.jpg" 
              alt="マッチングシステム" 
              fill 
              className="object-cover" 
              priority
              onError={(e) => {
                // 画像の読み込みに失敗した場合はアイコンを表示
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </motion.div>
        </div>

        {/* マッチング要素 */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">マッチング要素</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "技術スキル", "資格レベル", "実務経験", "プロジェクト経験", 
              "地域適性", "企業文化適合性", "キャリア志向", "コミュニケーションスタイル", 
              "チームワーク適性", "リーダーシップ"
            ].map((element, index) => (
              <motion.div
                key={element}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow p-4 text-center"
              >
                <span className="text-[#0052CC] font-medium">{element}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* メリット */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">マッチングのメリット</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow p-6"
              >
                <div className="flex items-start">
                  <div className="bg-blue-50 rounded-full p-3 mr-4">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 