import { ZapIcon } from "lucide-react";
import React from "react";
import { Button } from "../components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "../components/ui/navigation-menu";

export const TopMenuByAnima = (): JSX.Element => {
    // Navigation menu items data
    const menuItems = [
        { label: "Quiénes somos", href: "#" },
        { label: "Planes", href: "#" },
        { label: "Precios", href: "#" },
        { label: "Contacto", href: "#" },
    ];

    return (
        <header className="w-full h-[72px] bg-lila flex items-center justify-between px-6">
            {/* Logo and brand name */}
            <div className="flex items-center gap-2">
                <ZapIcon className="w-[29px] h-[29px] text-blanco" />
                <h1 className="font-['Manrope',Helvetica] font-bold text-blanco text-2xl">
                    Conecta PRO
                </h1>
            </div>

            {/* Navigation menu */}
            <NavigationMenu className="hidden md:flex">
                <NavigationMenuList className="flex gap-10">
                    {menuItems.map((item, index) => (
                        <NavigationMenuItem key={index}>
                            <NavigationMenuLink
                                href={item.href}
                                className="font-body-inter-semibold text-blanco text-[length:var(--body-inter-semibold-font-size)] tracking-[var(--body-inter-semibold-letter-spacing)] leading-[var(--body-inter-semibold-line-height)] [font-style:var(--body-inter-semibold-font-style)]"
                            >
                                {item.label}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>

            {/* Call to action button */}
            <Button className="bg-rosa hover:bg-rosa/90 w-40 h-10 rounded-md text-blanco font-body-inter-semibold text-[length:var(--body-inter-semibold-font-size)] tracking-[var(--body-inter-semibold-letter-spacing)] leading-[var(--body-inter-semibold-line-height)] [font-style:var(--body-inter-semibold-font-style)]">
                Empezar ahora
            </Button>
        </header>
    );
};
