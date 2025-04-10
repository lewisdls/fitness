"use client";

import { Facebook, Instagram, Phone, Youtube } from "lucide-react";
import { motion } from "motion/react";

export interface Instructor {
  id: number;
  name: string;
  role: string;
  image: string;
}

export const Instructor_Card = ({ instructor, index }: { instructor: Instructor, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'tween',
        duration: 1,
        ease: [0, 0, 0, 1],
        delay: index * 0.1
      }}
      className="bg-neutral-100 rounded-b-lg w-full"
    >
      <div className="md:w-[300px] h-[300px]">
        <img
          src={instructor.image}
          className="w-full h-full object-cover object-top md:object-center"
          alt=""
        />
      </div>
      <div className="py-4 rounded-b-lg shadow-lg shadow-gray-200">
        <div className="space-y-1 pb-4">
          <h1 className="text-xl font-bold">{instructor.name}</h1>
          <p>{instructor.role}</p>
        </div>
        <div className="flex items-center justify-center w-full border-t border-neutral-300 pt-4 gap-4">
          <div className="bg-gray-300 p-2 rounded-xl">
            <Facebook className="w-4 h-4" />
          </div>
          <div className="bg-gray-300 p-2 rounded-xl">
            <Phone className="w-4 h-4" />
          </div>
          <div className="bg-gray-300 p-2 rounded-xl">
            <Instagram className="w-4 h-4" />
          </div>
          <div className="bg-gray-300 p-2 rounded-xl">
            <Youtube className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};