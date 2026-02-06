import React from 'react';
import { ShieldCheck, Leaf, Brain, Truck, Palette, Heart } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Safe & Eco-Friendly",
    description: "We use soy-based inks and FSC-certified paper. 100% non-toxic and safe for children of all ages.",
    icon: <Leaf className="w-8 h-8 text-green-500" />,
  },
  {
    title: "Educational Benefits",
    description: "Designed by educators to enhance fine motor skills, color recognition, and creative thinking.",
    icon: <Brain className="w-8 h-8 text-brand-secondary" />,
  },
  {
    title: "Premium Paper Quality",
    description: "Thick, bleed-resistant pages perfect for markers, crayons, and colored pencils.",
    icon: <ShieldCheck className="w-8 h-8 text-brand-primary" />,
  },
  {
    title: "Diverse Themes",
    description: "From space adventures to underwater worlds, we have themes that spark every child's interest.",
    icon: <Palette className="w-8 h-8 text-purple-500" />,
  },
  {
    title: "Fast Worldwide Delivery",
    description: "Quick shipping options to get creativity into your hands as soon as possible.",
    icon: <Truck className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Made with Love",
    description: "Family-owned business committed to spreading joy and creativity to families everywhere.",
    icon: <Heart className="w-8 h-8 text-brand-primary" />,
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-secondary font-bold tracking-wide uppercase text-sm mb-2">Why Choose Us</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-4">
            More Than Just a Coloring Book
          </h3>
          <p className="text-lg text-gray-600">
            We combine fun with quality. Discover why parents and teachers trust our products for their little artists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-brand-light rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col items-start"
            >
              <div className="bg-white p-3 rounded-xl shadow-sm mb-6">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-3 font-display">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;