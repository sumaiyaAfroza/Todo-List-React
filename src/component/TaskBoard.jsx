import React, {useEffect, useMemo, useState} from 'react';
import {AddTask} from "./AddTask.jsx";
import {TaskActions} from "./TaskActions.jsx";
import {TaskList} from "./TaskList.jsx";
import NoTaskFound from "./NoTaskFound.jsx";
import Modal from './Modal.jsx';
import SearchTask from "./searchTask.jsx";
import {PriorityFilter} from "./PriorityFilter.jsx";
import {TagFilter} from "./TagFilter.jsx";

const TaskBoard = () => {
  // const [tasks, setTasks] = useState([]) /* filter korar porer task gula joma hoi*/
  const [allTasks, setAllTasks] = useState([])  /* direct add original gula joma hobe */
  const [loading, setLoading] = useState(false)
  const [selectedTags, setSelectedTags] = useState([])
  const [selectedPriority, setSelectedPriority] = useState('all')
  const [showAddModal, setShowAddModal] = useState(false)
  const [taskToUpdate, setTaskToUpdate] = useState(null)   /* isAdd(addtask) r tasktoupdate initial null nilm aksate compare kore  */
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    taskId: null,
    taskTitle: ''
  })
  const [deleteAllTask, setDeleteAllTask] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const getAvailableTags = () => {
    let available = new Set()
    allTasks.forEach(task => {
      task.tags.forEach( tag =>{
          if(tag && tag.trim()) {
            available.add(tag.trim())
          }
        }
      )
      }
    )
    return Array.from(available).sort()
  }
  const availableTags  = getAvailableTags()

  const handleTagToggle = (tag) => {
    setSelectedTags(prevState => {
      if(prevState.includes(tag)) {
       return prevState.filter(tg => tg !== tag)
      }else{
      return  [...prevState, tag]
      }
    })
  }

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue)
  }

    const handlePriorityChange = (selectPriority) => {
    setSelectedPriority(selectPriority)
  }

  const applyAllFilter = useMemo(() => {
    let filtered = [...allTasks]
    if(searchTerm.trim() !== '') {
      filtered = filtered.filter(task =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()))
    }
    if(selectedPriority !== 'all') {
      filtered = filtered.filter(task =>
        task.priority.toLowerCase() === selectedPriority.toLowerCase())
    }
    if(selectedTags.length > 0) {
      filtered = filtered.filter(task =>
        selectedTags.some(tag => task.tags.includes(tag))
      )
    }
    return filtered
    // setTasks(filtered)

  }, [searchTerm, allTasks, selectedPriority, selectedTags]);



  const handleClearTags = () => {
    setSelectedTags([])
  }

  const handleAddEditTask = (isAdd, newTask) => {
    let updateTask
    if (isAdd) {
      updateTask = [...allTasks, newTask]
    } else {
      updateTask = allTasks.map(task => task.id === newTask.id ? newTask : task)
    }
    setAllTasks(updateTask)
    setShowAddModal(false)
  }
  // console.log(allTasks)

  const handleFavorite = taskId => {
    const favorite = allTasks.map(task =>
        task.id === taskId ? {...task, isFavorite: !task.isFavorite} : task
      // if(task.id === taskId) {
      //   return {
      //     ...task,
      //     isFavorite : !task.isFavorite
      //   }
      // }
      // return task
    )
    setAllTasks(favorite)
  }

  const handleEditTask = task => {
    setTaskToUpdate(task)
    setShowAddModal(true)
  }

  const handleCloseClick = () => {
    setShowAddModal(false)
    setTaskToUpdate(null)
  }

  const handleDeleteTask = (taskId, taskTitle) => {
    setDeleteModal({
      isOpen: true,
      taskId: taskId,
      taskTitle: taskTitle
    })
  }

  const confirmDeleteTask = () => {
    const taskDelete = allTasks.filter(task => task.id !== deleteModal.taskId)
    setAllTasks(taskDelete)
    setDeleteModal({
      isOpen: false,
      taskId: null,
      taskTitle: ''
    })
  }

  const handleAllDelete = () => {
    if (allTasks.length === 0) return null
    setDeleteAllTask(true)
  }

  const confirmDeleteAllTask = () => {
    setAllTasks([])
    setDeleteAllTask(false)
  }

  return (
    <section className="mb-20" id="tasks">
      <Modal
        isOpen={deleteModal.isOpen}
        onClose={() => setDeleteModal({isOpen: false, taskId: null, taskTitle: ''})}
        onConfirm={confirmDeleteTask}
        title="Delete Task"
        message={`Are you sure you want to delete "${deleteModal.taskTitle}"?`}
        confirmText="Delete"
        cancelText="Cancel"
        variant="danger"
        showExtraWarning={true}
        warningMessage="This action cannot be undone!"
      />

      <Modal
        isOpen={deleteAllTask}
        onClose={() => setDeleteAllTask(false)}
        onConfirm={confirmDeleteAllTask}
        title="Delete Task"
        message={`Are you sure you want to delete "${allTasks.length}"?`}
        confirmText="Delete"
        cancelText="Cancel"
        variant="danger"
        showExtraWarning={true}
        warningMessage="This action cannot be undone!"
      />

      {showAddModal && (
        <AddTask
          onSave={handleAddEditTask}
          taskToUpdate={taskToUpdate}
          handleCloseClick={handleCloseClick}
        />
      )}

      <div className='container'>
        <div className='p-2 flex justify-end mb-4'>
          <SearchTask onSearch={handleSearch} searchTerm={searchTerm}/>
        </div>
      </div>

      <div className="mb-4 space-y-4">
        <PriorityFilter
          selectedPriority={selectedPriority}
          onPriorityChange={handlePriorityChange}
        />

        <TagFilter
          availableTags={availableTags}
          selectedTags={selectedTags}
          onTagToggle={handleTagToggle}
          onClearTags={handleClearTags}
        />
      </div>

      <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
        <TaskActions
          onAddClick={() => {
            setTaskToUpdate(null)  // এটি নিশ্চিত করবে যে নতুন task add করার সময় field empty থাকবে
            setShowAddModal(true)
          }}
          onDeleteAllClick={handleAllDelete}
        />
        {
          applyAllFilter.length > 0 ?
            (
              <TaskList allTasks={applyAllFilter}
                        onFav={handleFavorite}
                        onEdit={handleEditTask}
                        onDelete={handleDeleteTask}
              />
            ) : (<NoTaskFound/>)
        }
      </div>
    </section>
  );
};

export default TaskBoard;