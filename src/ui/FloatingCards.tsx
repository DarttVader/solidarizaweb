"use client";
import { recipes } from "@/data";
import Image from "next/image";
import { useState } from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import NavigationButton from "./NavigationButton";

const FloatingCards = () => {
  const recipesPages = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastRecipe = currentPage * recipesPages;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPages;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center ">
        <NavigationButton direction="prev" customStyleCards />
        {currentRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="flex flex-col space-x-2">
            <Image
              src={recipe.img}
              alt={recipe.name}
              className="rounded-t-full w-60 h-50" />
            <div className="flex flex-col space-y-2 justify-center items-center w-60 h-40 bg-red-500 rounded-b-full">
              <h2 className="text-2xl">{recipe.name}</h2>
              <div className="flex space-x-2">
                <button className="bg-stone-800 p-1 rounded-md h-fit mb-5"><FaInstagram color="white" className="w-8 h-8" /></button>
                <button className="bg-stone-800 p-1 rounded-md h-fit mb-5"><FaXTwitter color="white" className="w-8 h-8" /></button>
                <button className="bg-stone-800 p-1 rounded-md h-fit mb-5"><FaYoutube color="white" className="w-8 h-8" /></button>
              </div>
            </div>
          </div>
        ))}
        <NavigationButton direction="next" customStyleCards />
      </div>
      <div className="mt-8 justify-between space-x-2 text-2xl font-lato font-bold">
        <button className="w-12 h-12 bg-stone-800 rounded-full"
          onClick={() => setCurrentPage(1)}>
          <span className="text-white">1</span>
        </button>
        <button className="w-12 h-12 bg-stone-800 rounded-full"
          onClick={() => setCurrentPage(2)}>
          <span className="text-white">2</span>
        </button>
        <button className="w-12 h-12 bg-stone-800 rounded-full"
          onClick={() => setCurrentPage(3)}>
          <span className="text-white">3</span>
        </button>
        <button className="w-12 h-12 bg-stone-800 rounded-full"
          onClick={() => setCurrentPage(4)}>
          <span className="text-white">4</span>
        </button>
        <button className="w-12 h-12 bg-stone-800 rounded-full"
          onClick={() => setCurrentPage(5)}>
          <span className="text-white">5</span>
        </button>
        <button className="w-fit h-fit bg-red-500 rounded-md p-1">
          <span className="text-white">Outras receitas</span>
        </button>
      </div>
    </div>
  );
};

export default FloatingCards;