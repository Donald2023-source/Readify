import React from "react";
import Image from "next/image";
import logo from "@/public/Logo.png";

const Navbar = () => {
  return (
    <div>
      <div>
        <Image src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Navbar;
