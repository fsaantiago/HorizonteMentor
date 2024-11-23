import React from "react";
import cardFeedback from "@/app/assets/card/cardfeedback.png";
import userIcon from "@/app/assets/icon/user-sm.png";
import calendarIcon from "@/app/assets/icon/calendar-sm.png";

interface Testimony {
    name: string;
    date: string;
    message: string;
}

const testimonies: Testimony[] = [
    {
        name: "Ana Clara",
        date: "09 de outubro, 2024",
        message:
            '"A mentoria foi um divisor de águas para mim. Recebi orientação valiosa, ganhei confiança e consegui clareza sobre meus objetivos. Sou muito grato pela oportunidade de aprender com alguém tão experiente."',
    },
    {
        name: "Paula Castro",
        date: "14 de outubro, 2024",
        message:
            '"A mentoria me ajudou a enxergar novas possibilidades e a acreditar no meu potencial. Com o apoio do meu mentor, consegui direcionar minha carreira e alcançar resultados que antes pareciam distantes."',
    },
    {
        name: "Cesar Falcão",
        date: "29 de outubro, 2024",
        message:
            '"Ter um mentor foi essencial para meu crescimento. As dicas práticas e o suporte me fizeram evoluir muito mais rápido do que eu imaginava. Foi uma experiência transformadora."',
    },
];

export default function TestimonyView() {
    return (
        <div className="bg-black py-12 text-white">
            <div className="max-w-6xl mx-auto px-4">
                {/* Título da seção */}
                <h1 className="text-[54px] font-bold text-center mb-12">Depoimentos</h1>

                {/* Grid flexível */}
                <div className="space-y-12">
                    {testimonies.map((testimony, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col justify-between rounded-lg shadow-lg bg-no-repeat bg-cover ${
                                index % 2 === 0 ? "mr-auto lg:ml-[-100px]" : "ml-auto lg:mr-[-100px]"
                            }`}
                            style={{
                                backgroundImage: `url(${cardFeedback.src})`,
                                width: "756px",
                                height: "513px",
                            }}
                        >
                            {/* Mensagem */}
                            <div className="p-4">
                                <p className="pt-[90px] pl-[90px] pr-[90px] text-[24px] text-center font-medium mb-2 leading-relaxed">
                                    {testimony.message}
                                </p>
                            </div>

                            {/* Informações do usuário */}
                            <div className="flex items-center justify-left px-10 py-12">
                                <div className="flex items-center space-x-2 mr-8">
                                    {/* Ícone de usuário */}
                                    <img src={userIcon.src} alt="User" className="w-10 h-10" />
                                    <span className="font-bold text-[24px]">{testimony.name}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    {/* Ícone de calendário */}
                                    <img src={calendarIcon.src} alt="Calendar" className="w-10 h-10" />
                                    <span className="text-[24px] font-bold">{testimony.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


