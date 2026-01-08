import React from 'react';

// Icon Components
const FaStar = ({ className, size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const FavoriteButton = ({ isFavorite, onClick }) => (
  <button onClick={onClick} className="mt-1 shrink-0" aria-label="Toggle favorite">
    <FaStar
      className={isFavorite
        ? "text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]"
        : "text-gray-600 hover:text-gray-400"
      }
      size={18}
    />
  </button>
)

export default FavoriteButton;