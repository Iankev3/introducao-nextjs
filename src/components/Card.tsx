type CardProps = {
    title: string;
    description: string;
    imageUrl: string;
}

export default function Card(props: CardProps) {
    return(
        <div className="flex justify-center items-center min-h-screen">
            <div className="max-w-sm bg-blue-600 rounded-2xl shadow-lg">
            <img src={props.imageUrl} alt={props.title} className="w-full h-48 object-cover rounded-t-2xl" />
            <div>
                <h1 className="text-xl font-bold mb-2 text-center text-black">
                    {props.title}
                </h1>
                <p className="text-xl font-bold mb-2 text-center text-black">
                    {props.description}
                </p>
            </div>
            </div>
        </div>
    )
}