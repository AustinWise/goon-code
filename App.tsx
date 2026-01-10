import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Button from './components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  // Simple CTA handler for the entire app
  const handleJoinWaitlist = () => {
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      
      <main>
        <Hero />
        <Concept />
        {/* <HowItWorks /> */}
        <Testimonials />
        
        {/* Large CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-indigo-900/10"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]"></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
             <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to catch the vibe?</h2>
             <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
               Join thousands of developers who have stopped writing boilerplate and started building dreams.
             </p>
             <Button size="lg" variant="secondary" onClick={handleJoinWaitlist}>
               Join the Waitlist
             </Button>
          </div>
        </section>

      </main>

      <Footer />

      {/* Simple Waitlist Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-slate-900 border border-white/10 p-8 rounded-2xl shadow-2xl"
            >
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
              
              <h3 className="text-2xl font-bold text-white mb-2">Join the Movement</h3>
              <p className="text-slate-400 mb-6">Enter your email to get early access to the vibe coding platform.</p>
              
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowModal(false); alert("Welcome to the future!"); }}>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="you@vibecode.io"
                    className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <Button type="submit" variant="secondary" className="w-full">
                  Request Access
                </Button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;