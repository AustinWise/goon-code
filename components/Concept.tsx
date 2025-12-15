import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Zap, MessageSquareCode } from 'lucide-react';
import Section from './ui/Section';

const features = [
  {
    icon: <Brain className="w-6 h-6 text-pink-400" />,
    title: "Intent Over Syntax",
    description: "Forget missing semicolons. Describe your logic in plain English, and let the AI architect the implementation details."
  },
  {
    icon: <Sparkles className="w-6 h-6 text-purple-400" />,
    title: "Creative Flow State",
    description: "Maintain your creative momentum. Vibe coding removes the friction between having an idea and seeing it live."
  },
  {
    icon: <MessageSquareCode className="w-6 h-6 text-blue-400" />,
    title: "Natural Language API",
    description: "Your voice is the ultimate SDK. Command complex data structures and UI components just by speaking them into existence."
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: "Instant Iteration",
    description: "Don't like the vibe? Change it instantly. Refine, tweak, and pivot your application's direction in seconds, not hours."
  }
];

const Concept: React.FC = () => {
  return (
    <Section id="concept" className="bg-slate-950/50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What is <span className="text-indigo-400">Vibe Coding</span>?</h2>
        <p className="text-slate-400 text-lg leading-relaxed">
          It's a paradigm shift. Instead of writing code line-by-line, you guide an intelligent agent through the creative process. You provide the "vibe"—the intent, the aesthetic, the logic—and the AI handles the heavy lifting.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-white/10">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Concept;