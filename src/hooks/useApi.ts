import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  authApi, 
  workoutApi, 
  supplementApi, 
  dietApi, 
  progressApi, 
  membershipApi, 
  aiApi,
  healthApi 
} from '@/services/api';
import { 
  Progress, 
  User 
} from '@/types';

// Query Keys
export const queryKeys = {
  // Auth
  profile: ['auth', 'profile'] as const,
  
  // Workouts
  workouts: ['workouts'] as const,
  workout: (id: string) => ['workouts', id] as const,
  workoutsByCategory: (category: string) => ['workouts', 'category', category] as const,
  workoutsByDifficulty: (difficulty: string) => ['workouts', 'difficulty', difficulty] as const,
  featuredWorkouts: ['workouts', 'featured'] as const,
  recommendedWorkouts: ['workouts', 'recommended'] as const,
  
  // Supplements
  supplements: ['supplements'] as const,
  supplement: (id: string) => ['supplements', id] as const,
  supplementsByCategory: (category: string) => ['supplements', 'category', category] as const,
  recommendedSupplements: (goal: string) => ['supplements', 'recommended', goal] as const,
  
  // Diet Plans
  diets: ['diets'] as const,
  diet: (goal: string) => ['diets', goal] as const,
  
  // Progress
  progress: ['progress'] as const,
  
  // Memberships
  memberships: ['memberships'] as const,
  
  // Health
  health: ['health'] as const,
} as const;

// ============================================================================
// WORKOUT HOOKS
// ============================================================================

export const useWorkouts = (params?: {
  category?: string;
  difficulty?: string;
  page?: number;
  limit?: number;
}) => {
  return useQuery({
    queryKey: [...queryKeys.workouts, params],
    queryFn: () => workoutApi.getAll(params),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useWorkout = (id: string) => {
  return useQuery({
    queryKey: queryKeys.workout(id),
    queryFn: () => workoutApi.getById(id),
    enabled: !!id,
  });
};

export const useWorkoutsByCategory = (category: string) => {
  return useQuery({
    queryKey: queryKeys.workoutsByCategory(category),
    queryFn: () => workoutApi.getByCategory(category),
    enabled: !!category,
  });
};

export const useWorkoutsByDifficulty = (difficulty: string) => {
  return useQuery({
    queryKey: queryKeys.workoutsByDifficulty(difficulty),
    queryFn: () => workoutApi.getByDifficulty(difficulty),
    enabled: !!difficulty,
  });
};

export const useFeaturedWorkouts = () => {
  return useQuery({
    queryKey: queryKeys.featuredWorkouts,
    queryFn: () => workoutApi.getFeatured(),
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};

export const useRecommendedWorkouts = () => {
  return useQuery({
    queryKey: queryKeys.recommendedWorkouts,
    queryFn: () => workoutApi.getRecommendations(),
  });
};

// ============================================================================
// SUPPLEMENT HOOKS
// ============================================================================

export const useSupplements = (params?: {
  category?: string;
  page?: number;
  limit?: number;
}) => {
  return useQuery({
    queryKey: [...queryKeys.supplements, params],
    queryFn: () => supplementApi.getAll(params),
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};

export const useSupplement = (id: string) => {
  return useQuery({
    queryKey: queryKeys.supplement(id),
    queryFn: () => supplementApi.getById(id),
    enabled: !!id,
  });
};

export const useSupplementsByCategory = (category: string) => {
  return useQuery({
    queryKey: queryKeys.supplementsByCategory(category),
    queryFn: () => supplementApi.getByCategory(category),
    enabled: !!category,
  });
};

export const useRecommendedSupplements = (goal: string) => {
  return useQuery({
    queryKey: queryKeys.recommendedSupplements(goal),
    queryFn: () => supplementApi.getRecommended(goal),
    enabled: !!goal,
  });
};

// ============================================================================
// DIET HOOKS
// ============================================================================

export const useDiets = () => {
  return useQuery({
    queryKey: queryKeys.diets,
    queryFn: () => dietApi.getAll(),
    staleTime: 1000 * 60 * 15, // 15 minutes
  });
};

export const useDiet = (goal: string) => {
  return useQuery({
    queryKey: queryKeys.diet(goal),
    queryFn: () => dietApi.getByGoal(goal),
    enabled: !!goal,
  });
};

// ============================================================================
// PROGRESS HOOKS
// ============================================================================

export const useProgress = () => {
  return useQuery({
    queryKey: queryKeys.progress,
    queryFn: () => progressApi.getAll(),
  });
};

export const useCreateProgress = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (progressData: Partial<Progress>) => progressApi.create(progressData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.progress });
    },
  });
};

export const useUpdateProgress = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Progress> }) => 
      progressApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.progress });
    },
  });
};

export const useDeleteProgress = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: string) => progressApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.progress });
    },
  });
};

// ============================================================================
// MEMBERSHIP HOOKS
// ============================================================================

export const useMemberships = () => {
  return useQuery({
    queryKey: queryKeys.memberships,
    queryFn: () => membershipApi.getAll(),
    staleTime: 1000 * 60 * 30, // 30 minutes
  });
};

export const useSubscribeMembership = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (planId: string) => membershipApi.subscribe(planId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.memberships });
      queryClient.invalidateQueries({ queryKey: queryKeys.profile });
    },
  });
};

// ============================================================================
// AI HOOKS
// ============================================================================

export const useWorkoutTips = () => {
  return useMutation({
    mutationFn: (requestData: {
      fitnessGoal: string;
      experience: string;
      equipment: string[];
    }) => aiApi.getWorkoutTips(requestData),
  });
};

export const useNutritionAdvice = () => {
  return useMutation({
    mutationFn: (requestData: {
      goal: string;
      age: number;
      gender: string;
      activityLevel: string;
      dietaryRestrictions: string[];
    }) => aiApi.getNutritionAdvice(requestData),
  });
};

export const useGeneralTips = () => {
  return useMutation({
    mutationFn: () => aiApi.getGeneralTips(),
  });
};

// ============================================================================
// HEALTH CHECK HOOK
// ============================================================================

export const useHealthCheck = () => {
  return useQuery({
    queryKey: queryKeys.health,
    queryFn: () => healthApi.check(),
    staleTime: 1000 * 60 * 2, // 2 minutes
    retry: false,
  });
};

// ============================================================================
// PROFILE HOOKS
// ============================================================================

export const useProfile = () => {
  return useQuery({
    queryKey: queryKeys.profile,
    queryFn: () => authApi.getProfile(),
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (userData: Partial<User>) => authApi.updateProfile(userData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.profile });
    },
  });
};
