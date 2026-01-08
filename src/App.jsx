import React, { useState, useEffect } from 'react'
import { Header } from './components/header.jsx'
import { HeroSection } from './components/heroSection.jsx'
import { Footer } from './components/footer.jsx'
import TaskBoard from "./components/taskBoard.jsx";


export const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time or wait for data to load
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 300) // 1.5 seconds loading

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 flex items-center justify-center z-50">
        <div className="text-center">
          {/* Animated Logo/Icon */}
          <div className="mb-8 relative">
            <div className="w-20 h-20 mx-auto">
              {/* Spinning outer ring */}
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 border-r-blue-500 animate-spin"></div>
              {/* Spinning inner ring (opposite direction) */}
              <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-indigo-400 border-l-purple-500 animate-spin-reverse"></div>
              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
          </div>

          {/* Loading Text */}
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-3">
            Loading Your Tasks
          </h2>
          <p className="text-slate-400 text-sm">Please wait a moment...</p>

          {/* Loading dots animation */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <><Header />
      <HeroSection />
      <div className=" pb-10 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">

        <TaskBoard />
      </div>

      <Footer />
    </>
  )
}


// import React from 'react'
// import {Header} from './components/header.jsx';
// import {HeroSection} from './components/heroSection.jsx';
// import {Footer} from './components/footer.jsx';
// import TaskBoard from './components/taskBoard.jsx';
//
// export const App = () => {
//   return (
//     <>
//       <div className='bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'>
//         <Header/>
//         <HeroSection/>
//         <TaskBoard/>
//       </div>
//
//       <Footer/>
//     </>
//   )
// }
