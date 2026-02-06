import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Image Grid */}
          <div className="relative mb-12 lg:mb-0">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://picsum.photos/400/500?random=20" 
                alt="Kids drawing together" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8"
              />
              <img 
                src="https://picsum.photos/400/500?random=21" 
                alt="Close up of coloring book" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            {/* Decorative blob */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-secondary/5 rounded-full -z-10 blur-3xl"></div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-brand-primary font-bold tracking-wide uppercase text-sm mb-2">About ColorWorld</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-6">
              Our Mission: Inspiring the Next Generation of Artists
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At ColorWorld, we believe that every child is an artist. Founded by a team of educators and designers, our mission is to provide high-quality, safe, and engaging coloring books that foster creativity and development.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We are committed to sustainability. That's why all our books are printed on recycled, FSC-certified paper using soy-based inks, ensuring a safe experience for your little ones and a healthier planet for their future.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-brand-secondary mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-brand-dark">Expertly Designed</h4>
                  <p className="text-gray-500">Created in collaboration with child development specialists.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-brand-secondary mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-brand-dark">Community Focused</h4>
                  <p className="text-gray-500">We donate 1 book for every 10 sold to local schools.</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a href="#about" className="text-brand-primary font-bold hover:text-brand-dark transition-colors border-b-2 border-brand-primary pb-1">
                Read Our Full Story
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;