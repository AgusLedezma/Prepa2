import React from "react";
import { NavigationMenuSection } from "../Home/sections/NavigationMenuSection/NavigationMenuSection";
import { FooterSection } from "../Home/sections/FooterSection/FooterSection";

export const QuienesSomos = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavigationMenuSection />
      <main className="flex-grow">
        <section className="bg-lila text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">Quiénes Somos</h1>
            <p className="text-xl mb-8">
              Conecta PRO: Transformando empresas a través de la automatización inteligente.
            </p>
          </div>
        </section>
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-lila mb-4">Nuestra Misión</h2>
              <p className="text-lg text-gray-700 mb-6">
                En ConectaPro S.R.L servimos a las PyMEs  cochabambinas y emprendimientos que enfrentan ineficiencias operativas, altos costos y falta de escalabilidad, ofreciendo diagnósticos ágiles y soluciones de automatización digital basadas en plataformas low-code. A través de un enfoque consultivo integral que combina un “Diagnóstico Digital Express”, implementación de “Automatización Administrativa” y despliegue de “Atención al Cliente Automatizada” acompañamos a nuestros clientes desde la identificación de sus necesidades hasta el soporte post-implementación, garantizando un rápido retorno de inversión y fomentando la adopción tecnológica sostenible.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-rosa mb-4">Nuestra Visión</h2>
              <p className="text-lg text-gray-700 mb-6">
                Queremos convertirnos en el socio estratégico de referencia para la transformación digital de las PyMEs en Bolivia, liderando la industria de automatización con soluciones innovadoras, asequibles y adaptadas a cada negocio. Aspiramos a cerrar la brecha tecnológica del 80 % de empresas sin herramientas digitales integradas, elevando el nivel de adopción tecnológica regional y consolidando un ecosistema de organizaciones más eficientes, competitivas y escalables.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-purpura text-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">Automatización</h3>
                <p>Simplificamos procesos para liberar tiempo y recursos.</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">Innovación</h3>
                <p>Adoptamos las últimas tecnologías low-code para diseñar soluciones creativas.</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">Eficiencia</h3>
                <p>Priorizamos iniciativas de alto impacto que optimicen costos y tiempos.</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">Acompañamiento</h3>
                <p>Brindamos formación y soporte continuo para impulsar la autonomía del cliente.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};
