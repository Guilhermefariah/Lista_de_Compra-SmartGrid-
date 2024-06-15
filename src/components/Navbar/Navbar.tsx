import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState(600);
    const [accordionOpen, setLogo] = useState(false);
 
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const openLogo = () => {
        setLogo(prevState => !prevState);
    }

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    return (
        <nav className="fixed top-0 w-full bg-gray-900 p-0 flex mb-4 justify-between items-center shadow-lg z-50">
            <div className="relative">
                <div onClick={openLogo} className="cursor-pointer">
                    <img src="/img/logo.png" alt="Logo" className="h-10 w-10 ml-2" />
                </div>
                {accordionOpen && (
                    <div className="absolute bg-white p-0 mt-2 rounded-lg border-2 shadow text-white mx-4 text-center">
                        <a href="#" className="bg-orange-500 block my-2 mx-2 py-1 px-2 border-2 hover:text-white rounded-lg transition-colors duration-300 hover:bg-gray-900">Cadastrar</a>
                        <a href="#" className="bg-orange-500 block my-2 mx-2 py-1 px-8 border-2 hover:text-white rounded-lg transition-colors duration-300 hover:bg-gray-900">Entrar</a>
                        <a href="#" className="bg-orange-500 block my-2 mx-2 py-1 px-8 border-2 hover:text-white rounded-lg transition-colors duration-300 hover:bg-gray-900">Sobre</a>
                    </div>
                )}
            </div>
            <div className="flex flex-col items-center flex-grow max-[480px]:w-[4rem]">
                <div className="text-white text-4xl max-[480px]:text-3xl">{formatTime(timeLeft)}</div>
                <div className="text-white text-lg max-[480px]:text-sm">Corra! Ofertas limitadas, tempo se esgotando.</div>
            </div>
            <div className="flex items-center">
            </div>
        </nav>
    );
}

export default Navbar;
