import { Logo, SocialIcons } from "@/ui";
import Image from "next/image";
import UnivaleLogo from "public/logounivale.svg";
import { IoIosArrowUp } from "react-icons/io";

const CopyRight = () => {
  return (
    <section id="copyright" className="w-full bg-red-500 text-white"
      style={{ clipPath: "ellipse(90% 100% at 50% 100%)" }}>

      <div className="relative flex flex-col items-center py-16 space-y-6">
        <SocialIcons />
        <div className="w-3/4 border-t border-white opacity-50" />

        <div className="flex items-center">
          <div className="flex flex-col text-xl cursor-pointer font-semibold items-center">
            <span className="pt-2 mx-1 inline-flex">
              👴<Logo fontSize="2xl" fontType="medium" />🧓
            </span>
            <div className="bg-white p-2 rounded-sm">
              <Image src={UnivaleLogo} alt="Logo Univale" />
            </div>
          </div>
          <div className="w-full border-t border-white opacity-50 rotate-90" />
          <div className="text-center space-y-2 text-nowrap">
            <p>Home</p>
            <p>Sobre nós</p>
            <p>Parcerias</p>
          </div>
        </div>

        <button className="flex flex-col items-center space-x-2 text-white font-medium">
          <IoIosArrowUp className="text-3xl ml-1" />
          <span className="-mt-2">Voltar ao topo</span>
        </button>

      </div>

    </section>
  );
};

export default CopyRight;



