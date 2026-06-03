import update_4_26_6 from '../4.26.6'
import { coveUpdateWorker } from '../../coveUpdateWorker'
import { describe, expect, it } from 'vitest'

describe('update_4_26_6', () => {
  it('migrates legacy File Name URL filters into explicit filename targets', () => {
    const config: any = {
      type: 'dashboard',
      version: '4.26.5',
      dashboard: {
        sharedFilters: [
          {
            key: 'State',
            type: 'urlfilter',
            filterBy: 'File Name',
            datasetKey: 'state-line-data',
            fileName: 'state_${query}',
            whitespaceReplacement: 'Replace With Underscore'
          }
        ]
      },
      rows: [],
      visualizations: {}
    }

    const result = update_4_26_6(config)
    const filter = result.dashboard.sharedFilters[0]

    expect(filter.fileNameTargets).toEqual([{ datasetKey: 'state-line-data', fileName: 'state_${value}' }])
    expect(filter.forceFileNameCapitalization).toBe(true)
    expect(filter.datasetKey).toBeUndefined()
    expect(filter.fileName).toBeUndefined()
    expect(config.dashboard.sharedFilters[0].datasetKey).toBe('state-line-data')
  })

  it('uses ${value} for legacy File Name filters missing a filename template', () => {
    const result = update_4_26_6({
      type: 'dashboard',
      dashboard: {
        sharedFilters: [
          {
            key: 'State',
            type: 'urlfilter',
            filterBy: 'File Name',
            datasetKey: 'state-line-data'
          }
        ]
      },
      rows: [],
      visualizations: {}
    } as any)

    expect(result.dashboard.sharedFilters[0].fileNameTargets).toEqual([
      { datasetKey: 'state-line-data', fileName: '${value}' }
    ])
    expect(result.dashboard.sharedFilters[0].forceFileNameCapitalization).toBe(true)
  })

  it('converts already-targeted File Name filter templates from ${query} to ${value}', () => {
    const result = update_4_26_6({
      type: 'dashboard',
      dashboard: {
        sharedFilters: [
          {
            key: 'State',
            type: 'urlfilter',
            filterBy: 'File Name',
            fileNameTargets: [
              { datasetKey: 'state-line-data', fileName: 'State_${query}' },
              { datasetKey: 'summary-data', fileName: 'Summary_${query}_Report' }
            ]
          }
        ]
      },
      rows: [],
      visualizations: {}
    } as any)

    expect(result.dashboard.sharedFilters[0].fileNameTargets).toEqual([
      { datasetKey: 'state-line-data', fileName: 'State_${value}' },
      { datasetKey: 'summary-data', fileName: 'Summary_${value}_Report' }
    ])
    expect(result.dashboard.sharedFilters[0].forceFileNameCapitalization).toBeUndefined()
  })

  it('preserves already-targeted File Name filters without placeholders', () => {
    const result = update_4_26_6({
      type: 'dashboard',
      dashboard: {
        sharedFilters: [
          {
            key: 'State',
            type: 'urlfilter',
            filterBy: 'File Name',
            fileNameTargets: [{ datasetKey: 'state-line-data', fileName: 'static-state-file' }]
          }
        ]
      },
      rows: [],
      visualizations: {}
    } as any)

    expect(result.dashboard.sharedFilters[0].fileNameTargets).toEqual([
      { datasetKey: 'state-line-data', fileName: 'static-state-file' }
    ])
    expect(result.dashboard.sharedFilters[0].forceFileNameCapitalization).toBeUndefined()
  })

  it('does not touch dashboard-condition datasetKey values', () => {
    const result = update_4_26_6({
      type: 'dashboard',
      dashboard: {
        sharedFilters: [
          {
            key: 'State',
            type: 'urlfilter',
            filterBy: 'File Name',
            datasetKey: 'state-line-data',
            fileName: 'state_${query}'
          }
        ]
      },
      rows: [
        {
          dashboardCondition: {
            id: 'row-condition',
            datasetKey: 'condition-data',
            operator: 'hasData'
          },
          columns: [
            {
              width: 12,
              conditionalWidgets: [
                {
                  widget: 'chart',
                  dashboardCondition: {
                    id: 'column-condition',
                    datasetKey: 'column-condition-data',
                    operator: 'hasData'
                  }
                }
              ]
            }
          ]
        }
      ],
      visualizations: {}
    } as any)

    expect(result.rows[0].dashboardCondition.datasetKey).toBe('condition-data')
    expect(result.rows[0].columns[0].conditionalWidgets[0].dashboardCondition.datasetKey).toBe(
      'column-condition-data'
    )
  })

  it('migrates nested dashboard File Name URL filters', () => {
    const result = update_4_26_6({
      type: 'dashboard',
      dashboard: {
        sharedFilters: []
      },
      rows: [],
      visualizations: {
        nestedDashboard: {
          type: 'dashboard',
          dashboard: {
            sharedFilters: [
              {
                key: 'State',
                type: 'urlfilter',
                filterBy: 'File Name',
                datasetKey: 'nested-state-data',
                fileName: 'nested_${query}'
              }
            ]
          },
          rows: [],
          visualizations: {}
        }
      }
    } as any)

    expect(result.visualizations.nestedDashboard.dashboard.sharedFilters[0].fileNameTargets).toEqual([
      { datasetKey: 'nested-state-data', fileName: 'nested_${value}' }
    ])
  })

  it('sets legacy chart configs with missing auto max rounding to none', () => {
    const config: any = {
      type: 'chart',
      version: '4.26.5',
      yAxis: {
        label: 'Cases'
      }
    }

    const result = update_4_26_6(config)

    expect(result.yAxis.autoMaxRounding).toBe('none')
    expect(result.version).toBe('4.26.6')
    expect(config.yAxis.autoMaxRounding).toBeUndefined()
  })

  it('preserves explicit auto max rounding settings', () => {
    const config: any = {
      type: 'chart',
      version: '4.26.5',
      yAxis: {
        autoMaxRounding: 'tick-friendly'
      }
    }

    const result = update_4_26_6(config)

    expect(result.yAxis.autoMaxRounding).toBe('tick-friendly')
  })

  it('sets legacy auto max rounding for dashboard chart visualizations', () => {
    const config: any = {
      type: 'dashboard',
      version: '4.26.5',
      dashboard: { sharedFilters: [] },
      rows: [],
      visualizations: {
        chart1: {
          type: 'chart',
          yAxis: {}
        },
        chart2: {
          type: 'chart',
          yAxis: {
            autoMaxRounding: 'tick-friendly'
          }
        }
      }
    }

    const result = update_4_26_6(config)

    expect(result.visualizations.chart1.yAxis.autoMaxRounding).toBe('none')
    expect(result.visualizations.chart2.yAxis.autoMaxRounding).toBe('tick-friendly')
  })

  it('sets legacy auto max rounding for nested dashboard chart visualizations', () => {
    const config: any = {
      type: 'dashboard',
      version: '4.26.5',
      dashboard: { sharedFilters: [] },
      rows: [],
      visualizations: {
        nestedDashboard: {
          type: 'dashboard',
          visualizations: {
            chart1: {
              type: 'chart',
              yAxis: {}
            }
          }
        }
      }
    }

    const result = update_4_26_6(config)

    expect(result.visualizations.nestedDashboard.visualizations.chart1.yAxis.autoMaxRounding).toBe('none')
  })

  it('migrates configs through 4.26.6 in coveUpdateWorker', () => {
    const result = coveUpdateWorker({
      type: 'dashboard',
      version: '4.26.5',
      dashboard: {
        sharedFilters: [
          {
            key: 'State',
            type: 'urlfilter',
            filterBy: 'File Name',
            datasetKey: 'state-line-data',
            fileName: 'state_${query}'
          }
        ]
      },
      rows: [],
      visualizations: {
        chart1: {
          type: 'chart',
          yAxis: {}
        }
      }
    } as any)

    expect(result.version).toBe('4.26.6')
    expect(result.dashboard.sharedFilters[0].fileNameTargets).toEqual([
      { datasetKey: 'state-line-data', fileName: 'state_${value}' }
    ])
    expect(result.dashboard.sharedFilters[0].forceFileNameCapitalization).toBe(true)
    expect(result.visualizations.chart1.yAxis.autoMaxRounding).toBe('none')
  })

  it('does not write legacy auto max rounding for configs already migrated to 4.26.6', () => {
    const config: any = {
      type: 'chart',
      version: '4.26.6',
      yAxis: {}
    }

    const result = coveUpdateWorker(config)

    expect(result.yAxis.autoMaxRounding).toBeUndefined()
    expect(result.version).toBe('4.26.6')
  })
})
