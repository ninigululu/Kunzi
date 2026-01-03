
import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { NAV_ITEMS } from '../constants';
import { Menu, X, Globe } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-slate-100 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <a href="#home" className="transition-opacity hover:opacity-80">
            <Logo variant={scrolled ? 'dark' : 'light'} />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:text-indigo-500 ${scrolled ? 'text-slate-900' : 'text-white/80'}`}
              >
                {item.label[lang]}
              </a>
            ))}
            <button
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-sm border transition-all ${scrolled ? 'border-slate-200 text-slate-900 hover:bg-slate-50' : 'border-white/20 text-white hover:bg-white/5'}`}
            >
              <Globe className="w-3 h-3" />
              <span className="text-[10px] font-bold uppercase tracking-wider">{lang === 'en' ? 'ZH' : 'EN'}</span>
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 ${scrolled ? 'text-slate-900' : 'text-white'}`}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black text-white z-50 flex flex-col p-12 space-y-8 animate-in fade-in duration-300">
          <div className="flex justify-between items-center mb-12">
            <Logo variant="light" />
            <button onClick={() => setIsOpen(false)}><X className="w-8 h-8" /></button>
          </div>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-4xl font-extrabold tracking-tighter"
              onClick={() => setIsOpen(false)}
            >
              {item.label[lang]}
            </a>
          ))}
          <div className="pt-8 border-t border-white/10">
             <button
              onClick={() => { setLang(lang === 'en' ? 'zh' : 'en'); setIsOpen(false); }}
              className="text-indigo-400 font-bold uppercase tracking-[0.2em] text-xs"
            >
              {lang === 'en' ? 'Switch to Chinese' : '切换到英文'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
