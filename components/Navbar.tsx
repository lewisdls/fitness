"use client";

import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <div className="text-white bg-neutral-900 flex justify-between md:justify-around items-center p-6 md:p-8 relative">
        <Link href="/" className="text-lg font-semibold">
          DoSantos
        </Link>
        <div
          className={`absolute md:static top-[76px] left-0 min-h-[calc(100vh-76px)] md:min-h-auto w-full md:w-auto flex ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          } transition-all duration-400`}
        >
          <div
            className={`flex flex-col md:flex-row gap-6 md:items-center uppercase text-sm font-medium ${
              isOpen ? "bg-neutral-900 md:bg-transparent" : "sm:bg-transparent"
            } transition-all duration-400 p-6 md:p-0`}
          >
            <Link
              href="/"
              className={`w-full md:w-auto`}
              onClick={() => setIsOpen(!isOpen)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`w-full md:w-auto`}
              onClick={() => setIsOpen(!isOpen)}
            >
              About
            </Link>
            <Link
              href="/classes"
              className={`w-full md:w-auto`}
              onClick={() => setIsOpen(!isOpen)}
            >
              Classes
            </Link>
            <Link
              href="/shop"
              className={`w-full md:w-auto`}
              onClick={() => setIsOpen(!isOpen)}
            >
              Shop
            </Link>
            <Link
              href="/trainers"
              className={`w-full md:w-auto`}
              onClick={() => setIsOpen(!isOpen)}
            >
              Trainers
            </Link>
            <Link
              href="/contact"
              className={`w-full md:w-auto`}
              onClick={() => setIsOpen(!isOpen)}
            >
              Contact
            </Link>
            <div className="relative hidden md:block">
              <ShoppingBag className="w-8 h-8 cursor-pointer" />
              <span className="absolute top-0 right-0 bg-yellow-600 rounded-full px-1 text-sm font-bold">
                2
              </span>
            </div>
          </div>
        </div>
        <div className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          <Menu
            className={`w-6 h-6 cursor-pointer ${isOpen ? "hidden" : "block"}`}
          />
          <X
            className={`w-6 h-6 cursor-pointer ${isOpen ? "block" : "hidden"}`}
          />
        </div>
      </div>
    </div>
  );
};
