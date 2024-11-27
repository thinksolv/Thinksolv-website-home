import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-black dark:border-white shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1 dark:bg-black">
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black text-white group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200 dark:bg-white">
        <Icon className="w-6 h-6 dark:text-black" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-white">{description}</p>
    </div>
  );
}