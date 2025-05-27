import React from "react";
import { Button } from "../../../../components/ui/button";
import videoSrc from "../../../../assets/robotCelular.mp4"


export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="w-full bg-black py-16 relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="relative">
          <video
            className="w-full h-auto max-h-[387px] object-cover rounded-lg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="flex flex-col items-start md:max-w-[513px] space-y-12">
          <h2 className="font-h1-manrope-bold text-lila-suave text-[48px] leading-[var(--h1-manrope-bold-line-height)] tracking-[var(--h1-manrope-bold-letter-spacing)]">
            ¿Listo para dejar el trabajo repetitivo atrás?
          </h2>

          <Button className="bg-purpura hover:bg-purpura/90 text-blanco font-body-inter-semibold text-[16px] h-10 w-40">
            Automatizá ahora
          </Button>
        </div>
      </div>
    </section>
  );
};
