"use client";

import { motion } from "framer-motion";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">お客様の声</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            実際にサービスをご利用いただいたお客様からの声をご紹介します
          </p>
          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
            <p className="text-lg text-gray-600">
              顧客の声は現在準備中です。近日公開予定ですので、しばらくお待ちください。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 