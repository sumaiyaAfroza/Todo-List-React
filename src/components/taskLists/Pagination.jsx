import React, {useState} from 'react';
import NavigationButton from "./NavigationButton.jsx";
import PageButton from "./PageButton.jsx";
import PageDropdown from "./PageDropdown.jsx";



const GridIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
)

const MAX_VISIBLE_PAGES = 6

const Pagination = ({currentPage, totalPages, startIndex, endIndex, totalItems, onPageChange}) => {
     const [showDropdown, setShowDropdown] = useState(false)
     const visiblePages = Array.from({ length: Math.min(MAX_VISIBLE_PAGES, totalPages) }, (_, i) => i + 1)

  const handlePageSelect = (page) => {
    onPageChange(page)
    setShowDropdown(false)
  }

  if (totalPages <= 1) return null

  return (
    <div className="flex items-center justify-between border-t border-gray-700/30 pt-6">
      <div className="text-sm text-gray-400">
        Showing <span className="font-semibold text-gray-300">{startIndex + 1}</span> to{" "}
        <span className="font-semibold text-gray-300">{Math.min(endIndex, totalItems)}</span> of{" "}
        <span className="font-semibold text-gray-300">{totalItems}</span> tasks
      </div>

      <div className="flex items-center gap-2">
        <NavigationButton
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          direction="prev"
        />

        <div className="flex items-center gap-1">
          {visiblePages.map((page) => (
            <PageButton
              key={page}
              page={page}
              isActive={currentPage === page}
              onClick={handlePageSelect}
            />
          ))}

          {totalPages > MAX_VISIBLE_PAGES && (
            <div
              className="relative ml-1"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="flex items-center gap-1.5 px-3 h-9 rounded-lg border border-purple-500/30 bg-purple-500/10 text-purple-400 font-medium text-sm hover:bg-purple-500/20 hover:shadow-[0_0_12px_rgba(168,85,247,0.3)] transition-all">
                <GridIcon size={14} />
                Show All
              </button>

              <PageDropdown
                totalPages={totalPages}
                currentPage={currentPage}
                onPageSelect={handlePageSelect}
                show={showDropdown}
              />
            </div>
          )}
        </div>

        <NavigationButton
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          direction="next"
        />
      </div>
    </div>
  )
}

export default Pagination;