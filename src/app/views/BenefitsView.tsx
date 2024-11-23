import React from "react";
import iconBenefits from "@/app/assets/dto/BenefitsDTO";

export default function BenefitsView() {
    return (
        <div className="p-8 pt-0 mb-6 bg-gradient-to-b from-black via-[#0B0D26] to-[#12213B] text-white">
            <main className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Coluna Mentor */}
                    <div>
                        <p className="text-3xl font-bold text-center">Benefícios para o</p>
                        <p className="text-3xl font-bold text-center mb-10 text-orange-400">Mentor</p>
                        <div className="space-y-12">
                            {iconBenefits.slice(0, 4).map((benefit, index) => (
                                <div key={index} className="flex flex-col items-center text-center">
                                    <img
                                        src={benefit.src.src}
                                        alt={benefit.description}
                                        className="w-24 h-24 mb-4"
                                    />
                                    <p className="text-2xl">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Coluna Mentorado */}
                    <div>
                        <p className="text-3xl font-bold text-center">Benefícios para o</p>
                        <p className="text-3xl font-bold text-center mb-10 text-blue-400">Mentorado</p>
                        <div className="space-y-12">
                            {iconBenefits.slice(4).map((benefit, index) => (
                                <div key={index} className="flex flex-col items-center text-center">
                                    <img
                                        src={benefit.src.src}
                                        alt={benefit.description}
                                        className="w-24 h-24 mb-6"
                                    />
                                    <p className="text-2xl">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
