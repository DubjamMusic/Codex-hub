/**
 * Color tokens for the HustleCodeX design system
 */
export const colors = {
  primary: {
    cyan: '#00D4AA',
    purple: '#7B68EE',
    pink: '#EC4899',
    orange: '#FF6B35',
    gold: '#d4af37',
  },
  empathy: '#FF6B9D',
  logic: '#00D4FF',
  concordance: '#A78BFA',
  jellybod: '#F59E0B',
  background: {
    dark: '#0a0a0f',
    card: '#1a1a1f',
    overlay: 'rgba(10, 10, 15, 0.8)',
  },
  text: {
    primary: '#ffffff',
    secondary: '#a0a0a0',
    muted: '#666666',
  },
  border: {
    default: '#2a2a2f',
    hover: '#3a3a3f',
  },
  status: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },
} as const;

export type Colors = typeof colors;
