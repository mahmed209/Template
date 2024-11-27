import React from "react";
import { motion } from "framer-motion";
import About from "../assets/img/About.png";

const AboutUs = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between py-16 px-8 md:px-24 bg-gradient-to-r from-blue-50 to-indigo-100">
            <motion.div 
                className="max-w-lg md:mr-16"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-5xl font-bold mb-4 text-indigo-900">
                    ABOUT US
                </h2>
                <div className="w-20 h-1 bg-indigo-600 mb-6"></div>
                <p className="text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed">
                    We are a passionate team of designers and developers dedicated to crafting innovative solutions tailored to modern business needs.
                </p>
                <p className="text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed">
                    With years of experience in diverse industries, our mission is to empower businesses by delivering top-notch, scalable, and user-friendly templates. We believe in bridging the gap between design and functionality to ensure seamless user experiences.
                </p>
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                    Choose our solutions to elevate your digital presence, streamline your processes, and create lasting impressions for your clients. Your success is our inspiration.
                </p>
            </motion.div>

            {/* Image Section */}
            <motion.div
                className="mt-12 md:mt-0 md:ml-16"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
            >
                <img
                    src={About}
                    alt="About Us Illustration"
                    className="w-full max-w-md h-auto rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                />
            </motion.div>
        </div>
    );
};

export default AboutUs;
