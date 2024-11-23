'use client';
import Image from "next/image";
import beatriz from "@/app/assets/mentor/beatriz-pinto.png";
import kaue from "@/app/assets/mentor/kaue-dias.png";
import marina from "@/app/assets/mentor/marina-oliveira.png";
import murilo from "@/app/assets/mentor/murilo-pereira.png";
import leonardo from "@/app/assets/mentor/leonardo-alves.png";
import maria from "@/app/assets/mentor/maria-silva.png";
import rafaela from "@/app/assets/mentor/rafaela-cardoso.png";
import online from "@/app/assets/icon/online.png";
import offline from "@/app/assets/icon/offline.png";

const dummyMentors = [
    {
        id: 1,
        name: "Maria Teresa da Silva",
        profession: "Gestão de comunicação",
        skills: ["Análise de Dados e Métricas", "Gestão de Marca (Branding)"],
        status: "Online",
        image: maria,
    },
    {
        id: 2,
        name: "Rafaela Carvalho Cardoso",
        profession: "Especialista em Desenvolvimento Pessoal",
        skills: ["Gestão de Tempo", "Mindset de Crescimento"],
        status: "Online",
        image: rafaela,
    },
    {
        id: 3,
        name: "Leonardo Goncalves Alves",
        profession: "Senior Program Manager",
        skills: ["Visão Estratégica", "Conhecimento de Metodologias Ágeis", "Mentoria e Coaching"],
        status: "Offline",
        image: leonardo,
    },
    {
        id: 4,
        name: "Beatriz Castro Pinto",
        profession: "Global Product Owner",
        skills: ["Criatividade e Inovação", "Mindset de Crescimento", "Priorização de Backlog"],
        status: "Online",
        image: beatriz,
    },
    {
        id: 5,
        name: "Kauê Alves Dias",
        profession: "Gerente Criativo Dinâmico",
        skills: ["Criatividade e Inovação", "Mindset de Crescimento", "Priorização de Backlog"],
        status: "Online",
        image: kaue,
    },
    {
        id: 6,
        name: "Marina Azevedo Oliveira",
        profession: "Mentora de Desenvolvimento Bem-Estar Feminino",
        skills: ["Mentora e Desenvolvimento de Talentos", "Soluções Ágeis", "Gestão de Projetos"],
        status: "Online",
        image: marina,
    },
    {
        id: 7,
        name: "Murilo Ribeiro Pereira",
        profession: "Mentor, Consultor e Estrategista Digital",
        skills: ["Visão Estratégica", "Comunicação Eficaz", "Gestão de Tempo"],
        status: "Online",
        image: murilo,
    },
];

export default function MentorsView() {
    return (
        <div>
            <main className="bg-[#0F0F0F] text-white px-8 py-12">
                <h1 className="text-4xl font-bold mb-6 text-white">Lista de Mentores</h1>

                {/* Barra de busca */}
                <div className="flex justify-between items-center bg-[#1B1610] px-6 py-4 rounded-md mb-8">
                    <input
                        type="text"
                        placeholder="Buscar"
                        className="w-full px-4 py-2 bg-[#262626] text-white placeholder-gray-400 rounded-l-md focus:outline-none"
                    />
                    <button className="bg-[#2D2D2D] px-4 py-2 rounded-r-md text-white hover:bg-blue-500">
                        Filtrar
                    </button>
                </div>

                {/* Lista de mentores */}
                <div className="flex flex-col space-y-6 items-center">
                    {dummyMentors.map((mentor) => (
                        <div
                            key={mentor.id}
                            className="flex items-center bg-[#1E2D3D] p-8 rounded-md shadow-lg w-[1000px]"
                        >
                            <Image
                                src={mentor.image}
                                alt={mentor.name}
                                className="w-32 h-32 rounded-full mr-4 object-cover"
                            />
                            <div className="flex-1">
                                <h2 className="text-lg font-bold">{mentor.name}</h2>
                                <p className="text-sm text-gray-300">{mentor.profession}</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {mentor.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="text-xs bg-[#374151] text-gray-200 px-2 py-1 rounded-md"
                                        >
                            {skill}
                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col items-end">
                                <div className="flex items-center mb-4">
                                    {/* Imagem da bolinha */}
                                    <Image
                                        src={mentor.status === "Online" ? online : offline}
                                        alt={mentor.status}
                                        className="w-4 h-4 mr-2"
                                    />
                                    <span
                                        className={`text-md font-semibold ${
                                            mentor.status === "Online" ? "text-green-400" : "text-gray-400"
                                        }`}
                                    >
            {mentor.status}
        </span>
                                </div>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-6">
                                    Conectar
                                </button>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Paginação */}
                <div className="flex justify-center items-center mt-8 space-x-2">
                    {[1].map((page) => (
                        <button
                            key={page}
                            className={`w-8 h-8 flex items-center justify-center rounded-md ${
                                page === 1
                                    ? "bg-blue-500 text-white"
                                    : "bg-[#2D2D2D] text-gray-400 hover:bg-blue-500 hover:text-white"
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                    <span className="text-gray-400">...</span>
                </div>
            </main>
        </div>
    );
}
