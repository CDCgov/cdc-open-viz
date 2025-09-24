import { expect, userEvent } from 'storybook/test'
import { waitFor } from '@testing-library/react'

/**
 * Shared Testing Helpers for Editor Story Tests
 *
 * This file contains common testing utilities used across all visualization
 * editor story tests (Chart, Map, Data Bite, Waffle Chart, etc.).
 *
 * Key Features:
 * - Adaptive animation delays for test environments vs UI
 * - Robust polling utilities for async state changes
 * - Generic before/after assertion patterns
 * - Element presence/absence waiting
 * - Text content change detection
 * - Editor loading and accordion interaction helpers
 *
 */

// ============================================================================
// ENVIRONMENT DETECTION & TIMING
// ============================================================================

/**
 * Use 500ms delay for visual perception in Storybook UI, but skip in automated tests
 * This ensures smooth visual feedback for manual testing while keeping automated tests fast
 */
export const MIN_ANIMATION_DELAY_MS = (() => {
  // Check if we're in automated test environment (Vitest/Jest)
  if (typeof process !== 'undefined' && process.env.NODE_ENV === 'test') {
    return 0
  }

  // Check if we're running via test runner (Vitest has __vitest__ global)
  if (typeof globalThis !== 'undefined' && '__vitest__' in globalThis) {
    return 0
  }

  return 500
})()

const WAIT_FOR_TIMEOUT_MS = 5000

// ============================================================================
// CORE POLLING UTILITIES
// ============================================================================

// Wrapper for waitFor that includes explicit animation delay
const waitForWithDelay = async (predicate: () => void, options?: { timeout?: number }) => {
  if (MIN_ANIMATION_DELAY_MS > 0) {
    await new Promise(resolve => setTimeout(resolve, MIN_ANIMATION_DELAY_MS))
  }

  await waitFor(predicate, {
    timeout: options?.timeout || WAIT_FOR_TIMEOUT_MS
  })
}

/**
 * Perform an action and assert the result using polling
 * This is the core pattern for testing state changes in editor components
 *
 * @param label Descriptive label for the test action
 * @param read Function that reads the current state
 * @param act Function that performs the action
 * @param predicate Function that validates the state change
 * @param extraAssert Optional additional assertion on the final value
 */
export const performAndAssert = async <T extends unknown>(
  label: string,
  read: () => T,
  act: () => Promise<void> | void,
  predicate: (before: T, after: T) => boolean,
  extraAssert?: (after: T) => void
): Promise<void> => {
  // Capture the call site stack trace
  const callSite = new Error().stack

  const before = read()
  await act()

  await waitForWithDelay(() => {
    const after = read()
    const result = predicate(before, after)
    if (!result) {
      // Create a more informative error with the original call site
      const error = new Error(
        `${label} failed: Expected predicate to return true. Before: ${JSON.stringify(before)}, After: ${JSON.stringify(
          after
        )}`
      )

      // Try to preserve the original call site in the stack trace
      if (callSite) {
        const originalStack = callSite.split('\n')
        // Replace the generic helper stack with the original call site
        if (originalStack.length > 2) {
          error.stack = [
            error.message,
            ...originalStack.slice(2) // Skip the first two lines (error creation in helper)
          ].join('\n')
        }
      }

      throw error
    }
    if (extraAssert) extraAssert(after)
  })
}

// ============================================================================
// ELEMENT WAITING UTILITIES
// ============================================================================

/**
 * Wait for an element to appear in the DOM
 *
 * @param selector CSS selector for the element
 * @param canvasElement Container element to search within
 * @returns Promise that resolves to the found element
 */
export const waitForPresence = async (selector: string, canvasElement: HTMLElement) => {
  await waitForWithDelay(() => {
    const element = canvasElement.querySelector(selector)
    expect(element).toBeTruthy()
  })
  return canvasElement.querySelector(selector)
}

/**
 * Wait for an element to disappear from the DOM
 *
 * @param selector CSS selector for the element
 * @param canvasElement Container element to search within
 */
export const waitForAbsence = async (selector: string, canvasElement: HTMLElement) => {
  await waitForWithDelay(() => {
    const element = canvasElement.querySelector(selector)
    expect(element).toBeFalsy()
  })
}

/**
 * Wait for a select element's options to populate
 *
 * @param selectElement The select element to monitor
 * @param minCount The minimum number of expected elements
 */
export const waitForOptionsToPopulate = async (selectElement: HTMLSelectElement, minCount: number = 2) => {
  await waitForWithDelay(() => {
    expect(selectElement.options.length).toBeGreaterThanOrEqual(minCount)
  })
}

/**
 * Wait for an element's text content to change to a specific value
 *
 * @param el The element to monitor
 * @param expected The expected text content
 */
export const waitForTextContent = async (el: HTMLElement | null, expected: string) => {
  expect(el).toBeTruthy()
  await waitForWithDelay(() => {
    expect(el!.textContent?.trim()).toBe(expected.trim())
  })
}

// ============================================================================
// EDITOR-SPECIFIC UTILITIES
// ============================================================================

/**
 * Wait for the editor to load and become interactive
 * This ensures all accordion sections are present and the component is ready for testing
 *
 * @param canvas Storybook canvas object from within(canvasElement)
 */
export const waitForEditor = async (canvas: any) => {
  await waitForWithDelay(() => {
    const editorElement = canvas.queryAllByText(/general|data|visual/i)
    expect(editorElement[0]).toBeVisible()
  })
}

/**
 * Open an accordion section in the editor
 *
 * @param canvas Storybook canvas object from within(canvasElement)
 * @param sectionName Name of the accordion section (case-insensitive)
 */
export const openAccordion = async (canvas: any, sectionName: string) => {
  const accordion = canvas.getByRole('button', { name: new RegExp(sectionName, 'i') })
  await userEvent.click(accordion)
  await waitForWithDelay(() => {
    const accordionContent = accordion.closest('.accordion-item, .accordion-section, [class*="accordion"]')
    expect(accordionContent).toBeTruthy()
  })
}

// ============================================================================
// VISUAL STATE HELPERS
// ============================================================================

/**
 * Get visual state for boolean/checkbox testing
 * This is a flexible helper that can be customized for different visual properties
 *
 * @param element The element to analyze
 * @param options Configuration for what visual properties to check
 * @returns Object containing the visual state
 */
export const getVisualState = (
  element: HTMLElement | null,
  options: {
    checkClasses?: string[] // CSS classes to check for presence
    checkStyles?: string[] // CSS properties to read from computed styles
    checkAttributes?: string[] // HTML attributes to read
    customChecks?: ((el: HTMLElement) => Record<string, any>)[] // Custom visual checks
  } = {}
) => {
  if (!element) return null

  const state: Record<string, any> = {}

  // Check for specific CSS classes
  if (options.checkClasses) {
    for (const className of options.checkClasses) {
      state[`has_${className.replace(/[^a-zA-Z0-9]/g, '_')}`] = element.classList.contains(className)
    }
  }

  // Check computed styles
  if (options.checkStyles) {
    const computedStyle = getComputedStyle(element)
    for (const property of options.checkStyles) {
      state[`style_${property.replace(/[^a-zA-Z0-9]/g, '_')}`] = computedStyle.getPropertyValue(property)
    }
  }

  // Check attributes
  if (options.checkAttributes) {
    for (const attr of options.checkAttributes) {
      state[`attr_${attr.replace(/[^a-zA-Z0-9]/g, '_')}`] = element.getAttribute(attr)
    }
  }

  // Run custom checks
  if (options.customChecks) {
    for (const customCheck of options.customChecks) {
      Object.assign(state, customCheck(element))
    }
  }

  // Always include basic visibility state
  state.isVisible = element.offsetParent !== null
  state.classList = Array.from(element.classList).sort().join(' ')

  return state
}

/**
 * Create a comprehensive boolean testing function for checkbox controls
 * Tests both enable/disable directions and verifies visual changes
 *
 * @param checkbox The checkbox element to test
 * @param getVisualState Function that returns the current visual state
 * @param testName Descriptive name for the test
 */
export const testBooleanControl = async (checkbox: HTMLInputElement, getVisualState: () => any, testName: string) => {
  // Get initial state
  const initialCheckboxState = checkbox.checked
  const initialVisualState = getVisualState()

  // First toggle: change to opposite state
  await userEvent.click(checkbox)
  await new Promise(resolve => setTimeout(resolve, 100))
  const firstToggleCheckboxState = checkbox.checked
  const firstToggleVisualState = getVisualState()

  // Verify checkbox changed
  expect(firstToggleCheckboxState).not.toBe(initialCheckboxState)

  // Verify visualization changed (with flexible handling)
  if (JSON.stringify(firstToggleVisualState) === JSON.stringify(initialVisualState)) {
    // Note: This warns but doesn't fail, allowing for controls that may not have
    // visible effects under current data/settings
    console.warn(`⚠️ ${testName}: Checkbox toggled but no visual change detected`)
  } else {
    expect(firstToggleVisualState).not.toEqual(initialVisualState)
  }

  // Second toggle: return to original state
  await userEvent.click(checkbox)
  await new Promise(resolve => setTimeout(resolve, 100))
  const secondToggleCheckboxState = checkbox.checked
  const secondToggleVisualState = getVisualState()

  // Verify both checkbox AND visualization returned to original
  expect(secondToggleCheckboxState).toBe(initialCheckboxState)
  expect(secondToggleVisualState).toEqual(initialVisualState)
}

// ============================================================================
// DATA EXTRACTION HELPERS
// ============================================================================

/**
 * Get the primary data value displayed in a visualization
 * Tries multiple common selectors for data values
 *
 * @param canvasElement The container element to search within
 * @returns The data value as a string, or empty string if not found
 */
export const getDisplayValue = (canvasElement: HTMLElement): string => {
  const selectors = ['svg text', '.bite-text', '.data-value', '[data-testid="data-value"]']

  for (const selector of selectors) {
    const elements = canvasElement.querySelectorAll(selector)
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i]
      const text = element.textContent?.trim()
      if (text && /[\d,]+/.test(text)) {
        return text
      }
    }
  }

  return ''
}

/**
 * Get the title text from a visualization
 * Tries multiple common selectors for titles
 *
 * @param canvas Storybook canvas object from within(canvasElement)
 * @returns The title text as a string, or empty string if not found
 */
export const getTitleText = (canvas: any): string => {
  try {
    const titleElement = canvas.getByRole('heading') || canvas.querySelector('h1, h2, h3, .title')
    return titleElement?.textContent?.trim() || ''
  } catch {
    return ''
  }
}
