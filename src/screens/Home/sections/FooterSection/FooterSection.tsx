import React from "react";
import { Link } from "react-router-dom";
import { FacebookIcon, InstagramIcon } from "lucide-react";
import logoUCB from "../../../../assets/ucb.png"


export const FooterSection = (): JSX.Element => {
  const navLinks = [
    { label: "Quiénes somos", to: "/quienes-somos" },
    { label: "Servicios", to: "/servicios" },
    { label: "Precios", to: "/precios" },
    { label: "Contacto", to: "/contacto" },
  ];

  const socialLinks = [
    { icon: <InstagramIcon />, url: "https://www.instagram.com/", label: "Instagram" },
    { icon: <FacebookIcon />, url: "https://www.facebook.com/", label: "Facebook" },
  ];

  return (
    <footer className="w-full bg-lila text-white py-10">
      <div className="container mx-auto flex justify-between items-start px-6">
        <div className="flex items-center gap-4">
          <img
            src={logoUCB}
            alt="Universidad Católica Boliviana"
            className="w-24 h-24 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-xs uppercase">Universidad</span>
            <span className="text-lg font-bold text-blue-300">CATÓLICA</span>
            <span className="text-xs">BOLIVIANA</span>
            <span className="text-xs">COCHABAMBA</span>
          </div>
        </div>

        <div className="flex flex-col">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-purpura rounded-full"></div>
            </div>
            <span className="font-bold">Conecta PRO</span>
          </Link>
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <Link key={index} to={link.to} className="hover:text-gray-300">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-lila hover:bg-gray-200 transition-colors"
            >
              {link.icon}
              <span className="sr-only">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
