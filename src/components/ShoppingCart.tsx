import React, { useState } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
}
interface ShoppingCartProps {
    items: Product[];
    onRemoveCart: (product: Product) => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ items, onRemoveCart }) => {
    const [isOpen, setOpen] = useState(false);
    const updateCart = () => {
        setOpen(!isOpen);
    };
    const calcTotal = () => {
        return items.reduce((total, item) => total + item.price, 0);
    };

    return (
        <>
            <button onClick={updateCart} className="p-2 rounded-md">
                <img src="/img/carrinho.png" alt="Cart" className="w-12 h-12 mr-2" />
            </button>
            {isOpen && (
                <div className="border p-4 m-4 absolute top-14 right-0 bg-white shadow-lg rounded-lg">
                    <h2 className="text-lg font-bold mb-2">Shopping Cart</h2>
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                {item.name} - ${item.price.toFixed(2)}{" "}
                                <button onClick={() => onRemoveCart(item)} className="text-red-600">Remove</button>
                            </li>
                        ))}
                    </ul>
                    <p className="font-bold mt-2">Total: ${calcTotal().toFixed(2)}</p>
                </div>
            )}
        </>
    );
};

export default ShoppingCart;
