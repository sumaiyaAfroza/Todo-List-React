import React from 'react';
const PRIORITY_COLORS = {
  high: "bg-red-500/10 text-red-400 border-red-500/30",
  medium: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  low: "bg-green-500/10 text-green-400 border-green-500/30",
  default: "bg-gray-500/10 text-gray-400 border-gray-500/30"
}

const PriorityBadge = ({ priority }) => {
  const colorClass = PRIORITY_COLORS[priority?.toLowerCase()] || PRIORITY_COLORS.default

  return (
    <span className={`px-3 py-1 rounded-lg border text-xs font-semibold shrink-0 ${colorClass}`}>
      {priority}
    </span>
  )
}

export default PriorityBadge;