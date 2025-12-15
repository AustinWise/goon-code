import React from 'react';
import Section from './ui/Section';

const steps = [
  {
    num: "01",
    title: "Dream It",
    desc: "Visualize the outcome. What problem are you solving? Who is it for? What does it feel like?"
  },
  {
    num: "02",
    title: "Describe It",
    desc: "Use natural language to explain your idea. Be vague or specific—the AI adapts to your level of detail."
  },
  {
    num: "03",
    title: "Refine the Vibe",
    desc: "Chat with your codebase. Ask for 'more pop', 'cleaner logic', or 'faster database queries'. It just happens."
  },
  {
    num: "04",
    title: "Deploy",
    desc: "One click to production. The infrastructure is abstracted away, leaving only your creation."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <Section id="how-it-works" className="relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-900/50 to-transparent"></div>
      
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="lg:w-1/3 sticky top-32">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">From Thought to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Reality</span></h2>
          <p className="text-slate-400 text-lg mb-8">
            The traditional development lifecycle is broken. Vibe coding unifies design, development, and deployment into a single, fluid conversation.
          </p>
          <div className="hidden lg:block h-64 w-64 bg-indigo-500/10 rounded-full blur-[80px] absolute -top-20 -left-20 -z-10"></div>
        </div>

        <div className="lg:w-2/3 grid gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-6 group">
              <div className="flex-shrink-0 w-16 h-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-2xl font-mono text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                {step.num}
              </div>
              <div className="pt-2">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">{step.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default HowItWorks;