'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import Cookies from 'js-cookie';
import { User } from '@/types';
import { authApi } from '@/services/api';
import { toast } from 'sonner';

interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
    status?: number;
  };
}

const getErrorMessage = (error: unknown, defaultMessage: string): string => {
  if (error && typeof error === 'object' && 'response' in error) {
    const apiError = error as ApiError;
    return apiError.response?.data?.message || defaultMessage;
  }
  return defaultMessage;
};

// Helper functions for localStorage
const storeUserData = (user: User) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('gym_sharks_user', JSON.stringify(user));
  }
};

const getUserFromStorage = (): User | null => {
  if (typeof window !== 'undefined') {
    const userData = localStorage.getItem('gym_sharks_user');
    if (userData) {
      try {
        return JSON.parse(userData);
      } catch {
        localStorage.removeItem('gym_sharks_user');
      }
    }
  }
  return null;
};

const clearUserData = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('gym_sharks_user');
  }
  Cookies.remove('gym_sharks_token');
};

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: {
    name: string;
    email: string;
    password: string;
    age: number;
    gender: string;
    height: number;
    weight: number;
    goal: string;
    activityLevel: string;
  }) => Promise<void>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isAuthenticated = !!user;

  // Check for existing token and user data on mount - avoid API calls
  useEffect(() => {
    const checkAuth = () => {
      try {
        const token = Cookies.get('gym_sharks_token');
        const userData = getUserFromStorage();
        
        if (token && userData) {
          // We have both token and user data - user is authenticated
          setUser(userData);
        } else if (token && !userData) {
          // We have token but no user data - fetch from API (rare case)
          fetchUserProfile();
          return;
        } else {
          // No token or user data - user is not authenticated
          setUser(null);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        clearUserData();
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await authApi.getProfile();
      if (response.success && response.data) {
        const userData = response.data.user;
        setUser(userData);
        storeUserData(userData);
      }
    } catch (error) {
      console.error('Profile fetch failed:', error);
      clearUserData();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const response = await authApi.login(email, password);
      
      if (response.success && response.data) {
        const { token, user: userData } = response.data;
        
        // Store token in cookie
        Cookies.set('gym_sharks_token', token, { 
          expires: 7, // 7 days
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict'
        });
        
        // Store user data in localStorage
        storeUserData(userData);
        setUser(userData);
        toast.success('Welcome back! Login successful.');
      }
    } catch (error: unknown) {
      const message = getErrorMessage(error, 'Login failed. Please try again.');
      toast.error(message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: {
    name: string;
    email: string;
    password: string;
    age: number;
    gender: string;
    height: number;
    weight: number;
    goal: string;
    activityLevel: string;
  }) => {
    try {
      setIsLoading(true);
      const response = await authApi.register(userData);
      
      if (response.success && response.data) {
        const { token, user: newUser } = response.data;
        
        // Store token in cookie
        Cookies.set('gym_sharks_token', token, { 
          expires: 7, // 7 days
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict'
        });
        
        // Store user data in localStorage
        storeUserData(newUser);
        setUser(newUser);
        toast.success('Account created successfully! Welcome to Gym Sharks!');
      }
    } catch (error: unknown) {
      const message = getErrorMessage(error, 'Registration failed. Please try again.');
      toast.error(message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    clearUserData();
    setUser(null);
    toast.success('Logged out successfully!');
  };

  const updateProfile = async (userData: Partial<User>) => {
    try {
      setIsLoading(true);
      const response = await authApi.updateProfile(userData);
      
      if (response.success && response.data) {
        const updatedUser = response.data.user;
        storeUserData(updatedUser);
        setUser(updatedUser);
        toast.success('Profile updated successfully!');
      }
    } catch (error: unknown) {
      const message = getErrorMessage(error, 'Profile update failed.');
      toast.error(message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated,
    login,
    register,
    logout,
    updateProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
