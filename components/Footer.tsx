import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center mb-4">
              <span className="font-display text-2xl font-bold text-brand-primary">Color</span>
              <span className="font-display text-2xl font-bold text-brand-secondary">World</span>
            </div>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Inspiring creativity in children worldwide with premium, eco-friendly coloring books and educational activities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-brand-dark mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-brand-primary transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Educational Books</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Activity Packs</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-brand-dark mb-4">Support</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-brand-dark mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-500">
              <li>123 Creative Lane</li>
              <li>Artville, CA 90210</li>
              <li>United States</li>
              <li className="pt-2">hello@colorworld.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        {/* SEO Keywords Block (Subtle) */}
        <div className="border-t border-gray-100 pt-8 pb-8">
          <p className="text-xs text-gray-400 text-center leading-relaxed">
            Popular Searches: Children's Coloring Books | Kids Coloring Pages | Educational Activity Books | Wholesale Coloring Books | Custom Coloring Book Printing | Eco-Friendly Kids Books | Toddler Coloring Books | Mandala Coloring for Kids
          </p>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} ColorWorld Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-500">
            <a href="#" className="hover:text-brand-dark">Privacy Policy</a>
            <a href="#" className="hover:text-brand-dark">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;