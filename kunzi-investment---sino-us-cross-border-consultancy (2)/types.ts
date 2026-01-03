
export type Language = 'en' | 'zh';

export interface ServiceItem {
  id: string;
  icon: string;
  title: { en: string; zh: string };
  description: { en: string; zh: string };
  details: { en: string[]; zh: string[] };
}

export interface NavItem {
  label: { en: string; zh: string };
  href: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
