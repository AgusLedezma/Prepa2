import React from "react";
import { Button } from "../../../../components/ui/button";
import videoSrc from "../../../../assets/robotCiudad.mp4";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[450px] bg-lila flex">
      {/* Left content */}
      <div className="flex flex-col justify-between py-10 px-[60px] w-full max-w-[639px]">
        {/* Heading with colored text */}
        <h1 className="font-h1-manrope-bold text-[length:var(--h1-manrope-bold-font-size)] tracking-[var(--h1-manrope-bold-letter-spacing)] leading-[var(--h1-manrope-bold-line-height)] [font-style:var(--h1-manrope-bold-font-style)] font-[number:var(--h1-manrope-bold-font-weight)]">
          <span className="text-[#b76dfb]">Automatizá</span>
          <span className="text-white"> tu trabajo digital con </span>
          <span className="text-[#ff009a]">inteligencia</span>
          <span className="text-white"> artificial.</span>
        </h1>

        {/* Features list */}
        <div className="font-body-inter-semibold text-white text-[length:var(--body-inter-semibold-font-size)] tracking-[var(--body-inter-semibold-letter-spacing)] leading-[var(--body-inter-semibold-line-height)] [font-style:var(--body-inter-semibold-font-style)] font-[number:var(--body-inter-semibold-font-weight)] mt-auto mb-6">
          Automatización de procesos digitales
          <br />
          Creación de chatbots personalizados
          <br />
          Integraciones con herramientas (Google, WhatsApp, Excel, etc.)
        </div>

        {/* CTA Button */}
        <Button className="bg-rosa hover:bg-rosa/90 text-white w-40 h-10 rounded-md font-body-inter-semibold text-[length:var(--body-inter-semibold-font-size)] tracking-[var(--body-inter-semibold-letter-spacing)] leading-[var(--body-inter-semibold-line-height)] [font-style:var(--body-inter-semibold-font-style)] font-[number:var(--body-inter-semibold-font-weight)]">
          Empezar ahora
        </Button>
      </div>

      {/* Right image */}
      <div className="relative flex-1">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      </div>
    </section>
  );
};
