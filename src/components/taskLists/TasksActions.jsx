import React from 'react';

const TasksActions = ({ onEdit, onDelete, task }) => (
  <div className="flex justify-end gap-2">
    <button
      className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs hover:bg-blue-500/20 transition-colors"
      onClick={() => onEdit(task)}
    >
      Edit
    </button>
    <button
      className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs hover:bg-red-500/20 transition-colors"
      onClick={() => onDelete(task.id, task.title)}
    >
      Delete
    </button>
  </div>
)

export default TasksActions;