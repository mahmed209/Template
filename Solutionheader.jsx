import React from 'react';
import Solution from '../assets/img/solution.png';

const SkillsComponent = () => {
    return (
        <div className="skills-container flex flex-col md:flex-row-reverse items-center py-16 bg-gray-50">
            <div className="skills-image md:w-1/2 px-6 animate-slideInRight">
                <img src={Solution} className="w-full rounded-lg shadow-lg" alt="Service illustration" />
            </div>

            <div className="skills-text md:w-1/2 space-y-4 px-6 animate-slideInLeft">
                <h2 className="text-4xl font-bold text-gray-900">Innovative IT Solutions</h2>
                <div className="w-28 h-1 bg-purple-500 mb-6"></div>
                <p className="text-gray-950 font-medium text-lg">
                    In today's fast-paced digital world, businesses need IT solutions that are flexible, scalable, and secure. Our expert team specializes in delivering tailored IT services, including IT infrastructure management, cloud solutions, and custom software development, all designed to meet the unique needs of your business. 
                    <br />
                    <br />
                    We focus on creating solutions that enhance operational efficiency, improve security, and help businesses grow. Whether you’re looking to optimize your technology, streamline your processes, or explore new ways to engage with customers, we provide strategic IT expertise to ensure your technology investments deliver real results. Reach out today to learn more about how we can help drive success for your business.
                </p>
            </div>
        </div>
    );
};

export default SkillsComponent;
