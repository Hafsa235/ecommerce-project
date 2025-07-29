This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

link:  https://ecommerce-project-ochre-psi.vercel.app/

MiniCart – Micro E-commerce Frontend

This is a minimal e-commerce frontend built using **Next.js App Router**, **TypeScript**, **Tailwind CSS**, and **Zustand**. It allows users to browse products, manage their cart with quantity controls, and complete a checkout process — all within a single responsive page.

Features
- Product listing with images and descriptions  
- Add to cart with quantity increment/decrement  
- Cart summary with real-time total calculation  
- Checkout form (name, address, phone)  
- Order success message on submission  
- Responsive UI with dark mode support  
- Global state management using Zustand  

Tech Stack
- Next.js (App Router)
- TypeScript
- Zustand
- Tailwind CSS

Folder Structure

app/
  page.tsx               
  product/[id]/page.tsx   

components/
  ProductItem.tsx
  CartItem.tsx 

lib/
  cart-store.ts

public/
  mock-products.json
```
 Completed
- Product listing & image display  
- Cart functionality with quantity controls & subtotal  
- Basic checkout form  
- Simulated order placement with confirmation message  

Known Issues
- Cart resets on refresh (no persistence)
- Product detail page `/product/[id]` not working yet
-No form validation or toast notifications
  
http://localhost:3000/
Why This Project?
This project was created as a frontend take-home to showcase:
-State management with Zustand  
-Reusable component structure  
-Clean Tailwind CSS styling  
-Thoughtful UX flow
