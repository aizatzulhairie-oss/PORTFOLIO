import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'section-about', label: 'About Me' },
    { id: 'section-education', label: 'Education' },
    { id: 'section-internship', label: 'Internship' },
    { id: 'section-skills', label: 'Skills & Certifications' },
    { id: 'section-volunteering', label: 'Volunteering' },
    { id: 'section-projects-1', label: 'Engineering Projects 1' },
    { id: 'section-projects-2', label: 'Engineering Projects 2' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0c2340]/95 backdrop-blur-md shadow-lg border-b border-[#ea580c]/30 py-2.5'
          : 'bg-[#0c2340] py-3 border-b-2 border-[#ea580c]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Name badge */}
        <div
          onClick={() => scrollToSection('section-about')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg bg-[#ea580c] flex items-center justify-center font-black text-white text-sm shadow">
            AZ
          </div>
          <div className="flex flex-col">
            <span className="text-white font-extrabold text-sm sm:text-base tracking-wide group-hover:text-[#ea580c] transition-colors leading-tight">
              AIZAT ZUL HAIRIE
            </span>
            <span className="text-[10px] text-slate-300 font-semibold tracking-wider uppercase leading-none">
              Mechanical & Welding Engineer
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-150 ${
                  isActive
                    ? 'bg-[#ea580c] text-white shadow-sm'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6 text-[#ea580c]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0c2340] border-t border-[#ea580c]/40 px-4 pt-3 pb-5 space-y-1 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider flex items-center justify-between ${
                  isActive
                    ? 'bg-[#ea580c] text-white'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-white" />}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
