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
<nav className="fixed top-0 w-full bg-teal-700 p-4 flex justify-between items-center shadow-lg z-50">
    <img src="/img/mercado.png" alt="Descrição da Logo" className="h-8" />
  <div className="text-white text-lg">{formatTime(timeLeft)}</div>
</nav>
  );
};

export default Navbar;
