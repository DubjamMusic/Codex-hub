/**
 * Shared TypeScript types for the HustleCodeX ecosystem
 */

export type User = {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  xp: number;
  level: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export type Quest = {
  id: string;
  title: string;
  description: string;
  xpReward: number;
  status: 'locked' | 'active' | 'completed';
  category?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  completedAt?: Date;
};

export type RecoveryMetrics = {
  daysSober: number;
  xp: number;
  questsCompleted: number;
  stabilityIndex: number;
  recoveryStatus: 'stable' | 'at-risk' | 'critical' | 'thriving';
  lastCheckIn?: Date;
};

export type Achievement = {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
};

export type Skill = {
  id: string;
  name: string;
  category: 'empathy' | 'logic' | 'concordance' | 'jellybod';
  level: number;
  xp: number;
  xpRequired: number;
};

export type Badge = {
  id: string;
  name: string;
  variant: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
};
