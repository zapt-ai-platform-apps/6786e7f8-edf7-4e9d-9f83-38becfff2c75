import React, { useState } from 'react';

export default function Questionnaire({ onSubmit }) {
  const [riskTolerance, setRiskTolerance] = useState('');
  const [timeframe, setTimeframe] = useState('');
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!riskTolerance || !timeframe || !country) {
      alert('Please fill in all fields');
      return;
    }
    setLoading(true);
    onSubmit({ riskTolerance, timeframe, country });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <form onSubmit={handleSubmit} className="max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Please answer the following questions:</h2>
        <div className="mb-4">
          <label className="block mb-1">What is your risk tolerance?</label>
          <select value={riskTolerance} onChange={(e) => setRiskTolerance(e.target.value)} className="w-full border rounded px-3 py-2 box-border">
            <option value="">Select</option>
            <option value="Low">Low</option>
            <option value="Low-Medium">Low-Medium</option>
            <option value="Medium">Medium</option>
            <option value="Medium-High">Medium-High</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1">What is your investment timeframe (in years)?</label>
          <input type="number" min="1" value={timeframe} onChange={(e) => setTimeframe(e.target.value)} className="w-full border rounded px-3 py-2 box-border" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">In which country are you based?</label>
          <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} className="w-full border rounded px-3 py-2 box-border" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
        <div className="mt-6">
          <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500">Made on ZAPT</a>
        </div>
      </form>
    </div>
  );
}