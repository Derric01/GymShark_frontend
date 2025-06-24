'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import WorkoutShare from '@/components/WorkoutShare';
import { FaDumbbell, FaClock, FaFire, FaPlay, FaPause, FaCheck, FaArrowLeft, FaTrophy } from 'react-icons/fa';
import { mockWorkouts } from '@/lib/mockData';
import { HomeWorkout } from '@/types';

export default function WorkoutDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [workout, setWorkout] = useState<HomeWorkout | null>(null);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [isWorkoutStarted, setIsWorkoutStarted] = useState(false);
  const [isWorkoutCompleted, setIsWorkoutCompleted] = useState(false);
  const [completedExercises, setCompletedExercises] = useState<boolean[]>([]);
  const [workoutStartTime, setWorkoutStartTime] = useState<Date | null>(null);
  const [timer, setTimer] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Find the workout from mock data
    const workoutId = params?.id as string;
    const foundWorkout = mockWorkouts.find(w => w._id === workoutId);
    
    if (foundWorkout) {
      setWorkout(foundWorkout);
      setCompletedExercises(new Array(foundWorkout.exercises.length).fill(false));
    }
  }, [params?.id]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isWorkoutStarted && !isPaused && !isWorkoutCompleted) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [isWorkoutStarted, isPaused, isWorkoutCompleted]);

  const startWorkout = () => {
    setIsWorkoutStarted(true);
    setWorkoutStartTime(new Date());
    setTimer(0);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const completeExercise = (index: number) => {
    const newCompleted = [...completedExercises];
    newCompleted[index] = true;
    setCompletedExercises(newCompleted);

    // Check if all exercises are completed
    if (newCompleted.every(completed => completed)) {
      setIsWorkoutCompleted(true);
      setIsPaused(true);
    } else if (index < workout!.exercises.length - 1) {
      setCurrentExerciseIndex(index + 1);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const calculateCaloriesBurned = () => {
    if (!workout || !workoutStartTime) return 0;
    // Simple calculation based on workout intensity and duration
    const durationMinutes = timer / 60;
    const baseCalories = workout.calories || workout.estimatedCalories || 300;
    return Math.round((baseCalories / workout.duration) * durationMinutes);
  };

  if (!workout) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading workout...</p>
        </div>
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
            <Button variant="ghost" onClick={() => router.back()} className="mr-2">
              <FaArrowLeft className="mr-2" />
              Back
            </Button>
            <Link href="/" className="flex items-center gap-2">
              <FaDumbbell className="text-2xl text-blue-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Gym Sharks
              </h1>
            </Link>
          </motion.div>
          
          {isWorkoutStarted && !isWorkoutCompleted && (
            <motion.div 
              className="flex items-center gap-4 bg-white rounded-lg px-4 py-2 shadow-md"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="text-lg font-mono font-bold text-blue-600">
                {formatTime(timer)}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={togglePause}
              >
                {isPaused ? <FaPlay className="text-green-600" /> : <FaPause className="text-orange-600" />}
              </Button>
            </motion.div>
          )}
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {!isWorkoutStarted ? (
            // Workout Preview
            <motion.div
              key="preview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              {/* Workout Header */}
              <Card className="mb-8">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <Badge>{workout.category}</Badge>
                      <Badge variant={
                        workout.difficulty === 'Beginner' ? 'secondary' :
                        workout.difficulty === 'Intermediate' ? 'default' : 'destructive'
                      }>
                        {workout.difficulty}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-3xl mb-2">{workout.title}</CardTitle>
                  <CardDescription className="text-lg">{workout.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                      <FaClock className="text-2xl text-blue-600" />
                      <div>
                        <p className="font-semibold">{workout.duration} minutes</p>
                        <p className="text-sm text-gray-600">Duration</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
                      <FaFire className="text-2xl text-orange-600" />
                      <div>
                        <p className="font-semibold">{workout.calories || workout.estimatedCalories} cal</p>
                        <p className="text-sm text-gray-600">Estimated burn</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                      <FaDumbbell className="text-2xl text-green-600" />
                      <div>
                        <p className="font-semibold">{workout.exercises.length}</p>
                        <p className="text-sm text-gray-600">Exercises</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Target Muscles</h3>
                    <div className="flex flex-wrap gap-2">
                      {(workout.targetMuscleGroups || workout.targetMuscles || []).map(muscle => (
                        <Badge key={muscle} variant="outline">{muscle}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Equipment Needed</h3>
                    <div className="flex flex-wrap gap-2">
                      {workout.equipment?.map(item => (
                        <Badge key={item} variant="outline">{item}</Badge>
                      )) || <Badge variant="outline">No equipment needed</Badge>}
                    </div>
                  </div>

                  <Button onClick={startWorkout} size="lg" className="w-full md:w-auto">
                    <FaPlay className="mr-2" />
                    Start Workout
                  </Button>
                </CardContent>
              </Card>

              {/* Exercise List */}
              <Card>
                <CardHeader>
                  <CardTitle>Exercises ({workout.exercises.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {workout.exercises.map((exercise, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold">{exercise.name}</h4>                          <p className="text-sm text-gray-600">
                            {exercise.sets && exercise.reps 
                              ? `${exercise.sets} sets × ${exercise.reps} reps`
                              : exercise.reps.includes('second') || exercise.reps.includes('minute')
                                ? `${exercise.reps}`
                                : 'Follow instructions'
                            }
                          </p>
                          {exercise.instructions && (
                            <p className="text-sm text-gray-500 mt-1">{exercise.instructions}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ) : isWorkoutCompleted ? (
            // Workout Completion
            <motion.div
              key="completion"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <Card className="p-8">
                <div className="mb-6">
                  <FaTrophy className="text-6xl text-yellow-500 mx-auto mb-4" />
                  <h1 className="text-3xl font-bold mb-2">Workout Complete!</h1>
                  <p className="text-gray-600">Congratulations on completing your workout</p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">{formatTime(timer)}</p>
                    <p className="text-sm text-gray-600">Total Time</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <p className="text-2xl font-bold text-orange-600">{calculateCaloriesBurned()}</p>
                    <p className="text-sm text-gray-600">Calories Burned</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">{workout.exercises.length}</p>
                    <p className="text-sm text-gray-600">Exercises Done</p>
                  </div>
                </div>                {/* Workout Share Component */}
                <div className="mb-6">
                  <WorkoutShare 
                    workoutTitle={workout.title}
                    duration={Math.round(timer / 60)}
                    calories={calculateCaloriesBurned()}
                    difficulty={workout.difficulty}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <Link href="/workouts">Browse More Workouts</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/dashboard">Go to Dashboard</Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ) : (
            // Active Workout
            <motion.div
              key="active"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{workout.title}</CardTitle>
                      <CardDescription>
                        Exercise {currentExerciseIndex + 1} of {workout.exercises.length}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">{formatTime(timer)}</p>
                      <p className="text-sm text-gray-600">
                        {completedExercises.filter(Boolean).length}/{workout.exercises.length} completed
                      </p>
                    </div>
                  </div>
                </CardHeader>                <CardContent>
                  <div className="mb-6">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ 
                          width: `${Math.round((completedExercises.filter(Boolean).length / workout.exercises.length) * 100)}%` 
                        }}
                      />
                    </div>
                  </div>

                  {/* Current Exercise */}
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-4">
                      {workout.exercises[currentExerciseIndex]?.name}
                    </h2>                    <div className="text-lg text-gray-600 mb-4">
                      {workout.exercises[currentExerciseIndex]?.sets && workout.exercises[currentExerciseIndex]?.reps 
                        ? `${workout.exercises[currentExerciseIndex].sets} sets × ${workout.exercises[currentExerciseIndex].reps} reps`
                        : workout.exercises[currentExerciseIndex]?.reps.includes('second') || workout.exercises[currentExerciseIndex]?.reps.includes('minute')
                          ? `${workout.exercises[currentExerciseIndex].reps}`
                          : 'Follow instructions'
                      }
                    </div>
                    {workout.exercises[currentExerciseIndex]?.instructions && (
                      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        {workout.exercises[currentExerciseIndex].instructions}
                      </p>
                    )}
                    
                    <Button
                      onClick={() => completeExercise(currentExerciseIndex)}
                      size="lg"
                      disabled={completedExercises[currentExerciseIndex]}
                    >
                      {completedExercises[currentExerciseIndex] ? (
                        <>
                          <FaCheck className="mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Complete'
                      )}
                    </Button>
                  </div>

                  {/* Exercise Navigation */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    {workout.exercises.map((exercise, index) => (
                      <Button
                        key={index}
                        variant={completedExercises[index] ? "default" : index === currentExerciseIndex ? "outline" : "ghost"}
                        size="sm"
                        onClick={() => setCurrentExerciseIndex(index)}
                        className={`text-xs ${completedExercises[index] ? 'bg-green-600 hover:bg-green-700' : ''}`}
                      >
                        {completedExercises[index] && <FaCheck className="mr-1" />}
                        {index + 1}. {exercise.name.split(' ').slice(0, 2).join(' ')}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
