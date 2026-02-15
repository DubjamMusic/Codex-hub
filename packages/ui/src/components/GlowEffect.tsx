import React from 'react';

export interface GlowEffectProps {
  children: React.ReactNode;
  color?: 'cyan' | 'purple' | 'pink' | 'gold';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export const GlowEffect: React.FC<GlowEffectProps> = ({
  children,
  color = 'cyan',
  intensity = 'medium',
  className = '',
}) => {
  const glowColors = {
    cyan: 'shadow-cyan-500/50',
    purple: 'shadow-purple-500/50',
    pink: 'shadow-pink-500/50',
    gold: 'shadow-yellow-500/50',
  };
  
  const intensities = {
    low: 'shadow-md',
    medium: 'shadow-lg',
    high: 'shadow-2xl',
  };
  
  return (
    <div className={`${intensities[intensity]} ${glowColors[color]} ${className}`}>
      {children}
    </div>
  );
};
