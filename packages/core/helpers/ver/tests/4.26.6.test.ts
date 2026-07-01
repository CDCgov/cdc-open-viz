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

    expect(result.version).toBe('4.26.6-2')
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
    expect(result.version).toBe('4.26.6-2')
  })
})

const makeDashboardConfig = (overrides: Record<string, any> = {}) => ({
  type: 'dashboard',
  version: '4.26.5',
  dashboard: {
    title: 'Dashboard',
    sharedFilters: []
  },
  table: {
    label: 'Data Table',
    show: true,
    expanded: false,
    limitHeight: true,
    height: 320,
    download: true,
    downloadImageButton: true,
    downloadImageButtonStyle: 'link',
    downloadImageLabel: 'Save dashboard'
  },
  datasets: {
    datasetA: {
      data: [{ State: 'CA', Value: 1 }],
      dataDescription: { horizontal: false, series: false }
    }
  },
  rows: [{ columns: [{ width: 12, widget: 'chartA' }] }],
  visualizations: {
    chartA: {
      type: 'chart',
      dataKey: 'datasetA',
      dataDescription: { horizontal: false, series: false }
    }
  },
  ...overrides
})

const getGeneratedTables = config =>
  Object.entries(config.visualizations).filter(
    ([, visualization]: [string, any]) => visualization.migrations?.generatedFromDashboardTable
  )

const everyRowWidgetHasVisualization = config =>
  config.rows.every(row => row.columns?.every(column => Boolean(config.visualizations[column.widget])))

describe('update_4_26_6', () => {
  it('creates one standalone generated table row for a single dashboard dataset', () => {
    const result: any = update_4_26_6(makeDashboardConfig())
    const generatedTables = getGeneratedTables(result)
    const [tableKey, tableViz] = generatedTables[0] as [string, any]

    expect(generatedTables).toHaveLength(1)
    expect(tableViz.type).toBe('table')
    expect(tableViz.dataKey).toBe('datasetA')
    expect(tableViz.table).toMatchObject({
      label: 'datasetA',
      expanded: false,
      limitHeight: true,
      height: 320,
      download: true,
      showVertical: true,
      collapsible: true,
      anchorId: 'data-table-datasetA'
    })
    expect(tableViz.table.downloadImageButton).toBeUndefined()
    expect(tableViz.dataDescription).toEqual({ horizontal: false, series: false })
    expect(result.rows[result.rows.length - 1]).toMatchObject({
      columns: [{ width: 12, widget: tableKey }]
    })
    expect(result.rows[result.rows.length - 1].dataKey).toBeUndefined()
    expect(result.rows[result.rows.length - 1].dataDescription).toBeUndefined()
    expect(result.table.show).toBe(true)
    expect(tableViz.dataFormat).toBeUndefined()
    expect(tableViz.columns).toEqual({})
  })

  it('copies legacy dashboard data formatting onto generated tables only when it exists', () => {
    const dataFormat = { commas: true, roundTo: '1', suffix: '%' }
    const result: any = update_4_26_6(makeDashboardConfig({ dataFormat }))
    const [, tableViz] = getGeneratedTables(result)[0] as [string, any]

    expect(tableViz.dataFormat).toEqual(dataFormat)
  })

  it('uses standalone table defaults when root table settings do not define them', () => {
    const result: any = update_4_26_6(
      makeDashboardConfig({
        table: {
          label: 'Data Table',
          show: true
        },
        datasets: {
          datasetA: {
            data: [{ State: 'CA', Value: 1 }]
          }
        }
      })
    )
    const [, tableViz] = getGeneratedTables(result)[0] as [string, any]

    expect(tableViz.table).toMatchObject({
      label: 'datasetA',
      show: true,
      showVertical: true,
      expanded: false,
      collapsible: true
    })
    expect(tableViz.dataDescription).toEqual({ horizontal: false, series: false })
  })

  it('maps legacy root showDownloadUrl true to generated table showDatasetLink true', () => {
    const result: any = update_4_26_6(
      makeDashboardConfig({
        table: {
          show: true,
          showDownloadUrl: true
        }
      })
    )
    const [, tableViz] = getGeneratedTables(result)[0] as [string, any]

    expect(tableViz.table.showDatasetLink).toBe(true)
  })

  it('maps legacy root showDownloadUrl false to generated table showDatasetLink false', () => {
    const result: any = update_4_26_6(
      makeDashboardConfig({
        table: {
          show: true,
          showDownloadUrl: false
        }
      })
    )
    const [, tableViz] = getGeneratedTables(result)[0] as [string, any]

    expect(tableViz.table.showDatasetLink).toBe(false)
  })

  it('preserves legacy root downloadUrlLabel on generated table widgets', () => {
    const result: any = update_4_26_6(
      makeDashboardConfig({
        table: {
          show: true,
          showDownloadUrl: true,
          downloadUrlLabel: 'Open Source Data'
        }
      })
    )
    const [, tableViz] = getGeneratedTables(result)[0] as [string, any]

    expect(tableViz.table.downloadUrlLabel).toBe('Open Source Data')
  })

  it('defaults pre-existing authored dashboard table widgets to showDatasetLink false', () => {
    const result: any = update_4_26_6(
      makeDashboardConfig({
        visualizations: {
          chartA: { type: 'chart', dataKey: 'datasetA' },
          authoredTable: {
            type: 'table',
            dataKey: 'datasetA',
            table: {
              showDownloadUrl: true
            }
          }
        }
      })
    )

    expect(result.visualizations.authoredTable.table.showDatasetLink).toBe(false)
    expect(result.visualizations.authoredTable.table.showDownloadUrl).toBe(true)
  })

  it('creates one generated table per dataset', () => {
    const result: any = update_4_26_6(
      makeDashboardConfig({
        datasets: {
          datasetA: { data: [{ State: 'CA' }] },
          datasetB: { data: [{ State: 'TX' }] }
        },
        visualizations: {
          chartA: { type: 'chart', dataKey: 'datasetA' },
          chartB: { type: 'chart', dataKey: 'datasetB' }
        }
      })
    )

    expect(getGeneratedTables(result).map(([, table]: [string, any]) => table.dataKey)).toEqual([
      'datasetA',
      'datasetB'
    ])
    expect(result.rows.slice(-2).map(row => row.dataKey)).toEqual([undefined, undefined])
  })

  it('does not create generated tables when there are no datasets', () => {
    const result: any = update_4_26_6(makeDashboardConfig({ datasets: {} }))

    expect(getGeneratedTables(result)).toHaveLength(0)
    expect(result.rows).toHaveLength(1)
  })

  it('does not synthesize generated tables directly from legacy root data', () => {
    const legacyRootData = [{ State: 'CA', Value: 1 }]
    const result: any = update_4_26_6(
      makeDashboardConfig({
        data: legacyRootData,
        dataFileName: 'legacy.csv',
        datasets: undefined,
        visualizations: {
          chartA: {
            type: 'chart',
            data: legacyRootData
          }
        }
      })
    )

    expect(getGeneratedTables(result)).toHaveLength(0)
    expect(result.rows).toHaveLength(1)
    expect(result.data).toEqual(legacyRootData)
    expect(result.table.show).toBe(true)
  })

  it('does not create generated tables for datasets the legacy dashboard table would not render', () => {
    const result: any = update_4_26_6(
      makeDashboardConfig({
        datasets: {
          datasetA: { data: [{ State: 'CA' }] },
          footnoteDataset: { data: [{ note: 'Footnote' }] },
          unusedDataset: { data: [{ State: 'TX' }] }
        },
        visualizations: {
          chartA: { type: 'chart', dataKey: 'datasetA', footnotes: { dataKey: 'footnoteDataset' } }
        }
      })
    )

    expect(getGeneratedTables(result).map(([, table]: [string, any]) => table.dataKey)).toEqual(['datasetA'])
  })

  it('does not create generated tables for datasets only referenced by row dataKey', () => {
    const result: any = update_4_26_6(
      makeDashboardConfig({
        datasets: {
          rowOnlyDataset: { data: [{ State: 'CA' }] }
        },
        rows: [{ columns: [{ width: 12, widget: 'chartA' }], dataKey: 'rowOnlyDataset' }],
        visualizations: {
          chartA: { type: 'chart' }
        }
      })
    )

    expect(getGeneratedTables(result)).toHaveLength(0)
    expect(result.rows).toHaveLength(1)
  })

  it('does not create generated tables for Sankey-only datasets, even when tableData exists', () => {
    const result: any = update_4_26_6(
      makeDashboardConfig({
        datasets: {
          datasetA: { data: [{ State: 'CA' }] },
          sankeyDataset: {
            data: [
              {
                links: [{ source: 'A', target: 'B', value: 1 }],
                tableData: [{ label: 'Nested Sankey Row' }]
              }
            ]
          }
        },
        visualizations: {
          chartA: { type: 'chart', dataKey: 'datasetA' },
          sankeyA: { type: 'chart', visualizationType: 'Sankey', dataKey: 'sankeyDataset' }
        }
      })
    )

    expect(getGeneratedTables(result).map(([, table]: [string, any]) => table.dataKey)).toEqual(['datasetA'])
    expect(result.rows.map(row => row.columns?.[0]?.widget)).not.toContain('dashboard-table-sankeyDataset')
  })

  it('still creates a generated table when a Sankey dataset is also used by a non-Sankey visualization', () => {
    const result: any = update_4_26_6(
      makeDashboardConfig({
        datasets: {
          sharedDataset: { data: [{ State: 'CA' }] }
        },
        visualizations: {
          chartA: { type: 'chart', dataKey: 'sharedDataset' },
          sankeyA: { type: 'chart', visualizationType: 'Sankey', dataKey: 'sharedDataset' }
        }
      })
    )

    expect(getGeneratedTables(result).map(([, table]: [string, any]) => table.dataKey)).toEqual(['sharedDataset'])
  })

  it('does not create generated tables when root dashboard table is disabled', () => {
    const result: any = update_4_26_6(makeDashboardConfig({ table: { show: false } }))

    expect(getGeneratedTables(result)).toHaveLength(0)
    expect(result.rows).toHaveLength(1)
  })

  it('preserves existing standalone tables and avoids key collisions', () => {
    const result: any = update_4_26_6(
      makeDashboardConfig({
        visualizations: {
          chartA: { type: 'chart', dataKey: 'datasetA' },
          'dashboard-table-datasetA': {
            type: 'table',
            dataKey: 'datasetA'
          }
        }
      })
    )

    expect(result.visualizations['dashboard-table-datasetA'].migrations).toBeUndefined()
    expect(result.visualizations['dashboard-table-datasetA-1'].migrations.generatedFromDashboardTable).toBe(true)
    expect(getGeneratedTables(result)).toHaveLength(1)
  })

  it('removes non-array visualization data fallbacks when the visualization uses a dashboard dataset', () => {
    const inlineData = [{ State: 'CA', Value: 1 }]
    const result: any = update_4_26_6(
      makeDashboardConfig({
        visualizations: {
          chartA: {
            type: 'chart',
            visualizationType: 'Pie',
            dataKey: 'datasetA',
            data: { showPiePercent: false }
          },
          chartB: {
            type: 'chart',
            dataKey: 'datasetA',
            data: inlineData
          },
          chartC: {
            type: 'chart',
            data: { localConfig: true }
          }
        }
      })
    )

    expect(result.visualizations.chartA.data).toBeUndefined()
    expect(result.visualizations.chartB.data).toEqual(inlineData)
    expect(result.visualizations.chartC.data).toEqual({ localConfig: true })
  })

  it('migrates child dashboards in multi-dashboard configs using root datasets and table settings', () => {
    const result: any = coveUpdateWorker({
      type: 'dashboard',
      version: '4.26.5',
      table: { show: true, expanded: true, download: true, limitHeight: true, height: 420 },
      dashboard: { sharedFilters: [] },
      datasets: {
        sharedDataset: { data: [{ value: 1 }] }
      },
      rows: [],
      visualizations: {},
      multiDashboards: [
        {
          label: 'Unversioned child',
          dashboard: { sharedFilters: [] },
          rows: [{ columns: [{ width: 12, widget: 'chartA' }] }],
          visualizations: {
            chartA: { type: 'chart', dataKey: 'sharedDataset' }
          }
        },
        {
          label: 'Versioned child',
          version: '4.26.5',
          type: 'dashboard',
          dashboard: { sharedFilters: [] },
          rows: [{ columns: [{ width: 12, widget: 'chartB' }] }],
          visualizations: {
            chartB: { type: 'chart', dataKey: 'sharedDataset' }
          }
        }
      ]
    })

    expect(getGeneratedTables(result)).toHaveLength(0)
    expect(result.rows).toHaveLength(0)

    const childGeneratedTables = getGeneratedTables(result.multiDashboards[0])
    const secondChildGeneratedTables = getGeneratedTables(result.multiDashboards[1])

    expect(childGeneratedTables).toHaveLength(1)
    expect((childGeneratedTables[0][1] as any).dataKey).toBe('sharedDataset')
    expect((childGeneratedTables[0][1] as any).table).toMatchObject({
      label: 'sharedDataset',
      expanded: true,
      download: true,
      limitHeight: true,
      height: 420
    })
    expect(result.multiDashboards[0].rows[result.multiDashboards[0].rows.length - 1].dataKey).toBeUndefined()
    expect(
      result.multiDashboards[0].rows.filter(row => row.columns?.some(column => column.widget === childGeneratedTables[0][0]))
    ).toHaveLength(1)
    expect(secondChildGeneratedTables).toHaveLength(1)
    expect((secondChildGeneratedTables[0][1] as any).table).toMatchObject({
      label: 'sharedDataset',
      expanded: true,
      download: true,
      limitHeight: true,
      height: 420
    })
    expect(
      result.multiDashboards[1].rows.filter(row =>
        row.columns?.some(column => column.widget === secondChildGeneratedTables[0][0])
      )
    ).toHaveLength(1)
    expect(result.version).toBe('4.26.6-2')
    expect(result.multiDashboards[0].version).toBe('4.26.6-2')
    expect(result.multiDashboards[1].version).toBe('4.26.6-2')
  })

  it('migrates runtime active multi-dashboard fields without overwriting the active tab', () => {
    const activeDashboardFields = {
      dashboard: { sharedFilters: [{ key: 'active-filter', columnName: 'value', usedBy: ['chartA'] }] },
      rows: [{ columns: [{ width: 12, widget: 'chartA' }] }],
      visualizations: {
        chartA: { type: 'chart', dataKey: 'sharedDataset' }
      }
    }
    const result: any = coveUpdateWorker({
      type: 'dashboard',
      version: '4.26.5',
      activeDashboard: 0,
      label: 'Active child',
      table: { show: true, expanded: true },
      datasets: {
        sharedDataset: { data: [{ value: 1 }] }
      },
      ...activeDashboardFields,
      multiDashboards: [
        {
          label: 'Active child',
          ...activeDashboardFields
        },
        {
          label: 'Inactive child',
          dashboard: { sharedFilters: [{ key: 'inactive-filter', columnName: 'value', usedBy: ['chartB'] }] },
          rows: [{ columns: [{ width: 12, widget: 'chartB' }] }],
          visualizations: {
            chartB: { type: 'chart', dataKey: 'sharedDataset' }
          }
        }
      ]
    })

    const topLevelGeneratedTables = getGeneratedTables(result)
    const activeChildGeneratedTables = getGeneratedTables(result.multiDashboards[0])
    const inactiveChildGeneratedTables = getGeneratedTables(result.multiDashboards[1])
    const [activeTableKey] = topLevelGeneratedTables[0]

    expect(topLevelGeneratedTables).toHaveLength(1)
    expect(activeChildGeneratedTables).toHaveLength(1)
    expect(activeChildGeneratedTables[0][0]).toBe(activeTableKey)
    expect(inactiveChildGeneratedTables).toHaveLength(1)

    expect(result.multiDashboards[0].label).toBe('Active child')
    expect(result.multiDashboards[0].dashboard).toEqual(result.dashboard)
    expect(result.multiDashboards[0].rows).toEqual(result.rows)
    expect(result.multiDashboards[0].visualizations).toEqual(result.visualizations)

    expect(result.rows.filter(row => row.columns?.some(column => column.widget === activeTableKey))).toHaveLength(1)
    expect(
      result.multiDashboards[0].rows.filter(row => row.columns?.some(column => column.widget === activeTableKey))
    ).toHaveLength(1)
    expect(result.dashboard.sharedFilters[0].usedBy).toEqual(['chartA', activeTableKey])
    expect(everyRowWidgetHasVisualization(result)).toBe(true)
    expect(everyRowWidgetHasVisualization(result.multiDashboards[0])).toBe(true)
    expect(everyRowWidgetHasVisualization(result.multiDashboards[1])).toBe(true)
  })

  it('does not overwrite divergent active child dashboard fields', () => {
    const result: any = coveUpdateWorker({
      type: 'dashboard',
      version: '4.26.5',
      activeDashboard: 0,
      table: { show: true, expanded: true },
      dashboard: { sharedFilters: [{ key: 'root-filter', columnName: 'value', usedBy: ['rootChart'] }] },
      datasets: {
        sharedDataset: { data: [{ value: 1 }] }
      },
      rows: [{ columns: [{ width: 12, widget: 'rootChart' }] }],
      visualizations: {
        rootChart: { type: 'chart', dataKey: 'sharedDataset' }
      },
      multiDashboards: [
        {
          label: 'Active child',
          dashboard: { sharedFilters: [{ key: 'child-filter', columnName: 'value', usedBy: ['childChart'] }] },
          rows: [{ columns: [{ width: 12, widget: 'childChart' }] }],
          visualizations: {
            childChart: { type: 'chart', dataKey: 'sharedDataset' }
          }
        }
      ]
    })

    const childGeneratedTables = getGeneratedTables(result.multiDashboards[0])
    const [childTableKey] = childGeneratedTables[0]

    expect(getGeneratedTables(result)).toHaveLength(0)
    expect(childGeneratedTables).toHaveLength(1)
    expect(result.dashboard.sharedFilters[0]).toMatchObject({ key: 'root-filter', usedBy: ['rootChart'] })
    expect(result.multiDashboards[0].dashboard.sharedFilters[0]).toMatchObject({
      key: 'child-filter',
      usedBy: ['childChart', childTableKey]
    })
    expect(result.multiDashboards[0].rows[1].columns[0].widget).toBe('childChart')
    expect(result.multiDashboards[0].visualizations.childChart).toBeDefined()
    expect(result.multiDashboards[0].visualizations.rootChart).toBeUndefined()
  })

  it('leaves unscoped filters unchanged because they already apply globally', () => {
    const config = makeDashboardConfig({
      dashboard: {
        sharedFilters: [
          { key: 'missing-usedBy', columnName: 'State' },
          { key: 'empty-usedBy', columnName: 'State', usedBy: [] }
        ]
      }
    })

    const result: any = update_4_26_6(config)

    expect(result.dashboard.sharedFilters[0].usedBy).toBeUndefined()
    expect(result.dashboard.sharedFilters[1].usedBy).toEqual([])
  })

  it('adds generated table widgets to scoped filters that target visualizations using the same dataset', () => {
    const result: any = update_4_26_6(
      makeDashboardConfig({
        dashboard: {
          sharedFilters: [
            { key: 'scoped', columnName: 'State', usedBy: ['chartA'] },
            { key: 'other', columnName: 'State', usedBy: ['chartB'] }
          ]
        },
        visualizations: {
          chartA: { type: 'chart', dataKey: 'datasetA' },
          chartB: { type: 'chart', dataKey: 'datasetB' }
        },
        datasets: {
          datasetA: { data: [{ State: 'CA' }] },
          datasetB: { data: [{ State: 'TX' }] }
        }
      })
    )
    const datasetATableKey = getGeneratedTables(result).find(
      ([, table]: [string, any]) => table.dataKey === 'datasetA'
    )[0]

    expect(result.dashboard.sharedFilters[0].usedBy).toEqual(['chartA', datasetATableKey])
    expect(result.dashboard.sharedFilters[1].usedBy).not.toContain(datasetATableKey)
  })

  it('only adds generated table widgets to scoped filters that target every placed visualization using the dataset', () => {
    const result: any = update_4_26_6(
      makeDashboardConfig({
        dashboard: {
          sharedFilters: [
            { key: 'partial', columnName: 'Year', usedBy: ['mapA'] },
            { key: 'complete', columnName: 'Year', usedBy: ['chartA', 'mapA', 'condition-id'] }
          ]
        },
        rows: [
          { columns: [{ width: 12, widget: 'chartA' }] },
          { columns: [{ width: 12, widget: 'mapA' }] }
        ],
        visualizations: {
          chartA: { type: 'chart', dataKey: 'datasetA' },
          mapA: { type: 'map', dataKey: 'datasetA' }
        }
      })
    )
    const tableKey = getGeneratedTables(result)[0][0]

    expect(result.dashboard.sharedFilters[0].usedBy).toEqual(['mapA'])
    expect(result.dashboard.sharedFilters[1].usedBy).toEqual(['chartA', 'mapA', 'condition-id', tableKey])
  })

  it('does not add generated table widgets to row-scoped filters', () => {
    const result: any = update_4_26_6(
      makeDashboardConfig({
        dashboard: {
          sharedFilters: [
            { key: 'row-scoped', columnName: 'State', usedBy: [0] },
            { key: 'viz-scoped', columnName: 'State', usedBy: ['chartA'] }
          ]
        },
        rows: [
          { columns: [{ width: 12, widget: 'chartA' }], dataKey: 'datasetA' }
        ],
        visualizations: {
          chartA: { type: 'chart', dataKey: 'datasetA' }
        }
      })
    )
    const tableKey = getGeneratedTables(result)[0][0]

    expect(result.dashboard.sharedFilters[0].usedBy).not.toContain(tableKey)
    expect(result.dashboard.sharedFilters[1].usedBy).toEqual(['chartA', tableKey])
  })

  it('does not duplicate generated table targets when a filter already includes the generated key', () => {
    const result: any = update_4_26_6(
      makeDashboardConfig({
        dashboard: {
          sharedFilters: [{ key: 'scoped', columnName: 'State', usedBy: ['chartA', 'dashboard-table-datasetA'] }]
        }
      })
    )

    expect(result.dashboard.sharedFilters[0].usedBy).toEqual(['chartA', 'dashboard-table-datasetA'])
  })

  it('moves dashboard image and PDF download settings into dashboard.downloads while keeping legacy table config', () => {
    const result: any = update_4_26_6(
      makeDashboardConfig({
        table: {
          show: true,
          downloadImageButton: true,
          downloadImageButtonStyle: 'link',
          downloadImageLabel: 'Save image',
          downloadPdfButton: true,
          includeContextInDownload: true
        }
      })
    )

    expect(result.dashboard.downloads).toEqual({
      downloadImageButton: true,
      downloadImageButtonStyle: 'link',
      downloadImageLabel: 'Save image',
      downloadPdfButton: true,
      includeContextInDownload: true
    })
    expect(result.table.downloadImageButton).toBe(true)
  })
})
