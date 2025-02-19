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
          className="fixed left-1/2 top-[calc(100%-12px)] z-20 mx-auto grid w-max -translate-x-1/2 -translate-y-full transform place-items-center"
        >
          <ChevronDown className="size-10 animate-bounce stroke-[1.5px]" />
          <span className="-mt-2 text-sm opacity-80">Scroll down</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
