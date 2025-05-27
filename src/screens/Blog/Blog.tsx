import React from "react";
import { NavigationMenuSection } from "../Home/sections/NavigationMenuSection/NavigationMenuSection";
import { FooterSection } from "../Home/sections/FooterSection/FooterSection";

export const Blog = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationMenuSection />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-lila mb-6">Blog</h1>
        <p className="text-lg text-gray-700 mb-4">
          Bienvenido a nuestro blog. Aquí encontrarás las últimas noticias, consejos y tendencias en automatización y tecnología para empresas.
        </p>
        {/* Aquí puedes agregar una lista de entradas de blog */}
      </main>
      <FooterSection />
    </div>
  );
};
