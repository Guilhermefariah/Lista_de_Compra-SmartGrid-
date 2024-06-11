"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCart from "@/components/ProductCart";
import ShoppingCart from "@/components/ShoppingCart";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/ChatBot";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const Page: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const addCart = (product: Product) => {
    setCart([...cart, product]);
  }
  const removeCart = (product: Product) => {
    const newCart = cart.filter(item => item.id !== product.id);
    setCart(newCart);
  }
  const products: Product[] = [
    { id: 1, name: 'Celular', price: 800, image: '/img//1.jpg' },
    { id: 2, name: 'Notebook', price: 1200, image: '/img//2.jpg' },
    { id: 3, name: 'Fones de ouvido', price: 200, image: '/img//3.jpg' },
    { id: 4, name: 'Relogio', price: 300, image: '/img//4.jpg' },
    { id: 5, name: 'Camera', price: 600, image: '/img//5.jpg' },
    { id: 6, name: 'Tablet', price: 500, image: '/img//6.jpg' },
  ];
  
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    rows: 2
  }

  return (
<div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 via-blue-500 to-gray-900">
  <Navbar />
  <div className="flex flex-grow">
    <div className="flex-grow p-4 mt-16">
      <div className="flex justify-center items-center w-full">
        <div className="fixed top-12 mt-2 right-4 z-10 text-lg text-white">
          <ShoppingCart items={cart} onRemoveCart={removeCart} />
        </div>
        <div className="text-white p-4 bg-no-repeat rounded-lg shadow-3xl bg-gray-900 hover:shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-center">SmartGrid</h1>
            <Slider {...settings}>
              {products.map(product => (
                <div key={product.id} className="bg-gray-900 p-4 rounded-lg text-center text-lg">
                  <ProductCart product={product} onAddCart={addCart} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Chatbot />
  <Footer />
  
</div>

  );
}

export default Page;
