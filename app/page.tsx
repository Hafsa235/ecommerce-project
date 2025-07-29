'use client';

import { useEffect, useState } from 'react';
import ProductItem from '@/components/ProductItem';
import { useCartStore } from '@/lib/cart-store';

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);

  const total = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  useEffect(() => {
    fetch('/mock-products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !address || !phone) {
      alert('Please fill all the details');
      return;
    }
    setOrderPlaced(true);
    clearCart();
    setName('');
    setAddress('');
    setPhone('');
  };

  return (
    <main className="p-6 max-w-6xl mx-auto space-y-10">
      {/* Product Grid */}
      <section>
        <h1 className="text-2xl font-bold mb-4 text-white">🛍️ Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Cart */}
      <section className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">🛒 Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-300">Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b border-gray-300 dark:border-gray-700 py-2"
              >
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">{item.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    ${item.price} × {item.quantity}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decrementQuantity(item.id)}
                    className="bg-gray-300 text-black px-2 rounded hover:bg-gray-400"
                  >
                    −
                  </button>
                  <span className="text-lg font-semibold dark:text-white">{item.quantity}</span>
                  <button
                    onClick={() => incrementQuantity(item.id)}
                    className="bg-gray-300 text-black px-2 rounded hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>

                <p className="font-semibold text-gray-900 dark:text-white">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}

            <div className="text-right font-bold text-lg mt-4 text-gray-900 dark:text-white">
              Total: ${total}
            </div>
          </div>
        )}
      </section>

      {/* Checkout */}
      <section className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">📝 Checkout</h2>

        {orderPlaced ? (
          <div className="p-4 bg-green-100 text-green-700 font-medium rounded">
            ✅ Order placed successfully!
          </div>
        ) : (
          <form onSubmit={handlePlaceOrder} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
            />
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
            />
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
            />
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded"
            >
              Place Order
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
