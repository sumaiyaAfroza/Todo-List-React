export default function NoTaskFound() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      {/* Animated Empty State Icon */}
      <div className="relative mb-8">
        {/* Background Circle with Pulse Animation */}
        <div className="absolute inset-0 rounded-full animate-pulse bg-blue-500/10" style={{ width: '200px', height: '200px' }} />

        {/* Main Icon Container */}
        <div className="relative flex items-center justify-center rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700" style={{ width: '200px', height: '200px' }}>

          {/* Clipboard Icon */}
          <svg
            className="w-24 h-24 text-gray-600"
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

          {/* Floating Plus Icons */}
          <div className="absolute top-8 right-8 animate-bounce" style={{ animationDelay: '0.2s' }}>
            <div className="rounded-full p-2 bg-blue-500/20">
              <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </div>

          <div className="absolute bottom-8 left-8 animate-bounce" style={{ animationDelay: '0.4s' }}>
            <div className="rounded-full p-2 bg-purple-500/20">
              <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center space-y-3 max-w-md">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
          No Tasks Yet
        </h3>

        <p className="text-base leading-relaxed text-gray-400">
          Your task list is empty. Start by adding your first task to get organized and boost your productivity!
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="mt-8 flex items-center gap-2">
        <div className="h-1 w-8 rounded-full bg-blue-500/30" />
        <div className="h-1 w-1 rounded-full bg-purple-500/30" />
        <div className="h-1 w-1 rounded-full bg-pink-500/30" />
      </div>

      {/* Quick Tips */}
      <div className="mt-10 p-4 rounded-lg border bg-gray-800/50 border-gray-700 max-w-md">
        <div className="flex items-start gap-3">
          <svg
            className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className="text-left">
            <p className="text-sm font-medium mb-1 text-gray-300">
              💡 Pro Tip
            </p>
            <p className="text-xs text-gray-400">
              Click the "Add Task" button to create your first task. You can organize them with tags and priorities!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}