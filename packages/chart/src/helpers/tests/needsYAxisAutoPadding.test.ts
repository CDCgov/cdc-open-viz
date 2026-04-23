import { describe, expect, it } from 'vitest'
import { shouldUseYAxisAutoPadding } from '../needsYAxisAutoPadding'
import { createMockConfig } from '../../components/LinearChart/tests/mockConfigContext'

describe('shouldUseYAxisAutoPadding', () => {
  it('returns true when the y-axis uses a top title', () => {
    expect(
      shouldUseYAxisAutoPadding(
        createMockConfig({
          yAxis: {
            ...createMockConfig().yAxis,
            titlePlacement: 'top',
            inlineLabel: ''
          }
        })
      )
    ).toBe(true)
  })

  it('returns true when the y-axis uses a multi-word inline label', () => {
    expect(
      shouldUseYAxisAutoPadding(
        createMockConfig({
          yAxis: {
            ...createMockConfig().yAxis,
            titlePlacement: 'side',
            inlineLabel: 'per 100k'
          }
        })
      )
    ).toBe(true)
  })

  it('returns false when the y-axis uses a side title with no multi-word inline label', () => {
    expect(
      shouldUseYAxisAutoPadding(
        createMockConfig({
          yAxis: {
            ...createMockConfig().yAxis,
            titlePlacement: 'side',
            inlineLabel: 'Rate'
          }
        })
      )
    ).toBe(false)
  })
})
