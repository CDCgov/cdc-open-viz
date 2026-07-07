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

  it('places values missing from custom order after explicitly ordered values', () => {
    const items = ['Unknown', '0', '1 - 14'].map(buildItem)

    expect(sortGroupedLegendItems(items, ['1 - 14', '0']).map(item => item.label)).toEqual([
      '1 - 14',
      '0',
      'Unknown'
    ])
  })

  it('uses rawLabel for custom ordering when display labels differ', () => {
    const items = [
      { ...buildItem('0'), rawLabel: 'Zero' },
      { ...buildItem('1 - 14'), rawLabel: 'One to Fourteen' }
    ]

    expect(sortGroupedLegendItems(items, ['One to Fourteen', 'Zero']).map(item => item.label)).toEqual([
      '1 - 14',
      '0'
    ])
  })
})
