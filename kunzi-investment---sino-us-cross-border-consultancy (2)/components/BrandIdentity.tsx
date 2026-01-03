
import React, { useState, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Language } from '../types';
import { Palette, Sparkles, Loader2, Download, Image as ImageIcon, FileType } from 'lucide-react';
import { Logo } from './Logo';

interface BrandIdentityProps {
  lang: Language;
}

export const BrandIdentity: React.FC<BrandIdentityProps> = ({ lang }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [concepts, setConcepts] = useState<string[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateLogoConcepts = async () => {
    setIsGenerating(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    try {
      const prompt = `A professional, ultra-modern abstract logo for an elite investment consultancy firm. 
      The design must NOT contain any letters, text, or alphabetical characters. 
      The concept should be purely symbolic, featuring fluid geometric shapes that represent a 'bridge' or a 'soaring creature' (like a giant fish or bird). 
      High-end financial luxury aesthetic. Use a palette of deep navy indigo, metallic gold, and soft platinum. 
      Clean lines, minimalist, vector style, white studio background. Professional corporate identity. No typography allowed.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: [{ parts: [{ text: prompt }] }],
        config: {
          imageConfig: {
            aspectRatio: "1:1",
          }
        },
      });

      const newConcepts: string[] = [];
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          newConcepts.push(`data:${part.inlineData.mimeType};base64,${part.inlineData.data}`);
        }
      }

      if (newConcepts.length > 0) {
        setConcepts(prev => [...newConcepts, ...prev].slice(0, 4));
      }
    } catch (error) {
      console.error("Failed to generate brand concept:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadLogo = (variant: 'dark' | 'light') => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set high resolution for print (e.g., 2000x2000)
    const size = 2000;
    canvas.width = size;
    canvas.height = size;

    // Background
    ctx.fillStyle = variant === 'dark' ? '#0A0C10' : '#FFFFFF';
    ctx.fillRect(0, 0, size, size);

    // Get the SVG data from a temporary div
    const tempDiv = document.createElement('div');
    const svgString = `
      <svg width="${size}" height="${size}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="${variant === 'dark' ? '#0A0C10' : '#FFFFFF'}" />
        <path d="M15 50L50 15V85L15 50Z" fill="${variant === 'dark' ? '#FFFFFF' : '#0F172A'}" />
        <path d="M85 50L50 28V72L85 50Z" fill="${variant === 'dark' ? '#6366F1' : '#6366F1'}" />
        <path d="M50 46L65 50L50 54V46Z" fill="${variant === 'dark' ? '#FFFFFF' : '#0F172A'}" />
      </svg>
    `;

    const img = new Image();
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      
      // Also draw the text for the JPG version
      ctx.fillStyle = variant === 'dark' ? '#FFFFFF' : '#0F172A';
      ctx.font = 'bold 120px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('KUNZI', size / 2, size - 300);
      
      ctx.fillStyle = '#6366F1';
      ctx.font = 'bold 40px "Plus Jakarta Sans", sans-serif';
      ctx.letterSpacing = '15px';
      ctx.fillText('CONSULTANCY', size / 2, size - 220);

      const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
      const link = document.createElement('a');
      link.download = `kunzi-logo-${variant}.jpg`;
      link.href = dataUrl;
      link.click();
      
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  return (
    <section className="py-24 bg-indigo-950 text-white overflow-hidden">
      <canvas ref={canvasRef} className="hidden" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Brand Philosophy */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-indigo-300" />
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-200">
                {lang === 'en' ? 'Identity & Vision' : '品牌标识与愿景'}
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 tracking-tight">
              {lang === 'en' ? 'The Essence of Kunzi' : '鲲梓品牌精髓'}
            </h2>
            <p className="text-xl text-indigo-100/80 mb-12 leading-relaxed font-light">
              {lang === 'en' 
                ? "Our visual identity is a synthesis of traditional wisdom and modern precision. The sharp geometric form represents the 'Kun'—a legendary creature that transforms and bridges realms—mirroring our role in Sino-US strategic expansion." 
                : "我们的视觉识别是传统智慧与现代精准的结合。锐利的几何形态代表了“鲲”——一种能够转化并跨越领域的传奇生物——这正是我们在中美战略扩张中所扮演角色的写照。"}
            </p>

            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400">
                {lang === 'en' ? 'Brand Asset Center' : '品牌资产中心'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => downloadLogo('dark')}
                  className="flex items-center justify-between bg-black/40 border border-white/10 p-6 rounded-xl hover:bg-black/60 transition-all group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                       <Logo variant="dark" showText={false} className="h-6" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-300">Executive Dark</p>
                      <p className="text-xs opacity-60">High-Res JPG</p>
                    </div>
                  </div>
                  <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </button>

                <button
                  onClick={() => downloadLogo('light')}
                  className="flex items-center justify-between bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-indigo-600 rounded flex items-center justify-center">
                       <Logo variant="light" showText={false} className="h-6" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-300">Minimalist Light</p>
                      <p className="text-xs opacity-60">High-Res JPG</p>
                    </div>
                  </div>
                  <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* AI Concept Gallery */}
          <div className="relative">
             <div className="absolute -inset-4 bg-indigo-500/10 blur-3xl rounded-full"></div>
             <div className="relative z-10">
                <div className="mb-8 flex items-center justify-between">
                   <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/60">
                     {lang === 'en' ? 'AI Concept Explorations' : 'AI 概念探索'}
                   </h3>
                   <button
                    onClick={generateLogoConcepts}
                    disabled={isGenerating}
                    className="text-[10px] font-bold uppercase tracking-widest text-indigo-300 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    {isGenerating ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
                    <span>{lang === 'en' ? 'New Concepts' : '刷新概念'}</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {concepts.length > 0 ? (
                    concepts.map((src, idx) => (
                      <div key={idx} className="aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5 animate-in zoom-in-95 duration-500 group relative">
                        <img src={src} alt={`Concept ${idx}`} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                           <button className="p-3 bg-white text-black rounded-full">
                              <Download className="w-4 h-4" />
                           </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-2 aspect-video bg-white/5 rounded-3xl border border-dashed border-white/20 flex flex-col items-center justify-center text-indigo-200">
                      <Palette className="w-12 h-12 opacity-20 mb-4" />
                      <p className="text-xs font-medium opacity-40">
                        {lang === 'en' ? 'Click "New Concepts" to envision the future' : '点击“刷新概念”以展望未来'}
                      </p>
                    </div>
                  )}
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
