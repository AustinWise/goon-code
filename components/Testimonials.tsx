import React, { useState, useRef, useEffect } from 'react';
import Section from './ui/Section';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Testimonial } from '../types';

const testimonialData: Testimonial[] = [
  {
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000",
    handle: "@sarah_vibe"
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000",
    handle: "@mchen_builds"
  },
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000",
    handle: "@elena_codes"
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1000",
    handle: "@marcus_vibe"
  },
  {
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=1000",
    handle: "@jay_dev"
  },
  {
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=1000",
    handle: "@sophia_labs"
  }
];

const Testimonials: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (selectedIndex !== null) {
      dialog?.showModal();
    } else {
      dialog?.close();
    }
  }, [selectedIndex]);

  const handleClose = () => setSelectedIndex(null);
  
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + testimonialData.length) % testimonialData.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % testimonialData.length);
  };

  // Close on backdrop click
  const onBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      handleClose();
    }
  };

  return (
    <Section className="bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            The Faces of the <span className="text-indigo-400">Vibe Era</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Top creators and developers who have transcended syntax.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {testimonialData.map((t, i) => (
            <div 
              key={i} 
              className="group cursor-pointer relative aspect-square overflow-hidden rounded-xl glass-card border-white/5"
              onClick={() => setSelectedIndex(i)}
            >
              <img 
                src={t.image} 
                alt={t.handle}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-white font-mono text-xs tracking-tight">{t.handle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <dialog 
        ref={dialogRef}
        onClick={onBackdropClick}
        onClose={handleClose}
        className="bg-transparent p-0 outline-none backdrop:bg-slate-950/90 backdrop:backdrop-blur-md max-w-[90vw] max-h-[90vh] overflow-visible"
      >
        {selectedIndex !== null && (
          <div className="relative group">
            {/* Close Button */}
            <button 
              onClick={handleClose}
              className="absolute -top-12 right-0 md:-right-12 text-slate-400 hover:text-white transition-colors p-2"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button 
              onClick={handlePrev}
              className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full text-white transition-all border border-white/10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full text-white transition-all border border-white/10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Content */}
            <div className="flex flex-col items-center">
              <div className="glass-card p-1 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src={testimonialData[selectedIndex].image} 
                  alt={testimonialData[selectedIndex].handle}
                  className="max-h-[70vh] w-auto object-contain rounded-xl"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-white tracking-tight font-mono">
                  {testimonialData[selectedIndex].handle}
                </h3>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </Section>
  );
};

export default Testimonials;
