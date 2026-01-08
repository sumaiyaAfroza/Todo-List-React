import React from 'react';

const PageButton = ({ page, isActive, onClick }) => (
  <button
    onClick={() => onClick(page)}
    className={`w-9 h-9 rounded-lg border font-medium text-sm transition-all ${
      isActive
        ? "bg-blue-500/20 border-blue-500/50 text-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.3)]"
        : "border-gray-700/30 text-gray-400 hover:bg-gray-700/30 hover:border-gray-600/50"
    }`}
  >
    {page}
  </button>
)

export default PageButton;