'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { FaAppleAlt, FaSearch, FaFilter, FaStar, FaShieldAlt } from 'react-icons/fa';
import { mockSupplements } from '@/lib/mockData';
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

export default function SupplementsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');  const { isAuthenticated } = useAuth();
  
  // Use mock data directly since API endpoints don't exist yet
  const supplementsData = mockSupplements;
  const isLoading = false;
  const error = null;

  const categories = [
    'Protein', 'Pre-Workout', 'Post-Workout', 'Vitamins', 'Minerals',
    'Amino Acids', 'Fat Burners', 'Mass Gainers', 'Recovery', 'General Health'
  ];

  const filteredSupplements = supplementsData.filter(supplement =>
    supplement.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    supplement.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              <FaAppleAlt className="text-2xl text-green-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
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
          <h1 className="text-4xl font-bold mb-4">Supplement Guide</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover science-backed supplements to optimize your nutrition and accelerate your fitness results. 
            Each supplement is carefully researched and categorized for your goals.
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
                <FaFilter className="text-green-600" />
                Find Your Supplements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {/* Search */}
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search supplements..."
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
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Results */}
        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">Loading supplements...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600">Failed to load supplements. Please try again.</p>
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
                Showing {filteredSupplements.length} of {supplementsData.length} supplements
              </p>
            </motion.div>

            {/* Supplements Grid */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredSupplements.map((supplement) => (
                <motion.div key={supplement._id} variants={fadeInUp}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-green-100 text-green-800">{supplement.category}</Badge>
                        <div className="flex items-center gap-1">
                          {supplement.isEssential && (
                            <Badge variant="destructive" className="text-xs">Essential</Badge>
                          )}
                          {supplement.isPopular && (
                            <Badge variant="default" className="text-xs">Popular</Badge>
                          )}
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-green-600 transition-colors">
                        {supplement.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4 line-clamp-3">
                        {supplement.description}
                      </CardDescription>
                      
                      {/* Benefits */}
                      <div className="mb-4">
                        <h4 className="font-medium text-sm mb-2">Key Benefits:</h4>
                        <div className="flex flex-wrap gap-1">
                          {supplement.benefits?.slice(0, 3).map((benefit, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Recommended For */}
                      <div className="mb-4">
                        <h4 className="font-medium text-sm mb-2">Recommended For:</h4>
                        <div className="flex flex-wrap gap-1">
                          {supplement.recommendedFor?.slice(0, 2).map((goal, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {goal}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Effectiveness Rating */}
                      {supplement.effectiveness && (
                        <div className="mb-4 flex items-center gap-2 text-sm">
                          <FaStar className="text-yellow-500" />
                          <span>{supplement.effectiveness.rating}/10</span>
                          <Badge variant="outline" className="text-xs">
                            {supplement.effectiveness.evidenceLevel} Evidence
                          </Badge>
                        </div>
                      )}

                      {/* Dosage */}
                      <div className="mb-4 text-sm text-gray-600">
                        <FaShieldAlt className="inline mr-1 text-blue-500" />
                        <strong>Dosage:</strong> {supplement.dosage.amount} {supplement.dosage.frequency}
                      </div>

                      <Button className="w-full" asChild>
                        <Link href={`/supplements/${supplement._id}`}>
                          View Details
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {filteredSupplements.length === 0 && !isLoading && (
              <div className="text-center py-12">
                <p className="text-gray-600">No supplements found matching your criteria.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('');
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
