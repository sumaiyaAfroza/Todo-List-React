import React, {useState} from 'react';

const SearchTask = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const handleChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value)
  }
  const handleClear = () => {
    setSearchTerm('')
    onSearch('')
  }


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
            className="w-full bg-transparent pl-12 pr-12 py-4 text-gray-100 text-base placeholder:text-gray-500 focus:outline-none"
            placeholder="Search for tasks..."
            value={searchTerm}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {searchTerm && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
            ></button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchTask;