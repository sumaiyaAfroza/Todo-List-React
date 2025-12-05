export const PriorityFilter = ({ selectedPriority, onPriorityChange }) => {
  const priorities = [
    { value: 'all', label: 'All', color: 'from-gray-600 to-gray-700', icon: '◆' },
    { value: 'high', label: 'High', color: 'from-red-500 to-red-600', icon: '▲' },
    { value: 'medium', label: 'Medium', color: 'from-yellow-500 to-yellow-600', icon: '■' },
    { value: 'low', label: 'Low', color: 'from-green-500 to-green-600', icon: '▼' }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto mb-6">
      <div className="flex items-center gap-2 mb-3">
        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        <h3 className="text-sm font-semibold text-gray-300">Filter by Priority</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {priorities.map((priority) => (
          <button
            key={priority.value}
            onClick={() => onPriorityChange(priority.value)}
            className={`group relative overflow-hidden rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
              selectedPriority === priority.value
                ? `bg-gradient-to-r ${priority.color} text-white shadow-lg scale-105`
                : 'bg-gray-800 text-gray-300 hover:bg-gray-750 hover:scale-105'
            }`}
          >
            <span className="flex items-center gap-2">
              <span className="text-base">{priority.icon}</span>
              {priority.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};