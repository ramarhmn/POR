"use client"

import { useState, useEffect } from "react"
import { motion } from "motion/react"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    // Simulate loading with increasing percentage
    const interval = setInterval(() => {
      setPercentage((prev) => {
        // Slow down as we approach 100%
        const increment = prev < 50 ? 2 : prev < 80 ? 1 : 0.5
        const newValue = Math.min(prev + increment, 100)

        // When we reach 100%, trigger the onLoadingComplete callback
        if (newValue === 100) {
          setTimeout(() => {
            onLoadingComplete()
          }, 500) // Wait a bit before completing
          clearInterval(interval)
        }

        return newValue
      })
    }, 30)

    // Clean up interval on unmount
    return () => clearInterval(interval)
  }, [onLoadingComplete])

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: percentage === 100 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-md px-4">
        <div className="text-white text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-2"></h1>
          <p className="text-xl md:text-2xl font-light"></p>
        </div>

        <div className="w-full bg-gray-800 h-1 mb-4 relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-white"
            initial={{ width: "0%" }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <div className="flex justify-between text-white text-sm">
          <span>LOADING</span>
          <span>{Math.round(percentage)}%</span>
        </div>
      </div>
    </motion.div>
  )
}
