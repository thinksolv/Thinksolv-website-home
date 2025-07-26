// components/ui/shiny-button.tsx
'use client';

import { ReactNode } from 'react';

interface ShinyButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function ShinyButton({
  children,
  onClick,
  className = '',
  type = 'button',
}: ShinyButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative group inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold bg-[#007bbf] text-white transition-all duration-500 hover:scale-105 transform-gpu ${className}`}
    >
      {/* Main content */}
      <span className="relative z-10 flex items-center gap-3 transition-all duration-300">
        {children}
      </span>

      {/* Shimmer effect */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      </div>
      
    </button>
  );
}
