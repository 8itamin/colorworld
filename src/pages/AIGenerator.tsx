import React, { useState } from 'react';
import { Sparkles, Download, RefreshCw, AlertCircle, Loader2 } from 'lucide-react';
import { generateColoringPage } from '../services/geminiService';

export const AIGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsGenerating(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const imageUrl = await generateColoringPage(prompt);
      setGeneratedImage(imageUrl);
    } catch (err) {
      setError('Не удалось создать изображение. Пожалуйста, попробуйте еще раз или измените описание.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-brand-100 text-brand-600 rounded-2xl mb-4">
            <Sparkles size={32} />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">AI Художник</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Опишите, что хочет раскрасить ваш ребенок, и наш искусственный интеллект создаст уникальную раскраску за несколько секунд.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="p-8 md:p-12">
            
            {/* Input Form */}
            <form onSubmit={handleGenerate} className="mb-10">
              <label htmlFor="prompt" className="block text-sm font-bold text-slate-700 mb-2">
                Что нарисовать?
              </label>
              <div className="relative">
                <textarea
                  id="prompt"
                  rows={3}
                  className="block w-full rounded-2xl border-slate-200 bg-slate-50 p-4 text-slate-900 focus:border-brand-500 focus:ring-brand-500 sm:text-lg resize-none transition-shadow shadow-inner"
                  placeholder="Например: Милый котенок играет с клубком шерсти, простой стиль..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  disabled={isGenerating}
                />
                <button
                  type="submit"
                  disabled={isGenerating || !prompt.trim()}
                  className="absolute bottom-3 right-3 inline-flex items-center px-6 py-2 border border-transparent text-base font-bold rounded-xl shadow-sm text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                      Рисуем...
                    </>
                  ) : (
                    <>
                      <Sparkles className="-ml-1 mr-2 h-5 w-5" />
                      Создать
                    </>
                  )}
                </button>
              </div>
              <p className="mt-2 text-xs text-slate-400">
                Совет: Используйте простые описания. ИИ лучше всего рисует животных, транспорт и сказочных персонажей.
              </p>
            </form>

            {/* Error State */}
            {error && (
              <div className="rounded-xl bg-red-50 p-4 mb-8 flex items-start gap-3">
                <AlertCircle className="text-red-500 mt-0.5" size={20} />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            {/* Result Area */}
            <div className="border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50 min-h-[400px] flex flex-col items-center justify-center relative overflow-hidden">
              {isGenerating ? (
                <div className="text-center p-8">
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <div className="absolute inset-0 border-4 border-slate-200 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-brand-500 rounded-full border-t-transparent animate-spin"></div>
                    <Sparkles className="absolute inset-0 m-auto text-brand-500 animate-pulse" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Создаем магию...</h3>
                  <p className="text-slate-500">Это займет около 10-15 секунд</p>
                </div>
              ) : generatedImage ? (
                <div className="w-full h-full flex flex-col items-center p-4">
                  <img 
                    src={generatedImage} 
                    alt="Generated coloring page" 
                    className="max-h-[500px] w-auto object-contain rounded-lg shadow-lg bg-white mb-6"
                  />
                  <div className="flex gap-4">
                    <a 
                      href={generatedImage} 
                      download="coloring-page.jpg"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-bold rounded-xl shadow-sm text-white bg-green-600 hover:bg-green-700 transition-all"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Скачать
                    </a>
                    <button 
                      onClick={() => setGeneratedImage(null)}
                      className="inline-flex items-center px-6 py-3 border border-slate-300 text-base font-bold rounded-xl shadow-sm text-slate-700 bg-white hover:bg-slate-50 transition-all"
                    >
                      <RefreshCw className="mr-2 h-5 w-5" />
                      Создать еще
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center p-8 max-w-sm">
                  <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                    <Sparkles size={40} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-700 mb-2">Здесь появится ваша раскраска</h3>
                  <p className="text-slate-500 text-sm">
                    Результат будет черно-белым, готовым к печати на листе А4.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
