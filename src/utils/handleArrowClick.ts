// Função para alternar o índice do card ativo
export const handleArrowClick = (
  direction: "next" | "prev",
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>,
  length: number,
) => {
  setActiveIndex((prevIndex) => {
    if (direction === "next") {
      console.log(`handleArrowClick prevIndex next: ${prevIndex}`);
      console.log(`handleArrowClick length next: ${length}`);
      console.log(`(${prevIndex} + ${1}) % ${length}`);
      return (prevIndex + 1) % length;
    } else {
      console.log(`handleArrowClick prevIndex prev: ${prevIndex}`);
      console.log(`handleArrowClick length prev: ${length}`);
      console.log(`(${prevIndex} - ${1} + ${length}) % ${length}`);
      return (prevIndex - 1 + length) % length;
    }
  });
};