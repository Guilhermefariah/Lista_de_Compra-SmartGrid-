import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}
interface CardProps {
  product: Product;
  onAddCart: (product: Product) => void;
}
const ProductCart: React.FC<CardProps> = ({ product, onAddCart }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>R$ {product.price.toFixed(2)}</p>
      <button
        onClick={() => onAddCart(product)}
        className="bg-orange-500 text-white text-lg px-4 py-2 mt-2 rounded-lg transform transition hover:scale-y-125"
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
};

export default ProductCart;
