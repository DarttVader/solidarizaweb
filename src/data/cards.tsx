import { FaLaptop, FaUserGraduate } from "react-icons/fa";
import { GiFarmTractor } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";
import { LuHeartHandshake } from "react-icons/lu";

// Array de cards
export const cards = (activeIndex: number) => [
  { title: "Tecnologia", icon: <FaLaptop size={activeIndex ? 150 : 200} /> },
  { title: "Educação", icon: <FaUserGraduate size={activeIndex ? 150 : 200} /> },
  { title: "Saúde", icon: <LuHeartHandshake size={activeIndex ? 150 : 200} /> },
  { title: "Agro", icon: <GiFarmTractor size={activeIndex ? 150 : 200} /> },
  { title: "Games", icon: <IoGameController size={activeIndex ? 150 : 200} /> },
];