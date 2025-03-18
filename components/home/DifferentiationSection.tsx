"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle, TrendingUp, Users, Target, BarChart } from "lucide-react";

export default function DifferentiationSection() {
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

  return (
    <section className="py-20 bg-gray-50">
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
            差別化ポイント
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            custom={1}
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
          >
            従来の人材紹介サービスとは一線を画す、私たちの「攻め」の採用戦略
          </motion.p>
        </motion.div>

        {/* 比較表 */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-red-200 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <XCircle className="h-8 w-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">従来の人材紹介</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">求人サイトに掲載して応募を待つ</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">多数の不適格応募者の対応に時間を浪費</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">採用コストが高く、効率が悪い</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">ミスマッチによる早期退職リスクが高い</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">弊社の人材紹介</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">ターゲット分析と戦略的広告配信</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">1級有資格者に直接リーチする広告展開</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">質の高い応募者のみを厳選してご紹介</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">AIマッチングによる高精度なマッチング</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* インフォグラフィック */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">「待ちの採用」と「攻めの採用」の違い</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-red-600">待ちの採用</h4>
              <div className="relative h-80 bg-gray-100 rounded-lg p-4">
                <div className="absolute top-0 left-0 right-0 h-16 bg-red-100 rounded-t-lg flex items-center justify-center">
                  <span className="font-bold text-red-600">多数の不特定求職者</span>
                </div>
                <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-red-100"></div>
                
                <div className="absolute top-24 left-0 right-0 h-16 bg-red-200 flex items-center justify-center">
                  <span className="font-bold text-red-600">求人サイトに掲載</span>
                </div>
                <div className="absolute top-40 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-red-200"></div>
                
                <div className="absolute top-48 left-0 right-0 h-16 bg-red-300 flex items-center justify-center">
                  <span className="font-bold text-red-600">応募を待つ</span>
                </div>
                <div className="absolute top-64 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-red-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-red-400 rounded-b-lg flex items-center justify-center">
                  <span className="font-bold text-white">少数の適格応募者</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-green-600">攻めの採用</h4>
              <div className="relative h-80 bg-gray-100 rounded-lg p-4">
                <div className="absolute top-0 left-0 right-0 h-16 bg-green-100 rounded-t-lg flex items-center justify-center">
                  <span className="font-bold text-green-600">ターゲット分析</span>
                </div>
                <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-green-100"></div>
                
                <div className="absolute top-24 left-0 right-0 h-16 bg-green-200 flex items-center justify-center">
                  <span className="font-bold text-green-600">戦略的広告配信</span>
                </div>
                <div className="absolute top-40 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-green-200"></div>
                
                <div className="absolute top-48 left-0 right-0 h-16 bg-green-300 flex items-center justify-center">
                  <span className="font-bold text-green-600">1級有資格者にリーチ</span>
                </div>
                <div className="absolute top-64 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-green-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-green-500 rounded-b-lg flex items-center justify-center">
                  <span className="font-bold text-white">質の高い応募者獲得</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 数値実績 */}
        <div className="bg-[#0052CC] text-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8">実績数値</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10" />
              </div>
              <div className="text-4xl font-bold mb-2">80%</div>
              <p className="text-blue-100">求人応募者の80%が1級施工管理技士</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Target className="h-10 w-10" />
              </div>
              <div className="text-4xl font-bold mb-2">90%</div>
              <p className="text-blue-100">採用成功率</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-10 w-10" />
              </div>
              <div className="text-4xl font-bold mb-2">40%</div>
              <p className="text-blue-100">採用コスト削減率</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <BarChart className="h-10 w-10" />
              </div>
              <div className="text-4xl font-bold mb-2">88%</div>
              <p className="text-blue-100">6ヶ月定着率</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 