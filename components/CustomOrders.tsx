import React from 'react';
import { Printer, Users, Package } from 'lucide-react';

const CustomOrders: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark text-white" id="custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-yellow font-bold tracking-wide uppercase text-sm mb-2">B2B & Wholesale</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Custom Coloring Book Printing
          </h3>
          <p className="text-lg text-gray-300">
            Looking for bulk orders for schools, events, or your own brand? We offer high-quality custom printing services with fast turnaround times.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/10">
            <div className="bg-brand-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Printer className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold mb-3">Custom Designs</h4>
            <p className="text-gray-300">Submit your own artwork or work with our designers to create a unique book.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/10">
            <div className="bg-brand-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold mb-3">Wholesale Pricing</h4>
            <p className="text-gray-300">Competitive tiered pricing for retailers, schools, and non-profit organizations.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/10">
            <div className="bg-brand-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="w-8 h-8 text-brand-dark" />
            </div>
            <h4 className="text-xl font-bold mb-3">Fast Fulfillment</h4>
            <p className="text-gray-300">Reliable worldwide shipping and logistics handling for large orders.</p>
          </div>
        </div>

        <div className="bg-brand-primary rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h4 className="text-2xl font-display font-bold mb-2">Ready to start your custom project?</h4>
            <p className="text-white/90">Get a free quote within 24 hours. No hidden fees.</p>
          </div>
          <button className="bg-white text-brand-primary font-bold py-4 px-8 rounded-full hover:bg-brand-yellow hover:text-brand-dark transition-colors shadow-lg whitespace-nowrap">
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomOrders;