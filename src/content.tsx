/**
 * Content Script - Main entry point for the Chrome extension
 * This script runs on LeetCode problem pages and injects the React panel
 */

// Import React's createRoot for rendering React components
import { createRoot } from 'react-dom/client'
// Import Tailwind CSS styles
import './index.css'
// Import the main React component for the panel
import LLMPanel from './LLMPanel'
// Import the panel toggle system
import { PanelToggle } from './toggle'

// Create a new instance of PanelToggle to manage the floating button and panel
const panelToggle = new PanelToggle()

/**
 * Initializes the extension by setting up the React panel
 * This function is called when the page is ready
 */
const initExtension = () => {
  // Get the panel container element from the toggle system
  const panelElement = panelToggle.getPanelElement()
  
  if (panelElement) {
    // Create a container div for React to mount into
    const reactContainer = document.createElement('div')
    reactContainer.id = 'llm-react-root'
    
    // Add the React container to the panel
    panelElement.appendChild(reactContainer)
    
    // Create a React root and render the LLMPanel component
    // This mounts the React app into the panel container
    const root = createRoot(reactContainer)
    root.render(<LLMPanel />)
    
    // Log success message to console
    console.log('🚀 LeetCode LLM Interviewer Extension loaded successfully!')
  }
}

// Check if the DOM is already loaded or still loading
if (document.readyState === 'loading') {
  // If still loading, wait for DOMContentLoaded event
  document.addEventListener('DOMContentLoaded', initExtension)
} else {
  // If already loaded, initialize immediately
  initExtension()
} 