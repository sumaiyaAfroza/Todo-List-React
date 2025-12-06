import React from 'react';

const SearchTask = ({onSearch}) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <div className={`relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 transition-all duration-300 ${isFocused ? 'ring-2 ring-blue-500 shadow-lg shadow-blue-500/20' : 'ring-1 ring-gray-700 hover:ring-gray-600'}`}>
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-4-4m0-7A7 7 0 1 1 3 10a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input
            type="search"
            className="w-full bg-transparent pl-12 pr-24 py-4 text-gray-100 text-base placeholder:text-gray-500 focus:outline-none"
            placeholder="Search for tasks..."
            value={searchTerm}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={handleKeyDown}
          />
          {searchTerm && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-16 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          <button
            type="button"
            onClick={handleClick}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition-all duration-200 hover:shadow-lg active:scale-95 flex items-center gap-2"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-4-4m0-7A7 7 0 1 1 3 10a7 7 0 0 1 14 0Z" />
            </svg>
            <span className="hidden sm:inline text-sm font-medium">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchTask;