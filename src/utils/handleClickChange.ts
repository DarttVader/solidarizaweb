import { handleArrowClick } from "./handleArrowClick";

export const handleClickChange = (
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>,
  direction: "next" | "prev",
  length: number,
) => {
  console.log(`
    handleClickChange length: ${length}, 
    direction: ${direction}, 
    setActiveIndex: ${setActiveIndex}`);
  handleArrowClick(direction, setActiveIndex, length);
};
