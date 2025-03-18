"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
      {/* 背景オーバーレイ */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      {/* 背景画像 */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('/images/hero-bg3.jpg')", 
          filter: "brightness(0.7)" 
        }}
      ></div>
      
      <div className="container mx-auto px-2 sm:px-4 lg:px-8 py-20 md:py-28 lg:py-36 relative z-20">
        <div className="max-w-4xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            1級施工管理技士に届く<br />
            <span className="text-[#FF9900]">攻め</span>の採用戦略。<br />
            あなたの会社に最適な人材を。
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-xl md:text-2xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            求人サイト依存の待ちの採用から、<br />
            広告のプロによる攻めの採用へ
          </motion.p>
          
          <motion.div 
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild size="lg" className="bg-[#FF9900] hover:bg-[#FF9900]/90 text-white text-lg px-8 py-6">
              <Link href="/contact">無料相談はこちら</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 