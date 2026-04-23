import { describe, expect, it } from 'vitest'
import { getYAxisAutoPadding } from '../getYAxisAutoPadding'
import { createMockConfig } from '../../components/LinearChart/tests/mockConfigContext'

const baseConfig = createMockConfig({
  orientation: 'vertical'
})

describe('getYAxisAutoPadding', () => {
  it('preserves the extra-tick escalation for inline-label mode', () => {
    const yScale = {
      ticks: () => [0, 1, 2]
    }

    const padding = getYAxisAutoPadding(yScale, 3, 2.95, 0, baseConfig, 'inline-label')

    expect(padding).toBeCloseTo(35.69, 2)
  })

  it('returns the single-pass padding for top-title mode', () => {
    const yScale = {
      ticks: () => [0, 1, 2]
    }

    const padding = getYAxisAutoPadding(yScale, 3, 2.95, 0, baseConfig, 'top-title')

    expect(padding).toBeCloseTo(1.79, 2)
  })

  it('returns 0 when the data is not close enough to the top tick', () => {
    const yScale = {
      ticks: () => [0, 50, 100]
    }

    expect(getYAxisAutoPadding(yScale, 3, 80, 0, baseConfig, 'top-title')).toBe(0)
  })
})
