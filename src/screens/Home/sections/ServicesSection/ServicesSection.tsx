import { EthernetPortIcon, RepeatIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Link } from "react-router-dom";

// Service plan data for mapping
const servicePlans = [
  {
    id: 1,
    title: "Precio Estándar de Automatización",
    description:
      "Automatizá tareas repetitivas y gestioná chats con IA de forma eficiente. Ideal para empresas en crecimiento que quieren digitalizar sus procesos sin complicaciones.",
    icon: <RepeatIcon className="w-8 h-8" />,
    iconBgColor: "bg-purpura",
  },
  {
    id: 2,
    title: "Precio Corporativo de Automatización",
    description:
      "Automatización avanzada y escalable, diseñada para grandes equipos. Integraciones personalizadas, respaldo seguro y comunicación masiva vía WhatsApp API.",
    icon: <EthernetPortIcon className="w-8 h-8" />,
    iconBgColor: "bg-rosa",
  },
];

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="w-full py-10 bg-blanco">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-center font-h2-manrope-semibold font-[number:var(--h2-manrope-semibold-font-weight)] text-lila text-[length:var(--h2-manrope-semibold-font-size)] tracking-[var(--h2-manrope-semibold-letter-spacing)] leading-[var(--h2-manrope-semibold-line-height)] [font-style:var(--h2-manrope-semibold-font-style)] mb-12">
          Nuestros precios
        </h2>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {servicePlans.map((plan) => (
            <Card
              key={plan.id}
              className="w-[332px] shadow-[4px_4px_4px_#00000080] rounded-md"
            >
              <CardContent className="flex flex-wrap items-start justify-end gap-[2px_8px] p-3">
                <div
                  className={`relative w-10 h-10 ${plan.iconBgColor} rounded-[20px] flex items-center justify-center`}
                >
                  {plan.icon}
                </div>
                <div className="flex flex-col w-[260px] items-start gap-2">
                  <h3 className="self-stretch mt-[-1.00px] font-h3-inter-semibold font-[number:var(--h3-inter-semibold-font-weight)] text-lila text-[length:var(--h3-inter-semibold-font-size)] tracking-[var(--h3-inter-semibold-letter-spacing)] leading-[var(--h3-inter-semibold-line-height)] [font-style:var(--h3-inter-semibold-font-style)]">
                    {plan.title}
                  </h3>
                  <p className="self-stretch font-body-inter-semibold font-[number:var(--body-inter-semibold-font-weight)] text-purpura text-[length:var(--body-inter-semibold-font-size)] tracking-[var(--body-inter-semibold-letter-spacing)] leading-[var(--body-inter-semibold-line-height)] [font-style:var(--body-inter-semibold-font-style)]">
                    {plan.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Link to="/planes">
          <Button className="bg-rosa text-white w-40 h-10 rounded-md font-body-inter-semibold font-[number:var(--body-inter-semibold-font-weight)] text-[length:var(--body-inter-semibold-font-size)] tracking-[var(--body-inter-semibold-letter-spacing)] leading-[var(--body-inter-semibold-line-height)] [font-style:var(--body-inter-semibold-font-style)]">
            Explorar
        </Button>
        </Link>
      </div>
    </section>
  );
};
