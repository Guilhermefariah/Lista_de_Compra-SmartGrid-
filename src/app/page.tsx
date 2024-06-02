"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCart from "@/components/ProductCart";
import ShoppingCart from "@/components/ShoppingCart";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  };
  const removeCart = (product: Product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };
  const products: Product[] = [
    { id: 1, name: 'Abacate', price: 10, image: '/img/1.jpg' },
    { id: 2, name: 'Maçã', price: 2, image: '/img/2.jpg' },
    { id: 3, name: 'Frutas 3', price: 3, image: '/img/3.jpg' },
    { id: 4, name: 'Frutas 4', price: 4, image: '/img/4.jpg' },
    { id: 5, name: 'Frutas 5', price: 5, image: '/img/5.jpg' },
    { id: 6, name: 'Frutas 6', price: 6, image: '/img/6.jpg' },
  ];

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 200,
    rows: 2
  };

  return (
    <div className="flex flex-col min-h-screen mt-12 mb-16">
      <Navbar />
      <div className="flex flex-grow">
        <div className="flex-grow p-4 mt-16">
          <div className="flex justify-center items-center w-full">
            <div className="fixed top-12 mt-2 right-4 z-10 text-lg">
              <ShoppingCart items={cart} onRemoveCart={removeCart} />
            </div>
            <div className="text-white p-4 bg-no-repeat rounded-lg shadow-2xl bg-teal-700 hover:shadow-teal-800">
              <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-center">Frutas</h1>
                <Slider {...settings}>
                  {products.map(product => (
                    <div key={product.id} className=" text-center bg-teal-700 p-4 rounded-lg text-lg">
                      <ProductCart product={product} onAddCart={addCart} />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
