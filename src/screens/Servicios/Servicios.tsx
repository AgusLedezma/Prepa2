import React from "react";
import { NavigationMenuSection } from "../Home/sections/NavigationMenuSection/NavigationMenuSection";
import { FooterSection } from "../Home/sections/FooterSection/FooterSection";

export const Servicios = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationMenuSection />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-lila mb-6">Nuestros Servicios</h1>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
          <li>Automatización de procesos empresariales</li>
          <li>Integración de sistemas</li>
          <li>Desarrollo de chatbots personalizados</li>
          <li>Consultoría en transformación digital</li>
          <li>Soluciones de IA para negocios</li>
        </ul>
      </main>
      <FooterSection />
    </div>
  );
};
