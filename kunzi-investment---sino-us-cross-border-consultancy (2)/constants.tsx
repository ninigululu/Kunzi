
import React from 'react';
import { NavItem, ServiceItem } from './types';
import { Globe, Briefcase, TrendingUp, ShieldCheck, MapPin, BarChart3 } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: { en: 'Home', zh: '首页' }, href: '#home' },
  { label: { en: 'Services', zh: '服务项目' }, href: '#services' },
  { label: { en: 'About Us', zh: '关于我们' }, href: '#about' },
  { label: { en: 'Insights', zh: '市场洞察' }, href: '#insights' },
  { label: { en: 'Contact', zh: '联系我们' }, href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'market-entry',
    icon: 'Globe',
    title: { en: 'US Market Entry', zh: '美国市场准入' },
    description: { 
      en: 'Strategic guidance for Chinese enterprises expanding into North American markets.', 
      zh: '为中国企业进军北美市场提供战略导向与全方位支持。' 
    },
    details: {
      en: ['Regulatory Compliance', 'Legal Entity Formation', 'Market Research', 'Operational Setup'],
      zh: ['监管合规', '法律实体设立', '市场调研', '运营搭建']
    }
  },
  {
    id: 'ma-advisory',
    icon: 'Briefcase',
    title: { en: 'M&A Advisory', zh: '并购顾问' },
    description: { 
      en: 'Full-cycle cross-border merger and acquisition support and deal structuring.', 
      zh: '全周期跨国并购支持、交易结构设计及投后整合建议。' 
    },
    details: {
      en: ['Target Identification', 'Due Diligence', 'Valuation Analysis', 'Negotiation Support'],
      zh: ['标的筛选', '尽职调查', '估值分析', '谈判支持']
    }
  },
  {
    id: 'capital-raising',
    icon: 'TrendingUp',
    title: { en: 'Capital Raising', zh: '资本募集' },
    description: { 
      en: 'Connecting global capital with high-potential cross-border opportunities.', 
      zh: '连接全球资本与具有高增长潜力的跨国投资机会。' 
    },
    details: {
      en: ['Private Equity', 'Venture Capital', 'Fundraising Strategy', 'Investor Relations'],
      zh: ['私募股权', '风险投资', '募资策略', '投资者关系管理']
    }
  }
];

export const SERVICE_ICONS: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-8 h-8 text-indigo-700" />,
  Briefcase: <Briefcase className="w-8 h-8 text-indigo-700" />,
  TrendingUp: <TrendingUp className="w-8 h-8 text-indigo-700" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-indigo-700" />,
  MapPin: <MapPin className="w-8 h-8 text-indigo-700" />,
  BarChart3: <BarChart3 className="w-8 h-8 text-indigo-700" />,
};
