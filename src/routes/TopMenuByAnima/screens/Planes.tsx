import { CheckIcon } from "lucide-react";
import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export const Planes = (): JSX.Element => {
    // Plan data for the standard plan
    const standardPlanFeatures = [
        "3,000 operaciones Make por mes",
        "500 solicitudes de IA (DeepSeek)",
        "500 mensajes WhatsApp API",
        "1 GB de almacenamiento en Google Drive",
    ];

    // Plan data for the corporate plan
    const corporatePlanFeatures = [
        "Escalabilidad ilimitada en operaciones y solicitudes",
        "Integración avanzada con WhatsApp API",
        "Almacenamiento ampliado con seguridad reforzada",
        "Soporte técnico y asesoría especializada",
    ];

    return (
        <div className="relative w-full min-h-screen bg-white">
            {/* Top Navigation */}
            <header className="flex justify-between items-center px-6 h-[72px] bg-white">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-purpura rounded-full"></div>
                    </div>
                    <span className="text-lila font-bold">Conecta PRO</span>
                </div>
                <nav className="flex items-center gap-8">
                    <a href="#" className="text-lila hover:text-purpura">
                        Quiénes somos
                    </a>
                    <a href="#" className="text-lila hover:text-purpura">
                        Planes
                    </a>
                    <a href="#" className="text-lila hover:text-purpura">
                        Precios
                    </a>
                    <a href="#" className="text-lila hover:text-purpura">
                        Contacto
                    </a>
                    <Button className="bg-rosa text-white hover:bg-rosa/90">
                        Empezar ahora
                    </Button>
                </nav>
            </header>

            {/* Hero Banner */}
            <section
                className="w-full h-[180px] bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url(https://c.animaapp.com/mb5quo92dUPiZg/img/frame-10.png)",
                }}
            >
                <h1 className="w-full h-full flex items-center justify-center text-blanco font-h1-manrope-bold text-[48px] font-bold">
                    Nuestros planes para ti
                </h1>
            </section>

            {/* Pricing Cards */}
            <section className="flex justify-center gap-8 px-4 -mt-10">
                {/* Standard Plan Card */}
                <Card className="w-[400px] shadow-lg overflow-hidden">
                    <CardContent className="p-8 flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-purpura flex items-center justify-center mb-4">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"
                                    fill="white"
                                />
                                <path
                                    d="M7 12H9V17H7V12ZM11 7H13V17H11V7ZM15 9H17V17H15V9Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <h2 className="text-lila text-2xl font-h3-inter-semibold font-semibold text-center mb-2">
                            Plan Estándar de Automatización
                        </h2>
                        <p className="text-purpura text-center mb-6 text-sm">
                            Automatización simple y potente para empresas en crecimiento.
                        </p>
                        <div className="text-center mb-4">
                            <span className="text-rosa text-6xl font-bold">7000</span>
                            <p className="text-purpura">Bs / mes</p>
                        </div>
                        <div className="w-full space-y-3 mb-6">
                            {standardPlanFeatures.map((feature, index) => (
                                <div key={index} className="flex items-start gap-2">
                                    <CheckIcon className="text-purpura mt-1 h-4 w-4 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>
                        <Button className="w-full bg-lila hover:bg-lila/90 text-white">
                            Elegir este plan
                        </Button>
                    </CardContent>
                </Card>

                {/* Corporate Plan Card */}
                <Card className="w-[400px] shadow-lg overflow-hidden">
                    <CardContent className="p-8 flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-rosa flex items-center justify-center mb-4">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <h2 className="text-lila text-2xl font-h3-inter-semibold font-semibold text-center mb-2">
                            Plan Corporativo de Automatización
                        </h2>
                        <p className="text-purpura text-center mb-6 text-sm">
                            Soluciones inteligentes de automatización a gran escala.
                        </p>
                        <div className="text-center mb-4">
                            <span className="text-rosa text-2xl font-bold">
                                Cotización personalizada
                            </span>
                        </div>
                        <div className="w-full space-y-3 mb-6">
                            {corporatePlanFeatures.map((feature, index) => (
                                <div key={index} className="flex items-start gap-2">
                                    <CheckIcon className="text-rosa mt-1 h-4 w-4 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>
                        <Button className="w-full bg-lila hover:bg-lila/90 text-white">
                            Contáctanos
                        </Button>
                    </CardContent>
                </Card>
            </section>

            {/* Footer */}
            <footer className="w-full bg-lila text-white mt-20 py-10">
                <div className="container mx-auto flex justify-between items-start px-6">
                    <div className="flex items-center gap-4">
                        <img
                            src="https://c.animaapp.com/mb5quo92dUPiZg/img/universidad-catolica-boliviana.png"
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
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                                <div className="w-4 h-4 bg-purpura rounded-full"></div>
                            </div>
                            <span className="font-bold">Conecta PRO</span>
                        </div>
                        <nav className="flex flex-col gap-2">
                            <a href="#" className="hover:text-gray-300">
                                Quiénes somos
                            </a>
                            <a href="#" className="hover:text-gray-300">
                                Servicios
                            </a>
                            <a href="#" className="hover:text-gray-300">
                                Precios
                            </a>
                            <a href="#" className="hover:text-gray-300">
                                Blog
                            </a>
                            <a href="#" className="hover:text-gray-300">
                                Contacto
                            </a>
                        </nav>
                    </div>

                    <div className="flex gap-6">
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2Z"
                                    stroke="#220041"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M17.5 6.5H17.51"
                                    stroke="#220041"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                                    stroke="#220041"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                                    stroke="#220041"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                                    stroke="#220041"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M22 6L12 13L2 6"
                                    stroke="#220041"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                                    stroke="#220041"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z"
                                    fill="#220041"
                                />
                                <path
                                    d="M21 15L16 10L5 21"
                                    stroke="#220041"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
