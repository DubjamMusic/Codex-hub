import React from 'react';

export interface CardProps {
  variant?: 'default' | 'glass';
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ variant = 'default', children, className = '' }) => {
  const baseStyles = 'rounded-xl p-6';
  
  const variants = {
    default: 'bg-gray-900 border border-gray-800',
    glass: 'bg-gray-900/50 backdrop-blur-lg border border-gray-800/50',
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${className}`;
  
  return <div className={classes}>{children}</div>;
};

export interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => {
  return <div className={`mb-4 ${className}`}>{children}</div>;
};

export interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, className = '' }) => {
  return <h3 className={`text-xl font-semibold text-white ${className}`}>{children}</h3>;
};

export interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => {
  return <div className={className}>{children}</div>;
};
