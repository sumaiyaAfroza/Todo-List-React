import React from 'react';
import { ArrowRight, Sparkles, CheckCircle, Zap } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-indigo-300 font-medium">Your Personal Productivity Ally</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  NexaCore
                </span>
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Effortlessly Organize,
                <br />
                <span className="text-gray-300">Prioritize & Conquer</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              Your personal productivity powerhouse for seamless goal achievement and stress-free task management. Transform chaos into clarity.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: CheckCircle, text: 'Smart Task Organization' },
                { icon: Zap, text: 'Lightning Fast Performance' },
                { icon: Sparkles, text: 'Intuitive Interface' },
                { icon: CheckCircle, text: 'Goal Tracking Made Easy' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-300">
                  <div className="p-2 bg-indigo-500/10 rounded-lg">
                    <feature.icon className="w-4 h-4 text-indigo-400" />
                  </div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white font-semibold hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white font-semibold hover:bg-white/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4 border-t border-white/10">
              {[
                { value: '10K+', label: 'Active Users' },
                { value: '50K+', label: 'Tasks Completed' },
                { value: '4.9/5', label: 'User Rating' }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="flex justify-center md:order-2 relative">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm max-w-md">
                {/* Mock Dashboard */}
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Today's Tasks</div>
                        <div className="text-xs text-gray-400">8 tasks remaining</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-indigo-400">75%</div>
                  </div>

                  {/* Task Items */}
                  {[
                    { title: 'Design new homepage', status: 'completed' },
                    { title: 'Review pull requests', status: 'completed' },
                    { title: 'Team meeting at 3 PM', status: 'pending' },
                    { title: 'Update documentation', status: 'pending' }
                  ].map((task, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5 hover:border-indigo-500/30 transition-colors">
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        task.status === 'completed'
                          ? 'bg-indigo-500 border-indigo-500'
                          : 'border-gray-600'
                      }`}>
                        {task.status === 'completed' && (
                          <CheckCircle className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <span className={`text-sm ${
                        task.status === 'completed'
                          ? 'text-gray-400 line-through'
                          : 'text-gray-200'
                      }`}>
                        {task.title}
                      </span>
                    </div>
                  ))}

                  {/* Progress Bar */}
                  <div className="pt-4">
                    <div className="flex justify-between text-xs text-gray-400 mb-2">
                      <span>Daily Progress</span>
                      <span>6/8 completed</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};