import {useState} from "react";

export const AddTask = ({updateTask,addEdit, handleCloseClick}) => {
  const [task, setTask] = useState(
      updateTask || {
        id: crypto.randomUUID(),
        title: '',
        description: '',
        tags: [],
        priority:'',
        isFavorite: false
      }
  )

  const [isAdd] = useState(Object.is(updateTask, null))
  const [tagsInput, setTagsInput] = useState(
      updateTask && updateTask.tags.length > 0 ? updateTask.tags.join(',') : ''
  )

  const [errors, setErrors] = useState({})

  const validatedFrom = () => {
    let newErrors = {}
    !task.title && (newErrors.title = " required title")
    !task.description && ( newErrors.dsecription = " required des")
   !task.priority && (  newErrors.priority = " required priority")

    const tagArray = tagsInput.split(",").map(tag => tag.trim())
    const hashEmptyTag =tagArray.some(empty => empty.length === 0)
     if (hashEmptyTag || task.length === 0) {
       newErrors.tags = "at least one tag is required & no empty tag allowed"
     }

    setErrors(newErrors)
    return (Object.keys(newErrors).length === 0)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const cleanTags =
        {
          ...task,
          tags: task.tags.filter(tag => tag.trim())
        }
    if(validatedFrom()) {
      addEdit(isAdd, cleanTags)
    }

  }

  const handleChange = (e) => {
    const {name, value} = e.target


    if(name === "tags") {
      setTagsInput(value)
      const parsedTags = value
          .split(",")
          .map(tag => tag.trim())
          .filter(tags => tags.length > 0)
      setTask({...task, tags: parsedTags})
    }
    else {
      setTask({...task, [name]: value })
    }
  }


  return (
    <form onSubmit={handleSubmit}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
      <div className="w-full max-w-2xl">
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 backdrop-blur-xl shadow-2xl shadow-purple-500/20 p-8 lg:p-10 animate-in zoom-in-95 duration-300">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl pointer-events-none">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"></div>
          </div>

          {/* Header */}
          <div className="relative mb-8">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                {isAdd ? "✨ Create New Task" : "📝 Edit Task"}
              </h2>
              <button
                type="button"
                onClick={handleCloseClick}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500/30 flex items-center justify-center text-slate-400 hover:text-red-400 transition-all duration-300"
              >
                ✕
              </button>
            </div>
            <p className="text-sm text-slate-400">Fill in the details to {isAdd ? "create" : "update"} your task</p>
          </div>

          <div className="relative space-y-6">
            {/* Title Field */}
            <div className="space-y-2 group">
              <label htmlFor="title" className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-shadow"></span>
                Task Title
                <span className="text-red-400 ml-0.5">*</span>
              </label>
              <div className="relative">
                <input
                  className={`block w-full rounded-xl bg-white/5 border ${
                    errors.title
                      ? "border-red-500/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                      : "border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  } px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none transition-all duration-300 hover:bg-white/10`}
                  type="text"
                  name="title"
                  id="title"
                  placeholder="e.g., Complete project documentation"
                  value={task.title}
                  onChange={handleChange}
                />
              </div>
              {errors.title && (
                <p className="text-red-400 text-xs flex items-center gap-1.5 animate-in slide-in-from-top-1 duration-200">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.title}
                </p>
              )}
            </div>

            {/* Description Field */}
            <div className="space-y-2 group">
              <label htmlFor="description" className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-shadow"></span>
                Description
                <span className="text-red-400 ml-0.5">*</span>
              </label>
              <textarea
                className={`block min-h-[120px] w-full rounded-xl bg-white/5 border ${
                  errors.description
                    ? "border-red-500/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                    : "border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                } px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none transition-all duration-300 resize-none hover:bg-white/10`}
                name="description"
                id="description"
                placeholder="Describe what needs to be done..."
                value={task.description}
                onChange={handleChange}
              ></textarea>
              {errors.description && (
                <p className="text-red-400 text-xs flex items-center gap-1.5 animate-in slide-in-from-top-1 duration-200">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.description}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tags Field */}
              <div className="space-y-2 group">
                <label htmlFor="tags" className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-shadow"></span>
                  Tags
                  <span className="text-red-400 ml-0.5">*</span>
                </label>
                <input
                  className={`block w-full rounded-xl bg-white/5 border ${
                    errors.tags
                      ? "border-red-500/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                      : "border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  } px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none transition-all duration-300 hover:bg-white/10`}
                  type="text"
                  name="tags"
                  id="tags"
                  placeholder="work, urgent, design (comma or space separated)"
                  value={tagsInput}
                  onChange={handleChange}
                />
                {errors.tags && (
                  <p className="text-red-400 text-xs flex items-center gap-1.5 animate-in slide-in-from-top-1 duration-200">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.tags}
                  </p>
                )}
              </div>

              {/* Priority Field */}
              <div className="space-y-2 group">
                <label htmlFor="priority" className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 group-hover:shadow-lg group-hover:shadow-pink-500/50 transition-shadow"></span>
                  Priority Level
                  <span className="text-red-400 ml-0.5">*</span>
                </label>
                <select
                  className={`block w-full cursor-pointer rounded-xl bg-white/5 border ${
                    errors.priority
                      ? "border-red-500/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                      : "border-white/10 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20"
                  } px-4 py-3.5 text-white focus:outline-none transition-all duration-300 hover:bg-white/10`}
                  name="priority"
                  id="priority"
                  value={task.priority}
                  onChange={handleChange}
                >
                  <option value="" className="bg-slate-900">
                    Select Priority
                  </option>
                  <option value="Low" className="bg-slate-900">
                    🟢 Low Priority
                  </option>
                  <option value="Medium" className="bg-slate-900">
                    🟡 Medium Priority
                  </option>
                  <option value="High" className="bg-slate-900">
                    🔴 High Priority
                  </option>
                </select>
                {errors.priority && (
                  <p className="text-red-400 text-xs flex items-center gap-1.5 animate-in slide-in-from-top-1 duration-200">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.priority}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex gap-3">
            <button
                onClick={handleCloseClick}
              type="button"
              className="flex-1 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/30 px-6 py-3.5 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 active:scale-95"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 hover:from-cyan-500 hover:via-blue-500 hover:to-indigo-600 px-6 py-3.5 text-white font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 active:scale-95"
            >
              {isAdd ? "✓ Create Task" : "✓ Update Task"}
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}