'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch('/mock-products.json')
      .then((res) => res.json())
      .then((data: Product[]) => {
        const found = data.find((p) => p.id === id);
        setProduct(found ?? null);
      });
  }, [id]);

  if (!product) {
    return <div className="p-6 text-red-500">❌ Product not found.</div>;
  }

  return (
    <div className="p-6 max-w-xl mx-auto text-white">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-300 mb-4">{product.description}</p>
      <p className="text-green-400 font-bold text-lg">${product.price}</p>
    </div>
  );
}
