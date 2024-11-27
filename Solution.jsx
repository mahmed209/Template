import React from 'react';
import HeaderImage from '../assets/img/header.png';

export default function Header() {
    return (
        <header
            className="relative bg-blue-900 text-white p-6 lg:px-12 lg:py-16 flex items-center justify-center animate-fadeIn"
            style={{
                backgroundImage: `url(${HeaderImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay',
            }}
        >
            <div className="max-w-full mx-auto text-center flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-white p-2 pb-4">INNOVATIVE SOLUTIONS FOR YOUR BUSINESS</h1>
                <div className="w-24 h-1 bg-purple-400 mb-6"></div>
                <p className="text-lg lg:text-lg leading-relaxed px-4 lg:px-24">
                    At Abeestech, we specialize in delivering cutting-edge technology solutions tailored to your business needs. From custom software development to cloud solutions and cybersecurity, we offer a wide range of services designed to improve efficiency, enhance security, and drive growth. Let us be your partner in navigating the digital landscape and achieving lasting success.
                </p>
            </div>
        </header>
    );
}
