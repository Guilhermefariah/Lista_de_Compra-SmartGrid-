import React, { useState } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
}
interface ShoppingCartProps {
    items: Product[];
    onRemoveCart: (product: Product) => void;
    onFinish?: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ items, onRemoveCart, onFinish }) => {
    const [isOpen, setOpen] = useState(false);
    const updateCart = () => {
        setOpen(!isOpen);
    };
    const calcTotal = () => {
        return items.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div className="flex justify-between items-center">
            <button onClick={updateCart} className="p-2 rounded-md">
                <img src="/img/carrinho.png" alt="Cart" className="w-12 h-12 mr-2" />
            </button>
            {isOpen && (
                <div className="border p-2 m-2 bg-white shadow-lg rounded-lg w-max">
                    <h2 className="text-lg font-bold mb-4">Shopping Cart</h2>
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                {item.name} - R$ {item.price.toFixed(2)}{" "}
                                <button onClick={() => onRemoveCart(item)} className="text-red-600">Delete</button>
                            </li>
                        ))}
                    </ul>
                    <p className="font-bold mt-2 text-lg">Total: R$ {calcTotal().toFixed(2)}</p>
                </div>
            )}
        </div>

    );
};

export default ShoppingCart;
