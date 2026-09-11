import { describe, expect, it } from 'vitest'

import { applyTileOrder, getTileValues } from '../smallMultiplesHelpers'

describe('smallMultiplesHelpers tile ordering', () => {
  it('sorts tile values in natural numeric order', () => {
    const data = [
      { Week: '10' },
      { Week: '2' },
      { Week: '1' },
      { Week: '20' },
      { Week: '3' },
      { Week: null },
      { Week: '' }
    ]

    expect(getTileValues(data, 'Week')).toEqual(['1', '2', '3', '10', '20'])
  })

  it('uses natural numeric order when sorting tile display titles', () => {
    const tileTitles = {
      '1': 'Week 1',
      '2': 'Week 2',
      '10': 'Week 10'
    }
    const tileValues = ['10', '2', '1']

    expect(applyTileOrder(tileValues, 'asc', [], tileTitles)).toEqual(['1', '2', '10'])
    expect(applyTileOrder(tileValues, 'desc', [], tileTitles)).toEqual(['10', '2', '1'])
  })
})
