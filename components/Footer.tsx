import {
  Facebook,
  Globe,
  Instagram,
  LocateIcon,
  Phone,
  Send,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div>
      <div className="bg-neutral-900 text-white grid md:grid-cols-4 gap-14 md:gap-0 justify-center text-center md:text-left w-full h-full py-20 md:p-30">
        <div className="space-y-6 md:w-3/4">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">DoSantos</h1>
            <p className="leading-loose">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
              dolores neque et ipsam facere iure, at earum rerum dicta
              voluptatibus cumque soluta
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-yellow-500 text-xl font-semibold">
              Opening time
            </h2>
            <div className="space-y-2">
              <p>Monday - Friday: 7 am to 10 pm</p>
              <p>Saturday - Sunday: 9 am to 10 pm</p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold">USEFUL LINKS</h1>
          <div className="grid grid-cols-2 gap-y-4 gap-x-8 md:w-fit">
            <Link href="/about">About Us</Link>
            <Link href="/classes">Our Classes</Link>
            <Link href="/trainers">Instructors</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/">Schedules</Link>
            <Link href="/">Payment</Link>
            <Link href="/">FAQs</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold">CONTACT INFO</h1>
          <div className="flex flex-col items-center md:items-start gap-6 md:gap-4">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-yellow-500">
              <LocateIcon />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-white leading-relaxed">
                  108 Main St <br /> Bellix Tower, NY
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-yellow-500">
              <Phone />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-white leading-relaxed">+1 (123) 456-7890</p>
                <p className="text-white leading-relaxed">+1 (123) 456-1456</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-yellow-500">
              <Globe />
              <div>
                <p className="font-medium">Web</p>
                <p className="text-white leading-relaxed">info@dosantos.com</p>
                <p className="text-white leading-relaxed">www.dosantos.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center md:items-start">
          <h1 className="text-3xl font-semibold">NEWSLETTER</h1>
          <p className="leading-loose">
            Subscribe our Newsletter and gates latest updates of offers,
            products and promotions from every week we provide
          </p>
          <div className="flex border border-gray-400 rounded-sm w-fit">
            <input
              className="px-3 py-2"
              placeholder="Email here"
              type="email"
              name=""
              id=""
            />
            <button className="bg-yellow-500 px-2">
              <Send className="" />
            </button>
          </div>
          <div className="text-gray-900 flex items-center gap-4">
            <div className="bg-white p-2 w-fit rounded-xl">
              <Facebook />
            </div>
            <div className="bg-white p-2 w-fit rounded-xl">
              <Instagram />{" "}
            </div>
            <div className="bg-white p-2 w-fit rounded-xl">
              <Youtube />
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 bg-neutral-950 text-neutral-500 text-center">
        <p>© 2025 All rights reserved</p>
      </div>
    </div>
  );
};
