export const allocationPrompt = ({ riskTolerance, timeframe, country }) => `
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