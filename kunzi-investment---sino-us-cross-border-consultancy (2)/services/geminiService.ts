
import { GoogleGenAI } from "@google/genai";
import { ChatMessage, Language } from "../types";

// Always use const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are a senior cross-border investment advisor at Kunzi Investment (kunziinv.com).
Your expertise is in Sino-US business expansion, M&A, regulatory compliance (CFIUS, export controls), and market entry.
Maintain a professional, executive, and insightful tone.
Be concise but thorough. If asked about specific laws, mention you are an advisor and legal counsel should be consulted for final verification.
Answer in the language used by the user (English or Simplified Chinese).
Your goal is to help potential clients understand the landscape of Sino-US investment.
`;

export async function getAdvisorResponse(messages: ChatMessage[], lang: Language): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }]
      })),
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || (lang === 'en' ? "I apologize, I'm having trouble connecting right now." : "抱歉，我现在连接出现了一些问题。");
  } catch (error) {
    console.error("Gemini API Error:", error);
    return lang === 'en' ? "I encountered an error. Please try again later." : "出错了，请稍后再试。";
  }
}
