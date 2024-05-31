import React from "react";

interface Product {
    id: number;
    name: string;
    price: number;
}
interface CardProps {
    product: Product;
    onAddCart: (Product: Product) => void;
}
const ProductCart: React.FC<CardProps> = ({ product, onAddCart }) => {
    return (
        <div>
            <h2>{product.name}</h2>
            <p>R${product.price.toFixed(2)}</p>
            <button
                onClick={() => onAddCart(product)}
                className="bg-rose-600 text-white px-4 py-2 mt-2 rounded-lg"
            >
                Adicionar ao Carrinho
            </button>
        </div>
    )
}

export default ProductCart