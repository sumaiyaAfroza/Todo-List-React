export default function NoTasksFound() {
  return (
    <div className="w-full max-w-5xl mx-auto bg-[#1E222A] rounded-xl px-6 py-6 flex flex-col items-center justify-center">

      {/* Icon */}
      <div className="relative mb-4">
        <div className="absolute inset-0 w-32 h-32 rounded-full animate-pulse bg-blue-500/10" />

        <div className="relative flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
          <svg
            className="w-14 h-14 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-1">
        No Tasks Yet
      </h3>

      {/* Subtitle */}
      <p className="text-center text-gray-400 text-sm max-w-sm">
        Your task list is empty. Add a task to get started!
      </p>

      {/* Small Dots */}
      <div className="mt-4 flex items-center gap-1">
        <div className="h-1 w-6 rounded-full bg-blue-500/30"></div>
        <div className="h-1 w-1 rounded-full bg-purple-500/30"></div>
        <div className="h-1 w-1 rounded-full bg-pink-500/30"></div>
      </div>

      {/* Pro tip */}
      <div className="mt-6 p-3 rounded-lg border bg-gray-800/60 border-gray-700 max-w-sm">
        <div className="flex items-start gap-2">
          <svg
            className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>

          <div>
            <p className="text-xs font-medium mb-0.5 text-gray-300">💡 Pro Tip</p>
            <p className="text-[11px] leading-tight text-gray-400">
              Click "Add Task" to create your first task.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
