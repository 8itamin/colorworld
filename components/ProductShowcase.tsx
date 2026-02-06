import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';
import { Product } from '../types';

const products: Product[] = [
  {
    id: 1,
    title: "Jungle Safari Adventure",
    price: 12.99,
    image: "https://picsum.photos/400/500?random=10",
    ageRange: "3-6 Years",
    category: "Animals",
    isNew: true
  },
  {
    id: 2,
    title: "Space Explorer Mission",
    price: 14.99,
    image: "https://picsum.photos/400/500?random=11",
    ageRange: "5-8 Years",
    category: "Educational"
  },
  {
    id: 3,
    title: "Magical Unicorn Kingdom",
    price: 12.99,
    image: "https://picsum.photos/400/500?random=12",
    ageRange: "4-8 Years",
    category: "Fantasy"
  },
  {
    id: 4,
    title: "Dino World Discovery",
    price: 13.99,
    image: "https://picsum.photos/400/500?random=13",
    ageRange: "3-7 Years",
    category: "Animals"
  }
];

const ProductShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-brand-light" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-4">
              Best-Selling Kids Coloring Pages
            </h2>
            <p className="text-lg text-gray-600">
              Explore our most popular themed coloring books, designed to engage and educate.
            </p>
          </div>
          <a href="#" className="hidden md:inline-flex items-center font-bold text-brand-primary hover:text-brand-secondary transition-colors mt-4 md:mt-0">
            View All Collections <span className="ml-2">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-200">
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-brand-yellow text-brand-dark text-xs font-bold px-3 py-1 rounded-full z-10">
                    NEW
                  </span>
                )}
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <button className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg text-brand-dark hover:text-brand-primary transform translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ShoppingBag size={20} />
                </button>
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-brand-secondary uppercase tracking-wider">{product.category}</span>
                  <div className="flex items-center text-yellow-400">
                    <Star size={14} fill="currentColor" />
                    <span className="text-gray-400 text-xs ml-1">(4.9)</span>
                  </div>
                </div>
                <h3 className="font-display font-bold text-lg text-brand-dark mb-1 group-hover:text-brand-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">Age: {product.ageRange}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-brand-dark">${product.price}</span>
                  <button className="text-sm font-bold text-brand-primary hover:underline">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#" className="inline-block px-6 py-3 border-2 border-brand-dark rounded-full font-bold text-brand-dark hover:bg-brand-dark hover:text-white transition-colors">
            View All Collections
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;