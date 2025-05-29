import { ZapIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const NavigationMenuSection = (): JSX.Element => {
  const menuItems = [
    { label: "Quiénes somos", to: "/quienes-somos" },
    { label: "Precios", to: "/precios" },
    { label: "Contacto", to: "/contacto" },
  ];

  return (
    <header className="w-full h-[72px] bg-lila flex items-center justify-between px-6">
      <Link to="/" className="flex items-center gap-2">
        <ZapIcon className="w-[29px] h-[29px] text-blanco" />
        <div className="font-['Manrope',Helvetica] font-bold text-blanco text-2xl">
          Conecta PRO
        </div>
      </Link>

      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="flex gap-10">
          {menuItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <Link
                to={item.to}
                className="font-body-inter-semibold text-blanco text-[length:var(--body-inter-semibold-font-size)] tracking-[var(--body-inter-semibold-letter-spacing)] leading-[var(--body-inter-semibold-line-height)]"
              >
                {item.label}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <a
        href="https://wa.me/65392746"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="bg-rosa text-blanco h-10 w-40 rounded-md font-body-inter-semibold text-[length:var(--body-inter-semibold-font-size)] tracking-[var(--body-inter-semibold-letter-spacing)] leading-[var(--body-inter-semibold-line-height)]">
          Empezar ahora
        </Button>
      </a> 
    </header>
  );
};
