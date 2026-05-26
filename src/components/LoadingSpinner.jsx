import React from 'react';

const LoadingSpinner = ({ size = 'medium', color = 'purple' }) => {
  const sizeClasses = {
    small: 'w-5 h-5 border-2',
    medium: 'w-8 h-8 border-3',
    large: 'w-12 h-12 border-4',
  };

  const colorClasses = {
    purple: 'border-popx-purple/20 border-t-popx-purple',
    white: 'border-white/20 border-t-white',
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`animate-spin rounded-full ${sizeClasses[size]} ${colorClasses[color]} border-solid`}
        style={{ borderTopColor: 'currentColor' }}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
