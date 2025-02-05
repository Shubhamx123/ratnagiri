import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthContextType, User, LoginCredentials } from '../types/auth.types';
import { authService } from '../services/authService';

const ADMIN_PASSWORD = "H@numan@12345"; // Updated to the new password
const ADMIN_USERNAME = "Admin@Nisargyatri"; // Updated to the new username

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
    const { username, password } = credentials;

    // Debugging logs
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Expected Username:", ADMIN_USERNAME);
    console.log("Expected Password:", ADMIN_PASSWORD);

    // Check if the username and password match
    if (username.trim() === ADMIN_USERNAME && password.trim() === ADMIN_PASSWORD) {
      // Logic for successful login
      return true;
    } else {
      return false; // Invalid credentials
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
