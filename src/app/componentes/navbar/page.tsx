'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/app/assets/logo/logo-sm.png';

const NavBar = () => {
    const [active, setActive] = useState('');

    const handleClick = (section: string) => {
        setActive(section);
    };

    return (
        <nav className="bg-[#1B1610] text-white py-4 px-8">
            <div className="flex justify-between items-center mx-auto">
                {/* Logotipo */}
                <div className="flex items-center space-x-4">
                    <Image src={logo} alt="Logo" className="object-contain" />
                    <span className="text-lg font-semibold pr-14">Horizonte Mentor</span>
                </div>

                {/* Navegação */}
                <div className="flex-1 ml-8 mr-14">
                    <div className="hidden md:flex text-xl justify-start relative">
                        {[
                            { id: "pages/index", label: "Página inicial", href: "/" },
                            { id: "pages/project", label: "O Projeto", href: "/project" },
                            { id: "pages/mentors", label: "Mentores", href: "/mentors" },
                            { id: "pages/news", label: "Novidades", href: "/news" },
                        ].map((section) => (
                            <Link
                                key={section.id}
                                href={section.href}
                                className={`relative text-blue-400 mr-16 font-bold hover:text-blue-300 ${
                                    active === section.id ? "text-blue-200" : ""
                                }`}
                                onClick={() => handleClick(section.id)}
                            >
                                {section.label}
                                {/* Linha branca dinâmica */}
                                <span
                                    className={`absolute bottom-[-36px] left-0 h-[2px] w-full bg-white transition-all duration-300 ease-in-out ${
                                        active === section.id ? "scale-100" : "scale-0"
                                    }`}
                                ></span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Botões */}
                <div className="flex space-x-4">
                    <button className="text-lg font-semibold text-white px-4 py-2 bg-transparent border border-blue-400 rounded hover:bg-blue-500">
                        Entrar
                    </button>
                    <button className="text-lg font-semibold text-white px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
                        Inscrever-se
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
