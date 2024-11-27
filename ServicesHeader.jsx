import React from 'react';
import { FaDesktop, FaChartLine, FaStethoscope, FaDollarSign, FaDatabase, FaClipboardCheck, FaSearch, FaUserFriends } from 'react-icons/fa';
import { MdOutlineHealthAndSafety, MdOutlineScreenSearchDesktop } from 'react-icons/md';
import './serviceheader.css';

const services = [
    {
        icon: <FaChartLine />,
        title: "Digital Marketing",
        description: "Our digital marketing services help your brand grow by reaching the right audience at the right time. Whether it’s through SEO, paid media, social media campaigns, or influencer marketing, we create data-driven strategies that increase visibility, engagement, and conversions.",
    },
    {
        icon: <FaDesktop />,
        title: "Web and App Development",
        description: "We specialize in creating intuitive, user-friendly websites and applications. From responsive websites to custom-built mobile apps, we ensure high performance, scalability, and seamless user experience.",
    },
    {
        icon: <FaClipboardCheck />,
        title: "Quality Assurance & Testing",
        description: "Our QA and testing services ensure the reliability and performance of your digital products. We perform comprehensive testing across platforms and devices to ensure your software is ready for the market.",
    },
    {
        icon: <MdOutlineHealthAndSafety />,
        title: "Healthcare Solutions",
        description: "We develop healthcare solutions designed to improve patient care and streamline administrative tasks. From custom healthcare apps to HIPAA-compliant data management systems, we offer tailored solutions for healthcare professionals.",
    },
    {
        icon: <FaDollarSign />,
        title: "Revenue Cycle Management",
        description: "We help businesses optimize their revenue cycle through efficient billing, claims processing, and accounts receivable management. Our team ensures timely and accurate billing, reduces errors, and enhances cash flow.",
    },
    {
        icon: <FaDatabase />,
        title: "Data Analytics & Insights",
        description: "Unlock the power of your data with our data analytics services. We transform raw data into actionable insights, driving smarter business decisions and delivering predictive analytics.",
    },
    {
        icon: <MdOutlineScreenSearchDesktop />,
        title: "Artificial Intelligence & Automation",
        description: "Our AI solutions help businesses automate tasks, gain insights, and enhance customer experiences. From NLP to computer vision, we deliver innovative AI solutions.",
    },
    {
        icon: <FaSearch />,
        title: "SEO & Content Marketing",
        description: "Boost your online presence with our SEO and content marketing services. We help your brand rank higher in search engine results and build long-term relationships with your customers.",
    },
    {
        icon: <FaUserFriends />,
        title: "Staff Augmentation",
        description: "Our staff augmentation services provide businesses with the talent they need to scale quickly. We offer skilled professionals who integrate seamlessly with your existing teams.",
    },
];

const ServicesComponent = () => {
    return (
        <div className="py-16 bg-teal-50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-teal-900 mb-4">OUR SERVICES</h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2 animate-fadeIn min-h-[320px] flex border-t-4 border-orange-500 hover:border-teal-600"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex items-start">
                                <div className="icon-container bg-orange-500 text-white text-2xl rounded-full p-3 mr-4 flex items-center justify-center">
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-teal-900 mb-2">{service.title}</h3>
                                    <p className="text-gray-700 text-left text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesComponent;
