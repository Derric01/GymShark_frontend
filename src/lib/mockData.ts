import { Supplement, HomeWorkout } from '@/types';

// Mock supplement data with complete details
export const mockSupplements: Supplement[] = [
  {
    _id: '1',
    name: 'Whey Protein Isolate',
    category: 'Protein',
    description: 'High-quality fast-absorbing protein ideal for post-workout recovery and muscle building. Contains all essential amino acids with minimal lactose.',
    benefits: [
      'Rapid muscle recovery',
      'Increased protein synthesis',
      'Supports lean muscle growth',
      'Convenient protein source',
      'Low in lactose and fat'
    ],
    recommendedFor: ['muscle gain', 'recovery', 'general health'],
    dosage: {
      amount: '25-30g',
      frequency: '1-2 times daily',
      timing: 'Post-workout and/or between meals',
      instructions: 'Mix with 200-300ml of water or milk. Shake well before drinking.'
    },
    ingredients: [
      {
        name: 'Whey Protein Isolate',
        amount: '25g per serving',
        purpose: 'Primary protein source with complete amino acid profile'
      },
      {
        name: 'Natural Flavoring',
        amount: '2g per serving',
        purpose: 'Taste enhancement'
      },
      {
        name: 'Lecithin',
        amount: '500mg per serving',
        purpose: 'Mixing agent and brain health support'
      }
    ],
    sideEffects: [
      'Mild digestive discomfort in lactose-sensitive individuals',
      'Possible allergic reactions in people with milk allergies',
      'Bloating if consumed in excess'
    ],
    contraindications: [
      'Severe lactose intolerance',
      'Milk protein allergy',
      'Kidney disease (consult doctor first)'
    ],
    interactions: [
      'May affect absorption of certain medications if taken simultaneously',
      'Can interfere with some antibiotics'
    ],
    price: {
      range: '$25-45',
      currency: 'USD'
    },
    effectiveness: {
      rating: 5,
      evidenceLevel: 'High'
    },
    isEssential: true,
    isPopular: true
  },
  {
    _id: '2',
    name: 'Creatine Monohydrate',
    category: 'Pre-Workout',
    description: 'The most researched and proven supplement for increasing strength, power, and muscle mass. Helps regenerate ATP for explosive movements.',
    benefits: [
      'Increased strength and power',
      'Enhanced muscle volume',
      'Improved high-intensity performance',
      'Faster recovery between sets',
      'Supports brain function'
    ],
    recommendedFor: ['muscle gain', 'endurance', 'general health'],
    dosage: {
      amount: '3-5g',
      frequency: 'Daily',
      timing: 'Post-workout or anytime',
      instructions: 'Mix with water or add to your protein shake. Take consistently for best results.'
    },
    ingredients: [
      {
        name: 'Creatine Monohydrate',
        amount: '5g per serving',
        purpose: 'Increases phosphocreatine stores in muscles for energy production'
      }
    ],
    sideEffects: [
      'Initial water weight gain (2-4 lbs)',
      'Mild stomach upset if taken on empty stomach',
      'Rare cases of muscle cramping'
    ],
    contraindications: [
      'Kidney disease',
      'Liver disease',
      'Diabetes (monitor blood sugar)'
    ],
    interactions: [
      'May enhance effects of caffeine',
      'Can interact with certain diuretics'
    ],
    price: {
      range: '$15-30',
      currency: 'USD'
    },
    effectiveness: {
      rating: 5,
      evidenceLevel: 'High'
    },
    isEssential: true,
    isPopular: true
  },
  {
    _id: '3',
    name: 'Omega-3 Fish Oil',
    category: 'General Health',
    description: 'Essential fatty acids that support heart health, brain function, and reduce inflammation. Crucial for overall wellness and recovery.',
    benefits: [
      'Reduced inflammation',
      'Heart health support',
      'Brain function enhancement',
      'Joint health improvement',
      'Mood regulation'
    ],
    recommendedFor: ['general health', 'recovery'],
    dosage: {
      amount: '1-2g EPA/DHA',
      frequency: 'Daily',
      timing: 'With meals',
      instructions: 'Take with food to improve absorption and reduce fishy aftertaste.'
    },
    ingredients: [
      {
        name: 'EPA (Eicosapentaenoic Acid)',
        amount: '500mg per serving',
        purpose: 'Anti-inflammatory effects and heart health'
      },
      {
        name: 'DHA (Docosahexaenoic Acid)',
        amount: '300mg per serving',
        purpose: 'Brain and eye health support'
      }
    ],
    sideEffects: [
      'Fishy aftertaste or burps',
      'Mild digestive upset',
      'Potential blood thinning effects'
    ],
    contraindications: [
      'Blood clotting disorders',
      'Upcoming surgery (stop 2 weeks prior)',
      'Fish allergies'
    ],
    interactions: [
      'Blood thinning medications',
      'Blood pressure medications'
    ],
    price: {
      range: '$20-40',
      currency: 'USD'
    },
    effectiveness: {
      rating: 4,
      evidenceLevel: 'High'
    },
    isEssential: true,
    isPopular: true
  },
  {
    _id: '4',
    name: 'Pre-Workout Complex',
    category: 'Pre-Workout',
    description: 'Energizing blend designed to boost performance, focus, and endurance during workouts. Contains caffeine and performance enhancers.',
    benefits: [
      'Increased energy and focus',
      'Enhanced workout performance',
      'Improved blood flow',
      'Better muscle pumps',
      'Delayed fatigue'
    ],
    recommendedFor: ['endurance', 'muscle gain'],
    dosage: {
      amount: '1 scoop (10g)',
      frequency: '1 time daily',
      timing: '30 minutes before workout',
      instructions: 'Mix with 200ml cold water. Do not exceed 1 serving per day. Avoid taking within 6 hours of bedtime.'
    },
    ingredients: [
      {
        name: 'Caffeine',
        amount: '200mg per serving',
        purpose: 'Energy and focus enhancement'
      },
      {
        name: 'Beta-Alanine',
        amount: '3g per serving',
        purpose: 'Reduces muscle fatigue and improves endurance'
      },
      {
        name: 'Citrulline Malate',
        amount: '6g per serving',
        purpose: 'Improved blood flow and muscle pumps'
      }
    ],
    sideEffects: [
      'Jittery feeling from caffeine',
      'Tingling sensation from beta-alanine',
      'Potential sleep disruption',
      'Increased heart rate'
    ],
    contraindications: [
      'Heart conditions',
      'High blood pressure',
      'Pregnancy or breastfeeding',
      'Caffeine sensitivity'
    ],
    interactions: [
      'Other caffeine sources',
      'Blood pressure medications',
      'Stimulant medications'
    ],
    price: {
      range: '$30-50',
      currency: 'USD'
    },
    effectiveness: {
      rating: 4,
      evidenceLevel: 'Medium'
    },
    isPopular: true
  },
  {
    _id: '5',
    name: 'Multivitamin Complex',
    category: 'Vitamins',
    description: 'Comprehensive vitamin and mineral formula to fill nutritional gaps and support overall health and wellness.',
    benefits: [
      'Fills nutritional gaps',
      'Supports immune system',
      'Enhances energy metabolism',
      'Promotes bone health',
      'Antioxidant protection'
    ],
    recommendedFor: ['general health'],
    dosage: {
      amount: '2 capsules',
      frequency: 'Daily',
      timing: 'With breakfast',
      instructions: 'Take with food to improve absorption and reduce stomach upset.'
    },
    ingredients: [
      {
        name: 'Vitamin D3',
        amount: '1000 IU per serving',
        purpose: 'Bone health and immune function'
      },
      {
        name: 'Vitamin B Complex',
        amount: 'Varied per serving',
        purpose: 'Energy metabolism and nervous system support'
      },
      {
        name: 'Vitamin C',
        amount: '500mg per serving',
        purpose: 'Immune support and antioxidant protection'
      }
    ],
    sideEffects: [
      'Mild stomach upset if taken on empty stomach',
      'Colored urine from B vitamins',
      'Rare allergic reactions'
    ],
    contraindications: [
      'Iron overload disorders',
      'Kidney stones (calcium-based)',
      'Certain medications (check with doctor)'
    ],
    interactions: [
      'Blood thinning medications',
      'Certain antibiotics',
      'Thyroid medications'
    ],
    price: {
      range: '$15-35',
      currency: 'USD'
    },
    effectiveness: {
      rating: 4,
      evidenceLevel: 'Medium'
    },    isEssential: true,
    isPopular: true
  },
  {
    _id: '6',
    name: 'BCAAs (Branched-Chain Amino Acids)',
    category: 'Recovery',
    description: 'Essential amino acids (leucine, isoleucine, valine) that help prevent muscle breakdown and support recovery during intense training.',
    benefits: [
      'Reduces muscle breakdown during workouts',
      'Supports muscle recovery',
      'May reduce exercise fatigue',
      'Helps maintain muscle mass during cutting',
      'Can be used during fasted training'
    ],
    recommendedFor: ['recovery', 'muscle gain', 'endurance'],
    dosage: {
      amount: '10-15g',
      frequency: '1-2 times daily',
      timing: 'During or after workout',
      instructions: 'Mix with water or sports drink. Can be sipped throughout workout.'
    },
    ingredients: [
      {
        name: 'L-Leucine',
        amount: '5g per serving',
        purpose: 'Primary muscle protein synthesis trigger'
      },
      {
        name: 'L-Isoleucine',
        amount: '2.5g per serving',
        purpose: 'Energy production and recovery'
      },
      {
        name: 'L-Valine',
        amount: '2.5g per serving',
        purpose: 'Muscle energy and growth support'
      }
    ],
    sideEffects: [
      'Mild digestive upset in sensitive individuals',
      'Possible fatigue if overused',
      'May affect blood sugar levels'
    ],
    contraindications: [
      'Branched-chain ketoaciduria',
      'ALS (Lou Gehrig\'s disease)',
      'Surgery (stop 2 weeks prior)'
    ],
    interactions: [
      'Diabetes medications',
      'Levodopa',
      'Diazoxide'
    ],
    price: {
      range: '$25-40',
      currency: 'USD'
    },
    effectiveness: {
      rating: 3,
      evidenceLevel: 'Medium'
    },
    isPopular: true
  },
  {
    _id: '7',
    name: 'Vitamin D3',
    category: 'Vitamins',
    description: 'Essential vitamin for bone health, immune function, and muscle strength. Many people are deficient, especially in low-sunlight areas.',
    benefits: [
      'Supports bone health and calcium absorption',
      'Enhances immune system function',
      'May improve muscle strength',
      'Supports mood regulation',
      'Reduces inflammation'
    ],
    recommendedFor: ['general health', 'muscle gain'],
    dosage: {
      amount: '2000-4000 IU',
      frequency: 'Daily',
      timing: 'With a meal containing fat',
      instructions: 'Take with food that contains healthy fats for better absorption.'
    },
    ingredients: [
      {
        name: 'Cholecalciferol (Vitamin D3)',
        amount: '2000 IU per serving',
        purpose: 'Primary vitamin D source for body functions'
      }
    ],
    sideEffects: [
      'Rare toxicity with excessive doses',
      'Possible kidney stones with very high doses',
      'Nausea if taken on empty stomach'
    ],
    contraindications: [
      'Hypercalcemia',
      'Kidney disease',
      'Sarcoidosis'
    ],
    interactions: [
      'Thiazide diuretics',
      'Calcium channel blockers',
      'Digoxin'
    ],
    price: {
      range: '$10-25',
      currency: 'USD'
    },
    effectiveness: {
      rating: 5,
      evidenceLevel: 'High'
    },
    isEssential: true,
    isPopular: true
  },
  {
    _id: '8',
    name: 'Magnesium Glycinate',
    category: 'Recovery',
    description: 'Highly bioavailable form of magnesium that supports muscle function, sleep quality, and stress reduction.',
    benefits: [
      'Promotes relaxation and better sleep',
      'Supports muscle and nerve function',
      'Reduces muscle cramps',
      'Helps with stress management',
      'Supports energy production'
    ],
    recommendedFor: ['recovery', 'general health'],
    dosage: {
      amount: '200-400mg',
      frequency: 'Daily',
      timing: 'Evening with dinner',
      instructions: 'Take with food to reduce digestive upset. Best taken in the evening for sleep benefits.'
    },
    ingredients: [
      {
        name: 'Magnesium Glycinate',
        amount: '400mg per serving',
        purpose: 'Chelated form for optimal absorption and minimal digestive upset'
      }
    ],
    sideEffects: [
      'Loose stools with high doses',
      'Drowsiness (beneficial for sleep)',
      'Rare allergic reactions'
    ],
    contraindications: [
      'Kidney disease',
      'Heart block',
      'Myasthenia gravis'
    ],
    interactions: [
      'Antibiotics (take 2 hours apart)',
      'Blood pressure medications',
      'Muscle relaxants'
    ],
    price: {
      range: '$15-30',
      currency: 'USD'
    },
    effectiveness: {
      rating: 4,
      evidenceLevel: 'High'
    },
    isEssential: true,
    isPopular: true
  },
  {
    _id: '9',
    name: 'Casein Protein',
    category: 'Protein',
    description: 'Slow-digesting protein perfect for nighttime use or prolonged periods without food. Provides sustained amino acid release.',
    benefits: [
      'Slow amino acid release (6-8 hours)',
      'Prevents muscle breakdown overnight',
      'Increases satiety',
      'Supports muscle growth and recovery',
      'Ideal for weight management'
    ],
    recommendedFor: ['muscle gain', 'recovery', 'weight loss'],
    dosage: {
      amount: '25-40g',
      frequency: '1 time daily',
      timing: 'Before bed or between meals',
      instructions: 'Mix with water or milk. Can be made into pudding consistency with less liquid.'
    },
    ingredients: [
      {
        name: 'Micellar Casein',
        amount: '25g per serving',
        purpose: 'Slow-release protein for sustained muscle protein synthesis'
      },
      {
        name: 'Natural Enzymes',
        amount: '50mg per serving',
        purpose: 'Improved digestion and absorption'
      }
    ],
    sideEffects: [
      'Digestive discomfort in lactose-sensitive individuals',
      'Possible allergic reactions to milk proteins',
      'Thick texture may be unappealing to some'
    ],
    contraindications: [
      'Milk protein allergy',
      'Severe lactose intolerance',
      'Galactosemia'
    ],
    interactions: [
      'May slow absorption of other nutrients',
      'Can affect medication timing if taken together'
    ],
    price: {
      range: '$30-50',
      currency: 'USD'
    },
    effectiveness: {
      rating: 4,
      evidenceLevel: 'High'
    },
    isPopular: true
  },
  {
    _id: '10',
    name: 'Zinc Supplement',
    category: 'General Health',
    description: 'Essential mineral for immune function, protein synthesis, wound healing, and testosterone production.',
    benefits: [
      'Supports immune system function',
      'Aids in protein synthesis',
      'Promotes wound healing',
      'Supports testosterone production',
      'Enhances taste and smell'
    ],
    recommendedFor: ['general health', 'muscle gain', 'recovery'],
    dosage: {
      amount: '15-30mg',
      frequency: 'Daily',
      timing: 'On empty stomach or with non-dairy food',
      instructions: 'Take away from calcium, iron, or dairy to avoid absorption interference.'
    },
    ingredients: [
      {
        name: 'Zinc Picolinate',
        amount: '30mg per serving',
        purpose: 'Highly bioavailable form of zinc for optimal absorption'
      }
    ],
    sideEffects: [
      'Nausea if taken on empty stomach',
      'Metallic taste',
      'Possible copper deficiency with long-term high doses'
    ],
    contraindications: [
      'Wilson\'s disease',
      'Hemochromatosis',
      'Kidney disease'
    ],
    interactions: [
      'Antibiotics (take 2 hours apart)',
      'Calcium supplements',
      'Iron supplements'
    ],
    price: {
      range: '$8-20',
      currency: 'USD'
    },
    effectiveness: {
      rating: 4,
      evidenceLevel: 'High'
    },
    isEssential: true,
    isPopular: true
  },
  {
    _id: '11',
    name: 'Beta-Alanine',
    category: 'Pre-Workout',
    description: 'Non-essential amino acid that increases muscle carnosine levels, improving performance in high-intensity exercises.',
    benefits: [
      'Increases muscular endurance',
      'Reduces muscle fatigue during intense exercise',
      'Improves performance in 1-4 minute activities',
      'May increase muscle mass when combined with training',
      'Helps buffer muscle acidity'
    ],
    recommendedFor: ['endurance', 'muscle gain'],
    dosage: {
      amount: '3-5g',
      frequency: 'Daily',
      timing: 'Split into smaller doses throughout day',
      instructions: 'Take in divided doses (800mg-1g) to minimize tingling. Can be taken with meals.'
    },
    ingredients: [
      {
        name: 'Beta-Alanine',
        amount: '3g per serving',
        purpose: 'Increases muscle carnosine levels for improved performance'
      }
    ],
    sideEffects: [
      'Harmless tingling sensation (paresthesia)',
      'Flushing of skin',
      'Mild nausea with large doses'
    ],
    contraindications: [
      'None known for healthy individuals',
      'Caution with neurological conditions'
    ],
    interactions: [
      'May enhance effects of other performance supplements',
      'No significant drug interactions known'
    ],
    price: {
      range: '$15-25',
      currency: 'USD'
    },
    effectiveness: {
      rating: 4,
      evidenceLevel: 'High'
    },
    isPopular: true
  },
  {
    _id: '12',
    name: 'Ashwagandha',
    category: 'Recovery',
    description: 'Adaptogenic herb that helps the body manage stress, may support testosterone levels, and improves exercise performance.',
    benefits: [
      'Reduces stress and cortisol levels',
      'May support testosterone production',
      'Improves strength and muscle mass',
      'Enhances exercise performance',
      'Supports better sleep quality'
    ],
    recommendedFor: ['recovery', 'general health', 'muscle gain'],
    dosage: {
      amount: '300-600mg',
      frequency: 'Daily',
      timing: 'With meals',
      instructions: 'Take with food to reduce potential stomach upset. Consistent daily use recommended.'
    },
    ingredients: [
      {
        name: 'Ashwagandha Root Extract (KSM-66)',
        amount: '600mg per serving',
        purpose: 'Standardized extract for stress reduction and performance benefits'
      }
    ],
    sideEffects: [
      'Drowsiness in some individuals',
      'Mild stomach upset',
      'May lower blood pressure'
    ],
    contraindications: [
      'Autoimmune diseases',
      'Thyroid disorders',
      'Pregnancy and breastfeeding'
    ],
    interactions: [
      'Blood pressure medications',
      'Diabetes medications',
      'Immunosuppressant drugs'
    ],
    price: {
      range: '$20-35',
      currency: 'USD'
    },
    effectiveness: {
      rating: 4,
      evidenceLevel: 'Medium'    },
    isPopular: true
  }
];

// Mock workout data with complete details
export const mockWorkouts: HomeWorkout[] = [
  {
    _id: '1',
    title: 'Full Body HIIT Workout',
    description: 'High-intensity interval training workout targeting all major muscle groups. Perfect for burning calories and building endurance.',
    category: 'HIIT',
    difficulty: 'Intermediate',
    duration: 25,
    equipment: ['None'],
    targetMuscleGroups: ['Full Body', 'Core', 'Legs', 'Arms'],
    exercises: [
      {
        name: 'Jumping Jacks',
        instructions: 'Stand with feet together, jump while spreading legs and raising arms overhead, return to start position.',
        sets: 3,
        reps: '30 seconds',
        restTime: 15,
        modifications: {
          beginner: 'Step side to side instead of jumping',
          advanced: 'Add clap above head'
        },
        tips: ['Keep core engaged', 'Land softly on balls of feet']
      },
      {
        name: 'Burpees',
        instructions: 'From standing, squat down, jump back to plank, do push-up, jump feet to hands, jump up with arms overhead.',
        sets: 3,
        reps: '10-12',
        restTime: 30,
        modifications: {
          beginner: 'Step back to plank instead of jumping',
          advanced: 'Add tuck jump at the end'
        },
        tips: ['Maintain straight line in plank', 'Use full range of motion']
      },
      {
        name: 'Mountain Climbers',
        instructions: 'Start in plank position, alternate bringing knees to chest rapidly while maintaining plank form.',
        sets: 3,
        reps: '20 total',
        restTime: 20,
        modifications: {
          beginner: 'Slow down the pace',
          advanced: 'Increase speed and add cross-body movement'
        },
        tips: ['Keep hips level', 'Engage core throughout']
      }
    ],
    warmUp: [
      {
        name: 'Arm Circles',
        duration: '30 seconds',
        instructions: 'Rotate arms in large circles forward, then backward'
      },
      {
        name: 'Leg Swings',
        duration: '30 seconds each leg',
        instructions: 'Hold wall for balance, swing leg forward and back'
      }
    ],
    coolDown: [
      {
        name: 'Child\'s Pose',
        duration: '30 seconds',
        instructions: 'Kneel and sit back on heels, stretch arms forward'
      },
      {
        name: 'Standing Forward Fold',
        duration: '30 seconds',
        instructions: 'Stand and fold forward, let arms hang loose'
      }
    ],
    calories: 250,
    tags: ['fat-burning', 'cardio', 'strength'],
    isPopular: true,
    estimatedCalories: 250,
    exerciseCount: 6,
    targetMuscles: ['Full Body']
  },
  {
    _id: '2',
    title: 'Beginner Yoga Flow',
    description: 'Gentle yoga sequence perfect for beginners. Focus on breath, flexibility, and mindfulness.',
    category: 'Yoga',
    difficulty: 'Beginner',
    duration: 20,
    equipment: ['Yoga Mat'],
    targetMuscleGroups: ['Full Body', 'Core', 'Back'],
    exercises: [
      {
        name: 'Cat-Cow Pose',
        instructions: 'Start on hands and knees, alternate between arching and rounding your spine.',
        sets: 1,
        reps: '8-10 flows',
        restTime: 0,
        modifications: {
          beginner: 'Move slowly and focus on breath',
          advanced: 'Add side bends'
        },
        tips: ['Coordinate with breathing', 'Move from your core']
      },
      {
        name: 'Downward Facing Dog',
        instructions: 'From hands and knees, tuck toes under and lift hips up and back, creating inverted V shape.',
        sets: 1,
        reps: '30-45 seconds',
        restTime: 0,
        modifications: {
          beginner: 'Bend knees slightly',
          advanced: 'Lift one leg at a time'
        },
        tips: ['Press hands firmly into mat', 'Lengthen spine']
      },
      {
        name: 'Warrior I',
        instructions: 'Step one foot back, turn back foot out 45 degrees, raise arms overhead.',
        sets: 1,
        reps: '30 seconds each side',
        restTime: 0,
        modifications: {
          beginner: 'Use wall for balance',
          advanced: 'Add backbend'
        },
        tips: ['Ground through both feet', 'Lift through crown of head']
      }
    ],
    warmUp: [
      {
        name: 'Gentle Neck Rolls',
        duration: '1 minute',
        instructions: 'Slowly roll neck in circles, both directions'
      }
    ],
    coolDown: [
      {
        name: 'Savasana',
        duration: '2-3 minutes',
        instructions: 'Lie flat on back, close eyes, focus on breath'
      }
    ],
    calories: 80,
    tags: ['flexibility', 'mindfulness', 'relaxation'],
    isPopular: true,
    estimatedCalories: 80,
    exerciseCount: 5,
    targetMuscles: ['Full Body']
  },
  {
    _id: '3',
    title: 'Core Strength Builder',
    description: 'Targeted core workout to build strength and stability. Great for all fitness levels with modifications.',
    category: 'Core',
    difficulty: 'Intermediate',
    duration: 15,
    equipment: ['None'],
    targetMuscleGroups: ['Core', 'Abs', 'Lower Back'],
    exercises: [
      {
        name: 'Plank',
        instructions: 'Hold straight line from head to heels, engaging core muscles.',
        sets: 3,
        reps: '30-60 seconds',
        restTime: 30,
        modifications: {
          beginner: 'Drop to knees',
          advanced: 'Add leg lifts'
        },
        tips: ['Keep hips level', 'Breathe normally']
      },
      {
        name: 'Dead Bug',
        instructions: 'Lie on back, arms up, knees bent 90 degrees. Lower opposite arm and leg slowly.',
        sets: 3,
        reps: '8-10 each side',
        restTime: 20,
        modifications: {
          beginner: 'Keep feet on ground',
          advanced: 'Hold weight in hands'
        },
        tips: ['Keep lower back pressed to floor', 'Move slowly and controlled']
      },
      {
        name: 'Bird Dog',
        instructions: 'From hands and knees, extend opposite arm and leg, hold, then switch.',
        sets: 3,
        reps: '8-10 each side',
        restTime: 20,
        modifications: {
          beginner: 'Do one limb at a time',
          advanced: 'Add knee to elbow crunch'
        },
        tips: ['Keep hips square', 'Engage core throughout']
      }
    ],
    warmUp: [
      {
        name: 'Torso Twists',
        duration: '30 seconds',
        instructions: 'Stand with arms crossed, twist gently side to side'
      }
    ],
    coolDown: [
      {
        name: 'Knee to Chest',
        duration: '30 seconds each leg',
        instructions: 'Lie on back, hug one knee to chest'
      }
    ],
    calories: 120,
    tags: ['core', 'stability', 'strength'],
    isPopular: false,
    estimatedCalories: 120,
    exerciseCount: 5,
    targetMuscles: ['Core']
  },
  {
    _id: '4',
    title: 'Upper Body Strength',
    description: 'Build upper body strength with this bodyweight workout. No equipment needed.',
    category: 'Strength',
    difficulty: 'Intermediate',
    duration: 30,
    equipment: ['None'],
    targetMuscleGroups: ['Arms', 'Chest', 'Shoulders', 'Back'],
    exercises: [
      {
        name: 'Push-ups',
        instructions: 'Start in plank, lower chest to ground, push back up maintaining straight line.',
        sets: 3,
        reps: '8-15',
        restTime: 60,
        modifications: {
          beginner: 'Do on knees or against wall',
          advanced: 'Add clap or single arm'
        },
        tips: ['Keep core tight', 'Full range of motion']
      },
      {
        name: 'Pike Push-ups',
        instructions: 'Start in downward dog position, lower head toward hands, push back up.',
        sets: 3,
        reps: '6-10',
        restTime: 60,
        modifications: {
          beginner: 'Elevate hands on surface',
          advanced: 'Elevate feet'
        },
        tips: ['Focus on shoulders', 'Keep legs straight']
      },
      {
        name: 'Tricep Dips',
        instructions: 'Sit on edge of chair, lower body down using arms, push back up.',
        sets: 3,
        reps: '8-12',
        restTime: 45,
        modifications: {
          beginner: 'Keep feet flat on ground',
          advanced: 'Elevate feet'
        },
        tips: ['Keep body close to chair', 'Don\'t lock elbows']
      }
    ],
    warmUp: [
      {
        name: 'Arm Swings',
        duration: '30 seconds',
        instructions: 'Swing arms across body and back out'
      }
    ],
    coolDown: [
      {
        name: 'Chest Stretch',
        duration: '30 seconds',
        instructions: 'Stand in doorway, place forearms on frame, step forward'
      }
    ],
    calories: 180,
    tags: ['strength', 'upper-body', 'muscle-building'],
    isPopular: true,
    estimatedCalories: 180,
    exerciseCount: 6,
    targetMuscles: ['Upper Body']
  },
  {
    _id: '5',
    title: 'Cardio Blast',
    description: 'High-energy cardio workout to get your heart pumping and burn calories fast.',
    category: 'Cardio',
    difficulty: 'Advanced',
    duration: 20,
    equipment: ['None'],
    targetMuscleGroups: ['Full Body', 'Legs', 'Core'],
    exercises: [
      {
        name: 'High Knees',
        instructions: 'Run in place bringing knees up to waist level as fast as possible.',
        sets: 4,
        reps: '30 seconds',
        restTime: 15,
        modifications: {
          beginner: 'March in place with high knees',
          advanced: 'Add arm movements'
        },
        tips: ['Stay on balls of feet', 'Pump arms']
      },
      {
        name: 'Jump Squats',
        instructions: 'Squat down, then jump up explosively, land softly back in squat.',
        sets: 4,
        reps: '15-20',
        restTime: 30,
        modifications: {
          beginner: 'Regular squats without jump',
          advanced: 'Add 180-degree turn'
        },
        tips: ['Land softly', 'Full squat depth']
      },
      {
        name: 'Plank Jacks',
        instructions: 'In plank position, jump feet apart and together like jumping jacks.',
        sets: 4,
        reps: '20-25',
        restTime: 20,
        modifications: {
          beginner: 'Step feet out one at a time',
          advanced: 'Add push-up between jacks'
        },
        tips: ['Keep core engaged', 'Don\'t let hips sag']
      }
    ],
    warmUp: [
      {
        name: 'Light Jogging',
        duration: '2 minutes',
        instructions: 'Jog in place or around room at easy pace'
      }
    ],
    coolDown: [
      {
        name: 'Walking',
        duration: '2 minutes',
        instructions: 'Walk slowly to bring heart rate down'
      }
    ],
    calories: 200,
    tags: ['cardio', 'fat-burning', 'high-intensity'],
    isPopular: true,
    estimatedCalories: 200,
    exerciseCount: 7,
    targetMuscles: ['Full Body']
  },
  {
    _id: '6',
    title: 'Flexibility & Mobility',
    description: 'Improve flexibility and mobility with this gentle stretching routine. Perfect for recovery days.',
    category: 'Flexibility',
    difficulty: 'Beginner',
    duration: 25,
    equipment: ['Yoga Mat'],
    targetMuscleGroups: ['Full Body', 'Back', 'Hips', 'Legs'],
    exercises: [
      {
        name: 'Standing Forward Fold',
        instructions: 'Stand tall, hinge at hips and fold forward, let arms hang heavy.',
        sets: 1,
        reps: '45-60 seconds',
        restTime: 0,
        modifications: {
          beginner: 'Bend knees slightly',
          advanced: 'Grab opposite elbows and sway'
        },
        tips: ['Keep slight bend in knees', 'Relax neck and shoulders']
      },
      {
        name: 'Hip Flexor Stretch',
        instructions: 'Low lunge position, drop back knee to ground, lean forward gently.',
        sets: 1,
        reps: '30 seconds each side',
        restTime: 0,
        modifications: {
          beginner: 'Use hands for support',
          advanced: 'Raise back foot'
        },
        tips: ['Keep front knee over ankle', 'Feel stretch in back leg hip']
      },
      {
        name: 'Seated Spinal Twist',
        instructions: 'Sit cross-legged, place hand behind hip, twist gently and hold.',
        sets: 1,
        reps: '30 seconds each side',
        restTime: 0,
        modifications: {
          beginner: 'Sit in chair',
          advanced: 'Add leg position variations'
        },
        tips: ['Sit tall', 'Twist from core, not neck']
      }
    ],
    warmUp: [
      {
        name: 'Gentle Movement',
        duration: '2 minutes',
        instructions: 'Move joints gently through their range of motion'
      }
    ],
    coolDown: [
      {
        name: 'Deep Breathing',
        duration: '2 minutes',
        instructions: 'Lie down and focus on slow, deep breaths'
      }
    ],
    calories: 60,
    tags: ['flexibility', 'mobility', 'recovery'],
    isPopular: false,
    estimatedCalories: 60,
    exerciseCount: 6,
    targetMuscles: ['Full Body']
  }
];

// Mock AI responses for different scenarios
export const mockAIResponses = {
  workoutTips: {
    beginner: {
      recommendations: [
        "Start with bodyweight exercises 3 times per week",
        "Focus on proper form before increasing intensity", 
        "Include 2 rest days between workout sessions",
        "Begin with 20-30 minute sessions and gradually increase"
      ],
      personalizedAdvice: "As a beginner, your focus should be on building a consistent routine and learning proper movement patterns. Don't rush the process - consistency beats intensity at this stage.",
      tips: [
        "Listen to your body and don't ignore pain",
        "Stay hydrated throughout your workouts",
        "Get adequate sleep for recovery (7-9 hours)",
        "Consider working with a trainer initially"
      ]
    },
    intermediate: {
      recommendations: [
        "Incorporate progressive overload into your routines",
        "Mix different training styles (strength, cardio, flexibility)",
        "Train 4-5 times per week with structured splits",
        "Track your progress with specific metrics"
      ],
      personalizedAdvice: "You're ready to challenge yourself with more complex movements and training splits. Focus on progressive overload and vary your training to prevent plateaus.",
      tips: [
        "Periodize your training for better results",
        "Include both compound and isolation exercises",
        "Pay attention to pre and post-workout nutrition",
        "Consider deload weeks every 4-6 weeks"
      ]
    },
    advanced: {
      recommendations: [
        "Implement advanced training techniques (drop sets, supersets)",
        "Focus on sport-specific or goal-specific movements",
        "Train 5-6 times per week with varied intensities",
        "Consider working with specialized coaches"
      ],
      personalizedAdvice: "Your training should be highly specific to your goals. Focus on fine-tuning techniques and addressing any weak points or imbalances.",
      tips: [
        "Monitor recovery markers closely",
        "Experiment with different training methodologies",
        "Consider competition or specific performance goals",
        "Regular movement assessments and corrections"
      ]
    }
  },
  nutritionAdvice: {
    weightLoss: {
      recommendations: [
        "Create a moderate caloric deficit (300-500 calories below maintenance)",
        "Prioritize protein intake (1.2-1.6g per kg body weight)",
        "Include plenty of vegetables and fiber-rich foods",
        "Stay hydrated and limit processed foods"
      ],
      personalizedAdvice: "Sustainable weight loss comes from consistent habits rather than extreme restrictions. Focus on creating a lifestyle you can maintain long-term.",
      tips: [
        "Meal prep to avoid impulsive food choices",
        "Eat slowly and mindfully",
        "Include healthy fats for satiety",
        "Allow occasional treats to prevent binge eating"
      ]
    },
    muscleGain: {
      recommendations: [
        "Eat in a slight caloric surplus (200-400 calories above maintenance)",
        "Consume adequate protein (1.6-2.2g per kg body weight)",
        "Time protein intake around workouts",
        "Include complex carbohydrates for energy"
      ],
      personalizedAdvice: "Building muscle requires patience and consistency with both training and nutrition. Focus on quality foods and adequate recovery.",
      tips: [
        "Spread protein intake throughout the day",
        "Don't fear carbohydrates - they fuel your workouts",
        "Consider creatine supplementation",
        "Monitor body composition, not just weight"
      ]
    },
    maintenance: {
      recommendations: [
        "Eat at your maintenance calorie level",
        "Focus on nutrient-dense, whole foods",
        "Maintain consistent meal timing",
        "Include variety to prevent boredom"
      ],
      personalizedAdvice: "Maintenance is about finding balance and creating sustainable habits that support your lifestyle and health goals.",
      tips: [
        "Listen to your hunger and fullness cues",
        "Practice the 80/20 rule for flexibility",
        "Stay active and enjoy your food",
        "Regular health check-ups and monitoring"
      ]
    }
  },
  generalTips: [
    "Consistency beats perfection - small daily actions compound over time",
    "Recovery is just as important as training - prioritize sleep and stress management",
    "Progress isn't always linear - expect ups and downs on your fitness journey",
    "Find activities you enjoy - sustainable fitness should be fun, not punishment",
    "Set process goals rather than just outcome goals for better long-term success",
    "Listen to your body - it's your best guide for when to push and when to rest",
    "Nutrition is about nourishment, not restriction - fuel your body properly",
    "Community and support make a huge difference - find your fitness tribe"
  ]
};

// Function to get mock supplement by ID
export const getMockSupplementById = (id: string): Supplement | null => {
  return mockSupplements.find(supplement => supplement._id === id) || null;
};

// Function to get mock AI response based on user input
interface UserInput {
  experience?: string;
  goal?: string;
}

export const getMockAIResponse = (type: 'workout' | 'nutrition' | 'general', userInput?: UserInput) => {
  if (type === 'general') {
    return {
      recommendations: mockAIResponses.generalTips.slice(0, 4),
      personalizedAdvice: "Remember, fitness is a journey, not a destination. Focus on building sustainable habits that will serve you for life.",
      tips: mockAIResponses.generalTips.slice(4)
    };
  }

  if (type === 'workout' && userInput?.experience) {
    const level = userInput.experience.toLowerCase();
    if (level in mockAIResponses.workoutTips) {
      return mockAIResponses.workoutTips[level as keyof typeof mockAIResponses.workoutTips];
    }
  }

  if (type === 'nutrition' && userInput?.goal) {
    const goal = userInput.goal.toLowerCase().replace(' ', '');
    if (goal in mockAIResponses.nutritionAdvice) {
      return mockAIResponses.nutritionAdvice[goal as keyof typeof mockAIResponses.nutritionAdvice];
    }
  }

  // Default response
  return {
    recommendations: [
      "Focus on consistency over perfection",
      "Start with small, manageable changes",
      "Track your progress regularly",
      "Stay patient and trust the process"
    ],
    personalizedAdvice: "Every fitness journey is unique. Focus on what works for your lifestyle and goals.",
    tips: [
      "Set realistic expectations",
      "Celebrate small wins",
      "Don't compare yourself to others",
      "Enjoy the journey"
    ]
  };
};
