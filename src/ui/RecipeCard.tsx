// components/RecipeCard.tsx
import Image, { StaticImageData } from "next/image";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface RecipeCardProps {
  img: StaticImageData | string;
  name: string;
  id: number;
}

const RecipeCard = ({ img, name }: RecipeCardProps) => {
  return (
    <div className="flex flex-col space-x-2">
      <Image src={img} alt={name} className="rounded-t-full w-58 h-50" />
      <div className="flex flex-col space-y-2 justify-center items-center w-58 h-40 bg-red-500 rounded-b-full">
        <h2 className="text-2xl">{name}</h2>
        <div className="flex space-x-2">
          <button className="bg-stone-800 p-1 rounded-md h-fit mb-5 cursor-pointer">
            <FaInstagram color="white" className="w-8 h-8" />
          </button>
          <button className="bg-stone-800 p-1 rounded-md h-fit mb-5 cursor-pointer">
            <FaXTwitter color="white" className="w-8 h-8" />
          </button>
          <button className="bg-stone-800 p-1 rounded-md h-fit mb-5 cursor-pointer">
            <FaYoutube color="white" className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
