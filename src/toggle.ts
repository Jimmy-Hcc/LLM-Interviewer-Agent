/**
 * PanelToggle - Manages the floating toggle button and slide-in panel
 * This class creates a floating button that users can click to show/hide
 * a panel that slides in from the right side of the screen.
 */
export class PanelToggle {
  // Track whether the panel is currently visible or hidden
  private isVisible = false
  
  // Reference to the panel container (where React will mount)
  private panel: HTMLElement | null = null
  
  // Reference to the floating toggle button
  private toggleButton: HTMLElement | null = null

  /**
   * Constructor - Sets up the toggle button and panel when the class is instantiated
   * This runs automatically when the extension loads on a LeetCode page
   */
  constructor() {
    this.createToggleButton()  // Create the floating 🤖 button
    this.createPanel()         // Create the slide-in panel container
  }

  /**
   * Creates the floating toggle button that appears in the bottom-left corner
   * The button uses Tailwind CSS classes for styling and positioning
   */
  private createToggleButton(): void {
    // Create a div container for the button
    this.toggleButton = document.createElement('div')
    
    // Set the HTML for the button with Tailwind CSS classes
    // - fixed bottom-6 left-6: Position in bottom-left corner
    // - z-50: High z-index to stay above other content
    // - bg-blue-600/80: Blue background with 80% opacity for glass effect
    // - hover:bg-blue-700/90: Darker blue on hover with 90% opacity
    // - backdrop-blur-sm: Slight blur effect behind the button
    // - text-white: White text
    // - rounded-full: Fully rounded (circular) button
    // - w-12 h-12: 48px width and height
    // - flex items-center justify-center: Center the emoji
    // - shadow-lg: Large shadow for depth
    // - transition-all duration-200: Smooth transitions
    // - hover:scale-110: Grow 10% on hover
    this.toggleButton.innerHTML = `
      <div class="fixed bottom-6 left-6 z-50">
        <button id="llm-toggle" class="bg-blue-600/80 hover:bg-blue-700/90 backdrop-blur-sm text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110">
          <span class="text-xl">🤖</span>
        </button>
      </div>
    `
    
    // Add the button to the page body
    document.body.appendChild(this.toggleButton)
    
    // Find the button element and add a click event listener
    const button = document.getElementById('llm-toggle')
    if (button) {
      // When clicked, call the toggle() method to show/hide the panel
      button.addEventListener('click', () => this.toggle())
    }
  }

  /**
   * Creates the panel container that will slide in from the left
   * This panel is initially hidden off-screen and slides in when toggled
   */
  private createPanel(): void {
    // Create the panel container div
    this.panel = document.createElement('div')
    this.panel.id = 'llm-panel'
    
    // Set CSS classes for positioning and animation:
    // - fixed top-4 left-4: Position with 16px margin from top and left edges
    // - h-[calc(100vh-32px)]: Full height minus 32px (16px top + 16px bottom margin)
    // - z-40: Layer above most content but below the toggle button
    // - transform -translate-x-full: Move 100% to the left (hidden off-screen)
    // - transition-transform duration-300: Smooth 300ms slide animation
    this.panel.className = 'fixed top-4 left-4 h-[calc(100vh-32px)] z-40 transform -translate-x-full transition-transform duration-300'
    
    // Add the panel to the page body
    document.body.appendChild(this.panel)
  }

  /**
   * Creates a mount point for React to render the panel content
   * This is called by content.tsx to prepare the panel for React
   */
  public mountPanel(): void {
    if (this.panel) {
      // Create a div that React will use to mount the LLMPanel component
      // This div will be replaced by React when it renders
      this.panel.appendChild(document.createElement('div'))
    }
  }

  /**
   * Toggles the panel visibility by sliding it in/out from the left
   * Uses CSS transforms to create smooth slide animation
   */
  public toggle(): void {
    // Safety check - don't proceed if panel doesn't exist
    if (!this.panel) return
    
    // Flip the visibility state (true becomes false, false becomes true)
    this.isVisible = !this.isVisible
    
    if (this.isVisible) {
      // Show the panel by sliding it into view
      this.panel.classList.remove('-translate-x-full')  // Remove "hidden off-screen" class
      this.panel.classList.add('translate-x-0')         // Add "visible" class
    } else {
      // Hide the panel by sliding it off-screen
      this.panel.classList.remove('translate-x-0')      // Remove "visible" class
      this.panel.classList.add('-translate-x-full')     // Add "hidden off-screen" class
    }
  }

  /**
   * Shows the panel if it's currently hidden
   * Convenience method for programmatically showing the panel
   */
  public show(): void {
    if (!this.isVisible) {
      this.toggle()  // Only toggle if currently hidden
    }
  }

  /**
   * Hides the panel if it's currently visible
   * Convenience method for programmatically hiding the panel
   */
  public hide(): void {
    if (this.isVisible) {
      this.toggle()  // Only toggle if currently visible
    }
  }

  /**
   * Returns the panel element so React can mount to it
   * This is called by content.tsx to get the panel container
   */
  public getPanelElement(): HTMLElement | null {
    return this.panel
  }
} 