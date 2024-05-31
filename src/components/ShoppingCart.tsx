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
      };



}
export default ShoppingCart