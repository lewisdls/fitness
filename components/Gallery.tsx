import React from "react";

export const Gallery = () => {
  return (
    <div className="py-10 space-y-16 bg-neutral-50">
      <div className="flex justify-around">
        <div className="space-y-6">
          <h3 className="uppercase text-yellow-500 font-semibold text-lg">Fitness Gallery</h3>
          <h2 className="text-4xl font-bold w-[55%]">
            BELIEVE IN <span className="text-yellow-500">YOURSELF, BE FIT</span> & HEALTHIER
          </h2>
        </div>
        <button className="self-end border-2 border-yellow-500 font-semibold rounded-full py-2 px-6 uppercase">View All</button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <img className="md:h-[300px] 3xl:h-auto" src="/02.jpeg" alt="" />
        <img className="md:h-[300px] 3xl:h-auto" src="/02.jpeg" alt="" />
        <img className="md:h-[300px] 3xl:h-auto" src="/02.jpeg" alt="" />
        <img className="md:h-[300px] 3xl:h-auto" src="/02.jpeg" alt="" />
      </div>
    </div>
  );
};
