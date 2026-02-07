import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-brand-500 text-white p-1.5 rounded-lg">
                <Palette size={24} />
              </div>
              <span className="text-2xl font-extrabold tracking-tight">Color<span className="text-brand-500">Joy</span></span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Мы помогаем детям развивать творческие способности через качественные и интересные раскраски.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Магазин</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link to="/catalog" className="hover:text-brand-400 transition-colors">Все раскраски</Link></li>
              <li><Link to="/catalog?category=animals" className="hover:text-brand-400 transition-colors">Животные</Link></li>
              <li><Link to="/catalog?category=educational" className="hover:text-brand-400 transition-colors">Обучающие</Link></li>
              <li><Link to="/ai-generator" className="hover:text-brand-400 transition-colors">AI Генератор</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-6">Помощь</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Как скачать?</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Лицензия</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Возврат средств</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Контакты</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Рассылка</h4>
            <p className="text-slate-400 text-sm mb-4">Получайте одну бесплатную раскраску каждую неделю!</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-brand-500 text-sm"
              />
              <button className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-2 px-4 rounded-lg transition-colors text-sm">
                Подписаться
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© 2024 ColorJoy. Все права защищены.</p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
