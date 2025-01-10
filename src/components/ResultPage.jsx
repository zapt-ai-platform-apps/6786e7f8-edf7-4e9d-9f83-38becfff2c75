import React from 'react';
import AllocationTable from './AllocationTable';
import ActionButtons from './ActionButtons';
import useFetchResult from '../hooks/useFetchResult';

export default function ResultPage({ userData }) {
  const { result, loading } = useFetchResult(userData);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Generating your portfolio allocation...</p>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Sorry, we could not generate your portfolio at this time.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <h2 className="text-xl font-bold mb-4">Your Suggested Investment Portfolio</h2>
      <AllocationTable result={result} />
      <p className="mb-4">Report Date: {new Date().toLocaleDateString()}</p>
      <ActionButtons />
      <p className="text-center mb-4">
        Thank you for using the Better Investor! Please be aware that the information and responses provided within our app are for informational and educational purposes only. They are not intended to constitute, nor should they be considered as, financial advice. We strongly recommend that you consult with a qualified Financial Advisor before making any investment decisions based on the content in this app. Our resources are designed to guide and inform, but your personal financial situation may require professional advice tailored to your specific needs. Thank you for using our app and happy investing!
      </p>
      <div className="mt-6">
        <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500">Made on ZAPT</a>
      </div>
    </div>
  );
}