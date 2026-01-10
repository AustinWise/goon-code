import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Code2, Zap } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
           <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] animate-blob mix-blend-screen" />
           <div className="absolute top-[30%] right-[10%] w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen" />
           <div className="absolute bottom-[20%] left-[30%] w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen" />
        </div>
        <div className="absolute inset-0 bg-[url('noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-indigo-300 mb-8 backdrop-blur-md"
        >
          <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
          Vibe coding is tired, goon coding is wired.
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
        >
          Forget vibe coding <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-300">
            start goon coding
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          You already stopped thinking about code. Now surrender your last grip on agency to LLM
          agents and let LLM coding tools run your life. You love the agents and they love you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="secondary" size="lg" className="w-full sm:w-auto group">
            Start Gooning
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            <Play className="mr-2 w-5 h-5 fill-current" />
            See Vibe Caves
          </Button>
        </motion.div>

        {/* Floating Code/Vibe Snippets Visualization */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.8 }}
           className="mt-20 relative max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-xl p-1 md:p-2 ring-1 ring-white/10 shadow-2xl bg-black/40 backdrop-blur-xl">
             <div className="rounded-lg overflow-hidden bg-slate-950 border border-white/5 relative flex flex-col">
                {/* Mock Browser/Editor Header */}
                <div className="h-8 md:h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                   <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                   </div>
                   <div className="ml-4 h-4 w-32 bg-white/5 rounded-full"></div>
                </div>
                
                {/* Editor Content Split */}
                <div className="flex-1 flex flex-col md:flex-row p-4 md:p-6 gap-6 overflow-hidden">
                  <img width="1000" height="1000" src="/caves/austinwise.jpg" />
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;