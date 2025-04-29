"use client"

import { motion, type MotionValue, useScroll, useTransform } from "motion/react"
import { type ComponentPropsWithoutRef, type FC, type ReactNode, useRef } from "react"

import { cn } from "@/lib/utils"

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string")
  }

  const words = children.split(" ")

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[50%] max-w-full items-center justify-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <span
          ref={targetRef}
          className={
            "flex flex-wrap md:justify-center md:text-center p-5 text-2xl font-semibold text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length
            const end = start + 1 / words.length
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            )
          })}
        </span>
      </div>
    </div>
  )
}

interface WordProps {
  children: ReactNode
  progress: MotionValue<number>
  range: [number, number]
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])
  const isProblems = children === "Developer"
  const isReality = children === "frameworks"
  const isWebDev = children === "Front" || children === "End"

  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-1.5 flex items-center">
      <span className={cn("absolute opacity-30", isWebDev && "font-serif italic")}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={cn("text-white dark:text-white", isWebDev && "font-serif italic")}
      >
        {children}
      </motion.span>
      {isProblems && (
        <motion.img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/giphy-HsL7mtbYoq6GovwDDlLsM8vgee9rci.gif"
          alt="Animated GIF"
          style={{ opacity: opacity }}
          className="w-8 h-8 ml-1 rounded-full object-cover md:w-10 md:h-10 lg:w-12 lg:h-12"
        />
      )}
      {isReality && (
        <motion.img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/giphy%20%282%29-DCOQVzB3fOCVDTzXfLwWjeMBMMIdhi.gif"
          alt="Computer character GIF"
          style={{ opacity: opacity }}
          className="w-8 h-10 ml-1 object-cover md:w-10 md:h-12 lg:w-14 lg:h-14"
        />
      )}
    </span>
  )
}

