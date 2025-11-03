import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-8 px-4 backdrop-blur-xl bg-white/5 dark:bg-black/5 border-t border-white/20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400"
        >
          <span>Made with</span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Heart size={18} className="text-red-500 fill-red-500" />
          </motion.div>
          <span>by Anil Gopal Suthar</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-sm text-gray-500 dark:text-gray-500"
        >
          © 2024 All rights reserved
        </motion.p>
      </div>
    </footer>
  );
}
