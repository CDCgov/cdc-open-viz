import { expect, describe, it } from 'vitest'
import { makeChartLegendsUnified } from '../4.25.4'
import { ChartConfig } from '@cdc/chart/src/types/ChartConfig'
import { DashboardConfig } from '@cdc/dashboard/src/types/DashboardConfig'

describe('makeChartLegendsUnified(config) ', () => {
  it('sets chart legends unified to true', () => {
    const mockConfig = { type: 'chart', legend: { unified: false } } as Partial<ChartConfig>
    makeChartLegendsUnified(mockConfig)
    expect(mockConfig.legend?.unified).toBe(true)
  })
  it('sets dashboard nested chart legends unified to true', () => {
    const mockConfig = {
      type: 'dashboard',
      visualizations: {
        '1': { type: 'chart', legend: { unified: false } } as ChartConfig,
        '2': { type: 'chart', legend: { unified: false } } as ChartConfig
      }
    } as Partial<DashboardConfig>
    makeChartLegendsUnified(mockConfig)
    expect(mockConfig.visualizations['1'].legend?.unified).toBe(true)
    expect(mockConfig.visualizations['2'].legend?.unified).toBe(true)
  })
})
