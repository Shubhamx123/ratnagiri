import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedGrid from './components/FeaturedGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;