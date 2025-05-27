import React from "react";
import { Button } from "../../../../components/ui/button";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="w-full bg-black py-16 relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="relative">
          <img
            className="h-[387px] w-auto object-contain"
            alt="Design illustration"
            src="https://c.animaapp.com/mb5qod9tByWyXj/img/dise-o-sin-t-tulo--5--1.png"
          />
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
