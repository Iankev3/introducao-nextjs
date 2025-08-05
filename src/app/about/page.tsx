// import Card from "@/components/Card";

// export default function About() {
//   return (
//     <div className="flex flex-wrap justify-center gap-6 p-6">
//       <Card 
//         title="burro"
//         description="Burrinho fofo"
//         imageUrl="https://i.pinimg.com/736x/8c/f1/12/8cf112257da05c4720c3b45bfa27d8ee.jpg"
//       />

//       <Card
//       title="preguiça"
//       description="sla kk"
//       imageUrl="https://i.pinimg.com/736x/0b/b9/59/0bb959af41e87636b64e74b77ac46f62.jpg"
//       />
//       <Card
//       title="macaquinho"
//       description="cria"
//       imageUrl="https://i.pinimg.com/736x/ad/11/3e/ad113e6a529f29ae0010f4154498425d.jpg"
//       />
//       <Card
//       title="princesa"
//       description="uma fofura"
//       imageUrl="https://i.pinimg.com/1200x/3a/7d/e8/3a7de882cc5b1fc94e4abb7e0e0af7e7.jpg"
//       />
//     </div>
//   );
// }



import Card from "@/components/GaleriaCard";

const item = [
  {
    title: "macaco",
    description: "macaquinho",
    imageUrl:
      "https://i.pinimg.com/736x/16/36/79/16367989d345b7570010f49fd2c86101.jpg",
    category: "Animal",
  },
  {
    title: "Sadman",
    description: "serie de fantasia",
    imageUrl:
      "https://i.pinimg.com/1200x/dd/3a/62/dd3a62ba1dca2a65822c48b06019d4ad.jpg",
    category: "Serie",
  },
  {
    title: "The Witcher 3",
    description: "RPG com uma história profunda e mundo aberto.",
    imageUrl:
      "https://i.pinimg.com/1200x/a6/05/0b/a6050b22888369eca9fd789f52198f23.jpg",
    category: "Jogo",
  },
  {
    title: "1984",
    description: "Distopia clássica sobre vigilância e controle.",
    imageUrl:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=400&q=80",
    category: "Livro",
  },
  {
    title: "Matrix",
    description: "Filme de ficção científica revolucionário.",
    imageUrl:
      "https://i.pinimg.com/736x/42/08/12/420812adcf6aa0e3185f09679de0355b.jpg",
    category: "Filme",
  },
  {
    title: "God of War",
    description: "Ação e mitologia em uma jornada épica.",
    imageUrl:
      "https://i.pinimg.com/736x/ce/8b/83/ce8b8349a2b94a043c2e3e2a1f2e32e4.jpg",
    category: "Jogo",
  },
];

export default function Gallery() {
  return (
    <div className="flex flex-wrap justify-center">
      {item.map((item, i) => (
        <Card
          key={i}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          category={item.category}
        />
      ))}
    </div>
  );
}
