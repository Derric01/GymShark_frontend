'use client';

import { motion } from 'framer-motion';
import { FaShare, FaTwitter, FaFacebook, FaCopy } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface WorkoutShareProps {
  workoutTitle: string;
  duration: number;
  calories: number;
  difficulty?: string;
}

export default function WorkoutShare({ workoutTitle, duration, calories }: WorkoutShareProps) {
  const shareText = `💪 Just completed "${workoutTitle}" - ${duration} min, ${calories} cal burned! #GymSharks #FitnessGoals`;
  const appUrl = 'https://gym-shark-frontend.vercel.app';

  const shareToTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(appUrl)}`;
    window.open(url, '_blank');
  };

  const shareToFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(appUrl)}&quote=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  const copyToClipboard = async () => {    try {
      await navigator.clipboard.writeText(`${shareText} ${appUrl}`);
      toast.success('Workout shared to clipboard! 📋');
    } catch {
      toast.error('Failed to copy to clipboard');
    }
  };

  const shareData = {
    title: 'Gym Sharks Workout Complete!',
    text: shareText,
    url: appUrl,
  };

  const handleNativeShare = async () => {
    if (navigator.share) {      try {
        await navigator.share(shareData);
        toast.success('Workout shared! 🎉');
      } catch {
        // User cancelled sharing
      }
    } else {
      copyToClipboard();
    }
  };

  return (
    <motion.div 
      className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center gap-2 mb-3">
        <FaShare className="text-green-600" />
        <h3 className="font-semibold">Share Your Achievement!</h3>
      </div>
      
      <p className="text-sm text-gray-600 mb-4">
        Celebrate your progress and inspire others! 🎯
      </p>

      <div className="flex flex-wrap gap-2">
        <Button 
          onClick={shareToTwitter}
          size="sm"
          variant="outline"
          className="flex items-center gap-2"
        >
          <FaTwitter className="text-blue-400" />
          Twitter
        </Button>
        
        <Button 
          onClick={shareToFacebook}
          size="sm"
          variant="outline"
          className="flex items-center gap-2"
        >
          <FaFacebook className="text-blue-600" />
          Facebook
        </Button>
        
        <Button 
          onClick={copyToClipboard}
          size="sm"
          variant="outline"
          className="flex items-center gap-2"
        >
          <FaCopy className="text-gray-600" />
          Copy
        </Button>

        <Button 
          onClick={handleNativeShare}
          size="sm"
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
        >
          <FaShare />
          Share
        </Button>
      </div>
    </motion.div>
  );
}
