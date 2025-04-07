import React from "react";
import { BMI } from "./bmi";

export const Testimonials = () => {
  return (
    <div className="flex items-center justify-center bg-neutral-50 gap-20 pt-20 pb-30">
      <div className="space-y-16 w-1/5">
        <div className="space-y-4">
          <h3 className="font-semibold text-yellow-500">TESTIMONIALS</h3>
          <h1 className="text-4xl font-bold">
            THAT'S <span className="text-yellow-500">WHAT OUR CLIENT</span> SAYS
          </h1>
        </div>
        <div className="">
          <p className="italic leading-loose mb-4">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit soluta
            autem culpa voluptates ad mollitia, sed rem esse. Vitae doloremque,
            sit."
          </p>
          <h2 className="font-semibold text-2xl">Stephen Fleming</h2>
          <p className="text-gray-600 mt-1">Maryland, USA</p>
        </div>
      </div>
      <BMI />
    </div>
  );
};
