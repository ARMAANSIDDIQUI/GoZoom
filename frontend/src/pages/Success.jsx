import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-20 px-4 text-center font-['Lato',sans-serif]">
      <img
        src="/images/success image.webp"
        alt="Success"
        className="w-[200px] max-w-full mb-8 mx-auto"
      />
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You for Contacting Us</h1>
      <p className="text-[18px] text-gray-600 mb-8 leading-relaxed">
        Thank you for submitting the form. We have received your information.<br />
        We will contact you shortly. Meanwhile, you can check our other services.
      </p>
      <Link
        to="/"
        className="inline-block bg-[#007bff] hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md transition-colors text-[17px]">
        Go Back to Homepage
      </Link>
    </div>
  );
};

export default Success;
