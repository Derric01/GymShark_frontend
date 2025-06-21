'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { FaDumbbell, FaSearch, FaFilter, FaClock, FaFire } from 'react-icons/fa';
import { mockWorkouts } from '@/lib/mockData';
import { HomeWorkout } from '@/types';
import { useAuth } from '@/contexts/AuthContext';

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

export default function WorkoutsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const { isAuthenticated } = useAuth();
    // Use mock data directly since workout API endpoints don't exist yet
  const workouts = mockWorkouts;
  const isLoading = false;
  const error = null;

  const categories = ['Bodyweight', 'HIIT', 'Yoga', 'Pilates', 'Cardio', 'Strength', 'Flexibility', 'Core'];
  const difficulties = ['Beginner', 'Intermediate', 'Advanced'];
  const filteredWorkouts = workouts?.filter((workout: HomeWorkout) => {
    const matchesSearch = workout.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      workout.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || workout.category === selectedCategory;
    const matchesDifficulty = !selectedDifficulty || workout.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  }) || [];

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
            {isAuthenticated ? (
              <Button asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="outline" asChild>
                  <Link href="/auth/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/auth/register">Get Started</Link>
                </Button>
              </div>
            )}
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
          <h1 className="text-4xl font-bold mb-4">Workout Library</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover expertly designed workouts for every fitness level and goal. 
            From quick HIIT sessions to comprehensive strength training.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FaFilter className="text-blue-600" />
                Find Your Perfect Workout
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {/* Search */}
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search workouts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  aria-label="Select category"
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                {/* Difficulty Filter */}
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  aria-label="Select difficulty"
                >
                  <option value="">All Difficulties</option>
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>{difficulty}</option>
                  ))}
                </select>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Results */}
        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">Loading workouts...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600">Failed to load workouts. Please try again.</p>
          </div>
        ) : (
          <>
            {/* Results Count */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <p className="text-gray-600">
                Showing {filteredWorkouts.length} of {workouts?.length || 0} workouts
              </p>
            </motion.div>

            {/* Workouts Grid */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredWorkouts.map((workout) => (
                <motion.div key={workout._id} variants={fadeInUp}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge>{workout.category}</Badge>
                        <Badge variant={
                          workout.difficulty === 'Beginner' ? 'secondary' :
                          workout.difficulty === 'Intermediate' ? 'default' : 'destructive'
                        }>
                          {workout.difficulty}
                        </Badge>
                      </div>
                      <CardTitle className="group-hover:text-blue-600 transition-colors">
                        {workout.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4 line-clamp-2">
                        {workout.description}
                      </CardDescription>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <FaClock className="text-blue-500" />
                          {workout.duration} min
                        </div>
                        <div className="flex items-center gap-1">
                          <FaFire className="text-orange-500" />
                          {workout.calories || workout.estimatedCalories || 'N/A'} cal
                        </div>
                        <div className="col-span-2">
                          <span className="font-medium">Target: </span>
                          {workout.targetMuscleGroups?.slice(0, 2).join(', ') || workout.targetMuscles?.slice(0, 2).join(', ') || 'Full body'}
                        </div>
                      </div>

                      <div className="flex gap-2 mb-4">
                        {workout.equipment?.slice(0, 3).map(item => (
                          <Badge key={item} variant="outline" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>

                      <Button className="w-full" asChild>
                        <Link href={`/workouts/${workout._id}`}>
                          View Workout
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {filteredWorkouts.length === 0 && !isLoading && (
              <div className="text-center py-12">
                <p className="text-gray-600">No workouts found matching your criteria.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('');
                    setSelectedDifficulty('');
                  }}
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
