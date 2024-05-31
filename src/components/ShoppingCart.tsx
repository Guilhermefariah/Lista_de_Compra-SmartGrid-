import React, { useState } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
}
interface ShoppingCart {
    items: Product[];
    onRemoveFromCart: (product: Product) => void;
}