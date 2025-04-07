import { handleClickChange } from "@/utils";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface NavigationButtonProps {
  length?: number;
  direction: "prev" | "next";
  setActiveIndex?: React.Dispatch<React.SetStateAction<number>>;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ direction, setActiveIndex, length }) => {
  return (
    <button
      onClick={() =>
        handleClickChange(
          setActiveIndex as React.Dispatch<React.SetStateAction<number>>,
          direction, length as number)}
      title={`Clique para ${direction === "prev" ? "voltar setor" : "passar setor"}`}
      className="w-18 h-18 min-w-18 min-h-18 bg-white border-3 border-red-1 rounded-full 
        cursor-pointer z-50 hover:bg-red-1 hover:scale-105 group"
    >
      {direction === "prev" ? (
        <IoIosArrowBack className="text-red-1 w-full h-full -ml-1 group-hover:text-white" />
      ) : (
        <IoIosArrowForward className="text-red-1 w-full h-full ml-1 group-hover:text-white" />
      )}
    </button>
  );
};

export default NavigationButton;
