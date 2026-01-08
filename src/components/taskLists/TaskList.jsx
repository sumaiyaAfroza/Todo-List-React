



// import { getTagSolidStyle } from "./tagColors.js"
// import { useState } from "react"
//
// // Icon Components
// const FaStar = ({ className, size }) => (
//   <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
//     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//   </svg>
// )
//
// const ChevronLeft = ({ size = 20 }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M15 18l-6-6 6-6" />
//   </svg>
// )
//
// const ChevronRight = ({ size = 20 }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M9 18l6-6-6-6" />
//   </svg>
// )
//
// const GridIcon = ({ size = 16 }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <rect x="3" y="3" width="7" height="7" />
//     <rect x="14" y="3" width="7" height="7" />
//     <rect x="14" y="14" width="7" height="7" />
//     <rect x="3" y="14" width="7" height="7" />
//   </svg>
// )
//
// // Constants
// const taskPerPage = 3
// const MAX_VISIBLE_PAGES = 6
// const PRIORITY_COLORS = {
//   high: "bg-red-500/10 text-red-400 border-red-500/30",
//   medium: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
//   low: "bg-green-500/10 text-green-400 border-green-500/30",
//   default: "bg-gray-500/10 text-gray-400 border-gray-500/30"
// }
//
// // Sub-components
// const FavoriteButton = ({ isFavorite, onClick }) => (
//   <button onClick={onClick} className="mt-1 shrink-0" aria-label="Toggle favorite">
//     <FaStar
//       className={isFavorite
//         ? "text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]"
//         : "text-gray-600 hover:text-gray-400"
//       }
//       size={18}
//     />
//   </button>
// )
//
// const PriorityBadge = ({ priority }) => {
//   const colorClass = PRIORITY_COLORS[priority?.toLowerCase()] || PRIORITY_COLORS.default
//
//   return (
//     <span className={`px-3 py-1 rounded-lg border text-xs font-semibold shrink-0 ${colorClass}`}>
//       {priority}
//     </span>
//   )
// }
//
// const TagList = ({ tags }) => (
//   <div className="flex flex-wrap gap-2 mb-3 overflow-hidden">
//     {tags.map((tag) => (
//       <span
//         key={tag}
//         style={getTagSolidStyle(tag)}
//         className="inline-flex h-6 px-3 rounded-full text-xs capitalize whitespace-nowrap"
//       >
//         {tag}
//       </span>
//     ))}
//   </div>
// )
//
// const TaskActions = ({ onEdit, onDelete, task }) => (
//   <div className="flex justify-end gap-2">
//     <button
//       className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs hover:bg-blue-500/20 transition-colors"
//       onClick={() => onEdit(task)}
//     >
//       Edit
//     </button>
//     <button
//       className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs hover:bg-red-500/20 transition-colors"
//       onClick={() => onDelete(task.id, task.title)}
//     >
//       Delete
//     </button>
//   </div>
// )
//

// =========
// const TaskCard = ({ task, onEdit, onDelete, onFav }) => (
//   <div className="border border-gray-700/30 rounded-lg p-5 hover:bg-gray-800/30 duration-200 bg-gray-800/10 h-[180px] flex flex-col">
//     <div className="flex items-start justify-between gap-4 mb-3">
//       <div className="flex items-start gap-3 flex-1 min-h-0">
//         <FavoriteButton isFavorite={task.isFavorite} onClick={() => onFav(task.id)} />
//
//         <div className="flex-1 min-w-0">
//           <h3 className="text-gray-100 font-semibold text-lg mb-1 line-clamp-1">{task.title}</h3>
//           <p className="text-gray-400 text-sm line-clamp-2">{task.description}</p>
//         </div>
//       </div>
//
//       <PriorityBadge priority={task.priority} />
//     </div>
//
//     <div className="flex-1 min-h-0 overflow-hidden">
//       <TagList tags={task.tags} />
//     </div>
//
//     <TaskActions onEdit={onEdit} onDelete={onDelete} task={task} />
//   </div>
// )
//
// const PageButton = ({ page, isActive, onClick }) => (
//   <button
//     onClick={() => onClick(page)}
//     className={`w-9 h-9 rounded-lg border font-medium text-sm transition-all ${
//       isActive
//         ? "bg-blue-500/20 border-blue-500/50 text-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.3)]"
//         : "border-gray-700/30 text-gray-400 hover:bg-gray-700/30 hover:border-gray-600/50"
//     }`}
//   >
//     {page}
//   </button>
// )
//
// const NavigationButton = ({ onClick, disabled, direction }) => (
//   <button
//     onClick={onClick}
//     disabled={disabled}
//     className={`flex items-center justify-center w-9 h-9 rounded-lg border transition-all ${
//       disabled
//         ? "border-gray-700/30 text-gray-600 cursor-not-allowed"
//         : "border-gray-700/30 text-gray-400 hover:bg-gray-700/30 hover:border-gray-600/50"
//     }`}
//     aria-label={direction === 'prev' ? 'Previous page' : 'Next page'}
//   >
//     {direction === 'prev' ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
//   </button>
// )
//
// // showall hover korle page dropdown
// const PageDropdown = ({ totalPages, currentPage, onPageSelect, show }) => {
//   if (!show) return null
//
//   const remainingPages = Array.from({ length: totalPages - MAX_VISIBLE_PAGES }, (_, i) => i + MAX_VISIBLE_PAGES + 1)
//
//   return (
//     <div className="absolute bottom-full right-0 mb-2 w-80 bg-gray-900 border border-gray-700/50 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-sm overflow-hidden animate-[dropdownSlide_0.2s_ease-out] z-50">
//       <div className="p-4 border-b border-gray-700/50 bg-gray-800/30">
//         <h4 className="text-sm font-semibold text-gray-200">More Pages</h4>
//         <p className="text-xs text-gray-400 mt-0.5">Pages {MAX_VISIBLE_PAGES + 1} to {totalPages}</p>
//       </div>
//
//       <div className="p-4 max-h-64 overflow-y-auto">
//         <div className="grid grid-cols-6 gap-2">
//           {remainingPages.map((page) => (
//             <button
//               key={page}
//               onClick={() => onPageSelect(page)}
//               className={`h-10 rounded-lg border font-semibold text-sm transition-all ${
//                 currentPage === page
//                   ? "bg-blue-500/20 border-blue-500/50 text-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.4)] scale-105"
//                   : "border-gray-700/30 text-gray-400 hover:bg-gray-800/50 hover:border-gray-600/50 hover:text-gray-300"
//               }`}
//             >
//               {page}
//             </button>
//           ))}
//         </div>
//       </div>
//
//       <div className="p-3 border-t border-gray-700/50 bg-gray-800/30">
//         <div className="text-xs text-gray-400 text-center">
//           Current: <span className="font-semibold text-blue-400">Page {currentPage}</span>
//         </div>
//       </div>
//     </div>
//   )
// }
//
// // pagination component
// const Pagination = ({currentPage, totalPages, startIndex, endIndex, totalItems, onPageChange}) => {
//      const [showDropdown, setShowDropdown] = useState(false)
//      const visiblePages = Array.from({ length: Math.min(MAX_VISIBLE_PAGES, totalPages) }, (_, i) => i + 1)
//
//   const handlePageSelect = (page) => {
//     onPageChange(page)
//     setShowDropdown(false)
//   }
//
//   if (totalPages <= 1) return null
//
//   return (
//     <div className="flex items-center justify-between border-t border-gray-700/30 pt-6">
//       <div className="text-sm text-gray-400">
//         Showing <span className="font-semibold text-gray-300">{startIndex + 1}</span> to{" "}
//         <span className="font-semibold text-gray-300">{Math.min(endIndex, totalItems)}</span> of{" "}
//         <span className="font-semibold text-gray-300">{totalItems}</span> tasks
//       </div>
//
//       <div className="flex items-center gap-2">
//         <NavigationButton
//           onClick={() => onPageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           direction="prev"
//         />
//
//         <div className="flex items-center gap-1">
//           {visiblePages.map((page) => (
//             <PageButton
//               key={page}
//               page={page}
//               isActive={currentPage === page}
//               onClick={handlePageSelect}
//             />
//           ))}
//
//           {totalPages > MAX_VISIBLE_PAGES && (
//             <div
//               className="relative ml-1"
//               onMouseEnter={() => setShowDropdown(true)}
//               onMouseLeave={() => setShowDropdown(false)}
//             >
//               <button className="flex items-center gap-1.5 px-3 h-9 rounded-lg border border-purple-500/30 bg-purple-500/10 text-purple-400 font-medium text-sm hover:bg-purple-500/20 hover:shadow-[0_0_12px_rgba(168,85,247,0.3)] transition-all">
//                 <GridIcon size={14} />
//                 Show All
//               </button>
//
//               <PageDropdown
//                 totalPages={totalPages}
//                 currentPage={currentPage}
//                 onPageSelect={handlePageSelect}
//                 show={showDropdown}
//               />
//             </div>
//           )}
//         </div>
//
//         <NavigationButton
//           onClick={() => onPageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           direction="next"
//         />
//       </div>
//     </div>
//   )
// }
//
// // kuno task na takle empty dekabe
// const EmptyState = () => (
//   <div className="w-full flex items-center justify-center py-16">
//     <p className="text-gray-500 text-lg">No tasks found</p>
//   </div>
// )
//
// // Main Component
// export const TaskList = ({ tasks, onEdit, onDelete, onFav }) => {
//   const [currentPage, setCurrentPage] = useState(1)
//
//   const totalPages = Math.ceil(tasks.length / taskPerPage)
//   const startIndex = (currentPage - 1) * taskPerPage
//   const endIndex = startIndex + taskPerPage
//   const currentTasks = tasks.slice(startIndex, endIndex)
//
//   const handlePageChange = (page) => {
//     setCurrentPage(Math.max(1, Math.min(page, totalPages)))
//   }

//   if (tasks.length === 0) {
//     return <EmptyState />
//   }
//
//   return (
//     <div className="w-full">
//       <div className="space-y-3 mb-6">
//         {currentTasks.map((task) => (
//           <TaskCard
//             key={task.id}
//             task={task}
//             onEdit={onEdit}
//             onDelete={onDelete}
//             onFav={onFav}
//           />
//         ))}
//         {/* Fill empty slots to maintain consistent layout */}
//         {currentTasks.length < taskPerPage &&
//           Array.from({ length: taskPerPage - currentTasks.length }).map((_, idx) => (
//             <div key={`placeholder-${idx}`} className="h-[180px]" />
//           ))
//         }
//       </div>
//
//       <Pagination
//         currentPage={currentPage}
//         totalPages={totalPages}
//         startIndex={startIndex}
//         endIndex={endIndex}
//         totalItems={tasks.length}
//         onPageChange={handlePageChange}
//       />
//
//       <style>{`
//         @keyframes dropdownSlide {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </div>
//   )
// }


import {useState} from "react";
import React from 'react';
import Pagination from "./Pagination.jsx";
import TaskCard from "./TaskCard.jsx";

const taskPerPage = 3

const TaskList = ({tasks,onEdit, onDelete, onFav}) => {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(tasks.length / taskPerPage)
  const startIndex = (currentPage - 1) * taskPerPage
  const endIndex = startIndex + taskPerPage
  const currentTasks =tasks.slice(startIndex, endIndex)

  const handlePageChange = (page) => {
    setCurrentPage(Math.max(1,Math.min(page, totalPages)))
  }

  return (
    <div className="w-full">
      <div className="space-y-3 mb-6">
        {currentTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
            onFav={onFav}
          />
        ))}

        {/* Fill empty slots to maintain consistent layout */}
        {currentTasks.length < taskPerPage &&
          Array.from({ length: taskPerPage - currentTasks.length }).map((_, idx) => (
            <div key={`placeholder-${idx}`} className="h-[180px]" />
          ))
        }
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={tasks.length}
        onPageChange={handlePageChange}
      />

      <style>{`
        @keyframes dropdownSlide {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default TaskList;