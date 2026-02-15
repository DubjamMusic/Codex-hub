import React from 'react';

export interface ProgressProps {
  value: number;
  max?: number;
  variant?: 'default' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  variant = 'default',
  size = 'md',
  showLabel = false,
  className = '',
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  const sizes = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };
  
  const variants = {
    default: 'bg-cyan-500',
    gradient: 'bg-gradient-to-r from-cyan-500 to-purple-600',
  };
  
  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between mb-1 text-sm text-gray-400">
          <span>{value}</span>
          <span>{max}</span>
        </div>
      )}
      <div className={`w-full bg-gray-800 rounded-full overflow-hidden ${sizes[size]}`}>
        <div
          className={`${sizes[size]} ${variants[variant]} transition-all duration-300 rounded-full`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
