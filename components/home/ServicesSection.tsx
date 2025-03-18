"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Building, User, Award, FileText, MessageSquare, DollarSign, Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ServicesSection() {
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

  const companyServices = [
    {
      icon: <DollarSign className="h-8 w-8 text-[#0052CC]" />,
      title: "完全成果報酬型料金体系",
      description: "採用決定まで一切料金は発生しません。採用成立後のみ成功報酬として年収の一定割合をいただきます。",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-[#0052CC]" />,
      title: "定着保証",
      description: "入社後6ヶ月の定着保証あり。保証期間内に退職した場合は返金いたします。",
    }
  ];

  const jobSeekerServices = [
    {
      icon: <MessageSquare className="h-8 w-8 text-[#0052CC]" />,
      title: "無料キャリアカウンセリング",
      description: "経験豊富なキャリアアドバイザーが、あなたのスキルや希望に合わせた最適なキャリアプランをご提案します。",
    },
    {
      icon: <FileText className="h-8 w-8 text-[#0052CC]" />,
      title: "レジュメ/職務経歴書の添削",
      description: "プロのアドバイザーがあなたの強みを最大限にアピールできる職務経歴書の作成をサポートします。",
    },
    {
      icon: <User className="h-8 w-8 text-[#0052CC]" />,
      title: "面接対策サポート",
      description: "面接での自己アピールのポイントや、よくある質問への回答例など、実践的なアドバイスを提供します。",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-[#0052CC]" />,
      title: "給与交渉代行",
      description: "あなたの市場価値を最大限に引き出すため、企業との給与交渉を代行します。",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-[#0052CC]" />,
      title: "転職後のキャリアサポート",
      description: "転職後も安心してキャリアを築けるよう、定期的なフォローアップを行います。",
    },
  ];

  const servicePlans = [
    {
      name: "スタンダードプラン",
      features: [
        "完全成果報酬型",
        "採用決定まで0円",
        "6ヶ月定着保証",
        "基本的な候補者スクリーニング",
        "面接調整サポート",
      ],
    },
    {
      name: "プレミアムプラン",
      features: [
        "完全成果報酬型",
        "採用決定まで0円",
        "12ヶ月定着保証",
        "詳細な候補者スクリーニング",
        "面接調整サポート",
        "入社後フォローアップ",
        "採用戦略コンサルティング",
      ],
      recommended: true,
    },
    {
      name: "カスタムプラン",
      features: [
        "完全成果報酬型",
        "採用決定まで0円",
        "カスタム定着保証",
        "オーダーメイドのスクリーニング",
        "採用プロセス全体のサポート",
        "長期的な採用戦略立案",
        "社内研修プログラム提案",
      ],
    },
  ];

  const serviceFlow = [
    { step: "01", title: "初回ヒアリング", description: "貴社の求める人材像や条件をヒアリング" },
    { step: "02", title: "求める人材像の確立", description: "最適な人材像を明確化" },
    { step: "03", title: "広告戦略立案", description: "ターゲットに届く広告戦略を立案" },
    { step: "04", title: "広告配信", description: "最適なチャネルで広告を配信" },
    { step: "05", title: "応募者スクリーニング", description: "厳選された候補者のみをご紹介" },
    { step: "06", title: "面接調整", description: "候補者との面接をスムーズに調整" },
    { step: "07", title: "採用決定", description: "最適な人材の採用が決定" },
    { step: "08", title: "アフターフォロー", description: "入社後も定期的にフォローアップ" },
  ];

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
            サービス内容
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            custom={1}
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
          >
            企業様と求職者様、双方にとって最適なサービスをご提供します
          </motion.p>
        </motion.div>

        <Tabs defaultValue="company" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 shadow-sm rounded-lg overflow-hidden h-auto">
            <TabsTrigger 
              value="company" 
              className={cn(
                "text-base sm:text-lg md:text-xl py-5 px-4 sm:px-6 rounded-l-lg focus-visible:ring-0 transition-all flex items-center justify-center min-h-[60px]",
                "data-[state=active]:shadow-none data-[state=active]:bg-[#0052CC] data-[state=active]:text-white"
              )}
            >
              <Building className="h-5 w-5 mr-2 flex-shrink-0" />
              <span className="whitespace-normal">企業向けサービス</span>
            </TabsTrigger>
            <TabsTrigger 
              value="jobseeker" 
              className={cn(
                "text-base sm:text-lg md:text-xl py-5 px-4 sm:px-6 rounded-r-lg focus-visible:ring-0 transition-all flex items-center justify-center min-h-[60px]",
                "data-[state=active]:shadow-none data-[state=active]:bg-[#0052CC] data-[state=active]:text-white"
              )}
            >
              <User className="h-5 w-5 mr-2 flex-shrink-0" />
              <span className="whitespace-normal">求職者向けサービス</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="company" className="mt-6">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {companyServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-center mb-8">サービス提供の流れ</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {serviceFlow.slice(0, 4).map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg shadow p-6"
                  >
                    <div className="text-[#0052CC] text-2xl font-bold mb-2">{item.step}</div>
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {serviceFlow.slice(4).map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (index + 4) * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg shadow p-6"
                  >
                    <div className="text-[#0052CC] text-2xl font-bold mb-2">{item.step}</div>
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="jobseeker" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobSeekerServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center"
            >
              <Award className="h-12 w-12 text-[#FF9900] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">すべてのサービスが<span className="text-[#FF9900]">完全無料</span>でご利用いただけます</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                当社のサービスは企業様からいただく成功報酬で運営しているため、
                求職者様は一切の費用なくすべてのサービスをご利用いただけます。
                あなたの市場価値を最大限に高め、理想のキャリアを実現するためのサポートを提供します。
              </p>
              <Button asChild size="lg" className="bg-[#0052CC] hover:bg-[#0052CC]/90">
                <Link href="/contact">無料相談に申し込む</Link>
              </Button>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
} 