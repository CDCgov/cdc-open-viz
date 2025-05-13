import { describe, it, expect } from 'vitest'
import { getNewRuntime } from '../getNewRuntime'

describe('getNewRuntime', () => {
  it('should return a runtime object with default values when no data is provided', () => {
    const visualizationConfig = { runtime: {} }
    const newFilteredData = null

    const result = getNewRuntime(visualizationConfig, newFilteredData)

    expect(result.series).toEqual([])
    expect(result.seriesLabels).toEqual({})
    expect(result.seriesLabelsAll).toEqual([])
    expect(result.seriesKeys).toEqual([])
  })

  it('should populate runtime.series with valid series from newFilteredData', () => {
    const visualizationConfig = {
      runtime: {},
      filters: [],
      columns: {},
      dynamicSeriesType: 'bar',
      dynamicSeriesLineType: 'solid',
      xAxis: { dataKey: 'x' }
    }
    const newFilteredData = [
      { x: 1, y: 10, z: 20 },
      { x: 2, y: 15, z: 25 }
    ]

    const result = getNewRuntime(visualizationConfig, newFilteredData)

    expect(result.series).toEqual([
      { dataKey: 'y', type: 'bar', lineType: 'solid', tooltip: true },
      { dataKey: 'z', type: 'bar', lineType: 'solid', tooltip: true }
    ])
    expect(result.seriesKeys).toEqual(['y', 'z'])
    expect(result.seriesLabels).toEqual({ y: 'y', z: 'z' })
    expect(result.seriesLabelsAll).toEqual(['y', 'z'])
  })

  it('should exclude series keys that match filters or columns', () => {
    const visualizationConfig = {
      runtime: {},
      filters: [{ columnName: 'y' }],
      columns: { z: {} },
      dynamicSeriesType: 'bar',
      dynamicSeriesLineType: 'solid',
      xAxis: { dataKey: 'x' }
    }
    const newFilteredData = [
      { x: 1, y: 10, z: 20, w: 30 },
      { x: 2, y: 15, z: 25, w: 35 }
    ]

    const result = getNewRuntime(visualizationConfig, newFilteredData)

    expect(result.series).toEqual([{ dataKey: 'w', type: 'bar', lineType: 'solid', tooltip: true }])
    expect(result.seriesKeys).toEqual(['w'])
    expect(result.seriesLabels).toEqual({ w: 'w' })
    expect(result.seriesLabelsAll).toEqual(['w'])
  })

  it('should handle empty newFilteredData gracefully', () => {
    const visualizationConfig = {
      runtime: {},
      filters: [],
      columns: {},
      dynamicSeriesType: 'bar',
      dynamicSeriesLineType: 'solid',
      xAxis: { dataKey: 'x' }
    }
    const newFilteredData = []

    const result = getNewRuntime(visualizationConfig, newFilteredData)

    expect(result.series).toEqual([])
    expect(result.seriesKeys).toEqual([])
    expect(result.seriesLabels).toEqual({})
    expect(result.seriesLabelsAll).toEqual([])
  })
})
