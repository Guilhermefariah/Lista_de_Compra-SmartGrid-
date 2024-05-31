"use client";
import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: string;
}

const Page: React.FC = () => {
  const[cart, setCart] = useState<Product[]>([])
}
export default Page;