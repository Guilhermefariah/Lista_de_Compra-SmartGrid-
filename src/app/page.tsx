"use client";
import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: string;
}

const Page: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([])
  const addCart = (product: Product) => {
    setCart([...cart, product])
  }
}
export default Page;