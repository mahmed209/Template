import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Custom Software Development",
    description: "We design and develop tailor-made software solutions to address your unique business challenges and optimize operations.",
    hoverText: "Our custom software solutions are crafted to meet the specific needs of your business. From web and mobile apps to enterprise software, we ensure your solution is scalable, efficient, and aligned with your objectives.",
  },
  {
    title: "Website Design & Development",
    description: "We create responsive and user-friendly websites that drive engagement and conversion, providing a seamless experience for visitors.",
    hoverText: "Our web design and development services ensure your website is not only visually appealing but also optimized for performance and usability. We integrate modern technologies to create engaging, fast, and mobile-friendly websites.",
  },
  {
    title: "Digital Marketing",
    description: "Boost your online visibility and drive traffic with our digital marketing services, including SEO, PPC, and social media management.",
    hoverText: "We help your brand stand out in the digital landscape with tailored SEO strategies, pay-per-click advertising, and social media marketing to enhance your online presence and drive qualified leads.",
  },
  {
    title: "E-commerce Solutions",
    description: "We offer comprehensive e-commerce development services, from building online stores to implementing secure payment systems and advanced features.",
    hoverText: "Our e-commerce solutions help you build a robust and secure online store. We provide everything from custom design to payment gateway integration, ensuring a smooth shopping experience for your customers.",
  },
];

const ServiceCard = ({ title, description, hoverText }) => {
  return (
    <div className="relative w-full lg:w-1/2 xl:w-1/4 p-4">
      <div className="service-card flex flex-col items-center justify-center p-6 rounded-lg shadow-lg border-2 border-blue-500 bg-white text-black min-h-[300px] lg:min-h-[350px] w-full relative">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 rounded-lg bg-blue-900 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 overflow-hidden">
          <h3 className="text-lg font-semibold mb-4">{title}</h3>
          <p className="text-sm mb-4">{hoverText}</p>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div className="px-8 mb-24 py-16 bg-purple-100">
      <h2 className="text-3xl font-bold mb-8 text-center">OUR SERVICES</h2>
      <div className="flex justify-center mb-6">
        <div className="w-24 h-1 bg-purple-400"></div>
      </div>
      <p className="text-center mb-8 max-w-full mx-auto text-gray-900">
        We offer a wide range of IT solutions designed to elevate your business. From custom software development and website design to digital marketing and e-commerce solutions, we provide innovative services that help you achieve your goals. Our team of experts works closely with you to deliver solutions tailored to your unique needs, ensuring scalability and efficiency. Whether you're looking to build a powerful online presence, optimize business processes, or enhance your digital marketing strategy, we are here to help.
      </p>
      <div className="flex flex-wrap -mx-4">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            hoverText={service.hoverText}
          />
        ))}
      </div>
      <div className="flex justify-center w-full mt-4">
        <Link to="/services">
          <button className="px-6 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition-all">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesSection;
