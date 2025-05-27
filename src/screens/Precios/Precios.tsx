import React from "react";
import { NavigationMenuSection } from "../Home/sections/NavigationMenuSection/NavigationMenuSection";
import { FooterSection } from "../Home/sections/FooterSection/FooterSection";

export const Precios = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationMenuSection />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-lila mb-6">Precios</h1>
        <p className="text-lg text-gray-700 mb-4">
          Ofrecemos planes flexibles adaptados a las necesidades de tu negocio. Nuestros precios están diseñados para proporcionar el mejor valor por tu inversión.
        </p>
        {/* Aquí puedes agregar una tabla o lista de precios */}
      </main>
      <FooterSection />
    </div>
  );
};
