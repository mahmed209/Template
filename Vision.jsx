import React from "react";
import { motion } from "framer-motion";
import Vision from '../assets/img/vision.png';

const AboutUs = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-white">
            <motion.div 
                className="max-w-lg mr-24"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-4xl font-bold mb-4">OUR VISION</h2>
                <div className="w-20 h-1 bg-purple-600 mb-6"></div>
                <p className="text-xl text-gray-900 mb-4">
                Our Vision is to strive to become an entity in technology based corporate solutions, capable of demanding unconditional response from the targeted niche. We also believe that for our scope of improvisation – sky is the limit and we are always ready to take our achievements to the next level. We are just budding, will grow soon and would always like to remain on the growing streak.</p>
                <p className="text-xl text-gray-900">
                We aim for continuous growth and innovation, always pushing the boundaries of our achievements. Committed to excellence, we strive to stay on a perpetual path of progress. </p>
            </motion.div>
            <motion.div
                className="mt-8 ml-12 md:mt-0 md:ml-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
            >
                <img
                    src={Vision}
                    alt="Illustration"
                    className="w-9/12 h-auto object-cover"
                />
            </motion.div>
        </div>
    );
};

export default AboutUs;
