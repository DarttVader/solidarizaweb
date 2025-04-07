import { Line, Logo, SocialIcons } from "@/ui";
import { IoIosArrowUp } from "react-icons/io";

const CopyRight = () => {
  return (
    <section id="copyright" className="w-full bg-red-500 text-white">

      <div className="relative flex flex-col items-center py-16 space-y-6">
        <SocialIcons />
        <Line />

        <div className="flex flex-col items-center space-y-3">
          <h2 className="flex text-xl cursor-pointer font-semibold items-center hover:opacity-70">
            👴
            <span className="pt-2 mx-1">
              <Logo fontSize="2xl" fontType="medium" />
            </span>
            🧓
          </h2>
          <nav className="text-center space-y-2">
            <p>Home</p>
            <p>Sobre nós</p>
            <p>Parcerias</p>
          </nav>
        </div>

        <button className="flex items-center space-x-2 text-white font-medium">
          <span>Voltar ao topo</span>
          <IoIosArrowUp className="text-3xl" />
        </button>

      </div>

    </section>
  );
};

export default CopyRight;



