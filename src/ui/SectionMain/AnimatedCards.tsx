"use client";
import { cards } from "@/data";
import { NavigationButton } from "@/ui";
import { useState } from "react";

const AnimatedCards = () => {
  // Inicializa com o Card do meio ativo
  const [activeIndex, setActiveIndex] = useState(Math.floor(cards(0).length / 2));
  return (
    <div className="flex space-x-2 absolute justify-center items-center -mt-34 px-20 w-full h-auto">
      <NavigationButton
        direction="prev"
        length={cards(0).length}
        setActiveIndex={setActiveIndex} />
      {cards(activeIndex).map((card, index) => (
        <div
          key={index}
          className={`transition-all ease-in-out duration-700 rounded-xl bg-red-1  
            ${activeIndex === index ?
              `w-120 h-120 shadow-2xl drop-shadow-2xl scale-105` :
              "w-90 h-90 opacity-80"}`}
        >
          <div className="w-full h-full text-white flex flex-col justify-center items-center">
            {card.icon}
            <h1 className="text-6xl">{card.title}</h1>
          </div>
        </div>
      ))}
      <NavigationButton
        direction="next"
        length={cards(0).length}
        setActiveIndex={setActiveIndex} />
    </div>
  );
};

export default AnimatedCards;
