"use client";
import React, { useState } from "react";
import ProductCart from "@/components/ProductCart";
import ShoppingCart from "@/components/ShoppingCart";

interface Product {
  id: number;
  name: string;
  price: number;
}

const Page: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const addCart = (product: Product) => {
    setCart([...cart, product]);
  };
  const removeCart = (product: Product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };
  const products: Product[] = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
    { id: 3, name: 'Product 4', price: 40 },
    { id: 3, name: 'Product 5', price: 50 },
    { id: 3, name: 'Product 6', price: 60 }
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="fixed top-4 right-4 z-10">
        <ShoppingCart items={cart} onRemoveCart={removeCart} />
      </div>
      <div className="text-white p-4 bg-no-repeat rounded-lg shadow-2xl bg-teal-700 hover:shadow-black">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-center">Lista de Compras</h1>
          <div className="grid grid-cols-3 gap-4">
            {products.map(product => (
              <div key={product.id} className="border p-4 rounded-lg">
                <ProductCart product={product} onAddCart={addCart} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
