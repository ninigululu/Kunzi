
import React from 'react';
import { Language } from '../types';
import { SERVICES, SERVICE_ICONS } from '../constants';
import { ArrowRight, MoveRight } from 'lucide-react';

interface ServicesProps {
  lang: Language;
}

export const Services: React.FC<ServicesProps> = ({ lang }) => {
  return (
    <section id="services" className="py-32 bg-[#F9FAFB] relative overflow-hidden">
      {/* Subtle Texture/Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#4F46E5 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-200 pb-12">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold tracking-[0.5em] text-indigo-600 uppercase mb-4 block">
              {lang === 'en' ? 'Our Strategic Pillars' : '战略核心支柱'}
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 leading-[0.9]">
              {lang === 'en' ? 'Professional' : '专业'} <br/>
              <span className="font-serif italic font-light text-indigo-600">
                {lang === 'en' ? 'Sino-US Solutions' : '中美跨境方案'}
              </span>
            </h2>
          </div>
          <div className="max-w-sm text-slate-500 text-sm leading-relaxed font-light italic">
            {lang === 'en' 
              ? "We architect growth by navigating the delicate balance of international capital and regulatory requirements."
              : "我们通过在国际资本和监管要求的微妙平衡中穿梭，为企业构建增长蓝图。"}
          </div>
        </div>

        {/* Asymmetrical Service Blocks */}
        <div className="space-y-12">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id}
              className={`flex flex-col lg:flex-row items-stretch group transition-all duration-700 ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Visual Side */}
              <div className="w-full lg:w-1/2 relative overflow-hidden h-[300px] lg:h-auto bg-slate-900">
                <img 
                  src={`https://images.unsplash.com/photo-${idx === 0 ? '1454165833767-13143891bb3d' : idx === 1 ? '1553729459-efe14ef6055d' : idx === 2 ? '1460925895917-afdab827c52f' : '1507679799987-c7377ec486b9'}?auto=format&fit=crop&q=80&w=1200`}
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-60 transition-all duration-1000"
                  alt={service.title[lang]}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="flex items-center space-x-4">
                     <span className="text-white/20 font-serif italic text-6xl">0{idx + 1}</span>
                     <div className="h-px flex-1 bg-white/20"></div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 bg-white p-10 lg:p-20 flex flex-col justify-center border border-slate-100 shadow-sm relative group-hover:shadow-2xl transition-all duration-700">
                {/* Kinetic Accent Line */}
                <div className="absolute top-0 left-0 h-1 bg-indigo-600 w-0 group-hover:w-full transition-all duration-700"></div>
                
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-3 bg-indigo-50 text-indigo-700 rounded-sm">
                    {/* Fix: cast to React.ReactElement<any> and validate element before cloning to resolve TypeScript error with className prop */}
                    {React.isValidElement(SERVICE_ICONS[service.icon]) && React.cloneElement(SERVICE_ICONS[service.icon] as React.ReactElement<any>, { className: "w-6 h-6" })}
                  </div>
                  <h4 className="text-3xl font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                    {service.title[lang]}
                  </h4>
                </div>

                <p className="text-lg text-slate-500 leading-relaxed font-light mb-10">
                  {service.description[lang]}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                  {service.details[lang].map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center space-x-3 group/item">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-200 group-hover/item:bg-indigo-600 transition-colors"></div>
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover/item:text-slate-900 transition-colors">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>

                <a href="#contact" className="inline-flex items-center text-xs font-black uppercase tracking-[0.3em] text-indigo-600 group-hover:translate-x-2 transition-transform">
                  <span>{lang === 'en' ? 'Inquire for Strategy' : '咨询战略方案'}</span>
                  <MoveRight className="ml-3 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-32 p-12 bg-white border border-slate-100 rounded-sm flex flex-col md:flex-row items-center justify-between gap-8 group">
           <div className="max-w-md">
              <h5 className="text-2xl font-serif italic text-slate-900 mb-2">
                {lang === 'en' ? 'Need a Bespoke Solution?' : '需要量身定制的方案？'}
              </h5>
              <p className="text-sm text-slate-500">
                {lang === 'en' 
                  ? 'Our expertise adapts to the unique scale and risk profile of your enterprise.'
                  : '我们的专业知识能够适应您企业的独特规模 and 风险状况。'}
              </p>
           </div>
           <a href="#contact" className="bg-indigo-600 text-white px-10 py-5 rounded-sm font-bold text-xs uppercase tracking-[0.2em] hover:bg-black transition-colors flex items-center shadow-xl shadow-indigo-200">
              {lang === 'en' ? 'Talk to a Partner' : '联系合伙人'}
              <ArrowRight className="ml-2 w-4 h-4" />
           </a>
        </div>
      </div>
    </section>
  );
};
