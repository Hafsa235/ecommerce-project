'use client';

import { useCartStore } from '@/lib/cart-store';

export default function MiniCart() {
  const cart = useCartStore((state) => state.cart);
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-md shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-3">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">{item.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  ${item.price.toFixed(2)} × {item.quantity}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <button
                    onClick={() => decrementQuantity(item.id)}
                    className="px-2 py-1 bg-gray-700 text-white rounded hover:bg-gray-600"
                  >
                    −
                  </button>
                  <span className="text-white">{item.quantity}</span>
                  <button
                    onClick={() => incrementQuantity(item.id)}
                    className="px-2 py-1 bg-gray-700 text-white rounded hover:bg-gray-600"
                  >
                    +
                  </button>
                </div>
              </div>
              <p className="font-semibold text-gray-800 dark:text-white">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          <hr className="my-4 border-gray-400" />
          <div className="text-right font-bold text-lg text-gray-900 dark:text-white">
            Total: ${total}
          </div>
        </div>
      )}
    </div>
  );
}
