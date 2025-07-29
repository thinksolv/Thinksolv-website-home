'use client';

import React from 'react';

interface DotBadgeProps {
  label: string;
  textSize?: string; // Tailwind text size (e.g., 'text-base', 'text-lg')
  padding?: string;  // Tailwind padding (e.g., 'px-4 py-2')
  gradient?: string;
  className?: string;
}

const DotBadge: React.FC<DotBadgeProps> = ({
  label,
  textSize = 'text-sm',
  padding = 'px-3 py-1',
  gradient = 'bg-gradient-to-r from-red-400 to-red-300',
  className = '',
}) => {
  return (
    <div
      className={`inline-flex items-center ${padding} border rounded-full bg-white text-black dark:bg-black dark:text-white font-medium gap-2 ${textSize} ${className}`}
    >
      <span
        className={`w-[10px] h-[10px] rounded-full shrink-0 ${gradient}`}
      />
      {label}
    </div>
  );
};

export default DotBadge;
