import React, { useState } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
}
interface onShoppingCart {
    items: Product[];
    onRemoveCart: (product: Product) => void;
}
const ShoppingCart: React.FC<onShoppingCart> = ({ items, onRemoveCart }) => {
    const [isOpen, setOpen] = useState(false);
    const setCart = () => {
        setOpen(!isOpen);
    }
    const calcTotal = () => {
        return items.reduce((total, item) => total + item.price, 0);
    }
    return (
        <>
          <button onClick={setCart} className="bg-gray-800 text-white px-4 py-2 rounded-md">
            Cart
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

}
export default ShoppingCart