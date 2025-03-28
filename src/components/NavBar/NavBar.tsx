"use client"
import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { MdMenuOpen } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white p-4 fixed w-full top-0 shadow-md z-50">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        {/* Botão do menu hambúrguer */}
        <button onClick={() => setIsOpen(!isOpen)} className="text-[#FF6056] md:hidden">
          {isOpen ? <MdMenuOpen size={28} /> : <MdMenuOpen size={28} />}
        </button>

        {/* Logo */}
        <Link href="/">
          <span className={`text-[#FF6056] text-xl cursor-pointer `}>
            Solidariza
          </span>
        </Link>

        {/* Ícones Sociais */}
        <div className="flex gap-3 text-white">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-[#FF6056] p-2 rounded-full">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-[#FF6056] p-2 rounded-full">
            <FaInstagram size={20} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-[#FF6056] p-2 rounded-full">
            <FaGithub size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-[#FF6056] p-2 rounded-full">
            <FaFacebook size={20} />
          </a>
        </div>
      </div>

      {/* Menu lateral */}
      <div
        className={`fixed top-0 left-0 h-screen w-2/3 bg-[#FF6056] text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden shadow-lg`}
      >
        <button onClick={() => setIsOpen(false)} className="p-4">
          <IoIosClose size={28} />
        </button>
        <ul className="flex flex-col gap-6 p-6 text-lg">
          <li><Link href="/quem-somos" className="hover:underline" onClick={() => setIsOpen(false)}>Quem Somos</Link></li>
          <li><Link href="/parcerias" className="hover:underline" onClick={() => setIsOpen(false)}>Parcerias</Link></li>
          <li><Link href="/quero-fazer-parte" className="hover:underline" onClick={() => setIsOpen(false)}>Quero Fazer Parte</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;