import { describe, it, expect } from 'vitest'
import { displaySize } from '../helpers/displaySize'

describe('displaySize', () => {
  it('should return an empty string if size is undefined', () => {
    expect(displaySize(undefined)).toBe('')
  })

  it('should return size in GB if size is greater than 1GB', () => {
    expect(displaySize(Math.pow(1024, 3) * 1.5)).toBe('1.5GB')
  })

  it('should return size in MB if size is greater than 1MB but less than 1GB', () => {
    expect(displaySize(Math.pow(1024, 2) * 1.5)).toBe('1.5MB')
  })

  it('should return size in KB if size is greater than 1KB but less than 1MB', () => {
    expect(displaySize(1024 * 1.5)).toBe('1.5KB')
  })

  it('should return size in B if size is less than 1KB', () => {
    expect(displaySize(512)).toBe('512B')
  })
})
