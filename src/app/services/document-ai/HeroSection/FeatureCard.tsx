import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  className 
}: FeatureCardProps) {
  return (
    <div className={cn(
      "relative overflow-hidden group",
      "bg-gradient-to-br from-white/90 to-white/50",
      "dark:from-black/90 dark:to-black/50",
      "backdrop-blur-lg rounded-3xl",
      "border border-gray-200 dark:border-gray-800",
      "p-8 transition-all duration-300",
      "hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]",
      "dark:hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.1)]",
      "hover:translate-y-[-2px]",
      "border-black",
      className
    )}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] " />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon container */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-blue-500/20 dark:bg-blue-500/30 blur-2xl rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
        <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-black text-white dark:bg-white dark:text-black transform group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6" strokeWidth={1.5} />
        </div>
      </div>

      {/* Content */}
      <div className="relative space-y-3">
        <h3 className="text-xl font-semibold text-black dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Hover indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </div>
  );
}