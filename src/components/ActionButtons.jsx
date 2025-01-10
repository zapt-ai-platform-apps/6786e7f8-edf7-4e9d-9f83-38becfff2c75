import React from 'react';
import { FaPrint, FaSave, FaShareAlt } from 'react-icons/fa';

export default function ActionButtons() {
  return (
    <div className="flex space-x-4 mb-8">
      <button className="cursor-pointer" onClick={() => window.print()} title="Print">
        <FaPrint size={24} />
      </button>
      <button className="cursor-pointer" onClick={() => {/* Implement Save functionality */}} title="Save">
        <FaSave size={24} />
      </button>
      <button className="cursor-pointer" onClick={() => {/* Implement Share functionality */}} title="Share">
        <FaShareAlt size={24} />
      </button>
    </div>
  );
}