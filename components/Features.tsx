import React from "react";
import { Item } from "./item";
import { Dumbbell } from "lucide-react";

export const Features = () => {
  return (
    <div className="bg-neutral-50 py-20 md:py-32">
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 px-4">
        <div className="hidden md:block h-[600px]">
          <img src="/trainers.png" alt="" className="w-full h-full" />
        </div>
        <div className="flex flex-col gap-6 items-center md:items-start mb-8 md:m-0 md:w-1/3 3xl:w-1/4">
          <h3 className="text-yellow-500 text-lg font-semibold">
            SCIENCE 2005
          </h3>
          <h2 className="text-center md:text-left text-4xl text-gray-900 font-bold leading-snug">
            BEST <span className="text-yellow-500">EQUIPMENTS</span>{" "}
            <span className="text-yellow-500">& FITNESS</span> TRAINERS
          </h2>
          <p className="text-center md:text-left text-gray-900 leading-loose">
            Gym is very important to maintain our health luptas sit fugit, lorem
            ipsum, dolor sit amet. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Atque magnam optio quo.
          </p>
          <div className="font-medium text-lg grid grid-cols-2 w-fit gap-4">
            <Item content="Builds Aerobic Power" />
            <Item content="Strong Body Structure" />
            <Item content="Boots Your Memory" />
            <Item content="Bring About Restful Sleep" />
          </div>
          <button className="cursor-pointer bg-yellow-500 text-white py-3 px-6 rounded-full font-semibold">
            LET'S START
          </button>
        </div>
      </div>
      <div className="hidden md:flex flex-col md:flex-row justify-center gap-2 w-full">
        <div className="grid grid-cols-2 w-3/5 3xl:w-3/6 bg-gradient-to-r from-[#121212] to-zinc-800 text-white">
          <div className="flex gap-6 items-center justify-center w-fit px-14">
            <Dumbbell className="w-6 h-6" />
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">Best Training</h2>
              <p className="leading-loose mt-2">
                Best Training dolor sit consecteur adipiscing elit, send do
                eiusmod temp incididunt ut labore et dolore
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-center justify-center w-fit px-14">
            <Dumbbell className="w-6 h-6" />
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">Best Training</h2>
              <p className="leading-loose mt-2">
                Best Training dolor sit consecteur adipiscing elit, send do
                eiusmod temp incididunt ut labore et dolore
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-center justify-center w-fit px-14">
            <Dumbbell className="w-6 h-6" />
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">Best Training</h2>
              <p className="leading-loose mt-2">
                Best Training dolor sit consecteur adipiscing elit, send do
                eiusmod temp incididunt ut labore et dolore
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-center justify-center w-fit px-14">
            <Dumbbell className="w-6 h-6" />
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">Best Training</h2>
              <p className="leading-loose mt-2">
                Best Training dolor sit consecteur adipiscing elit, send do
                eiusmod temp incididunt ut labore et dolore
              </p>
            </div>
          </div>
        </div>
        <div className="h-[400px] relative">
            <img src="/04.jpeg" alt="" className="w-full h-full object-cover" />
            <p className="leading-12 absolute bottom-0 right-0 p-4 text-white text-7xl font-semibold">35% <span className="tracking-tighter text-4xl">DISCOUNT</span></p>
        </div>
      </div>
    </div>
  );
};
