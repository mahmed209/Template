import React from 'react';

const AboutUs = () => {
  const teamCards = [
    {
      title: "Experienced Team",
      description: "Our team consists of seasoned professionals dedicated to delivering cutting-edge technology solutions with precision and care.",
      animation: "slideInLeft",
    },
    {
      title: "Agile Processes",
      description: "We embrace Agile methodologies to ensure efficiency, adaptability, and continuous value delivery for all our clients.",
      animation: "slideInUp",
    },
    {
      title: "Customer-Focused Solutions",
      description: "We prioritize client satisfaction by crafting tailored solutions that align perfectly with business goals.",
      animation: "slideInRight",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title Section */}
        <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-6 animate-fadeIn">
          ABOUT US
        </h2>
        <div className="flex justify-center mb-12">
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="space-y-8">
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              We are a technology-driven team focused on building innovative solutions that empower businesses to achieve success. Our expertise spans across diverse industries, and our passion for creating meaningful digital experiences drives everything we do.
            </p>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              Our services include a comprehensive suite of offerings designed to meet the evolving needs of modern businesses:
            </p>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
              <li>Mobile and Web Application Development</li>
              <li>Quality Assurance and Testing</li>
              <li>Healthcare Technology Solutions</li>
              <li>Custom Software Development</li>
              <li>SEO and Digital Marketing</li>
              <li>Artificial Intelligence and Machine Learning</li>
              <li>Data Analytics and Business Intelligence</li>
            </ul>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              Our commitment to excellence and our expertise in industries like healthcare, finance, and travel make us a trusted partner for businesses looking to excel in the digital age.
            </p>
          </div>

          {/* Right Section - Team Cards */}
          <div className="grid grid-cols-1 gap-8">
            {teamCards.map((card, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out bg-gradient-to-br from-indigo-600 to-purple-600 text-white animate-${card.animation}`}
              >
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-lg">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
