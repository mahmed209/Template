import React from 'react';
import Image1 from '../assets/img/envato-Client1.png';
import Image2 from '../assets/img/envato-Client2.png';
import Image3 from '../assets/img/envato-Client3.png';
import Image4 from '../assets/img/envato-Client4.png';
import Image5 from '../assets/img/envato-Client5.png';
import Image6 from '../assets/img/envato-Client6.png';
import Image7 from '../assets/img/envato-Client7.png';
import Image8 from '../assets/img/envato-Client2.png';

const workItems = [
  {
    title: "Advanced Inventory Management",
    description: "A complete inventory management system designed to optimize stock control with real-time alerts, advanced reporting features, and administrative controls.",
    tools: "SQL Server 2008, Visual Studio 2010, Reporting Services",
    image: Image1, 
  },
  {
    title: "Crew Coordination App",
    description: "A mobile application paired with a web-based admin module that allows efficient crew management and real-time updates for project coordination.",
    tools: "Android, ASP.NET",
    image: Image2,
  },
  {
    title: "Business Management Platform",
    description: "A custom-built web platform for 'Foreworld' to manage stores, users, employees, attendance, and other critical business processes.",
    tools: "Not specified",
    image: Image3,
  },
  {
    title: "Immigration Consultancy Platform",
    description: "A dynamic website designed for immigration consultancy, featuring an admin dashboard, point calculation system, and application tracking.",
    tools: "Bootstrap 2, CakePHP, MySQL, JQuery, Ajax",
    image: Image4,
  },
  {
    title: "Secure Portal for Accountants",
    description: "A secure platform for accountants to share confidential client data with encryption, featuring both web and Android interfaces.",
    tools: "Not specified",
    image: Image5,
  },
  {
    title: "Travel Booking Platform",
    description: "A comprehensive online booking system that integrates hotel reservations and travel bookings, streamlining the booking process for agencies.",
    tools: "Bootstrap 3.1, PHP, MySQL, Ajax, JQuery",
    image: Image6,
  },
  {
    title: "Corporate Website for Naco Associates",
    description: "A static website designed to promote and enhance the digital presence of 'Naco Associates', showcasing their services and business offerings.",
    tools: "Bootstrap 3.1, HTML5, CSS3",
    image: Image7,
  },
  {
    title: "Telemedicine Platform - EZ Health",
    description: "A telemedicine platform that enables secure face-to-face interactions between doctors and patients, with multilingual support for global reach.",
    tools: ".NET Core, SQL Server 2017",
    image: Image8,
  },
];

const WorkComponent = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">Our Work</h2>
        <div className="w-24 h-1 bg-purple-400 mb-6 mx-auto"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workItems.map((item, index) => (
            <div key={index} className="bg-white border-2 border-blue-800 rounded-lg shadow-md p-6 flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl hover:border-purple-700">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm mb-2">{item.description}</p>
              <p className="text-gray-500 text-xs font-medium">{item.tools}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkComponent;
