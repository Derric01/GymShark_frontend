'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FaBrain, FaDumbbell, FaAppleAlt, FaRobot, FaLightbulb } from 'react-icons/fa';
import { useWorkoutTips, useNutritionAdvice, useGeneralTips } from '@/hooks/useApi';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { getMockAIResponse } from '@/lib/mockData';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export default function AICoachPage() {
  const [activeTab, setActiveTab] = useState('workout');
  const [workoutForm, setWorkoutForm] = useState({
    fitnessGoal: '',
    experience: '',
    equipment: [] as string[]
  });  const [nutritionForm, setNutritionForm] = useState({
    goal: '',
    age: '',
    gender: '',
    activityLevel: '',
    dietaryRestrictions: [] as string[]
  });

  const [mockResponse, setMockResponse] = useState<{
    recommendations?: string[];
    personalizedAdvice?: string;
    tips?: string[];
  } | null>(null);
  const [useMockData, setUseMockData] = useState(false);

  const { isAuthenticated } = useAuth();
  const workoutTipsMutation = useWorkoutTips();
  const nutritionAdviceMutation = useNutritionAdvice();
  const generalTipsMutation = useGeneralTips();  const handleWorkoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!workoutForm.fitnessGoal || !workoutForm.experience) {
      toast.error('Please fill in all required fields');
      return;
    }    // Use mock data directly since AI endpoints don't exist yet
    const mockData = getMockAIResponse('workout');
    setMockResponse(mockData.data);
    setUseMockData(true);
    toast.success('Workout tips generated! (Demo data)');
  };  const handleNutritionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nutritionForm.goal || !nutritionForm.age || !nutritionForm.gender || !nutritionForm.activityLevel) {
      toast.error('Please fill in all required fields');
      return;
    }    // Use mock data directly since AI endpoints don't exist yet
    const mockData = getMockAIResponse('nutrition');
    setMockResponse(mockData.data);
    setUseMockData(true);
    toast.success('Nutrition advice generated! (Demo data)');
  };  const handleGeneralTips = async () => {
    // Use mock data directly since AI endpoints don't exist yet
    const mockData = getMockAIResponse('general');
    setMockResponse(mockData.data);
    setUseMockData(true);
    toast.success('General tips generated! (Demo data)');
  };

  const handleEquipmentChange = (equipment: string) => {
    setWorkoutForm(prev => ({
      ...prev,
      equipment: prev.equipment.includes(equipment)
        ? prev.equipment.filter(e => e !== equipment)
        : [...prev.equipment, equipment]
    }));
  };

  const handleDietaryChange = (restriction: string) => {
    setNutritionForm(prev => ({
      ...prev,
      dietaryRestrictions: prev.dietaryRestrictions.includes(restriction)
        ? prev.dietaryRestrictions.filter(r => r !== restriction)
        : [...prev.dietaryRestrictions, restriction]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
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
              <FaBrain className="text-2xl text-purple-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Gym Sharks AI
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
        >          <h1 className="text-4xl font-bold mb-4">AI Fitness Coach (BETA)</h1>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <p className="text-yellow-800 text-sm">
              🚧 <strong>Beta Feature:</strong> Our AI coach is currently in development. 
              Responses may be limited or use demo data. For best results, consult with a qualified fitness professional.
            </p>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get personalized workout and nutrition advice powered by AI. 
            Fill out the forms below to receive tailored recommendations for your fitness journey.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex rounded-lg border bg-white p-1">
            <button
              onClick={() => setActiveTab('workout')}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'workout' 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FaDumbbell />
              Workout Tips
            </button>
            <button
              onClick={() => setActiveTab('nutrition')}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'nutrition' 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FaAppleAlt />
              Nutrition Advice
            </button>
            <button
              onClick={() => setActiveTab('general')}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'general' 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FaLightbulb />
              General Tips
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FaRobot className="text-purple-600" />
                  {activeTab === 'workout' && 'Workout Recommendations'}
                  {activeTab === 'nutrition' && 'Nutrition Guidance'}
                  {activeTab === 'general' && 'General Fitness Tips'}
                </CardTitle>
                <CardDescription>
                  {activeTab === 'workout' && 'Tell us about your fitness goals and available equipment'}
                  {activeTab === 'nutrition' && 'Share your nutrition goals and dietary preferences'}
                  {activeTab === 'general' && 'Get general fitness tips and motivation'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {activeTab === 'workout' && (
                  <form onSubmit={handleWorkoutSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="fitnessGoal">Fitness Goal *</Label>
                      <select
                        id="fitnessGoal"
                        value={workoutForm.fitnessGoal}
                        onChange={(e) => setWorkoutForm(prev => ({ ...prev, fitnessGoal: e.target.value }))}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                        required
                        aria-label="Select fitness goal"
                      >
                        <option value="">Select your goal</option>
                        <option value="weight loss">Weight Loss</option>
                        <option value="muscle gain">Muscle Gain</option>
                        <option value="strength">Build Strength</option>
                        <option value="endurance">Improve Endurance</option>
                        <option value="flexibility">Increase Flexibility</option>
                        <option value="general fitness">General Fitness</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="experience">Experience Level *</Label>
                      <select
                        id="experience"
                        value={workoutForm.experience}
                        onChange={(e) => setWorkoutForm(prev => ({ ...prev, experience: e.target.value }))}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                        required
                        aria-label="Select experience level"
                      >
                        <option value="">Select experience</option>
                        <option value="beginner">Beginner (0-6 months)</option>
                        <option value="intermediate">Intermediate (6 months - 2 years)</option>
                        <option value="advanced">Advanced (2+ years)</option>
                      </select>
                    </div>

                    <div>
                      <Label>Available Equipment</Label>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {['Dumbbells', 'Resistance Bands', 'Yoga Mat', 'Pull-up Bar', 'Kettlebells', 'None (Bodyweight)'].map(equipment => (
                          <label key={equipment} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={workoutForm.equipment.includes(equipment)}
                              onChange={() => handleEquipmentChange(equipment)}
                              className="rounded"
                            />
                            <span className="text-sm">{equipment}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <Button type="submit" className="w-full" disabled={workoutTipsMutation.isPending}>
                      {workoutTipsMutation.isPending ? 'Getting Tips...' : 'Get Workout Tips'}
                    </Button>
                  </form>
                )}

                {activeTab === 'nutrition' && (
                  <form onSubmit={handleNutritionSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="goal">Nutrition Goal *</Label>
                      <select
                        id="goal"
                        value={nutritionForm.goal}
                        onChange={(e) => setNutritionForm(prev => ({ ...prev, goal: e.target.value }))}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                        required
                        aria-label="Select nutrition goal"
                      >
                        <option value="">Select your goal</option>
                        <option value="weight loss">Weight Loss</option>
                        <option value="muscle gain">Muscle Gain</option>
                        <option value="maintenance">Weight Maintenance</option>
                        <option value="performance">Athletic Performance</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="age">Age *</Label>
                        <Input
                          id="age"
                          type="number"
                          placeholder="25"
                          value={nutritionForm.age}
                          onChange={(e) => setNutritionForm(prev => ({ ...prev, age: e.target.value }))}
                          required
                          min="13"
                          max="100"
                        />
                      </div>
                      <div>
                        <Label htmlFor="gender">Gender *</Label>
                        <select
                          id="gender"
                          value={nutritionForm.gender}
                          onChange={(e) => setNutritionForm(prev => ({ ...prev, gender: e.target.value }))}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                          required
                          aria-label="Select gender"
                        >
                          <option value="">Select</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="activityLevel">Activity Level *</Label>
                      <select
                        id="activityLevel"
                        value={nutritionForm.activityLevel}
                        onChange={(e) => setNutritionForm(prev => ({ ...prev, activityLevel: e.target.value }))}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                        required
                        aria-label="Select activity level"
                      >
                        <option value="">Select activity level</option>
                        <option value="sedentary">Sedentary (office job)</option>
                        <option value="light">Light activity (1-3 days/week)</option>
                        <option value="moderate">Moderate (3-5 days/week)</option>
                        <option value="active">Very active (6-7 days/week)</option>
                        <option value="extreme">Extremely active (2x/day)</option>
                      </select>
                    </div>

                    <div>
                      <Label>Dietary Restrictions</Label>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free', 'Keto', 'None'].map(restriction => (
                          <label key={restriction} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={nutritionForm.dietaryRestrictions.includes(restriction)}
                              onChange={() => handleDietaryChange(restriction)}
                              className="rounded"
                            />
                            <span className="text-sm">{restriction}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <Button type="submit" className="w-full" disabled={nutritionAdviceMutation.isPending}>
                      {nutritionAdviceMutation.isPending ? 'Getting Advice...' : 'Get Nutrition Advice'}
                    </Button>
                  </form>
                )}

                {activeTab === 'general' && (
                  <div className="text-center space-y-4">
                    <p className="text-gray-600">
                      Get instant general fitness tips and motivation to keep you on track with your goals.
                    </p>
                    <Button onClick={handleGeneralTips} className="w-full" disabled={generalTipsMutation.isPending}>
                      {generalTipsMutation.isPending ? 'Getting Tips...' : 'Get General Tips'}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* AI Response */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FaBrain className="text-purple-600" />
                  AI Coach Response
                </CardTitle>
                <CardDescription>
                  Your personalized recommendations will appear here
                </CardDescription>
              </CardHeader>              <CardContent>
                {(workoutTipsMutation.data || nutritionAdviceMutation.data || generalTipsMutation.data || useMockData) ? (
                  <div className="space-y-4">
                    {useMockData && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                        <p className="text-blue-800 text-sm">
                          📝 <strong>Demo Response:</strong> This is sample advice to demonstrate functionality. 
                          Real AI responses may vary based on API availability.
                        </p>
                      </div>
                    )}
                    
                    {/* Display recommendations */}
                    {((useMockData ? mockResponse?.recommendations : null) || 
                      workoutTipsMutation.data?.data?.recommendations || 
                      nutritionAdviceMutation.data?.data?.recommendations || 
                      generalTipsMutation.data?.data?.recommendations)?.map((recommendation: string, index: number) => (
                      <div key={index} className="p-3 bg-purple-50 rounded-lg">
                        <p className="text-sm text-purple-800">{recommendation}</p>
                      </div>
                    ))}
                    
                    {/* Display personalized advice */}
                    {((useMockData ? mockResponse?.personalizedAdvice : null) ||
                      workoutTipsMutation.data?.data?.personalizedAdvice || 
                      nutritionAdviceMutation.data?.data?.personalizedAdvice || 
                      generalTipsMutation.data?.data?.personalizedAdvice) && (
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-2">Personalized Advice:</h4>
                        <p className="text-blue-800">
                          {(useMockData ? mockResponse?.personalizedAdvice : null) ||
                           workoutTipsMutation.data?.data?.personalizedAdvice || 
                           nutritionAdviceMutation.data?.data?.personalizedAdvice || 
                           generalTipsMutation.data?.data?.personalizedAdvice}
                        </p>
                      </div>
                    )}
                    
                    {/* Display additional tips */}
                    {(((useMockData ? mockResponse?.tips : null) ||
                      workoutTipsMutation.data?.data?.tips || 
                      nutritionAdviceMutation.data?.data?.tips || 
                      generalTipsMutation.data?.data?.tips) || [])?.length > 0 && (
                      <div>
                        <h4 className="font-medium mb-2">Additional Tips:</h4>
                        <ul className="space-y-1">
                          {((useMockData ? mockResponse?.tips : null) ||
                            workoutTipsMutation.data?.data?.tips || 
                            nutritionAdviceMutation.data?.data?.tips || 
                            generalTipsMutation.data?.data?.tips)?.map((tip: string, index: number) => (
                            <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="text-purple-600 mt-1">•</span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <FaRobot className="text-4xl mx-auto mb-4 text-gray-400" />
                    <p className="mb-2">Submit a form to get personalized AI recommendations!</p>
                    <p className="text-sm text-gray-400">
                      💡 <strong>Tip:</strong> Be specific about your goals and current fitness level for better advice.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
