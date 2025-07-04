import React from "react";
import { NavigationMenuSection } from "../Home/sections/NavigationMenuSection/NavigationMenuSection";
import { FooterSection } from "../Home/sections/FooterSection/FooterSection";
import { Button } from "../../components/ui/button";

export const Contacto = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavigationMenuSection />
      <main className="flex-grow">
        <section className="bg-lila text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Contáctanos</h1>
            <p className="text-xl mb-8">
              Estamos aquí para ayudarte. ¿Tienes alguna pregunta o necesitas más información?
            </p>
          </div>
        </section>
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-lila mb-6">Información de Contacto</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-rosa" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  +591 65392746
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-rosa" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  jonathan.moruno@ucb.edu.bo
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-rosa" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  Av. America 123, Cochabamba, Bolivia
                </li>
              </ul>
            </div>
            {/* <div>
              <h2 className="text-3xl font-bold text-lila mb-6">Envíanos un Mensaje</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="nombre" className="block text-gray-700 font-bold mb-2">Nombre</label>
                  <input type="text" id="nombre" className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <div className="mb-4">
                  <label htmlFor="mensaje" className="block text-gray-700 font-bold mb-2">Mensaje</label>
                  <textarea id="mensaje" rows={4} className="w-full px-3 py-2 border rounded-lg"></textarea>
                </div>
                <Button className="bg-rosa text-white hover:bg-rosa/90">Enviar Mensaje</Button>
              </form>
            </div> */}
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};
