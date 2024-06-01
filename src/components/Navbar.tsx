import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState(600);
    const [accordionOpen, setAccordionOpen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const toggleAccordion = () => {
        setAccordionOpen(prevState => !prevState);
    };

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <nav className="fixed top-0 w-full bg-teal-700 p-0 flex justify-between items-center shadow-lg z-50">
            <div className="relative">
                <div onClick={toggleAccordion} className="cursor-pointer">
                    <img src="/img/mercado.png" alt="Logo" className="h-10 w-10 ml-2" />
                </div>
                {accordionOpen && (
                    <div className="absolute bg-white p-0 mt-2 rounded border-2 shadow text-white mx-12">
                        <a href="#" className="bg-orange-500 block m-2 border-2 hover:text-white transition-colors duration-300 hover:bg-teal-700">Cadastrar</a>
                        <a href="#" className="bg-orange-500 block m-2 border-2 hover:text-white transition-colors duration-300 hover:bg-teal-700">Entrar</a>
                        <a href="#" className="bg-orange-500 block m-2 border-2 hover:text-white transition-colors duration-300 hover:bg-teal-700">Sobre</a>
                    </div>
                )}
            </div>
            <div className="flex flex-col items-center flex-grow">
                <div className="text-white text-2xl">{formatTime(timeLeft)}</div>
                <div className="text-white text-lg">Corra! Ofertas limitadas, tempo se esgotando.</div>
            </div>
            <div className="flex items-center">
            </div>
        </nav>
    );
};

export default Navbar;
