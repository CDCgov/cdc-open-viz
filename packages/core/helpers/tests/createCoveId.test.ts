import { afterEach, describe, expect, it, vi } from 'vitest'
import { createCoveId } from '../createCoveId'

describe('createCoveId', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('creates ids with the prefix and default 8-character base36 suffix', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.123456789)

    expect(createCoveId('chart')).toBe('chart-4fzzzxjy')
    expect(createCoveId('chart')).toMatch(/^chart-[a-z0-9]{8}$/)
  })

  it('supports custom suffix lengths', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.123456789)

    expect(createCoveId('row', { suffixLength: 4 })).toBe('row-4fzz')
  })

  it('avoids ids in the caller-provided existing id scope', () => {
    vi.spyOn(Math, 'random').mockReturnValueOnce(0.123456789).mockReturnValueOnce(0.23456789)

    expect(createCoveId('map', { existingIds: ['map-4fzzzxjy'] })).toBe('map-8fzzzbjm')
  })

  it('normalizes existing string and number ids before comparing', () => {
    vi.spyOn(Math, 'random').mockReturnValueOnce(0.123456789).mockReturnValueOnce(0.23456789)

    expect(createCoveId('data-bite', { existingIds: ['data-bite-4fzzzxjy', 123] })).toBe('data-bite-8fzzzbjm')
  })

  it('throws a clear error after the fixed max attempt count', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.123456789)

    expect(() => createCoveId('condition', { existingIds: ['condition-4fzzzxjy'] })).toThrow(
      'Unable to create a unique COVE id with prefix "condition" after 100 attempts.'
    )
  })
})
