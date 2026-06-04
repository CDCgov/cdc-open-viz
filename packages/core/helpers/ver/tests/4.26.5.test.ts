import update_4_26_5, { applyLegacyDashboardComponentStyleDefaults } from '../4.26.5'
import { coveUpdateWorker } from '../../coveUpdateWorker'
import { processMarkupVariables } from '../../markupProcessor'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

describe('update_4_26_5', () => {
  beforeEach(() => {
    vi.spyOn(console, 'info').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('backfills side placement for legacy chart configs', () => {
    const config: any = {
      type: 'chart',
      version: '4.26.4',
      yAxis: {
        label: 'Y Axis'
      }
    }

    const result = update_4_26_5(config)

    expect(result.yAxis.titlePlacement).toBe('side')
    expect(result.version).toBe('4.26.5')
    expect(config.yAxis.titlePlacement).toBeUndefined()
  })

  it('preserves existing title placement', () => {
    const config: any = {
      type: 'chart',
      version: '4.26.4',
      yAxis: {
        titlePlacement: 'top'
      }
    }

    const result = update_4_26_5(config)

    expect(result.yAxis.titlePlacement).toBe('top')
  })

  it('does not modify inlineLabel while backfilling title placement', () => {
    const config: any = {
      type: 'chart',
      version: '4.26.4',
      yAxis: {
        inlineLabel: ' cases'
      }
    }

    const result = update_4_26_5(config)

    expect(result.yAxis.titlePlacement).toBe('side')
    expect(result.yAxis.inlineLabel).toBe(' cases')
  })

  it('backfills title placement for dashboard visualizations', () => {
    const config: any = {
      type: 'dashboard',
      version: '4.26.4',
      visualizations: {
        chart1: {
          type: 'chart',
          yAxis: {}
        },
        chart2: {
          type: 'chart',
          yAxis: {
            titlePlacement: 'top'
          }
        }
      }
    }

    const result = update_4_26_5(config)

    expect(result.visualizations.chart1.yAxis.titlePlacement).toBe('side')
    expect(result.visualizations.chart2.yAxis.titlePlacement).toBe('top')
  })

  it('fills missing legacy style fields for standalone data-bite and waffle-chart configs', () => {
    const dataBiteConfig: any = { type: 'data-bite', title: 'Legacy data bite' }
    const waffleConfig: any = { type: 'waffle-chart', title: 'Legacy waffle' }

    applyLegacyDashboardComponentStyleDefaults(dataBiteConfig)
    applyLegacyDashboardComponentStyleDefaults(waffleConfig)

    expect(dataBiteConfig.biteStyle).toBe('graphic')
    expect(waffleConfig.visualizationType).toBe('Waffle')
  })

  it('applies legacy style defaults to dashboard visualizations', () => {
    const config: any = {
      type: 'dashboard',
      version: '4.26.4',
      visualizations: {
        bite1: { type: 'data-bite', title: 'Legacy bite' },
        waffle1: { type: 'waffle-chart', title: 'Legacy waffle' }
      }
    }

    const result = update_4_26_5(config)

    expect(result.visualizations.bite1.biteStyle).toBe('graphic')
    expect(result.visualizations.waffle1.visualizationType).toBe('Waffle')
    expect(result.version).toBe('4.26.5')
  })

  it('does not overwrite explicit data-bite or waffle-chart styles', () => {
    const config: any = {
      type: 'dashboard',
      version: '4.26.4',
      visualizations: {
        bite1: { type: 'data-bite', biteStyle: 'tp5' },
        waffle1: { type: 'waffle-chart', visualizationType: 'TP5 Gauge' }
      }
    }

    const result = update_4_26_5(config)

    expect(result.visualizations.bite1.biteStyle).toBe('tp5')
    expect(result.visualizations.waffle1.visualizationType).toBe('TP5 Gauge')
  })

  it('preserves legacy red fallback colors for chart regions with missing colors', () => {
    const config: any = {
      type: 'chart',
      version: '4.26.4',
      regions: [
        { label: 'Missing both', from: '2024-01-01', to: '2024-01-08' },
        { label: 'Missing text', from: '2024-01-01', to: '2024-01-08', background: '#f2f2f2' },
        { label: 'Missing background', from: '2024-01-01', to: '2024-01-08', color: '#1c1d1f' },
        { label: 'Explicit colors', from: '2024-01-01', to: '2024-01-08', color: '#111111', background: '#eeeeee' }
      ]
    }

    const result = update_4_26_5(config)

    expect(result.regions).toEqual([
      { label: 'Missing both', from: '2024-01-01', to: '2024-01-08', color: 'red', background: 'red' },
      { label: 'Missing text', from: '2024-01-01', to: '2024-01-08', color: 'red', background: '#f2f2f2' },
      { label: 'Missing background', from: '2024-01-01', to: '2024-01-08', color: '#1c1d1f', background: 'red' },
      {
        label: 'Explicit colors',
        from: '2024-01-01',
        to: '2024-01-08',
        color: '#111111',
        background: '#eeeeee'
      }
    ])
    expect(config.regions[0].color).toBeUndefined()
  })

  it('preserves legacy red fallback colors for chart regions inside dashboard visualizations', () => {
    const config: any = {
      type: 'dashboard',
      version: '4.26.4',
      visualizations: {
        chart1: {
          type: 'chart',
          regions: [{ label: 'Dashboard chart region', from: 'A', to: 'B' }]
        }
      }
    }

    const result = update_4_26_5(config)

    expect(result.visualizations.chart1.regions[0]).toMatchObject({
      color: 'red',
      background: 'red'
    })
  })

  it('does not write legacy red region colors for configs already migrated to 4.26.5', () => {
    const config: any = {
      type: 'chart',
      version: '4.26.5',
      regions: [{ label: 'New default region', from: 'A', to: 'B' }]
    }

    const result = coveUpdateWorker(config)

    expect(result.regions[0].color).toBeUndefined()
    expect(result.regions[0].background).toBeUndefined()
  })

  it('migrates a basic filtered-text config into markup-include', () => {
    const config: any = {
      type: 'filtered-text',
      version: '4.26.4',
      uid: 'filtered-text-1',
      title: 'Featured text',
      textColumn: 'Message',
      theme: 'theme-blue',
      data: [{ Message: 'Hello from filtered text' }],
      visual: {
        border: true,
        accent: false,
        background: true,
        hideBackgroundColor: false,
        borderColorTheme: false
      }
    }

    const result = update_4_26_5(config)

    expect(result.type).toBe('markup-include')
    expect(result.visualizationType).toBe('markup-include')
    expect(result.contentEditor.title).toBe('Featured text')
    expect(result.contentEditor.inlineHTML).toBe('{{message}}')
    expect(result.contentEditor.useInlineHTML).toBe(true)
    expect(result.markupVariables).toEqual([
      {
        sourceType: 'column',
        outputType: 'value',
        columnName: 'Message',
        conditions: [],
        name: 'Message',
        tag: '{{message}}',
        selectionMode: 'first'
      }
    ])
    expect(result.enableMarkupVariables).toBe(true)
    expect(result.data).toEqual(config.data)
    expect(result.theme).toBe('theme-blue')
    expect(result.visual).toEqual(config.visual)
    expect(result.title).toBeUndefined()
    expect(result.textColumn).toBeUndefined()
    expect(result.filters).toEqual([])
    expect(console.info).toHaveBeenCalledWith(
      '[COVE migration 4.26.5] Migrating filtered-text config to markup-include (uid: filtered-text-1) using textColumn "Message".'
    )
  })

  it('converts one or more local filtered-text filters into markup variable conditions', () => {
    const config: any = {
      type: 'filtered-text',
      textColumn: 'Message',
      filters: [
        { columnName: 'State', columnValue: 'CA' },
        { columnName: 'Year', columnValue: 2024 }
      ],
      data: [{ State: 'CA', Year: 2024, Message: 'Combined match' }]
    }

    const result = update_4_26_5(config)

    expect(result.markupVariables[0].conditions).toEqual([
      { columnName: 'State', isOrIsNotEqualTo: 'is', value: 'CA' },
      { columnName: 'Year', isOrIsNotEqualTo: 'is', value: '2024' }
    ])
    expect(result.filters).toEqual([])
  })

  it('preserves dashboard dataKey and shared-filter behavior while migrating child visualizations', () => {
    const config: any = {
      type: 'dashboard',
      version: '4.26.4',
      dashboard: {
        sharedFilters: [{ columnName: 'State', active: 'CA', values: ['CA', 'TX'] }]
      },
      rows: [{ columns: [{ width: 12, widget: 'filtered1' }], dataKey: 'dashboard-data' }],
      visualizations: {
        filtered1: {
          type: 'filtered-text',
          uid: 'filtered1',
          dataKey: 'dashboard-data',
          dataDescription: { horizontal: false, series: false },
          textColumn: 'Message'
        }
      }
    }

    const result = coveUpdateWorker(config)
    const migrated = result.visualizations.filtered1

    expect(migrated.type).toBe('markup-include')
    expect(migrated.dataKey).toBe('dashboard-data')
    expect(migrated.dataDescription).toEqual({ horizontal: false, series: false })
    expect(result.dashboard.sharedFilters).toEqual(config.dashboard.sharedFilters)
    expect(migrated.markupVariables[0]).toMatchObject({
      columnName: 'Message',
      selectionMode: 'first'
    })
  })

  it('uses combined condition matching instead of the old filtered-text last-filter loop behavior', () => {
    const config: any = {
      type: 'filtered-text',
      textColumn: 'Message',
      filters: [
        { columnName: 'State', columnValue: 'CA' },
        { columnName: 'Year', columnValue: '2024' }
      ],
      data: [
        { State: 'TX', Year: '2024', Message: 'wrong state' },
        { State: 'CA', Year: '2023', Message: 'wrong year' },
        { State: 'CA', Year: '2024', Message: 'correct row' }
      ]
    }

    const result = update_4_26_5(config)
    const processed = processMarkupVariables(result.contentEditor.inlineHTML, result.data, result.markupVariables, {
      locale: 'en-US'
    })

    expect(processed.processedContent).toBe('correct row')
  })

  it('migrates conservatively with a clear message when textColumn is missing', () => {
    const result = update_4_26_5({
      type: 'filtered-text',
      title: 'Broken legacy config',
      data: [{ Message: 'Do not guess' }]
    } as any)

    expect(result.type).toBe('markup-include')
    expect(result.markupVariables).toEqual([])
    expect(result.enableMarkupVariables).toBe(true)
    expect(result.contentEditor.inlineHTML).toContain('textColumn is missing or unavailable')
  })

  it('ignores the old migration skip flag and still migrates filtered-text configs', () => {
    const result = update_4_26_5({
      type: 'filtered-text',
      textColumn: 'Message',
      __skipFilteredTextMigration: true
    } as any)

    expect(result.type).toBe('markup-include')
    expect(result.textColumn).toBeUndefined()
    expect(result.markupVariables[0]).toMatchObject({
      columnName: 'Message',
      selectionMode: 'first'
    })
  })
})
