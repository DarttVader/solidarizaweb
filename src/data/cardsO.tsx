import { FaUser } from "react-icons/fa";
import { RiContactsBook3Fill, RiTeamFill } from "react-icons/ri";


// Array de cards
export const cardsO = (activeIndex: number) => [
  { title: "Contato", icon: <RiContactsBook3Fill size={activeIndex ? 120 : 100} /> },
  { title: "Artigos", icon: <FaUser size={activeIndex ? 120 : 100} /> },
  { title: "Sobre nós", icon: <RiTeamFill size={activeIndex ? 120 : 100} /> },
];