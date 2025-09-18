import '@testing-library/jest-dom'
import { beforeAll, vi } from 'vitest'
import { setProjectAnnotations } from '@storybook/react'
import * as projectAnnotations from './.storybook/preview'

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
  // Suppress specific React warnings during tests
  console.warn = (message, ...args) => {
    // Skip React warnings during tests
    if (typeof message === 'string' && message.includes('Warning:')) {
      return
    }
    originalConsoleWarn(message, ...args)
  }

  console.error = (message, ...args) => {
    // Skip React errors/warnings during tests
    if (typeof message === 'string' && message.includes('Warning:')) {
      return
    }
    originalConsoleError(message, ...args)
  }

  // Run the existing Storybook setup
  return project.beforeAll?.()
})
