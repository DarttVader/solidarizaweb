"use client";
import { useState, useEffect, JSX } from 'react';
import { LuHeartHandshake } from 'react-icons/lu';
import { PiPlantFill } from 'react-icons/pi';
import { IoGameController } from 'react-icons/io5';
import { FaLaptop, FaUserGraduate } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const AnimatedCards = () => [
  { title: 'Saúde', icon: <LuHeartHandshake /> },
  { title: 'Educação', icon: <FaUserGraduate /> },
  { title: 'Agrô', icon: <PiPlantFill /> },
  { title: 'Tecnologia', icon: <FaLaptop /> },
  { title: 'Games', icon: <IoGameController /> },
];

export default function Carousel() {
  const [index, setIndex] = useState<number>(0);
  const sections: { title: string; icon: JSX.Element }[] = AnimatedCards();
  const [isMobile, setIsMobile] = useState(false);

  // Atualiza o estado para verificar se é mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Funções para navegar entre os slides
  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? AnimatedCards().length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === AnimatedCards().length - 1 ? 0 : prev + 1));
  };

  // Classes dinâmicas para o layout mobile
  const getMobileClass = (i: number) => {
    let diff = i - index;
    if (diff < 0) diff += sections.length;
    if (diff === 0) return 'z-10 scale-110 opacity-100 bg-[#ff4136]';
    if (diff === 1) return 'z-5 scale-90 opacity-70 bg-[#ff6b61] translate-x-24';
    if (diff === sections.length - 1) return 'z-5 scale-90 opacity-70 bg-[#ff6b61] -translate-x-24';
    return 'hidden';
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full mt-10">
      {/* Layout para Mobile */}
      {isMobile ? (
        <div className="relative flex items-center justify-center w-full z-10">
          <button
            onClick={prevSlide}
            className="p-2 bg-white rounded-full shadow-md absolute top-1/2 left-12 transform -translate-y-1/2 z-20"
          >
            <IoIosArrowBack size={30} className="text-red-500" />
          </button>

          <div className="relative flex items-center overflow-hidden w-[80%] justify-center h-48">
            {AnimatedCards().map((section, i) => (
              <div
                key={i}
                className={`absolute flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-500 text-white w-40 h-40 ${getMobileClass(
                  i
                )}`}
              >
                <span className="text-4xl">{section.icon}</span>
                <span className="mt-2 font-bold text-lg">{section.title}</span>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-4 bg-white rounded-full shadow-md absolute right-0 z-20"
          >
            <IoIosArrowForward size={30} className="text-red-500" />
          </button>
        </div>
      ) : (

        // Layout para Desktop
        <div className="relative flex items-center justify-center w-full z-10">
          <button
            onClick={prevSlide}
            className="p-4 bg-white rounded-full shadow-md absolute left-14 z-20"
          >
            <IoIosArrowBack size={30} className="text-red-500" />
          </button>

          <div className="flex gap-4 justify-center w-[80%]">
            {sections.map((section, i) => (
              <div
                key={i}
                className={`flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-500 text-white ${index === i
                  ? 'bg-[#ff4136] scale-110 w-64 h-64'
                  : 'bg-[#ff6b61] scale-90 opacity-70 w-56 h-56'
                  }`}
              >
                <span className="text-6xl">{section.icon}</span>
                <span className="mt-4 font-bold text-lg md:text-2xl">{section.title}</span>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-4 bg-white rounded-full shadow-md absolute right-0 z-20"
          >
            <IoIosArrowForward size={30} className="text-red-500" />
          </button>
        </div>
      )}
    </div>
  );
}