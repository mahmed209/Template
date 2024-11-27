import React from 'react';
import { BsSkype, BsTelephone, BsGeoAlt } from 'react-icons/bs';

const ContactUs = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-8 py-16 bg-gray-50">
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 text-gray-800">
        <h2 className="text-center text-2xl font-semibold mb-2 text-gray-700">Contact Us</h2>
        <h1 className="text-center text-5xl font-bold mb-6 text-green-800">We’d Love to Hear from You!</h1>
        <h3 className="text-lg font-semibold mb-2">Stay Connected</h3>
        <p className="text-gray-600 mb-8 text-lg">
          Reach out to us with your questions, feedback, or collaboration ideas. Our team is here to help you make the most of our products and services.
        </p>

        <div className="flex items-start mb-6">
          <BsSkype className="text-4xl text-blue-700 mr-4" />
          <div>
            <h4 className="text-xl font-bold">Skype</h4>
            <p className="text-lg text-gray-600">support@yourbusiness.com</p>
          </div>
        </div>

        <div className="flex items-start mb-6">
          <BsTelephone className="text-4xl text-green-700 mr-4" />
          <div>
            <h4 className="text-xl font-bold">Phone</h4>
            <p className="text-lg text-gray-600">+1 234 567 890</p>
          </div>
        </div>

        <div className="flex items-start">
          <BsGeoAlt className="text-4xl text-red-600 mr-4" />
          <div>
            <h4 className="text-xl font-bold">Office Location</h4>
            <p className="text-lg text-gray-600">
              123 Envato Market Street, Melbourne, Australia
            </p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-8">
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-lg"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-800 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
