import React from 'react';

const MAX_VISIBLE_PAGES = 6

const PageDropdown = ({ totalPages, currentPage, onPageSelect, show }) => {
  if (!show) return null

  const remainingPages = Array.from({ length: totalPages - MAX_VISIBLE_PAGES }, (_, i) => i + MAX_VISIBLE_PAGES + 1)

  return (
    <div className="absolute bottom-full right-0 mb-2 w-80 bg-gray-900 border border-gray-700/50 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-sm overflow-hidden animate-[dropdownSlide_0.2s_ease-out] z-50">
      <div className="p-4 border-b border-gray-700/50 bg-gray-800/30">
        <h4 className="text-sm font-semibold text-gray-200">More Pages</h4>
        <p className="text-xs text-gray-400 mt-0.5">Pages {MAX_VISIBLE_PAGES + 1} to {totalPages}</p>
      </div>

      <div className="p-4 max-h-64 overflow-y-auto">
        <div className="grid grid-cols-6 gap-2">
          {remainingPages.map((page) => (
            <button
              key={page}
              onClick={() => onPageSelect(page)}
              className={`h-10 rounded-lg border font-semibold text-sm transition-all ${
                currentPage === page
                  ? "bg-blue-500/20 border-blue-500/50 text-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.4)] scale-105"
                  : "border-gray-700/30 text-gray-400 hover:bg-gray-800/50 hover:border-gray-600/50 hover:text-gray-300"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>

      <div className="p-3 border-t border-gray-700/50 bg-gray-800/30">
        <div className="text-xs text-gray-400 text-center">
          Current: <span className="font-semibold text-blue-400">Page {currentPage}</span>
        </div>
      </div>
    </div>
  )
}

export default PageDropdown;