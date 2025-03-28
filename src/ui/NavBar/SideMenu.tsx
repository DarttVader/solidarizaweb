import Link from "next/link";
import { IoIosClose } from "react-icons/io";

interface SideMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const SideMenu = ({ isOpen, closeMenu }: SideMenuProps) => (
  <div
    className={`fixed top-0 left-0 h-screen w-2/3 bg-red-1 text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out md:hidden shadow-lg`}
  >
    <button onClick={closeMenu} className="p-4">
      <IoIosClose size={28} />
    </button>
    <ul className="flex flex-col gap-6 p-6 text-lg">
      <li>
        <Link href="/quem-somos" className="hover:underline" onClick={closeMenu}>
          Quem Somos
        </Link>
      </li>
      <li>
        <Link href="/parcerias" className="hover:underline" onClick={closeMenu}>
          Parcerias
        </Link>
      </li>
      <li>
        <Link href="/quero-fazer-parte" className="hover:underline" onClick={closeMenu}>
          Quero Fazer Parte
        </Link>
      </li>
    </ul>
  </div>
);

export default SideMenu;
