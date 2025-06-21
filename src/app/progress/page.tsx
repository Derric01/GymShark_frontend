'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { FaDumbbell, FaChartLine, FaArrowLeft, FaPlus, FaWeight, FaRuler, FaClock } from 'react-icons/fa';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { Progress } from '@/types';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export default function ProgressPage() {
  const { isAuthenticated } = useAuth();
  
  // Use mock data directly since progress API endpoints don't exist yet
  const progressData = {
    success: true,
    data: {
      entries: [
        {
          _id: '1',
          weight: 70,
          bodyFat: 15,
          muscleMass: 35,
          notes: 'Feeling strong this week!',
          date: new Date().toISOString(),
          measurements: {
            chest: 95,
            waist: 80,
            hips: 90,
            arms: 30,
            thighs: 55
          }
        },
        {
          _id: '2',
          weight: 69.5,
          bodyFat: 16,
          muscleMass: 34.5,
          notes: 'Good progress on cardio',
          date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
          measurements: {
            chest: 94,
            waist: 81,
            hips: 91,
            arms: 29,
            thighs: 54
          }
        }
      ]
    }
  };
  const isLoading = false;
    const [progressEntries, setProgressEntries] = useState<Progress[]>(progressData.data.entries as Progress[]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    weight: '',
    bodyFat: '',
    muscleMass: '',
    notes: '',
    measurements: {
      chest: '',
      waist: '',
      hips: '',
      arms: '',
      thighs: ''
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();    // Create new entry from form data
    const newEntry: Progress = {
      _id: Date.now().toString(),
      user: 'demo-user',
      weight: formData.weight ? parseFloat(formData.weight) : undefined,
      bodyFat: formData.bodyFat ? parseFloat(formData.bodyFat) : undefined,
      muscleMass: formData.muscleMass ? parseFloat(formData.muscleMass) : undefined,
      notes: formData.notes || '',
      date: new Date().toISOString(),
      measurements: {
        chest: formData.measurements.chest ? parseFloat(formData.measurements.chest) : undefined,
        waist: formData.measurements.waist ? parseFloat(formData.measurements.waist) : undefined,
        hips: formData.measurements.hips ? parseFloat(formData.measurements.hips) : undefined,
        arms: formData.measurements.arms ? parseFloat(formData.measurements.arms) : undefined,
        thighs: formData.measurements.thighs ? parseFloat(formData.measurements.thighs) : undefined,
      }
    };

    // Add to entries (newest first)
    setProgressEntries([newEntry, ...progressEntries]);
    toast.success('Progress entry added successfully!');
    setShowForm(false);
    setFormData({
      weight: '',
      bodyFat: '',
      muscleMass: '',
      notes: '',
      measurements: {
        chest: '',
        waist: '',
        hips: '',
        arms: '',
        thighs: ''
      }
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Authentication Required</CardTitle>
            <CardDescription>Please log in to view your progress</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button asChild>
              <Link href="/auth/login">Login</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

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
              <FaDumbbell className="text-2xl text-blue-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Progress Tracking
              </h1>
            </div>
          </div>
          
          <Button onClick={() => setShowForm(!showForm)} className="flex items-center gap-2">
            <FaPlus />
            Add Progress
          </Button>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Add Progress Form */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-8"
          >
            <Card>
              <CardHeader>
                <CardTitle>Add Progress Entry</CardTitle>
                <CardDescription>
                  Track your fitness progress with measurements and notes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Metrics */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="weight">Weight (kg)</Label>
                      <div className="relative">
                        <FaWeight className="absolute left-3 top-3 text-gray-400" />
                        <Input
                          id="weight"
                          type="number"
                          step="0.1"
                          placeholder="70.5"
                          value={formData.weight}
                          onChange={(e) => setFormData(prev => ({ ...prev, weight: e.target.value }))}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="bodyFat">Body Fat (%)</Label>
                      <Input
                        id="bodyFat"
                        type="number"
                        step="0.1"
                        placeholder="15.5"
                        value={formData.bodyFat}
                        onChange={(e) => setFormData(prev => ({ ...prev, bodyFat: e.target.value }))}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="muscleMass">Muscle Mass (kg)</Label>
                      <Input
                        id="muscleMass"
                        type="number"
                        step="0.1"
                        placeholder="45.2"
                        value={formData.muscleMass}
                        onChange={(e) => setFormData(prev => ({ ...prev, muscleMass: e.target.value }))}
                      />
                    </div>
                  </div>

                  {/* Measurements */}
                  <div>
                    <Label className="text-base font-semibold">Body Measurements (cm)</Label>
                    <div className="grid md:grid-cols-5 gap-4 mt-2">
                      {(['chest', 'waist', 'hips', 'arms', 'thighs'] as const).map((measurement) => (
                        <div key={measurement}>
                          <Label htmlFor={measurement} className="capitalize">{measurement}</Label>
                          <Input
                            id={measurement}
                            type="number"
                            step="0.1"
                            placeholder="90.0"
                            value={formData.measurements[measurement]}
                            onChange={(e) => setFormData(prev => ({
                              ...prev,
                              measurements: { ...prev.measurements, [measurement]: e.target.value }
                            }))}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <Label htmlFor="notes">Notes</Label>
                    <textarea
                      id="notes"
                      placeholder="How are you feeling? Any achievements or observations?"
                      value={formData.notes}
                      onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                      className="w-full p-3 border rounded-md resize-none h-24"
                    />                  </div>

                  <div className="flex gap-4">
                    <Button 
                      type="submit" 
                      className="flex-1"
                    >
                      Add Progress Entry
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setShowForm(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Progress History */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Progress History</h2>
            {progressEntries && progressEntries.length > 0 && (
              <Badge variant="outline">
                {progressEntries.length} {progressEntries.length === 1 ? 'entry' : 'entries'}
              </Badge>
            )}
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading progress data...</p>
            </div>
          ) : progressEntries && progressEntries.length > 0 ? (
            <div className="grid gap-4">
              {progressEntries.map((entry: Progress, index: number) => (
                <Card key={entry._id}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <FaClock className="text-gray-400" />
                        <span className="text-sm text-gray-600">
                          {new Date(entry.date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <Badge variant="outline">Entry #{progressEntries.length - index}</Badge>
                    </div>
                    
                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      {entry.weight && (
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <FaWeight className="text-blue-600 mx-auto mb-1" />
                          <div className="font-semibold">{entry.weight} kg</div>
                          <div className="text-sm text-gray-600">Weight</div>
                        </div>
                      )}
                      {entry.bodyFat && (
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <div className="font-semibold">{entry.bodyFat}%</div>
                          <div className="text-sm text-gray-600">Body Fat</div>
                        </div>
                      )}
                      {entry.muscleMass && (
                        <div className="text-center p-3 bg-purple-50 rounded-lg">
                          <div className="font-semibold">{entry.muscleMass} kg</div>
                          <div className="text-sm text-gray-600">Muscle Mass</div>
                        </div>
                      )}
                      {entry.measurements && Object.values(entry.measurements).some(val => val) && (
                        <div className="text-center p-3 bg-orange-50 rounded-lg">
                          <FaRuler className="text-orange-600 mx-auto mb-1" />
                          <div className="font-semibold">Measured</div>
                          <div className="text-sm text-gray-600">Body Measurements</div>
                        </div>
                      )}
                    </div>
                    
                    {entry.notes && (
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="text-sm font-medium text-gray-700 mb-1">Notes:</div>
                        <div className="text-gray-600">{entry.notes}</div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <FaChartLine className="text-6xl text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Progress Data Yet</h3>
                <p className="text-gray-600 mb-6">
                  Start tracking your fitness journey by adding your first progress entry.                </p>
                <Button onClick={() => setShowForm(true)} className="flex items-center gap-2 mx-auto">
                  <FaPlus />
                  Add Your First Entry
                </Button>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </div>
    </div>
  );
}
