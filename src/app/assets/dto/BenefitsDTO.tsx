import { StaticImageData } from "next/image";
import growth from "../icon/growth-b.png";
import network from "../icon/networking-b.png";
import exchange from "../icon/exchange-b.png";
import social from "../icon/social-b.png";
import experience from "../icon/experience-b.png";
import hability from "../icon/hability-b.png";
import improvement from "../icon/improvement-b.png";
import starb from "../icon/star-b.png";

interface Benefit {
    description: string;
    src: StaticImageData;
}

const iconBenefits: Benefit[] = [
    {
        src: starb,
        description: "Desenvolvimento de Habilidades de Liderança e Comunicação",
    },
    {
        src: social,
        description: "Impacto Social Positivo",
    },
    {
        src: improvement,
        description: "Aprimoramento do Conhecimento",
    },
    {
        src: exchange,
        description: "Troca de experiências e Perspectivas",
    },
    {
        src: experience,
        description: "Acesso a conhecimento e Experiência",
    },
    {
        src: hability,
        description: "Desenvolvimento de Habilidades",
    },
    {
        src: network,
        description: "Ampliação de Networking",
    },
    {
        src: growth,
        description: "Acesso a Oportunidades de Crescimento",
    },
];

export default iconBenefits;
