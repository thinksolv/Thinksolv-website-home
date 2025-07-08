import { motion } from "framer-motion"

export default function AnimatedGradient() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="absolute inset-0 -z-10"
      style={{
        background: "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
      }}
    />
  )
}