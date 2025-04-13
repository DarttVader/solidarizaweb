// Função para alternar o índice do card ativo
export const handleArrowClick = (
  direction: "next" | "prev",
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>,
  length: number,
) => {
  setActiveIndex((prevIndex) => {
    if (direction === "next") {
      return (prevIndex + 1) % length;
    } else {
      return (prevIndex - 1 + length) % length;
    }
  });
};