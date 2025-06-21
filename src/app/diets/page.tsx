'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FaAppleAlt, FaArrowLeft, FaUtensils } from 'react-icons/fa';
import Link from 'next/link';
import { useDiets } from '@/hooks/useApi';

export default function DietsPage() {
  const { data: dietsData, isLoading, error } = useDiets();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/dashboard">
                <FaArrowLeft className="mr-2" />
                Back to Dashboard
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <FaAppleAlt className="text-2xl text-green-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Diet Plans
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Nutrition Plans</h1>
            <p className="text-gray-600 text-lg">
              Discover personalized diet plans tailored to your fitness goals
            </p>
          </div>

          {isLoading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading diet plans...</p>
            </div>
          )}

          {error && (
            <Card className="max-w-md mx-auto">
              <CardContent className="text-center py-8">
                <p className="text-red-600 mb-4">Failed to load diet plans</p>
                <Button onClick={() => window.location.reload()}>
                  Try Again
                </Button>
              </CardContent>
            </Card>
          )}

          {dietsData?.success && dietsData.data?.dietPlans && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dietsData.data.dietPlans.map((diet, index) => (
                <motion.div
                  key={diet._id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-green-100 text-green-800">
                          {diet.goal}
                        </Badge>
                        <FaUtensils className="text-green-600" />
                      </div>
                      <CardTitle className="text-xl">{diet.name}</CardTitle>
                      <CardDescription className="line-clamp-2">
                        {diet.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Target Calories:</span>
                          <span className="font-semibold">{diet.targetCalories}</span>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-gray-700">Macro Split:</p>
                          <div className="grid grid-cols-3 gap-2 text-xs">
                            <div className="text-center bg-blue-50 rounded p-2">
                              <div className="font-bold text-blue-600">{diet.macroTargets.protein}%</div>
                              <div className="text-gray-600">Protein</div>
                            </div>
                            <div className="text-center bg-orange-50 rounded p-2">
                              <div className="font-bold text-orange-600">{diet.macroTargets.carbs}%</div>
                              <div className="text-gray-600">Carbs</div>
                            </div>
                            <div className="text-center bg-yellow-50 rounded p-2">
                              <div className="font-bold text-yellow-600">{diet.macroTargets.fat}%</div>
                              <div className="text-gray-600">Fat</div>
                            </div>
                          </div>
                        </div>

                        <div className="pt-2">
                          <p className="text-sm text-gray-600 mb-2">Duration: {diet.duration}</p>
                          <p className="text-sm text-gray-600">{diet.meals.length} meals per day</p>
                        </div>
                      </div>
                      
                      <Button className="w-full mt-4">
                        View Full Plan
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {!isLoading && !error && (!dietsData || !dietsData.success) && (
            <Card className="max-w-md mx-auto">
              <CardHeader className="text-center">
                <FaAppleAlt className="text-6xl text-green-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Diet Plans</CardTitle>
                <CardDescription>
                  Personalized nutrition plans coming soon!
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  We&apos;re working on bringing you the best nutrition plans tailored to your goals.
                </p>
                <Button asChild>
                  <Link href="/dashboard">Back to Dashboard</Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </div>
    </div>
  );
}
