import React from "react";
import { NavigationMenuSection } from "../Home/sections/NavigationMenuSection/NavigationMenuSection";
import { FooterSection } from "../Home/sections/FooterSection/FooterSection";

export const QuienesSomos = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationMenuSection />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-lila mb-6">Quiénes Somos</h1>
        <p className="text-lg text-gray-700 mb-4">
          Conecta PRO es una empresa líder en soluciones de automatización y tecnología inteligente. Nos dedicamos a transformar la forma en que las empresas operan, ofreciendo herramientas innovadoras que mejoran la eficiencia y productividad.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Nuestra misión es empoderar a las organizaciones con tecnología de vanguardia, permitiéndoles focalizarse en lo que realmente importa: el crecimiento y la innovación de sus negocios.
        </p>
      </main>
      <FooterSection />
    </div>
  );
};
