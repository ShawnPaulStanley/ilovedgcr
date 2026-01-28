import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Installation } from './components/Installation';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-brand-yellow selection:text-gray-900">
      <Hero />
      <main>
        <About />
        <Features />
        <Installation />
      </main>
      <Footer />
    </div>
  );
};

export default App;