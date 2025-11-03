import { motion } from 'framer-motion';
import { Award, Cloud, Server } from 'lucide-react';

export default function About() {
  const certifications = [
    { name: 'Microsoft Azure Fundamentals', icon: Cloud },
    { name: 'Google Cloud Skills Boost', icon: Server },
    { name: 'NPTEL Cloud Computing', icon: Award },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-white/10 dark:bg-black/10 rounded-3xl p-8 border border-white/20 shadow-2xl"
            >
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                I'm pursuing a B.Tech in Computer Science (Cloud Computing) at Alliance University.
                I love building cloud-native solutions, automating workflows, and exploring futuristic systems.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                My passion lies in leveraging cutting-edge technologies to solve real-world problems
                and create scalable, efficient cloud architectures.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="backdrop-blur-xl bg-white/10 dark:bg-black/10 rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all shadow-lg flex items-center gap-4"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500">
                    <cert.icon size={24} className="text-white" />
                  </div>
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    {cert.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
