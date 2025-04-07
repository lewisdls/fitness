"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export interface Class {
  id: number;
  title: string;
  duration: number;
  image: string;
}

export const Class_Card = ({ c, index }: { c: Class; index: number }) => {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    setIsWideScreen(mediaQuery.matches);

    const handleResize = () => setIsWideScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 0,
        translateX: isWideScreen ? "-100%" : index % 2 == 0 ? "100%" : "-100%",
      }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{
        type: "tween",
        duration: 1,
        ease: [0, 0, 0, 1],
        delay: index * 0.1,
      }}
      className="relative z-20"
    >
      <div className={`w-[300px] 3xl:w-[400px] h-[400px]`}>
        {c.image && (
          <img
            src={c.image}
            alt=""
            className="w-full h-full object-cover z-10"
          />
        )}
        <div className="absolute top-10 left-10 w-[300px] 3xl:w-[400px] h-[400px] bg-gray-100 flex -z-10">
          <p className="self-end px-3 py-2 text-neutral-500 font-semibold">
            {c.title}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
