import api from '@/lib/api';
import { 
  AuthResponse, 
  WorkoutResponse, 
  WorkoutDetailResponse, 
  SupplementResponse, 
  SupplementDetailResponse,
  DietResponse,
  DietDetailResponse,
  MembershipSubscriptionResponse,
  AIResponse,
  User,
  Progress,
  Membership
} from '@/types';

// Authentication APIs
export const authApi = {
  login: async (email: string, password: string): Promise<AuthResponse> => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },

  register: async (userData: {
    name: string;
    email: string;
    password: string;
    age: number;
    gender: string;
    height: number;
    weight: number;
    goal: string;
    activityLevel: string;
  }): Promise<AuthResponse> => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },

  getProfile: async (): Promise<{ success: boolean; data: { user: User } }> => {
    const response = await api.get('/auth/profile');
    return response.data;
  },

  updateProfile: async (userData: Partial<User>): Promise<{ success: boolean; data: { user: User } }> => {
    const response = await api.put('/auth/profile', userData);
    return response.data;
  },
};

// Home Workouts APIs
export const workoutApi = {
  getAll: async (params?: {
    category?: string;
    difficulty?: string;
    duration?: string;
    page?: number;
    limit?: number;
  }): Promise<WorkoutResponse> => {
    const response = await api.get('/home-workouts', { params });
    return response.data;
  },

  getById: async (id: string): Promise<WorkoutDetailResponse> => {
    const response = await api.get(`/home-workouts/${id}`);
    return response.data;
  },

  getByCategory: async (category: string): Promise<WorkoutResponse> => {
    const response = await api.get(`/home-workouts/category/${category}`);
    return response.data;
  },

  getByDifficulty: async (difficulty: string): Promise<WorkoutResponse> => {
    const response = await api.get(`/home-workouts/difficulty/${difficulty}`);
    return response.data;
  },

  getFeatured: async (): Promise<WorkoutResponse> => {
    const response = await api.get('/home-workouts/featured');
    return response.data;
  },

  getRecommendations: async (): Promise<WorkoutResponse> => {
    const response = await api.get('/home-workouts/recommendations');
    return response.data;
  },
};

// Supplements APIs
export const supplementApi = {
  getAll: async (params?: {
    category?: string;
    page?: number;
    limit?: number;
  }): Promise<SupplementResponse> => {
    const response = await api.get('/supplements', { params });
    return response.data;
  },
  getById: async (id: string): Promise<SupplementDetailResponse> => {
    const response = await api.get(`/supplements/${id}`);
    return response.data;
  },

  getByCategory: async (category: string): Promise<SupplementResponse> => {
    const response = await api.get(`/supplements/category/${category}`);
    return response.data;
  },

  getRecommended: async (goal: string): Promise<SupplementResponse> => {
    const response = await api.get(`/supplements/recommended/${goal}`);
    return response.data;
  },
};

// Diet Plans APIs
export const dietApi = {
  getAll: async (): Promise<DietResponse> => {
    const response = await api.get('/diets');
    return response.data;
  },
  getByGoal: async (goal: string): Promise<DietDetailResponse> => {
    const response = await api.get(`/diets/${goal}`);
    return response.data;
  },
};

// Progress APIs - Currently using mock data, API endpoints disabled
export const progressApi = {
  getAll: async (): Promise<{ success: boolean; data: Progress[] }> => {
    // Using mock data instead of API call
    throw new Error('Progress API is disabled - using mock data');
  },

  create: async (progressData: Partial<Progress>): Promise<{ success: boolean; data: Progress }> => {
    // Mock successful creation
    console.log('Progress API disabled - would have created:', progressData);
    throw new Error('Progress API is disabled - using mock data');
  },
  update: async (_id: string, _progressData: Partial<Progress>): Promise<{ success: boolean; data: Progress }> => {
    // Mock successful update
    console.log('Progress API disabled - would have updated:', _id, _progressData);
    throw new Error('Progress API is disabled - using mock data');
  },

  delete: async (_id: string): Promise<{ success: boolean }> => {
    // Mock successful deletion
    console.log('Progress API disabled - would have deleted:', _id);
    throw new Error('Progress API is disabled - using mock data');
  },
};

// Membership APIs
export const membershipApi = {
  getAll: async (): Promise<{ success: boolean; data: Membership[] }> => {
    const response = await api.get('/memberships');
    return response.data;
  },
  subscribe: async (planId: string): Promise<MembershipSubscriptionResponse> => {
    const response = await api.post('/memberships/subscribe', { planId });
    return response.data;
  },
};

// AI APIs
export const aiApi = {
  getWorkoutTips: async (requestData: {
    fitnessGoal: string;
    experience: string;
    equipment: string[];
  }): Promise<AIResponse> => {
    const response = await api.post('/ai/workout-tips', requestData);
    return response.data;
  },

  getNutritionAdvice: async (requestData: {
    goal: string;
    age: number;
    gender: string;
    activityLevel: string;
    dietaryRestrictions: string[];
  }): Promise<AIResponse> => {
    const response = await api.post('/ai/nutrition-advice', requestData);
    return response.data;
  },

  getGeneralTips: async (): Promise<AIResponse> => {
    const response = await api.post('/ai/general-tips');
    return response.data;
  },
};

// Health Check API
export const healthApi = {
  check: async (): Promise<{ success: boolean; message: string; timestamp: string }> => {
    const response = await api.get('/health');
    return response.data;
  },
};
