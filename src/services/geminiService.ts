import { GoogleGenAI } from '@google/genai';

// Инициализация клиента Gemini
const ai = new GoogleGenAI({
  apiKey: process.env.API_KEY || '',
  vertexai: true
});

export const generateColoringPage = async (prompt: string): Promise<string> => {
  if (!process.env.API_KEY) {
    throw new Error("API Key is missing");
  }

  try {
    const enhancedPrompt = `
      A clean, black and white line art coloring page for children. 
      Subject: ${prompt}. 
      White background, thick distinct lines, no shading, no grayscale, high contrast, vector style illustration, simple shapes for easy coloring.
    `;

    const response = await ai.models.generateImages({
      model: 'imagen-4.0-generate-001',
      prompt: enhancedPrompt,
      config: {
        numberOfImages: 1,
        outputMimeType: 'image/jpeg',
        aspectRatio: '1:1',
      },
    });

    if (response.generatedImages && response.generatedImages.length > 0) {
      const base64ImageBytes = response.generatedImages[0].image.imageBytes;
      return `data:image/jpeg;base64,${base64ImageBytes}`;
    }
    
    throw new Error("Изображение не было создано");
  } catch (error) {
    console.error("Ошибка генерации:", error);
    throw error;
  }
};
