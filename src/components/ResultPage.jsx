import React, { useState, useEffect } from 'react';
import { createEvent } from '../supabaseClient';
import AllocationTable from './AllocationTable';
import ActionButtons from './ActionButtons';

export default function ResultPage({ userData }) {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const { riskTolerance, timeframe, country } = userData;
        const prompt = `
Generate a suggested asset allocation based on the risk tolerance "${riskTolerance}" and investment timeframe of ${timeframe} years which would be suitable for an investor based in ${country}. While the country in which the investor is based should be taken into account, the portfolio should be truly global in outlook and should be structured to maximize returns rather than being home country biased.

Asset classes within the asset allocation should include (but not be limited to) North American Equity, UK Equity, European Equity, Asia & Pacific Equity, Japan Equity, Emerging Markets, Alternative Investments, Property, Fixed Interest, Cash or Cash Equivalents. The percentages allocated to the asset classes should add up to a total asset allocation of 100%.

For each asset class, suggest 3 suitable funds with good long-term track performance records (including one ETF or Tracker fund, one investment trust and one managed fund).

Combine the asset allocation and the suggested funds into a neatly organized array. The array should be stored in the property "allocation_table", with each element containing:
{
  "Asset Class": "string",
  "Percentage": "number",
  "Example Funds": ["string", "string", "string"]
}

Based on your stated risk tolerance ("${riskTolerance}"), investment timeframe (${timeframe}) and your home country (${country}), I have provided the suggested asset allocation and associated funds.

Return ONLY the JSON object with the "allocation_table" property.
`;

        const response = await createEvent('chatgpt_request', {
          prompt: prompt,
          response_type: 'json'
        });

        if (response && response.allocation_table) {
          setResult(response.allocation_table);
          console.log('Allocation Table:', response.allocation_table);
        } else {
          setResult(null);
        }
      } catch (error) {
        console.error(error);
        setResult(null);
      }
      setLoading(false);
    };
    fetchResult();
  }, [userData]);

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
        Thank you for using the BetterInvestor.net Global Investment Portfolio Designer! Please be aware that the information and responses provided within our app are for informational and educational purposes only. They are not intended to constitute, nor should they be considered as, financial advice. We strongly recommend that you consult with a qualified Financial Advisor before making any investment decisions based on the content in this app. Our resources are designed to guide and inform, but your personal financial situation may require professional advice tailored to your specific needs. Thank you for using our app and happy investing!
      </p>
      <div className="mt-6">
        <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500">Made on ZAPT</a>
      </div>
    </div>
  );
}