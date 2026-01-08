import React from 'react';

const ChevronLeft = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 18l-6-6 6-6" />
  </svg>
)

const ChevronRight = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18l6-6-6-6" />
  </svg>
)
const NavigationButton = ({ onClick, disabled, direction }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`flex items-center justify-center w-9 h-9 rounded-lg border transition-all ${
      disabled
        ? "border-gray-700/30 text-gray-600 cursor-not-allowed"
        : "border-gray-700/30 text-gray-400 hover:bg-gray-700/30 hover:border-gray-600/50"
    }`}
    aria-label={direction === 'prev' ? 'Previous page' : 'Next page'}
  >
    {direction === 'prev' ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
  </button>
)

export default NavigationButton;