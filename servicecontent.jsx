import React from 'react';
import Service from '../assets/img/service.png';

const SkillsComponent = () => {
  return (
    <div className="skills-container flex flex-col md:flex-row items-center py-16 bg-gradient-to-r from-teal-50 to-orange-50">
      <div className="skills-image md:w-1/2 px-6 animate-slideInRight">
        <img
          src={Service}
          className="w-full rounded-lg shadow-lg transform hover:scale-105 hover:rotate-1 transition-transform duration-300"
          alt="Service illustration"
        />
      </div>
      <div className="skills-text md:w-1/2 space-y-6 px-6 animate-slideInLeft text-center md:text-left">
        <h3 className="text-lg text-teal-600 font-bold">Our Expertise</h3>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-teal-900 leading-tight">
          Empowering Your Business with Innovative Digital Solutions
        </h2>
        <div className="w-28 h-1 bg-gradient-to-r from-orange-500 to-teal-500 mx-auto md:mx-0"></div>
        <p className="text-gray-800 text-base lg:text-lg font-medium">
          We specialize in providing digital solutions that help businesses grow and thrive in a competitive online
          landscape. From high-performance websites to custom software, we offer services tailored to your unique
          needs. Our expertise includes SEO, digital marketing, e-commerce, and cutting-edge technology. Let's bring
          your vision to life with innovation and expert guidance.
        </p>
      </div>
    </div>
  );
};

export default SkillsComponent;
