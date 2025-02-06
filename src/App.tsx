import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedGrid from './components/FeaturedGrid';
import Footer from './components/Footer';
<<<<<<< HEAD
import UploadPage from './components/UploadPage';
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/admin/Login';
import Dashboard from './components/admin/Dashboard';
import ProtectedRoute from './components/admin/ProtectedRoute';
>>>>>>> ef63efd12e2cba64c5b4f3e33a5c53b2a5012e1c

function App() {
  // Simple route handling
  const path = window.location.pathname;

  return (
<<<<<<< HEAD
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
=======
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen bg-off-white flex flex-col">
              <Header />
              <main className="flex-grow">
                <Hero />
                <FeaturedGrid />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/admin/login" element={<Login />} />
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
>>>>>>> ef63efd12e2cba64c5b4f3e33a5c53b2a5012e1c
  );
}

export default App;