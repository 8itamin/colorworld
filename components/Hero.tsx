import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-brand-light to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-32 lg:pb-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary font-bold text-sm mb-6">
              <Star size={16} className="mr-2 fill-current" />
              Rated #1 for Educational Fun
            </div>
            <h1 className="text-4xl tracking-tight font-display font-extrabold text-brand-dark sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
              Spark Creativity with <span className="text-brand-primary">High-Quality</span> Coloring Books
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Discover our collection of educational and fun coloring books for kids. 
              Printed on safe, eco-friendly paper designed to develop fine motor skills and imagination.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-4">
              <a href="#products" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-brand-primary hover:bg-red-500 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Shop Now
                <ArrowRight className="ml-2 -mr-1" size={20} />
              </a>
              <a href="#custom" className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-dark text-lg font-bold rounded-full text-brand-dark bg-transparent hover:bg-brand-dark hover:text-white transition-all">
                Bulk & Custom Orders
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              ✓ Fast Worldwide Delivery &nbsp; • &nbsp; ✓ 100% Child-Safe Materials
            </p>
          </div>

          {/* Hero Image */}
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-3xl shadow-2xl lg:max-w-md overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                className="w-full h-full object-cover"
                src="https://picsum.photos/800/1000?random=1"
                alt="Happy child coloring a book"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-display font-bold text-xl">"My daughter loves the animals edition!"</p>
                <p className="text-sm opacity-90 mt-1">- Sarah J., Happy Mom</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-brand-yellow rounded-full opacity-50 blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-brand-secondary rounded-full opacity-50 blur-2xl animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;