import React from 'react';

const Cancel = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Payment Cancelled</h1>
        <p className="text-gray-600 mb-6">Your payment has been cancelled. Please try again or contact support for assistance.</p>
        <button
          className="mt-6 px-6 py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 focus:outline-none"
          onClick={() => window.location.href = '/'}
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default Cancel;
