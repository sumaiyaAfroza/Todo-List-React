import React from 'react';
import FavoriteButton from "./FavoriteButton.jsx";
import PriorityBadge from "./PriorityBadge.jsx";
import TagList from "./TagList.jsx";
import TasksActions from "./TasksActions.jsx";

const TaskCard = ({ task, onEdit, onDelete, onFav }) => (
  <div className="border border-gray-700/30 rounded-lg p-5 hover:bg-gray-800/30 duration-200 bg-gray-800/10 h-[180px] flex flex-col">
    <div className="flex items-start justify-between gap-4 mb-3">
      <div className="flex items-start gap-3 flex-1 min-h-0">
        <FavoriteButton isFavorite={task.isFavorite} onClick={() => onFav(task.id)} />

        <div className="flex-1 min-w-0">
          <h3 className="text-gray-100 font-semibold text-lg mb-1 line-clamp-1">{task.title}</h3>
          <p className="text-gray-400 text-sm line-clamp-2">{task.description}</p>
        </div>
      </div>

      <PriorityBadge priority={task.priority} />
    </div>

    <div className="flex-1 min-h-0 overflow-hidden">
      <TagList tags={task.tags} />
    </div>

    <TasksActions onEdit={onEdit} onDelete={onDelete} task={task} />
  </div>
)

export default TaskCard;