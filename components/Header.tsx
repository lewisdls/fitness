import { Dumbbell } from "lucide-react";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="text-white">
      <div className="bg-gradient-to-r from-[#121212] to-zinc-800 flex justify-around h-[calc(90vh-92px)] md:h-[calc(100vh-92px)] items-center flex-col px-4 md:flex-row gap-6 md:gap-0 md:px-8 md:py-0">
        <div className="flex flex-col items-center justify-center md:items-start gap-8 md:w-2/6 h-full">
          <Dumbbell className="w-12 h-12" />
          <h1 className="text-6xl md:text-8xl text-center md:text-left font-bold text-yellow-500">
            TIME <span className="font-light text-white">TO</span> <br />{" "}
            <span className="font-light text-white">GET</span> FIT
          </h1>
          <p className="leading-loose text-center md:text-left 3xl:w-3/4">
            Gym is very important to maintain our health luptas sit fugit, lorem
            ipsum, dolor sit amet.
          </p>
          <button className="md:self-start uppercase font-semibold px-7 py-3 border rounded-full">
            Contact now
          </button>
        </div>
        <div className="flex flex-col self-end">
          <img
            src="/header.png"
            alt="header"
            className="lg: w-[480px] h-[600px] 3xl:w-[620px] 3xl:h-[800px] hidden md:block"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4">
        <div className="bg-[url('/01.jpeg')] bg-cover bg-center py-20 px-12">
          <div className="w-fit">
            <p className="font-semibold text-2xl">
              Dumbel <br/> back lift
            </p>
            <div className="h-[1.5px] bg-white my-2"></div>
            <p className="font-semibold text-xl">3 SET, <span className="text-lg">5 minutes</span></p>
          </div>
        </div>
        <div className="bg-[url('/02.jpeg')] bg-cover bg-center py-20 px-12">
          <div className="w-fit">
            <p className="font-semibold text-2xl">
              Weight <br/> lifting
            </p>
            <div className="h-[1.5px] bg-white my-2"></div>
            <p className="font-semibold text-xl">4 SETS, <span className="text-lg">3 minutes</span></p>
          </div>
        </div>
        <div className="bg-[url('/03.jpeg')] bg-cover bg-center py-20 px-12">
          <div className="w-fit">
            <p className="font-semibold text-2xl">
              Abs <br/> fitness
            </p>
            <div className="h-[1.5px] bg-white my-2"></div>
            <p className="font-semibold text-xl">3 SETS, <span className="text-lg">5 minutes</span></p>
          </div>
        </div>
        <div className="bg-[url('/01.jpeg')] bg-cover bg-center py-20 px-12">
          <div className="w-fit">
            <p className="font-semibold text-2xl">
              Dumbel <br/> back lift
            </p>
            <div className="h-[1.5px] bg-white my-2"></div>
            <p className="font-semibold text-xl">3 SET, <span className="text-lg">5 minutes</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};
