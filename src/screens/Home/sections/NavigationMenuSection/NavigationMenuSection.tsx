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
  // Navigation menu items data
  const menuItems = [
    { label: "Quiénes somos", href: "#" },
    { label: "Planes", href: "/planes" },
    { label: "Precios", href: "#" },
    { label: "Contacto", href: "#" },
  ];

  return (
    <header className="w-full h-[72px] bg-lila flex items-center justify-between px-6">
      {/* Logo and Brand Name */}
      <div className="flex items-center gap-2">
        <ZapIcon className="w-[29px] h-[29px] text-blanco" />
        <div className="font-['Manrope',Helvetica] font-bold text-blanco text-2xl">
          Conecta PRO
        </div>
      </div>

      {/* Navigation Menu */}
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="flex gap-10">
          {menuItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                href={item.href}
                className="font-body-inter-semibold text-blanco text-[length:var(--body-inter-semibold-font-size)] tracking-[var(--body-inter-semibold-letter-spacing)] leading-[var(--body-inter-semibold-line-height)]"
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* CTA Button */}
      <Link to="/planes">
        <Button className="bg-rosa text-blanco h-10 w-40 rounded-md font-body-inter-semibold text-[length:var(--body-inter-semibold-font-size)] tracking-[var(--body-inter-semibold-letter-spacing)] leading-[var(--body-inter-semibold-line-height)]">
          Empezar ahora
        </Button>
      </Link>
    </header>
  );
};
