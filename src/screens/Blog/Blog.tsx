import React from "react";
import { NavigationMenuSection } from "../Home/sections/NavigationMenuSection/NavigationMenuSection";
import { FooterSection } from "../Home/sections/FooterSection/FooterSection";

export const Blog = (): JSX.Element => {
  const posts = [
    {
      titulo: "5 Tendencias en Automatización para 2024",
      resumen: "Descubre las últimas innovaciones que están transformando la industria.",
      fecha: "15 Mar 2024",
      imagen: "https://via.placeholder.com/300x200.png?text=Automatizaci%C3%B3n+2024"
    },
    {
      titulo: "Cómo la IA está Revolucionando el Servicio al Cliente",
      resumen: "Explora el impacto de la inteligencia artificial en la experiencia del cliente.",
      fecha: "10 Mar 2024",
      imagen: "https://via.placeholder.com/300x200.png?text=IA+Servicio+al+Cliente"
    },
    {
      titulo: "Guía para Implementar RPA en tu Empresa",
      resumen: "Pasos clave para una integración exitosa de la Automatización Robótica de Procesos.",
      fecha: "5 Mar 2024",
      imagen: "https://via.placeholder.com/300x200.png?text=Gu%C3%ADa+RPA"
    },
    {
      titulo: "El Futuro del Trabajo: Humanos y Máquinas Colaborando",
      resumen: "Cómo la sinergia entre empleados y tecnología está redefiniendo el lugar de trabajo.",
      fecha: "1 Mar 2024",
      imagen: "https://via.placeholder.com/300x200.png?text=Futuro+del+Trabajo"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavigationMenuSection />
      <main className="flex-grow">
        <section className="bg-lila text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Blog de Conecta PRO</h1>
            <p className="text-xl mb-8">
              Insights, tendencias y consejos sobre automatización y tecnología empresarial
            </p>
          </div>
        </section>
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {posts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={post.imagen} alt={post.titulo} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-lila mb-2">{post.titulo}</h2>
                  <p className="text-gray-600 text-sm mb-4">{post.fecha}</p>
                  <p className="text-gray-700 mb-4">{post.resumen}</p>
                  <a href="#" className="text-rosa font-semibold hover:underline">Leer más →</a>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-purpura text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Suscríbete a Nuestro Newsletter</h2>
            <p className="text-xl mb-8">
              Recibe las últimas noticias y artículos directamente en tu bandeja de entrada.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none"
                />
                <button className="bg-rosa text-white px-6 py-2 rounded-r-lg hover:bg-rosa/90 transition duration-300">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};
