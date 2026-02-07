import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Palette, Sparkles } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  toggleCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, toggleCart }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path 
    ? 'text-brand-600 font-bold' 
    : 'text-slate-600 hover:text-brand-600 font-medium';

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand-500 text-white p-2 rounded-xl group-hover:rotate-12 transition-transform">
              <Palette size={24} />
            </div>
            <span className="text-2xl font-black text-slate-900 tracking-tight">
              Color<span className="text-brand-500">Joy</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link to="/" className={isActive('/')}>Главная</Link>
            <Link to="/catalog" className={isActive('/catalog')}>Каталог</Link>
            <Link to="/ai-generator" className={`flex items-center gap-1.5 ${isActive('/ai-generator')}`}>
              <Sparkles size={18} className="text-accent-500" />
              AI Раскраска
            </Link>
            <Link to="/about" className={isActive('/about')}>О нас</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleCart}
              className="relative p-3 text-slate-700 hover:bg-slate-100 rounded-2xl transition-all active:scale-90"
              aria-label="Корзина"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute top-1.5 right-1.5 inline-flex items-center justify-center w-5 h-5 text-[10px] font-black leading-none text-white bg-brand-600 rounded-full ring-2 ring-white">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button 
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 animate-fade-in-up">
          <div className="px-4 pt-4 pb-8 space-y-2">
            <Link to="/" className="block px-4 py-3 rounded-xl text-lg font-bold text-slate-700 hover:bg-brand-50 hover:text-brand-600" onClick={() => setIsMenuOpen(false)}>Главная</Link>
            <Link to="/catalog" className="block px-4 py-3 rounded-xl text-lg font-bold text-slate-700 hover:bg-brand-50 hover:text-brand-600" onClick={() => setIsMenuOpen(false)}>Каталог</Link>
            <Link to="/ai-generator" className="block px-4 py-3 rounded-xl text-lg font-bold text-slate-700 hover:bg-brand-50 hover:text-brand-600" onClick={() => setIsMenuOpen(false)}>AI Генератор</Link>
            <Link to="/about" className="block px-4 py-3 rounded-xl text-lg font-bold text-slate-700 hover:bg-brand-50 hover:text-brand-600" onClick={() => setIsMenuOpen(false)}>О нас</Link>
          </div>
        </div>
      )}
    </header>
  );
};
