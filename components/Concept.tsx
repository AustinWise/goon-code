import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Zap, MessageSquareCode } from 'lucide-react';
import Section from './ui/Section';

const features = [
  {
    icon: <Brain className="w-6 h-6 text-pink-400" />,
    title: "Intent Over Syntax",
    description: "Don't worry about how you get there, just let pure desire dictate what gets make."
  },
  {
    icon: <Sparkles className="w-6 h-6 text-purple-400" />,
    title: "Goblin Mode", // TODO: mixing Goblin mode and gooning might send mixed signals
    description: "Learn back in your chair and let the code wash over you. Keep your eyes unfocused and your tongue hanging out while the AI agent runs your life."
  },
  {
    icon: <MessageSquareCode className="w-6 h-6 text-blue-400" />,
    title: "Always be gooning",
    description: "Tell everyone how much code you can goon, even if you haven't yet. Your coding agents can build the project faster than your customer can figure out you sold them something that dose not exist."
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: "Logjammin Interruptus",
    description: "Don't worry about 'building consensus' with teammates, just pump, pump out the code. Code wins arguments."
  }
];

const Concept: React.FC = () => {
  return (
    <Section id="concept" className="bg-slate-950/50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What is <span className="text-indigo-400">Goon Coding</span>?</h2>
        <p className="text-slate-400 text-lg leading-relaxed">
          It's the next step beyond vibe coding. Its when you stop trying to pretend that your own conscience
          thought has any value and let the agents take over.
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