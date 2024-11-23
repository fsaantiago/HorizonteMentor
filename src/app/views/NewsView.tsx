'use client';
import Navbar from "../componentes/navbar/page";
import Footer from "../componentes/footer/page";
import PostCard from "../componentes/postcard/page";

const dummyPosts = [
    {
        id: 1,
        title: "As Principais Tendências de Consultoria para 2024: O Que Esperar?",
        description:
            "Análises sobre as principais mudanças no mercado de consultoria, como o uso de tecnologias emergentes (IA, automação), transformação digital nas empresas e o impacto das novas regulações econômicas.",
        author: "Marcos Ferreira",
        date: "26 de outubro de 2024",
        comments: 125,
        image: "/images/post1.jpg",
    },
    {
        id: 2,
        title: "Cursos e Treinamentos Gratuitos",
        description:
            "Lista de cursos online gratuitos voltados para consultores, como gestão de projetos, estratégia empresarial e marketing digital.",
        author: "Patricia Oliveira",
        date: "24 de outubro de 2024",
        comments: 210,
        image: "/images/post2.jpg",
    },
];

export default function NewsView() {
    return (
        <div>
            <Navbar />
            <main className="p-8 bg-black text-white">
                <h1 className="text-4xl font-bold mb-6">Novidades</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {dummyPosts.map((post) => (
                        <PostCard
                            key={post.id}
                            title={post.title}
                            description={post.description}
                            author={post.author}
                            date={post.date}
                            comments={post.comments}
                            image={post.image}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
