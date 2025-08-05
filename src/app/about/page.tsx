import Card from "@/components/Card";

export default function About() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      <Card 
        title="burro"
        description="Burrinho fofo"
        imageUrl="https://i.pinimg.com/736x/8c/f1/12/8cf112257da05c4720c3b45bfa27d8ee.jpg"
      />

      <Card
      title="preguiça"
      description="sla kk"
      imageUrl="https://i.pinimg.com/736x/0b/b9/59/0bb959af41e87636b64e74b77ac46f62.jpg"
      />
      <Card
      title="macaquinho"
      description="cria"
      imageUrl="https://i.pinimg.com/736x/ad/11/3e/ad113e6a529f29ae0010f4154498425d.jpg"
      />
      <Card
      title="princesa"
      description="uma fofura"
      imageUrl="https://i.pinimg.com/1200x/3a/7d/e8/3a7de882cc5b1fc94e4abb7e0e0af7e7.jpg"
      />
    </div>
  );
}