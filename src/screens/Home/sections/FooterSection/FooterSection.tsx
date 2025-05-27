import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MessageCircleIcon,
} from "lucide-react";
import React from "react";

export const FooterSection = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    "Quiénes somos",
    "Servicios",
    "Precios",
    "Blog",
    "Contacto",
  ];

  // Social media data
  const socialMedia = [
    {
      icon: <InstagramIcon className="w-[30px] h-[30px]" />,
      label: "Instagram",
    },
    { icon: <FacebookIcon className="w-[30px] h-[30px]" />, label: "Facebook" },
    {
      icon: <MessageCircleIcon className="w-[30px] h-[30px]" />,
      label: "WhatsApp",
    },
    { icon: <MailIcon className="w-[30px] h-[30px]" />, label: "Email" },
  ];

  return (
    <footer className="w-full h-[187px] bg-lila flex items-center justify-between px-[113px]">
      {/* Logo section */}
      <div>
        <img
          className="w-[276px] h-[116px] object-cover"
          alt="University logo"
          src="https://c.animaapp.com/mb5qod9tByWyXj/img/image-2.png"
        />
      </div>

      {/* Brand section */}
      <div className="flex items-center">
        <img
          className="w-[29px] h-[29px]"
          alt="Flash circle"
          src="https://c.animaapp.com/mb5qod9tByWyXj/img/flash-circle.svg"
        />
        <div className="ml-[37px] font-['Manrope',Helvetica] font-bold text-white text-2xl">
          Conecta PRO
        </div>
      </div>

      {/* Navigation links */}
      <nav className="flex flex-col items-start gap-3 px-4 py-[3px]">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href="#"
            className="font-caption-inter-light font-[number:var(--caption-inter-light-font-weight)] text-white text-[length:var(--caption-inter-light-font-size)] text-center tracking-[var(--caption-inter-light-letter-spacing)] leading-[var(--caption-inter-light-line-height)] [font-style:var(--caption-inter-light-font-style)]"
          >
            {link}
          </a>
        ))}
      </nav>

      {/* Social media section */}
      <div className="flex gap-[50px]">
        {socialMedia.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {item.icon}
            <span className="mt-1 font-caption-inter-light font-[number:var(--caption-inter-light-font-weight)] text-white text-[length:var(--caption-inter-light-font-size)] text-center tracking-[var(--caption-inter-light-letter-spacing)] leading-[var(--caption-inter-light-line-height)] [font-style:var(--caption-inter-light-font-style)]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </footer>
  );
};
