"use client"
import { Logo, MenuIcon, SideMenu, SocialIcons } from "@/exports";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white p-4 fixed w-full top-0 shadow-md z-1">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <MenuIcon isOpen={isOpen} toggleMenu={toggleMenu} />
        <Logo />
        <SocialIcons />
      </div>
      <SideMenu isOpen={isOpen} closeMenu={closeMenu} />
    </nav>
  );
};

export default Navbar;
