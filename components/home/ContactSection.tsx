"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Building, User, Phone, MessageSquare, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">お問い合わせ</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            お気軽にお問い合わせください。専門スタッフが丁寧にご対応いたします。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-[#0052CC]/20 hover:border-[#0052CC] transition-colors">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <Building className="h-8 w-8 text-[#0052CC] mr-4" />
                  <h3 className="text-2xl font-bold">企業様</h3>
                </div>
                <p className="text-gray-700 mb-8 flex-grow">
                  採用に関するご相談、サービス内容の詳細、料金体系など、
                  企業様向けのお問い合わせはこちらからお願いいたします。
                  専任のコンサルタントが貴社の採用課題に合わせたご提案をいたします。
                </p>
                <Button asChild size="lg" className="w-full bg-[#0052CC] hover:bg-[#0052CC]/90">
                  <Link href="/contact?type=company">
                    企業様向けお問い合わせ
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-[#FF9900]/20 hover:border-[#FF9900] transition-colors">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <User className="h-8 w-8 text-[#FF9900] mr-4" />
                  <h3 className="text-2xl font-bold">求職者様</h3>
                </div>
                <p className="text-gray-700 mb-8 flex-grow">
                  転職相談、求人情報のお問い合わせ、キャリアカウンセリングのご予約など、
                  求職者様向けのお問い合わせはこちらからお願いいたします。
                  経験豊富なキャリアアドバイザーがサポートいたします。
                </p>
                <Button asChild size="lg" className="w-full bg-[#FF9900] hover:bg-[#FF9900]/90">
                  <Link href="/contact?type=jobseeker">
                    求職者様向けお問い合わせ
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg text-center"
          >
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Phone className="h-8 w-8 text-[#0052CC]" />
            </div>
            <h3 className="text-xl font-bold mb-2">お電話</h3>
            <p className="text-gray-700 mb-4">施工管理技士専用相談窓口</p>
            <a href="tel:0362659181" className="text-2xl font-bold text-[#0052CC] hover:underline">
              03-6265-9181
            </a>
            <p className="text-gray-600 mt-2 text-sm">受付時間: 平日 9:00〜18:00</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg text-center"
          >
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
              <MessageSquare className="h-8 w-8 text-[#0052CC]" />
            </div>
            <h3 className="text-xl font-bold mb-2">お問い合わせ</h3>
            <p className="text-gray-700 mb-4">Webからのお問い合わせはこちら</p>
            <Button asChild className="font-bold text-white bg-[#0052CC] hover:bg-[#0052CC]/90">
              <Link href="/contact">
                問い合わせフォームへ
              </Link>
            </Button>
            <p className="text-gray-600 mt-2 text-sm">24時間受付中</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg text-center"
          >
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
              <MapPin className="h-8 w-8 text-[#0052CC]" />
            </div>
            <h3 className="text-xl font-bold mb-2">所在地</h3>
            <p className="text-gray-700 mb-4">オフィス所在地</p>
            <p className="font-medium text-gray-900">
              〒169-0051<br />
              東京都新宿区西早稲田一丁目六番地3<br />
              フェリオ西早稲田 2階
            </p>
            <p className="text-gray-600 mt-2 text-sm">最寄駅: 東京メトロ東西線「早稲田駅」より徒歩5分</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-[#0052CC] text-white rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">まずは無料相談から</h3>
          <p className="max-w-2xl mx-auto mb-8">
            採用でお悩みの企業様も、キャリアアップをお考えの施工管理技士の方も、
            まずはお気軽にご相談ください。専門スタッフが丁寧にご対応いたします。
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="bg-white text-[#0052CC] hover:bg-white/90">
              <Link href="/contact?type=company">
                企業様向けお問い合わせ
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-[#FF9900] hover:bg-[#FF9900]/90">
              <Link href="/contact?type=jobseeker">
                求職者様向けお問い合わせ
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 