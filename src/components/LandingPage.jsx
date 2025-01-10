import React from 'react';

export default function LandingPage({ onConsent }) {
  const handleYes = () => {
    onConsent(true);
  };
  const handleNo = () => {
    onConsent(false);
  };
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">Welcome to Better Investor!</h1>
        <p className="mb-4">
          Better Investor is an Investment Portfolio Designer that helps DIY investors by suggesting ideas for structuring a personalized investment portfolio comprising an optimal allocation of asset classes to suit their investment preferences and risk appetite.
        </p>
        <p className="mb-4">
          Please be aware that the information and responses provided within this app are for informational and educational purposes only. They are not intended to constitute, nor should they be considered as, financial advice. We strongly recommend that you consult with a qualified Financial Advisor before making any investment decisions based on the content in this app. Our resources are designed to guide and inform, but your personal financial situation may require professional advice tailored to your specific needs.
        </p>
        <p className="mb-4">
          Always remember that the value of investments can go down as well as up, and you may get back less than you invested.
        </p>
        <p className="mb-4">
          If you wish to continue, please confirm below that you understand that the Better Investor app does not provide financial advice and is intended purely for informational purposes only.
        </p>
        <div className="flex space-x-4 mt-6">
          <button onClick={handleYes} className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Yes, I understand</button>
          <button onClick={handleNo} className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer">No, I do not understand</button>
        </div>
        <div className="mt-6">
          <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500">Made on ZAPT</a>
        </div>
      </div>
    </div>
  );
}