import { LoginCredentials, User } from '../types/auth.types';

// This is a mock implementation. In a real app, this would make API calls
export const authService = {
  login: async (credentials: LoginCredentials): Promise<User | null> => {
    // Simulate API call
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      return {
        username: credentials.username,
        role: 'admin'
      };
    }
    return null;
  },

  logout: async (): Promise<void> => {
    // Clear any stored tokens
    localStorage.removeItem('authToken');
  },

  checkAuth: (): boolean => {
    // Check if user is authenticated
    return localStorage.getItem('authToken') !== null;
  }
};
