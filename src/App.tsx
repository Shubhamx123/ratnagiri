import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedGrid from './components/FeaturedGrid';
import Footer from './components/Footer';
import UploadPage from './components/UploadPage';

function App() {
  // Simple route handling
  const path = window.location.pathname;

  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Header />
      <main className="flex-grow">
        {path === '/upload' ? (
          <UploadPage />
        ) : (
          <>
            <Hero />
            <FeaturedGrid />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;