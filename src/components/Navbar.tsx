import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState(600);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <nav className="fixed top-0 w-full bg-teal-700 p-2 flex justify-between items-center shadow-lg z-50">
            <div className="flex items-center">
                <img src="/img/mercado.png" alt="Logo" className="h-10 w-10" />
            </div>
            <div className="flex flex-col items-center flex-grow"> 
                <div className="text-white text-3xl">{formatTime(timeLeft)}</div>
                <div className="text-white">Corra! Ofertas limitadas, tempo se esgotando.</div>
            </div>
            <div className="flex items-center"> 
            </div>
        </nav>
    );
};

export default Navbar;
