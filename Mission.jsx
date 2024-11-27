import React from "react";
import { motion } from "framer-motion";
import Mission from '../assets/img/mission.png';

const OurMission = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-white">
            <motion.div 
                className="mt-8 ml-12 md:mt-0 md:ml-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <img
                    src={Mission}
                    alt="Illustration"
                    className="w-9/12 h-auto object-cover"
                />
            </motion.div>
            <motion.div
                className="max-w-lg mr-24"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-4xl font-bold mb-4">OUR MISSION</h2>
                <div className="w-20 h-1 bg-purple-600 mb-6"></div>
                <p className="text-xl text-gray-900 mb-4">
                    Our Mission is to carve quality into our client’s business and build technologies that improve lives while developing great relationships along the way through 100% customer satisfaction by delivering quality products and services at an affordable cost.
                </p>
                <p className="text-xl text-gray-900">
                    Our mission is to empower businesses with innovative IT solutions and services that drive success. We prioritize customer satisfaction by delivering high-quality, cost-effective solutions tailored to your needs. Let us help you achieve your goals through technology and collaboration.
                </p>
            </motion.div>
        </div>
    );
};

export default OurMission