import { SectionMain, SectionRevenues } from "@/components";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <main className="flex flex-col w-full h-auto mx-auto justify-center items-center">
      <SectionMain />
      <SectionRevenues />
      <Carousel />
    </main>
  );
};

export default Home;
