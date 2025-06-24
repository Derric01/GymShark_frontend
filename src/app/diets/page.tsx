'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { FaDumbbell, FaSearch, FaFilter, FaAppleAlt, FaFire } from 'react-icons/fa';
import { mockDietPlans } from '@/lib/mockData';
import { DietPlan } from '@/types';
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

export default function DietsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGoal, setSelectedGoal] = useState('');
  const { isAuthenticated } = useAuth();

  // Use mock data directly since diet API endpoints don't exist yet
  const dietPlans = mockDietPlans;
  const isLoading = false;
  const error = null;

  const goals = ['weight loss', 'muscle gain', 'maintenance'];
  
  const filteredDiets = dietPlans?.filter((diet: DietPlan) => {
    const matchesSearch = diet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      diet.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGoal = !selectedGoal || diet.goal === selectedGoal;
    return matchesSearch && matchesGoal;
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
          <h1 className="text-4xl font-bold mb-4">Diet Plans</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover nutrition plans designed to help you reach your fitness goals. 
            From weight loss to muscle gain, find the perfect eating strategy.
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
                Find Your Perfect Diet Plan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {/* Search */}
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search diet plans..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Goal Filter */}
                <select
                  value={selectedGoal}
                  onChange={(e) => setSelectedGoal(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  aria-label="Select goal"
                >
                  <option value="">All Goals</option>
                  {goals.map(goal => (
                    <option key={goal} value={goal}>
                      {goal.charAt(0).toUpperCase() + goal.slice(1)}
                    </option>
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
            <p className="text-gray-600 mt-4">Loading diet plans...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600">Failed to load diet plans. Please try again.</p>
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
                Showing {filteredDiets.length} of {dietPlans?.length || 0} diet plans
              </p>
            </motion.div>

            {/* Diet Plans Grid */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredDiets.map((diet) => (
                <motion.div key={diet._id} variants={fadeInUp}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge>{diet.goal.charAt(0).toUpperCase() + diet.goal.slice(1)}</Badge>
                        {diet.isPopular && (
                          <Badge variant="secondary">Popular</Badge>
                        )}
                      </div>
                      <CardTitle className="group-hover:text-blue-600 transition-colors">
                        {diet.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4 line-clamp-2">
                        {diet.description}
                      </CardDescription>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <FaFire className="text-orange-500" />
                          {diet.targetCalories} cal
                        </div>
                        <div className="flex items-center gap-1">
                          <FaAppleAlt className="text-green-500" />
                          {diet.meals.length} meals
                        </div>
                        <div className="col-span-2">
                          <span className="font-medium">Duration: </span>
                          {diet.duration}
                        </div>
                      </div>

                      <div className="flex gap-2 mb-4">
                        <div className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                          P: {diet.macroTargets.protein}%
                        </div>
                        <div className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                          C: {diet.macroTargets.carbs}%
                        </div>
                        <div className="text-xs bg-yellow-50 text-yellow-700 px-2 py-1 rounded">
                          F: {diet.macroTargets.fat}%
                        </div>
                      </div>

                      <Button className="w-full" asChild>
                        <Link href={`/diets/${diet._id}`}>
                          View Diet Plan
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {filteredDiets.length === 0 && !isLoading && (
              <div className="text-center py-12">
                <p className="text-gray-600">No diet plans found matching your criteria.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedGoal('');
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
