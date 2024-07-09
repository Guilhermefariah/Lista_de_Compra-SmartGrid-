import Image from 'next/image';
import React, { useState } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}
interface ShoppingCartProps {
    items: Product[];
    onRemoveCart: (product: Product) => void;
    onFinish?: () => void;
}
const ShoppingCart: React.FC<ShoppingCartProps> = ({ items, onRemoveCart, onFinish }) => {
    const [isOpen, setOpen] = useState(false);
    const [payMent, setPay] = useState<string>('');
    const [onSetConfirm, setConfirm] = useState(false);

    const updateCart = () => {
        setOpen(!isOpen);
    }

    const calcTotal = () => {
        return items.reduce((total, item) => total + item.price, 0);
    }

    const exitLogout = () => {
        setConfirm(true);
    }

    const confirmLogout = () => {
        setConfirm(false);
        updateCart();
    }

    const cancelLogout = () => {
        setConfirm(false);
    }

    return (
        <div className="flex justify-start">
            <button onClick={updateCart} className="p-2 rounded-md">
                <Image src="/img/carrinho.png" alt="Cart" width={48} height={48} className="w-12 h-12" />
            </button>
            {isOpen && (
                <div className="border mt-4 opacity-90 p-2 bg-gray-900 shadow-lg rounded-lg w-max">
                    <h2 className="text-3xl font-bold mb-4 text-center text-white">Itens Selecionados</h2>
                    <ul>
                        {items.map(item => (
                            <li key={item.id} className="flex justify-between items-center text-white">
                                <span>
                                    {item.name} - R$ {item.price.toFixed(2)}
                                </span>
                                <button onClick={() => onRemoveCart(item)}>
                                    <Image src="/img/lixeira.png" alt="Delete" width={56} height={40} className="w-14 h-10" />
                                </button>
                            </li>
                        ))}
                    </ul>
                    <p className="font-bold m-2 mb-4 text-lg text-white">Total: R$ {calcTotal().toFixed(2)}</p>
                    <div className="text-white m-2">
                        <label className="border rounded-lg p-2 mb-2 block">
                            <input
                                type="radio"
                                value="boleto"
                                checked={payMent === 'boleto'}
                                onChange={() => setPay('boleto')}
                            />
                            Boleto Bancário
                        </label>
                        <label className="border rounded-lg p-2 mb-2 block">
                            <input
                                type="radio"
                                value="cartao"
                                checked={payMent === 'cartao'}
                                onChange={() => setPay('cartao')}
                            />
                            Cartão de Crédito
                        </label>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button onClick={onFinish} className="bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white">
                            Finalizar Compra
                        </button>
                        <button onClick={exitLogout} className="bg-orange-500 text-white px-4 py-2 rounded-lg">
                            Sair
                        </button>
                    </div>
                    {onSetConfirm && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-gray-900 p-4 rounded-lg shadow-lg text-center">
                                <p className="mb-4 text-xl text-white">Tem certeza que deseja sair?</p>
                                <button onClick={confirmLogout} className="bg-orange-500 text-white px-4 py-2 rounded-lg mr-2">
                                    Sim
                                </button>
                                <button onClick={cancelLogout} className="bg-white text-gray-900 px-8 py-2 rounded-lg hover:bg-orange-500 hover:text-white">
                                    Não
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default ShoppingCart
