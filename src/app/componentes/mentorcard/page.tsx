interface MentorCardProps {
    name: string;
    profession: string;
    city: string;
    state: string;
    description: string;
    image: string;
}

export default function MentorCard({
                                       name,
                                       profession,
                                       city,
                                       state,
                                       description,
                                       image,
                                   }: MentorCardProps) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                <p className="text-sm text-gray-600">{profession}</p>
                <p className="text-sm text-gray-500">{city}, {state}</p>
                <p className="text-sm text-gray-700 mt-2">{description}</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                    Conectar
                </button>
            </div>
        </div>
    );
}
