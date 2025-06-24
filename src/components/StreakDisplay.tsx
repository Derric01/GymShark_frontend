'use client';

import { motion } from 'framer-motion';
import { FaFire, FaTrophy, FaCalendarCheck } from 'react-icons/fa';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockStreaks } from '@/lib/mockData';

export default function StreakDisplay() {
  const streaks = mockStreaks;

  const getStreakIcon = (type: string) => {
    switch (type) {
      case 'workout': return <FaFire className="text-orange-500" />;
      case 'login': return <FaCalendarCheck className="text-blue-500" />;
      case 'supplement': return <FaTrophy className="text-yellow-500" />;
      default: return <FaFire className="text-gray-500" />;
    }
  };

  const getStreakColor = (streak: number) => {
    if (streak >= 10) return 'text-green-600';
    if (streak >= 5) return 'text-orange-500';
    return 'text-blue-500';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {streaks.map((streak, index) => (
        <motion.div
          key={streak.type}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="relative overflow-hidden">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm">
                {getStreakIcon(streak.type)}
                {streak.type.charAt(0).toUpperCase() + streak.type.slice(1)} Streak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className={`text-3xl font-bold ${getStreakColor(streak.currentStreak)}`}>
                  {streak.currentStreak}
                  <span className="text-sm text-gray-500 ml-1">days</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Best: {streak.longestStreak} days
                </p>
                {streak.currentStreak >= 7 && (
                  <Badge variant="secondary" className="mt-2">
                    🔥 On Fire!
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
