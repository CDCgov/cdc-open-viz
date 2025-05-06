import { describe, it, expect } from 'vitest'
import { handleMiddleIndices } from './../../components/LineChart/helpers'

const mockIsSuppressed = () => false
const mockColorScale = () => '#000'

describe('handleMiddleIndices', () => {
  it('should return an empty result when data is null', () => {
    const result = handleMiddleIndices({
      data: null,
      seriesKey: 'testKey',
      preliminaryData: [],
      dynamicCategory: null,
      originalSeriesKey: 'originalKey',
      colorScale: mockColorScale,
      isSuppressed: mockIsSuppressed
    })

    expect(result).toEqual({
      data: {},
      style: '',
      color: 'red'
    })
  })

  it('should return an empty result when preliminaryData is null', () => {
    const result = handleMiddleIndices({
      data: [{ testKey: 'value' }],
      seriesKey: 'testKey',
      preliminaryData: null,
      dynamicCategory: null,
      originalSeriesKey: 'originalKey',
      colorScale: mockColorScale,
      isSuppressed: mockIsSuppressed
    })

    expect(result).toEqual({
      data: {},
      style: '',
      color: 'red'
    })
  })
})
