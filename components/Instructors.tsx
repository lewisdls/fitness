"use client";

import { useEffect, useState } from "react";
import { Instructor, Instructor_Card } from "./instructor_card";

export const Instructors = () => {
  const [instructors, setInstructors] = useState<Instructor[]>([]);

  useEffect(() => {
    const fetchInstructors = async () => {
      const res = await fetch("/api/instructors");
      const data = await res.json();
      setInstructors(data);
    };
    fetchInstructors();
  }, []);

  return (
    <div className="py-20 px-4 md:px-0 bg-neutral-50 flex flex-col items-center justify-center text-center gap-8">
      <h1 className="text-4xl font-bold uppercase">
        Professional <span className="text-yellow-500">Instructors</span>
      </h1>
      <p className="leading-loose md:w-2/4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, veniam
        nam nesciunt ipsum saepe ratione velit! Hic, officia inventore excepturi
        voluptatem ipsum saepe sit amet
      </p>
      <div className="grid md:grid-cols-4 gap-8 mt-8 w-full md:w-auto">
        {instructors.map((i, index) => (
          <Instructor_Card key={i.id} instructor={i} index={index} />
        ))}
      </div>
    </div>
  );
};
