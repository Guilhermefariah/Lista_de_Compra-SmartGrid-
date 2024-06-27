import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductCart from '@/components/ProductCart';

describe('ProductCart', () => {
  const product = {
    id: 1,
    name: 'Produto Teste',
    price: 99.99,
    image: 'https://via.placeholder.com/150'
  };

  const onAddCart = jest.fn();

  test('renders ProductCart component with product details', () => {
    render(<ProductCart product={product} onAddCart={onAddCart} />);

    // Verifica se o nome do produto está sendo exibido
    expect(screen.getByText('Produto Teste')).toBeInTheDocument();

    // Verifica se a imagem do produto está sendo exibida
    const imgElement = screen.getByAltText('Produto Teste');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', 'https://via.placeholder.com/150');

    // Verifica se o preço do produto está sendo exibido
    expect(screen.getByText('R$ 99.99')).toBeInTheDocument();
  });

  test('calls onAddCart when "Adicionar ao carrinho" button is clicked', () => {
    render(<ProductCart product={product} onAddCart={onAddCart} />);

    const buttonElement = screen.getByText('Adicionar ao carrinho');
    fireEvent.click(buttonElement);

    // Verifica se a função onAddCart foi chamada com o produto correto
    expect(onAddCart).toHaveBeenCalledTimes(1);
    expect(onAddCart).toHaveBeenCalledWith(product);
  });
});
