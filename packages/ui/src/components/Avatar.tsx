import React from 'react';

export interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  fallback,
  size = 'md',
  className = '',
}) => {
  const [imgError, setImgError] = React.useState(false);
  
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
  };
  
  const baseStyles = 'rounded-full overflow-hidden bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center font-semibold text-white';
  const classes = `${baseStyles} ${sizes[size]} ${className}`;
  
  if (!src || imgError) {
    const initials = fallback || alt.charAt(0).toUpperCase();
    return <div className={classes}>{initials}</div>;
  }
  
  return (
    <div className={classes}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={() => setImgError(true)}
      />
    </div>
  );
};
