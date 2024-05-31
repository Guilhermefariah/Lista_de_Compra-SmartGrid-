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
    <div className="container mx-auto p-4">
      <h1 className="text-2x1 font-bold mb-4">Test </h1>
        <div className="grid grid-cols-3 gap-4">
          
        </div>
    </div>
  )




}
export default Page;