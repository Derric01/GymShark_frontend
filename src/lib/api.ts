import axios from 'axios';
import Cookies from 'js-cookie';

// API Configuration
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? process.env.NEXT_PUBLIC_API_URL || 'https://gymshark-backend-sbqa.onrender.com/api'
  : 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get('gym_sharks_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    
    if (error.response?.status === 401) {
      console.log('🚫 401 Unauthorized error detected');
      
      // Only handle 401 redirects if:
      // 1. We're not already on an auth page
      // 2. We have a token (real auth failure vs no token)
      const token = Cookies.get('gym_sharks_token');
      
      if (!currentPath.startsWith('/auth/') && token) {
        console.log('🔄 Clearing invalid token and redirecting to login');
        Cookies.remove('gym_sharks_token');
        localStorage.removeItem('gym_sharks_user');
        
        // Use replace to avoid adding to history
        window.location.replace('/auth/login');
      }
    } else if (error.response?.status === 429) {
      console.log('⚠️ Rate limit exceeded (429)');
      // Don't redirect on rate limit, just log and continue
    } else if (error.response?.status >= 500) {
      console.log('🔥 Server error detected:', error.response.status);
      // Server errors - could show a toast notification here
    }
    
    return Promise.reject(error);
  }
);

export default api;
