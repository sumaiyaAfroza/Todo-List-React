

export const TAG_COLORS = {
  work: {
    from: '#3b82f6',
    to: '#2563eb',
    solid: '#3b82f6',
    light: 'rgba(59, 130, 246, 0.2)'
  },
  personal: {
    from: '#a855f7',
    to: '#9333ea',
    solid: '#a855f7',
    light: 'rgba(168, 85, 247, 0.2)'
  },
  urgent: {
    from: '#ef4444',
    to: '#dc2626',
    solid: '#ef4444',
    light: 'rgba(239, 68, 68, 0.2)'
  },
  later: {
    from: '#6b7280',
    to: '#4b5563',
    solid: '#6b7280',
    light: 'rgba(107, 114, 128, 0.2)'
  },
  shopping: {
    from: '#ec4899',
    to: '#db2777',
    solid: '#ec4899',
    light: 'rgba(236, 72, 153, 0.2)'
  },
  health: {
    from: '#10b981',
    to: '#059669',
    solid: '#10b981',
    light: 'rgba(16, 185, 129, 0.2)'
  },
  finance: {
    from: '#eab308',
    to: '#ca8a04',
    solid: '#eab308',
    light: 'rgba(234, 179, 8, 0.2)'
  },
  learning: {
    from: '#6366f1',
    to: '#4f46e5',
    solid: '#6366f1',
    light: 'rgba(99, 102, 241, 0.2)'
  }
};

export const DEFAULT_TAG_COLOR = {
  from: '#14b8a6',
  to: '#0d9488',
  solid: '#14b8a6',
  light: 'rgba(20, 184, 166, 0.2)'
};

// Helper function for TagFilter (gradient background)
export const getTagGradientStyle = (tag) => {
  const colors = TAG_COLORS[tag.toLowerCase()] || DEFAULT_TAG_COLOR;
  return {
    background: `linear-gradient(to right, ${colors.from}, ${colors.to})`
  };
};

// Helper function for TaskList (solid background with light opacity)
export const getTagSolidStyle = (tag) => {
  const colors = TAG_COLORS[tag.toLowerCase()] || DEFAULT_TAG_COLOR;
  return {
    backgroundColor: colors.light,
    borderColor: colors.solid + '80', // 50% opacity
    color: colors.solid
  };
};