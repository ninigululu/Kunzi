
import React, { useState, useRef, useEffect } from 'react';
import { Language, ChatMessage } from '../types';
import { getAdvisorResponse } from '../services/geminiService';
import { Send, Minimize2, Sparkles, X } from 'lucide-react';

interface IntelligenceChatProps {
  lang: Language;
}

export const IntelligenceChat: React.FC<IntelligenceChatProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await getAdvisorResponse([...messages, userMsg], lang);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="w-[400px] h-[600px] bg-white rounded-sm shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] flex flex-col overflow-hidden border border-slate-200 animate-in slide-in-from-bottom-4 duration-300">
          {/* Sharp Modern Header */}
          <div className="bg-black p-6 flex justify-between items-center text-white">
            <div className="flex items-center space-x-3">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase">Kunzi AI</p>
                <p className="text-[10px] text-slate-400">Strategic Intelligence</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform p-1">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#FCFCFD]">
            {messages.length === 0 && (
              <div className="py-8 text-center border-b border-dashed border-slate-200">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Initial Greeting</p>
                <p className="text-sm text-slate-600 font-serif italic">
                  {lang === 'en' 
                    ? "Advanced market intelligence at your disposal. How may I assist your expansion?"
                    : "高级市场情报随时待命。我该如何协助您的业务扩张？"}
                </p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] p-4 text-sm ${
                  m.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-sm' 
                    : 'bg-white border border-slate-100 shadow-sm text-slate-800 rounded-sm'
                }`}>
                  <p className="leading-relaxed">{m.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 rounded-sm p-4 animate-pulse">
                  <div className="w-12 h-2 bg-slate-200 rounded-full"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-6 bg-white border-t border-slate-100">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={lang === 'en' ? 'Inquire about market trends...' : '咨询市场趋势...'}
                className="w-full text-sm border-none bg-slate-50 px-5 py-4 pr-12 focus:ring-1 focus:ring-indigo-500 transition-all rounded-sm outline-none"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-600 hover:text-indigo-800 disabled:opacity-30 p-2"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-black text-white px-8 py-5 rounded-sm shadow-2xl hover:bg-indigo-600 transition-all flex items-center space-x-4 group"
        >
          <Sparkles className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
          <span className="font-bold text-xs uppercase tracking-[0.2em]">
            {lang === 'en' ? 'AI Advisor' : '智能顾问'}
          </span>
        </button>
      )}
    </div>
  );
};
