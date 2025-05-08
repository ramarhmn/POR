"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import Image from "next/image";

import { cn } from "@/lib/utils";

interface VelocityScrollProps {
  text: string;
  default_velocity?: number;
  className?: string;
}

interface ParallaxProps {
  baseVelocity: number;
  className?: string;
}

export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function VelocityScroll({
  text,
  default_velocity = 1,
  className,
}: VelocityScrollProps) {
  function ParallaxText({
    baseVelocity = 200,
    className,
  }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 80,
      stiffness: 250,
    });

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false,
    });

    const [repetitions, setRepetitions] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      const calculateRepetitions = () => {
        if (containerRef.current && textRef.current) {
          const containerWidth = containerRef.current.offsetWidth;
          const textWidth = textRef.current.offsetWidth;
          const newRepetitions = Math.ceil(containerWidth / textWidth) + 2;
          setRepetitions(newRepetitions);
        }
      };

      calculateRepetitions();

      window.addEventListener("resize", calculateRepetitions);
      return () => window.removeEventListener("resize", calculateRepetitions);
    }, []);

    const x = useTransform(baseX, (v) => `${wrap(-100, 0, v)}%`);

    const directionFactor = React.useRef<number>(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();

      baseX.set(baseX.get() + moveBy);
    });

    return (
      <div
        className="w-full overflow-hidden whitespace-nowrap bg-yellow-300"
        ref={containerRef}
      >
        <motion.div className={cn("inline-block", className)} style={{ x }}>
          {Array.from({ length: repetitions }).map((_, i) => (
            <span key={i} ref={i === 0 ? textRef : null}>
              <Image
                src="/logo-ogs.png"
                alt="OGS"
                width={100}
                height={100}
                className="inline-block ml-1 mr-1 w-16 md:w-40"
              />
              <Image
                src="/titik.png"
                alt="OGS"
                width={100}
                height={100}
                className="inline-block w-2"
              />
              <Image
                src="/logo-popu.png"
                alt="POPU"
                width={100}
                height={100}
                className="inline-block ml-2 mr-2 w-14 md:w-40 "
              />
              <Image
                src="/titik.png"
                alt="OGS"
                width={100}
                height={100}
                className="inline-block w-2"
              />
              <Image
                src="/logo-condfe.png"
                alt="cretivox"
                width={100}
                height={100}
                className="inline-block ml-2 mr-2 w-20 md:w-40"
              />
              <Image
                src="/titik.png"
                alt="titik"
                width={100}
                height={100}
                className="inline-block w-2"
              />
              <Image
                src="/logo-cretivox.png"
                alt="cretivox"
                width={100}
                height={100}
                className="inline-block w-28 md:w-56"
              />
              <Image
                src="/titik.png"
                alt="OGS"
                width={100}
                height={100}
                className="inline-block w-2"
              />
              <Image
                src="/logo-daycare.png"
                alt="cretivox"
                width={100}
                height={100}
                className="inline-block w-14 md:w-28"
              />
              <Image
                src="/titik.png"
                alt="titik"
                width={100}
                height={100}
                className="inline-block w-2"
              />
              
            </span>
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <section className="relative w-full">
      <ParallaxText baseVelocity={default_velocity} className={className} />
      <ParallaxText baseVelocity={-default_velocity} className={className} />
    </section>
  );
}
