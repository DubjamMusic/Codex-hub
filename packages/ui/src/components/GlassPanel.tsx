import React from 'react';

export interface GlassPanelProps {
  children: React.ReactNode;
  blur?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const GlassPanel: React.FC<GlassPanelProps> = ({
  children,
  blur = 'md',
  className = '',
}) => {
  const blurLevels = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
  };
  
  return (
    <div className={`bg-white/5 ${blurLevels[blur]} border border-white/10 rounded-xl p-6 ${className}`}>
      {children}
    </div>
  );
};
