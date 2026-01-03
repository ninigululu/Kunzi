
import React from 'react';
import { Language } from '../types';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactProps {
  lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-indigo-600 uppercase mb-3">
              {lang === 'en' ? 'Get In Touch' : '联系我们'}
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-8">
              {lang === 'en' ? 'Ready to Expand Your Horizon?' : '准备好拓展您的商业版图吗？'}
            </h3>
            
            <p className="text-lg text-slate-600 mb-12">
              {lang === 'en' 
                ? 'Contact us today for a confidential consultation with our senior advisors.'
                : '请即刻联系我们，与我们的资深顾问进行一对一的机密咨询。'}
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="p-3 bg-indigo-50 rounded-xl mr-4">
                  <Mail className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{lang === 'en' ? 'Email' : '电子邮件'}</h4>
                  <p className="text-slate-600">gloria.dai@kunziinv.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-indigo-50 rounded-xl mr-4">
                  <Phone className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{lang === 'en' ? 'Phone' : '电话'}</h4>
                  <p className="text-slate-600">(949) 775-7581</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-indigo-50 rounded-xl mr-4">
                  <MapPin className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{lang === 'en' ? 'Headquarters' : '总部地址'}</h4>
                  <p className="text-slate-600">
                    {lang === 'en' 
                      ? 'Irvine, California, US' 
                      : '美国加州尔湾'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                    {lang === 'en' ? 'Full Name' : '姓名'}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
                    placeholder={lang === 'en' ? 'John Doe' : '您的姓名'}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                    {lang === 'en' ? 'Company' : '公司名称'}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
                    placeholder={lang === 'en' ? 'Acme Corp' : '公司名称'}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                  {lang === 'en' ? 'Email Address' : '邮箱地址'}
                </label>
                <input
                  type="email"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
                  placeholder="name@company.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                  {lang === 'en' ? 'Inquiry Type' : '咨询类型'}
                </label>
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 transition-all outline-none appearance-none">
                  <option>{lang === 'en' ? 'Market Entry' : '市场准入'}</option>
                  <option>{lang === 'en' ? 'M&A / Investment' : '并购/投资'}</option>
                  <option>{lang === 'en' ? 'Compliance Advisory' : '合规咨询'}</option>
                  <option>{lang === 'en' ? 'Others' : '其他'}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                  {lang === 'en' ? 'Message' : '咨询内容'}
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
                  placeholder={lang === 'en' ? 'How can we help you?' : '请描述您的具体需求'}
                ></textarea>
              </div>

              <button className="w-full bg-indigo-900 text-white font-bold py-4 rounded-xl hover:bg-indigo-800 transition-all shadow-lg flex items-center justify-center space-x-2">
                <Send className="w-5 h-5" />
                <span>{lang === 'en' ? 'Send Inquiry' : '发送咨询'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
