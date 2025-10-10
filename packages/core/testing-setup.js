import { expect, afterEach, describe, it } from 'vitest'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers)

// Needed for globals
window.URL.createObjectURL = function () {}

// needed to get past watchMedia error.
// https://github.com/vitest-dev/vitest/issues/821
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  }))
})

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})
