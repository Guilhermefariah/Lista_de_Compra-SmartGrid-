import React from "react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CardProps {
  product: Product;
  onAddCart: (product: Product) => void;
}

const ProductCart: React.FC<CardProps> = ({ product, onAddCart }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-orange-200 shadow-gray-200 shadow-lg rounded-xl p-2">
      <h2 className="text-xl mb-2 font-bold text-gray-600">{product.name}</h2>
      <div className="relative w-full h-40 max-w-[480px]">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-md transition-transform duration-300 opacity-90 ease-in-out hover:scale-110 hover:transform-origin-center"
        />
      </div>
      <p className="text-xl mt-2 font-bold text-gray-600">R$ {product.price.toFixed(2)}</p>
      <button
        onClick={() => onAddCart(product)}
        className="bg-orange-500 text-gray-200 font-bold text-lg px-4 py-2 rounded-lg mt-4 transform transition hover:scale-105"
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
};

export default ProductCart;
