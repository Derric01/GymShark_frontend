'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FaDumbbell, FaAppleAlt, FaBrain, FaChartLine, FaUser, FaSignOutAlt, FaPlus } from 'react-icons/fa';
import { useAuth } from '@/contexts/AuthContext';
import { useFeaturedWorkouts, useRecommendedSupplements, useProgress } from '@/hooks/useApi';
import { useRouter } from 'next/navigation';
import StreakDisplay from '@/components/StreakDisplay';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function DashboardPage() {
  const { user, logout, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  // Hooks must be called before early returns
  const { data: featuredWorkouts } = useFeaturedWorkouts();
  const { data: recommendedSupplements } = useRecommendedSupplements(user?.goal || 'maintenance');
  const { data: progress } = useProgress();

  // Authentication guard
  useEffect(() => {
    console.log('🔍 Dashboard - Auth state:', { 
      isLoading, 
      isAuthenticated, 
      user: user?.name 
    });
    
    // Only redirect if we're done loading and definitely not authenticated
    if (!isLoading && !isAuthenticated) {
      console.log('🚫 Not authenticated, redirecting to login');
      router.replace('/auth/login');
    }
  }, [isLoading, isAuthenticated, router, user?.name]);

  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  // Show nothing if not authenticated (will redirect via useEffect)
  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Redirecting to login...</p>
        </div>
      </div>
    );
  }
  // Only fetch data if authenticated
  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <FaDumbbell className="text-2xl text-blue-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Gym Sharks
              </h1>
            </Link>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3">
              <FaUser className="text-gray-600" />
              <span className="text-sm text-gray-600">Welcome, {user.name}</span>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <FaSignOutAlt className="mr-2" />
                Logout
              </Button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">Welcome back, {user.name}! 💪</h1>
          <p className="text-gray-600 text-lg">Ready to crush your fitness goals today?</p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-4 gap-6 mb-8"
        >
          {[
            { icon: FaDumbbell, label: 'Workouts', value: '6 Available', color: 'text-blue-600' },
            { icon: FaAppleAlt, label: 'Supplements', value: '12 Available', color: 'text-green-600' },
            { icon: FaBrain, label: 'AI Coach', value: 'Ready', color: 'text-purple-600' },
            { icon: FaChartLine, label: 'Progress', value: progress?.data?.length || 0, color: 'text-orange-600' }
          ].map((stat, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <stat.icon className={`text-2xl ${stat.color}`} />
                    <div>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                      <p className="text-xl font-bold">{stat.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Streak Display */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold mb-4">Your Streaks 🔥</h2>
          <StreakDisplay />
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: '/workouts', icon: FaDumbbell, label: 'Start Workout', color: 'bg-blue-600' },
              { href: '/ai-coach', icon: FaBrain, label: 'AI Coach', color: 'bg-purple-600' },
              { href: '/supplements', icon: FaAppleAlt, label: 'Supplements', color: 'bg-green-600' },
              { href: '/progress', icon: FaPlus, label: 'Log Progress', color: 'bg-orange-600' }
            ].map((action, index) => (
              <Button key={index} asChild className={`h-20 ${action.color} hover:opacity-90`}>
                <Link href={action.href} className="flex flex-col items-center gap-2">
                  <action.icon className="text-xl" />
                  <span>{action.label}</span>
                </Link>
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Featured Workouts */}
        {featuredWorkouts?.success && featuredWorkouts.data.workouts?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Featured Workouts</h2>
              <Button variant="outline" asChild>
                <Link href="/workouts">View All</Link>
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredWorkouts.data.workouts.slice(0, 3).map((workout) => (
                <Card key={workout._id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge>{workout.category}</Badge>
                      <Badge variant="outline">{workout.difficulty}</Badge>
                    </div>
                    <CardTitle className="text-xl">{workout.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 line-clamp-2">
                      {workout.description}
                    </CardDescription>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{workout.duration} minutes</span>
                      <span>{workout.exerciseCount} exercises</span>
                    </div>
                    <Button className="w-full" asChild>
                      <Link href={`/workouts/${workout._id}`}>Start Workout</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        {/* Recommended Supplements */}
        {recommendedSupplements?.success && recommendedSupplements.data.supplements?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Recommended for {user.goal}</h2>
              <Button variant="outline" asChild>
                <Link href="/supplements">View All</Link>
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedSupplements.data.supplements.slice(0, 3).map((supplement) => (
                <Card key={supplement._id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge>{supplement.category}</Badge>
                      {supplement.isEssential && <Badge variant="outline">Essential</Badge>}
                    </div>
                    <CardTitle className="text-xl">{supplement.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 line-clamp-2">
                      {supplement.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {supplement.benefits.slice(0, 2).map((benefit, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/supplements/${supplement._id}`}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
