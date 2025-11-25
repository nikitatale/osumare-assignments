

import React from 'react';

const ThankYou = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm text-center relative border-t-4 border-red-500">
       

        <div className="flex justify-center mb-4">
         
          <span className="text-red-500 text-3xl">❤️</span>
         
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mb-2">Thank you for connect with us.</h3>
        <p className="text-gray-600 text-sm mb-6">
          Our team will contacting with you soon.
        </p>

        <button
          onClick={onClose} 
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#FF3E54] hover:bg-[#ff3e54be] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default ThankYou;