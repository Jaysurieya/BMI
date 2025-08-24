"use client";
import React, { useState, useRef } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";

// Icon components based on your images
const ScaleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 11V7a4 4 0 0 0-8 0v4M5 11h14l-1 7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2l-1-7Z"/>
    <path d="M9 11V9"/>
    <path d="M15 11V9"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
  </svg>
);

const PillIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/>
    <path d="m8.5 8.5 7 7"/>
  </svg>
);

const TimerIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="10" x2="14" y1="2" y2="2"/>
    <line x1="12" x2="15" y1="14" y2="11"/>
    <circle cx="12" cy="14" r="8"/>
  </svg>
);

const ActivityIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m22 12-4-4-6 6-4-4-4 4"/>
  </svg>
);

const RecycleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 19H6.5a2.5 2.5 0 0 1 0-5H14"/>
    <path d="m2 5 3 3m0 0 3-3m-3 3v12"/>
    <path d="m20 9-3 3 3 3"/>
    <path d="M20 4v7h-2"/>
    <path d="M14 12h2a2 2 0 0 1 2 2v2"/>
  </svg>
);

export const AnimatedTooltip = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const animationFrameRef = useRef(null);
  
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  const items = [
    {
      id: 1,
      name: "Justice",
      designation: "Legal Balance",
      icon: ScaleIcon,
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-700"
    },
    {
      id: 2,
      name: "Time",
      designation: "Schedule Manager",
      icon: ClockIcon,
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-700"
    },
    {
      id: 3,
      name: "Medicine",
      designation: "Health Care",
      icon: PillIcon,
      bgColor: "bg-gradient-to-br from-purple-800 to-purple-900"
    },
    {
      id: 4,
      name: "Timer",
      designation: "Countdown",
      icon: TimerIcon,
      bgColor: "bg-gradient-to-br from-purple-900 to-black"
    },
    {
      id: 5,
      name: "Activity",
      designation: "Performance",
      icon: ActivityIcon,
      bgColor: "bg-gradient-to-br from-purple-900 to-black"
    },
    {
      id: 6,
      name: "Recycle",
      designation: "Sustainability",
      icon: RecycleIcon,
      bgColor: "bg-gradient-to-br from-purple-900 to-black"
    }
  ];

  const handleMouseMove = (event) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(() => {
      const halfWidth = event.target.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <div className="grid grid-cols-3 gap-4">
        {items.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              className="group relative"
              key={item.name}
              onMouseEnter={() => setHoveredIndex(item.id)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.6 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 260,
                        damping: 10,
                      },
                    }}
                    exit={{ opacity: 0, y: 20, scale: 0.6 }}
                    style={{
                      translateX: translateX,
                      rotate: rotate,
                      whiteSpace: "nowrap",
                    }}
                    className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
                  >
                    <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                    <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                    <div className="relative z-30 text-base font-bold text-white">
                      {item.name}
                    </div>
                    <div className="text-xs text-white">{item.designation}</div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div
                onMouseMove={handleMouseMove}
                className={`relative h-12 w-12 rounded-full ${item.bgColor} flex items-center justify-center text-white transition duration-500 group-hover:z-30 group-hover:scale-105 cursor-pointer shadow-lg`}
              >
                <IconComponent />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedTooltip;