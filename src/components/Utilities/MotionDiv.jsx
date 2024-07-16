"use client"
import { motion } from "framer-motion"

export const MotionDiv = motion.div
export const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}
export const transition = (key) => {
  const output = {
    delay: key * 0.25,
    ease: "easeInOut",
    duration: 0.5,
  }
  return output
}
