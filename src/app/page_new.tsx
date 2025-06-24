'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FaDumbbell, FaAppleAlt, FaBrain, FaChartLine, FaUsers, FaStar } from 'react-icons/fa';
import { useFeaturedWorkouts, useHealthCheck } from '@/hooks/useApi';
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

export default function HomePage() {
  const { isAuthenticated, user } = useAuth();
  const { data: featuredWorkouts, isLoading: workoutsLoading } = useFeaturedWorkouts();
  const { data: healthCheck } = useHealthCheck();

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
            <FaDumbbell className="text-2xl text-blue-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Gym Sharks
            </h1>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {healthCheck?.success && (
              <Badge variant="outline" className="text-green-600 border-green-200">
                🟢 API Online
              </Badge>
            )}
            
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">Welcome back, {user?.name}</span>
                <Button asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
              </div>
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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              Transform Your
              <br />
              Fitness Journey
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Experience the ultimate fitness platform with AI-powered workouts, expert nutrition guidance, 
              and comprehensive progress tracking. Join thousands achieving their fitness goals.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {!isAuthenticated ? (
                <>
                  <Button size="lg" className="text-lg px-8 py-3" asChild>
                    <Link href="/auth/register">Start Free Trial</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 py-3" asChild>
                    <Link href="/workouts">Explore Workouts</Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button size="lg" className="text-lg px-8 py-3" asChild>
                    <Link href="/workouts">Browse Workouts</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 py-3" asChild>
                    <Link href="/ai-coach">AI Coach</Link>
                  </Button>
                </>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-gray-600 text-lg">Comprehensive tools and expert guidance for your fitness transformation</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: FaDumbbell,
                title: "Smart Workouts",
                description: "6 expertly designed home workout programs with detailed instructions and modifications",
                color: "text-blue-600"
              },
              {
                icon: FaAppleAlt,
                title: "Nutrition Plans",
                description: "Personalized diet plans for weight loss, muscle gain, and maintenance goals",
                color: "text-green-600"
              },
              {
                icon: FaBrain,
                title: "AI Coach",
                description: "Get personalized workout and nutrition advice powered by advanced AI technology",
                color: "text-purple-600"
              },
              {
                icon: FaChartLine,
                title: "Progress Tracking",
                description: "Comprehensive analytics to monitor your fitness journey and celebrate achievements",
                color: "text-orange-600"
              },
              {
                icon: FaUsers,
                title: "Supplement Guide",
                description: "12 research-backed supplements with detailed benefits and usage recommendations",
                color: "text-pink-600"
              },
              {
                icon: FaStar,
                title: "Premium Experience",
                description: "Ad-free experience with priority support and exclusive premium content",
                color: "text-yellow-600"
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <feature.icon className={`text-3xl ${feature.color} mb-2`} />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Content Sections */}
      {!workoutsLoading && featuredWorkouts?.success && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">Featured Workouts</h2>
              <p className="text-gray-600 text-lg">Popular workouts loved by our community</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredWorkouts.data.workouts.slice(0, 3).map((workout, index) => (
                <motion.div 
                  key={workout._id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
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
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{workout.duration} minutes</span>
                        <span>{workout.exerciseCount} exercises</span>
                      </div>
                      <Button className="w-full mt-4" asChild>
                        <Link href={`/workouts/${workout._id}`}>Start Workout</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" size="lg" asChild>
                <Link href="/workouts">View All Workouts</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {!isAuthenticated && (
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Ready to Transform?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of users already achieving their fitness goals with Gym Sharks
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
                  <Link href="/auth/register">Start Your Journey</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600" asChild>
                  <Link href="/supplements">Learn More</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FaDumbbell className="text-2xl text-blue-400" />
                <h3 className="text-xl font-bold">Gym Sharks</h3>
              </div>
              <p className="text-gray-400">
                Your ultimate fitness companion for achieving greatness.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/workouts" className="hover:text-white transition-colors">Workouts</Link></li>
                <li><Link href="/supplements" className="hover:text-white transition-colors">Supplements</Link></li>
                <li><Link href="/diets" className="hover:text-white transition-colors">Diet Plans</Link></li>
                <li><Link href="/ai-coach" className="hover:text-white transition-colors">AI Coach</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/community" className="hover:text-white transition-colors">Community</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Gym Sharks. All rights reserved. Built with 💪 for fitness enthusiasts.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
