import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="font-display text-3xl font-bold text-brand-primary">Color</span>
            <span className="font-display text-3xl font-bold text-brand-secondary">World</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#products" className="text-gray-600 hover:text-brand-primary font-semibold transition-colors">Shop Books</a>
            <a href="#about" className="text-gray-600 hover:text-brand-primary font-semibold transition-colors">About Us</a>
            <a href="#custom" className="text-gray-600 hover:text-brand-primary font-semibold transition-colors">Custom Printing</a>
            <a href="#blog" className="text-gray-600 hover:text-brand-primary font-semibold transition-colors">Blog</a>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-500 hover:text-brand-secondary transition-colors">
              <Search size={24} />
            </button>
            <button className="relative text-gray-500 hover:text-brand-secondary transition-colors">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-brand-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </button>
            <button className="bg-brand-yellow text-brand-dark font-bold py-2 px-6 rounded-full hover:bg-yellow-300 transition-colors shadow-md">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-brand-primary focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#products" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-gray-50">Shop Books</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-gray-50">About Us</a>
            <a href="#custom" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-gray-50">Custom Printing</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-gray-50">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;