'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FaDumbbell, 
  FaAppleAlt, 
  FaBrain, 
  FaChartLine, 
  FaUsers, 
  FaStar,
  FaPlay,
  FaArrowRight,
  FaCheckCircle,
  FaFire,
  FaTrophy,
  FaRocket
} from 'react-icons/fa';
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
  const { data: featuredWorkouts, isLoading: workoutsLoading, error: workoutsError } = useFeaturedWorkouts();
  const { data: healthCheck } = useHealthCheck();

  // Debug logging
  console.log('Featured workouts data:', featuredWorkouts);
  console.log('Workouts loading:', workoutsLoading);
  console.log('Workouts error:', workoutsError);
  return (    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Primary floating orbs */}
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-[28rem] h-[28rem] bg-gradient-to-tr from-pink-400/30 to-orange-400/30 rounded-full blur-3xl"
          animate={{ 
            rotate: -360,
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 15, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 18, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        {/* Secondary floating elements */}
        <motion.div 
          className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-green-400/20 to-cyan-400/20 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-red-400/20 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
        />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <FaDumbbell className="text-3xl text-blue-600" />
              <motion.div 
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-sm"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
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
              <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                🟢 API Online
              </Badge>
            )}
            
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">Welcome back, <span className="font-semibold text-gray-900">{user?.name}</span></span>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="outline" className="hover:bg-blue-50" asChild>
                  <Link href="/auth/login">Login</Link>
                </Button>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
                  <Link href="/auth/register">Get Started</Link>
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </header>      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Additional Hero Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000" />
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse delay-500" />
          <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-orange-400 rounded-full animate-pulse delay-700" />
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-6xl mx-auto"
          >
            {/* Hero Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 px-8 py-4 rounded-full border border-blue-200 mb-10 shadow-lg backdrop-blur-sm"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <FaTrophy className="text-yellow-500 text-lg" />
              </motion.div>
              <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                🏆 #1 Fitness Platform - Trusted by 50,000+ Athletes Worldwide
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-6xl md:text-8xl lg:text-9xl font-black mb-10 leading-tight relative"
            >
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-2xl">
                Transform Your
              </span>
              <span className="block bg-gradient-to-r from-pink-600 via-red-500 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl">
                Fitness Journey
              </span>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-6 -right-6 text-4xl"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                💪
              </motion.div>
              <motion.div 
                className="absolute -bottom-8 -left-8 text-3xl"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                🔥
              </motion.div>
            </motion.h1>
              <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
            >
              Experience the ultimate fitness platform with{' '}
              <motion.span 
                className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                AI-powered workouts
              </motion.span>
              , expert nutrition guidance, and comprehensive progress tracking.
              <br className="hidden lg:block" />
              Join{' '}
              <motion.span 
                className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                thousands
              </motion.span>
              {' '}achieving their fitness goals with cutting-edge technology.
            </motion.p>            {/* Enhanced Stats */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto"
            >
              {[
                { icon: FaUsers, value: "50K+", label: "Active Athletes", color: "from-blue-500 to-cyan-500", bgColor: "bg-blue-50", emoji: "👥" },
                { icon: FaDumbbell, value: "500+", label: "Expert Workouts", color: "from-purple-500 to-indigo-500", bgColor: "bg-purple-50", emoji: "💪" },
                { icon: FaFire, value: "1M+", label: "Calories Burned", color: "from-orange-500 to-red-500", bgColor: "bg-orange-50", emoji: "🔥" },
                { icon: FaTrophy, value: "99%", label: "Success Rate", color: "from-green-500 to-emerald-500", bgColor: "bg-green-50", emoji: "🏆" }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group cursor-default"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${stat.bgColor} flex items-center justify-center shadow-lg relative overflow-hidden`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className={`text-2xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                    
                    {/* Emoji that appears on hover */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center text-2xl"
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {stat.emoji}
                    </motion.div>
                  </motion.div>
                  <div className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
              <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12"
            >
              {!isAuthenticated ? (
                <>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      size="lg" 
                      className="text-xl px-12 py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-2xl hover:shadow-3xl transition-all duration-500 group relative overflow-hidden" 
                      asChild
                    >
                      <Link href="/auth/register" className="flex items-center gap-3 relative z-10">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <FaRocket className="group-hover:scale-110 transition-transform" />
                        </motion.div>
                        Start Free Trial
                        <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                        
                        {/* Animated background */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "0%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </Link>
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="text-xl px-12 py-6 border-3 border-gray-300 hover:border-blue-500 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-500 group backdrop-blur-sm" 
                      asChild
                    >
                      <Link href="/workouts" className="flex items-center gap-3">
                        <FaPlay className="group-hover:scale-125 transition-transform duration-300" />
                        Explore Workouts
                        <motion.div
                          className="w-2 h-2 bg-blue-500 rounded-full"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      </Link>
                    </Button>
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      size="lg" 
                      className="text-xl px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl hover:shadow-3xl transition-all duration-500" 
                      asChild
                    >
                      <Link href="/workouts">Browse Workouts</Link>
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="text-xl px-12 py-6 border-3 border-purple-300 hover:border-purple-500 hover:bg-purple-50" 
                      asChild
                    >
                      <Link href="/ai-coach">AI Coach</Link>
                    </Button>
                  </motion.div>
                </>
              )}
            </motion.div>

            {/* Enhanced Trust Indicators */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-12 text-gray-500"
            >
              {[
                { icon: FaCheckCircle, text: "No Credit Card Required", color: "text-green-500" },
                { icon: FaCheckCircle, text: "14-Day Free Trial", color: "text-blue-500" },
                { icon: FaCheckCircle, text: "Cancel Anytime", color: "text-purple-500" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3 group cursor-default"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    <item.icon className={`${item.color} text-lg`} />
                  </motion.div>
                  <span className="text-sm font-semibold group-hover:text-gray-700 transition-colors">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>      {/* Features Grid */}
      <section className="py-24 px-4 bg-gradient-to-b from-white/80 via-blue-50/50 to-purple-50/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 px-6 py-3 rounded-full mb-6 shadow-lg backdrop-blur-sm border border-blue-200"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <FaStar className="text-yellow-500 text-lg" />
              </motion.div>
              <span className="text-sm font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                ✨ Premium Features That Deliver Results
              </span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
              Everything You Need<br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                to Succeed
              </span>
            </h2>
            <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive tools and expert guidance for your ultimate fitness transformation
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {[
              {
                icon: FaDumbbell,
                title: "Smart Workouts",
                description: "6 expertly designed home workout programs with detailed instructions and modifications for all fitness levels",
                color: "text-blue-600",
                bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
                borderColor: "border-blue-200",
                gradientFrom: "from-blue-500",
                gradientTo: "to-cyan-500"
              },
              {
                icon: FaAppleAlt,
                title: "Nutrition Plans",
                description: "Personalized diet plans for weight loss, muscle gain, and maintenance goals with macro tracking",
                color: "text-green-600",
                bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
                borderColor: "border-green-200",
                gradientFrom: "from-green-500",
                gradientTo: "to-emerald-500"
              },
              {
                icon: FaBrain,
                title: "AI Coach",
                description: "Get personalized workout and nutrition advice powered by advanced AI technology and machine learning",
                color: "text-purple-600",
                bgColor: "bg-gradient-to-br from-purple-50 to-indigo-100",
                borderColor: "border-purple-200",
                gradientFrom: "from-purple-500",
                gradientTo: "to-indigo-500"
              },
              {
                icon: FaChartLine,
                title: "Progress Tracking",
                description: "Comprehensive analytics to monitor your fitness journey and celebrate achievements with detailed insights",
                color: "text-orange-600",
                bgColor: "bg-gradient-to-br from-orange-50 to-red-100",
                borderColor: "border-orange-200",
                gradientFrom: "from-orange-500",
                gradientTo: "to-red-500"
              },
              {
                icon: FaUsers,
                title: "Supplement Guide",
                description: "12 research-backed supplements with detailed benefits, usage recommendations, and safety information",
                color: "text-pink-600",
                bgColor: "bg-gradient-to-br from-pink-50 to-rose-100",
                borderColor: "border-pink-200",
                gradientFrom: "from-pink-500",
                gradientTo: "to-rose-500"
              },
              {
                icon: FaStar,
                title: "Premium Experience",
                description: "Ad-free experience with priority support, exclusive premium content, and advanced features",
                color: "text-yellow-600",
                bgColor: "bg-gradient-to-br from-yellow-50 to-amber-100",
                borderColor: "border-yellow-200",
                gradientFrom: "from-yellow-500",
                gradientTo: "to-amber-500"
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <motion.div
                  whileHover={{ 
                    scale: 1.08, 
                    y: -10,
                    rotateY: 5,
                    rotateX: 5
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Card className={`h-full hover:shadow-2xl transition-all duration-500 border-2 ${feature.borderColor} ${feature.bgColor} backdrop-blur-sm group relative overflow-hidden`}>
                    {/* Animated background gradient on hover */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    <CardHeader className="pb-4 relative z-10">
                      <motion.div 
                        className={`w-20 h-20 rounded-3xl ${feature.bgColor} flex items-center justify-center mb-6 shadow-lg relative`}
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.2
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <feature.icon className={`text-4xl ${feature.color}`} />
                        
                        {/* Icon glow effect */}
                        <motion.div 
                          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo} opacity-0 group-hover:opacity-20 blur-xl`}
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>
                      
                      <CardTitle className="text-2xl md:text-3xl font-black text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="relative z-10">
                      <CardDescription className="text-gray-600 leading-relaxed text-base md:text-lg font-medium">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>{/* Featured Content Sections */}
      {!workoutsLoading && featuredWorkouts?.success && featuredWorkouts?.data?.workouts && (
        <section className="py-20 px-4 bg-white/80">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
                <FaFire className="text-orange-500" />
                <span className="text-sm font-semibold text-orange-700">Most Popular</span>
              </div>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Featured Workouts
              </h2>
              <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                Popular workouts loved by our community of fitness enthusiasts
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(featuredWorkouts?.data?.workouts || []).slice(0, 3).map((workout, index) => (
                <motion.div 
                  key={workout._id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-2xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm hover:scale-105 group overflow-hidden">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10" />
                      <CardHeader className="relative">
                        <div className="flex items-center justify-between mb-3">
                          <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                            {workout.category}
                          </Badge>
                          <Badge variant="outline" className="border-gray-300 bg-white/80">
                            {workout.difficulty}
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {workout.title}
                        </CardTitle>
                      </CardHeader>
                    </div>
                    <CardContent className="pt-0">
                      <CardDescription className="mb-6 line-clamp-2 text-gray-600 text-base leading-relaxed">
                        {workout.description}
                      </CardDescription>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                        <div className="flex items-center gap-2">
                          <FaPlay className="text-blue-500" />
                          <span className="font-medium">{workout.duration} minutes</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaDumbbell className="text-purple-500" />
                          <span className="font-medium">{workout.exerciseCount} exercises</span>
                        </div>
                      </div>
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 group/btn" 
                        asChild
                      >
                        <Link href={`/workouts/${workout._id}`} className="flex items-center justify-center gap-2">
                          <FaPlay className="group-hover/btn:scale-110 transition-transform" />
                          Start Workout
                          <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-2 border-blue-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300" 
                asChild
              >
                <Link href="/workouts" className="flex items-center gap-2">
                  View All Workouts
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}      {/* CTA Section */}
      {!isAuthenticated && (
        <section className="py-24 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>
          </div>
          
          <div className="container mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 px-6 py-3 rounded-full mb-8">
                <FaRocket className="text-yellow-300" />
                <span className="text-sm font-semibold">
                  Limited Time Offer
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Ready to Transform?
              </h2>
              <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
                Join <span className="font-bold text-yellow-300">50,000+</span> users already achieving their fitness goals with Gym Sharks.
                <br className="hidden md:block" />
                Start your transformation journey today!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="text-lg px-12 py-4 bg-white text-blue-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 group" 
                  asChild
                >
                  <Link href="/auth/register" className="flex items-center gap-2">
                    <FaRocket className="group-hover:animate-bounce" />
                    Start Your Journey
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-12 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 group" 
                  asChild
                >
                  <Link href="/supplements" className="flex items-center gap-2">
                    <FaBrain className="group-hover:scale-110 transition-transform" />
                    Learn More
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-300" />
                  <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-300" />
                  <span>14-Day Free Trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-300" />
                  <span>Cancel Anytime</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <FaDumbbell className="text-3xl text-blue-400" />
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 blur-sm" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Gym Sharks
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Your ultimate fitness companion for achieving greatness. Transform your body, mind, and lifestyle with our comprehensive platform.
              </p>
              <div className="flex gap-4">
                {/* Social Media Icons Placeholder */}
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">i</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6 text-blue-400">Features</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/workouts" className="hover:text-white transition-colors flex items-center gap-2">
                    <FaDumbbell className="text-sm" />
                    Workouts
                  </Link>
                </li>
                <li>
                  <Link href="/supplements" className="hover:text-white transition-colors flex items-center gap-2">
                    <FaUsers className="text-sm" />
                    Supplements
                  </Link>
                </li>
                <li>
                  <Link href="/diets" className="hover:text-white transition-colors flex items-center gap-2">
                    <FaAppleAlt className="text-sm" />
                    Diet Plans
                  </Link>
                </li>
                <li>
                  <Link href="/ai-coach" className="hover:text-white transition-colors flex items-center gap-2">
                    <FaBrain className="text-sm" />
                    AI Coach
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6 text-purple-400">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/community" className="hover:text-white transition-colors">Community</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6 text-pink-400">Legal</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-center md:text-left">
                &copy; 2025 Gym Sharks. All rights reserved. Built with 💪 for fitness enthusiasts.
              </p>
              <div className="flex items-center gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400" />
                  <span className="text-sm">Secure & Safe</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaTrophy className="text-yellow-400" />
                  <span className="text-sm">Award Winning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
