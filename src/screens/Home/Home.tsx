import React from "react";
import { Link } from "react-router-dom";
import { AboutUsSection } from "./sections/AboutUsSections/AboutUsSection";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { NavigationMenuSection } from "./sections/NavigationMenuSection/NavigationMenuSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";

export const Home = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <NavigationMenuSection />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutUsSection />
        <CallToActionSection />
      </main>
      <FooterSection />
      <div className="fixed bottom-4 right-4">
        <Link to="/precios">
          <button className="bg-rosa hover:bg-rosa/90 text-white w-40 h-10 rounded-md font-body-inter-semibold text-[length:var(--body-inter-semibold-font-size)] tracking-[var(--body-inter-semibold-letter-spacing)] leading-[var(--body-inter-semibold-line-height)] [font-style:var(--body-inter-semibold-font-style)]">
            Precios
          </button>
        </Link>
      </div>
    </div>
  );
};
