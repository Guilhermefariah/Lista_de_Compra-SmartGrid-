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
    const [payMent, setPay] = useState<string>('');
    const updateCart = () => {
        setOpen(!isOpen);
    };
    const calcTotal = () => {
        return items.reduce((total, item) => total + item.price, 0);
    };
    const handleLogout = () => {
        setConfirm(true);
    };
    const confirmLogout = () => {
        setConfirm(false);
    };
    const cancelLogout = () => {
        setConfirm(false);
    };

    return (
        <div className="flex justify-between items-center">
            <button onClick={updateCart} className="p-2 rounded-md">
                <img src="/img/carrinho.png" alt="Cart" className="w-12 h-12 mr-2" />
            </button>
            {isOpen && (
                <div className="border p-2 m-2 bg-white shadow-lg rounded-lg w-max">
                    <h2 className="text-3xl font-bold mb-4 text-center text-slate-700">Itens Selecionados</h2>
                    <ul>
                        {items.map(item => (
                            <li key={item.id} className="flex justify-between items-center">
                                <span>
                                    {item.name} - R$ {item.price.toFixed(2)}
                                </span>
                                <button onClick={() => onRemoveCart(item)} className="text-red-600 ml-12">
                                    <img src="/img/lixeira.png" alt="Delete" className="w-8 h-8"/>
                                </button>
                            </li>
                        ))}
                    </ul>
                    <p className="font-bold mt-2 text-lg">Total: R$ {calcTotal().toFixed(2)}</p>
                    <div className="mt-4">
                        <label>
                            <input
                                type="radio"
                                value="boleto"
                                checked={payMent === 'boleto'}
                                onChange={() => setPay('boleto')}
                            />
                            Boleto Bancário
                        </label>
                        <label className="ml-4">
                            <input
                                type="radio"
                                value="cartao"
                                checked={payMent === 'cartao'}
                                onChange={() => setPay('cartao')}
                            />
                            Cartão de Crédito
                        </label>
                    </div>
                    <button onClick={onFinish} className="bg-green-500 text-white px-4 py-2 mt-4 rounded-lg">
                        Finalizar Compra
                    </button>
                    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 mt-4 rounded-lg">
                        Sair
                    </button>
                </div>
            )}
        </div>
    );
};

export default ShoppingCart;
