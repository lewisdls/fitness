import { Instructor_Card } from "./instructor_card";
import { prisma } from "@/utils/prisma";

export const Instructors = async () => {
  const instructors = await prisma.instructor.findMany();

  return (
    <div className="py-20 bg-neutral-50 flex flex-col items-center justify-center text-center gap-8">
      <h1 className="text-4xl font-bold uppercase">
        Professional <span className="text-yellow-500">Instructors</span>
      </h1>
      <p className="leading-loose w-2/4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, veniam
        nam nesciunt ipsum saepe ratione velit! Hic, officia inventore excepturi
        voluptatem ipsum saepe sit amet
      </p>
      <div className="grid grid-cols-4 gap-8 mt-8">
        {instructors.map((i) => (
          <Instructor_Card key={i.id} instructor={i} />
        ))}
      </div>
    </div>
  );
};
