import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
   <motion.div
  className="bg-white p-6 rounded-xl shadow-md"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
<h2 className="text-2xl font-bold text-indigo-600 mb-4 border-b-2 border-indigo-300 inline-block">
  自己紹介
</h2>

      <p className="text-gray-800 leading-relaxed">
        情報セキュリティ学科の学生で、web開発に挑戦したりlinuxを触ったりして楽しんでいます。
      </p>
    </motion.div>
  );
}

export default About;

