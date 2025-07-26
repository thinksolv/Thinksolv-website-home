"use client";

interface SectionGradientProps {
  className?: string;
  fromColor?: string;
  viaColor?: string;
  toColor?: string;
  size?: string;
}

export default function SectionGradient({
  className = "",
  fromColor = "from-[729b79]",
  viaColor = "via-[#729b79]",
  toColor = "to-transparent",
  size = "w-60 h-60",
}: SectionGradientProps) {
  return (
    <div
      className={`absolute -top-12 left-1/2 -translate-x-1/2 ${size} bg-gradient-to-br ${fromColor} ${viaColor} ${toColor} opacity-30 blur-2xl rounded-full pointer-events-none z-0 ${className}`}
    />
  );
}
