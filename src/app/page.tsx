"use client";
import React, { useState } from "react";
import ProductCart from "@/components/ProductCart";
import ShoppingCart from "@/components/ShoppingCart";
import Navbar from "@/components/Navbar";

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
    { id: 4, name: 'Product 4', price: 40 },
    { id: 5, name: 'Product 5', price: 50 },
    { id: 6, name: 'Product 6', price: 60 }
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      < Navbar />
      <div className="fixed top-4 mt-12 right-4 z-10 text-lg">
        <ShoppingCart items={cart} onRemoveCart={removeCart} />
      </div>
      <div className="text-white p-4 bg-no-repeat rounded-lg shadow-2xl bg-teal-700 hover:shadow-black">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">Lista de Compras</h1>
          <div className="grid grid-cols-3 gap-4">
            {products.map(product => (
              <div key={product.id} className="border p-4 rounded-lg text-lg">
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
