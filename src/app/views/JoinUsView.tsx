import React from "react";
import Image from "next/image";
import JoinUs from "@/app/assets/img/join-bd.png";

export default function JoinUsView() {
    return (
        <section
            className="relative bg-black pt-12 mb-0 text-white py-12 flex flex-col justify-between"
            style={{ paddingBottom: "285px" }}
        >
            {/* Imagem flutuante à direita */}
            <div
                className="absolute top-0 right-4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px]"
                style={{ top: "155px" }}
            >
                <Image
                    src={JoinUs}
                    alt="Background Decoration"
                    layout="fill"
                    objectFit="contain"
                    className="opacity-75"
                />
            </div>

            {/* Conteúdo principal */}
            <div className="relative max-w-6xl mx-auto px-4 text-center">
                <h2
                    className="text-3xl sm:text-5xl lg:text-5xl font-bold mb-16"
                    style={{ marginTop: "184px" }} // Define a distância do título do topo
                >
                    Junte-se a nós agora e garanta acesso exclusivo e gratuito à nossa incrível comunidade
                </h2>

                {/* Contêiner dos botões/cards */}
                <div className="flex flex-col sm:flex-row justify-center gap-8">
                    {/* Card Quero Ser Mentor */}
                    <div className="bg-gray-800 rounded-lg shadow-lg p-8 min-w-[675px] min-h-[241px] flex flex-col justify-center items-center">
                        <h3 className="text-3xl lg:text-4xl font-bold text-orange-400 mb-4">
                            QUERO SER UM MENTOR
                        </h3>
                        <p className="text-lg lg:text-2xl">
                            Inscreva-se já e tenha acesso imediato à nossa comunidade de mentores voluntários.
                        </p>
                    </div>

                    {/* Card Desejo Receber Mentoria */}
                    <div className="bg-gray-800 rounded-lg shadow-lg p-8 min-w-[675px] min-h-[241px] flex flex-col justify-center items-center">
                        <h3 className="text-3xl lg:text-4xl font-bold text-blue-400 mb-4">
                            DESEJO RECEBER MENTORIA
                        </h3>
                        <p className="text-lg lg:text-2xl">
                            Inscreva-se agora e tenha acesso gratuito à nossa comunidade de mentorados.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
