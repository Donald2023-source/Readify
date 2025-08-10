"use client";
import React from "react";
import Image from "next/image";
import logo from "@/public/Logo.png";
import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navItems = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleScroll = (e: any, href: string) => {
    e.preventDefault();
    setNav(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="p-3 relative z-1">
      <div className="flex items-center justify-between h-10">
        <div className="flex items-center gap-2">
          <Image className="h-10 w-10" src={logo} alt="logo" />
          <h2 className="font-bold text-lg">Readify</h2>
        </div>

        <div
          className={
            nav
              ? "flex md:flex-row md:hidden flex-col  md:h-fit translate-x-0 transition duration-500 md:sticky absolute inset-0 md:bg-none h-screen bg-gradient-to-b from-white to-[#0157FF] from-30% justify-center items-center gap-12 font-sans"
              : "md:flex hidden md:flex-row flex-col md:translate-x-0  translate-x-96 transition duration-500 md:h-fit justify-center items-center gap-12 font-sans"
          }
        >
          {navItems.map((item) => (
            <div key={item?.href}>
              <Link
                className="px-2 hover:font-semibold transition"
                onClick={(e) => handleScroll(e, item?.href)}
                href={item?.href}
              >
                {item?.name}
              </Link>
            </div>
          ))}
          <button className="bg-[#0157FF] md:hidden py-3 shadow-xl text-sm cursor-pointer hover:scale-95 transition px-7 rounded-full text-white">
            Try 7-day Free trial
          </button>

          <h2
            onClick={() => setNav(false)}
            className="font-bold md:hidden absolute z-20 top-10 right-12 cursor-pointer hover:scale-95 transition"
          >
            X
          </h2>
        </div>
        <h2
          onClick={() => setNav(true)}
          className=" md:hidden cursor-pointer hover:scale-95 transition"
        >
          <IoMenu className="text-3xl" />
        </h2>
        <button className="bg-[#0157FF] py-3 md:block hidden shadow-xl text-sm cursor-pointer hover:scale-95 transition px-7 rounded-full text-white">
          Try 7-day Free trial
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
