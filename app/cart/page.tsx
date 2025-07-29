'use client';

import { useCartStore } from '@/lib/cart-store';

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  console.log('CART CONTENTS:', cart); 
  
  return (
    <div style={{ padding: '1.5rem' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: '1px solid #ccc',
                paddingBottom: '0.5rem',
                marginBottom: '0.5rem',
              }}
            >
              <div>
                <p style={{ fontWeight: '600' }}>{item.name}</p>
                <p style={{ fontSize: '0.875rem', color: '#666' }}>
                  ${item.price} × {item.quantity}
                </p>
              </div>
              <p style={{ fontWeight: '700' }}>
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          <hr style={{ margin: '1rem 0' }} />

          <div style={{ textAlign: 'right', fontWeight: '700', fontSize: '1.125rem' }}>
            Total: ${total}
          </div>

          <button
            style={{
              marginTop: '1rem',
              backgroundColor: '#16a34a',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '0.375rem',
              cursor: 'pointer',
            }}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
