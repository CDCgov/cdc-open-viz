import { describe, expect, it } from 'vitest'
import { createCategoricalBubbleSizeScale, getBubbleSizeType, getOrderedBubbleSizeCategories } from '../bubbleSize'

describe('bubbleSize', () => {
  it('defaults bubble size type to numeric', () => {
    expect(getBubbleSizeType()).toBe('numeric')
    expect(getBubbleSizeType({} as any)).toBe('numeric')
  })

  it('uses automatic numeric and range sorting for categorical size values', () => {
    const rows = [
      { size: '10+' },
      { size: '1 - 4' },
      { size: 'Other' },
      { size: '5 - 9' },
      { size: '0' },
      { size: '' },
      { size: null }
    ]

    expect(getOrderedBubbleSizeCategories(rows, 'size', [], true)).toEqual(['0', '1 - 4', '5 - 9', '10+', 'Other'])
  })

  it('uses custom category order ahead of automatic order', () => {
    const rows = [{ size: '1 - 4' }, { size: '5 - 9' }, { size: '10+' }, { size: 'Other' }]

    expect(getOrderedBubbleSizeCategories(rows, 'size', ['Other', '10+'], true)).toEqual([
      'Other',
      '10+',
      '1 - 4',
      '5 - 9'
    ])
  })

  it('maps categorical size values evenly across the configured radius range', () => {
    const scale = createCategoricalBubbleSizeScale(['Low', 'Medium', 'High'], 4, 28)

    expect(scale('Low')).toBe(4)
    expect(scale('Medium')).toBe(16)
    expect(scale('High')).toBe(28)
  })

  it('normalizes category whitespace before ordering and zero suppression', () => {
    const rows = [{ size: ' 0 ' }, { size: 0 }, { size: ' A ' }, { size: 'A' }, { size: '   ' }]

    expect(getOrderedBubbleSizeCategories(rows, 'size', [], false)).toEqual(['A'])
    expect(getOrderedBubbleSizeCategories(rows, 'size', [], true)).toEqual(['0', 'A'])

    const scale = createCategoricalBubbleSizeScale(['A'], 4, 28)
    expect(scale(' A ')).toBe(4)
  })
})
