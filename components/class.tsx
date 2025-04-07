import React from "react";

export interface Class {
  id: number;
  title: string;
  duration: number;
  image: string;
}

export const Class_Card = ({ c }: { c: Class }) => {
  return (
    <div className="relative z-20">
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
    </div>
  );
};
