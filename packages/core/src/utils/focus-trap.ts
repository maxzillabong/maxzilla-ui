export class FocusTrap {
  private element: HTMLElement
  private previouslyFocused: HTMLElement | null = null
  private firstFocusableElement: HTMLElement | null = null
  private lastFocusableElement: HTMLElement | null = null
  private focusableElements: HTMLElement[] = []

  constructor(element: HTMLElement) {
    this.element = element
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleFocusIn = this.handleFocusIn.bind(this)
  }

  activate() {
    // Store currently focused element
    this.previouslyFocused = document.activeElement as HTMLElement

    // Find focusable elements
    this.updateFocusableElements()

    // Add event listeners
    this.element.addEventListener('keydown', this.handleKeyDown)
    document.addEventListener('focusin', this.handleFocusIn)

    // Focus first element
    if (this.firstFocusableElement) {
      requestAnimationFrame(() => {
        this.firstFocusableElement?.focus()
      })
    }
  }

  deactivate() {
    // Remove event listeners
    this.element.removeEventListener('keydown', this.handleKeyDown)
    document.removeEventListener('focusin', this.handleFocusIn)

    // Restore focus
    if (this.previouslyFocused) {
      this.previouslyFocused.focus()
    }
  }

  private updateFocusableElements() {
    const focusableSelectors = [
      'a[href]:not([disabled])',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable]:not([contenteditable="false"])'
    ].join(',')

    this.focusableElements = Array.from(
      this.element.querySelectorAll<HTMLElement>(focusableSelectors)
    ).filter(el => {
      // Filter out elements that are not visible
      const style = window.getComputedStyle(el)
      return style.display !== 'none' && style.visibility !== 'hidden'
    })

    this.firstFocusableElement = this.focusableElements[0] || null
    this.lastFocusableElement = this.focusableElements[this.focusableElements.length - 1] || null
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (event.key !== 'Tab') return

    // Update focusable elements in case DOM changed
    this.updateFocusableElements()

    if (!this.firstFocusableElement || !this.lastFocusableElement) return

    if (event.shiftKey) {
      // Shift + Tab
      if (document.activeElement === this.firstFocusableElement) {
        event.preventDefault()
        this.lastFocusableElement.focus()
      }
    } else {
      // Tab
      if (document.activeElement === this.lastFocusableElement) {
        event.preventDefault()
        this.firstFocusableElement.focus()
      }
    }
  }

  private handleFocusIn(event: FocusEvent) {
    const target = event.target as HTMLElement

    // If focus moves outside the trap, bring it back
    if (!this.element.contains(target)) {
      event.preventDefault()
      event.stopPropagation()

      if (this.firstFocusableElement) {
        this.firstFocusableElement.focus()
      }
    }
  }
}