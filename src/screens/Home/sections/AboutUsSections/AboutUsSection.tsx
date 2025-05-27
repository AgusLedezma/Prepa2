import React from "react";
import videoSrc from "../../../../assets/personitas.mp4";


export const AboutUsSection = (): JSX.Element => {
  const contentData = {
    title: "Quiénes somos",
    sections: [
      {
        title: "Misión",
        description:"En ConectaPro S.R.L servimos a las PyMEs  cochabambinas y emprendimientos que enfrentan ineficiencias operativas, altos costos y falta de escalabilidad, ofreciendo diagnósticos ágiles y soluciones de automatización digital basadas en plataformas low-code. A través de un enfoque consultivo integral que combina un “Diagnóstico Digital Express”, implementación de “Automatización Administrativa” y despliegue de “Atención al Cliente Automatizada” acompañamos a nuestros clientes desde la identificación de sus necesidades hasta el soporte post-implementación, garantizando un rápido retorno de inversión y fomentando la adopción tecnológica sostenible.",
        align: "left",
      },
      {
        title: "Visión",
        description:"Queremos convertirnos en el socio estratégico de referencia para la transformación digital de las PyMEs en Bolivia, liderando la industria de automatización con soluciones innovadoras, asequibles y adaptadas a cada negocio. Aspiramos a cerrar la brecha tecnológica del 80 % de empresas sin herramientas digitales integradas, elevando el nivel de adopción tecnológica regional y consolidando un ecosistema de organizaciones más eficientes, competitivas y escalables.",
        align: "right",
      },
    ],
    image:
      "https://c.animaapp.com/mb5qod9tByWyXj/img/dise-o-sin-t-tulo--2--1.png",
  };

  return (
    <section className="w-full py-10 bg-[#fdfdfd] border-[0.2px] border-solid border-purpura">
      <div className="container mx-auto max-w-[1122px]">
        <h2 className="text-center font-h2-manrope-semibold text-rosa text-[32px] mb-12">
          {contentData.title}
        </h2>

        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2 space-y-12">
            {contentData.sections.map((section, index) => (
              <div
                key={index}
                className={`max-w-[251px] ${section.align === "right" ? "ml-auto mr-0 text-right" : "ml-0"}`}
              >
                <h3 className="font-h3-inter-semibold text-lila text-[24px] mb-2">
                  {section.title}
                </h3>
                <p className="font-body-inter-semibold text-gris text-[16px]">
                  {section.description}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full md:w-1/2 flex justify-end mt-6 md:mt-0">
            <video
              className="w-[600px] h-[350px] object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={videoSrc} type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};
