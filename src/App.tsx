import React, { useState, useEffect } from 'react';
import { ImageProvider } from './context/ImageContext';
import { Navigation } from './components/Navigation';
import { Section1AboutMe } from './sections/Section1AboutMe';
import { Section2Education } from './sections/Section2Education';
import { Section3Internship } from './sections/Section3Internship';
import { Section4Skills } from './sections/Section4Skills';
import { Section5Volunteering } from './sections/Section5Volunteering';
import { Section6Projects1 } from './sections/Section6Projects1';
import { Section7Projects2 } from './sections/Section7Projects2';
import { ArrowUp } from 'lucide-react';

function PortfolioApp() {
  const [activeSection, setActiveSection] = useState<string>('section-about');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sectionIds = [
        'section-about',
        'section-education',
        'section-internship',
        'section-skills',
        'section-volunteering',
        'section-projects-1',
        'section-projects-2',
      ];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#edf2f8] text-slate-800 flex flex-col font-sans selection:bg-[#ea580c] selection:text-white">
      {/* Sticky Navigation */}
      <Navigation activeSection={activeSection} />

      {/* Main Document Content: 7 Continuous PDF-Matching Sections */}
      <main className="flex-1 px-3 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-6 sm:space-y-10 max-w-7xl mx-auto w-full">
        <Section1AboutMe />
        <Section2Education />
        <Section3Internship />
        <Section4Skills />
        <Section5Volunteering />
        <Section6Projects1 />
        <Section7Projects2 />
      </main>

      {/* Engineering Footer */}
      <footer className="bg-[#0c2340] text-slate-300 py-8 px-4 border-t-4 border-[#ea580c] mt-12">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h5 className="text-white font-black text-sm tracking-wide uppercase">
              AIZAT ZUL HAIRIE BIN WAHI
            </h5>
            <p className="text-xs text-slate-400 mt-0.5">
              Bachelor of Technology with Education (Mechanical Engineering) (Hons.) • Minor in Welding Technology • Universiti Teknologi Malaysia (UTM)
            </p>
          </div>
          <div className="text-xs text-slate-400 font-semibold">
            1:1 Engineering Portfolio
          </div>
        </div>
      </footer>

      {/* Floating Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-5 right-5 z-40 w-10 h-10 rounded-full bg-[#0c2340] hover:bg-[#ea580c] text-white shadow-lg flex items-center justify-center transition-all duration-200 border-2 border-white/40 focus:outline-none"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

export default function App() {
  return (
    <ImageProvider>
      <PortfolioApp />
    </ImageProvider>
  );
}
