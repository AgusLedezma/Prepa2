import React from "react";
import { NavigationMenuSection } from "../Home/sections/NavigationMenuSection/NavigationMenuSection";
import { FooterSection } from "../Home/sections/FooterSection/FooterSection";

export const Contacto = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationMenuSection />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-lila mb-6">Contacto</h1>
        <p className="text-lg text-gray-700 mb-4">
          Estamos aquí para ayudarte. Si tienes alguna pregunta o necesitas más información sobre nuestros servicios, no dudes en contactarnos.
        </p>
        {/* Aquí puedes agregar un formulario de contacto */}
      </main>
      <FooterSection />
    </div>
  );
};
