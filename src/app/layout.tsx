import { CopyRight, NavBar } from "@/components";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Lato, Prata } from "next/font/google";
import "./globals.css";

const FontPrata = Prata({
  weight: "400",
  style: "normal",
  variable: "--prata",
  subsets: ["latin", "cyrillic", "cyrillic-ext", "vietnamese"],
});

const FontPoppins = Lato({
  variable: "--lato",
  style: ["normal", "italic"],
  weight: ["300", "400", "700"],
  subsets: ["latin", "latin-ext"],
})

export const metadata: Metadata = {
  title: "Solidariza | Website",
  description: "Criado por Fábio Ghizoni, Glawck Henrique, Ryan Alves, Mateus Cristiano e Mateus Augusto",
};

const RootLayout = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <html lang="pt-BR" className="antialiased">
      <body className={`${FontPrata.variable} ${FontPoppins.variable} flex flex-col min-h-screen`}>
        <NavBar />
        {children}
        <CopyRight />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
