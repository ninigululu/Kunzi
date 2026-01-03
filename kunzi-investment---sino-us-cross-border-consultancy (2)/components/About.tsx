
import React from 'react';
import { Language } from '../types';
import { Linkedin, Mail, User } from 'lucide-react';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Core Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-40 items-center">
          <div className="animate-in fade-in slide-in-from-left duration-1000">
            <span className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase mb-6 block">
              {lang === 'en' ? 'Our Foundation' : '核心基石'}
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 mb-8">
              {lang === 'en' ? 'Bridging Economies with Strategic Integrity' : '以战略诚信连接全球经济'}
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed font-light mb-10">
              {lang === 'en' 
                ? "Kunzi Investment was founded on the principle of bridging the cultural and regulatory gap between the world's two largest economies. We don't just advise on deals; we build lasting business architectures that withstand the complexities of global geopolitics."
                : "鲲梓投资的成立初衷是为全球前两大经济体搭建文化与监管的桥梁。我们不局限于提供交易建议，更致力于构建能够经受全球地缘政治复杂性考验的持久商业架构。"}
            </p>
          </div>
          <div className="relative aspect-square bg-slate-50 overflow-hidden rounded-sm group animate-in fade-in slide-in-from-right duration-1000">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              alt="Strategic Vision"
            />
            <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none"></div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="pt-24 border-t border-slate-100">
          <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase mb-4 block">
                {lang === 'en' ? 'Our Leadership' : '核心领导层'}
              </span>
              <h3 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-slate-900">
                {lang === 'en' ? 'Guided by World-Class Expertise' : '汇聚世界顶尖专业视野'}
              </h3>
            </div>
            <div className="text-slate-400 text-sm max-w-xs leading-relaxed uppercase tracking-widest font-bold border-l border-slate-100 pl-6">
              {lang === 'en' 
                ? 'Senior partners from global giants including Wanda, Michelin, Fosun, and Fiat.'
                : '来自万达、米其林、复星及菲亚特等全球巨头的高级合伙人。'}
            </div>
          </div>

          <div className="space-y-12">
            {/* Profile 1: Liang Jia (Kurt) */}
            <div className="bg-[#F8F9FB] rounded-sm overflow-hidden group hover:shadow-2xl transition-all duration-700 border border-slate-100">
              <div className="p-10 lg:p-20 relative bg-white group-hover:bg-[#0A0C10] transition-colors duration-700 overflow-hidden">
                <div className="absolute -right-12 -top-12 text-[15rem] font-serif font-bold text-slate-50 group-hover:text-white/[0.03] select-none transition-colors duration-700">
                  LK
                </div>

                <div className="relative z-10">
                  <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                      <h4 className="text-4xl md:text-5xl font-extrabold text-slate-900 group-hover:text-white transition-colors mb-3 tracking-tighter">
                        Liang Jia (Kurt)
                      </h4>
                      <div className="flex items-center space-x-4">
                        <div className="h-px w-8 bg-indigo-600"></div>
                        <p className="text-indigo-600 font-bold uppercase tracking-[0.3em] text-xs">
                          {lang === 'en' ? 'Managing Partner' : '创始合伙人'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <a href="https://www.linkedin.com/in/liang-jia-097589b/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-slate-900 group-hover:text-white transition-all hover:text-indigo-500 group-hover:hover:text-indigo-400">
                        <Linkedin className="w-4 h-4" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">LinkedIn</span>
                      </a>
                      <a href="mailto:Kurtjia@hotmail.com" className="flex items-center space-x-3 text-slate-900 group-hover:text-white transition-all hover:text-indigo-500 group-hover:hover:text-indigo-400">
                        <Mail className="w-4 h-4" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Inquire</span>
                      </a>
                    </div>
                  </div>

                  <div className="space-y-8 mb-12 max-w-4xl">
                    <p className="text-xl text-slate-600 group-hover:text-slate-300 leading-relaxed font-serif italic">
                      {lang === 'en'
                        ? "A veteran investment strategist with over two decades of experience in cross-border M&A and capital markets. Formerly the Head of Investment at Wanda Group and VP at Future Land, he has spearheaded landmark global acquisitions totaling billions in deal value."
                        : "资深投资战略家，在跨境并购和资本市场拥有超过二十年的经验。曾任万达集团投资负责人及新城控股副总裁，主导了总额达数十亿美元的里程碑式全球收购。"}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="p-8 bg-slate-50 group-hover:bg-white/5 border border-slate-100 group-hover:border-white/10 rounded-sm">
                         <h5 className="text-[10px] font-bold uppercase tracking-widest text-indigo-500 mb-4">Key Transactions</h5>
                         <ul className="text-sm text-slate-500 group-hover:text-slate-400 space-y-2">
                            <li>Infront Sport Media (€700M)</li>
                            <li>WTC / Ironman Acquisition</li>
                            <li>Hoyts Group (AUD 300M)</li>
                         </ul>
                      </div>
                      <div className="p-8 bg-slate-50 group-hover:bg-white/5 border border-slate-100 group-hover:border-white/10 rounded-sm">
                         <h5 className="text-[10px] font-bold uppercase tracking-widest text-indigo-500 mb-4">Previous Roles</h5>
                         <ul className="text-sm text-slate-500 group-hover:text-slate-400 space-y-2">
                            <li>Head of Investment, Wanda</li>
                            <li>Deputy GM, Fosun Group</li>
                            <li>National Director, JLL</li>
                         </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8 pt-8 border-t border-slate-100 group-hover:border-white/10 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                    <span>SJTU Alumnus</span>
                    <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
                    <span>20+ Years Excellence</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile 2: Gloria Dai (Lei Dai) */}
            <div className="bg-[#F8F9FB] rounded-sm overflow-hidden group hover:shadow-2xl transition-all duration-700 border border-slate-100">
              <div className="p-10 lg:p-20 relative bg-white group-hover:bg-[#0A0C10] transition-colors duration-700 overflow-hidden">
                <div className="absolute -left-12 -top-12 text-[15rem] font-serif font-bold text-slate-50 group-hover:text-white/[0.03] select-none transition-colors duration-700">
                  GD
                </div>

                <div className="relative z-10">
                  <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                      <h4 className="text-4xl md:text-5xl font-extrabold text-slate-900 group-hover:text-white transition-colors mb-3 tracking-tighter">
                        Gloria Dai (Lei Dai)
                      </h4>
                      <div className="flex items-center space-x-4">
                        <div className="h-px w-8 bg-indigo-600"></div>
                        <p className="text-indigo-600 font-bold uppercase tracking-[0.3em] text-xs">
                          {lang === 'en' ? 'Principal / Financial & Transformation Expert' : '合伙人 / 财务与转型专家'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <a href="https://www.linkedin.com/in/lei-dai-52306515" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-slate-900 group-hover:text-white transition-all hover:text-indigo-500 group-hover:hover:text-indigo-400">
                        <Linkedin className="w-4 h-4" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">LinkedIn</span>
                      </a>
                      <a href="mailto:dailei0118@gmail.com" className="flex items-center space-x-3 text-slate-900 group-hover:text-white transition-all hover:text-indigo-500 group-hover:hover:text-indigo-400">
                        <Mail className="w-4 h-4" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Contact</span>
                      </a>
                    </div>
                  </div>

                  <div className="space-y-8 mb-12 max-w-4xl">
                    <p className="text-xl text-slate-600 group-hover:text-slate-300 leading-relaxed font-serif italic">
                      {lang === 'en'
                        ? "Gloria Dai is a veteran finance and management professional with over two decades of extensive experience within major multinational corporations. As a Principal at Kunzi Investment, she masterfully orchestrates business transformations, leveraging her deep-seated expertise in high-level financial governance and complex operational restructuring."
                        : "Gloria Dai 是一位资深的财务与管理专家，在主要的跨国公司拥有超过二十年的广泛经验。作为鲲梓投资的合伙人，她凭借在高级财务治理和复杂运营重组方面的深厚专业知识，熟练地策划企业转型。"}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-8 bg-slate-50 group-hover:bg-white/5 border border-slate-100 group-hover:border-white/10 rounded-sm">
                         <h5 className="text-[10px] font-bold uppercase tracking-widest text-indigo-500 mb-4">{lang === 'en' ? 'MNC Leadership' : '跨国企业领导力'}</h5>
                         <p className="text-xs text-slate-500 group-hover:text-slate-400 leading-relaxed">
                           {lang === 'en' 
                            ? "Senior leadership at Michelin (China), Fiat (China), Syngenta, Yum! Restaurants, Budweiser, and Deloitte."
                            : "曾在米其林（中国）、菲亚特（中国）、先正达、百胜餐饮、百威和德勤担任高级管理职务。"}
                         </p>
                      </div>
                      <div className="p-8 bg-slate-50 group-hover:bg-white/5 border border-slate-100 group-hover:border-white/10 rounded-sm">
                         <h5 className="text-[10px] font-bold uppercase tracking-widest text-indigo-500 mb-4">{lang === 'en' ? 'Transformation' : '企业转型'}</h5>
                         <p className="text-xs text-slate-500 group-hover:text-slate-400 leading-relaxed">
                           {lang === 'en'
                            ? "Spearheaded the 'Michelin Efficiency Way' framework and led strategic PMO initiatives for cross-border e-commerce giants."
                            : "主导了“米其林效率之路”框架，并为跨境电商巨头领导了战略项目管理办公室 (PMO) 计划。"}
                         </p>
                      </div>
                      <div className="p-8 bg-slate-50 group-hover:bg-white/5 border border-slate-100 group-hover:border-white/10 rounded-sm">
                         <h5 className="text-[10px] font-bold uppercase tracking-widest text-indigo-500 mb-4">{lang === 'en' ? 'Finance & Compliance' : '财务与合规'}</h5>
                         <p className="text-xs text-slate-500 group-hover:text-slate-400 leading-relaxed">
                           {lang === 'en'
                            ? "Expert in SOX compliance, treasury optimization, and capital structure. Managed annual FX hedging volumes of $350M+."
                            : "精通 SOX 合规、财务优化和资本结构。管理过超过 3.5 亿美元的年度外汇对冲规模。"}
                         </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8 pt-8 border-t border-slate-100 group-hover:border-white/10 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                    <span>SFEU Alumna</span>
                    <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
                    <span>AMAC Fund Qualified</span>
                    <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
                    <span>20+ Years Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
