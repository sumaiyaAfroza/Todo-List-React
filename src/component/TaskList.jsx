import React from 'react';

const FaStar = ({ className, size }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export const TaskList = ({onEdit, onDelete, onFav, allTasks }) => {
  console.log(allTasks);
  const getPriorityColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'high': return 'bg-red-500/10 text-red-400 border-red-500/30';
      case 'medium': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30';
      case 'low': return 'bg-green-500/10 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-fixed">
        <thead>
        <tr className="border-b border-gray-700/50">
          <th className="p-4 pb-6 text-sm font-semibold w-[48px] text-gray-400"></th>
          <th className="p-4 pb-6 text-sm font-semibold w-[20%] text-left text-gray-300">Title</th>
          <th className="p-4 pb-6 text-sm font-semibold w-[30%] text-left text-gray-300">Description</th>
          <th className="p-4 pb-6 text-sm font-semibold w-[20%] text-center text-gray-300">Tags</th>
          <th className="p-4 pb-6 text-sm font-semibold w-[12%] text-center text-gray-300">Priority</th>
          <th className="p-4 pb-6 text-sm font-semibold w-[18%] text-center text-gray-300">Options</th>
        </tr>
        </thead>
        <tbody>
        {allTasks.map((task, index) => (
          <tr key={task.id} className="group border-b border-gray-700/30 hover:bg-gray-800/30 transition-all duration-200 [&>td]:align-baseline [&>td]:px-4 [&>td]:py-4">
            <td>
              <button onClick={() => onFav(task.id)} className="transition-all duration-300 hover:scale-125 active:scale-95">
                {task.isFavorite ? (
                  <FaStar className="text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" size={18} />
                ) : (
                  <FaStar className="text-gray-600 hover:text-gray-400 transition-colors" size={18} />
                )}
              </button>
            </td>
            <td>
              <div className="font-medium text-gray-100 group-hover:text-white transition-colors">
                {task.title}
              </div>
            </td>
            <td>
              <div className="text-sm text-gray-400 line-clamp-2 leading-relaxed">
                {task.description}
              </div>
            </td>
            <td>
              <ul className="flex justify-center gap-1.5 flex-wrap">
                {task.tags.map((tag) => (
                  <li key={tag}>
                                <span className="inline-flex items-center h-6 px-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 text-xs font-medium capitalize text-emerald-300 backdrop-blur-sm transition-all duration-200 hover:from-emerald-500/30 hover:to-teal-500/30 hover:border-emerald-400/50 hover:scale-105">
                                    {tag}
                                </span>
                  </li>
                ))}
              </ul>
            </td>
            <td className="text-center">
                        <span className={`inline-flex items-center justify-center px-3 py-1 rounded-lg border text-xs font-semibold backdrop-blur-sm transition-all duration-200 hover:scale-105 ${getPriorityColor(task.priority)}`}>
                            {task.priority}
                        </span>
            </td>
            <td>
              <div className="flex items-center justify-center gap-2">
                <button className="group/btn flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-medium transition-all duration-200 hover:bg-blue-500/20 hover:border-blue-400/50 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95" onClick={() => onEdit(task)}>
                  <svg className="w-3.5 h-3.5 transition-transform group-hover/btn:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Edit
                </button>
                <button className="group/btn flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium transition-all duration-200 hover:bg-red-500/20 hover:border-red-400/50 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20 active:scale-95" 
                        onClick={() => onDelete(task.id, task.title)}>
                  <svg className="w-3.5 h-3.5 transition-transform group-hover/btn:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};