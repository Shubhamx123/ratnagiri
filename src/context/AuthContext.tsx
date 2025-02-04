import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthContextType, User, LoginCredentials } from '../types/auth.types';
import { authService } from '../services/authService';

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check authentication status on mount
    const isAuth = authService.checkAuth();
    setIsAuthenticated(isAuth);
  }, []);

  const login = async (credentials: LoginCredentials) => {
    try {
      const user = await authService.login(credentials);
      if (user) {
        setIsAuthenticated(true);
        setUser(user);
        localStorage.setItem('authToken', 'dummy-token'); // In real app, use actual token
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = async () => {
    await authService.logout();
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
