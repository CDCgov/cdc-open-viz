import { describe, it, expect } from 'vitest'
import { generateRuntimeLegend } from '../generateRuntimeLegend'

describe('generateRuntimeLegend', () => {
  const mockConfig = {
    data: [
      { state: 'Alabama', value: 10, uid: 'AL' },
      { state: 'Alaska', value: 20, uid: 'AK' },
      { state: 'Arizona', value: 30, uid: 'AZ' }
    ],
    columns: {
      geo: { name: 'state' },
      primary: { name: 'value' }
    },
    legend: {
      type: 'category',
      numberOfItems: 5,
      specialClasses: [],
      unified: false
    },
    general: {
      type: 'us-states'
    },
    color: 'bluegreen'
  }

  const mockRuntimeData = {
    AL: { state: 'Alabama', value: 10, uid: 'AL' },
    AK: { state: 'Alaska', value: 20, uid: 'AK' },
    AZ: { state: 'Arizona', value: 30, uid: 'AZ' }
  }

  const mockRuntimeFilters = { fromHash: 123 }
  const mockSetConfig = () => {}
  const mockLegendMemo = { current: new Map() }
  const mockLegendSpecialClassLastMemo = { current: new Map() }

  it('should generate a legend result with correct structure', () => {
    const result = generateRuntimeLegend(
      mockConfig as any,
      Object.values(mockRuntimeData),
      'test-hash',
      mockSetConfig,
      mockRuntimeFilters as any,
      mockLegendMemo,
      mockLegendSpecialClassLastMemo
    )

    expect(result).toMatchObject({
      fromHash: 'test-hash',
      runtimeDataHash: 123,
      items: expect.any(Array)
    })

    expect(result.items.length).toBeGreaterThan(0)
  })

  it('should handle category legend type', () => {
    const result = generateRuntimeLegend(
      mockConfig as any,
      Object.values(mockRuntimeData),
      'test-hash',
      mockSetConfig,
      mockRuntimeFilters as any,
      mockLegendMemo,
      mockLegendSpecialClassLastMemo
    )

    // Should have legend items for each unique value
    expect(result.items.length).toBe(3) // 3 unique values: 10, 20, 30
    expect(result.items.every(item => item.color)).toBe(true) // All items should have colors
    expect(result.items.every(item => typeof item.bin === 'number')).toBe(true) // All items should have bin numbers
  })

  it('should maintain backwards compatibility', () => {
    // Test that the function still works with the same interface
    const result = generateRuntimeLegend(
      mockConfig as any,
      Object.values(mockRuntimeData),
      'test-hash',
      mockSetConfig,
      mockRuntimeFilters as any,
      mockLegendMemo,
      mockLegendSpecialClassLastMemo
    )

    // Should return a valid result object, not an empty array (which indicates error)
    expect(Array.isArray(result)).toBe(false)
    expect(typeof result).toBe('object')
    if (!Array.isArray(result)) {
      expect(result.items).toBeDefined()
      expect(Array.isArray(result.items)).toBe(true)
    }
  })
})
