import React from "react";

const Footer: React.FC = () => (
    <footer className="bg-gray-900 text-white relative w-full">
        <div className="container mx-auto text-center">
            <p className="text-lg">&copy; 2024 Guilherme Faria. Todos os direitos reservados.</p>
            <div className="flex justify-center mt-1 space-x-4">
                <a href="#" className="hover:text-orange-500">Sobre</a>
                <a href="#" className="hover:text-orange-500">Contato</a>
                <a href="#" className="hover:text-orange-500">Privacidade</a>
            </div>
        </div>
    </footer>
);

export default Footer;
