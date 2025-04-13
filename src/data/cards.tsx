import { FaLaptop, FaUserGraduate } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { LuHeartHandshake } from "react-icons/lu";
import { PiPlantFill } from "react-icons/pi";

// Array de cards
export const cards = (activeIndex: number) => [
  { title: "Tecnologia", icon: <FaLaptop size={activeIndex ? 120 : 100} /> },
  { title: "Educação", icon: <FaUserGraduate size={activeIndex ? 120 : 100} /> },
  { title: "Saúde", icon: <LuHeartHandshake size={activeIndex ? 120 : 100} /> },
  { title: "Agro", icon: <PiPlantFill size={activeIndex ? 120 : 100} /> },
  { title: "Games", icon: <IoGameController size={activeIndex ? 120 : 100} /> },
];