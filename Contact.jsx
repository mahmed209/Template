import React from 'react';
import HeaderImage from '../assets/img/header.png';

export default function Header() {
    return (
        <header
            className="relative bg-green-800 text-white p-6 lg:px-12 lg:py-16 flex items-center justify-center animate-fadeIn"
            style={{
                backgroundImage: `url(${HeaderImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay',
            }}
        >
            <div className="max-w-full mx-auto text-center flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold text-white p-2 pb-4">GET IN TOUCH</h1>
                <p className="text-lg max-w-xl text-gray-200 leading-relaxed">
                    Have questions or need assistance? We're here to help! Contact us and let's discuss how we can work together to bring your vision to life.
                </p>
                <button
                    className="mt-6 px-6 py-3 bg-white text-green-800 font-semibold text-lg rounded hover:bg-green-100"
                    onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                >
                    Contact Us
                </button>
            </div>
        </header>
    );
}
