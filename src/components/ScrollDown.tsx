"use client";

import { AnimatePresence, motion, useScroll } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

export function ScrollDown({ destination }: { destination: string }) {
  const [show, setShow] = useState(true);
  const { scrollY } = useScroll();
  scrollY.on("change", (scroll) => setShow(scroll < 140));

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={destination}
          exit={{ opacity: 0 }}
          className="mx-auto grid place-items-center w-max fixed top-[calc(100%-12px)] left-1/2 transform -translate-y-full -translate-x-1/2 z-20"
        >
          <ChevronDown className="size-10 animate-bounce stroke-[1.5px]" />
          <span className="text-sm opacity-80 -mt-2">Scroll down</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
