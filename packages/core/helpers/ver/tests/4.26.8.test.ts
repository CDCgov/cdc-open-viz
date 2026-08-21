import update_4_26_8 from '../4.26.8'
import { coveUpdateWorker } from '../../coveUpdateWorker'
import { describe, expect, it } from 'vitest'

describe('update_4_26_8', () => {
  it('backfills missing chart right title placement to side', () => {
    const config: any = {
      type: 'chart',
      version: '4.26.7',
      yAxis: {
        rightLabel: 'Rate'
      }
    }

    const result = update_4_26_8(config)

    expect(result.yAxis.rightTitlePlacement).toBe('side')
    expect(result.version).toBe('4.26.8')
    expect(config.yAxis.rightTitlePlacement).toBeUndefined()
  })

  it('preserves authored right title placement', () => {
    const result = update_4_26_8({
      type: 'chart',
      version: '4.26.7',
      yAxis: {
        rightLabel: 'Rate',
        rightTitlePlacement: 'top'
      }
    } as any)

    expect(result.yAxis.rightTitlePlacement).toBe('top')
  })

  it('backfills the historical label placement for horizontal bar charts', () => {
    const result = update_4_26_8({
      type: 'chart',
      version: '4.26.7',
      visualizationType: 'Bar',
      orientation: 'horizontal',
      yAxis: {}
    } as any)

    expect(result.yAxis.labelPlacement).toBe('Below Bar')
  })

  it('recognizes the legacy horizontal visualization subtype when backfilling label placement', () => {
    const result = update_4_26_8({
      type: 'chart',
      version: '4.26.7',
      visualizationType: 'Bar',
      visualizationSubType: 'horizontal',
      yAxis: {}
    } as any)

    expect(result.yAxis.labelPlacement).toBe('Below Bar')
  })

  it('preserves an authored horizontal bar label placement', () => {
    const result = update_4_26_8({
      type: 'chart',
      version: '4.26.7',
      visualizationType: 'Bar',
      orientation: 'horizontal',
      yAxis: { labelPlacement: 'On Date/Category Axis' }
    } as any)

    expect(result.yAxis.labelPlacement).toBe('On Date/Category Axis')
  })

  it('does not apply the historical label placement to a new horizontal bar chart', () => {
    const result = update_4_26_8({
      type: 'chart',
      newViz: true,
      visualizationType: 'Bar',
      orientation: 'horizontal',
      yAxis: {}
    } as any)

    expect(result.yAxis.labelPlacement).toBeUndefined()
  })

  it('merges nested chart axes with nested values taking precedence', () => {
    const config: any = {
      type: 'chart',
      version: '4.26.7',
      yAxis: {
        label: 'Outer Y',
        gridLines: true,
        titlePlacement: 'side',
        displayNumbersOnBar: true,
        labelPlacement: 'Below Bar',
        yAxis: {
          label: 'Nested Y',
          gridLines: false
        }
      },
      xAxis: {
        label: 'Outer X',
        hideAxis: false,
        hideTicks: true,
        xAxis: {
          label: 'Nested X',
          hideAxis: true
        }
      }
    }

    const result = update_4_26_8(config)

    expect(result.yAxis).toEqual({
      label: 'Nested Y',
      gridLines: false,
      titlePlacement: 'side',
      displayNumbersOnBar: true,
      labelPlacement: 'Below Bar',
      rightTitlePlacement: 'side'
    })
    expect(result.xAxis).toEqual({
      label: 'Nested X',
      hideAxis: true,
      hideTicks: true
    })
    expect(config.yAxis.label).toBe('Outer Y')
    expect(config.yAxis.yAxis.label).toBe('Nested Y')
    expect(config.xAxis.label).toBe('Outer X')
    expect(config.xAxis.xAxis.label).toBe('Nested X')
  })

  it('preserves legacy side title placement when promoting a nested vertical axis', () => {
    const result = coveUpdateWorker({
      type: 'chart',
      version: '4.26.4',
      visualizationType: 'Bar',
      orientation: 'vertical',
      yAxis: {
        displayNumbersOnBar: true,
        labelPlacement: 'Below Bar',
        yAxis: {
          label: 'Nested Y Axis Label'
        }
      },
      xAxis: {}
    } as any)

    expect(result.yAxis).toMatchObject({
      label: 'Nested Y Axis Label',
      titlePlacement: 'side',
      displayNumbersOnBar: true,
      labelPlacement: 'Below Bar'
    })
    expect(result.yAxis.yAxis).toBeUndefined()
  })

  it.each([null, 'invalid', []])('leaves a malformed nested axis unchanged: %j', nestedYAxis => {
    const result = update_4_26_8({
      type: 'chart',
      version: '4.26.7',
      yAxis: {
        label: 'Outer Y',
        yAxis: nestedYAxis
      }
    } as any)

    expect(result.yAxis.label).toBe('Outer Y')
    expect(result.yAxis.yAxis).toEqual(nestedYAxis)
  })

  it('treats an empty nested axis as valid and retains the outer axis values', () => {
    const result = update_4_26_8({
      type: 'chart',
      version: '4.26.7',
      yAxis: {
        label: 'Outer Y',
        yAxis: {}
      }
    } as any)

    expect(result.yAxis.label).toBe('Outer Y')
    expect(result.yAxis.yAxis).toBeUndefined()
  })

  it('updates dashboard chart visualizations recursively through coveUpdateWorker', () => {
    const result = coveUpdateWorker({
      type: 'dashboard',
      version: '4.26.7',
      rows: [],
      visualizations: {
        chartA: {
          type: 'chart',
          yAxis: {
            rightLabel: 'Rate'
          }
        }
      }
    } as any)

    expect(result.visualizations.chartA.yAxis.rightTitlePlacement).toBe('side')
  })

  it('migrates standard and nested dashboard column orders without changing persisted state', () => {
    const standard = {
      order: 'column',
      values: ['March', 'January'],
      orderedValues: ['January', 'March'],
      defaultValue: 'January',
      active: 'March',
      unrelated: true
    }
    const nested = {
      filterStyle: 'nested-dropdown',
      order: 'column',
      values: ['2025', '2026'],
      orderedValues: ['2026', '2025'],
      subGrouping: {
        order: 'column',
        valuesLookup: { '2026': { values: ['March', 'January'], orderedValues: ['January', 'March'] } }
      }
    }

    const result = update_4_26_8({
      type: 'dashboard',
      version: '4.26.7',
      dashboard: { sharedFilters: [standard, nested] },
      visualizations: {
        chartA: { type: 'chart', filters: [{ order: 'column', orderColumn: 'sort' }] },
        mapA: { type: 'map', filters: [{ order: 'column', orderColumn: 'sort' }] }
      }
    } as any)

    expect(result.dashboard.sharedFilters[0]).toEqual({ ...standard, order: 'data' })
    expect(result.dashboard.sharedFilters[1]).toEqual({
      ...nested,
      order: 'cust',
      subGrouping: { ...nested.subGrouping, order: 'cust' }
    })
    expect(result.visualizations.chartA.filters[0]).toEqual({ order: 'column', orderColumn: 'sort' })
    expect(result.visualizations.mapA.filters[0]).toEqual({ order: 'column', orderColumn: 'sort' })
  })

  it('migrates shared filters through multi-dashboard traversal and is idempotent', () => {
    const config = {
      type: 'dashboard',
      version: '4.26.7',
      visualizations: {},
      rows: [],
      multiDashboards: [
        {
          rows: [],
          dashboard: {
            sharedFilters: [{ order: 'column', values: ['March'], orderedValues: ['March'] }]
          },
          visualizations: {}
        },
        {
          rows: [],
          dashboard: {
            sharedFilters: [
              {
                filterStyle: 'nested-dropdown',
                order: 'column',
                values: ['2026'],
                subGrouping: { order: 'column', valuesLookup: {} }
              }
            ]
          },
          visualizations: {}
        }
      ]
    }

    const once = coveUpdateWorker(config as any)
    const twice = update_4_26_8(once as any)

    expect(once.multiDashboards[0].dashboard.sharedFilters[0].order).toBe('data')
    expect(once.multiDashboards[0].dashboard.sharedFilters[0].values).toEqual(['March'])
    expect(once.multiDashboards[1].dashboard.sharedFilters[0].order).toBe('cust')
    expect(once.multiDashboards[1].dashboard.sharedFilters[0].subGrouping.order).toBe('cust')
    expect(twice).toEqual({ ...once, version: '4.26.8' })
  })

  it('backfills horizontal bar label placement in nested dashboard visualizations', () => {
    const result = coveUpdateWorker({
      type: 'dashboard',
      version: '4.26.7',
      rows: [],
      visualizations: {
        dashboardA: {
          type: 'dashboard',
          visualizations: {
            chartA: {
              type: 'chart',
              visualizationType: 'Bar',
              visualizationSubType: 'horizontal',
              yAxis: {}
            }
          }
        }
      }
    } as any)

    expect(result.visualizations.dashboardA.visualizations.chartA.yAxis.labelPlacement).toBe('Below Bar')
  })

  it('promotes nested axes in dashboard chart visualizations through coveUpdateWorker', () => {
    const result = coveUpdateWorker({
      type: 'dashboard',
      version: '4.26.7',
      rows: [],
      visualizations: {
        chartA: {
          type: 'chart',
          yAxis: {
            label: 'Outer Value Axis',
            gridLines: true,
            titlePlacement: 'side',
            displayNumbersOnBar: true,
            yAxis: {
              label: 'Nested Value Axis',
              gridLines: false
            }
          },
          xAxis: {
            label: 'Outer Category Axis',
            xAxis: {
              label: 'Nested Category Axis'
            }
          }
        }
      }
    } as any)

    expect(result.visualizations.chartA.yAxis).toEqual({
      label: 'Nested Value Axis',
      gridLines: false,
      titlePlacement: 'side',
      displayNumbersOnBar: true,
      rightTitlePlacement: 'side'
    })
    expect(result.visualizations.chartA.xAxis).toEqual({
      label: 'Nested Category Axis'
    })
  })
})
