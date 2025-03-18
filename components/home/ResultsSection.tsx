"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, BarChart, MapPin, CheckCircle, Star, RefreshCw } from "lucide-react";
import Image from "next/image";

export default function ResultsSection() {
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

  const stats = [
    { 
      icon: <CheckCircle className="h-8 w-8 text-[#0052CC]" />, 
      value: "90%", 
      label: "採用成功率",
      description: "業界平均の2倍以上の採用成功率"
    },
    { 
      icon: <Star className="h-8 w-8 text-[#0052CC]" />, 
      value: "4.8/5", 
      label: "顧客満足度",
      description: "企業様からの高い評価をいただいています"
    },
    { 
      icon: <RefreshCw className="h-8 w-8 text-[#0052CC]" />, 
      value: "85%", 
      label: "リピート率",
      description: "85%の企業様が複数回のご利用"
    },
  ];

  const industryData = [
    { industry: "建築", percentage: 40 },
    { industry: "土木", percentage: 30 },
    { industry: "電気", percentage: 15 },
    { industry: "管工事", percentage: 10 },
    { industry: "その他", percentage: 5 },
  ];

  const regionData = [
    { region: "関東", value: 45 },
    { region: "関西", value: 25 },
    { region: "中部", value: 15 },
    { region: "九州", value: 8 },
    { region: "東北", value: 5 },
    { region: "北海道", value: 2 },
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
            実績
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            custom={1}
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
          >
            数多くの企業様と施工管理技士の最適なマッチングを実現してきました
          </motion.p>
        </motion.div>

        {/* 主要実績数値 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="h-full shadow-sm">
                <CardContent className="p-6 flex flex-col items-center text-center bg-gray-50 rounded-lg h-full">
                  <div className="bg-blue-50 rounded-full p-4 mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-[#0052CC] mb-2">{stat.label}</div>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 業種別採用実績と地域別実績 */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="h-full flex flex-col"
          >
            <h3 className="text-2xl font-bold mb-6">業種別採用実績</h3>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex-grow">
              <div className="space-y-4">
                {industryData.map((item) => (
                  <div key={item.industry}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{item.industry}</span>
                      <span className="text-gray-600">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-[#0052CC] h-2.5 rounded-full" 
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 地域別実績マップ */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="h-full flex flex-col"
          >
            <h3 className="text-2xl font-bold mb-6">地域別実績</h3>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex-grow">
              <div className="flex flex-col justify-center h-full">
                <div className="grid grid-cols-2 gap-4">
                  {regionData.map((item) => (
                    <div key={item.region} className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <div className="text-lg font-medium mb-2">{item.region}</div>
                      <div className="text-3xl font-bold text-[#0052CC]">{item.value}%</div>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 text-sm mt-4 text-center">
                  関東地方を中心に、全国の施工管理技士とのマッチングを実現しています。
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 採用成功率と顧客満足度 */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="h-full flex flex-col"
          >
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex-grow">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <BarChart className="h-6 w-6 text-[#0052CC] mr-2" />
                採用成功率比較
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">当社</span>
                    <span className="text-gray-600">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-[#0052CC] h-4 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">業界平均</span>
                    <span className="text-gray-600">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-gray-400 h-4 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-4">
                  当社の採用成功率は業界平均の2倍以上。
                  戦略的な広告配信とAIマッチングにより、
                  高い成功率を実現しています。
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-full flex flex-col"
          >
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex-grow">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Star className="h-6 w-6 text-[#0052CC] mr-2" />
                顧客満足度
              </h3>
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`h-8 w-8 ${star <= 4 ? 'text-[#FF9900] fill-[#FF9900]' : 'text-[#FF9900]'}`} 
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="flex items-center">
                      <span className="font-medium mr-2">5</span>
                      <Star className="h-4 w-4 text-[#FF9900] fill-[#FF9900]" />
                    </span>
                    <span className="text-gray-600">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#FF9900] h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="flex items-center">
                      <span className="font-medium mr-2">4</span>
                      <Star className="h-4 w-4 text-[#FF9900] fill-[#FF9900]" />
                    </span>
                    <span className="text-gray-600">15%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#FF9900] h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="flex items-center">
                      <span className="font-medium mr-2">3</span>
                      <Star className="h-4 w-4 text-[#FF9900] fill-[#FF9900]" />
                    </span>
                    <span className="text-gray-600">5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#FF9900] h-2 rounded-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                88%のお客様から4つ星以上の評価をいただいています。
                高品質なサービスと丁寧なサポートを心がけています。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 