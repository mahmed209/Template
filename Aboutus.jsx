import React from 'react';
import HeaderImage from '../assets/img/header.png';
import CountUp from 'react-countup';

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
                <h1 className="text-4xl font-bold text-white p-2 pb-4">WHO WE ARE</h1>
                <div className="w-24 h-1 bg-purple-400 mb-6"></div>
                <p className="text-lg lg:text-lg leading-relaxed px-4 lg:px-24">
                    Unlock innovation and excellence with our premium digital products. Specializing in high-quality, ready-to-use IT solutions, we offer software and digital assets crafted to elevate your projects. Whether you're looking for custom-built applications, advanced IT tools, or cutting-edge digital resources, our solutions ensure top performance and seamless integration.
                    Designed for developers, designers, and businesses, our products provide the perfect foundation to build stunning, high-performance websites and applications. Experience effortless implementation and outstanding quality with every product, and take your digital projects to new heights of success.
                </p>
                <div className="flex justify-center items-center space-x-12 lg:space-x-24 mt-8">
                    <div className="text-center">
                        <h3 className="text-4xl font-bold text-blue-200">
                            <CountUp end={700} duration={3} separator="," />+
                        </h3>
                        <p className="text-lg font-medium text-blue-200 pt-2">Global Clients</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-4xl font-bold text-blue-200">
                            <CountUp end={99} duration={3} />%
                        </h3>
                        <p className="text-lg font-medium text-blue-200 pt-2">Customer Satisfaction</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-4xl font-bold text-blue-200">
                            <CountUp end={300} duration={3} separator="," />+
                        </h3>
                        <p className="text-lg font-medium text-blue-200 pt-2">Successful Projects</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
