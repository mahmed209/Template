import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center py-4 bg-gray-100 text-gray-700 text-sm">
      <p>
        &copy; 2024 - [YourBrandName] |{' '}
        <a
          href="#"
          className="text-blue-500 hover:underline mx-2"
        >
          Privacy Policy
        </a>
        |{' '}
        <a
          href="#"
          className="text-blue-500 hover:underline mx-2"
        >
          Terms of Service
        </a>
        |{' '}
        <a
          href="#"
          className="text-blue-500 hover:underline mx-2"
        >
          Support
        </a>
      </p>
      <p className="mt-2">
        Designed with ♥ by{' '}
        <a
          href="https://yourwebsite.com"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          YourBrandName
        </a>
      </p>
      <p className="mt-2">
        <a
          href="mailto:support@yourbrand.com"
          className="text-blue-500 hover:underline"
        >
          support@yourbrand.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
