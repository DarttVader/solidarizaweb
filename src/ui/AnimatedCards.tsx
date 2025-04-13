"use client";
import { cards } from "@/data";
import { NavigationButton } from "@/ui";
import { useEffect, useState } from "react";
;
const AnimatedCards = () => {
  const [isMobile, setIsMobile] = useState(false);
  // Inicializa com o Card do meio ativo
  const [activeIndex, setActiveIndex] = useState(Math.floor(cards.length / 2));
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Ou 640px, dependendo do seu break point
    };

    handleResize(); // roda na primeira renderização
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const visibleCards = isMobile
    ? cards(0).slice(Math.max(0, activeIndex - 1), activeIndex + 2) // mostra só 3 cards
    : cards(0); // mostra todos no desktop
  return (
    <div className="flex relative -mt-30 justify-center items-center px-20 w-full h-auto">
      <NavigationButton
        direction="prev"
        length={cards(0).length}
        setActiveIndex={setActiveIndex} />
      <div className="flex w-full mx-4 space-x-4">
        {visibleCards.map((card, index) => {
          const realIndex = isMobile ? Math.max(0, activeIndex - 1) + index : index;
          return (
            <div
              key={realIndex}
              title={activeIndex === realIndex ? `Ir para seção de ${card.title}` : ``}
              className={`transition-all ease-in-out duration-500 rounded-xl 
            ${activeIndex === realIndex ?
                  `w-62 h-62 bg-red-500 scale-110 cursor-pointer relative` :
                  "w-58 h-58 bg-red-400 cursor-default"}`}
            >
              <div className="w-full h-full text-white flex flex-col justify-center items-center">
                {card.icon}
                <h1 className="text-3xl font-lato font-bold">{card.title}</h1>
              </div>
            </div>
          )
        })}
      </div>
      <NavigationButton
        direction="next"
        length={cards(0).length}
        setActiveIndex={setActiveIndex} />
    </div>
  );
};

export default AnimatedCards;
