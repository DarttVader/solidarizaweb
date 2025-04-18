"use client";
import { recipes } from "@/data";
import { NavigationButton, PaginationButtons, RecipeCard } from "@/ui";
import { useState } from "react";


const FloatingCards = () => {
  const recipesPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  return (
    <div className="flex flex-col justify-center items-center mx-2">
      <div className="flex items-center space-x-2">
        <NavigationButton direction="prev" customStyleCards setActiveIndex={setCurrentPage}
          length={Math.ceil(recipes.length / recipesPerPage)} />
        {currentRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
        <NavigationButton direction="next" customStyleCards setActiveIndex={setCurrentPage}
          length={Math.ceil(recipes.length / recipesPerPage)} />
      </div>
      <PaginationButtons
        currentPage={currentPage}
        totalPages={Math.ceil(recipes.length / recipesPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default FloatingCards;
