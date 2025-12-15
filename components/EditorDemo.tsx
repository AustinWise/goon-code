import React, { useState, useEffect } from 'react';
import Section from './ui/Section';
import { Play, RotateCcw, Check, Terminal } from 'lucide-react';
import Button from './ui/Button';

const EditorDemo: React.FC = () => {
  const promptText = "Build a personal finance tracker that looks like a 90s cyberpunk hacker terminal. Use green text on black.";
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const startDemo = () => {
    setIsTyping(true);
    setTypedText("");
    setShowResult(false);
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(promptText.substring(0, i + 1));
      i++;
      if (i > promptText.length) {
        clearInterval(interval);
        setIsTyping(false);
        setTimeout(() => setShowResult(true), 800);
      }
    }, 50);
  };

  useEffect(() => {
    // Auto start demo on view is a bit aggressive, let's just leave it manual or start once
    const timer = setTimeout(() => {
        startDemo();
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Section className="py-24">
       <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience the Vibe</h2>
            <p className="text-slate-400">See how natural language translates to functional UI in real-time.</p>
          </div>

          <div className="glass-card rounded-xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-[#0c0c0c]">
             {/* Toolbar */}
             <div className="h-12 bg-[#1a1a1a] border-b border-white/5 flex items-center justify-between px-4">
                <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <div className="flex items-center gap-2">
                    <Button 
                        size="sm" 
                        variant="ghost" 
                        onClick={startDemo} 
                        disabled={isTyping}
                        className="h-8 text-xs gap-1"
                    >
                        <RotateCcw className="w-3 h-3" /> Replay
                    </Button>
                </div>
             </div>

             <div className="grid md:grid-cols-2 h-[500px]">
                {/* Input Area */}
                <div className="p-6 border-r border-white/5 bg-[#0f0f0f] flex flex-col">
                   <div className="text-xs font-mono text-slate-500 mb-4 flex items-center gap-2">
                      <Terminal className="w-3 h-3" /> INPUT_STREAM
                   </div>
                   <div className="font-mono text-slate-300 text-lg leading-relaxed flex-1 whitespace-pre-wrap">
                      {typedText}
                      {isTyping && <span className="animate-pulse inline-block w-2 h-5 bg-indigo-500 ml-1 align-middle"></span>}
                   </div>
                </div>

                {/* Preview Area */}
                <div className="relative bg-black flex items-center justify-center p-6 overflow-hidden">
                    {!showResult && (
                        <div className="text-slate-600 font-mono text-sm flex flex-col items-center gap-3">
                            {isTyping ? (
                                <>
                                    <div className="w-8 h-8 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
                                    <span className="animate-pulse">Parsing Vibe...</span>
                                </>
                            ) : (
                                <span>Waiting for input...</span>
                            )}
                        </div>
                    )}

                    {showResult && (
                        <div className="w-full h-full border border-green-500/30 bg-black p-4 font-mono text-green-500 shadow-[0_0_20px_rgba(34,197,94,0.1)] relative animate-in fade-in zoom-in duration-500">
                            {/* Cyberpunk UI Mockup */}
                            <div className="flex justify-between items-center mb-6 border-b border-green-900/50 pb-2">
                                <h3 className="text-xl font-bold tracking-widest uppercase">Fin_Track_v9</h3>
                                <div className="text-xs animate-pulse">STATUS: ONLINE</div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="border border-green-900/50 p-2 bg-green-900/10">
                                    <div className="text-[10px] text-green-700 mb-1">CURRENT_BALANCE</div>
                                    <div className="text-2xl font-bold">$12,450.00</div>
                                </div>
                                <div className="border border-green-900/50 p-2 bg-green-900/10">
                                    <div className="text-[10px] text-green-700 mb-1">MONTHLY_SPEND</div>
                                    <div className="text-2xl font-bold text-red-500">-$3,200.50</div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="text-xs border-b border-green-900/50 pb-1 flex justify-between">
                                    <span>TRANSACTION_ID</span>
                                    <span>AMOUNT</span>
                                </div>
                                {[1,2,3].map(i => (
                                    <div key={i} className="flex justify-between text-sm opacity-80 hover:bg-green-900/20 cursor-pointer px-1">
                                        <span>0x7F_SERVER_COST</span>
                                        <span>-450.00</span>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="absolute bottom-2 right-2 text-[10px] text-green-800">
                                SYSTEM_READY
                            </div>
                        </div>
                    )}
                </div>
             </div>
          </div>
       </div>
    </Section>
  );
};

export default EditorDemo;