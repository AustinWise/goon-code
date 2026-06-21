import React, { useState, useRef, useEffect } from 'react';
import Section from './ui/Section';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Testimonial } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const testimonialData: Testimonial[] = [
  {
    image: "/caves/awise.jpg",
    handle: "Austin Wise",
    link: "https://awise.us",
  }
];

const Testimonials: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev !== null ? (prev - 1 + testimonialData.length) % testimonialData.length : null));
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % testimonialData.length : null));
      }
    };

    if (selectedIndex !== null) {
      dialog?.showModal();
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      dialog?.close();
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
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
            The caves of the <span className="text-indigo-400">Goon Code Era</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            The setups where the goonmeisters make the magic happen.
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
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
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
                  <a href={testimonialData[selectedIndex].link} target="_blanks" rel="nofollow">
                    {testimonialData[selectedIndex].handle}
                  </a>
                </h3>
              </div>
            </div>
            </motion.div>
          )}
        </AnimatePresence>
      </dialog>
    </Section>
  );
};

export default Testimonials;
