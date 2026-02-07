import React from 'react';
import { Heart, ShieldCheck, Zap, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">О проекте ColorJoy</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Мы верим, что каждый ребенок — это маленький художник. Наша миссия — дать родителям простой и доступный инструмент для развития творческого потенциала детей.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <img 
              src="https://picsum.photos/seed/kids-drawing/800/600" 
              alt="Дети рисуют" 
              className="rounded-3xl shadow-2xl"
            />
          </div>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center">
                <Heart size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Сделано с любовью</h3>
                <p className="text-slate-600">Каждая раскраска в нашем каталоге проходит тщательный отбор, чтобы быть интересной и полезной для ребенка.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                <Zap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Технологии будущего</h3>
                <p className="text-slate-600">Мы используем передовой искусственный интеллект, чтобы вы могли создать раскраску на любую тему, которую только может вообразить ваш ребенок.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Безопасность и качество</h3>
                <p className="text-slate-600">Все наши материалы безопасны, не содержат рекламы и адаптированы под разные возрастные группы.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-3xl p-8 md:p-16 text-center">
          <Users size={48} className="mx-auto text-brand-500 mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Присоединяйтесь к нашему сообществу</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Более 10,000 родителей уже выбрали ColorJoy для ежедневных творческих занятий со своими детьми.
          </p>
          <button className="bg-brand-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-200">
            Начать творить
          </button>
        </div>
      </div>
    </div>
  );
};
