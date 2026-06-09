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

  it('sets missing auto max strategy to default for side-title chart configs', () => {
    const config: any = {
      type: 'chart',
      version: '4.26.5',
      yAxis: {
        titlePlacement: 'side',
        label: 'Cases'
      }
    }

    const result = update_4_26_6(config)

    expect(result.yAxis.autoMaxStrategy).toBe('default')
    expect(result.version).toBe('4.26.6')
    expect(config.yAxis.autoMaxStrategy).toBeUndefined()
  })

  it('sets missing auto max strategy to default for chart configs without top title placement', () => {
    const config: any = {
      type: 'chart',
      version: '4.26.5',
      yAxis: {
        label: 'Cases'
      }
    }

    const result = update_4_26_6(config)

    expect(result.yAxis.autoMaxStrategy).toBe('default')
  })

  it('sets missing auto max strategy to clean-top-tick for top-title chart configs', () => {
    const config: any = {
      type: 'chart',
      version: '4.26.5',
      yAxis: {
        titlePlacement: 'top',
        label: 'Cases'
      }
    }

    const result = update_4_26_6(config)

    expect(result.yAxis.autoMaxStrategy).toBe('clean-top-tick')
  })

  it('preserves explicit auto max strategy settings', () => {
    const config: any = {
      type: 'chart',
      version: '4.26.5',
      yAxis: {
        titlePlacement: 'top',
        autoMaxStrategy: 'default'
      }
    }

    const result = update_4_26_6(config)

    expect(result.yAxis.autoMaxStrategy).toBe('default')
  })

  it('sets auto max strategy for dashboard chart visualizations', () => {
    const config: any = {
      type: 'dashboard',
      version: '4.26.5',
      dashboard: { sharedFilters: [] },
      rows: [],
      visualizations: {
        chart1: {
          type: 'chart',
          yAxis: { titlePlacement: 'side' }
        },
        chart2: {
          type: 'chart',
          yAxis: {
            titlePlacement: 'top'
          }
        },
        chart3: {
          type: 'chart',
          yAxis: {
            titlePlacement: 'top',
            autoMaxStrategy: 'default'
          }
        }
      }
    }

    const result = update_4_26_6(config)

    expect(result.visualizations.chart1.yAxis.autoMaxStrategy).toBe('default')
    expect(result.visualizations.chart2.yAxis.autoMaxStrategy).toBe('clean-top-tick')
    expect(result.visualizations.chart3.yAxis.autoMaxStrategy).toBe('default')
  })

  it('sets auto max strategy for nested dashboard chart visualizations', () => {
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
              yAxis: {
                titlePlacement: 'top'
              }
            }
          }
        }
      }
    }

    const result = update_4_26_6(config)

    expect(result.visualizations.nestedDashboard.visualizations.chart1.yAxis.autoMaxStrategy).toBe('clean-top-tick')
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
          yAxis: {
            titlePlacement: 'side'
          }
        }
      }
    } as any)

    expect(result.version).toBe('4.26.6')
    expect(result.dashboard.sharedFilters[0].fileNameTargets).toEqual([
      { datasetKey: 'state-line-data', fileName: 'state_${value}' }
    ])
    expect(result.dashboard.sharedFilters[0].forceFileNameCapitalization).toBe(true)
    expect(result.visualizations.chart1.yAxis.autoMaxStrategy).toBe('default')
  })

  it('does not write auto max strategy for configs already migrated to 4.26.6', () => {
    const config: any = {
      type: 'chart',
      version: '4.26.6',
      yAxis: {}
    }

    const result = coveUpdateWorker(config)

    expect(result.yAxis.autoMaxStrategy).toBeUndefined()
    expect(result.version).toBe('4.26.6')
  })
})
