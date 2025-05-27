import React from "react";
import { NavigationMenuSection } from "../Home/sections/NavigationMenuSection/NavigationMenuSection";
import { FooterSection } from "../Home/sections/FooterSection/FooterSection";

export const Servicios = (): JSX.Element => {
  const servicios = [
    {
      titulo: "Automatización de Procesos",
      descripcion: "Optimizamos tus flujos de trabajo para aumentar la eficiencia y reducir errores.",
      icono: (
        <svg className="w-12 h-12 text-rosa" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      )
    },
    {
      titulo: "Integración de Sistemas",
      descripcion: "Conectamos tus aplicaciones para un flujo de datos sin interrupciones.",
      icono: (
        <svg className="w-12 h-12 text-rosa" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      titulo: "Chatbots Personalizados",
      descripcion: "Desarrollamos asistentes virtuales inteligentes para mejorar la atención al cliente.",
      icono: (
        <svg className="w-12 h-12 text-rosa" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
        </svg>
      )
    },
    {
      titulo: "Consultoría en Transformación Digital",
      descripcion: "Asesoramos en la implementación de tecnologías para impulsar tu negocio.",
      icono: (
        <svg className="w-12 h-12 text-rosa" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      )
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavigationMenuSection />
      <main className="flex-grow">
        <section className="bg-lila text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Nuestros Servicios</h1>
            <p className="text-xl mb-8">
              Soluciones innovadoras para impulsar tu negocio en la era digital
            </p>
          </div>
        </section>
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {servicios.map((servicio, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  {servicio.icono}
                  <h2 className="text-2xl font-bold text-lila ml-4">{servicio.titulo}</h2>
                </div>
                <p className="text-gray-700">{servicio.descripcion}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-purpura text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">¿Listo para transformar tu negocio?</h2>
            <p className="text-xl mb-8">
              Contáctanos hoy para descubrir cómo nuestros servicios pueden impulsar tu empresa hacia el futuro.
            </p>
            <button className="bg-rosa text-white font-bold py-2 px-6 rounded-full hover:bg-rosa/90 transition duration-300">
              Solicitar una Consulta
            </button>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};
