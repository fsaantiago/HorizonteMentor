'use client';
import Image from "next/image";
import Aluno from "../assets/img/aluno1.png";
import Mentor from "../assets/img/prof1.png";
import Pgabout from "../assets/img/about-pg.png";
import { FC } from "react";

const HomeView: FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white relative">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-75"
                style={{ backgroundImage: "url('/background-pattern.svg')" }}
            />
            <Image
                className="absolute inset-0 from-black to-transparent mt-10"
                src={Pgabout}
                alt="background"
            />

            {/* Título */}
            <h1 className="z-10 text-4xl font-bold mb-16 text-center mt-[100px]">
                Conectando saberes, transformando vidas
            </h1>

            {/* Botões e Imagens */}
            <div className="flex z-10 space-x-8 mb-16">
                {/* Card Mentor */}
                <div className="flex flex-col items-center space-y-4">
                    <Image
                        src={Mentor}
                        alt="Mentor"
                        width={341}
                        height={477}
                        className="mb-4"
                    />
                    <button className="px-8 py-3 bg-blue-600 text-white text-xl font-semibold rounded-lg w-[486px] h-[58px]">
                        Sou Mentor(a)
                    </button>
                </div>

                {/* Card Mentorado */}
                <div className="flex flex-col items-center space-y-4">
                    <Image
                        src={Aluno}
                        alt="Mentorado"
                        width={341}
                        height={425}
                        className="mb-4"
                    />
                    <button className="px-8 py-3 bg-blue-600 text-white text-xl font-semibold rounded-lg w-[486px] h-[58px]">
                        Quero mentoria
                    </button>
                </div>
            </div>

            {/* Parágrafo de Explicação */}
            <p className="z-10 text-[24px] text-center w-[80%] max-w-4xl mt-8">
                Essa iniciativa é uma ação voluntária da comunidade de mentores, oferecendo
                apoio sem nenhum custo para os mentorados. Conheça os profissionais aqui.
            </p>
        </div>
    );
};

export default HomeView;
