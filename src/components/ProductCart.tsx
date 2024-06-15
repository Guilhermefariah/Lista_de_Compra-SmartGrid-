import React from "react";

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
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} className="w-full border-2 rounded-md h-40 
        object-cover transition-transform duration-300 opacity-90 ease-in-out 
        hover:scale-110 hover:transform-origin-center max-[480px]:w-[90%]" 
        style={{ width: "100%", height: "auto" }}
      />
      <p>R$ {product.price.toFixed(2)}</p>
      <button
        onClick={() => onAddCart(product)}
        className="bg-orange-500 text-white text-lg px-2 py-1 rounded-lg transform transition hover:scale-y-125"
      >
        Adicionar ao carrinho
      </button>
    </div>

  );
}

export default ProductCart
