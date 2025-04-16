
// User types
export interface User {
  id: string;
  name: string;
  email: string;
  userType: 'trainer' | 'client';
  avatarUrl?: string;
  reputation: number;
  createdAt: Date;
}

export interface TrainerProfile extends User {
  userType: 'trainer';
  bio: string;
  specialties: string[];
  certifications: string[];
  successRate: number;
  completedPrograms: number;
}

export interface ClientProfile extends User {
  userType: 'client';
  goals: string[];
  completedPrograms: number;
}

// Program types
export type ProgramSlotLimit = 1 | 5 | 10 | 'unlimited';

export type ProgramStatus = 
  | 'draft'
  | 'auction'
  | 'in_progress'
  | 'completed'
  | 'cancelled';

export interface Program {
  id: string;
  trainerId: string;
  title: string;
  description: string;
  goal: {
    type: 'weight_loss' | 'strength_gain' | 'endurance' | 'flexibility' | 'custom';
    metric: string;
    target: number;
    unit: string;
  };
  duration: number; // in days
  slots: {
    limit: ProgramSlotLimit;
    filled: number;
  };
  minBid: number;
  currentHighestBid?: number;
  status: ProgramStatus;
  startDate?: Date;
  endDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  successRate?: number;
}

// Bid types
export type BidStatus = 'pending' | 'accepted' | 'rejected';

export interface Bid {
  id: string;
  programId: string;
  clientId: string;
  amount: number;
  message?: string;
  status: BidStatus;
  createdAt: Date;
  updatedAt: Date;
}

// Progress types
export type ProgressType = 'photo' | 'video' | 'measurement';

export interface ProgressUpdate {
  id: string;
  programId: string;
  clientId: string;
  type: ProgressType;
  description: string;
  mediaUrl?: string;
  measurementValue?: number;
  measurementUnit?: string;
  createdAt: Date;
}

// Verification types
export type VoteType = 'goal_met' | 'goal_not_met';

export interface Verification {
  id: string;
  programId: string;
  clientId: string;
  trainerId: string;
  clientVote?: VoteType;
  trainerVote?: VoteType;
  platformVote?: VoteType;
  finalResult?: VoteType;
  reputationAwarded?: number;
  createdAt: Date;
  updatedAt: Date;
}

// Mock data
export const MOCK_TRAINERS: TrainerProfile[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    email: 'alex@example.com',
    userType: 'trainer',
    avatarUrl: 'https://i.pravatar.cc/150?img=11',
    bio: 'NASM certified personal trainer with 10+ years experience specializing in weight loss and strength training.',
    specialties: ['Weight Loss', 'Strength Training', 'HIIT'],
    certifications: ['NASM CPT', 'CrossFit Level 2'],
    reputation: 92,
    successRate: 94,
    completedPrograms: 78,
    createdAt: new Date('2021-04-15')
  },
  {
    id: '2',
    name: 'Sarah Peterson',
    email: 'sarah@example.com',
    userType: 'trainer',
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
    bio: 'Former Olympic gymnast now helping clients achieve flexibility and core strength goals.',
    specialties: ['Yoga', 'Pilates', 'Flexibility'],
    certifications: ['ACE CPT', 'Yoga Alliance RYT-500'],
    reputation: 87,
    successRate: 91,
    completedPrograms: 56,
    createdAt: new Date('2022-01-08')
  },
  {
    id: '3',
    name: 'Marcus Williams',
    email: 'marcus@example.com',
    userType: 'trainer',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
    bio: 'Sports nutrition specialist and strength coach focused on athletic performance.',
    specialties: ['Sports Nutrition', 'Strength & Conditioning', 'Athletic Performance'],
    certifications: ['CSCS', 'Precision Nutrition Level 2'],
    reputation: 78,
    successRate: 85,
    completedPrograms: 42,
    createdAt: new Date('2022-06-12')
  }
];

export const MOCK_PROGRAMS: Program[] = [
  {
    id: '1',
    trainerId: '1',
    title: 'Lose 5kg in 30 Days Challenge',
    description: 'Structured program combining HIIT and nutrition planning to achieve sustainable weight loss. Weekly check-ins and adjustments based on your progress.',
    goal: {
      type: 'weight_loss',
      metric: 'Weight',
      target: 5,
      unit: 'kg'
    },
    duration: 30,
    slots: {
      limit: 5,
      filled: 3
    },
    minBid: 100,
    currentHighestBid: 250,
    status: 'auction',
    createdAt: new Date('2023-04-01'),
    updatedAt: new Date('2023-04-01'),
    endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    successRate: 92
  },
  {
    id: '2',
    trainerId: '2',
    title: 'Increase Flexibility Challenge',
    description: 'Transform your flexibility with this 45-day program. Perfect for beginners looking to touch their toes or advanced practitioners wanting to master splits.',
    goal: {
      type: 'flexibility',
      metric: 'Forward fold distance',
      target: 10,
      unit: 'cm'
    },
    duration: 45,
    slots: {
      limit: 10,
      filled: 6
    },
    minBid: 80,
    currentHighestBid: 150,
    status: 'auction',
    createdAt: new Date('2023-03-28'),
    updatedAt: new Date('2023-03-28'),
    endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
    successRate: 88
  },
  {
    id: '3',
    trainerId: '3',
    title: 'Add 20kg to Your Squat',
    description: 'Specialized strength program to dramatically increase your squat max. Includes detailed technique analysis and progressive overload protocols.',
    goal: {
      type: 'strength_gain',
      metric: 'Squat 1RM',
      target: 20,
      unit: 'kg'
    },
    duration: 60,
    slots: {
      limit: 1,
      filled: 0
    },
    minBid: 200,
    status: 'auction',
    createdAt: new Date('2023-04-05'),
    updatedAt: new Date('2023-04-05'),
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    successRate: 85
  },
  {
    id: '4',
    trainerId: '1',
    title: 'Marathon Prep - 12 Week Plan',
    description: 'Complete training plan to get you ready for your first marathon. Includes running schedules, strength work, and recovery protocols.',
    goal: {
      type: 'endurance',
      metric: 'Race completion',
      target: 1,
      unit: 'marathon'
    },
    duration: 84,
    slots: {
      limit: 'unlimited',
      filled: 12
    },
    minBid: 120,
    currentHighestBid: 170,
    status: 'in_progress',
    startDate: new Date('2023-03-15'),
    endDate: new Date('2023-06-07'),
    createdAt: new Date('2023-02-20'),
    updatedAt: new Date('2023-03-15'),
    successRate: 90
  }
];
