import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { AIGenerator } from './pages/AIGenerator';
import { About } from './pages/About';
import { Product, CartItem } from './types';
import { X, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans">
        <Header cartCount={cartCount} toggleCart={() => setIsCartOpen(true)} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog onAddToCart={addToCart} />} />
            <Route path="/ai-generator" element={<AIGenerator />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={
              <div className="flex flex-col items-center justify-center py-32 px-4 text-center">
                <h1 className="text-6xl font-black text-slate-200 mb-4">404</h1>
                <p className="text-xl text-slate-500 mb-8">Упс! Страница куда-то спряталась.</p>
                <a href="#/" className="bg-brand-600 text-white px-8 py-3 rounded-xl font-bold">Вернуться домой</a>
              </div>
            } />
          </Routes>
        </main>

        <Footer />

        {/* Cart Sidebar */}
        {isCartOpen && (
          <div className="fixed inset-0 z-[100] overflow-hidden">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={() => setIsCartOpen(false)}></div>
            
            <div className="absolute inset-y-0 right-0 max-w-md w-full flex">
              <div className="h-full w-full bg-white shadow-2xl flex flex-col animate-slide-in-right">
                <div className="flex items-center justify-between p-6 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="text-brand-500" />
                    <h2 className="text-xl font-bold text-slate-900">Ваша корзина</h2>
                  </div>
                  <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                    <X size={24} className="text-slate-400" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                  {cart.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                      <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300">
                        <ShoppingBag size={40} />
                      </div>
                      <div>
                        <p className="text-slate-800 font-bold text-lg">Корзина пуста</p>
                        <p className="text-slate-500 text-sm">Добавьте что-нибудь интересное из каталога!</p>
                      </div>
                      <button 
                        onClick={() => setIsCartOpen(false)}
                        className="mt-4 bg-slate-900 text-white px-6 py-2 rounded-xl font-bold hover:bg-brand-600 transition-colors"
                      >
                        В каталог
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {cart.map(item => (
                        <div key={item.id} className="flex gap-4 group">
                          <div className="w-20 h-24 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
                            <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 flex flex-col justify-between py-1">
                            <div>
                              <h3 className="font-bold text-slate-800 text-sm leading-tight mb-1">{item.title}</h3>
                              <p className="text-slate-400 text-xs">Цифровой PDF</p>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-extrabold text-brand-600">{item.price} ₽</span>
                              <button 
                                onClick={() => removeFromCart(item.id)}
                                className="text-slate-300 hover:text-red-500 transition-colors p-1"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {cart.length > 0 && (
                  <div className="p-6 border-t border-slate-100 bg-slate-50">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-slate-500 font-bold">Итого к оплате:</span>
                      <span className="text-3xl font-black text-slate-900">{cartTotal} ₽</span>
                    </div>
                    <button className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-2xl shadow-xl shadow-brand-200 transition-all flex items-center justify-center gap-2 transform active:scale-95">
                      Оформить заказ <ArrowRight size={20} />
                    </button>
                    <div className="mt-4 flex items-center justify-center gap-4 opacity-50 grayscale">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-3" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-5" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Mir-logo.svg/1280px-Mir-logo.svg.png" alt="Mir" className="h-4" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
