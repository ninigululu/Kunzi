
import React from 'react';
import { Language } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  return (
    <section id="home" className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-[#0A0C10]">
      {/* Cinematic Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0C10]/20 to-[#0A0C10]"></div>
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069"
          alt="Modern Architecture"
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        {/* Sharp light beam effect */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/10 to-transparent skew-x-12 transform origin-top translate-x-1/4"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-3 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="h-[1px] w-12 bg-indigo-500"></div>
            <span className="text-indigo-400 text-xs font-bold tracking-[0.3em] uppercase">
              {lang === 'en' ? 'Sino-US Strategic Bridge' : '中美战略之桥'}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-extrabold text-white leading-[0.9] tracking-tighter mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            {lang === 'en' ? (
              <>Global Vision. <br/><span className="text-indigo-500 italic font-serif font-light">Precision</span> Strategy.</>
            ) : (
              <>全球视野 <br/><span className="text-indigo-500 italic font-serif font-light">精确</span> 战略</>
            )}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            {lang === 'en' 
              ? 'Premier cross-border consultancy for elite enterprises navigating the Sino-US corridor.'
              : '为穿梭于中美走廊的顶尖企业提供卓越的跨境咨询服务。'}
          </p>

          <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <a href="#contact" className="px-10 py-5 bg-white text-black font-bold flex items-center group hover:bg-indigo-600 hover:text-white transition-all duration-300 rounded-sm">
              {lang === 'en' ? 'Inquire Now' : '即刻咨询'}
              <ArrowUpRight className="ml-2 w-5 h-5 group-hover:rotate-45 transition-transform" />
            </a>
            <a href="#services" className="px-10 py-5 bg-transparent text-white border border-white/20 font-bold hover:bg-white/5 transition-all rounded-sm">
              {lang === 'en' ? 'Our Expertise' : '专业领域'}
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Grid Line */}
      <div className="absolute right-0 bottom-0 top-0 w-px bg-white/5 hidden xl:block"></div>
      <div className="absolute left-0 bottom-1/4 right-0 h-px bg-white/5 hidden xl:block"></div>
    </section>
  );
};
