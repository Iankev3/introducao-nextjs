"use client"
export default function ProductsPage() {
  const products = [
    { id: 1, name: "Notebook Gamer", price: 4500 },
    { id: 2, name: "Smartphone X", price: 2500 },
    { id: 3, name: "Fone de Ouvido", price: 350 },
  ];

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Lista de Produtos</h1>
      <ul className="space-y-2">
        {products.map((product) => (
          <li
            key={product.id}
            className="p-4 border rounded-lg shadow-sm bg-white"
          >
            <p className="text-lg font-medium">{product.name}</p>
            <p className="text-gray-600">Preço: R$ {product.price}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
