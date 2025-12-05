import React, {useState} from 'react';

const AddTask = ({onSave,taskToUpdate, handleCloseClick}) => {
  const [task, setTask] = useState(
    taskToUpdate || {
    id: crypto.randomUUID(),
    title: '',
    description:'',
    tags:[],
    priority:'',
    isFavorite: false
  })

  const [isAdd] = useState(Object.is(taskToUpdate, null))
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const name = e.target.name
      let value = e.target.value
    if(name === 'tags'){
     value =  value.split(',')
    }
    setTask({
      ...task, [name]: value
    })
    if(errors[name]) {
      setErrors({
        ...errors,
        [name] : ''
      })
    }
  }

  const validError = () => {
    const newErrors = {}
    if(!task.title) {
      newErrors.title = 'title is required'
    }
    if(!task.description){
      newErrors.description = 'description is required'
    }
    if(!task.tags || task.tags.length === 0) {
      newErrors.tags = 'tags is required'
    }else {
      const hasTags = task.tags.some(tag => !tag.trim())
      if(hasTags){
        newErrors.tags = 'Empty Tags are not allow'
      }
    }
    if(!task.priority){
      newErrors.priority = 'priority is required'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit  = (e) => {
    e.preventDefault()
    const cleanTask = {
      ...task,
      tags: task.tags.filter(tag => tag.trim()) /* trim na korle falsy "ok" = truthy(js niyome) r oitai dibe filter kore . otherwise filter kore aita paile  "" bad dibe*/
    }
    if(validError()){
      onSave(isAdd, cleanTask)
    }
  }

  return (
    <>
      <div className="bg-gradient-to-br from-black/70 via-indigo-950/50 to-purple-950/50 backdrop-blur-lg h-full w-full z-10 absolute top-0 left-0"></div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto my-10 w-full max-w-[740px] rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-slate-900/98 via-indigo-950/98 to-purple-950/98 backdrop-blur-2xl shadow-2xl shadow-indigo-500/30 p-9 max-md:px-4 lg:my-20 lg:p-11 z-10 absolute top-1/4 left-1/3">
        <h2 className="mb-9 text-center text-2xl font-bold lg:mb-11 lg:text-[28px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          {isAdd ? "✨ Add New Task" : "📝 Edit Task" }
        </h2>

        <div className="space-y-6 text-white lg:space-y-7">
          {/* Title Field */}
          <div className="space-y-2 lg:space-y-3 group">
            <label htmlFor="title" className="text-sm font-semibold text-slate-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></span>
              Title <span className="text-red-400">*</span>
            </label>
            <input
              className={`block w-full rounded-xl bg-slate-800/60 border ${
                errors.title ? 'border-red-500/50 focus:ring-red-500/60' : 'border-slate-600/30 focus:ring-blue-500/60'
              } px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2`}
              type="text"
              name="title"
              id="title"
              placeholder="Enter task title..."
              value={task.title}
              onChange={handleChange}
            />
            {errors.title && (
              <p className="text-red-400 text-sm flex items-center gap-1 mt-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.title}
              </p>
            )}
          </div>

          {/* Description Field */}
          <div className="space-y-2 lg:space-y-3 group">
            <label htmlFor="description" className="text-sm font-semibold text-slate-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500"></span>
              Description <span className="text-red-400">*</span>
            </label>
            <textarea
              className={`block min-h-[120px] w-full rounded-xl bg-slate-800/60 border ${
                errors.description ? 'border-red-500/50 focus:ring-red-500/60' : 'border-slate-600/30 focus:ring-indigo-500/60'
              } px-4 py-3.5 text-white placeholder:text-slate-500 lg:min-h-[180px] focus:outline-none focus:ring-2 resize-none`}
              name="description"
              id="description"
              placeholder="Describe your task..."
              value={task.description}
              onChange={handleChange}
            ></textarea>
            {errors.description && (
              <p className="text-red-400 text-sm flex items-center gap-1 mt-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.description}
              </p>
            )}
          </div>

          <div className="grid-cols-2 gap-x-4 max-md:space-y-6 md:grid lg:gap-x-6">
            {/* Tags Field */}
            <div className="space-y-2 lg:space-y-3 group">
              <label htmlFor="tags" className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500"></span>
                Tags <span className="text-red-400">*</span>
              </label>
              <input
                className={`block w-full rounded-xl bg-slate-800/60 border ${
                  errors.tags ? 'border-red-500/50 focus:ring-red-500/60' : 'border-slate-600/30 focus:ring-purple-500/60'
                } px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2`}
                type="text"
                name="tags"
                id="tags"
                placeholder="work, urgent, design"
                value={task.tags}
                onChange={handleChange}
              />
              {errors.tags && (
                <p className="text-red-400 text-sm flex items-center gap-1 mt-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.tags}
                </p>
              )}
            </div>

            {/* Priority Field */}
            <div className="space-y-2 lg:space-y-3 group">
              <label htmlFor="priority" className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"></span>
                Priority <span className="text-red-400">*</span>
              </label>
              <select
                className={`block w-full cursor-pointer rounded-xl bg-slate-800/60 border ${
                  errors.priority ? 'border-red-500/50 focus:ring-red-500/60' : 'border-slate-600/30 focus:ring-pink-500/60'
                } px-4 py-3.5 text-white focus:outline-none focus:ring-2`}
                name="priority"
                id="priority"
                value={task.priority}
                onChange={handleChange}
              >
                <option value="">Select Priority</option>
                <option value="Low">🟢 Low</option>
                <option value="Medium">🟡 Medium</option>
                <option value="High">🔴 High</option>
              </select>
              {errors.priority && (
                <p className="text-red-400 text-sm flex items-center gap-1 mt-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.priority}
                </p>
              )}
            </div>
          </div>
        </div>

        <div
          className="mt-12 flex justify-between gap-4 lg:mt-16">
          <button
            type="button"
            className="rounded-xl bg-gradient-to-r from-red-600 to-rose-700 px-8 py-3.5 text-white font-semibold transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 active:scale-95"
            onClick={handleCloseClick}
          >
            ✕ Close
          </button>

          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 px-8 py-3.5 text-white font-semibold transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 active:scale-95"

           >
            {isAdd ? "✓ Create Task" : "✓ Update Task"}
          </button>
        </div>
      </form>
    </>
  );
};

export default AddTask;