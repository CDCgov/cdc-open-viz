import { describe, expect, it } from 'vitest'
import { sortGroupedLegendItems } from './Legend.Group'

const buildItem = (label: string) => ({
  color: '#000',
  label,
  rawLabel: label,
  special: false
})

describe('sortGroupedLegendItems', () => {
  it('uses automatic numeric category ordering when no custom order is configured', () => {
    const items = ['15 - 29', 'Unknown', '0', '1 - 14'].map(buildItem)

    expect(sortGroupedLegendItems(items).map(item => item.label)).toEqual(['0', '1 - 14', '15 - 29', 'Unknown'])
  })

  it('preserves custom category order when configured', () => {
    const items = ['0', '1 - 14', '15 - 29'].map(buildItem)

    expect(sortGroupedLegendItems(items, ['15 - 29', '1 - 14', '0']).map(item => item.label)).toEqual([
      '15 - 29',
      '1 - 14',
      '0'
    ])
  })
})
