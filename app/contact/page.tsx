"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useSearchParams } from "next/navigation";
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("company");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  
  const searchParams = useSearchParams();
  
  // URLパラメータからタブを設定
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'seeker') {
      setActiveTab('seeker');
    }
  }, [searchParams]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    setLoading(true);
    setErrorMessage(null);
    setSubmitSuccess(null);

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);
      
      // フォームタイプを追加
      formData.append('formType', activeTab);
      
      // デバッグログ
      console.log('送信するフォームタイプ:', activeTab);
      console.log('フォームデータ:');
      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
      
      // 問い合わせ種別取得
      if (activeTab === 'company') {
        const companyInquiryRadio = form.querySelector('input[name="company-inquiry-type"]:checked') as HTMLInputElement;
        if (companyInquiryRadio) {
          formData.append('inquiryType', companyInquiryRadio.value);
          console.log('企業問い合わせ種別:', companyInquiryRadio.value);
        }
      } else {
        const seekerInquiryRadio = form.querySelector('input[name="seeker-inquiry-type"]:checked') as HTMLInputElement;
        if (seekerInquiryRadio) {
          formData.append('inquiryType', seekerInquiryRadio.value);
          console.log('求職者問い合わせ種別:', seekerInquiryRadio.value);
        }
        
        const employmentStatusRadio = form.querySelector('input[name="employment-status"]:checked') as HTMLInputElement;
        if (employmentStatusRadio) {
          formData.append('employmentStatus', employmentStatusRadio.value);
          console.log('就業状況:', employmentStatusRadio.value);
        }
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'エラーが発生しました');
      }

      console.log('送信成功:', result);
      setSubmitSuccess(result.message || 'お問い合わせを受け付けました。担当者からご連絡いたします。');
      form.reset();
    } catch (error) {
      console.error('送信エラー:', error);
      setErrorMessage(error instanceof Error ? error.message : '送信中にエラーが発生しました。しばらくしてからお試しください。');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="pt-20">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              お問い合わせ
            </h1>
            <p className="text-xl mb-8">
              サービスに関するご質問や資料請求など、お気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </section>

      {/* お問い合わせフォームセクション */}
      <section className="py-20" id="contact-form">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 p-1 bg-gray-100 rounded-lg">
                <TabsTrigger 
                  value="company" 
                  className="text-lg py-3 px-6 rounded-md data-[state=active]:bg-[#0052CC] data-[state=active]:text-white data-[state=inactive]:bg-white"
                >
                  企業様
                </TabsTrigger>
                <TabsTrigger 
                  value="seeker" 
                  className="text-lg py-3 px-6 rounded-md data-[state=active]:bg-[#FF9900] data-[state=active]:text-white data-[state=inactive]:bg-white"
                >
                  求職者様
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="company">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-6 text-center">企業様向けお問い合わせ</h2>
                  
                  {submitSuccess ? (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md mb-6">
                      <h3 className="text-xl font-bold mb-2">お問い合わせを受け付けました</h3>
                      <p>{submitSuccess}</p>
                      <div className="mt-4">
                        <Button 
                          onClick={() => setSubmitSuccess(null)} 
                          className="bg-green-600 hover:bg-green-700 text-white"
                        >
                          新しいお問い合わせ
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {errorMessage && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
                          <p>{errorMessage}</p>
                        </div>
                      )}
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="company-name" className="block mb-2">会社名 <span className="text-red-500">*</span></Label>
                          <Input id="company-name" name="company-name" required className="w-full" />
                        </div>
                        <div>
                          <Label htmlFor="department" className="block mb-2">部署名</Label>
                          <Input id="department" name="department" className="w-full" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name" className="block mb-2">お名前 <span className="text-red-500">*</span></Label>
                          <Input id="name" name="name" required className="w-full" />
                        </div>
                        <div>
                          <Label htmlFor="email" className="block mb-2">メールアドレス <span className="text-red-500">*</span></Label>
                          <Input id="email" name="email" type="email" required className="w-full" />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="phone" className="block mb-2">電話番号 <span className="text-red-500">*</span></Label>
                        <Input id="phone" name="phone" type="tel" required className="w-full" />
                      </div>
                      
                      <div>
                        <Label className="block mb-4">お問い合わせ種別 <span className="text-red-500">*</span></Label>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-2">
                            <input 
                              type="radio" 
                              id="inquiry-service" 
                              name="company-inquiry-type" 
                              value="サービスについて" 
                              className="mt-1"
                              defaultChecked
                              required
                            />
                            <Label htmlFor="inquiry-service" className="font-normal">サービスについて</Label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <input 
                              type="radio" 
                              id="inquiry-price" 
                              name="company-inquiry-type" 
                              value="料金について" 
                              className="mt-1"
                              required
                            />
                            <Label htmlFor="inquiry-price" className="font-normal">料金について</Label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <input 
                              type="radio" 
                              id="inquiry-document" 
                              name="company-inquiry-type" 
                              value="資料請求" 
                              className="mt-1"
                              required
                            />
                            <Label htmlFor="inquiry-document" className="font-normal">資料請求</Label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <input 
                              type="radio" 
                              id="inquiry-consultation" 
                              name="company-inquiry-type" 
                              value="無料相談の申し込み" 
                              className="mt-1"
                              required
                            />
                            <Label htmlFor="inquiry-consultation" className="font-normal">無料相談の申し込み</Label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <input 
                              type="radio" 
                              id="inquiry-other" 
                              name="company-inquiry-type" 
                              value="その他" 
                              className="mt-1"
                              required
                            />
                            <Label htmlFor="inquiry-other" className="font-normal">その他</Label>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="company-message" className="block mb-2">お問い合わせ内容 <span className="text-red-500">*</span></Label>
                        <Textarea 
                          id="company-message" 
                          name="company-message" 
                          rows={5} 
                          required
                          className="w-full"
                          placeholder="お問い合わせの詳細をご記入ください。"
                        />
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <Checkbox id="privacy-policy" name="privacy-policy" required />
                        <Label htmlFor="privacy-policy" className="font-normal">
                          <span>個人情報保護方針に同意します</span>
                        </Label>
                      </div>
                      
                      <div className="text-center">
                        <Button 
                          type="submit" 
                          className="bg-[#0052CC] hover:bg-blue-800 text-white text-lg py-3 px-8"
                          disabled={loading}
                        >
                          {loading ? '送信中...' : 'お問い合わせを送信'}
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="seeker">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-6 text-center">求職者様向けお問い合わせ</h2>
                  
                  {submitSuccess ? (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md mb-6">
                      <h3 className="text-xl font-bold mb-2">お問い合わせを受け付けました</h3>
                      <p>{submitSuccess}</p>
                      <div className="mt-4">
                        <Button 
                          onClick={() => setSubmitSuccess(null)} 
                          className="bg-green-600 hover:bg-green-700 text-white"
                        >
                          新しいお問い合わせ
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {errorMessage && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
                          <p>{errorMessage}</p>
                        </div>
                      )}
                      
                      <div>
                        <Label className="block mb-4">現在の就業状況 <span className="text-red-500">*</span></Label>
                        <div className="space-x-6 flex flex-wrap">
                          <div className="flex items-center space-x-2">
                            <input 
                              type="radio" 
                              id="employed" 
                              name="employment-status" 
                              value="在職中" 
                              className="w-4 h-4"
                              defaultChecked
                              required
                            />
                            <Label htmlFor="employed" className="font-normal">在職中</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input 
                              type="radio" 
                              id="unemployed" 
                              name="employment-status" 
                              value="離職中" 
                              className="w-4 h-4"
                              required
                            />
                            <Label htmlFor="unemployed" className="font-normal">離職中</Label>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <Label className="block mb-4">お問い合わせ種別 <span className="text-red-500">*</span></Label>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-2">
                            <input 
                              type="radio" 
                              id="inquiry-job-consultation" 
                              name="seeker-inquiry-type" 
                              value="転職相談" 
                              className="mt-1"
                              defaultChecked
                              required
                            />
                            <Label htmlFor="inquiry-job-consultation" className="font-normal">転職相談</Label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <input 
                              type="radio" 
                              id="inquiry-job-info" 
                              name="seeker-inquiry-type" 
                              value="求人について" 
                              className="mt-1"
                              required
                            />
                            <Label htmlFor="inquiry-job-info" className="font-normal">求人について</Label>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="seeker-name" className="block mb-2">お名前 <span className="text-red-500">*</span></Label>
                        <Input id="seeker-name" name="seeker-name" required className="w-full" />
                      </div>
                      
                      <div>
                        <Label htmlFor="seeker-email" className="block mb-2">メールアドレス <span className="text-red-500">*</span></Label>
                        <Input id="seeker-email" name="seeker-email" type="email" required className="w-full" />
                      </div>
                      
                      <div>
                        <Label htmlFor="seeker-phone" className="block mb-2">電話番号 <span className="text-red-500">*</span></Label>
                        <Input id="seeker-phone" name="seeker-phone" type="tel" required className="w-full" />
                      </div>
                      
                      <div>
                        <Label className="block mb-4">お持ちの資格（複数選択可）</Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="cert1" name="cert1" />
                            <Label htmlFor="cert1" className="font-normal">1級建築施工管理技士</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="cert2" name="cert2" />
                            <Label htmlFor="cert2" className="font-normal">1級土木施工管理技士</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="cert3" name="cert3" />
                            <Label htmlFor="cert3" className="font-normal">1級電気工事施工管理技士</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="cert4" name="cert4" />
                            <Label htmlFor="cert4" className="font-normal">2級建築施工管理技士</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="cert5" name="cert5" />
                            <Label htmlFor="cert5" className="font-normal">2級土木施工管理技士</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="cert6" name="cert6" />
                            <Label htmlFor="cert6" className="font-normal">2級電気工事施工管理技士</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="cert7" name="cert7" />
                            <Label htmlFor="cert7" className="font-normal">一級建築士</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="cert8" name="cert8" />
                            <Label htmlFor="cert8" className="font-normal">二級建築士</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="cert9" name="cert9" />
                            <Label htmlFor="cert9" className="font-normal">1級土木技術者資格</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="cert10" name="cert10" />
                            <Label htmlFor="cert10" className="font-normal">建築設備士</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="cert11" name="cert11" />
                            <Label htmlFor="cert11" className="font-normal">その他</Label>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <Label className="block mb-2">お問い合わせ内容 <span className="text-red-500">*</span></Label>
                        <Textarea id="seeker-message" name="seeker-message" required className="w-full min-h-[150px]" placeholder="現在の状況や希望条件、ご質問などをご記入ください" />
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <Checkbox id="seeker-privacy" required />
                        <Label htmlFor="seeker-privacy" className="text-sm">
                          <span className="text-red-500">*</span> 
                          <a href="/privacy-policy" className="text-blue-600 hover:underline">プライバシーポリシー</a>
                          に同意します
                        </Label>
                      </div>
                      
                      <div className="text-center">
                        <Button type="submit" className="bg-[#FF9900] hover:bg-[#FF9900]/90 text-white text-lg px-8 py-6" disabled={loading}>
                          {loading ? '送信中...' : '送信する'}
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* お問い合わせ方法セクション */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            その他の<span className="text-[#0052CC]">お問い合わせ方法</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0052CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">お電話</h3>
              <p className="text-gray-600 mb-4">平日 9:00〜18:00</p>
              <p className="text-xl font-bold text-[#0052CC]">03-6265-9181</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0052CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">オンライン相談</h3>
              <p className="text-gray-600 mb-4">Zoom/Teams対応</p>
              <p className="text-lg text-gray-700">ご希望の日時をお知らせください</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 