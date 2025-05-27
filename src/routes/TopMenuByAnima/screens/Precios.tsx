import { CheckIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { NavigationMenuSection } from "../../../screens/Home/sections/NavigationMenuSection/NavigationMenuSection";
import { FooterSection } from "../../../screens/Home/sections/FooterSection/FooterSection";

export const Precios = (): JSX.Element => {
  const standardPrecioFeatures = [
    "3,000 operaciones Make por mes",
    "500 solicitudes de IA (DeepSeek)",
    "500 mensajes WhatsApp API",
    "1 GB de almacenamiento en Google Drive",
  ];

  const corporatePrecioFeatures = [
    "Escalabilidad ilimitada en operaciones y solicitudes",
    "Integración avanzada con WhatsApp API",
    "Almacenamiento ampliado con seguridad reforzada",
    "Soporte técnico y asesoría especializada",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavigationMenuSection />
      <main className="flex-grow">
        <section
          className="w-full h-[180px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url(https://c.animaapp.com/mb5quo92dUPiZg/img/frame-10.png)",
          }}
        >
          <h1 className="text-blanco font-h1-manrope-bold text-[48px] font-bold">
            Nuestros precios para ti
          </h1>
        </section>

        <section className="container mx-auto flex justify-center gap-8 px-4 py-16">
          <Card className="w-[400px] shadow-lg overflow-hidden">
            <CardContent className="p-8 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-purpura flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"
                    fill="white"
                  />
                  <path
                    d="M7 12H9V17H7V12ZM11 7H13V17H11V7ZM15 9H17V17H15V9Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h2 className="text-lila text-2xl font-h3-inter-semibold font-semibold text-center mb-2">
                Precio Estándar de Automatización
              </h2>
              <p className="text-purpura text-center mb-6 text-sm">
                Automatización simple y potente para empresas en crecimiento.
              </p>
              <div className="text-center mb-4">
                <span className="text-rosa text-6xl font-bold">5476.00</span>
                <p className="text-purpura">Bs</p>
              </div>
              <div className="w-full space-y-3 mb-6">
                {standardPrecioFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckIcon className="text-purpura mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Button className="w-full bg-lila hover:bg-lila/90 text-white">
                Elegir este precio
              </Button>
            </CardContent>
          </Card>

          <Card className="w-[400px] shadow-lg overflow-hidden">
            <CardContent className="p-8 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-rosa flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h2 className="text-lila text-2xl font-h3-inter-semibold font-semibold text-center mb-2">
                Precio Corporativo de Automatización
              </h2>
              <p className="text-purpura text-center mb-6 text-sm">
                Soluciones inteligentes de automatización a gran escala.
              </p>
              <div className="text-center mb-4">
                <span className="text-rosa text-2xl font-bold">
                  Cotización personalizada
                </span>
              </div>
              <div className="w-full space-y-3 mb-6">
                {corporatePrecioFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckIcon className="text-rosa mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Button className="w-full bg-lila hover:bg-lila/90 text-white">
                Contáctanos
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};
