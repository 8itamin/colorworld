import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Printer, Sparkles, Heart, Star } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-brand-50 overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-100 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent-100 blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-brand-100 mb-8 animate-fade-in-up">
              <Sparkles size={16} className="text-accent-500" />
              <span className="text-sm font-bold text-slate-600">Новинка: Создай раскраску с ИИ</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              Развивайте творчество <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent-500">
                с каждой страницей
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
              Огромная коллекция авторских раскрасок для детей всех возрастов. 
              Скачивайте мгновенно, печатайте дома или создавайте свои собственные сюжеты.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/catalog" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-brand-600 rounded-2xl hover:bg-brand-700 transition-all shadow-xl shadow-brand-200 hover:shadow-brand-300 transform hover:-translate-y-1"
              >
                Смотреть каталог
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link 
                to="/ai-generator" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-700 bg-white border-2 border-slate-200 rounded-2xl hover:border-brand-200 hover:bg-brand-50 transition-all"
              >
                Создать свою
                <Sparkles className="ml-2 text-accent-500" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits / SEO Text */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center p-6 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Printer size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Мгновенная печать</h3>
              <p className="text-slate-600">
                Покупайте цифровые версии (PDF) и печатайте их на любом домашнем принтере столько раз, сколько захотите.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100">
              <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Уникальный контент</h3>
              <p className="text-slate-600">
                Наши художники и ИИ создают эксклюзивные сюжеты, которые вы не найдете в обычных магазинах.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100">
              <div className="w-16 h-16 bg-accent-100 text-accent-600 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Развитие навыков</h3>
              <p className="text-slate-600">
                Раскрашивание развивает мелкую моторику, усидчивость и творческое мышление у детей.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Популярные категории</h2>
              <p className="text-slate-600">Самые любимые темы наших маленьких клиентов</p>
            </div>
            <Link to="/catalog" className="hidden md:flex items-center font-bold text-brand-600 hover:text-brand-700">
              Все категории <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Животные', img: 'https://picsum.photos/seed/animals/400/400', color: 'bg-green-100' },
              { name: 'Принцессы', img: 'https://picsum.photos/seed/princess/400/400', color: 'bg-pink-100' },
              { name: 'Транспорт', img: 'https://picsum.photos/seed/cars/400/400', color: 'bg-blue-100' },
              { name: 'Космос', img: 'https://picsum.photos/seed/space/400/400', color: 'bg-indigo-100' },
            ].map((cat, idx) => (
              <Link key={idx} to={`/catalog?category=${cat.name}`} className="group relative rounded-2xl overflow-hidden aspect-square shadow-md hover:shadow-xl transition-all">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <span className="text-white font-bold text-xl">{cat.name}</span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/catalog" className="inline-flex items-center font-bold text-brand-600">
              Смотреть все <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Отзывы счастливых родителей</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Анна М.", text: "Отличный сайт! Скачала раскраски с животными, дети в восторге. Качество линий супер.", stars: 5 },
              { name: "Дмитрий К.", text: "Функция генерации через ИИ просто магия. Сын попросил 'динозавра на скейте', и мы это сделали!", stars: 5 },
              { name: "Елена С.", text: "Удобно, что можно купить один раз и печатать сколько угодно. Экономия на книжках колоссальная.", stars: 4 },
            ].map((review, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl relative">
                <div className="flex text-accent-500 mb-4">
                  {/* Добавлен импорт Star для исправления ReferenceError */}
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < review.stars ? "currentColor" : "none"} className={i < review.stars ? "" : "text-slate-300"} />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-200 flex items-center justify-center text-brand-700 font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <span className="font-bold text-slate-900">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
