import { handleClickChange } from "@/utils";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface NavigationButtonProps {
  length?: number;
  customStyleCards?: boolean;
  direction: "prev" | "next";
  setActiveIndex?: React.Dispatch<React.SetStateAction<number>>;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ direction, customStyleCards, setActiveIndex, length }) => {
  return (
    <button
      onClick={() =>
        handleClickChange(
          setActiveIndex as React.Dispatch<React.SetStateAction<number>>,
          direction, length as number)}
      title={`Clique para ${direction === "prev" ? "voltar setor" : "passar setor"}`}
      className={`${customStyleCards ? `bg-stone-800` : `bg-white hover:bg-red-500 hover:scale-105 
        group`} w-14 h-14 min-w-14 min-h-14 z-50 cursor-pointer p-1 rounded-full`}>
      {direction === "prev" ? (
        <IoIosArrowBack className={`${customStyleCards ? `text-white` : `text-red-500 
          group-hover:text-white`} w-full h-full -ml-1`} />
      ) : (
        <IoIosArrowForward className={`${customStyleCards ? `text-white` : `text-red-500 
          group-hover:text-white`} w-full h-full ml-1`} />
      )}
    </button>
  );
};

export default NavigationButton;
