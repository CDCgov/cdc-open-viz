import { getTextWidth } from '@cdc/core/helpers/getTextWidth'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { calculateHorizontalBarCategoryLabelWidth } from './calculateHorizontalBarCategoryLabelWidth'

vi.mock('@cdc/core/helpers/getTextWidth', () => ({
  getTextWidth: vi.fn()
}))

const mockedGetTextWidth = vi.mocked(getTextWidth)

const calculateWidth = (categoryValues: string[], chartWidth = 500) =>
  calculateHorizontalBarCategoryLabelWidth({
    yScale: { domain: () => categoryValues },
    chartWidth,
    formatDate: vi.fn(),
    parseDate: vi.fn(),
    tickLabelFont: 'normal 16px Nunito, sans-serif',
    labelPlacement: 'On Date/Category Axis'
  })

describe('calculateHorizontalBarCategoryLabelWidth', () => {
  beforeEach(() => {
    mockedGetTextWidth.mockImplementation(label => label.length * 10)
  })

  it('keeps at least ten pixels between short labels and the chart area', () => {
    expect(calculateWidth(['A', 'B'])).toBe(20)
  })

  it('retains proportional padding for longer labels', () => {
    expect(calculateWidth(['abcdefghij'])).toBe(115)
  })

  it('still caps category label space at thirty percent of the chart width', () => {
    expect(calculateWidth(['abcdefghij'], 300)).toBe(90)
  })
})
