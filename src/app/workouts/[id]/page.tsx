'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FaDumbbell, FaArrowLeft, FaClock, FaFire, FaUsers, FaPlay } from 'react-icons/fa';
import { mockWorkouts } from '@/lib/mockData';
import { Exercise } from '@/types';
import { useAuth } from '@/contexts/AuthContext';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export default function WorkoutDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [isStarted, setIsStarted] = useState(false);
  
  const workoutId = params.id as string;  // Use mock data directly since workout API endpoints don't exist yet
  const workout = mockWorkouts.find(w => w._id === workoutId);
  const isLoading = false;
  const error = !workout ? 'Workout not found' : null;

  useEffect(() => {
    if (error) {
      console.error('Failed to load workout:', error);
    }
  }, [error]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading workout...</p>
        </div>
      </div>
    );
  }

  if (error || !workout) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Workout Not Found</h1>
          <p className="text-gray-600 mb-6">The workout you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          <Button asChild>
            <Link href="/workouts">Back to Workouts</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleStartWorkout = () => {
    if (!isAuthenticated) {
      router.push('/auth/login');
      return;
    }
    setIsStarted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => router.back()}>
              <FaArrowLeft className="mr-2" />
              Back
            </Button>
            <Link href="/" className="flex items-center gap-2">
              <FaDumbbell className="text-2xl text-blue-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Gym Sharks
              </h1>
            </Link>
          </div>
          
          <div className="flex items-center gap-2">
            {isAuthenticated ? (
              <Button asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            ) : (
              <Button asChild>
                <Link href="/auth/login">Login</Link>
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          {/* Workout Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Badge>{workout.category}</Badge>
              <Badge variant="outline">{workout.difficulty}</Badge>
              {workout.isPopular && <Badge variant="secondary">Popular</Badge>}
            </div>
            
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{workout.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{workout.description}</p>
            
            {/* Workout Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardContent className="flex items-center p-4">
                  <FaClock className="text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="font-semibold">{workout.duration} min</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-center p-4">
                  <FaFire className="text-orange-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Calories</p>
                    <p className="font-semibold">{workout.calories}</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-center p-4">
                  <FaUsers className="text-green-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Exercises</p>
                    <p className="font-semibold">{workout.exercises?.length || 0}</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-center p-4">
                  <FaDumbbell className="text-purple-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Equipment</p>
                    <p className="font-semibold">{workout.equipment?.length > 0 ? workout.equipment.join(', ') : 'None'}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Start Workout Button */}
            <Button size="lg" className="w-full md:w-auto" onClick={handleStartWorkout}>
              <FaPlay className="mr-2" />
              {isStarted ? 'Workout Started!' : 'Start Workout'}
            </Button>
          </div>

          {/* Exercises List */}
          {workout.exercises && workout.exercises.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Exercises</h2>
              <div className="space-y-4">
                {workout.exercises.map((exercise: Exercise, index: number) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{exercise.name}</CardTitle>
                      {exercise.sets && exercise.reps && (
                        <CardDescription>
                          {exercise.sets} sets × {exercise.reps} reps
                          {exercise.restTime && ` • ${exercise.restTime}s rest`}
                        </CardDescription>
                      )}
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{exercise.instructions}</p>
                      
                      {exercise.modifications && (
                        <div className="grid md:grid-cols-2 gap-4">
                          {exercise.modifications.beginner && (
                            <div>
                              <h4 className="font-semibold text-green-600 mb-2">Beginner Modification</h4>
                              <p className="text-sm text-gray-600">{exercise.modifications.beginner}</p>
                            </div>
                          )}
                          {exercise.modifications.advanced && (
                            <div>
                              <h4 className="font-semibold text-red-600 mb-2">Advanced Modification</h4>
                              <p className="text-sm text-gray-600">{exercise.modifications.advanced}</p>
                            </div>
                          )}
                        </div>
                      )}
                      
                      {exercise.tips && exercise.tips.length > 0 && (
                        <div className="mt-4">
                          <h4 className="font-semibold text-blue-600 mb-2">Tips</h4>
                          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                            {exercise.tips.map((tip: string, tipIndex: number) => (
                              <li key={tipIndex}>{tip}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Target Muscle Groups */}
          {workout.targetMuscleGroups && workout.targetMuscleGroups.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Target Muscle Groups</h2>
              <div className="flex flex-wrap gap-2">
                {workout.targetMuscleGroups.map((muscle, index) => (
                  <Badge key={index} variant="outline">{muscle}</Badge>
                ))}
              </div>
            </div>
          )}

          {/* Warm Up & Cool Down */}
          <div className="grid md:grid-cols-2 gap-6">
            {workout.warmUp && workout.warmUp.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Warm Up</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {workout.warmUp.map((item, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-sm text-gray-600">{item.duration}</p>
                        <p className="text-sm text-gray-600">{item.instructions}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {workout.coolDown && workout.coolDown.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Cool Down</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {workout.coolDown.map((item, index) => (
                      <div key={index} className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-sm text-gray-600">{item.duration}</p>
                        <p className="text-sm text-gray-600">{item.instructions}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
