import { AnimatedCards } from "@/ui";

const SectionCards = () => {
  return (
    <section
      id="section-main"
      className="w-full h-screen bg-amber-50">
      <div className="w-full h-1/2 contrast-150 mt-17 bg-fundo bg-center bg-cover" />
      <AnimatedCards />
    </section>
  );
};

export default SectionCards;