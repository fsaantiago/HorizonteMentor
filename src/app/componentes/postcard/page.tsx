interface PostCardProps {
    title: string;
    description: string;
    author: string;
    date: string;
    comments: number;
    image: string;
}

export default function PostCard({
                                     title,
                                     description,
                                     author,
                                     date,
                                     comments,
                                     image,
                                 }: PostCardProps) {
    return (
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-400 mb-4">{description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{author}</span>
                    <span>{date}</span>
                    <span>{comments} comentários</span>
                </div>
            </div>
        </div>
    );
}
