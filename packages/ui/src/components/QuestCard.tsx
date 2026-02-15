import React from 'react';
import { Card } from './Card';

export interface QuestCardProps {
  title: string;
  description: string;
  xpReward: number;
  status: 'locked' | 'active' | 'completed';
  difficulty?: 'easy' | 'medium' | 'hard';
  onClick?: () => void;
  className?: string;
}

export const QuestCard: React.FC<QuestCardProps> = ({
  title,
  description,
  xpReward,
  status,
  difficulty = 'medium',
  onClick,
  className = '',
}) => {
  const statusConfig = {
    locked: { bg: 'bg-gray-800/50', text: 'text-gray-500', label: '🔒 Locked' },
    active: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', label: '⚡ Active' },
    completed: { bg: 'bg-green-500/10', text: 'text-green-400', label: '✓ Completed' },
  };
  
  const difficultyConfig = {
    easy: { color: 'text-green-400', label: 'Easy' },
    medium: { color: 'text-yellow-400', label: 'Medium' },
    hard: { color: 'text-red-400', label: 'Hard' },
  };
  
  const config = statusConfig[status];
  const diffConfig = difficultyConfig[difficulty];
  
  return (
    <Card
      variant="glass"
      className={`${config.bg} cursor-pointer hover:scale-105 transition-transform duration-200 ${className}`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-3">
        <span className={`text-sm font-medium ${config.text}`}>{config.label}</span>
        <span className={`text-xs ${diffConfig.color}`}>{diffConfig.label}</span>
      </div>
      
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-4">{description}</p>
      
      <div className="flex items-center justify-between pt-3 border-t border-gray-800">
        <span className="text-sm text-gray-500">Reward</span>
        <span className="text-lg font-bold text-cyan-400">+{xpReward.toLocaleString()} XP</span>
      </div>
    </Card>
  );
};
