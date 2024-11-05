// src/components/SuccessModal.jsx
import React from 'react';

function SuccessModal({ isVisible, onClose, title, message }) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 text-center bg-white rounded shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
        <p className="mb-4 text-gray-700">{message}</p>
        <button 
          onClick={onClose} 
          className="bg-[#8cd836] text-white px-4 py-2 rounded font-semibold"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;