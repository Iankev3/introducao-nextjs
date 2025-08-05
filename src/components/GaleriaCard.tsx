type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
};

export default function Card({ title, description, imageUrl, category }: CardProps) {
  return (
    <div className="max-w-sm bg-blue-600 rounded-2xl shadow-lg m-4">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-t-2xl"
      />
      <div className="p-4">
        <h1 className="text-xl font-bold mb-2 text-center text-black">{title}</h1>
        <p className="text-base mb-2 text-center text-black">{description}</p>
        <p className="text-sm font-semibold text-center text-white bg-black bg-opacity-50 rounded px-2 inline-block">
          {category}
        </p>
      </div>
    </div>
  );
}
