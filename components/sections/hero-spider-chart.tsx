"use client"

import { motion } from "framer-motion"
import { Target, Code, Server, Filter, Download } from "lucide-react"

const processSteps = [
  { label: "Analysis", icon: <Target className="h-4 w-4" />, color: "#3B82F6" },
  { label: "Development", icon: <Code className="h-4 w-4" />, color: "#10B981" },
  { label: "Infrastructure", icon: <Server className="h-4 w-4" />, color: "#F59E0B" },
  { label: "Processing", icon: <Filter className="h-4 w-4" />, color: "#EF4444" },
  { label: "Delivery", icon: <Download className="h-4 w-4" />, color: "#8B5CF6" },
]

export default function HeroSpiderChart() {
  const centerX = 200
  const centerY = 200
  const radius = 120
  const levels = 4

  // Calculate points for pentagon
  const getGridPoint = (index: number, level: number) => {
    const angle = (index * 2 * Math.PI) / processSteps.length - Math.PI / 2
    const distance = (level / levels) * radius
    return {
      x: centerX + Math.cos(angle) * distance,
      y: centerY + Math.sin(angle) * distance,
    }
  }

  const getLabelPoint = (index: number) => {
    const angle = (index * 2 * Math.PI) / processSteps.length - Math.PI / 2
    const distance = radius + 40
    return {
      x: centerX + Math.cos(angle) * distance,
      y: centerY + Math.sin(angle) * distance,
    }
  }

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <svg width="400" height="400" className="overflow-visible">
        {/* Background circle */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r={radius + 20}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-muted-foreground/10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Grid lines (concentric pentagons) */}
        {Array.from({ length: levels }, (_, level) => (
          <motion.polygon
            key={level}
            points={processSteps
              .map((_, index) => {
                const point = getGridPoint(index, level + 1)
                return `${point.x},${point.y}`
              })
              .join(" ")}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-muted-foreground/20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + level * 0.1, duration: 0.6 }}
          />
        ))}

        {/* Radial lines */}
        {processSteps.map((_, index) => {
          const endPoint = getGridPoint(index, levels)
          return (
            <motion.line
              key={index}
              x1={centerX}
              y1={centerY}
              x2={endPoint.x}
              y2={endPoint.y}
              stroke="currentColor"
              strokeWidth="1"
              className="text-muted-foreground/30"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
            />
          )
        })}

        {/* Animated connection lines between process steps */}
        {processSteps.map((_, index) => {
          const currentPoint = getGridPoint(index, 3)
          const nextPoint = getGridPoint((index + 1) % processSteps.length, 3)
          return (
            <motion.line
              key={`connection-${index}`}
              x1={currentPoint.x}
              y1={currentPoint.y}
              x2={nextPoint.x}
              y2={nextPoint.y}
              stroke="url(#gradient)"
              strokeWidth="2"
              className="opacity-60"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.5 + index * 0.2, duration: 0.8 }}
            />
          )
        })}

        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="25%" stopColor="#10B981" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="75%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>

        {/* Process step nodes */}
        {processSteps.map((step, index) => {
          const point = getGridPoint(index, 3)
          return (
            <motion.g key={index}>
              {/* Node background */}
              <motion.circle
                cx={point.x}
                cy={point.y}
                r="20"
                fill="currentColor"
                className="text-background"
                stroke={step.color}
                strokeWidth="3"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2 + index * 0.15, duration: 0.5 }}
              />
              {/* Node icon */}
              <motion.foreignObject
                x={point.x - 8}
                y={point.y - 8}
                width="16"
                height="16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 + index * 0.15, duration: 0.3 }}
              >
                <div style={{ color: step.color }}>{step.icon}</div>
              </motion.foreignObject>
              {/* Pulsing effect */}
              <motion.circle
                cx={point.x}
                cy={point.y}
                r="20"
                fill="none"
                stroke={step.color}
                strokeWidth="2"
                className="opacity-40"
                initial={{ scale: 1, opacity: 0 }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0, 0.4],
                }}
                transition={{
                  delay: 2 + index * 0.3,
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 1,
                }}
              />
            </motion.g>
          )
        })}

        {/* Labels */}
        {processSteps.map((step, index) => {
          const labelPoint = getLabelPoint(index)
          return (
            <motion.g key={`label-${index}`}>
              <motion.text
                x={labelPoint.x}
                y={labelPoint.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-sm font-semibold fill-current"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 + index * 0.1 }}
              >
                {step.label}
              </motion.text>
            </motion.g>
          )
        })}

        {/* Center point */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r="8"
          fill="currentColor"
          className="text-blue-500"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        />

        {/* Center label */}
        <motion.text
          x={centerX}
          y={centerY + 35}
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-xs font-medium fill-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          Web Scraping
        </motion.text>
        <motion.text
          x={centerX}
          y={centerY + 48}
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-xs font-medium fill-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.7 }}
        >
          Process
        </motion.text>
      </svg>

      {/* Floating process indicators */}
      {/* <motion.div
        className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg p-3 border shadow-lg"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3 }}
      >
        <div className="text-xs font-medium text-center mb-2">Construction Process</div>
        <div className="flex gap-1">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: step.color }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 3.2 + index * 0.1 }}
            />
          ))}
        </div>
      </motion.div> */}
    </div>
  )
}
