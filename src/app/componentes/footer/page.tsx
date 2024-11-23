import React from "react";
import Image from "next/image";
import logo from "@/app/assets/logo/logo-lg.png"; // Substitua pelo caminho correto do logo
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 px-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Logo e informações */}
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <Image
                        src={logo}
                        alt="Logo Horizonte Mentor"
                        width={124}
                        height={124}
                        className="object-contain"
                    />
                    <span className="text-md pl-8 md:text-sm">
            © 2024 - Horizonte Mentor
          </span>
                </div>

                {/* Links do footer */}
                <div className="flex flex-wrap justify-around space-x-4 text-sm md:text-base mb-4 md:mb-0">
                    <a href="#" className="hover:underline">
                        Política de Privacidade
                    </a>
                    <a href="#" className="hover:underline">
                        Termos de Serviço
                    </a>
                    <a href="#" className="hover:underline">
                        Suporte
                    </a>
                </div>

                {/* Redes sociais */}
                <div className="text-center">
                    <p className="mb-2 text-sm md:text-base">
                        Siga nas redes sociais e fique por dentro
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a
                            href="#"
                            className="hover:text-gray-400 transition-colors"
                            aria-label="Instagram"
                        >
                            <FaInstagram size={24} />
                        </a>
                        <a
                            href="#"
                            className="hover:text-gray-400 transition-colors"
                            aria-label="Facebook"
                        >
                            <FaFacebook size={24} />
                        </a>
                        <a
                            href="#"
                            className="hover:text-gray-400 transition-colors"
                            aria-label="YouTube"
                        >
                            <FaYoutube size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
