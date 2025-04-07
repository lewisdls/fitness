"use client";

import React, { useState } from "react";

export const BMI = () => {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [answer, setAnswer] = useState<number>(0);

  const bmi = weight / (height * height) || 0;

  return (
    <div className="text-white bg-[url('/05.jpeg')] h-[600px] bg-cover flex flex-col text-center justify-center gap-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold">
          BMI <span className="text-yellow-500">CALCULATOR</span>
        </h1>
        <p className="w-2/3 leading-loose">
          BMI is a reliable guide to estimate the healthy weight range based on
          height, wight and age.
        </p>
      </div>
      <div className="flex flex-col gap-12 px-20">
        <div className="grid grid-cols-2 gap-12 w-full">
          <input
            className="border-0 border-b-[1px] placeholder:text-gray-300 border-gray-500 pb-2 outline-0 text-white"
            placeholder="Weight / kg"
            type="number"
            onChange={(e) => setWeight(Number(e.target.value))}
          />
          <input
            className="border-0 border-b-[1px] placeholder:text-gray-300 border-gray-500 pb-2 outline-0 text-white"
            placeholder="Height / cm"
            type="number"
            onChange={(e) => setHeight(Number(e.target.value) / 100)}
          />
        </div>
      </div>
      <div className="flex items-center justify-between w-full px-20">
        <button
          onClick={() => setAnswer(Number(bmi.toFixed(1)))}
          className="bg-yellow-500 font-semibold text-lg uppercase rounded-full cursor-pointer px-12 py-4"
        >
          Calculate
        </button>
        <span className="p-8 font-bold text-4xl">
          {answer == 0 || answer == Infinity
            ? "0.0"
            : answer < 0
            ? "Invalid data"
            : answer}
        </span>
      </div>
    </div>
  );
};
