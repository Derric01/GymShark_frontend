// User Types
export interface User {
  _id: string;
  name: string;
  email: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  height: number; // in cm
  weight: number; // in kg
  goal: 'weight loss' | 'muscle gain' | 'maintenance';
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very active';
  preferences: {
    workoutTypes: string[];
    dietaryRestrictions: string[];
    equipment: string[];
  };
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    token: string;
  };
}

// Workout Types
export interface Exercise {
  name: string;
  instructions: string;
  sets?: number;
  reps: string; // "10-15" or "30 seconds"
  restTime?: number; // in seconds
  modifications?: {
    beginner?: string;
    advanced?: string;
  };
  tips?: string[];
}

export interface HomeWorkout {
  _id: string;
  title: string;
  description: string;
  category: 'Bodyweight' | 'HIIT' | 'Yoga' | 'Pilates' | 'Cardio' | 'Strength' | 'Flexibility' | 'Core';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: number; // in minutes
  equipment: string[];
  targetMuscleGroups: string[];
  exercises: Exercise[];
  warmUp?: {
    name: string;
    duration: string;
    instructions: string;
  }[];
  coolDown?: {
    name: string;
    duration: string;
    instructions: string;
  }[];
  calories: number;
  tags?: string[];
  isPopular?: boolean;
  estimatedCalories?: number;
  exerciseCount?: number;
  targetMuscles?: string[];
}

export interface WorkoutResponse {
  success: boolean;
  count: number;
  total: number;
  page: number;
  pages: number;
  data: {
    workouts: HomeWorkout[];
  };
}

export interface WorkoutDetailResponse {
  success: boolean;
  data: {
    workout: HomeWorkout;
  };
}

// Supplement Types
export interface Supplement {
  _id: string;
  name: string;
  category: 'Protein' | 'Pre-Workout' | 'Post-Workout' | 'Vitamins' | 'Minerals' | 'Amino Acids' | 'Fat Burners' | 'Mass Gainers' | 'Recovery' | 'General Health';
  description: string;
  benefits: string[];
  recommendedFor: ('weight loss' | 'muscle gain' | 'maintenance' | 'endurance' | 'recovery' | 'general health')[];
  dosage: {
    amount: string;
    frequency: string;
    timing: string;
    instructions?: string;
  };
  ingredients: {
    name: string;
    amount: string;
    purpose: string;
  }[];
  sideEffects?: string[];
  contraindications?: string[];
  interactions?: string[];
  targetGender?: 'male' | 'female' | 'All';
  ageRange?: {
    min: number;
    max: number;
  };
  price?: {
    range: string;
    currency: string;
  };
  effectiveness?: {
    rating: number;
    evidenceLevel: 'High' | 'Medium' | 'Low';
  };
  tags?: string[];
  isEssential?: boolean;
  isPopular?: boolean;
}

export interface SupplementResponse {
  success: boolean;
  count: number;
  total: number;
  page: number;
  pages: number;
  data: {
    supplements: Supplement[];
  };
}

export interface SupplementDetailResponse {
  success: boolean;
  data: {
    supplement: Supplement;
  };
}

// Diet Plan Types
export interface FoodItem {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  quantity: string;
  notes?: string;
}

export interface Meal {
  time: 'Breakfast' | 'Mid-Morning Snack' | 'Lunch' | 'Afternoon Snack' | 'Dinner' | 'Evening Snack';
  items: FoodItem[];
  totalCalories: number;
  macros: {
    protein: number;
    carbs: number;
    fat: number;
  };
}

export interface DietPlan {
  _id: string;
  name: string;
  description: string;
  goal: 'weight loss' | 'muscle gain' | 'maintenance';
  targetCalories: number;
  macroTargets: {
    protein: number; // percentage
    carbs: number; // percentage
    fat: number; // percentage
  };
  meals: Meal[];
  guidelines: string[];
  tips: string[];
  duration: string;
  isPopular?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface DietResponse {
  success: boolean;
  count: number;
  data: {
    availableGoals: string[];
    dietPlans: DietPlan[];
  };
}

export interface DietDetailResponse {
  success: boolean;
  data: {
    dietPlan: DietPlan;
  };
}

// Progress Types
export interface Progress {
  _id: string;
  user: string;
  date: string;
  weight?: number;
  bodyFat?: number;
  muscleMass?: number;
  measurements?: {
    chest?: number;
    waist?: number;
    hips?: number;
    arms?: number;
    thighs?: number;
  };
  workoutCompleted?: {
    workoutId: string;
    duration: number;
    caloriesBurned: number;
    difficulty: 'easy' | 'moderate' | 'hard';
  };
  notes?: string;
  photos?: string[];
}

// Membership Types
export interface Membership {
  _id: string;
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
  popular?: boolean;
  recommended?: boolean;
}

export interface MembershipSubscriptionResponse {
  success: boolean;
  data: {
    subscription: {
      id: string;
      planId: string;
      userId: string;
      status: 'active' | 'pending' | 'cancelled';
      startDate: string;
      endDate: string;
      paymentStatus: 'paid' | 'pending' | 'failed';
    };
  };
}

// AI Types
export interface AITip {
  _id: string;
  category: 'workout' | 'nutrition' | 'recovery' | 'motivation';
  title: string;
  content: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  likes?: number;
  createdAt?: string;
}

export interface AIRequest {
  fitnessGoal?: string;
  experience?: string;
  equipment?: string[];
  age?: number;
  gender?: string;
  activityLevel?: string;
  dietaryRestrictions?: string[];
  goal?: string;
}

export interface AIResponse {
  success: boolean;
  data: {
    recommendations: string[];
    tips: string[];
    personalizedAdvice: string;
  };
}

// Streak and Challenge Types
export interface UserStreak {
  type: 'workout' | 'login' | 'supplement' | 'progress';
  currentStreak: number;
  longestStreak: number;
  lastActivity: string;
}

export interface Challenge {
  _id: string;
  title: string;
  description: string;
  type: 'daily' | 'weekly' | 'monthly';
  target: number;
  progress: number;
  startDate: string;
  endDate: string;
  isActive: boolean;
  reward?: string;
  icon?: string;
  category?: 'fitness' | 'nutrition' | 'lifestyle';
}

// API Response Types
export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

// Filter Types
export type WorkoutCategory = 'Bodyweight' | 'HIIT' | 'Yoga' | 'Pilates' | 'Cardio' | 'Strength' | 'Flexibility' | 'Core' | 'Functional' | 'Recovery';
export type WorkoutDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type SupplementCategory = 'Protein' | 'Pre-Workout' | 'Post-Workout' | 'Vitamins' | 'Minerals' | 'Amino Acids' | 'Fat Burners' | 'Mass Gainers' | 'Recovery' | 'General Health';
export type FitnessGoal = 'weight loss' | 'muscle gain' | 'maintenance';
