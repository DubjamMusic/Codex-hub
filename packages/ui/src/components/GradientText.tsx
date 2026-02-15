import React from 'react';

export interface GradientTextProps {
  children: React.ReactNode;
  gradient?: 'cyan-purple' | 'purple-pink' | 'cyan-pink' | 'rainbow';
  className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  gradient = 'cyan-purple',
  className = '',
}) => {
  const gradients = {
    'cyan-purple': 'from-cyan-400 to-purple-600',
    'purple-pink': 'from-purple-400 to-pink-600',
    'cyan-pink': 'from-cyan-400 to-pink-600',
    'rainbow': 'from-cyan-400 via-purple-500 to-pink-600',
  };
  
  return (
    <span className={`bg-gradient-to-r ${gradients[gradient]} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};
