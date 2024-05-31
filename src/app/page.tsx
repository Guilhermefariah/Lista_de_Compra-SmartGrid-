"use client";
import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

const Page: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([])
  const addCart = (product: Product) => {
    setCart([...cart, product])
  }
  const products: Product[] = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 }
  ]

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-white p-4 bg-no-repeat rounded-lg shadow-2xl bg-zinc-800 hover:shadow-black">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-center">Lista de Compras</h1>
          <div className="grid grid-cols-3 gap-4">
            {products.map(product => (
              <div key={product.id} className="border p-4 rounded-lg">
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className="text-white">${product.price.toFixed(2)}</p>
                <button onClick={() => addCart(product)} className="bg-rose-600 text-white px-4 py-2 mt-2 rounded-lg">Adicionar ao Carrinho</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

}
export default Page;