import React, { useState, useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';
import { Search, Filter } from 'lucide-react';

// Mock Data
const MOCK_PRODUCTS: Product[] = [
  { id: '1', title: 'Веселые Животные', description: 'Набор из 20 раскрасок с милыми лесными жителями.', price: 199, category: 'animals', imageUrl: 'https://picsum.photos/seed/p1/500/600', rating: 4.8, reviewsCount: 120, isDigital: true },
  { id: '2', title: 'Космическое Путешествие', description: 'Ракеты, планеты и пришельцы для юных астронавтов.', price: 249, category: 'educational', imageUrl: 'https://picsum.photos/seed/p2/500/600', rating: 4.9, reviewsCount: 85, isDigital: true },
  { id: '3', title: 'Волшебные Феи', description: 'Сказочный мир фей и эльфов. Много мелких деталей.', price: 199, category: 'fantasy', imageUrl: 'https://picsum.photos/seed/p3/500/600', rating: 4.7, reviewsCount: 200, isDigital: true },
  { id: '4', title: 'Суперкары', description: 'Быстрые машины и гоночные трассы.', price: 150, category: 'vehicles', imageUrl: 'https://picsum.photos/seed/p4/500/600', rating: 4.6, reviewsCount: 50, isDigital: true },
  { id: '5', title: 'Подводный Мир', description: 'Рыбки, кораллы и затонувшие сокровища.', price: 199, category: 'animals', imageUrl: 'https://picsum.photos/seed/p5/500/600', rating: 4.8, reviewsCount: 90, isDigital: true },
  { id: '6', title: 'Новогоднее Чудо', description: 'Дед Мороз, елка и подарки. Праздничное настроение.', price: 99, category: 'seasonal', imageUrl: 'https://picsum.photos/seed/p6/500/600', rating: 5.0, reviewsCount: 300, isDigital: true },
  { id: '7', title: 'Динозавры Юрского Периода', description: 'Реалистичные динозавры для любителей истории.', price: 299, category: 'educational', imageUrl: 'https://picsum.photos/seed/p7/500/600', rating: 4.9, reviewsCount: 150, isDigital: true },
  { id: '8', title: 'Городская Жизнь', description: 'Дома, улицы и профессии.', price: 150, category: 'educational', imageUrl: 'https://picsum.photos/seed/p8/500/600', rating: 4.5, reviewsCount: 40, isDigital: true },
];

interface CatalogProps {
  onAddToCart: (product: Product) => void;
}

export const Catalog: React.FC<CatalogProps> = ({ onAddToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Все' },
    { id: 'animals', label: 'Животные' },
    { id: 'fantasy', label: 'Фэнтези' },
    { id: 'vehicles', label: 'Транспорт' },
    { id: 'educational', label: 'Обучающие' },
    { id: 'seasonal', label: 'Праздники' },
  ];

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Каталог Раскрасок</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Выберите идеальный набор для вашего ребенка. Все раскраски доступны в формате PDF для мгновенного скачивания.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-10">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    selectedCategory === cat.id 
                      ? 'bg-brand-600 text-white shadow-md shadow-brand-200' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-72">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Поиск раскрасок..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-xl leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 rounded-full mb-4 text-slate-400">
              <Filter size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Ничего не найдено</h3>
            <p className="text-slate-500">Попробуйте изменить параметры поиска или категорию.</p>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedCategory('all');}}
              className="mt-6 text-brand-600 font-bold hover:underline"
            >
              Сбросить фильтры
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
