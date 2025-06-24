'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FaDumbbell, FaChartLine, FaCalendarAlt, FaWeight, FaTrophy, FaFire, FaBullseye } from 'react-icons/fa';
import StreakDisplay from '@/components/StreakDisplay';
import { mockChallenges } from '@/lib/mockData';
import { useAuth } from '@/contexts/AuthContext';

export default function ProgressPage() {
  const { isAuthenticated } = useAuth();

  // Mock progress data
  const progressStats = {
    workoutsCompleted: 28,
    totalCaloriesBurned: 3420,
    averageWorkoutDuration: 32,
    streakDays: 12,
    weightChange: -3.2,
    muscleGain: 1.8
  };

  const recentWorkouts = [
    { date: '2025-06-24', workout: 'HIIT Cardio Blast', duration: 25, calories: 320 },
    { date: '2025-06-23', workout: 'Strength Training', duration: 45, calories: 280 },
    { date: '2025-06-22', workout: 'Yoga Flow', duration: 30, calories: 150 },
    { date: '2025-06-21', workout: 'Full Body Workout', duration: 40, calories: 380 },
    { date: '2025-06-20', workout: 'Core Crusher', duration: 20, calories: 200 }
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <Card className="max-w-md mx-auto text-center p-8">
          <CardHeader>
            <FaChartLine className="text-4xl text-blue-600 mx-auto mb-4" />
            <CardTitle>Track Your Progress</CardTitle>
            <CardDescription>
              Sign in to view your fitness journey and achievements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <Button asChild>
                <Link href="/auth/login">Sign In</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/auth/register">Create Account</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

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
            <Button asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </motion.div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-4">Progress Tracking</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Monitor your fitness journey and celebrate your achievements
          </p>
        </motion.div>

        {/* Streak Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <StreakDisplay />
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Workouts Completed</CardTitle>
              <FaTrophy className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{progressStats.workoutsCompleted}</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Calories Burned</CardTitle>
              <FaFire className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{progressStats.totalCaloriesBurned}</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card>            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Duration</CardTitle>
              <FaBullseye className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{progressStats.averageWorkoutDuration} min</div>
              <p className="text-xs text-muted-foreground">Per workout</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
              <FaCalendarAlt className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{progressStats.streakDays} days</div>
              <p className="text-xs text-muted-foreground">Keep it up!</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Weight Change</CardTitle>
              <FaWeight className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{progressStats.weightChange} kg</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Muscle Gain</CardTitle>
              <FaChartLine className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">+{progressStats.muscleGain} kg</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tabs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Tabs defaultValue="workouts" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="workouts">Recent Workouts</TabsTrigger>
              <TabsTrigger value="challenges">Challenges</TabsTrigger>
              <TabsTrigger value="goals">Goals</TabsTrigger>
            </TabsList>

            <TabsContent value="workouts" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Workout History</CardTitle>
                  <CardDescription>Your last 5 completed workouts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentWorkouts.map((workout, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold">{workout.workout}</h4>
                          <p className="text-sm text-gray-600">{workout.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{workout.duration} min</p>
                          <p className="text-sm text-gray-600">{workout.calories} cal</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="challenges" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                {mockChallenges.filter(c => c.isActive).map((challenge) => (
                  <Card key={challenge._id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{challenge.title}</CardTitle>
                        <Badge>{challenge.type}</Badge>
                      </div>
                      <CardDescription>{challenge.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{challenge.progress}/{challenge.target}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${Math.min((challenge.progress / challenge.target) * 100, 100)}%` }}
                          />
                        </div>
                        {challenge.reward && (
                          <p className="text-sm text-gray-600 mt-2">
                            🏆 Reward: {challenge.reward}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="goals" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Fitness Goals</CardTitle>
                  <CardDescription>Set and track your fitness objectives</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Monthly Workout Goal</h4>
                      <p className="text-sm text-gray-600 mb-2">Complete 30 workouts this month</p>
                      <div className="w-full bg-blue-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${Math.min((progressStats.workoutsCompleted / 30) * 100, 100)}%` }}
                        />
                      </div>
                      <p className="text-xs mt-1">{progressStats.workoutsCompleted}/30 completed</p>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Weight Loss Goal</h4>
                      <p className="text-sm text-gray-600 mb-2">Lose 5kg by end of quarter</p>
                      <div className="w-full bg-green-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${Math.min((Math.abs(progressStats.weightChange) / 5) * 100, 100)}%` }}
                        />
                      </div>
                      <p className="text-xs mt-1">{Math.abs(progressStats.weightChange)}/5 kg lost</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
