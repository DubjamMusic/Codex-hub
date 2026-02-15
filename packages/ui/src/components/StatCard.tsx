import React from 'react';
import { Card } from './Card';

export interface StatCardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  icon,
  trend,
  trendValue,
  className = '',
}) => {
  const trendConfig = {
    up: { color: 'text-green-400', symbol: '↑' },
    down: { color: 'text-red-400', symbol: '↓' },
    neutral: { color: 'text-gray-400', symbol: '→' },
  };
  
  const trendStyle = trend ? trendConfig[trend] : null;
  
  return (
    <Card variant="glass" className={className}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-400 mb-1">{label}</p>
          <p className="text-2xl font-bold text-white">{value}</p>
          {trendStyle && trendValue && (
            <p className={`text-sm mt-2 ${trendStyle.color}`}>
              {trendStyle.symbol} {trendValue}
            </p>
          )}
        </div>
        {icon && (
          <div className="text-cyan-400 opacity-80">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
};
