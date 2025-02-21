"use client";

import type { HTMLMotionProps } from "framer-motion";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Slide({
  children,
  ...rest
}: HTMLMotionProps<"div"> & { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (inView) {
      setShown(true);
    }
  }, [inView]);

  return (
    <motion.div
      initial="hidden"
      animate={shown ? "shown" : "hidden"}
      variants={{
        hidden: { opacity: 0, x: -100 },
        shown: { opacity: 1, x: 0 },
      }}
      ref={ref}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
