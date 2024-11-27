import React from 'react';
import HeaderImage from '../assets/img/header.png';

export default function Header() {
    return (
        <header
            className="relative bg-teal-800 text-white p-6 lg:px-12 lg:py-16 flex items-center justify-center animate-fadeIn"
            style={{
                backgroundImage: `url(${HeaderImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay',
                backgroundColor: 'rgba(0, 128, 128, 0.7)', // Teal overlay
            }}
        >
            <div className="max-w-6xl mx-auto text-center flex flex-col items-center justify-center">
                <h1 className="text-4xl lg:text-5xl font-bold text-white p-2 pb-4 tracking-wide">
                    OUR DIGITAL SOLUTIONS
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-teal-400 rounded-full mb-6"></div>
                <p className="text-lg lg:text-xl leading-relaxed px-6 lg:px-32 text-gray-200">
                    We offer a comprehensive suite of digital services designed to help businesses grow and succeed in
                    a fast-paced digital world. From cutting-edge web development and custom software solutions to
                    advanced SEO and social media marketing strategies, we provide tailored solutions that meet your
                    unique business needs. Our team of experts also specializes in data analytics, artificial
                    intelligence, and digital transformation, ensuring that your business stays ahead of the curve with
                    innovative technology and exceptional service. Partner with us to bring your digital vision to life
                    and accelerate your growth.
                </p>
            </div>
        </header>
    );
}
