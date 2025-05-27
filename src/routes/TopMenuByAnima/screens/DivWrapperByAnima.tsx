import React from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "../components/ui/navigation-menu";

export const DivWrapperByAnima = (): JSX.Element => {
    // Navigation menu items
    const menuItems = [
        "Quiénes somos",
        "Servicios",
        "Precios",
        "Blog",
        "Contacto",
    ];

    // Social media items with their icons and labels
    const socialMediaItems = [
        {
            name: "Instagram",
            icon: "https://c.animaapp.com/mb5quo92dUPiZg/img/instagram.svg",
            left: "1048px",
            labelLeft: "1030px",
        },
        {
            name: "Facebook",
            icon: "https://c.animaapp.com/mb5quo92dUPiZg/img/facebook.svg",
            left: "1150px",
            labelLeft: "1132px",
        },
        {
            name: "WhatsApp",
            icon: "https://c.animaapp.com/mb5quo92dUPiZg/img/whatsapp.svg",
            left: "1251px",
            labelLeft: "1231px",
        },
        {
            name: "Email",
            icon: "https://c.animaapp.com/mb5quo92dUPiZg/img/sms.svg",
            left: "1352px",
            labelLeft: "1350px",
        },
    ];

    return (
        <footer className="relative w-full max-w-[1440px] h-[187px] bg-lila">
            <div className="absolute top-[67px] left-[503px] flex items-center gap-2 w-[206px] h-[31px]">
                <img
                    className="w-[29px] h-[29px]"
                    alt="Flash circle"
                    src="https://c.animaapp.com/mb5quo92dUPiZg/img/flash-circle.svg"
                />
                <div className="[font-family:'Manrope',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[normal]">
                    Conecta PRO
                </div>
            </div>

            <img
                className="absolute w-[276px] h-[116px] top-[41px] left-[113px] object-cover"
                alt="Image"
                src="https://c.animaapp.com/mb5quo92dUPiZg/img/image-2.png"
            />

            <NavigationMenu className="absolute top-[29px] left-[803px]">
                <NavigationMenuList className="flex flex-col items-start gap-3 px-4 py-[3px]">
                    {menuItems.map((item, index) => (
                        <NavigationMenuItem key={index}>
                            <NavigationMenuLink className="relative w-fit font-caption-inter-light font-[number:var(--caption-inter-light-font-weight)] text-white text-[length:var(--caption-inter-light-font-size)] text-center tracking-[var(--caption-inter-light-letter-spacing)] leading-[var(--caption-inter-light-line-height)] [font-style:var(--caption-inter-light-font-style)]">
                                {item}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>

            {socialMediaItems.map((item, index) => (
                <React.Fragment key={index}>
                    <img
                        className={`absolute w-[30px] h-[30px] top-[70px] left-[${item.left}]`}
                        alt={item.name}
                        src={item.icon}
                    />
                    <div
                        className={`absolute h-[17px] top-[101px] left-[${item.labelLeft}] font-caption-inter-light font-[number:var(--caption-inter-light-font-weight)] text-white text-[length:var(--caption-inter-light-font-size)] text-center tracking-[var(--caption-inter-light-letter-spacing)] leading-[var(--caption-inter-light-line-height)] [font-style:var(--caption-inter-light-font-style)]`}
                    >
                        {item.name}
                    </div>
                </React.Fragment>
            ))}
        </footer>
    );
};
