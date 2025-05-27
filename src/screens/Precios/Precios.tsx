import React from "react";
import { NavigationMenuSection } from "../Home/sections/NavigationMenuSection/NavigationMenuSection";
import { FooterSection } from "../Home/sections/FooterSection/FooterSection";
import { Button } from "../../components/ui/button";

export const Precios = (): JSX.Element => {
  const planes = [
    {
      nombre: "Plan Básico",
      precio: "500 Bs",
      caracteristicas: [
        "1,000 operaciones Make por mes",
        "200 solicitudes de IA",
        "100 mensajes WhatsApp API",
        "500 MB de almacenamiento"
      ],
      color: "bg-lila"
    },
    {
      nombre: "Plan Estándar",
      precio: "1,000 Bs",
      caracteristicas: [
        "3,000 operaciones Make por mes",
        "500 solicitudes de IA",
        "500 mensajes WhatsApp API",
        "1 GB de almacenamiento"
      ],
      color: "bg-rosa"
    },
    {
      nombre: "Plan Premium",
      precio: "2,000 Bs",
      caracteristicas: [
        "10,000 operaciones Make por mes",
        "2,000 solicitudes de IA",
        "2,000 mensajes WhatsApp API",
        "5 GB de almacenamiento"
      ],
      color: "bg-purpura"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavigationMenuSection />
      <main className="flex-grow">
        <section className="bg-lila text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Nuestros Precios</h1>
            <p className="text-xl mb-8">
              Planes flexibles diseñados para impulsar tu negocio
            </p>
          </div>
        </section>
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {planes.map((plan, index) => (
              <div key={index} className="border rounded-lg shadow-lg overflow-hidden">
                <div className={`${plan.color} text-white p-6 text-center`}>
                  <h2 className="text-2xl font-bold mb-2">{plan.nombre}</h2>
                  <p className="text-4xl font-bold">{plan.precio}</p>
                  <p className="text-sm">por mes</p>
                </div>
                <div className="p-6">
                  <ul className="mb-6">
                    {plan.caracteristicas.map((caracteristica, idx) => (
                      <li key={idx} className="flex items-center mb-2">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {caracteristica}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.color} text-white hover:opacity-90`}>
                    Elegir Plan
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};
