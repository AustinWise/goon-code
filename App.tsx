import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Button from './components/ui/Button';

const App: React.FC = () => {
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
               Join thousands of developers who have turned their brains off.
             </p>
             <Button size="lg" variant="secondary">
               <a href="https://github.com/AustinWise/goon-code?tab=readme-ov-file#contributing" target="_blank">
                 Add your vibe cave to the gallery
               </a>
             </Button>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default App;