
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { IntelligenceChat } from './components/IntelligenceChat';
import { BrandIdentity } from './components/BrandIdentity';
import { Logo } from './components/Logo';
import { Language } from './types';
import { ChevronRight, Facebook, Twitter, Linkedin, ExternalLink } from 'lucide-react';

const INSIGHTS = [
  {
    category: { en: 'Consumer Trends', zh: '消费趋势' },
    date: '2025',
    title: { en: 'The State of the US Consumer: Pulse Check', zh: '美国消费者现状：深度脉动调研' },
    desc: { en: 'Understanding evolving priorities and spending power in the North American market.', zh: '洞察北美市场不断变化的消费优先级与购买力。' },
    link: 'https://www.deloitte.com/us/en/insights/topics/economy/consumer-pulse/state-of-the-us-consumer.html',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600'
  },
  {
    category: { en: 'Regulation', zh: '监管动态' },
    date: 'Oct 2024',
    title: { en: 'SEC Intensifies Oversight of Foreign Entities in US Markets', zh: '美国证监会加强对在美上市外国公司的监管' },
    desc: { en: 'Understanding the implications of heightened oversight for cross-border capital flow.', zh: '解析监管强化对跨国资本流动的深远影响。' },
    link: 'https://investigations.cooley.com/2025/10/28/sec-intensifies-oversight-of-foreign-companies-that-participate-in-u-s-capital-markets/',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800'
  },
  {
    category: { en: 'Market Analysis', zh: '市场分析' },
    date: 'Dec 2024',
    title: { en: 'The Stall of Chinese Consumer Giants in the US', zh: '中国消费巨头在美扩张进程放缓分析' },
    desc: { en: 'Analyzing how tariffs and domestic pressures are affecting major retail pushes.', zh: '分析关税与国内压力如何影响大型零售业务的推进。' },
    link: 'https://www.reuters.com/business/retail-consumer/despite-tariffs-china-consumer-giants-push-into-us-domestic-market-stalls-2025-12-18/',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800'
  },
  {
    category: { en: 'Strategy', zh: '战略洞察' },
    date: 'Jan 2025',
    title: { en: 'Chinese Brands Expansion Roadmap for 2025', zh: '2025年中国品牌全球扩张路线图' },
    desc: { en: 'Strategic frameworks for navigating the new era of global brand building.', zh: '在新时代全球品牌建设中航行的战略框架。' },
    link: 'https://abovea.tech/chinese-brands-expansion-2025/',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800'
  },
  {
    category: { en: 'Trade Policy', zh: '贸易政策' },
    date: '2025',
    title: { en: 'US Exports vs China Demand: Navigating Tariffs', zh: '美国出口与中国需求：应对关税波动' },
    desc: { en: 'Deep dive into chemical and industrial trade dynamics and trade change forecasts.', zh: '深度探讨化工与工业贸易动态及贸易变化预测。' },
    link: 'https://elchemy.com/blogs/chemical-market/us-exports-vs-china-demand-navigating-tariffs-and-trade-changes-in-2025',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
  },
  {
    category: { en: 'Investment Climate', zh: '投资环境' },
    date: '2025',
    title: { en: '2025 Investment Climate Statements: China', zh: '2025年投资环境报告：中国篇' },
    desc: { en: 'Official overview of the changing investment landscape and structural shifts.', zh: '官方对投资环境变化及结构性转型的全面概述。' },
    link: 'https://www.state.gov/reports/2025-investment-climate-statements/china',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
  }
];

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} setLang={setLang} />
      
      <main>
        <Hero lang={lang} />
        <Services lang={lang} />
        
        {/* Insight Section */}
        <section id="insights" className="py-32 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <span className="text-[10px] font-bold tracking-[0.5em] text-indigo-600 uppercase mb-4 block">
                  {lang === 'en' ? 'Knowledge Hub' : '市场洞察'}
                </span>
                <h3 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 leading-none">
                  {lang === 'en' ? 'Cross-Border' : '全球跨境'} <br/>
                  <span className="font-serif italic font-light text-indigo-600">{lang === 'en' ? 'Perspectives' : '视野'}</span>
                </h3>
              </div>
              <div className="flex flex-col items-start md:items-end">
                <p className="text-sm text-slate-400 mb-6 font-light max-w-xs md:text-right">
                  {lang === 'en' 
                    ? 'Expert analysis on the shifting tides of Sino-US commerce and regulatory compliance.'
                    : '关于中美商业潮汐变化及监管合规的专家分析。'}
                </p>
                <a href="#" className="inline-flex items-center text-xs font-black uppercase tracking-[0.3em] text-indigo-600 group">
                  {lang === 'en' ? 'Explore Intelligence' : '探索情报库'}
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {INSIGHTS.map((insight, i) => (
                <a 
                  key={i} 
                  href={insight.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group block"
                >
                  <div className="relative overflow-hidden mb-8 aspect-[4/3] bg-slate-100 rounded-sm">
                    <img
                      src={insight.image}
                      alt={insight.title[lang]}
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="text-[10px] font-bold text-white bg-indigo-600 px-3 py-1.5 uppercase tracking-widest rounded-sm shadow-xl">
                        {insight.category[lang]}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{insight.date}</span>
                    <div className="h-px flex-1 bg-slate-100"></div>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-indigo-600 transition-colors tracking-tight">
                    {insight.title[lang]}
                  </h4>
                  
                  <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed font-light mb-6">
                    {insight.desc[lang]}
                  </p>
                  
                  <div className="flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-indigo-600 transition-colors">
                    <span>{lang === 'en' ? 'Full Article' : '阅读全文'}</span>
                    <ExternalLink className="ml-2 w-3 h-3" />
                  </div>
                </a>
              ))}
            </div>
            
            {/* Supplementary Links */}
            <div className="mt-24 pt-12 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               <a href="https://www.bea.gov/data/consumer-spending/main" target="_blank" className="flex items-center space-x-3 text-slate-400 hover:text-indigo-600 transition-colors">
                 <div className="w-1 h-8 bg-slate-100 group-hover:bg-indigo-600"></div>
                 <span className="text-[10px] font-bold uppercase tracking-widest">{lang === 'en' ? 'BEA Spending Data' : 'BEA 消费数据'}</span>
               </a>
               <a href="https://www.westrock.com/blog/the-top-retail-industry-trends-of-2025" target="_blank" className="flex items-center space-x-3 text-slate-400 hover:text-indigo-600 transition-colors">
                 <div className="w-1 h-8 bg-slate-100 group-hover:bg-indigo-600"></div>
                 <span className="text-[10px] font-bold uppercase tracking-widest">{lang === 'en' ? 'Retail Trends 2025' : '2025零售趋势'}</span>
               </a>
               <a href="https://knowledge-leader.colliers.com/nicole-larson/retails-balancing-act-what-the-first-half-of-2025-reveals-about-evolving-consumer-priorities/" target="_blank" className="flex items-center space-x-3 text-slate-400 hover:text-indigo-600 transition-colors">
                 <div className="w-1 h-8 bg-slate-100 group-hover:bg-indigo-600"></div>
                 <span className="text-[10px] font-bold uppercase tracking-widest">{lang === 'en' ? 'Consumer Priorities' : '消费者优先级'}</span>
               </a>
               <a href="https://asdonline.com/blog/retail-news/retail-trends-medium-sized-retailers/" target="_blank" className="flex items-center space-x-3 text-slate-400 hover:text-indigo-600 transition-colors">
                 <div className="w-1 h-8 bg-slate-100 group-hover:bg-indigo-600"></div>
                 <span className="text-[10px] font-bold uppercase tracking-widest">{lang === 'en' ? 'Mid-Sized Retail' : '中型零售洞察'}</span>
               </a>
            </div>
          </div>
        </section>

        <BrandIdentity lang={lang} />
        <About lang={lang} />
        <Contact lang={lang} />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="mb-8">
                <Logo variant="light" className="h-12" />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {lang === 'en' 
                  ? 'Leading the next generation of Sino-US business synergy through strategic investment and elite advisory.' 
                  : '通过战略投资与精英咨询，引领下一代中美商业协同。'}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"><Facebook className="w-5 h-5" /></a>
              </div>
            </div>

            <div>
              <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-500">
                {lang === 'en' ? 'Quick Links' : '快捷链接'}
              </h5>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a href="#services" className="hover:text-indigo-400 transition-colors">{lang === 'en' ? 'Services' : '服务项目'}</a></li>
                <li><a href="#about" className="hover:text-indigo-400 transition-colors">{lang === 'en' ? 'About Us' : '关于我们'}</a></li>
                <li><a href="#insights" className="hover:text-indigo-400 transition-colors">{lang === 'en' ? 'Market Insights' : '市场洞察'}</a></li>
                <li><a href="#contact" className="hover:text-indigo-400 transition-colors">{lang === 'en' ? 'Contact' : '联系我们'}</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-500">
                {lang === 'en' ? 'Services' : '核心业务'}
              </h5>
              <ul className="space-y-4 text-sm text-slate-400">
                <li>{lang === 'en' ? 'Sino-US Market Entry' : '中美市场准入'}</li>
                <li>{lang === 'en' ? 'Cross-border M&A' : '跨国并购'}</li>
                <li>{lang === 'en' ? 'CFIUS & Export Controls' : 'CFIUS与出口管制'}</li>
                <li>{lang === 'en' ? 'Private Equity' : '私募股权'}</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-500">
                {lang === 'en' ? 'Legal' : '法律条规'}
              </h5>
              <ul className="space-y-4 text-sm text-slate-400">
                <li>{lang === 'en' ? 'Privacy Policy' : '隐私政策'}</li>
                <li>{lang === 'en' ? 'Terms of Service' : '服务条款'}</li>
                <li>{lang === 'en' ? 'Cookie Policy' : 'Cookie政策'}</li>
                <li>{lang === 'en' ? 'Disclaimer' : '免责声明'}</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>© 2024 Kunzi Investment Group LLC. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="flex items-center"><ExternalLink className="w-3 h-3 mr-1" /> kunziinv.com</span>
            </div>
          </div>
        </div>
      </footer>

      <IntelligenceChat lang={lang} />
    </div>
  );
};

export default App;
