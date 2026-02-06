import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import AboutSection from './components/AboutSection';
import CustomOrders from './components/CustomOrders';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <ProductShowcase />
        <AboutSection />
        <CustomOrders />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default App;