import React from 'react';

export default function AllocationTable({ result }) {
  return (
    <table className="w-full max-w-2xl mb-4 table-auto border-collapse">
      <thead>
        <tr>
          <th className="border px-4 py-2">Asset Class</th>
          <th className="border px-4 py-2">Percentage</th>
          <th className="border px-4 py-2">Example Funds</th>
        </tr>
      </thead>
      <tbody>
        {result.map((row, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{row['Asset Class']}</td>
            <td className="border px-4 py-2">{row['Percentage']}%</td>
            <td className="border px-4 py-2">{row['Example Funds'].join(', ')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}