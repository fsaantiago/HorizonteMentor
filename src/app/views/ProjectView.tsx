'use client';

import React from 'react';
import Image from 'next/image';
import topImage from '@/app/assets/img/project-bg.png';

export default function ProjectView () {
    return (
        <div>
            {/* Imagem de topo */}
            <section className="relative">
                <Image
                    src={topImage}
                    alt="Aglomerado da Serra"
                    className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-white px-8 text-left mr-[900px] mb-10 w-[1233px] h-[177px]">
                        Transformando vidas e construindo oportunidades no Aglomerado da Serra, conectando mentores voluntários com aqueles que buscam um futuro melhor.
                    </h1>
                </div>
            </section>

            {/* Conteúdo */}
            <section className="bg-black text-white py-12 px-6 lg:px-32">
                {/* Título Sobre */}
                <div className="mb-16">
                    <h2 className="text-4xl lg:text-4xl font-bold text-blue-400 mb-4">Sobre</h2>
                    <p className="text-2xl leading-relaxed">
                        Nosso projeto de mentoria online nasceu com o propósito de promover o desenvolvimento pessoal e profissional de pessoas de baixa renda, conectando-as a mentores experientes de diversas áreas. Oferecemos orientação gratuita em um ambiente colaborativo e acessível, visando capacitar e auxiliar os mentorados na conquista de seus objetivos.
                    </p>
                    <p className="text-2xl leading-relaxed mt-4">
                        Acreditamos que o conhecimento e a experiência compartilhados são ferramentas poderosas de transformação. Nossa plataforma cria oportunidades para quem deseja se aprimorar, fornecendo suporte personalizado, independente de limitações financeiras. Aqui, mentores voluntários dedicam seu tempo e expertise para impactar positivamente a vida de quem busca uma chance de crescimento.
                    </p>
                </div>

                {/* Sessão de mentoria */}
                <div className="mb-16">
                    <h2 className="text-4xl lg:text-3xl font-bold text-blue-400 mb-4">Sessão de mentoria</h2>
                    <p className="text-2xl leading-relaxed">
                        O mentorado poderá discutir seus desafios, compartilhar suas ideias e receber feedback direcionado do mentor. Esse processo de troca é fundamental para o desenvolvimento de novas habilidades e para a definição mais clara de seus objetivos futuros. Graças à flexibilidade proporcionada pela tecnologia, as sessões de mentoria são realizadas 100% online, permitindo uma interação mais prática e eficiente. Os mentores têm a liberdade de escolher a plataforma digital que melhor se adapta ao seu estilo de trabalho, tornando o acompanhamento ainda mais acessível.
                    </p>
                </div>

                {/* Mentoria voluntária */}
                <div className="mb-16">
                    <h2 className="text-4xl lg:text-4xl font-bold text-blue-400 mb-4">Mentoria voluntária</h2>
                    <p className="text-2xl leading-relaxed">
                        A mentoria voluntária oferece uma chance valiosa para quem deseja aprimorar suas habilidades e expandir suas oportunidades, tanto na carreira quanto na vida pessoal. Nosso projeto busca criar um ambiente colaborativo, onde o respeito e a troca de conhecimento são fundamentais, incentivando a formação de profissionais mais preparados e comprometidos com um futuro melhor.
                    </p>
                </div>

                {/* Custo da mentoria */}
                <div>
                    <h2 className="text-4xl lg:text-4xl font-bold text-blue-400 mb-4">Custo da mentoria</h2>
                    <p className="text-2xl leading-relaxed">
                        As sessões de mentoria são oferecidas de forma gratuita por mentores voluntários que dedicam seu tempo e experiência ao desenvolvimento dos mentorados. No entanto, é essencial que mentor e mentorado assumam um compromisso mútuo, especialmente em relação ao tempo investido pelo mentor. A mentoria é uma via de mão dupla, onde ambos se beneficiam por meio da troca de experiências e da dedicação compartilhada.
                    </p>
                </div>
            </section>
        </div>
    );
};
