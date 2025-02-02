
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyB3XymcwIPn6FR20hwulCFGujy36MZLBIY");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

export async function generateAIResponse(prompt) {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error('Error generating AI response:', error);
    throw error;
  }
}

