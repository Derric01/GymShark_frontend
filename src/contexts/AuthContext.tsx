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
  };
}

const getErrorMessage = (error: unknown, defaultMessage: string): string => {
  if (error && typeof error === 'object' && 'response' in error) {
    const apiError = error as ApiError;
    return apiError.response?.data?.message || defaultMessage;
  }
  return defaultMessage;
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

  // Helper function to get cached user from localStorage
  const getCachedUser = (): User | null => {
    if (typeof window === 'undefined') return null;
    try {
      const cachedUser = localStorage.getItem('gym_sharks_user');
      return cachedUser ? JSON.parse(cachedUser) : null;
    } catch {
      return null;
    }
  };

  // Helper function to cache user in localStorage
  const cacheUser = (userData: User) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('gym_sharks_user', JSON.stringify(userData));
    }
  };

  // Helper function to clear all auth data
  const clearAuthData = () => {
    Cookies.remove('gym_sharks_token');
    if (typeof window !== 'undefined') {
      localStorage.removeItem('gym_sharks_user');
    }
    setUser(null);
  };

  // Check for existing authentication on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = Cookies.get('gym_sharks_token');
        const cachedUser = getCachedUser();

        if (token && cachedUser) {
          // If we have both token and cached user, use cached data
          setUser(cachedUser);
          console.log('✅ Using cached user data');
        } else if (token) {
          // If we have token but no cached user, fetch from API
          console.log('🔄 Token found, fetching user profile...');
          const response = await authApi.getProfile();
          if (response.success && response.data) {
            const userData = response.data.user;
            setUser(userData);
            cacheUser(userData);
            console.log('✅ Profile loaded and cached');
          } else {
            console.log('❌ Invalid profile response, clearing auth');
            clearAuthData();
          }
        } else {
          console.log('🔓 No token found, user not authenticated');
        }
      } catch (error) {
        console.log('❌ Auth check failed:', error);
        clearAuthData();
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      console.log('🔐 Attempting login...');
      
      const response = await authApi.login(email, password);
      
      if (response.success && response.data) {
        const { token, user: userData } = response.data;
        
        // Store token in cookie
        Cookies.set('gym_sharks_token', token, { 
          expires: 7, // 7 days
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict'
        });
        
        // Cache user data and update state
        cacheUser(userData);
        setUser(userData);
        
        console.log('✅ Login successful');
        toast.success('Welcome back! Login successful.');
      } else {
        throw new Error('Invalid login response');
      }    } catch (error: unknown) {
      console.log('❌ Login failed:', error);
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
      console.log('📝 Attempting registration...');
      
      const response = await authApi.register(userData);
      
      if (response.success && response.data) {
        const { token, user: newUser } = response.data;
        
        // Store token in cookie
        Cookies.set('gym_sharks_token', token, { 
          expires: 7, // 7 days
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict'
        });
        
        // Cache user data and update state
        cacheUser(newUser);
        setUser(newUser);
        
        console.log('✅ Registration successful');
        toast.success('Account created successfully! Welcome to Gym Sharks!');
      } else {
        throw new Error('Invalid registration response');
      }    } catch (error: unknown) {
      console.log('❌ Registration failed:', error);
      const message = getErrorMessage(error, 'Registration failed. Please try again.');
      toast.error(message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    console.log('🚪 Logging out...');
    clearAuthData();
    toast.success('Logged out successfully!');
  };

  const updateProfile = async (userData: Partial<User>) => {
    try {
      setIsLoading(true);
      const response = await authApi.updateProfile(userData);
      
      if (response.success && response.data) {
        const updatedUser = response.data.user;
        cacheUser(updatedUser);
        setUser(updatedUser);
        toast.success('Profile updated successfully!');
      }    } catch (error: unknown) {
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
