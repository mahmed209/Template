import React from 'react';
import { FaStar } from 'react-icons/fa';
import HeaderImage from '../assets/img/header.png';
import HeaderImage2 from '../assets/img/header2.png';

export default function Header() {
    return (
        <header
            className="bg-blue-900 text-white p-6 lg:px-12 lg:py-16 flex items-center justify-center animate-fadeIn"
            style={{
                backgroundImage: `url(${HeaderImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
        >
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 opacity-0 animate-slideInUp">
                <div className="space-y-4 max-w-lg text-center lg:text-left animate-slideInLeft">
                    <div className="flex justify-center lg:justify-start items-center space-x-2">
                        <span className="bg-purple-600 text-white px-3 py-1 rounded-lg shadow-lg text-xs md:text-sm font-semibold">
                            Rated 4.9 of 5
                        </span>
                        <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="text-yellow-500 shadow-lg" />
                            ))}
                        </div>
                    </div>

                    <h1 className="text-6xl md:text-4xl font-bold leading-snug transition-transform duration-300 hover:translate-x-2">
                        Enhance Online Presence With Our{' '}
                        <span className="text-purple-400 text-6xl">Optimum Solutions</span>
                    </h1>

                    <p className="text-gray-300 text-2xl md:text-base transition-opacity duration-300 hover:opacity-80">
                        We offer full-service digital media solutions.
                    </p>
                </div>

                <div className="flex justify-center lg:justify-end w-full max-w-md animate-slideInRight">
                    <img src={HeaderImage2} alt="Header" className="rounded-lg  transition-transform duration-500 hover:scale-105" />
                </div>
            </div>
        </header>
    );
}
