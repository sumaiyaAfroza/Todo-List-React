import {AddTask} from "./addTask.jsx";
import {useEffect, useMemo, useState} from "react";
import Modal from "./modal.jsx";
import {TaskActions} from "./taskActions.jsx";
import TaskList from "./taskLists/TaskList.jsx";
import NoTasksFound from "./NoTasksFound.jsx";
import {PriorityFilter} from "./PriorityFilter.jsx";
import {SearchTask} from "./searchTask.jsx";
import {TagFilter} from "./TagFilter.jsx";
import localforage from "localforage";

localforage.config({
  name: 'reactTodoApp',
  storeName: 'tasks'
})

const TaskBoard = () => {
  const [alltask, setAlltask] = useState([])
  const [updateTask, setUpdateTask] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState({isOpen:false, taskId: null, title: ''})
    const [deleteAll, setDeleteAll] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTags, setSelectedTags] = useState([])
  const [selectedPriority, setSelectedPriority] = useState("all");
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if(!isLoading) {
      const saveTask = async () => {
        try {
          await localforage.setItem('alltasks', alltask)
          console.log('tasks save ok')
        } catch (error) {
          console.error('task error',error)
        }
      }
      saveTask()
    }
  }, [alltask, isLoading]);


  useEffect(() => {
    const loadTask = async () => {
      try {
        const getTask = await localforage.getItem('alltasks')
        if(getTask) {
          setAlltask(getTask)
        }
      } catch (error) {
        console.error('task load error', error)
      }
      finally {
        setIsLoading(false)
      }
    }
    loadTask()
  }, []);


  const handlePriorityChange = (p) => setSelectedPriority(p);

  const filterTask = useMemo(()=> {
    let final = [...alltask]
    if(searchTerm.trim() !== ""){
      const lower = searchTerm.toLowerCase()
      final = final.filter(term => term.title.toLowerCase().includes(lower))
    }
    if (selectedPriority !== "all") {
      final = final.filter(
        (t) => t.priority.toLowerCase() === selectedPriority.toLowerCase()
      );
    }

    if(selectedTags.length > 0) {
      const tagsLower = selectedTags.map(tag => tag.toLowerCase())
      final = final.filter(task =>{
        const taskTags = task.tags.map(tags => tags.toLowerCase())
        return tagsLower.some(tag => taskTags.includes(tag))
      })
    }

    return final
  }, [alltask, searchTerm, selectedTags, selectedPriority])

const getAvailableTags = () => {
    const setTag = new Set();
    alltask.forEach(task => {
      task.tags.forEach(tag => {
        if(tag && tag.trim() ) {
          setTag.add( tag.trim().toLowerCase())
        }
      })
    })
   return Array.from(setTag).sort()
}
const availableTags = getAvailableTags()

  const handleToggleTag = (tag) => {
    const lowerTag = tag.toLowerCase()
    setSelectedTags(prev =>
      prev.includes(lowerTag) ? prev.filter(tag => tag !== lowerTag) : [...prev, lowerTag]
    )
  }

  const handleClearTag = () => setSelectedTags([])

  const handleSearch = (value) => {
    setSearchTerm(value)
  }

const handleAddEditTask = (isAdd, newTask) => {
      setAlltask(prev =>
      isAdd ? [...prev, newTask] : prev.map(task => task.id === newTask.id ? newTask : task))
      handleCloseClick()
}

const handleEditTask = (task) => {
     setUpdateTask(task)
     setShowModal(true)
}

const handleFavorite = (taskId) => {
    setAlltask(prev =>
      prev.map(fav =>( fav.id === taskId ? {...fav, isFavorite: !fav.isFavorite } : fav ))
    )
}

const handleSingleDelete = (taskId,title) =>{
    setDeleteModal({ isOpen: true, taskId, title})
}
const handleConfirmDelete = () => {
    setAlltask(prev => prev.filter(confirm => confirm.id !== deleteModal.taskId ))
  setDeleteModal({ isOpen: true, taskId: null, title: ''})
}

const handleAllDelete = () => {
if(alltask.length > 0) setDeleteAll(true)
}

const handleConfirmDeleteAll = () => {
      setAlltask([])
    setDeleteAll(false)
}

const handleCloseClick = ()=> {
    setShowModal(false)
  setUpdateTask(null)
}

  // Loading state UI
  if (isLoading) {
    return (
      <section className="mb-20 flex items-center justify-center min-h-[400px]" id="tasks">
        <div className="text-center">
          <div className="relative w-16 h-16 mx-auto mb-4">
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 border-r-blue-500 animate-spin"></div>
            <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-indigo-400 border-l-purple-500 animate-spin" style={{ animationDirection: 'reverse' }}></div>
          </div>
          <p className="text-slate-400 text-lg font-medium">Loading your tasks...</p>
        </div>
      </section>
    )
  }
  return <section className="mb-20" id="tasks">

    {/* delete one modal */}
    <Modal
        isOpen={deleteModal.isOpen}
        onConfirm={handleConfirmDelete}
        onClose={() => setDeleteModal({isOpen: false, taskId: null, title:''})}
      title="Delete Task"
      confirmText="Delete"
      cancelText="Cancel"
      variant="danger"
      showExtraWarning={true}
      warningMessage="This action cannot be undone!"
    />

    {/* delete all modal */}
    <Modal
        isOpen={deleteAll}
        onConfirm={handleConfirmDeleteAll}
        onClose={() => setDeleteAll(false)}
      title="Delete All Tasks"
      confirmText="Delete All"
      cancelText="Cancel"
      variant="danger"
      showExtraWarning={true}
      warningMessage="This action will permanently delete all tasks!"
    />

      {
          showModal &&
         <AddTask
              updateTask = {updateTask}
              addEdit = {handleAddEditTask}
              handleCloseClick={handleCloseClick}
          />
      }



    {/* Search */}
    <div className="container">
      <div className="p-2 flex justify-end mb-4">
        <SearchTask onSearch={handleSearch} searchTerm={searchTerm}
        />
      </div>
    </div>

    {/* Filters */}
    <div className="mb-4 space-y-4">
      <PriorityFilter
        selectedPriority={selectedPriority}
        onPriorityChange={handlePriorityChange}
      />

      <TagFilter
        availableTags={availableTags.map(tag => tag.toLowerCase())}
        onTagToggle={handleToggleTag}
        onClearTags={handleClearTag}
        selectedTags={selectedTags}
      />


    </div>

    {/* MAIN CARD */}
    <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16 w-full max-w-6xl mx-auto">

      {/* actions */}
      <TaskActions
      onAddClick={()=>setShowModal(true)}
      onDeleteAllClick={handleAllDelete}

      />

      {/* LIST OR NO TASK */}
        {filterTask.length > 0 ?
            <div className="overflow-x-auto w-full">
          <TaskList
              tasks={filterTask}
              onEdit={handleEditTask}
              onFav={handleFavorite}
              onDelete={handleSingleDelete}


          />
        </div> : <div className="w-full flex justify-center px-4">
          <div className="w-full max-w-4xl mx-auto">
            <NoTasksFound />
          </div>
        </div>}
    </div>
  </section>;
};
export default TaskBoard