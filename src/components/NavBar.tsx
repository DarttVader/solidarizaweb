"use client";
import { List, Logo, MenuIcon, SideMenu, SocialIcons } from "@/ui";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white p-4 fixed w-full top-0 shadow-md z-50">
      <SideMenu isOpen={isOpen} closeMenu={closeMenu} />
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <MenuIcon isOpen={isOpen} toggleMenu={toggleMenu} />
        <Logo textColor="red-500" />
        <List />
        <SocialIcons hoverA />
      </div>
    </nav>
  );
};

export default Navbar;
