import { useState, useEffect } from 'react';
import { createEvent } from '../supabaseClient';

const allocationPrompt = ({ riskTolerance, timeframe, country }) => `
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

export default function useFetchResult(userData) {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const { riskTolerance, timeframe, country } = userData;
        const prompt = allocationPrompt({ riskTolerance, timeframe, country });

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

  return { result, loading };
}