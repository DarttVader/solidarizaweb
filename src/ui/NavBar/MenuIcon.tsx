import { IoIosMenu, IoIosClose } from "react-icons/io";

interface MenuIconProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MenuIcon = ({ isOpen, toggleMenu }: MenuIconProps) => (
  <button onClick={toggleMenu} className="text-red-1 md:hidden">
    {isOpen ? <IoIosClose size={28} /> : <IoIosMenu size={28} />}
  </button>
);

export default MenuIcon;
