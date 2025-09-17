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

// Apply Storybook's global decorators and parameters
const project = setProjectAnnotations([projectAnnotations])

beforeAll(project.beforeAll)