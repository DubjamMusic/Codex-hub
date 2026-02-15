import React from 'react';

export interface XPBarProps {
  currentXP: number;
  requiredXP: number;
  level: number;
  showLabel?: boolean;
  className?: string;
}

export const XPBar: React.FC<XPBarProps> = ({
  currentXP,
  requiredXP,
  level,
  showLabel = true,
  className = '',
}) => {
  const percentage = Math.min(Math.max((currentXP / requiredXP) * 100, 0), 100);
  
  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between mb-2 text-sm">
          <span className="text-gray-400">Level {level}</span>
          <span className="text-cyan-400 font-medium">
            {currentXP.toLocaleString()} / {requiredXP.toLocaleString()} XP
          </span>
        </div>
      )}
      <div className="relative w-full h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
        <div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      </div>
    </div>
  );
};
