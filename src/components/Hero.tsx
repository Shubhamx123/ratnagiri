import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://i.imghippo.com/files/yjHY3599yd.jpeg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center text-white">
        <div className="section-container">
          <h1 className="font-merriweather text-5xl md:text-6xl font-bold mb-6">
            Preserving Konkan's Ancient Legacy
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover the mysterious geoglyphs, rich biodiversity, and cultural heritage of the Konkan region
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary">
              Explore Geoglyphs
            </button>
            <button className="btn-primary bg-deep-blue hover:bg-deep-blue/90">
              Support Conservation
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white" />
      </div>
    </section>
  );
};

export default Hero;