import React, { ReactEventHandler } from "react";
import Image from "next/image";
import logo from "@/public/Logo.png";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleScroll = (e: any, href: string) => {
    e.preventDefault();
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
    <nav className="p-3">
      <div className="flex items-center gap-2">
        <Image className="h-10 w-10" src={logo} alt="logo" />
        <h2 className="font-bold text-lg">Readify</h2>
      </div>

      <div>
        {navItems.map((item) => (
          <Link onClick={(e) => handleScroll(e, item?.href)} href={item?.href}>
            {item?.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
