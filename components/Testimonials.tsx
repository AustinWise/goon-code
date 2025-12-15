import React from 'react';
import Section from './ui/Section';

const testimonials = [
  {
    quote: "I haven't written a `useEffect` hook in 6 months. I just tell the vibe what I want, and it handles the lifecycle perfectly.",
    author: "Sarah Jenkins",
    role: "Senior Product Designer",
    avatar: "S"
  },
  {
    quote: "It felt like magic at first. Now it just feels like the only logical way to build software. Vibe coding allows me to focus on the 'why' instead of the 'how'.",
    author: "Marcus Chen",
    role: "Indie Hacker",
    avatar: "M"
  },
  {
    quote: "The barrier to entry for building complex apps has completely vanished. My 12-year-old just built a social network for her school using pure vibes.",
    author: "Elena Rodriguez",
    role: "CTO @ TechFlow",
    avatar: "E"
  }
];

const Testimonials: React.FC = () => {
  return (
    <Section className="bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
          Manifesto from the <span className="text-indigo-400">Community</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card p-8 rounded-2xl relative">
              <div className="absolute -top-4 -left-4 text-6xl text-indigo-500/20 font-serif">"</div>
              <p className="text-slate-300 mb-6 text-lg italic relative z-10 leading-relaxed">
                {t.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white text-sm">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-white">{t.author}</div>
                  <div className="text-xs text-indigo-300 uppercase tracking-wider">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;