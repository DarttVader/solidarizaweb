import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="flex flex-col relative items-center justify-center bg-red-500 h-screen w-full italic
      text-black">
      <h1 className="text-6xl font-bold font-prata">404 - Página não Encontrada</h1>
      <div className="flex space-x-2 mt-4 text-5xl font-lato font-medium">
        <h2>Volte para página inicial</h2>
        <Link href="/"
          className="underline text-white hover:opacity-60">aqui</Link>
      </div>
    </div>
  );
};

export default Custom404;