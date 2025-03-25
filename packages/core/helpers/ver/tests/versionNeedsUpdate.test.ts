import { describe, it, expect } from 'vitest'
import versionNeedsUpdate from '../versionNeedsUpdate'

describe('versionNeedsUpdate', () => {
  it('should return true if previousVersion is empty', () => {
    expect(versionNeedsUpdate('', '1.0.0')).toBe(true)
  })

  it('should return true if currentVersion has a higher major version', () => {
    expect(versionNeedsUpdate('1.0.0', '2.0.0')).toBe(true)
  })

  it('should return true if currentVersion has a higher minor version', () => {
    expect(versionNeedsUpdate('1.0.0', '1.1.0')).toBe(true)
  })

  it('should return true if currentVersion has a higher patch version', () => {
    expect(versionNeedsUpdate('1.0.0', '1.0.1')).toBe(true)
  })

  it('should return false if currentVersion is the same as previousVersion', () => {
    expect(versionNeedsUpdate('1.0.0', '1.0.0')).toBe(false)
  })

  it('should return false if currentVersion is an older version', () => {
    expect(versionNeedsUpdate('2.0.0', '1.0.0')).toBe(false)
  })
})
