import { motion } from 'framer-motion';
import { Trophy, Award, Code, Target } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: 'AIR 489 JEE Mains',
      year: '2023',
      description: 'All India Rank in Joint Entrance Examination',
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Code,
      title: 'Google GenAI Hackathon',
      year: '2024',
      description: 'Participant in Google Generative AI Hackathon',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Award,
      title: 'Azure Certified',
      year: '2024',
      description: 'Microsoft Azure Fundamentals Certification',
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Target,
      title: 'Cloud Certifications',
      year: '2024',
      description: 'NPTEL, Google Cloud Skills Boost',
      gradient: 'from-green-400 to-teal-500',
    },
  ];

  return (
    <section id="achievements" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Achievements
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateZ: 2 }}
              className="backdrop-blur-xl bg-white/10 dark:bg-black/10 rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all shadow-2xl hover:shadow-cyan-400/20 relative overflow-hidden group"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
              />

              <div className="relative z-10">
                <div className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${achievement.gradient} mb-4`}>
                  <achievement.icon size={32} className="text-white" />
                </div>

                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {achievement.title}
                  </h3>
                  <span className="text-sm font-semibold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                    {achievement.year}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
