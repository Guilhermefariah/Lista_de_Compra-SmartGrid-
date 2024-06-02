import React, { useState } from 'react';

interface Message {
    sender: string;
    text: string;
}

const responses = {
    greetings: [
        "Olá! Como posso ajudar?",
        "Oi! Em que posso te ajudar?",
        "Olá, qual é a sua dúvida?"
    ],
    farewells: [
        "Até logo!",
        "Até mais!",
        "Tenha um bom dia!"
    ],
    default: "Desculpe, não entendi. Você pode reformular sua pergunta?"
}

const getBotResponse = (userMessage: string) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    if (lowerCaseMessage.includes("oi") || lowerCaseMessage.includes("olá")) {
        return responses.greetings[Math.floor(Math.random() * responses.greetings.length)];
    } else if (lowerCaseMessage.includes("tchau") || lowerCaseMessage.includes("até")) {
        return responses.farewells[Math.floor(Math.random() * responses.farewells.length)];
    } else {
        return responses.default;
    }
}

const Chatbot = () => {
    const [isOpen, setOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInput] = useState("");

    const alterChat = () => setOpen(!isOpen);

    const sendMessage = () => {
        if (!inputValue.trim()) return;

        const userMessage = inputValue.trim();
        const newMessages = [
            ...messages,
            { sender: "user", text: userMessage },
            { sender: "bot", text: getBotResponse(userMessage) }
        ];

        setMessages(newMessages);
        setInput("");
    }

    const alterInput = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

    const exitChat = () => {
        setOpen(false);
        setMessages([]);
    }

    return (
        <div className="fixed bottom-20 right-8 flex flex-col items-end">
            <button onClick={alterChat} className="p-2 rounded-md bg-gray-900 hover:bg-orange-500 shadow-lg">
                <img src="/img/chat.png" alt="Chatbot" className="w-12 h-12" />
            </button>
            {isOpen && (
                <div className="border p-2 bg-gray-900 shadow-lg rounded-lg max-w-xs m-2 fixed bottom-32 right-20">
                    <h2 className="text-3xl font-bold mb-4 text-center text-white">Chat</h2>
                    <div className="chatbot-messages max-h-64 overflow-y-auto mb-4">
                        {messages.map((message, index) => (
                            <div key={index} className={`message mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                <input
                                    type="text"
                                    className={`p-2 rounded-lg w-full ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white'}`}
                                    value={message.text}
                                    readOnly
                                />
                            </div>
                        ))}
                    </div>
                    <div className="chatbot-input">
                        <input
                            type="text"
                            placeholder="Digite sua mensagem..."
                            className="w-full px-2 py-2 bg-white rounded-lg mb-4"
                            value={inputValue}
                            onChange={alterInput}
                        />
                        <div className="flex justify-between">
                            <button onClick={sendMessage} className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">Enviar</button>
                            <button onClick={exitChat} className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">Sair do Chat</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Chatbot
