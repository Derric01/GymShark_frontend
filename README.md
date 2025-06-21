# 🦈 Gym Sharks Frontend

**Modern, responsive fitness platform frontend** built with Next.js 15, TypeScript, and beautiful animations. Part of the complete Gym Sharks fitness ecosystem.

## 🚨 **CRITICAL: BACKEND SERVER MUST BE ACTIVE**

### **⚡ MANDATORY STEP BEFORE USING THE APP:**

# **🔥 WAKE UP THE BACKEND SERVER FIRST!**

**✅ GREAT NEWS: Both frontend and backend are now LIVE and working perfectly!**

**The backend server SLEEPS after 15 minutes of inactivity and MUST be awakened before using this frontend.**

### **📋 REQUIRED PRE-LAUNCH CHECKLIST:**

✅ **Step 1**: Visit https://gymshark-backend-sbqa.onrender.com  
✅ **Step 2**: Wait 30-60 seconds for server to wake up  
✅ **Step 3**: Verify you see "Gym Sharks Backend Server is running!"  
✅ **Step 4**: Now you can use the frontend app safely at https://gym-shark-frontend.vercel.app

### **🎯 CONFIRMED WORKING FEATURES:**
- ✅ **Authentication**: Login/Register working perfectly
- ✅ **CORS Issues**: Completely resolved for production
- ✅ **API Integration**: All endpoints responding correctly
- ✅ **Dashboard**: Full functionality restored
- ✅ **Progress Tracking**: Saving and loading data properly
- ✅ **Workout Plans**: Complete integration working
- ✅ **Supplement Guide**: All data loading correctly
- ✅ **AI Coach**: Personalized recommendations active

### **🔄 WHY THE WAKE-UP STEP IS STILL REQUIRED:**
Render.com free tier automatically puts servers to sleep after 15 minutes of inactivity. This saves costs but requires manual wake-up for the first request.

**💡 PRO TIP: Bookmark the backend URL for easy access when starting a new session!**

---

## 🚀 **Live Demo**

- **Frontend**: https://gym-shark-frontend.vercel.app
- **Backend**: https://gymshark-backend-sbqa.onrender.com

## ✨ **Features**

### 🎨 **Beautiful UI/UX**
- **Stunning Landing Page** with advanced Framer Motion animations
- **Interactive Stats** with hover effects and emoji animations
- **Responsive Design** optimized for all devices
- **Modern Gradient Design** with floating background elements
- **Smooth Page Transitions** throughout the application

### 🔐 **Authentication System**
- **JWT-based Authentication** with secure cookie management
- **User Registration/Login** with form validation
- **Protected Routes** with automatic redirects
- **Profile Management** with update capabilities

### 💪 **Workout Management**
- **6 Complete Workout Programs** with detailed instructions
- **Exercise Detail Pages** with step-by-step guidance
- **Difficulty Levels** for all fitness levels
- **Progress Tracking** integration

### 📊 **Progress Tracking**
- **Visual Analytics** with charts and graphs
- **Goal Setting** and achievement tracking
- **Historical Data** visualization
- **BMI Calculator** integration

### 💊 **Supplement Guide**
- **12 Research-backed Supplements** with comprehensive information
- **Detailed Benefits** and usage recommendations
- **Safety Information** and contraindications
- **Dosage Guidelines** for optimal results

### 🤖 **AI Coach**
- **Personalized Recommendations** based on user goals
- **Workout Suggestions** tailored to experience level
- **Nutrition Advice** with dietary considerations
- **Goal-based Tips** for optimal results

### 🥗 **Diet Planning**
- **3 Goal-based Nutrition Plans** (Weight Loss, Muscle Gain, Maintenance)
- **Macro Tracking** capabilities
- **Meal Suggestions** with nutritional information

## 🛠 **Tech Stack**

```json
{
  "framework": "Next.js 15",
  "language": "TypeScript",
  "styling": "Tailwind CSS",
  "animations": "Framer Motion",
  "state": "React Query + Context API",
  "http": "Axios",
  "ui": "Radix UI + Custom Components",
  "notifications": "Sonner",
  "icons": "React Icons",
  "forms": "React Hook Form"
}
```

## 📁 **Project Structure**

```
src/
├── app/                     # Next.js 15 App Router
│   ├── page.tsx            # 🏠 Landing Page (Enhanced)
│   ├── layout.tsx          # Root Layout
│   ├── auth/
│   │   ├── login/          # 🔐 Login Page
│   │   └── register/       # 📝 Registration Page
│   ├── dashboard/          # 📊 User Dashboard
│   ├── workouts/           # 💪 Workout Pages
│   │   └── [id]/          # Individual Workout Details
│   ├── supplements/        # 💊 Supplement Pages
│   │   └── [id]/          # Individual Supplement Details
│   ├── progress/           # 📈 Progress Tracking
│   ├── ai-coach/          # 🤖 AI Coach Interface
│   └── diets/             # 🥗 Diet Plans
├── components/             # Reusable UI Components
│   ├── ui/                # Radix UI Components
│   └── ErrorBoundary.tsx  # Error Handling
├── contexts/              # React Contexts
│   └── AuthContext.tsx    # Authentication State
├── hooks/                 # Custom React Hooks
│   └── useApi.ts          # API Integration Hooks
├── lib/                   # Utilities & Configuration
│   ├── api.ts            # Axios Configuration
│   ├── mockData.ts       # Fallback Data
│   └── utils.ts          # Helper Functions
├── providers/             # App-level Providers
│   └── QueryProvider.tsx  # React Query Setup
├── services/              # API Services
│   └── api.ts            # API Endpoints
└── types/                 # TypeScript Definitions
    └── index.ts          # Global Types
```

## 🔧 **Environment Setup**

### **Local Development**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Derric01/GymShark_frontend.git
   cd GymShark_frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create environment file**:
   ```bash
   cp .env.example .env.local
   ```

4. **Configure environment variables**:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   NEXT_PUBLIC_APP_ENV=development
   ```

5. **Start development server**:
   ```bash
   npm run dev
   ```

6. **Open browser**: http://localhost:3000

### **Production Setup**

For production deployment, use:
```env
NEXT_PUBLIC_API_URL=https://gymshark-backend-sbqa.onrender.com/api
NEXT_PUBLIC_APP_ENV=production
```

## 🚀 **Deployment**

### **Vercel Deployment (Recommended)**

1. **Connect to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com)
   - Import from GitHub: `GymShark_frontend`

2. **Configure Environment Variables**:
   ```env
   NEXT_PUBLIC_API_URL=https://gymshark-backend-sbqa.onrender.com/api
   NEXT_PUBLIC_APP_ENV=production
   ```

3. **Deploy**: Automatic deployment on push to main branch

### **Manual Deployment**

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🔗 **API Integration**

### **Backend Dependency**
This frontend connects to the Gym Sharks backend:
- **Repository**: https://github.com/Derric01/GymShark_backend
- **Live API**: https://gymshark-backend-sbqa.onrender.com

### **API Endpoints Used**
- `GET /api/health` - Health check
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User authentication
- `GET /api/workouts` - Workout data
- `GET /api/supplements` - Supplement information
- `POST /api/progress` - Progress tracking
- `POST /api/ai/tips` - AI recommendations

### **Fallback System**
The application includes comprehensive mock data for offline development and testing when the backend is unavailable.

## 🎯 **Key Features Breakdown**

### **🏠 Landing Page**
- **Hero Section** with animated background elements
- **Interactive Statistics** with hover animations and emojis
- **Feature Showcase** with 3D hover effects
- **Call-to-Action** sections with smooth transitions
- **Responsive Design** optimized for all screen sizes

### **🔐 Authentication Flow**
- **Registration** with comprehensive form validation
- **Login** with secure JWT token management
- **Protected Routes** with automatic redirects
- **Session Persistence** with secure cookie storage

### **💪 Workout System**
- **6 Complete Programs**: HIIT, Yoga, Strength, Core, Beginner, Stretch
- **Detailed Instructions** for each exercise
- **Progress Tracking** integration
- **Difficulty Indicators** for proper selection

### **📊 Progress Dashboard**
- **Visual Analytics** with interactive charts
- **Goal Setting** and tracking
- **Achievement System** with milestones
- **Historical Data** visualization

## 🔧 **Development Commands**

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 🛡️ **Error Handling**

- **Error Boundaries** for graceful error recovery
- **API Fallbacks** with mock data
- **Loading States** for better UX
- **Toast Notifications** for user feedback
- **Offline Support** with cached data

## 📱 **Browser Support**

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📞 **Support**

- **Issues**: [GitHub Issues](https://github.com/Derric01/GymShark_frontend/issues)
- **Documentation**: See deployment guide in root directory
- **Backend**: [GymShark Backend Repository](https://github.com/Derric01/GymShark_backend)

## 📝 **License**

MIT License - see LICENSE file for details

---

## 🎉 **Getting Started Checklist**

- [ ] 🔥 **STEP 1: Wake up backend server** (Visit https://gymshark-backend-sbqa.onrender.com and wait 30-60 seconds)
- [ ] ✅ **STEP 2: Use the live app** (Go to https://gym-shark-frontend.vercel.app)
- [ ] ✅ **STEP 3: Register/Login** (Create account or login with existing credentials)
- [ ] ✅ **STEP 4: Explore features** (Dashboard, workouts, progress tracking, supplements, AI coach)

**🚨 IMPORTANT: Always wake the backend server first by visiting the backend URL!**
**🎯 BOTH APPS ARE LIVE: Frontend and backend are fully deployed and working!**

**🦈 Welcome to Gym Sharks - Your Ultimate Fitness Companion! 💪**
