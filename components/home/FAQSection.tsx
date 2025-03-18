"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Building, User } from "lucide-react";

export default function FAQSection() {
  const companyFAQs = [
    {
      question: "御社の人材紹介サービスと一般的な求人サイトの違いは何ですか？",
      answer: "「待ちの採用」ではなく「攻めの採用」を行う点が最大の違いです。当社は、求人掲載後に応募を待つのではなく、インハウス広告チームが1級施工管理技士に直接リーチする広告を展開し、能動的に最適な人材にアプローチします。"
    },
    {
      question: "どのような施工管理技士を紹介してもらえますか？",
      answer: "主に1級施工管理技士（建築・土木・電気・管工事等）の有資格者を中心にご紹介しています。実務経験や専門分野に応じたマッチングを行います。"
    },
    {
      question: "事前に費用は発生しますか？",
      answer: "いいえ、完全成果報酬型のため採用決定まで一切費用は発生しません。採用が成立した場合にのみ、年収の一定割合をご請求いたします。"
    },
    {
      question: "採用までどのくらいの期間がかかりますか？",
      answer: "平均的には求人依頼から約4週間で候補者のご紹介が可能です。業界平均と比較して約40％短縮されています。"
    },
    {
      question: "紹介された人材が不適合だった場合の保証はありますか？",
      answer: "入社後6ヶ月以内に退職された場合、無料で再紹介または手数料の全額返金など、手厚い定着保証制度をご用意しています。ミスマッチのリスクを最小限に抑え、安心してご利用いただけます。"
    },
  ];

  const jobSeekerFAQs = [
    {
      question: "登録は無料ですか？",
      answer: "はい、完全無料でご利用いただけます。紹介手数料は採用企業様がお支払いいただくため、求職者様の負担はありません。"
    },
    {
      question: "1級施工管理技士の資格がなくても登録できますか？",
      answer: "2級施工管理技士や実務経験者も登録可能ですが、当社は特に1級資格保有者向けの求人に強みを持っています。"
    },
    {
      question: "現在就業中ですが、転職活動の秘密は守られますか？",
      answer: "完全に守秘義務を遵守します。ご希望の企業以外への情報開示は一切行いません。"
    },
    {
      question: "地方在住ですが、サービスは利用できますか？",
      answer: "全国対応しております。リモート面談も可能です。UIターン転職のサポート実績も豊富です。"
    },
    {
      question: "年齢制限はありますか？",
      answer: "年齢による制限は設けておりません。ただし、企業によって募集条件が異なりますので、個別にご相談ください。"
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">よくある質問</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            サービスについてよくいただく質問をまとめました
          </p>
        </motion.div>

        <Tabs defaultValue="companies" className="w-full max-w-4xl mx-auto">
          <TabsList className="w-full grid grid-cols-2 mb-6 p-2 bg-gray-100 rounded-lg gap-2">
            <TabsTrigger 
              value="companies" 
              className="w-full text-xs xs:text-sm sm:text-base px-2 sm:px-4 py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md"
            >
              <div className="flex items-center justify-center w-full">
                <Building className="h-4 w-4 mr-1 sm:mr-2 flex-shrink-0" />
                <span>企業様向けFAQ</span>
              </div>
            </TabsTrigger>
            <TabsTrigger 
              value="jobseekers" 
              className="w-full text-xs xs:text-sm sm:text-base px-2 sm:px-4 py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md"
            >
              <div className="flex items-center justify-center w-full">
                <User className="h-4 w-4 mr-1 sm:mr-2 flex-shrink-0" />
                <span>求職者様向けFAQ</span>
              </div>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="companies">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <Accordion type="single" collapsible className="w-full">
                {companyFAQs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <AccordionItem value={`company-item-${index}`} className="border-b border-gray-200">
                      <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </TabsContent>
          
          <TabsContent value="jobseekers">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <Accordion type="single" collapsible className="w-full">
                {jobSeekerFAQs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <AccordionItem value={`jobseeker-item-${index}`} className="border-b border-gray-200">
                      <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
} 