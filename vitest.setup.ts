import '@testing-library/jest-dom'
import { beforeAll, vi } from 'vitest'
import { setProjectAnnotations } from '@storybook/react'
import * as projectAnnotations from './.storybook/preview'
import { configure } from '@testing-library/react'

// Configure testing library to reduce verbose output
configure({
  testIdAttribute: 'data-testid',
  getElementError: (message, container) => {
    const error = new Error(message || 'Element not found')
    error.name = 'TestingLibraryElementError'
    return error
  }
})

// ============================================================================
// PRE-WARM LAZY MODULE CACHE
// ============================================================================
// Eagerly import lazy-loaded editor components before tests run to prevent
// "Failed to fetch dynamically imported module" errors in sharded test mode.
// This ensures modules are cached in the browser and available when tests
// render components that use lazy(() => import(...)).
//
// Why this matters:
// - Lazy imports depend on Storybook dev server availability
// - In sharded test mode (--shard=1/4), concurrent module requests can timeout
// - Pre-caching eliminates race conditions between module fetch and render
//
// NOTE: Only run for Storybook tests (browser environment) to avoid interfering
// with unit test mocking setup
const prewarmLazyModules = async () => {
  const modules = [
    // Chart package
    () => import('@cdc/chart/src/components/EditorPanel'),
    // Map package
    () => import('@cdc/map/src/components/EditorPanel'),
    () => import('@cdc/map/src/components/UsaMap/data/us-topo.json'),
    // Data Bite package
    () => import('@cdc/data-bite/src/components/EditorPanel'),
    // Data Table package
    () => import('@cdc/data-table/src/panels'),
    // Markup Include package
    () => import('@cdc/markup-include/src/components/EditorPanel'),
    // Waffle Chart package
    () => import('@cdc/waffle-chart/src/components/EditorPanel'),
    // Dashboard package - multiple lazy components
    () => import('@cdc/dashboard/src/components/VisualizationsPanel'),
    () => import('@cdc/dashboard/src/components/DashboardEditors'),
    () => import('@cdc/dashboard/src/components/DashboardEditorProviders'),
    () => import('@cdc/dashboard/src/components/Grid'),
    () => import('@cdc/dashboard/src/components/Header'),
    // Dashboard child renderers (lazy-loaded visualizations)
    () => import('@cdc/chart/src/CdcChartComponent'),
    () => import('@cdc/map/src/CdcMapComponent'),
    () => import('@cdc/waffle-chart/src/CdcWaffleChart'),
    () => import('@cdc/markup-include/src/CdcMarkupInclude')
  ]

  // Import all lazy modules in parallel, silently catch any failures
  // (failures here mean the module path is wrong, which will surface during actual tests)
  await Promise.allSettled(modules.map(importer => importer()))
}

// Run pre-warming in browser context before Storybook tests
// Check for __vitest_browser_runner__ which indicates we're in Storybook browser test mode
if (typeof window !== 'undefined' && typeof globalThis !== 'undefined' && '__vitest_browser_runner__' in globalThis) {
  prewarmLazyModules().catch(err => {
    // Log any systematic issues, but don't fail test setup
    console.debug('[Lazy Module Pre-warming] Some modules failed to load:', err)
  })
}

// Mock deprecated Storybook testing utilities for legacy stories
vi.mock('@storybook/testing-library', () => ({
  within: vi.fn(),
  userEvent: vi.fn(),
  screen: vi.fn(),
  expect: vi.fn()
}))

vi.mock('@storybook/jest', () => ({
  expect: vi.fn(),
  jest: vi.fn()
}))

// Suppress React warnings in tests
const originalConsoleWarn = console.warn
const originalConsoleError = console.error

// Apply Storybook's global decorators and parameters
const project = setProjectAnnotations([projectAnnotations])

beforeAll(() => {
  // Suppress specific React warnings during tests but preserve test failures
  console.warn = (message, ...args) => {
    // Skip React warnings during tests
    if (
      typeof message === 'string' &&
      (message.includes('Warning:') || message.includes('React Warning:') || message.includes('validateDOMNesting'))
    ) {
      return
    }
    originalConsoleWarn(message, ...args)
  }

  console.error = (message, ...args) => {
    // Skip React warnings during tests but preserve real errors
    if (
      typeof message === 'string' &&
      (message.includes('Warning:') || message.includes('React Warning:') || message.includes('validateDOMNesting'))
    ) {
      return
    }
    originalConsoleError(message, ...args)
  }

  // Run the existing Storybook setup
  return project.beforeAll?.()
})
