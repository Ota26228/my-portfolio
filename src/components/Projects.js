import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <motion.div
  className="bg-white p-6 rounded-xl shadow-md"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
      <h2 className="text-2xl font-bold text-indigo-600 mb-2">制作物</h2>

      <div className="mb-4">
        <h3 className="text-xl font-semibold">guitkara</h3>
        <p className="text-gray-800 mb-1">Flaskで作ったギターカラオケアプリ。得点処理やスタイルにこだわりました。</p>
        <a href="https://github.com/Ota26228/guitkara" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
          GitHubで見る
        </a>
      </div>
    </motion.div>
  );
}

export default Projects;

