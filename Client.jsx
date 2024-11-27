import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Client1 from "../assets/img/envato-client1.png";
import Client2 from "../assets/img/envato-client2.png";
import Client3 from "../assets/img/envato-client3.png";
import Client4 from "../assets/img/envato-client4.png";
import Client5 from "../assets/img/envato-client5.png";
import Client6 from "../assets/img/envato-client6.png";
import Client7 from "../assets/img/envato-client7.png";

const clients = [
    { src: Client1, alt: "Envato Client 1" },
    { src: Client2, alt: "Envato Client 2" },
    { src: Client3, alt: "Envato Client 3" },
    { src: Client4, alt: "Envato Client 4" },
    { src: Client5, alt: "Envato Client 5" },
    { src: Client6, alt: "Envato Client 6" },
    { src: Client7, alt: "Envato Client 7" },
];

const ClientCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="py-12 bg-gray-50">
            <h2 className="text-4xl font-bold text-center mb-4 text-green-900">OUR CLIENTS</h2>
            <p className="text-center text-gray-600 text-lg mb-6">
                Trusted by leading brands across industries for innovative solutions.
            </p>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-8"></div>
            <Slider {...settings} className="max-w-7xl mx-auto">
                {clients.map((client, index) => (
                    <div key={index} className="flex items-center justify-center p-4">
                        <img src={client.src} alt={client.alt} className="w-8/12 h-auto object-contain" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ClientCarousel;
