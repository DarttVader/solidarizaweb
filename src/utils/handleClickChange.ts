import { handleArrowClick } from "./handleArrowClick";

export const handleClickChange = (
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>,
  direction: "next" | "prev",
  length: number,
) => {
  handleArrowClick(direction, setActiveIndex, length);
};
