import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export const FrameWrapperByAnima = (): JSX.Element => {
    // Features list data for mapping
    const features = [
        "Escalabilidad ilimitada en operaciones y solicitudes",
        "Integración avanzada con WhatsApp API",
        "Almacenamiento ampliado con seguridad reforzada",
        "Soporte técnico y asesoría especializada",
    ];

    return (
        <Card className="w-[355px] p-6 mx-auto bg-blanco rounded-md shadow-[4px_4px_4px_#00000040]">
            <CardContent className="flex flex-col items-center gap-[18px] p-0">
                <div className="relative w-[50px] h-[50px] bg-rosa rounded-[25px]">
                    <img
                        className="absolute w-10 h-10 top-[5px] left-[5px]"
                        alt="Export"
                        src="https://c.animaapp.com/mb5quo92dUPiZg/img/export.svg"
                    />
                </div>

                <h3 className="self-stretch font-h3-inter-semibold font-[number:var(--h3-inter-semibold-font-weight)] text-lila text-[length:var(--h3-inter-semibold-font-size)] text-center tracking-[var(--h3-inter-semibold-letter-spacing)] leading-[var(--h3-inter-semibold-line-height)] [font-style:var(--h3-inter-semibold-font-style)]">
                    Plan Corporativo de Automatización
                </h3>

                <p className="self-stretch font-body-inter-semibold font-[number:var(--body-inter-semibold-font-weight)] text-purpura text-[length:var(--body-inter-semibold-font-size)] tracking-[var(--body-inter-semibold-letter-spacing)] leading-[var(--body-inter-semibold-line-height)] [font-style:var(--body-inter-semibold-font-style)]">
                    Soluciones inteligentes de automatización a gran escala.
                </p>

                <h3 className="self-stretch font-h3-inter-semibold font-[number:var(--h3-inter-semibold-font-weight)] text-rosa text-[length:var(--h3-inter-semibold-font-size)] text-center tracking-[var(--h3-inter-semibold-letter-spacing)] leading-[var(--h3-inter-semibold-line-height)] [font-style:var(--h3-inter-semibold-font-style)]">
                    Cotización
                    <br />
                    personalizada
                </h3>

                <div className="self-stretch font-body-inter-semibold font-[number:var(--body-inter-semibold-font-weight)] text-gris text-[length:var(--body-inter-semibold-font-size)] tracking-[var(--body-inter-semibold-letter-spacing)] leading-[var(--body-inter-semibold-line-height)] [font-style:var(--body-inter-semibold-font-style)]">
                    {features.map((feature, index) => (
                        <div key={index}>
                            √ {feature}&nbsp;&nbsp; {index < features.length - 1 && <br />}
                        </div>
                    ))}
                </div>

                <Button className="w-40 h-10 bg-lila text-blanco font-body-inter-semibold font-[number:var(--body-inter-semibold-font-weight)] text-[length:var(--body-inter-semibold-font-size)] tracking-[var(--body-inter-semibold-letter-spacing)] leading-[var(--body-inter-semibold-line-height)] [font-style:var(--body-inter-semibold-font-style)]">
                    Contáctanos
                </Button>
            </CardContent>
        </Card>
    );
};
