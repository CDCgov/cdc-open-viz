import { describe, it, expect } from 'vitest'
import versionNeedsUpdate from '../versionNeedsUpdate'
import isOlderVersion from '../../isOlderVersion'

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

  it('treats a missing numeric suffix as zero', () => {
    expect(versionNeedsUpdate('4.26.4', '4.26.4-0')).toBe(false)
    expect(versionNeedsUpdate('4.26.4-0', '4.26.4')).toBe(false)
  })

  it('orders numeric suffix follow-up migration versions after the base patch', () => {
    expect(versionNeedsUpdate('4.26.4', '4.26.4-1')).toBe(true)
  })

  it('orders later numeric suffix follow-up migration versions correctly', () => {
    expect(versionNeedsUpdate('4.26.4-1', '4.26.4-2')).toBe(true)
  })

  it('keeps the next patch ahead of any numeric suffix follow-up migration version', () => {
    expect(versionNeedsUpdate('4.26.4-9', '4.26.5')).toBe(true)
  })

  it('treats malformed previous versions as 0.0.0 so all migrations still run', () => {
    expect(versionNeedsUpdate('banana', '4.24.3')).toBe(true)
    expect(versionNeedsUpdate('4.x.1', '4.24.3')).toBe(true)
    expect(versionNeedsUpdate('4.26', '4.24.3')).toBe(true)
  })
})

describe('isOlderVersion', () => {
  it('uses the same numeric suffix ordering rules', () => {
    expect(isOlderVersion('4.26.4', '4.26.4-1')).toBe(true)
    expect(isOlderVersion('4.26.4-1', '4.26.4-2')).toBe(true)
    expect(isOlderVersion('4.26.4-9', '4.26.5')).toBe(true)
    expect(isOlderVersion('4.26.4', '4.26.4-0')).toBe(false)
  })

  it('treats malformed versions as 0.0.0', () => {
    expect(isOlderVersion('banana', '4.24.3')).toBe(true)
  })
})
