'use client';

import React from 'react';
import Link from 'next/link';
import { useCartStore } from '@/lib/cart-store';

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

interface Props {
  product: Product;
}

const ProductItem: React.FC<Props> = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white dark:bg-gray-800">
      {/* Link wrapping image */}
      <Link href={`/product/${product.id}`}>
  <img
    src={product.image}
    alt={product.name}
    className="w-full h-48 object-cover rounded"
  />
</Link>

<Link href={`/product/${product.id}`}>
  <h2 className="text-lg font-semibold mt-2 hover:underline cursor-pointer">
    {product.name}
  </h2>
</Link>

      <p className="text-gray-500 text-sm dark:text-gray-300">{product.description}</p>
      <p className="font-bold text-blue-600 mt-1">${product.price}</p>

      <button
        onClick={() =>
          addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
          })
        }
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
