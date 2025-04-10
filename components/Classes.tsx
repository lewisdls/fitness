"use client";

import { useEffect, useState } from "react";
import { Class, Class_Card } from "./class";

export const Classes = () => {
  const [classes, setClasses] = useState<Class[]>([]);

  useEffect(() => {
    const fetchClasses = async () => {
      const res = await fetch("/api/classes");
      const data = await res.json();
      setClasses(data);
    };
    fetchClasses();
  }, []);

  return (
    <div className="px-4 md:pb-28 bg-neutral-50 flex flex-col items-center gap-6 md:gap-8 overflow-hidden">
      <h1 className="text-gray-950 text-4xl font-bold text-center">
        <span className="text-yellow-500">CLASSES</span> WE PROVIDE
      </h1>
      <p className="text-center text-gray-950 leading-loose md:w-1/2">
        Best Training dolor sit consecteur adipiscing elit, send do eiusmod temp
        incididunt ut labore et dolore sit consecteur adipiscing elit dolore sit
        consecteu dolore sit
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-8">
        {classes.map((c, index) => (
          <Class_Card key={c.id} c={c} index={index} />
        ))}
      </div>
    </div>
  );
};
