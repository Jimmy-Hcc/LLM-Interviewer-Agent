/**
 * LLMPanel - Main React component for the extension panel
 * This component renders the content that appears in the slide-in panel
 * Uses Tailwind CSS for styling with a glassmorphism dark theme
 */
import React from 'react'

const LLMPanel: React.FC = () => {
  return (
    // Main panel container with glassmorphism effect
    // - w-[400px]: Fixed width of 400px
    // - h-full: Full height
    // - bg-gray-900/60: Dark gray with 60% opacity for more transparency
    // - backdrop-blur-md: Blur effect behind the panel
    // - rounded-2xl: Rounded corners on all sides (since detached from frame)
    // - border border-gray-700/30: Subtle border with transparency
    <div className="w-[400px] h-full bg-gray-900/60 backdrop-blur-md rounded-2xl border border-gray-700/30 text-white p-6">
      {/* Flexbox container for vertical layout */}
      <div className="flex flex-col h-full">
        
        {/* Header section with title and status indicator */}
        <div className="flex items-center justify-between mb-6">
          {/* Panel title */}
          <h2 className="text-xl font-bold text-blue-400">LLM Interviewer</h2>
          
          {/* Green pulsing dot to indicate the extension is active */}
          {/* <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div> */}
        </div>
        
        {/* Main content area - centered vertically and horizontally */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            {/* Rocket emoji for visual appeal */}
            <div className="text-4xl mb-4">🚀</div>
            
            {/* Main heading */}
            <h3 className="text-2xl font-semibold mb-2">Hello from LLM Interviewer</h3>
            
            {/* Subtitle text */}
            <p className="text-gray-300 text-sm">
              Your AI-powered coding assistant is ready to help!
            </p>
          </div>
        </div>
        
        {/* Footer section with tech stack info */}
        <div className="mt-auto pt-6 border-t border-gray-700/30">
          <div className="text-xs text-gray-400 text-center">
            Powered by React + TypeScript + Tailwind
          </div>
        </div>
      </div>
    </div>
  )
}

export default LLMPanel 