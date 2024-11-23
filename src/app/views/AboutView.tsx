import React from "react";
import Hmabout from "@/app/assets/img/about-hm.png";
import Image from "next/image";

export default function AboutView() {
    return (
        <div className="bg-black text-white min-h-screen">
            <main className="p-8 mt-[24px]">
                <h1 className="text-[50px] ml-[163px] mr-[164px] font-bold mb-6">Sobre</h1>
                <Image
                    className="absolute inset-0 from-black to-transparent mt-[740px] w-[955] h-[933]"
                    src={Hmabout}
                    alt="background"
                />
                <section className="mb-8 ml-[163px] mr-[164px] w-[1113px] h-[717px] text-left">
                    <p className="mb-8 text-[30px]">
                        Nosso projeto de mentoria online nasceu com o propósito de promover o desenvolvimento pessoal e profissional de pessoas de baixa renda, conectando-as a mentores experientes de diversas áreas. Oferecemos orientação gratuita em um ambiente colaborativo e acessível, visando capacitar e auxiliar os mentorados na conquista de seus objetivos.
                    </p>
                    <p className="mb-8 text-[30px]">
                        Acreditamos que o conhecimento e a experiência compartilhados são ferramentas poderosas de transformação. Nossa plataforma cria oportunidades para quem deseja se aprimorar, fornecendo suporte personalizado, independente de limitações financeiras.
                    </p>
                    <p className="text-[30px]">
                        Aqui, mentores voluntários dedicam seu tempo e expertise para impactar positivamente a vida de quem busca uma chance de crescimento.
                    </p>
                </section>
            </main>
        </div>
    );
}
