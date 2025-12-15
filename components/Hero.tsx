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
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-indigo-300 mb-8 backdrop-blur-md"
        >
          <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
          The syntax era is ending. The vibe era is here.
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
        >
          Code at the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-300">
            Speed of Thought
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Stop wrestling with boilerplates and syntax errors. 
          Vibe coding lets you build complex applications using 
          natural language, intent, and pure creativity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="secondary" size="lg" className="w-full sm:w-auto group">
            Start Vibe Coding
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            <Play className="mr-2 w-5 h-5 fill-current" />
            Watch the Demo
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
             <div className="rounded-lg overflow-hidden bg-slate-950 border border-white/5 relative aspect-[16/9] md:aspect-[21/9] flex flex-col">
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
                   {/* Left: Natural Language Input */}
                   <div className="flex-1 flex flex-col gap-3">
                      <div className="text-xs font-mono text-indigo-400 mb-1 flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
                         YOUR VIBE (PROMPT)
                      </div>
                      <div className="text-slate-300 font-medium text-lg md:text-xl leading-relaxed">
                         "Create a retro-futuristic dashboard that tracks solar flares. Use neon orange and deep purple. Make the charts glow."
                      </div>
                   </div>

                   {/* Center: Arrow (Mobile: Down, Desktop: Right) */}
                   <div className="flex items-center justify-center text-slate-600">
                      <Zap className="w-6 h-6 animate-pulse text-yellow-400" />
                   </div>

                   {/* Right: Code/Preview Output */}
                   <div className="flex-1 rounded bg-slate-900/50 border border-white/5 p-4 font-mono text-xs md:text-sm text-slate-400 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/80"></div>
                      <span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span>;<br/>
                      <span className="text-purple-400">import</span> {'{ Line }'} <span className="text-purple-400">from</span> <span className="text-green-400">'recharts'</span>;<br/><br/>
                      <span className="text-slate-500">// AI-generated component based on vibe signature</span><br/>
                      <span className="text-blue-400">const</span> <span className="text-yellow-200">SolarDashboard</span> = () ={'>'} {'{'}<br/>
                      &nbsp;&nbsp;<span className="text-blue-400">return</span> (<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className="text-red-300">div</span> <span className="text-sky-300">className</span>=<span className="text-green-300">"bg-slate-950 p-6 shadow-[0_0_50px_#a855f7]"</span>{'>'}<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className="text-red-300">h1</span> <span className="text-sky-300">className</span>=<span className="text-green-300">"text-orange-500 font-display glow-text"</span>{'>'}<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SOLAR ACTIVITY<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'</'}<span className="text-red-300">h1</span>{'>'}<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;{'</'}<span className="text-red-300">div</span>{'>'}<br/>
                      &nbsp;&nbsp;);<br/>
                      {'}'};
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;