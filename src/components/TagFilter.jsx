
import {getTagGradientStyle} from './tagColors.js';

export const TagFilter = ({ availableTags, selectedTags, onTagToggle, onClearTags }) => {
  return (
    <div className="w-full max-w-2xl mx-auto mb-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
          <h3 className="text-sm font-semibold text-gray-300">Filter by Tags</h3>
        </div>
        {selectedTags.length > 0 && (
          <button
            onClick={onClearTags}
            className="text-xs text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-1"
          >
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Clear all
          </button>
        )}
      </div>
      {availableTags.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {availableTags.map((tag) => {
            const isSelected = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => onTagToggle(tag)}
                style={isSelected ? getTagGradientStyle(tag) : {}}
                className={`group relative overflow-hidden rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isSelected
                    ? 'text-white shadow-lg scale-105'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105'
                }`}
              >
                <span className="flex items-center gap-2">
                  {isSelected && (
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  {tag}
                </span>
              </button>
            );
          })}
        </div>
      ) : (
        <p className="text-sm text-gray-500 italic">No tags available</p>
      )}
    </div>
  );
};