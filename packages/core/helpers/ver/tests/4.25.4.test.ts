import { expect, describe, it } from 'vitest'
import { makeChartLegendsUnified, moveFootnotesToVizLevel } from '../4.25.4'
import { ChartConfig } from '@cdc/chart/src/types/ChartConfig'
import { DashboardConfig } from '@cdc/dashboard/src/types/DashboardConfig'
import { MultiDashboard, MultiDashboardConfig } from '@cdc/dashboard/src/types/MultiDashboard'

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
  it('sets multiDashboard nested chart legends unified to true', () => {
    const mockConfig = {
      type: 'dashboard',
      multiDashboards: [
        {
          visualizations: {
            '1': { type: 'chart', legend: { unified: false } },
            '2': { type: 'chart', legend: { unified: false } }
          }
        },
        {
          visualizations: {
            '3': { type: 'chart', legend: { unified: false } },
            '4': { type: 'chart', legend: { unified: false } }
          }
        }
      ] as unknown as MultiDashboard[]
    } as Partial<MultiDashboardConfig>
    makeChartLegendsUnified(mockConfig)
    expect(mockConfig.multiDashboards[0].visualizations['1'].legend?.unified).toBe(true)
    expect(mockConfig.multiDashboards[0].visualizations['2'].legend?.unified).toBe(true)
    expect(mockConfig.multiDashboards[1].visualizations['3'].legend?.unified).toBe(true)
    expect(mockConfig.multiDashboards[1].visualizations['4'].legend?.unified).toBe(true)
  })
})

describe('moveFootnotesToVizLevel', () => {
  it('moves footnotes to visualization level', () => {
    const toMigrate = {
      rows: [
        {
          columns: [
            {
              width: 12,
              widget: 'table123'
            },
            {},
            {}
          ],
          footnotesId: 'footnotes123'
        }
      ],
      visualizations: {
        table123: {},
        footnotes123: {
          uid: 'footnotes123',
          type: 'footnotes',
          visualizationType: 'footnotes',
          dataKey: 'valid-data-chart.csv',
          dynamicFootnotes: {
            symbolColumn: 'Race',
            textColumn: 'Age-adjusted rate'
          }
        }
      },
      type: 'dashboard',
      version: '4.25.4'
    }

    const expectedMigration = {
      rows: [
        {
          columns: [
            {
              width: 12,
              widget: 'table123'
            },
            {},
            {}
          ]
        }
      ],
      visualizations: {
        table123: {
          footnotes: {
            dataKey: 'valid-data-chart.csv',
            dynamicFootnotes: {
              symbolColumn: 'Race',
              textColumn: 'Age-adjusted rate'
            }
          }
        }
      },
      type: 'dashboard',
      version: '4.25.4'
    }
    moveFootnotesToVizLevel(toMigrate)
    expect(toMigrate).toEqual(expectedMigration)
  })
})
