import React from 'react';
import { Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-20 bg-brand-yellow/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-brand-yellow rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-brand-secondary rounded-full translate-x-1/3 translate-y-1/3 opacity-20"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-4">
              Get a Free Printable Coloring Page!
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our colorful community! Subscribe to our newsletter for exclusive discounts, new release alerts, and a free sample pack instantly.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <div className="flex-grow relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-brand-primary hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary shadow-md transition-colors"
              >
                Get Freebie
              </button>
            </form>
            <p className="mt-4 text-xs text-gray-400">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;