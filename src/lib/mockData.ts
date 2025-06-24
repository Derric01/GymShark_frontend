import { HomeWorkout, Supplement, DietPlan, Progress, AITip, UserStreak, Challenge } from '@/types';

// Mock Supplements Data - Expanded with 20+ supplements
export const mockSupplements: Supplement[] = [
  {
    _id: '1',
    name: 'Whey Protein Isolate',
    category: 'Protein',
    description: 'Fast-absorbing protein perfect for post-workout recovery and muscle building.',
    benefits: [
      'Rapid muscle protein synthesis',
      'Enhanced recovery time',
      'Improved strength gains',
      'Supports lean muscle mass'
    ],
    recommendedFor: ['muscle gain', 'recovery'],
    dosage: {
      amount: '25-30g',
      frequency: '1-2 times daily',
      timing: 'Post-workout and between meals',
      instructions: 'Mix with 8-12oz of water or milk'
    },
    ingredients: [
      { name: 'Whey Protein Isolate', amount: '25g', purpose: 'Primary protein source' },
      { name: 'Natural Flavors', amount: '2g', purpose: 'Taste enhancement' },
      { name: 'Stevia', amount: '1g', purpose: 'Natural sweetener' }
    ],
    sideEffects: ['Possible digestive upset if lactose intolerant'],
    contraindications: ['Dairy allergies', 'Kidney disease'],
    effectiveness: {
      rating: 4.8,
      evidenceLevel: 'High'
    },
    isPopular: true,
    isEssential: true
  },
  {
    _id: '2',
    name: 'Creatine Monohydrate',
    category: 'Pre-Workout',
    description: 'The most researched supplement for increasing power, strength, and muscle mass.',
    benefits: [
      'Increased power output',
      'Enhanced strength gains',
      'Improved high-intensity performance',
      'Supports muscle volume'
    ],
    recommendedFor: ['muscle gain', 'endurance'],
    dosage: {
      amount: '3-5g',
      frequency: 'Daily',
      timing: 'Post-workout or anytime',
      instructions: 'Mix with water or juice'
    },
    ingredients: [
      { name: 'Creatine Monohydrate', amount: '5g', purpose: 'ATP regeneration' }
    ],
    effectiveness: {
      rating: 4.9,
      evidenceLevel: 'High'
    },
    isPopular: true,
    isEssential: true
  },
  {
    _id: '3',
    name: 'Omega-3 Fish Oil',
    category: 'General Health',
    description: 'Essential fatty acids for heart health, brain function, and inflammation reduction.',
    benefits: [
      'Reduced inflammation',
      'Improved heart health',
      'Enhanced brain function',
      'Better joint health'
    ],
    recommendedFor: ['general health', 'recovery'],
    dosage: {
      amount: '1-2g EPA/DHA',
      frequency: 'Daily',
      timing: 'With meals',
      instructions: 'Take with food to improve absorption'
    },
    ingredients: [
      { name: 'EPA', amount: '400mg', purpose: 'Anti-inflammatory' },
      { name: 'DHA', amount: '300mg', purpose: 'Brain and heart health' }
    ],
    effectiveness: {
      rating: 4.7,
      evidenceLevel: 'High'
    },
    isEssential: true
  },
  {
    _id: '4',
    name: 'Beta-Alanine',
    category: 'Pre-Workout',
    description: 'Amino acid that buffers muscle acidity and improves muscular endurance.',
    benefits: [
      'Increased muscular endurance',
      'Reduced fatigue during high-intensity exercise',
      'Improved time to exhaustion',
      'Enhanced training volume'
    ],
    recommendedFor: ['endurance', 'muscle gain'],
    dosage: {
      amount: '3-5g',
      frequency: 'Daily (split doses)',
      timing: 'Throughout the day',
      instructions: 'Split into 3-4 smaller doses to minimize tingling'
    },
    ingredients: [
      { name: 'Beta-Alanine', amount: '3g', purpose: 'Carnosine synthesis' }
    ],
    sideEffects: ['Harmless tingling sensation'],
    effectiveness: {
      rating: 4.5,
      evidenceLevel: 'High'
    },
    isPopular: true
  },
  {
    _id: '5',
    name: 'Vitamin D3',
    category: 'Vitamins',
    description: 'Essential vitamin for bone health, immune function, and hormone production.',
    benefits: [
      'Stronger bones and teeth',
      'Enhanced immune system',
      'Improved testosterone levels',
      'Better mood regulation'
    ],
    recommendedFor: ['general health'],
    dosage: {
      amount: '2000-4000 IU',
      frequency: 'Daily',
      timing: 'With fats/oils',
      instructions: 'Take with a meal containing fats for better absorption'
    },
    ingredients: [
      { name: 'Cholecalciferol (D3)', amount: '2000 IU', purpose: 'Vitamin D supplementation' }
    ],
    effectiveness: {
      rating: 4.6,
      evidenceLevel: 'High'
    },
    isEssential: true
  },
  {
    _id: '6',
    name: 'Ashwagandha',
    category: 'Recovery',
    description: 'Adaptogenic herb that helps manage stress and supports recovery.',
    benefits: [
      'Reduced cortisol levels',
      'Better stress management',
      'Improved sleep quality',
      'Enhanced recovery'
    ],
    recommendedFor: ['recovery', 'general health'],
    dosage: {
      amount: '300-600mg',
      frequency: 'Daily',
      timing: 'Evening or post-workout',
      instructions: 'Take with food to minimize stomach upset'
    },
    ingredients: [
      { name: 'Ashwagandha Root Extract', amount: '300mg', purpose: 'Stress adaptation' }
    ],
    effectiveness: {
      rating: 4.4,
      evidenceLevel: 'Medium'
    },
    isPopular: true
  },
  {
    _id: '7',
    name: 'Caffeine',
    category: 'Pre-Workout',
    description: 'Natural stimulant that enhances focus, energy, and fat oxidation.',
    benefits: [
      'Increased alertness and focus',
      'Enhanced fat burning',
      'Improved exercise performance',
      'Reduced perceived exertion'
    ],
    recommendedFor: ['weight loss', 'endurance'],
    dosage: {
      amount: '100-400mg',
      frequency: 'Pre-workout',
      timing: '30-45 minutes before exercise',
      instructions: 'Start with lower dose to assess tolerance'
    },
    ingredients: [
      { name: 'Caffeine Anhydrous', amount: '200mg', purpose: 'Central nervous system stimulation' }
    ],
    sideEffects: ['Jitters', 'Insomnia if taken late', 'Potential dependency'],
    contraindications: ['Heart conditions', 'High blood pressure', 'Pregnancy'],
    effectiveness: {
      rating: 4.7,
      evidenceLevel: 'High'
    },
    isPopular: true
  },
  {
    _id: '8',
    name: 'L-Citrulline',
    category: 'Pre-Workout',
    description: 'Amino acid that increases nitric oxide production and improves blood flow.',
    benefits: [
      'Enhanced muscle pumps',
      'Improved blood flow',
      'Reduced muscle soreness',
      'Better endurance'
    ],
    recommendedFor: ['muscle gain', 'endurance'],
    dosage: {
      amount: '6-8g',
      frequency: 'Pre-workout',
      timing: '30-45 minutes before exercise',
      instructions: 'Mix with water or pre-workout drink'
    },
    ingredients: [
      { name: 'L-Citrulline', amount: '6g', purpose: 'Nitric oxide production' }
    ],
    effectiveness: {
      rating: 4.3,
      evidenceLevel: 'Medium'
    },
    isPopular: true
  },
  {
    _id: '9',
    name: 'Magnesium Glycinate',
    category: 'Minerals',
    description: 'Highly bioavailable form of magnesium for muscle function and sleep.',
    benefits: [
      'Better sleep quality',
      'Reduced muscle cramps',
      'Improved recovery',
      'Enhanced relaxation'
    ],
    recommendedFor: ['recovery', 'general health'],
    dosage: {
      amount: '200-400mg',
      frequency: 'Daily',
      timing: 'Evening',
      instructions: 'Take 1-2 hours before bed'
    },
    ingredients: [
      { name: 'Magnesium Glycinate', amount: '200mg', purpose: 'Muscle and nerve function' }
    ],
    effectiveness: {
      rating: 4.5,
      evidenceLevel: 'High'
    },
    isEssential: true
  },
  {
    _id: '10',
    name: 'HMB (β-Hydroxy β-Methylbutyrate)',
    category: 'Recovery',
    description: 'Metabolite of leucine that helps preserve muscle mass and reduce breakdown.',
    benefits: [
      'Reduced muscle breakdown',
      'Faster recovery',
      'Preserved lean mass during cutting',
      'Enhanced strength retention'
    ],
    recommendedFor: ['muscle gain', 'recovery'],
    dosage: {
      amount: '3g',
      frequency: 'Daily (split doses)',
      timing: 'With meals',
      instructions: 'Take 1g with each main meal'
    },
    ingredients: [
      { name: 'HMB Calcium', amount: '1g', purpose: 'Muscle preservation' }
    ],
    effectiveness: {
      rating: 4.1,
      evidenceLevel: 'Medium'
    }
  },
  {
    _id: '11',
    name: 'Green Tea Extract',
    category: 'Fat Burners',
    description: 'Rich in EGCG and caffeine, supports metabolism and fat oxidation.',
    benefits: [
      'Increased metabolic rate',
      'Enhanced fat burning',
      'Antioxidant protection',
      'Improved insulin sensitivity'
    ],
    recommendedFor: ['weight loss', 'general health'],
    dosage: {
      amount: '400-500mg EGCG',
      frequency: '2-3 times daily',
      timing: 'Between meals',
      instructions: 'Take on empty stomach for best absorption'
    },
    ingredients: [
      { name: 'Green Tea Extract (50% EGCG)', amount: '400mg', purpose: 'Metabolic enhancement' },
      { name: 'Natural Caffeine', amount: '50mg', purpose: 'Thermogenesis' }
    ],
    effectiveness: {
      rating: 4.2,
      evidenceLevel: 'Medium'
    },
    isPopular: true
  },
  {
    _id: '12',
    name: 'ZMA (Zinc, Magnesium, B6)',
    category: 'Recovery',
    description: 'Combination supplement supporting sleep, recovery, and hormone production.',
    benefits: [
      'Improved sleep quality',
      'Enhanced recovery',
      'Supported testosterone levels',
      'Better immune function'
    ],
    recommendedFor: ['recovery', 'muscle gain'],
    dosage: {
      amount: '15mg Zinc, 450mg Magnesium, 10.5mg B6',
      frequency: 'Daily',
      timing: 'Before bed on empty stomach',
      instructions: 'Take 2 hours after last meal'
    },
    ingredients: [
      { name: 'Zinc Monomethionine', amount: '15mg', purpose: 'Immune and hormone support' },
      { name: 'Magnesium Aspartate', amount: '450mg', purpose: 'Sleep and recovery' },
      { name: 'Vitamin B6', amount: '10.5mg', purpose: 'Neurotransmitter synthesis' }
    ],
    effectiveness: {
      rating: 4.3,
      evidenceLevel: 'Medium'
    },
    isPopular: true
  },
  {
    _id: '13',
    name: 'Glutamine',
    category: 'Recovery',
    description: 'Conditionally essential amino acid that supports immune function and gut health.',
    benefits: [
      'Enhanced immune function',
      'Improved gut health',
      'Faster recovery',
      'Reduced muscle breakdown'
    ],
    recommendedFor: ['recovery', 'general health'],
    dosage: {
      amount: '10-15g',
      frequency: 'Daily',
      timing: 'Post-workout and before bed',
      instructions: 'Mix with water or post-workout shake'
    },
    ingredients: [
      { name: 'L-Glutamine', amount: '5g', purpose: 'Immune and gut support' }
    ],
    effectiveness: {
      rating: 4.0,
      evidenceLevel: 'Medium'
    }
  },
  {
    _id: '14',
    name: 'Tart Cherry Extract',
    category: 'Recovery',
    description: 'Natural source of melatonin and anthocyanins for sleep and recovery.',
    benefits: [
      'Improved sleep quality',
      'Reduced inflammation',
      'Faster muscle recovery',
      'Natural melatonin source'
    ],
    recommendedFor: ['recovery', 'general health'],
    dosage: {
      amount: '480mg',
      frequency: 'Daily',
      timing: '1 hour before bed',
      instructions: 'Take consistently for best results'
    },
    ingredients: [
      { name: 'Tart Cherry Extract (4:1)', amount: '480mg', purpose: 'Sleep and recovery support' }
    ],
    effectiveness: {
      rating: 4.4,
      evidenceLevel: 'Medium'
    }
  },
  {
    _id: '15',
    name: 'Rhodiola Rosea',
    category: 'Recovery',
    description: 'Adaptogenic herb that helps combat fatigue and improve mental performance.',
    benefits: [
      'Reduced fatigue',
      'Enhanced mental clarity',
      'Better stress adaptation',
      'Improved endurance'
    ],
    recommendedFor: ['recovery', 'endurance'],
    dosage: {
      amount: '200-400mg',
      frequency: 'Daily',
      timing: 'Morning on empty stomach',
      instructions: 'Cycle 6 weeks on, 2 weeks off'
    },
    ingredients: [
      { name: 'Rhodiola Rosea Extract (3% rosavins, 1% salidroside)', amount: '200mg', purpose: 'Adaptogenic support' }
    ],
    effectiveness: {
      rating: 4.2,
      evidenceLevel: 'Medium'
    }
  },
  {
    _id: '16',
    name: 'Multivitamin',
    category: 'Vitamins',
    description: 'Comprehensive blend of essential vitamins and minerals for overall health.',
    benefits: [
      'Fills nutritional gaps',
      'Supports immune function',
      'Enhanced energy levels',
      'Better overall health'
    ],
    recommendedFor: ['general health'],
    dosage: {
      amount: '1-2 tablets',
      frequency: 'Daily',
      timing: 'With breakfast',
      instructions: 'Take with food for better absorption'
    },
    ingredients: [
      { name: 'Vitamin A', amount: '5000 IU', purpose: 'Vision and immune health' },
      { name: 'Vitamin C', amount: '60mg', purpose: 'Antioxidant protection' },
      { name: 'Vitamin D', amount: '400 IU', purpose: 'Bone health' },
      { name: 'B-Complex', amount: 'Various', purpose: 'Energy metabolism' }
    ],
    effectiveness: {
      rating: 4.1,
      evidenceLevel: 'Medium'
    },
    isEssential: true
  },
  {
    _id: '17',
    name: 'Casein Protein',
    category: 'Protein',
    description: 'Slow-digesting protein ideal for sustained amino acid release.',
    benefits: [
      'Sustained amino acid release',
      'Reduced muscle breakdown',
      'Enhanced satiety',
      'Perfect for bedtime'
    ],
    recommendedFor: ['muscle gain', 'weight loss'],
    dosage: {
      amount: '25-40g',
      frequency: 'Daily',
      timing: 'Before bed or between meals',
      instructions: 'Mix with water or milk, allow to thicken'
    },
    ingredients: [
      { name: 'Micellar Casein', amount: '25g', purpose: 'Slow protein release' }
    ],
    effectiveness: {
      rating: 4.5,
      evidenceLevel: 'High'
    },
    isPopular: true
  },
  {
    _id: '18',
    name: 'BCAAs (Branched-Chain Amino Acids)',
    category: 'Amino Acids',
    description: 'Essential amino acids leucine, isoleucine, and valine for muscle preservation.',
    benefits: [
      'Reduced muscle breakdown',
      'Enhanced recovery',
      'Decreased exercise fatigue',
      'Preserved muscle during dieting'
    ],
    recommendedFor: ['muscle gain', 'recovery'],
    dosage: {
      amount: '10-15g',
      frequency: 'During workouts',
      timing: 'Intra-workout or post-workout',
      instructions: 'Mix with water and sip during training'
    },
    ingredients: [
      { name: 'L-Leucine', amount: '5g', purpose: 'Protein synthesis' },
      { name: 'L-Isoleucine', amount: '2.5g', purpose: 'Energy and recovery' },
      { name: 'L-Valine', amount: '2.5g', purpose: 'Muscle preservation' }
    ],
    effectiveness: {
      rating: 3.9,
      evidenceLevel: 'Medium'
    },
    isPopular: true
  },
  {
    _id: '19',
    name: 'CLA (Conjugated Linoleic Acid)',
    category: 'Fat Burners',
    description: 'Fatty acid that may help with body composition and fat loss.',
    benefits: [
      'Improved body composition',
      'Enhanced fat oxidation',
      'Preserved lean mass',
      'Antioxidant properties'
    ],
    recommendedFor: ['weight loss', 'muscle gain'],
    dosage: {
      amount: '3-6g',
      frequency: 'Daily with meals',
      timing: 'With main meals',
      instructions: 'Take consistently for 12+ weeks'
    },
    ingredients: [
      { name: 'CLA (80% active isomers)', amount: '1g', purpose: 'Body composition support' }
    ],
    effectiveness: {
      rating: 3.8,
      evidenceLevel: 'Medium'
    }
  },
  {
    _id: '20',
    name: 'Probiotics',
    category: 'General Health',
    description: 'Beneficial bacteria for digestive health and immune function.',
    benefits: [
      'Improved digestive health',
      'Enhanced immune function',
      'Better nutrient absorption',
      'Reduced inflammation'
    ],
    recommendedFor: ['general health'],
    dosage: {
      amount: '10-50 billion CFU',
      frequency: 'Daily',
      timing: 'With or after meals',
      instructions: 'Store in refrigerator, take consistently'
    },
    ingredients: [
      { name: 'Lactobacillus acidophilus', amount: '10 billion CFU', purpose: 'Digestive health' },
      { name: 'Bifidobacterium bifidum', amount: '10 billion CFU', purpose: 'Immune support' }
    ],
    effectiveness: {
      rating: 4.3,
      evidenceLevel: 'High'
    },
    isEssential: true
  }
];

// Mock Workouts Data - Expanded with 15+ workout programs
export const mockWorkouts: HomeWorkout[] = [
  {
    _id: '1',
    title: 'HIIT Cardio Blast',
    description: 'High-intensity interval training for maximum calorie burn and cardiovascular health.',
    category: 'HIIT',
    difficulty: 'Intermediate',
    duration: 25,
    equipment: ['None'],
    targetMuscleGroups: ['Full Body', 'Cardiovascular'],
    exercises: [
      {
        name: 'Jumping Jacks',
        instructions: 'Jump feet apart while raising arms overhead, then return to starting position.',
        sets: 4,
        reps: '45 seconds',
        restTime: 15,
        tips: ['Keep core engaged', 'Land softly on feet', 'Maintain steady rhythm']
      },
      {
        name: 'Burpees',
        instructions: 'From standing, drop to squat, kick back to plank, do push-up, jump feet to squat, jump up.',
        sets: 4,
        reps: '30 seconds',
        restTime: 30,
        modifications: {
          beginner: 'Step back instead of jumping, eliminate push-up',
          advanced: 'Add tuck jump at the top'
        }
      },
      {
        name: 'High Knees',
        instructions: 'Run in place bringing knees up to hip level with each step.',
        sets: 4,
        reps: '45 seconds',
        restTime: 15,
        tips: ['Drive knees up high', 'Stay on balls of feet', 'Keep torso upright']
      },
      {
        name: 'Mountain Climbers',
        instructions: 'In plank position, alternate bringing knees to chest rapidly.',
        sets: 4,
        reps: '45 seconds',
        restTime: 15,
        tips: ['Keep hips level', 'Maintain plank position', 'Quick but controlled movement']
      }
    ],
    calories: 300,
    isPopular: true,
    tags: ['Cardio', 'Fat Loss', 'No Equipment']
  },
  {
    _id: '2',
    title: 'Strength Builder',
    description: 'Full-body strength training using bodyweight and basic equipment.',
    category: 'Strength',
    difficulty: 'Intermediate',
    duration: 45,
    equipment: ['Dumbbells', 'Resistance Bands'],
    targetMuscleGroups: ['Chest', 'Back', 'Legs', 'Shoulders', 'Arms'],
    exercises: [
      {
        name: 'Push-ups',
        instructions: 'Lower body until chest nearly touches ground, push back up.',
        sets: 3,
        reps: '8-12',
        restTime: 60,
        modifications: {
          beginner: 'Knee push-ups or wall push-ups',
          advanced: 'Decline push-ups or diamond push-ups'
        }
      },
      {
        name: 'Squats',
        instructions: 'Lower hips back and down until thighs parallel to ground, stand back up.',
        sets: 3,
        reps: '12-15',
        restTime: 60,
        tips: ['Chest up', 'Weight on heels', 'Knees track over toes']
      },
      {
        name: 'Bent-over Rows',        instructions: 'Hinge at hips, pull elbows back squeezing shoulder blades together.',
        sets: 3,
        reps: '10-12',
        restTime: 60,
        tips: ['Use dumbbells or resistance bands', 'Keep back straight', 'Squeeze shoulder blades']
      },
      {
        name: 'Overhead Press',
        instructions: 'Press weights overhead from shoulder level, lower with control.',
        sets: 3,
        reps: '8-10',
        restTime: 60,
        tips: ['Keep core tight', 'Don\'t arch back', 'Full range of motion']
      }
    ],
    calories: 350,
    isPopular: true,
    tags: ['Strength', 'Muscle Building', 'Full Body']
  },
  {
    _id: '3',
    title: 'Yoga Flow',
    description: 'Relaxing yoga sequence for flexibility, balance, and mindfulness.',
    category: 'Yoga',
    difficulty: 'Beginner',
    duration: 30,
    equipment: ['Yoga Mat'],
    targetMuscleGroups: ['Full Body', 'Core', 'Flexibility'],
    exercises: [
      {
        name: 'Downward Facing Dog',
        instructions: 'Form inverted V-shape with hands and feet on ground, hips lifted high.',
        sets: 1,
        reps: '1 minute',
        restTime: 0,
        tips: ['Spread fingers wide', 'Lengthen spine', 'Breathe deeply']
      },
      {
        name: 'Warrior I',
        instructions: 'Lunge position with back leg straight, arms reaching overhead.',
        sets: 2,
        reps: '30 seconds each side',
        restTime: 0,
        tips: ['Square hips forward', 'Ground through feet', 'Reach up through arms']
      },
      {
        name: 'Tree Pose',
        instructions: 'Balance on one foot with other foot on inner thigh, hands in prayer.',
        sets: 2,
        reps: '30 seconds each side',
        restTime: 0,
        modifications: {
          beginner: 'Use wall for support, foot on calf instead of thigh'
        }
      },
      {
        name: 'Child\'s Pose',
        instructions: 'Kneel with big toes touching, sit back on heels, arms extended forward.',
        sets: 1,
        reps: '2 minutes',
        restTime: 0,
        tips: ['Let hips sink toward heels', 'Breathe into back body', 'Relax completely']
      }
    ],
    calories: 150,
    isPopular: true,
    tags: ['Yoga', 'Flexibility', 'Relaxation', 'Mindfulness']
  },
  {
    _id: '4',
    title: 'Core Crusher',
    description: 'Intense core workout targeting all abdominal muscles and stabilizers.',
    category: 'Core',
    difficulty: 'Advanced',
    duration: 20,
    equipment: ['None'],
    targetMuscleGroups: ['Core', 'Abs', 'Obliques'],
    exercises: [
      {
        name: 'Plank',
        instructions: 'Hold straight body position supported on forearms and toes.',
        sets: 3,
        reps: '60 seconds',
        restTime: 30,
        tips: ['Keep body straight', 'Engage core', 'Don\'t let hips sag']
      },
      {
        name: 'Russian Twists',
        instructions: 'Sit with knees bent, lean back slightly, rotate torso side to side.',
        sets: 3,
        reps: '20 each side',
        restTime: 30,
        modifications: {
          beginner: 'Keep feet on ground',
          advanced: 'Hold weight or medicine ball'
        }
      },
      {
        name: 'Dead Bug',
        instructions: 'Lying on back, slowly lower opposite arm and leg while keeping core stable.',
        sets: 3,
        reps: '10 each side',
        restTime: 30,
        tips: ['Keep lower back pressed to floor', 'Move slowly and controlled']
      },
      {
        name: 'Bicycle Crunches',
        instructions: 'Lying on back, bring opposite elbow to knee in cycling motion.',
        sets: 3,
        reps: '20 each side',
        restTime: 30,
        tips: ['Don\'t pull on neck', 'Focus on rotation', 'Slow and controlled']
      }
    ],
    calories: 200,
    isPopular: true,
    tags: ['Core', 'Abs', 'No Equipment', 'Quick']
  },
  {
    _id: '5',
    title: 'Beginner Total Body',
    description: 'Perfect introduction to fitness with simple, effective movements.',
    category: 'Bodyweight',
    difficulty: 'Beginner',
    duration: 35,
    equipment: ['None'],
    targetMuscleGroups: ['Full Body'],
    exercises: [
      {
        name: 'Bodyweight Squats',
        instructions: 'Stand with feet hip-width apart, lower hips back and down, return to standing.',
        sets: 2,
        reps: '10-15',
        restTime: 45,
        tips: ['Start slow', 'Focus on form', 'Use chair for support if needed']
      },
      {
        name: 'Wall Push-ups',
        instructions: 'Stand arm\'s length from wall, place hands flat against wall, push in and out.',
        sets: 2,
        reps: '8-12',
        restTime: 45,
        tips: ['Keep body straight', 'Control the movement', 'Step closer to wall if too difficult']
      },
      {
        name: 'Standing Marches',
        instructions: 'March in place lifting knees to comfortable height.',
        sets: 2,
        reps: '20 steps',
        restTime: 30,
        tips: ['Keep back straight', 'Gentle pace', 'Hold something for balance if needed']
      },
      {
        name: 'Seated Leg Extensions',
        instructions: 'Sit in chair, extend one leg straight out, lower slowly.',
        sets: 2,
        reps: '10 each leg',
        restTime: 30,
        tips: ['Hold chair for support', 'Squeeze thigh muscles', 'Control the movement']
      }
    ],
    calories: 180,
    isPopular: true,
    tags: ['Beginner', 'Low Impact', 'Full Body', 'No Equipment']
  },
  {
    _id: '6',
    title: 'Flexibility & Stretch',
    description: 'Comprehensive stretching routine for improved flexibility and recovery.',
    category: 'Flexibility',
    difficulty: 'Beginner',
    duration: 25,
    equipment: ['Yoga Mat'],
    targetMuscleGroups: ['Full Body', 'Flexibility'],
    exercises: [
      {
        name: 'Forward Fold',
        instructions: 'Stand and slowly fold forward, reaching toward toes.',
        sets: 1,
        reps: '30 seconds',
        restTime: 0,
        tips: ['Bend knees if needed', 'Don\'t force the stretch', 'Breathe deeply']
      },
      {
        name: 'Pigeon Pose',
        instructions: 'Bring one leg forward bent, extend other leg back, fold forward.',
        sets: 2,
        reps: '45 seconds each side',
        restTime: 0,
        modifications: {
          beginner: 'Use props under hips for support'
        }
      },
      {
        name: 'Spinal Twist',
        instructions: 'Sit with legs extended, cross one leg over, twist toward bent knee.',
        sets: 2,
        reps: '30 seconds each side',
        restTime: 0,
        tips: ['Keep spine tall', 'Gentle rotation', 'Breathe into the twist']
      },
      {
        name: 'Cat-Cow Stretch',
        instructions: 'On hands and knees, alternate arching and rounding spine.',
        sets: 1,
        reps: '10 repetitions',
        restTime: 0,
        tips: ['Move slowly', 'Synchronize with breath', 'Full range of motion']
      }
    ],
    calories: 100,
    isPopular: true,
    tags: ['Flexibility', 'Recovery', 'Relaxation']
  },
  {
    _id: '7',
    title: 'Upper Body Power',
    description: 'Focused upper body workout for building strength and muscle.',
    category: 'Strength',
    difficulty: 'Intermediate',
    duration: 40,
    equipment: ['Dumbbells', 'Pull-up Bar'],
    targetMuscleGroups: ['Chest', 'Back', 'Shoulders', 'Arms'],
    exercises: [
      {
        name: 'Dumbbell Bench Press',
        instructions: 'Lying on bench, press dumbbells from chest level to arms extended.',
        sets: 4,
        reps: '8-10',
        restTime: 90,
        tips: ['Keep feet on floor', 'Control the negative', 'Full range of motion']
      },
      {
        name: 'Pull-ups',
        instructions: 'Hang from bar, pull body up until chin over bar, lower with control.',
        sets: 3,
        reps: '5-8',
        restTime: 90,
        modifications: {
          beginner: 'Assisted pull-ups or lat pulldowns',
          advanced: 'Weighted pull-ups'
        }
      },
      {
        name: 'Dumbbell Shoulder Press',
        instructions: 'Seated or standing, press dumbbells overhead from shoulder level.',
        sets: 3,
        reps: '10-12',
        restTime: 60,
        tips: ['Don\'t arch back', 'Control the weight', 'Full extension overhead']
      },
      {
        name: 'Dumbbell Rows',
        instructions: 'Bent over, pull dumbbells to sides of torso, squeeze shoulder blades.',
        sets: 3,
        reps: '10-12',
        restTime: 60,
        tips: ['Keep back straight', 'Pull with elbows', 'Squeeze at the top']
      }
    ],
    calories: 320,
    tags: ['Upper Body', 'Strength', 'Muscle Building']
  },
  {
    _id: '8',
    title: 'Lower Body Blast',
    description: 'Comprehensive lower body workout for legs and glutes.',
    category: 'Strength',
    difficulty: 'Intermediate',
    duration: 45,
    equipment: ['Dumbbells', 'Resistance Bands'],
    targetMuscleGroups: ['Legs', 'Glutes', 'Calves'],
    exercises: [
      {
        name: 'Goblet Squats',
        instructions: 'Hold dumbbell at chest, squat down keeping chest up, return to standing.',
        sets: 4,
        reps: '12-15',
        restTime: 60,
        tips: ['Chest up', 'Weight on heels', 'Go deep']
      },
      {
        name: 'Romanian Deadlifts',
        instructions: 'Hold dumbbells, hinge at hips pushing back, lower with straight legs.',
        sets: 4,
        reps: '10-12',
        restTime: 60,
        tips: ['Push hips back', 'Keep back straight', 'Feel stretch in hamstrings']
      },
      {
        name: 'Walking Lunges',
        instructions: 'Step forward into lunge, push off back foot to step into next lunge.',
        sets: 3,
        reps: '12 each leg',
        restTime: 60,
        tips: ['Step far enough forward', 'Keep torso upright', 'Control the descent']
      },
      {
        name: 'Calf Raises',
        instructions: 'Rise up on toes as high as possible, lower slowly.',
        sets: 3,
        reps: '15-20',
        restTime: 45,
        tips: ['Full range of motion', 'Pause at the top', 'Control the negative']
      }
    ],
    calories: 380,
    tags: ['Lower Body', 'Legs', 'Glutes', 'Strength']
  },
  {
    _id: '9',
    title: 'Cardio Dance',
    description: 'Fun, energetic dance workout that burns calories and boosts mood.',
    category: 'Cardio',
    difficulty: 'Beginner',
    duration: 30,
    equipment: ['None'],
    targetMuscleGroups: ['Full Body', 'Cardiovascular'],
    exercises: [
      {
        name: 'Basic Step Touch',
        instructions: 'Step side to side touching feet together, add arm movements.',
        sets: 1,
        reps: '2 minutes',
        restTime: 0,
        tips: ['Start simple', 'Add your own style', 'Keep moving']
      },
      {
        name: 'Grapevine',
        instructions: 'Step side, cross behind, step side, touch. Repeat other direction.',
        sets: 1,
        reps: '2 minutes',
        restTime: 0,
        tips: ['Start slow', 'Add arm movements', 'Have fun with it']
      },
      {
        name: 'Knee Lifts with Arms',
        instructions: 'Lift knees alternately while moving arms in various patterns.',
        sets: 1,
        reps: '2 minutes',
        restTime: 0,
        tips: ['Engage core', 'Lift knees high', 'Express yourself']
      },
      {
        name: 'Dance Freestyle',
        instructions: 'Move to the music however feels good, keep the energy up!',
        sets: 1,
        reps: '3 minutes',
        restTime: 0,
        tips: ['Let loose', 'Keep moving', 'Enjoy the music']
      }
    ],
    calories: 250,
    tags: ['Cardio', 'Dance', 'Fun', 'Mood Booster']
  },
  {
    _id: '10',
    title: 'Athletic Performance',
    description: 'Sport-specific movements to enhance athletic performance and agility.',
    category: 'HIIT',
    difficulty: 'Advanced',
    duration: 35,
    equipment: ['Cones', 'Agility Ladder'],
    targetMuscleGroups: ['Full Body', 'Agility', 'Power'],
    exercises: [
      {
        name: 'Agility Ladder Drills',
        instructions: 'Various footwork patterns through ladder: in-in-out-out, lateral shuffles.',
        sets: 3,
        reps: '30 seconds',
        restTime: 60,
        tips: ['Quick feet', 'Stay on balls of feet', 'Various patterns']
      },
      {
        name: 'Cone Sprints',
        instructions: 'Sprint between cones in various patterns: straight, zigzag, box drill.',
        sets: 5,
        reps: '15 seconds',
        restTime: 45,
        tips: ['Maximum effort', 'Sharp cuts', 'Stay low through turns']
      },
      {
        name: 'Plyometric Jumps',
        instructions: 'Various jumping exercises: box jumps, broad jumps, lateral bounds.',
        sets: 3,
        reps: '8-10',
        restTime: 90,
        tips: ['Land softly', 'Maximum power', 'Full recovery between sets']
      },
      {
        name: 'Medicine Ball Slams',
        instructions: 'Lift ball overhead and slam down with maximum force.',
        sets: 3,
        reps: '10',
        restTime: 60,
        tips: ['Use whole body', 'Slam hard', 'Pick up quickly']
      }
    ],
    calories: 400,
    tags: ['Athletic', 'Power', 'Agility', 'Advanced']
  },
  {
    _id: '11',
    title: 'Pilates Core',
    description: 'Precise movements focusing on core strength, stability, and control.',
    category: 'Pilates',
    difficulty: 'Intermediate',
    duration: 35,
    equipment: ['Pilates Mat'],
    targetMuscleGroups: ['Core', 'Stability', 'Posture'],
    exercises: [
      {
        name: 'The Hundred',
        instructions: 'Lie on back, legs in tabletop, pulse arms while breathing in rhythm.',
        sets: 1,
        reps: '100 pulses',
        restTime: 30,
        tips: ['Keep core engaged', 'Breathe rhythmically', 'Control the movement']
      },
      {
        name: 'Single Leg Circles',
        instructions: 'Lying on back, draw circles with one leg while keeping torso stable.',
        sets: 2,
        reps: '5 each direction, each leg',
        restTime: 0,
        tips: ['Keep hips square', 'Small controlled circles', 'Stable torso']
      },
      {
        name: 'Teaser',
        instructions: 'From lying position, roll up to V-shape balancing on tailbone.',
        sets: 3,
        reps: '5',
        restTime: 30,
        modifications: {
          beginner: 'Keep knees bent, use hands for support'
        }
      },
      {
        name: 'Swan Dive',
        instructions: 'Lying face down, rock forward and back using back extensors.',
        sets: 2,
        reps: '8',
        restTime: 30,
        tips: ['Smooth rocking motion', 'Use back muscles', 'Control the movement']
      }
    ],
    calories: 180,
    tags: ['Pilates', 'Core', 'Stability', 'Control']
  },
  {
    _id: '12',
    title: 'Functional Movement',
    description: 'Real-world movements that improve daily function and prevent injury.',
    category: 'Strength',
    difficulty: 'Intermediate',
    duration: 40,
    equipment: ['Kettlebell', 'TRX'],
    targetMuscleGroups: ['Full Body', 'Functional'],
    exercises: [
      {
        name: 'Kettlebell Swings',
        instructions: 'Hinge at hips, swing kettlebell from between legs to chest height.',
        sets: 4,
        reps: '15',
        restTime: 60,
        tips: ['Drive with hips', 'Keep back straight', 'Breathe with rhythm']
      },
      {
        name: 'Turkish Get-ups',
        instructions: 'Complex movement from lying to standing while holding weight overhead.',
        sets: 2,
        reps: '3 each side',
        restTime: 90,
        modifications: {
          beginner: 'Practice without weight first'
        }
      },
      {
        name: 'Farmer\'s Walk',
        instructions: 'Walk with heavy weights in each hand maintaining good posture.',
        sets: 3,
        reps: '30 seconds',
        restTime: 60,
        tips: ['Keep shoulders back', 'Engage core', 'Controlled steps']
      },
      {
        name: 'Bear Crawl',
        instructions: 'Crawl forward on hands and feet keeping knees off ground.',
        sets: 3,
        reps: '20 steps',
        restTime: 45,
        tips: ['Keep knees low', 'Opposite hand/foot', 'Controlled movement']
      }
    ],
    calories: 350,
    tags: ['Functional', 'Real World', 'Full Body']
  },
  {
    _id: '13',    title: 'Recovery & Mobility',
    description: 'Gentle movements and stretches for active recovery and mobility.',
    category: 'Flexibility',
    difficulty: 'Beginner',
    duration: 25,
    equipment: ['Foam Roller', 'Yoga Mat'],
    targetMuscleGroups: ['Full Body', 'Mobility'],
    exercises: [
      {
        name: 'Foam Rolling',
        instructions: 'Roll out major muscle groups slowly and deliberately.',
        sets: 1,
        reps: '1 minute per muscle group',
        restTime: 0,
        tips: ['Go slow', 'Breathe through it', 'Focus on tight spots']
      },
      {
        name: 'Hip Circles',
        instructions: 'Standing or lying, make large circles with one leg.',
        sets: 2,
        reps: '10 each direction, each leg',
        restTime: 0,
        tips: ['Full range of motion', 'Control the movement', 'Feel the stretch']
      },
      {
        name: 'Shoulder Rolls',
        instructions: 'Roll shoulders forward and backward in large circles.',
        sets: 2,
        reps: '10 each direction',
        restTime: 0,
        tips: ['Large movements', 'Release tension', 'Breathe deeply']
      },
      {
        name: 'Gentle Twists',
        instructions: 'Seated or standing, rotate torso gently side to side.',
        sets: 1,
        reps: '2 minutes',
        restTime: 0,
        tips: ['Move slowly', 'Don\'t force', 'Feel the release']
      }
    ],
    calories: 80,
    tags: ['Recovery', 'Mobility', 'Gentle', 'Restoration']
  },
  {
    _id: '14',
    title: 'Bodyweight Circuit',
    description: 'High-intensity circuit using only bodyweight exercises.',
    category: 'HIIT',
    difficulty: 'Intermediate',
    duration: 30,
    equipment: ['None'],
    targetMuscleGroups: ['Full Body'],
    exercises: [
      {
        name: 'Squat Jumps',
        instructions: 'Squat down and explode up into a jump, land softly.',
        sets: 4,
        reps: '30 seconds',
        restTime: 30,
        tips: ['Land softly', 'Full squat depth', 'Explosive up']
      },
      {
        name: 'Push-up to T',
        instructions: 'Do push-up, rotate to side with arm extended upward.',
        sets: 4,
        reps: '20 seconds each side',
        restTime: 20,
        tips: ['Keep core tight', 'Full rotation', 'Control the movement']
      },
      {
        name: 'Single Leg Glute Bridges',
        instructions: 'Lying on back, bridge up on one leg, squeeze glute at top.',
        sets: 4,
        reps: '15 each leg',
        restTime: 30,
        tips: ['Squeeze glutes', 'Keep hips level', 'Control up and down']
      },
      {
        name: 'Plank Jacks',
        instructions: 'In plank position, jump feet apart and together.',
        sets: 4,
        reps: '30 seconds',
        restTime: 30,
        tips: ['Keep hips stable', 'Quick feet', 'Maintain plank']
      }
    ],
    calories: 320,
    tags: ['Bodyweight', 'Circuit', 'No Equipment', 'Full Body']
  },
  {
    _id: '15',
    title: 'Endurance Builder',
    description: 'Steady-state cardio workout to build cardiovascular endurance.',
    category: 'Cardio',
    difficulty: 'Intermediate',
    duration: 50,
    equipment: ['None'],
    targetMuscleGroups: ['Cardiovascular', 'Full Body'],
    exercises: [
      {
        name: 'Light Jogging in Place',
        instructions: 'Jog in place at comfortable pace, stay on balls of feet.',
        sets: 1,
        reps: '5 minutes',
        restTime: 60,
        tips: ['Steady rhythm', 'Breathe naturally', 'Light on feet']
      },
      {
        name: 'Step-ups',
        instructions: 'Step up onto sturdy surface alternating legs.',
        sets: 5,
        reps: '2 minutes',
        restTime: 60,
        tips: ['Full foot on surface', 'Control down', 'Steady pace']
      },
      {
        name: 'Arm Circles with Steps',
        instructions: 'Step side to side while making large arm circles.',
        sets: 3,
        reps: '3 minutes',
        restTime: 60,
        tips: ['Keep moving', 'Large arm movements', 'Stay rhythmic']
      },
      {
        name: 'Cool Down Walk',
        instructions: 'Walk in place or around room at decreasing pace.',
        sets: 1,
        reps: '5 minutes',
        restTime: 0,
        tips: ['Gradually slow down', 'Deep breathing', 'Gentle movement']
      }
    ],
    calories: 400,
    tags: ['Endurance', 'Cardio', 'Steady State', 'Building']
  }
];

// Mock Diet Plans
export const mockDietPlans: DietPlan[] = [
  {
    _id: '1',
    name: 'Weight Loss Plan',
    description: 'Balanced nutrition plan designed for sustainable weight loss',
    goal: 'weight loss',
    targetCalories: 1190,
    macroTargets: {
      protein: 30,
      carbs: 40,
      fat: 30
    },
    duration: '30 days',
    meals: [
      {
        time: 'Breakfast',
        items: [
          { name: 'Oatmeal with berries', calories: 250, protein: 8, carbs: 45, fat: 5, quantity: '1 cup', notes: 'Add fresh berries' },
          { name: 'Greek yogurt', calories: 100, protein: 15, carbs: 8, fat: 0, quantity: '150g', notes: 'Plain, low-fat' }
        ],
        totalCalories: 350,
        macros: { protein: 23, carbs: 53, fat: 5 }
      },
      {
        time: 'Lunch',
        items: [
          { name: 'Grilled chicken salad', calories: 300, protein: 35, carbs: 15, fat: 12, quantity: '200g chicken + salad', notes: 'Mixed greens with vegetables' },
          { name: 'Olive oil dressing', calories: 50, protein: 0, carbs: 1, fat: 6, quantity: '1 tbsp', notes: 'Extra virgin olive oil' }
        ],
        totalCalories: 350,
        macros: { protein: 35, carbs: 16, fat: 18 }
      },
      {
        time: 'Dinner',
        items: [
          { name: 'Baked salmon', calories: 250, protein: 30, carbs: 0, fat: 15, quantity: '150g fillet', notes: 'Season with herbs' },
          { name: 'Steamed vegetables', calories: 80, protein: 3, carbs: 18, fat: 1, quantity: '200g mixed', notes: 'Broccoli, carrots, bell peppers' },
          { name: 'Quinoa', calories: 160, protein: 6, carbs: 30, fat: 3, quantity: '80g cooked', notes: 'Fluffy and seasoned' }
        ],
        totalCalories: 490,
        macros: { protein: 39, carbs: 48, fat: 19 }
      }
    ],
    guidelines: [
      'Eat every 3-4 hours to maintain metabolism',
      'Drink at least 8 glasses of water daily',
      'Include a variety of colorful vegetables'
    ],
    tips: [
      'Drink plenty of water throughout the day',
      'Include healthy snacks like nuts or fruits between meals',
      'Focus on portion control and mindful eating'
    ],
    isPopular: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  }
];

// Mock Progress Data
export const mockProgress: Progress[] = [
  {
    _id: '1',
    user: 'user1',
    date: '2024-01-15',
    weight: 75,
    measurements: {
      chest: 95,
      waist: 85,
      hips: 100,
      arms: 32,
      thighs: 58
    },
    bodyFat: 18,
    workoutCompleted: {
      workoutId: 'workout1',
      duration: 45,
      caloriesBurned: 350,
      difficulty: 'moderate'
    },
    notes: 'Feeling stronger and more energetic'
  }
];

// Mock AI Tips
export const mockAITips: AITip[] = [
  {
    _id: '1',
    category: 'workout',
    title: 'Progressive Overload',
    content: 'Gradually increase weight, reps, or sets to continue building strength and muscle.',
    difficulty: 'intermediate',
    tags: ['strength', 'muscle building']
  },
  {
    _id: '2',
    category: 'nutrition',
    title: 'Protein Timing',
    content: 'Consume protein within 2 hours post-workout for optimal muscle recovery.',
    difficulty: 'beginner',
    tags: ['protein', 'recovery']
  },
  {
    _id: '3',
    category: 'recovery',
    title: 'Sleep Quality',
    content: 'Aim for 7-9 hours of quality sleep for optimal recovery and hormone regulation.',
    difficulty: 'beginner',
    tags: ['sleep', 'recovery', 'hormones']
  }
];

// Mock Streaks and Challenges Data
export const mockStreaks: UserStreak[] = [
  {
    type: 'workout',
    currentStreak: 5,
    longestStreak: 12,
    lastActivity: '2024-01-20'
  },
  {
    type: 'login',
    currentStreak: 8,
    longestStreak: 25,
    lastActivity: '2024-01-20'
  },
  {
    type: 'supplement',
    currentStreak: 3,
    longestStreak: 15,
    lastActivity: '2024-01-19'
  }
];

export const mockChallenges: Challenge[] = [
  {
    _id: '1',
    title: '30-Day Fitness Challenge',
    description: 'Complete at least 3 workouts per week for 30 days',
    type: 'monthly',
    target: 12,
    progress: 8,
    startDate: '2024-01-01',
    endDate: '2024-01-31',
    isActive: true,
    reward: 'Fitness Achievement Badge',
    icon: '🏆',
    category: 'fitness'
  },
  {
    _id: '2',
    title: 'Weekly Step Goal',
    description: 'Log your progress 7 days this week',
    type: 'weekly',
    target: 7,
    progress: 5,
    startDate: '2024-01-15',
    endDate: '2024-01-21',
    isActive: true,
    reward: '10% supplement discount',
    icon: '📊',
    category: 'fitness'
  },
  {
    _id: '3',
    title: 'Daily Hydration',
    description: 'Track your water intake for today',
    type: 'daily',
    target: 8,
    progress: 6,
    startDate: '2024-01-20',
    endDate: '2024-01-20',
    isActive: true,
    reward: 'Hydration Hero Badge',
    icon: '💧',
    category: 'lifestyle'
  }
];

export const getMockAIResponse = (requestType: string) => {
  const responses = {
    workout: {
      success: true,
      data: {
        recommendations: [
          "Start with 3 sets of 10-12 reps for compound exercises",
          "Focus on proper form over heavy weights",
          "Include both push and pull movements in your routine"
        ],
        tips: [
          "Warm up for 5-10 minutes before lifting",
          "Rest 48-72 hours between training the same muscle groups",
          "Track your progress to ensure consistent improvement"
        ],
        personalizedAdvice: "Based on your profile, I recommend starting with bodyweight exercises and gradually progressing to weighted movements."
      }
    },
    nutrition: {
      success: true,
      data: {
        recommendations: [
          "Eat protein with every meal to support muscle growth",
          "Include complex carbohydrates for sustained energy",
          "Don't forget healthy fats for hormone production"
        ],
        tips: [
          "Meal prep on weekends to stay consistent",
          "Drink water before, during, and after meals",
          "Listen to your hunger cues and eat mindfully"
        ],
        personalizedAdvice: "Focus on whole foods and aim for 0.8-1g of protein per pound of body weight."
      }
    },
    general: {
      success: true,
      data: {
        recommendations: [
          "Consistency beats perfection in fitness",
          "Get 7-9 hours of quality sleep each night",
          "Stress management is crucial for results"
        ],
        tips: [
          "Set realistic, achievable goals",
          "Find activities you enjoy to stay motivated",
          "Progress takes time - be patient with yourself"
        ],
        personalizedAdvice: "Focus on building sustainable habits rather than seeking quick fixes."
      }
    }
  };

  return responses[requestType as keyof typeof responses] || responses.general;
};
