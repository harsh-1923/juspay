"use client";

import { useState, useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface NumberTickerProps {
  endValue: number;
  duration?: number;
}

export function NumberTicker({ endValue, duration = 2 }: NumberTickerProps) {
  const [isClient, setIsClient] = useState(false);
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0.1 });
  const display = useTransform(spring, (current) =>
    Math.floor(current).toLocaleString()
  );

  useEffect(() => {
    setIsClient(true);
    spring.set(endValue);
  }, [spring, endValue]);

  if (!isClient) {
    return (
      <div aria-live="polite" className="text-4xl font-bold tabular-nums">
        0
      </div>
    );
  }

  return (
    <div className="text-inherit">
      <motion.div className="text-inherit" aria-live="polite">
        {display}
      </motion.div>
    </div>
  );
}
