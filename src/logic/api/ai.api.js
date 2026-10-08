// src/logic/api/ai.api.js
const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY_HERE"; // ikkada key pettandi BOSS

export const askUdyog99AI = async (userMessage) => {
  const systemPrompt = `
  You are Udyog99.com Customer Support AI.
  You help with Jobs, Business Ideas, Government Schemes, Payments.
  RULES:
    - If user speaks Telugu, reply in Telugu (Tanglish ok)
    - If English, reply in English
    - Keep answer short 2-3 lines
    - Friendly BOSS style
    - Always helpful
  User Message: `;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: systemPrompt + userMessage }] }],
        }),
      }
    );
    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    return "Sorry BOSS, network issue! Malli try cheyyandi 🙏";
  }
};