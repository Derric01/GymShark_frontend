'use client';

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FaDumbbell, FaArrowLeft, FaPills, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';
import { useAuth } from '@/contexts/AuthContext';
import { getMockSupplementById } from '@/lib/mockData';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export default function SupplementDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { isAuthenticated } = useAuth();
    const supplementId = params.id as string;
  
  // Use mock data directly since API endpoints don't exist yet
  const supplement = getMockSupplementById(supplementId);
  const isLoading = false;
  const error = null;

  useEffect(() => {
    if (error) {
      console.error('Failed to load supplement, using mock data:', error);
    }
  }, [error]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading supplement...</p>
        </div>
      </div>
    );
  }

  if (error || !supplement) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Supplement Not Found</h1>
          <p className="text-gray-600 mb-6">The supplement you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          <Button asChild>
            <Link href="/supplements">Back to Supplements</Link>
          </Button>
        </div>
      </div>
    );
  }

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
          {/* Supplement Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Badge>{supplement.category}</Badge>
              {supplement.isEssential && <Badge variant="secondary">Essential</Badge>}
              {supplement.isPopular && <Badge variant="outline">Popular</Badge>}
            </div>
            
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{supplement.name}</h1>
            <p className="text-xl text-gray-600 mb-6">{supplement.description}</p>
          </div>

          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Dosage Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FaPills className="mr-2 text-blue-600" />
                  Dosage & Usage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Amount</h4>
                    <p className="text-gray-600">{supplement.dosage.amount}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Frequency</h4>
                    <p className="text-gray-600">{supplement.dosage.frequency}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Timing</h4>
                    <p className="text-gray-600">{supplement.dosage.timing}</p>
                  </div>
                  {supplement.dosage.instructions && (
                    <div>
                      <h4 className="font-semibold">Instructions</h4>
                      <p className="text-gray-600">{supplement.dosage.instructions}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Effectiveness */}
            {supplement.effectiveness && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FaInfoCircle className="mr-2 text-green-600" />
                    Effectiveness
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold">Rating</h4>
                      <div className="flex items-center">
                        <div className="flex mr-2">
                          {[...Array(5)].map((_, i) => (                            <span
                              key={i}
                              className={`text-yellow-400 ${
                                i < (supplement.effectiveness?.rating || 0) ? 'fas' : 'far'
                              } fa-star`}
                            >
                              ⭐
                            </span>
                          ))}
                        </div>                        <span className="text-gray-600">
                          {supplement.effectiveness?.rating || 0}/5
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Evidence Level</h4>
                      <Badge variant={
                        supplement.effectiveness.evidenceLevel === 'High' ? 'default' :
                        supplement.effectiveness.evidenceLevel === 'Medium' ? 'secondary' : 'outline'
                      }>
                        {supplement.effectiveness.evidenceLevel}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Benefits */}
          {supplement.benefits && supplement.benefits.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid md:grid-cols-2 gap-2">
                  {supplement.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Recommended For */}
          {supplement.recommendedFor && supplement.recommendedFor.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Recommended For</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {supplement.recommendedFor.map((goal, index) => (
                    <Badge key={index} variant="outline">{goal}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Ingredients */}
          {supplement.ingredients && supplement.ingredients.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Active Ingredients</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {supplement.ingredients.map((ingredient, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold">{ingredient.name}</h4>
                      <p className="text-sm text-gray-600">Amount: {ingredient.amount}</p>
                      <p className="text-sm text-gray-600">Purpose: {ingredient.purpose}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Side Effects & Warnings */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {supplement.sideEffects && supplement.sideEffects.length > 0 && (
              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-600">
                    <FaExclamationTriangle className="mr-2" />
                    Possible Side Effects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {supplement.sideEffects.map((effect, index) => (
                      <li key={index} className="text-sm text-gray-600">• {effect}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {supplement.contraindications && supplement.contraindications.length > 0 && (
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-600">
                    <FaExclamationTriangle className="mr-2" />
                    Contraindications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {supplement.contraindications.map((contraindication, index) => (
                      <li key={index} className="text-sm text-gray-600">• {contraindication}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Drug Interactions */}
          {supplement.interactions && supplement.interactions.length > 0 && (
            <Card className="mb-8 border-yellow-200">
              <CardHeader>
                <CardTitle className="flex items-center text-yellow-600">
                  <FaExclamationTriangle className="mr-2" />
                  Drug Interactions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1">
                  {supplement.interactions.map((interaction, index) => (
                    <li key={index} className="text-sm text-gray-600">• {interaction}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Price Information */}
          {supplement.price && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Price Range</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-green-600">
                  {supplement.price.range} {supplement.price.currency}
                </p>
                <p className="text-sm text-gray-600">Typical market price range</p>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </main>
    </div>
  );
}
