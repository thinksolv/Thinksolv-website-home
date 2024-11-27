"use client";
import {
  CSSProperties,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

interface NeonColorsProps {
  firstColor: string;
  secondColor: string;
}

interface NeonGradientCardProps {
  as?: ReactElement;
  className?: string;
  children?: ReactNode;
  size?: number; // New property to define size for circle
  borderSize?: number;
  neonColors?: NeonColorsProps;
  [key: string]: any;
}

const NeonGradientCard: React.FC<NeonGradientCardProps> = ({
  className,
  children,
  size = 200, // Default size for the circular card
  borderSize = 2,
  neonColors = {
    firstColor: "#3b82f6", // Electric Blue
    secondColor: "#3b82f6", // Green
  },
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      style={
        {
          "--size": `${size}px`,
          "--border-size": `${borderSize}px`,
          "--neon-first-color": neonColors.firstColor,
          "--neon-second-color": neonColors.secondColor,
          "--pseudo-element-background-image": `linear-gradient(0deg, ${neonColors.firstColor}, ${neonColors.secondColor})`,
          "--pseudo-element-size": `${size + borderSize * 2}px`,
          "--after-blur": `${size / 3}px`,
        } as CSSProperties
      }
      className={cn(
        "relative z-10 w-[var(--size)] h-[var(--size)] rounded-full",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "relative w-full h-full rounded-full bg-gray-100 p-6",
          "before:absolute before:-left-[var(--border-size)] before:-top-[var(--border-size)] before:-z-10 before:block",
          "before:h-[var(--pseudo-element-size)] before:w-[var(--pseudo-element-size)] before:rounded-full before:content-['']",
          "before:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] before:bg-[length:100%_200%]",
          "before:animate-background-position-spin",
          "after:absolute after:-left-[var(--border-size)] after:-top-[var(--border-size)] after:-z-10 after:block",
          "after:h-[var(--pseudo-element-size)] after:w-[var(--pseudo-element-size)] after:rounded-full after:blur-[var(--after-blur)] after:content-['']",
          "after:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] after:bg-[length:100%_200%] after:opacity-80",
          "after:animate-background-position-spin",
          "dark:bg-neutral-900"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export { NeonGradientCard };
