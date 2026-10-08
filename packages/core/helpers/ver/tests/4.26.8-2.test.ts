import { describe, expect, it } from 'vitest'
import { coveUpdateWorker } from '../../coveUpdateWorker'
import { applyConfigDefaults } from '../../applyConfigDefaults'
import chartDefaults from '../../../../chart/src/data/initial-state'
import mapDefaults from '../../../../map/src/data/initial-state'
import runMigration from '../4.26.8-2'

const update = (config: Record<string, any>, sourceVersion = config.version) =>
  runMigration(config, {
    startingConfig: sourceVersion === config.version ? config : { ...config, version: sourceVersion },
    isMultiDashboardChild: false
  })

const chart = (overrides: Record<string, any> = {}) => ({
  type: 'chart',
  visualizationType: 'Bar',
  version: '4.26.8-1',
  ...overrides
})

describe('4.26.8-2', () => {
  it('materializes legacy chart values only in existing sections and preserves explicit values', () => {
    const result = update(
      chart({
        general: {},
        yAxis: { hideAxis: true },
        xAxis: {},
        table: { expanded: false },
        legend: {},
        dataFormat: { commas: true },
        tooltips: {},
        visual: { border: null },
        series: [
          { dataKey: 'value', tooltip: false },
          { dataKey: 'other', axis: 'Right' }
        ]
      }),
      '4.26.8-1'
    )

    expect(result.general.useIntelligentLineChartLabels).toBe(false)
    expect(result.yAxis).toMatchObject({ hideAxis: true, hideTicks: false, gridLines: false, numTicks: '' })
    expect(result.xAxis).toEqual({ numTicks: '', dateDisplayFormat: '', viewportNumTicks: null })
    expect(result.table).toMatchObject({ expanded: false, dateDisplayFormat: '', showVertical: false, show: true })
    expect(result.legend.position).toBe('right')
    expect(result.dataFormat.commas).toBe(true)
    expect(result.tooltips.dateDisplayFormat).toBe('')
    expect(result.visual).toMatchObject({ border: null, accent: false, background: false })
    expect(result.series).toEqual([
      { dataKey: 'value', tooltip: false, axis: 'Left' },
      { dataKey: 'other', axis: 'Right', tooltip: true }
    ])
  })

  it('leaves wholly absent chart sections for current defaults', () => {
    const result = update(chart(), '4.26.8-1')
    expect(result).not.toHaveProperty('table')
    expect(result).not.toHaveProperty('yAxis')
    expect(result).not.toHaveProperty('legend')
  })

  it('materializes renderer-equivalent values for legacy omissions before recursive hydration', () => {
    const partial = coveUpdateWorker(
      chart({
        xAxis: { dataKey: 'date' },
        table: {},
        general: {}
      })
    )
    const partialEffective = applyConfigDefaults(partial, chartDefaults)

    expect(partialEffective.general.useIntelligentLineChartLabels).toBe(false)
    expect(partialEffective.xAxis.dateDisplayFormat).toBe('')
    expect(partialEffective.xAxis.viewportNumTicks).toBeNull()
    expect(partialEffective.table.showVertical).toBe(false)

    const absentEffective = applyConfigDefaults(coveUpdateWorker(chart()), chartDefaults)
    expect(absentEffective.xAxis.dateDisplayFormat).toBe(chartDefaults.xAxis.dateDisplayFormat)
    expect(absentEffective.xAxis.viewportNumTicks).toEqual(chartDefaults.xAxis.viewportNumTicks)
    expect(absentEffective.table.showVertical).toBe(chartDefaults.table.showVertical)
  })

  it('preserves the historical empty Box Plot count label in a partial nested labels object', () => {
    const result = update(chart({ boxplot: { labels: { median: 'Median' } } }), '4.26.8-1')

    expect(result.boxplot.labels).toEqual({ median: 'Median', count: '' })
  })

  it('does not treat an axis synthesized by an earlier migration as authored', () => {
    const migrated = coveUpdateWorker({
      type: 'chart',
      version: '4.25.4-1',
      visualizationType: 'Line',
      dataFormat: { suffix: '%', onlyShowTopPrefixSuffix: true }
    })

    expect(migrated.yAxis).toEqual({ inlineLabel: '%' })

    const effective = applyConfigDefaults(migrated, chartDefaults)
    expect(effective.yAxis).toEqual({ ...chartDefaults.yAxis, inlineLabel: '%' })
  })

  it.each([
    [{ type: undefined }, { type: 'date', dateParseFormat: '%Y-%m-%d', dateDisplayFormat: '%Y-%m-%d' }],
    [
      { type: 'categorical', dateParseFormat: '', dateDisplayFormat: null },
      { type: 'date', dateParseFormat: '%Y-%m-%d', dateDisplayFormat: '%Y-%m-%d' }
    ],
    [
      { type: 'linear', dateParseFormat: '', dateDisplayFormat: '' },
      { type: 'linear', dateParseFormat: '', dateDisplayFormat: '' }
    ]
  ])('applies the Forecasting axis contract for %o', (xAxis, expected) => {
    const result = update(chart({ visualizationType: 'Forecasting', xAxis }), '4.26.8-1')
    expect(result.xAxis).toMatchObject(expected)
  })

  it('applies HeatMap contracts while preserving absent-section title placement behavior', () => {
    const falsey = update(
      chart({
        visualizationType: 'HeatMap',
        yAxis: { titlePlacement: '' },
        legend: { position: '', style: null, subStyle: 'smooth' }
      }),
      '4.26.8-1'
    )
    expect(falsey.yAxis).toMatchObject({ type: 'categorical', titlePlacement: 'side' })
    expect(falsey.legend).toMatchObject({ position: 'top', style: 'gradient', subStyle: 'linear blocks' })

    const absent = update(chart({ visualizationType: 'HeatMap' }), '4.26.8-1')
    expect(absent.yAxis).toEqual({ type: 'categorical' })
    expect(absent).not.toHaveProperty('legend')

    const empty = update(chart({ visualizationType: 'HeatMap', legend: {} }), '4.26.8-1')
    expect(empty.legend).toEqual({ position: 'right', style: 'circles', subStyle: 'linear blocks' })

    const authored = update(
      chart({ visualizationType: 'HeatMap', legend: { position: 'bottom', style: 'boxes', subStyle: 'linear blocks' } }),
      '4.26.8-1'
    )
    expect(authored.legend).toEqual({ position: 'bottom', style: 'boxes', subStyle: 'linear blocks' })
  })

  it.each([
    ['Forecasting', { xAxis: { type: 'date', dateParseFormat: '%Y-%m-%d', dateDisplayFormat: '%Y-%m-%d' } }],
    ['HeatMap', { yAxis: { type: 'categorical' } }],
    [
      'Horizon Chart',
      {
        horizon: { numLayers: 4, mode: 'offset', bandGap: 15, bottomPadding: 15 },
        xAxis: { type: 'categorical' },
        general: { paletteColorCount: 4 }
      }
    ],
    ['Box Plot', { yAxis: { labelPlacement: 'On Date/Category Axis' } }],
    ['Bump Chart', { xAxis: { type: 'date-time' } }]
  ])('creates sections required by the %s stable contract', (visualizationType, expected) => {
    expect(update(chart({ visualizationType }), '4.26.8-1')).toMatchObject(expected)
  })

  it('fills Horizon fields without replacing explicit values and raises palette count', () => {
    const result = update(
      chart({
        visualizationType: 'Horizon Chart',
        horizon: { numLayers: 6, mode: null, bandGap: 0 },
        xAxis: { type: '' },
        general: { paletteColorCount: 2 }
      }),
      '4.26.8-1'
    )
    expect(result.horizon).toEqual({ numLayers: 6, mode: null, bandGap: 0, bottomPadding: 15 })
    expect(result.xAxis.type).toBe('categorical')
    expect(result.general.paletteColorCount).toBe(6)
  })

  it.each([
    ['Box Plot', { yAxis: { labelPlacement: 'On Date/Category Axis' } }],
    ['Paired Bar', { orientation: 'horizontal' }],
    ['Deviation Bar', { orientation: 'horizontal' }],
    ['Bump Chart', { xAxis: { type: 'date-time' } }]
  ])('forces the %s stable contract', (visualizationType, expected) => {
    const result = update(chart({ visualizationType, orientation: 'vertical', xAxis: {}, yAxis: {} }), '4.26.8-1')
    expect(result).toMatchObject(expected)
    expect(result).not.toHaveProperty('boxplot.plots')
    expect(result).not.toHaveProperty('boxplot.categories')
  })

  it('applies date sorting when the chart has a date axis and data key', () => {
    const result = update(chart({ xAxis: { type: 'date', dataKey: 'date' }, table: {} }), '4.26.8-1')
    expect(result.table.defaultSort).toEqual({ column: 'date', sortDirection: 'desc' })
  })

  it('applies date sorting after a Bump Chart axis is migrated to date-time', () => {
    const result = update(
      chart({ visualizationType: 'Bump Chart', xAxis: { type: 'categorical', dataKey: 'date' }, table: {} }),
      '4.26.8-1'
    )
    expect(result.xAxis.type).toBe('date-time')
    expect(result.table.defaultSort).toEqual({ column: 'date', sortDirection: 'desc' })
  })

  it('materializes map legacy values only for existing sections', () => {
    const result = update({ type: 'map', general: {}, legend: { position: 'bottom' } }, '4.26.8-1')
    expect(result.general.equalNumberOptIn).toBe(false)
    expect(result.legend).toMatchObject({
      position: 'bottom',
      style: 'circles',
      numberOfItems: 3,
      hideBorder: false,
      showSpecialClassesLast: false
    })
  })

  it('freezes partial-section map behavior before recursive current-default hydration', () => {
    const partial = coveUpdateWorker({
      type: 'map',
      version: '4.26.8-1',
      general: {},
      legend: {}
    })
    const partialEffective = applyConfigDefaults(partial, mapDefaults)

    expect(partialEffective.general.equalNumberOptIn).toBe(false)
    expect(partialEffective.legend).toMatchObject({
      style: 'circles',
      position: 'side',
      numberOfItems: 3,
      hideBorder: false,
      showSpecialClassesLast: false
    })

    const absentEffective = applyConfigDefaults(coveUpdateWorker({ type: 'map', version: '4.26.8-1' }), mapDefaults)
    expect(absentEffective.general.equalNumberOptIn).toBe(mapDefaults.general.equalNumberOptIn)
    expect(absentEffective.legend.style).toBe(mapDefaults.legend.style)
    expect(absentEffective.legend.position).toBe(mapDefaults.legend.position)
    expect(absentEffective.legend.numberOfItems).toBe(mapDefaults.legend.numberOfItems)
    expect(absentEffective.legend.hideBorder).toBe(mapDefaults.legend.hideBorder)
    expect(absentEffective.legend.showSpecialClassesLast).toBe(mapDefaults.legend.showSpecialClassesLast)
  })

  it('materializes the bubble layer that the old array merge retained for legacy empty layers', () => {
    const result = coveUpdateWorker({
      type: 'map',
      version: '4.26.8-1',
      bubble: { dataKey: 'count', layers: [] }
    })

    expect(result.bubble).toEqual({
      dataKey: 'count',
      layers: [
        {
          label: '',
          locationSource: 'data-column',
          minBubbleSize: 12,
          maxBubbleSize: 20,
          extraBubbleBorder: true,
          showBubbleZeros: false,
          legend: { show: true, size: { show: true } },
          columns: {
            geo: { name: '' },
            latitude: { name: '' },
            longitude: { name: '' },
            primary: { name: '' }
          }
        }
      ]
    })
  })

  it('preserves authored bubble layers and allows current configs to remain layerless', () => {
    const authoredLayer = { label: 'Cases', columns: { primary: { name: 'count' } } }
    expect(
      coveUpdateWorker({ type: 'map', version: '4.26.8-1', bubble: { layers: [authoredLayer] } }).bubble.layers
    ).toEqual([authoredLayer])

    expect(coveUpdateWorker({ type: 'map', version: '4.26.8-2', bubble: { layers: [] } }).bubble.layers).toEqual([])
  })

  it('does not infer a bubble layer from flat visual defaults alone', () => {
    const result = coveUpdateWorker({
      type: 'map',
      version: '4.26.6',
      bubble: null,
      visual: {
        border: true,
        minBubbleSize: 1,
        maxBubbleSize: 20,
        extraBubbleBorder: false,
        showBubbleZeros: false
      }
    })

    expect(result.visual).toEqual({
      border: true,
      minBubbleSize: 1,
      maxBubbleSize: 20,
      extraBubbleBorder: false,
      showBubbleZeros: false
    })
    expect(result.bubble).toBeNull()
  })

  it('preserves a legacy bubble layer created by the earlier bubble migration', () => {
    const result = coveUpdateWorker({
      type: 'map',
      version: '4.26.6',
      general: { type: 'bubble' },
      columns: { geo: { name: 'State' }, primary: { name: 'Cases' } },
      visual: { minBubbleSize: 4, maxBubbleSize: 24, showBubbleZeros: true }
    })

    expect(result.bubble.layers[0]).toMatchObject({
      minBubbleSize: 4,
      maxBubbleSize: 24,
      showBubbleZeros: true,
      columns: { geo: { name: 'State' }, primary: { name: 'Cases' } }
    })
  })

  it('converts legacy Data Bite borders and version-bound bar thickness omissions', () => {
    expect(update({ type: 'data-bite', visual: { border: false } }, '4.26.8-1').visual.border).toBe(true)
    expect(update(chart(), '4.26.8').barThickness).toBe(0.8)
    expect(update(chart(), '4.26.8-1').barThickness).toBe(0.8)
    expect(update(chart({ barThickness: 0 }), '4.26.8-1').barThickness).toBe(0)
    expect(update(chart(), '4.26.7').barThickness).toBeUndefined()
  })

  it.each([
    [
      { visualizationType: 'Bar', palette: 'qualitative-bold' },
      { name: 'sequential_bluereverse', version: '2.0', isReversed: true }
    ],
    [
      { visualizationType: 'Line', color: 'sequential-orange' },
      { name: 'divergent_blue_cyan', version: '2.0', isReversed: false }
    ],
    [
      { visualizationType: 'Bar', color: 'sequential-orange' },
      { name: 'sequential_orange', version: '1.0', isReversed: false }
    ],
    [
      { visualizationType: 'Line', color: 'sequential-orange', general: {} },
      { name: 'sequential_orange', version: '1.0', isReversed: false }
    ]
  ])('preserves historical loader palette precedence for %#', (config, expected) => {
    const result = coveUpdateWorker({ type: 'chart', version: '4.25.8', ...config } as any)

    expect(result.general.palette).toMatchObject({
      name: expected.name,
      version: expected.version,
      isReversed: expected.isReversed
    })
    expect(result.migrations?.paletteFallbackFrozen).toBeUndefined()
  })

  it('preserves custom-color precedence and authored dashboard-child palettes through the full migration chain', () => {
    const custom = coveUpdateWorker({
      type: 'chart',
      version: '4.25.8',
      visualizationType: 'Bar',
      palette: 'qualitative-soft',
      customColors: ['#123456', '#abcdef']
    } as any)
    expect(custom.general.palette).toMatchObject({
      name: 'qualitative_soft',
      customColors: ['#123456', '#abcdef']
    })
    expect(custom.migrations?.paletteFallbackFrozen).toBeUndefined()

    const dashboard = coveUpdateWorker({
      type: 'dashboard',
      version: '4.25.8',
      visualizations: {
        child: { type: 'chart', visualizationType: 'Bar', palette: 'qualitative-bold' }
      }
    } as any)
    expect(dashboard.visualizations.child.general.palette).toMatchObject({
      name: 'qualitative_bold',
      version: '1.0',
      isReversed: false
    })
    expect(dashboard.visualizations.child.migrations?.paletteFallbackFrozen).toBeUndefined()
  })

  it('does not infer or repair palettes for configs already at 4.26.8-1', () => {
    const marker = { paletteFallbackFrozen: true, other: 'preserved' }
    const currentChart = update(chart({ migrations: marker }), '4.26.8-1')
    const currentMap = update({ type: 'map', version: '4.26.8-1' }, '4.26.8-1')

    expect(currentChart).not.toHaveProperty('general.palette')
    expect(currentChart.migrations).toEqual(marker)
    expect(currentMap).not.toHaveProperty('general.palette')

    expect(applyConfigDefaults(currentChart, chartDefaults).general.palette).toEqual(chartDefaults.general.palette)
    expect(applyConfigDefaults(currentMap, mapDefaults).general.palette).toEqual(mapDefaults.general.palette)
  })

  it('preserves standalone and dashboard-child table.show behavior through hydration', () => {
    const standalone = coveUpdateWorker(chart({ table: {} }))
    const dashboard = coveUpdateWorker({
      type: 'dashboard',
      version: '4.26.8-1',
      visualizations: {
        partial: chart({ table: {} }),
        absent: chart(),
        explicit: chart({ table: { show: true } })
      }
    })
    expect(standalone.table.show).toBe(true)
    expect(dashboard.visualizations.partial.table).not.toHaveProperty('show')
    expect(dashboard.visualizations.absent).not.toHaveProperty('table')
    expect(dashboard.visualizations.explicit.table.show).toBe(true)

    const standaloneDefaults = { ...chartDefaults, table: { ...chartDefaults.table, show: true } }
    const dashboardDefaults = { ...chartDefaults, table: { ...chartDefaults.table, show: false } }
    expect(applyConfigDefaults(standalone, standaloneDefaults).table.show).toBe(true)
    expect(applyConfigDefaults(dashboard.visualizations.partial, dashboardDefaults).table.show).toBe(false)
    expect(applyConfigDefaults(dashboard.visualizations.absent, dashboardDefaults).table.show).toBe(false)
    expect(applyConfigDefaults(dashboard.visualizations.explicit, dashboardDefaults).table.show).toBe(true)
  })

  it('materializes legacy series defaults before arrays are treated as atomic authored values', () => {
    const standalone = applyConfigDefaults(
      coveUpdateWorker(
        chart({
          series: [{ dataKey: 'value' }, { dataKey: 'rate', tooltip: false, axis: 'Right' }]
        })
      ),
      chartDefaults
    )
    expect(standalone.series).toEqual([
      { dataKey: 'value', tooltip: true, axis: 'Left' },
      { dataKey: 'rate', tooltip: false, axis: 'Right' }
    ])

    const dashboard = coveUpdateWorker({
      type: 'dashboard',
      version: '4.26.8-1',
      visualizations: { child: chart({ series: [{ dataKey: 'value' }] }) }
    })
    expect(dashboard.visualizations.child.series).toEqual([{ dataKey: 'value', tooltip: true, axis: 'Left' }])
  })

  it('recurses through dashboard visualizations', () => {
    const result = coveUpdateWorker({
      type: 'dashboard',
      version: '4.26.8-1',
      visualizations: {
        heat: chart({ visualizationType: 'HeatMap', yAxis: {}, legend: {} }),
        map: { type: 'map', general: {}, legend: {} }
      }
    })
    expect(result.visualizations.heat.yAxis.type).toBe('categorical')
    expect(result.visualizations.map.legend.style).toBe('circles')
  })

  it('creates required stable-contract sections in dashboard charts', () => {
    const result = coveUpdateWorker({
      type: 'dashboard',
      version: '4.26.8-1',
      visualizations: {
        forecasting: chart({ visualizationType: 'Forecasting' }),
        heatmap: chart({ visualizationType: 'HeatMap' }),
        horizon: chart({ visualizationType: 'Horizon Chart' }),
        box: chart({ visualizationType: 'Box Plot' }),
        bump: chart({ visualizationType: 'Bump Chart' })
      }
    })

    expect(result.visualizations.forecasting.xAxis.type).toBe('date')
    expect(result.visualizations.heatmap.yAxis).toEqual({ type: 'categorical' })
    expect(result.visualizations.horizon.xAxis.type).toBe('categorical')
    expect(result.visualizations.horizon.general.paletteColorCount).toBe(4)
    expect(result.visualizations.box.yAxis.labelPlacement).toBe('On Date/Category Axis')
    expect(result.visualizations.bump.xAxis.type).toBe('date-time')
  })

  it('converts only eligible single-dashboard legacy filters', () => {
    const base = {
      type: 'dashboard',
      version: '4.26.8-1',
      dashboard: { sharedFilters: [{ label: 'Existing' }], filters: [{ label: 'State', extra: true }] },
      visualizations: { chart: { type: 'chart' } }
    }
    const eligible = coveUpdateWorker(base)
    expect(eligible.dashboard.filters).toBeUndefined()
    expect(eligible.dashboard.sharedFilters[1]).toEqual({
      label: 'State',
      extra: true,
      key: 'State',
      showDropdown: true,
      usedBy: ['chart']
    })

    const datasetBacked = coveUpdateWorker({ ...base, datasets: { main: {} } })
    expect(datasetBacked.dashboard.filters).toHaveLength(1)
  })

  it('materializes dashboard renderer fallbacks before recursive hydration', () => {
    const result = update(
      {
        type: 'dashboard',
        version: '4.26.8-1',
        dashboard: { title: 'Legacy Dashboard' },
        visualizations: {}
      },
      '4.26.8-1'
    )

    expect(result.dashboard).toEqual({
      title: 'Legacy Dashboard',
      theme: 'theme-blue',
      titleStyle: 'legacy',
      downloads: {},
      sharedFilters: []
    })
  })

  it.each(['small', 'large', 'legacy'])('preserves an explicit dashboard title style of %s', titleStyle => {
    const result = update(
      {
        type: 'dashboard',
        version: '4.26.8-1',
        dashboard: { title: 'Styled Dashboard', titleStyle }
      },
      '4.26.8-1'
    )

    expect(result.dashboard.titleStyle).toBe(titleStyle)
  })

  it('preserves the legacy placement of dashboard download links for partial table sections', () => {
    const result = coveUpdateWorker({
      type: 'dashboard',
      version: '4.26.8-1',
      dashboard: {},
      table: { show: true }
    })

    expect(result.table).toEqual({
      show: true,
      downloadUrlLabel: '',
      showDownloadLinkBelow: false,
      showVertical: true
    })
  })

  it('does not convert filters on multi-dashboard roots or children', () => {
    const dashboard = {
      type: 'dashboard',
      dashboard: { filters: [{ label: 'State' }] },
      visualizations: {}
    }
    const result = coveUpdateWorker({
      type: 'dashboard',
      version: '4.26.8-1',
      visualizations: {},
      multiDashboards: [dashboard]
    })
    expect(result.multiDashboards[0].dashboard.filters).toHaveLength(1)
  })

  it('runs once for old, versionless, and malformed configs but not current configs', () => {
    expect(coveUpdateWorker(chart()).orientation).toBeUndefined()
    const versionless = { type: 'chart', visualizationType: 'Paired Bar', xAxis: {}, yAxis: {}, table: {}, general: {} }
    expect(coveUpdateWorker(versionless).orientation).toBe('horizontal')
    expect(coveUpdateWorker({ ...versionless, version: 'banana' }).orientation).toBe('horizontal')
    expect(
      coveUpdateWorker({ type: 'chart', version: '4.26.8-2', visualizationType: 'Paired Bar' }).orientation
    ).toBeUndefined()
  })
})
