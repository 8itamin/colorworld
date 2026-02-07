import React from 'react';
import { Star, ShoppingBag, Download } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col h-full">
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
        <img 
          src={product.imageUrl} 
          alt={product.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {product.isDigital && (
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded-md text-slate-700 flex items-center gap-1 shadow-sm">
            <Download size={12} /> PDF
          </div>
        )}
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-semibold text-brand-500 uppercase tracking-wider">{product.category}</span>
          <div className="flex items-center gap-1 text-accent-500">
            <Star size={14} fill="currentColor" />
            <span className="text-xs font-bold text-slate-700">{product.rating}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight group-hover:text-brand-600 transition-colors">
          {product.title}
        </h3>
        
        <p className="text-slate-500 text-sm mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
          <span className="text-xl font-extrabold text-slate-900">
            {product.price === 0 ? 'Бесплатно' : `${product.price} ₽`}
          </span>
          
          <button 
            onClick={() => onAddToCart(product)}
            className="bg-slate-900 hover:bg-brand-600 text-white p-2.5 rounded-xl transition-colors shadow-lg shadow-slate-200 hover:shadow-brand-200 active:scale-95"
            aria-label="Добавить в корзину"
          >
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
