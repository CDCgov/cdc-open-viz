import {
  applyModernizationRecipe,
  getModernizationOptions,
  getModernizationRecipe,
  modernizationRecipes,
  ModernizationRecipe
} from './modernizationRecipes'
import staleDatasetKeysDashboard from '@cdc/dashboard/examples/dashboard-stale-dataset-keys.json'

describe('modernizationRecipes', () => {
  it('does not select a recipe when none applies', () => {
    expect(getModernizationRecipe({ type: 'table' })).toBeUndefined()
  })

  it('selects the chart modernization recipe for legacy chart title configs', () => {
    expect(getModernizationRecipe({ type: 'chart', titleStyle: 'legacy' })?.id).toBe('modernize-chart')
  })

  it('selects the chart title modernization when stale configs omit or empty title style', () => {
    const modernChartConfig = {
      type: 'chart',
      yAxis: {
        titlePlacement: 'top',
        autoMaxStrategy: 'clean-top-tick',
        hideAxis: true,
        hideTicks: true,
        gridLines: true,
        numTicks: 4,
        min: 0
      },
      isResponsiveTicks: false,
      legend: { position: 'top', singleRow: true },
      xAxis: {
        dateDisplayFormat: '%b. %-d %Y',
        tickRotation: 0,
        numTicks: 6,
        viewportNumTicks: { xs: 4, xxs: 4 }
      },
      table: { expanded: false },
      tooltips: { dateDisplayFormat: '%B %-d, %Y' },
      dataFormat: { commas: true }
    }

    expect(getModernizationRecipe(modernChartConfig)?.editorLocations).toEqual(['General > Title Style'])
    expect(getModernizationRecipe({ ...modernChartConfig, titleStyle: '' })?.editorLocations).toEqual([
      'General > Title Style'
    ])
  })

  it('selects the map modernization recipe for legacy map title configs', () => {
    expect(getModernizationRecipe({ type: 'map', general: { titleStyle: 'legacy' } })?.id).toBe('modernize-map')
  })

  it('selects the map title modernization when stale configs omit or empty title style', () => {
    expect(getModernizationRecipe({ type: 'map', general: {} })?.editorLocations).toEqual(['General > Title Style'])
    expect(getModernizationRecipe({ type: 'map', general: { titleStyle: '' } })?.editorLocations).toEqual([
      'General > Title Style'
    ])
  })

  it('selects the dashboard modernization recipe when dashboard title style can be modernized', () => {
    expect(
      getModernizationRecipe({
        type: 'dashboard',
        dashboard: { title: 'Dashboard title', titleStyle: 'legacy' },
        visualizations: {}
      })?.id
    ).toBe('modernize-dashboard')
  })

  it('selects the dashboard modernization recipe when stale configs omit or empty dashboard title style', () => {
    expect(
      getModernizationRecipe({
        type: 'dashboard',
        dashboard: { title: 'Dashboard title' },
        visualizations: {}
      })?.editorLocations
    ).toEqual(['Dashboard Settings > Title Style'])

    expect(
      getModernizationRecipe({
        type: 'dashboard',
        dashboard: { title: 'Dashboard title', titleStyle: '' },
        visualizations: {}
      })?.editorLocations
    ).toEqual(['Dashboard Settings > Title Style'])
  })

  it('selects the dashboard modernization recipe when nested charts can be modernized', () => {
    expect(
      getModernizationRecipe({
        type: 'dashboard',
        dashboard: { titleStyle: 'small' },
        visualizations: {
          chart1: { type: 'chart', titleStyle: 'legacy' }
        }
      })?.id
    ).toBe('modernize-dashboard')
  })

  it('does not select a recipe when the matching recipe would not change the config', () => {
    const modernConfig = {
      type: 'chart',
      titleStyle: 'small',
      yAxis: {
        titlePlacement: 'top',
        autoMaxStrategy: 'clean-top-tick',
        hideAxis: true,
        hideTicks: true,
        gridLines: true,
        numTicks: 4,
        min: 0
      },
      isResponsiveTicks: false,
      legend: { position: 'top', singleRow: true },
      xAxis: {
        dateDisplayFormat: '%b. %-d %Y',
        tickRotation: 0,
        numTicks: 6,
        viewportNumTicks: { xs: 4, xxs: 4 }
      },
      table: { expanded: false },
      tooltips: { dateDisplayFormat: '%B %-d, %Y' },
      dataFormat: { commas: true }
    }

    expect(getModernizationRecipe(modernConfig)).toBeUndefined()
    expect(getModernizationRecipe({ ...modernConfig, titleStyle: 'large' })).toBeUndefined()
  })

  it('returns a cloned modernized config without mutating the original', () => {
    const originalConfig = {
      type: 'chart',
      titleStyle: 'legacy',
      animate: false,
      yAxis: {
        titlePlacement: 'side',
        autoMaxStrategy: 'default',
        hideAxis: false,
        hideTicks: false,
        gridLines: false,
        numTicks: 7,
        min: ''
      },
      isResponsiveTicks: true,
      xAxis: {
        dateParseFormat: '%m/%d/%Y',
        dateDisplayFormat: '%Y-%m-%d',
        tickRotation: 45,
        numTicks: '',
        viewportNumTicks: { sm: 8, xs: 7, xxs: 5 }
      },
      table: {
        dateDisplayFormat: '',
        expanded: true
      },
      tooltips: {
        dateDisplayFormat: ''
      },
      dataFormat: {
        commas: false
      },
      general: { palette: { name: 'qualitative_bold', version: '2.0', isReversed: true } },
      legend: { position: 'right', hideBorder: { side: false, topBottom: false } },
      visual: { accent: false, background: false, border: true },
      visualizationType: 'Bar',
      barStyle: 'flat'
    }
    const recipe = getModernizationRecipe(originalConfig) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, originalConfig)

    expect(recipe.editorLocationDetails).toContainEqual({ path: 'General > Title Style', value: 'Small' })
    expect(recipe.editorLocationDetails).toContainEqual({ path: 'Left Value Axis > Number Of Ticks', value: '4' })
    expect(recipe.editorLocationDetails).toContainEqual({ path: 'Date/Category Axis > Number Of Ticks', value: '6' })
    expect(recipe.editorLocationDetails).toContainEqual({
      path: 'Date/Category Axis > Number Of Ticks: Viewport Overrides > xs',
      value: '4'
    })
    expect(recipe.editorLocationDetails).toContainEqual({
      path: 'Date/Category Axis > Number Of Ticks: Viewport Overrides > xxs',
      value: '4'
    })
    expect(recipe.editorLocationDetails).toContainEqual({ path: 'Legend > Position', value: 'Top' })
    expect(recipe.editorLocationDetails).toContainEqual({ path: 'Legend > Single Row Legend', value: 'On' })
    expect(recipe.editorLocationDetails).toContainEqual({
      path: 'Date/Category Axis > Axis Date Display Format',
      value: '%b. %-d %Y'
    })
    expect(modernizedConfig).not.toBe(originalConfig)
    expect(modernizedConfig.titleStyle).toBe('small')
    expect(modernizedConfig.yAxis.titlePlacement).toBe('top')
    expect(modernizedConfig.yAxis.autoMaxStrategy).toBe('clean-top-tick')
    expect(modernizedConfig.yAxis.hideAxis).toBe(true)
    expect(modernizedConfig.yAxis.hideTicks).toBe(true)
    expect(modernizedConfig.yAxis.gridLines).toBe(true)
    expect(modernizedConfig.yAxis.numTicks).toBe(4)
    expect(modernizedConfig.yAxis.min).toBe(0)
    expect(modernizedConfig.isResponsiveTicks).toBe(false)
    expect(modernizedConfig.legend.position).toBe('top')
    expect(modernizedConfig.legend.singleRow).toBe(true)
    expect(modernizedConfig.xAxis.dateParseFormat).toBe('%m/%d/%Y')
    expect(modernizedConfig.xAxis.dateDisplayFormat).toBe('%b. %-d %Y')
    expect(modernizedConfig.xAxis.tickRotation).toBe(0)
    expect(modernizedConfig.xAxis.numTicks).toBe(6)
    expect(modernizedConfig.xAxis.viewportNumTicks).toEqual({ sm: 8, xs: 4, xxs: 4 })
    expect(modernizedConfig.table.dateDisplayFormat).toBe('')
    expect(modernizedConfig.table.expanded).toBe(false)
    expect(modernizedConfig.tooltips.dateDisplayFormat).toBe('%B %-d, %Y')
    expect(modernizedConfig.dataFormat.commas).toBe(true)
    expect(modernizedConfig.general.palette.name).toBe('qualitative_bold')
    expect(modernizedConfig.visual.background).toBe(false)
    expect(originalConfig.titleStyle).toBe('legacy')
    expect(originalConfig.yAxis.titlePlacement).toBe('side')
    expect(originalConfig.yAxis.numTicks).toBe(7)
    expect(originalConfig.yAxis.min).toBe('')
    expect(originalConfig.isResponsiveTicks).toBe(true)
    expect(originalConfig.legend.position).toBe('right')
    expect(originalConfig.legend.singleRow).toBeUndefined()
    expect(originalConfig.xAxis.dateDisplayFormat).toBe('%Y-%m-%d')
    expect(originalConfig.xAxis.tickRotation).toBe(45)
    expect(originalConfig.xAxis.numTicks).toBe('')
    expect(originalConfig.xAxis.viewportNumTicks).toEqual({ sm: 8, xs: 7, xxs: 5 })
    expect(originalConfig.table.dateDisplayFormat).toBe('')
    expect(originalConfig.table.expanded).toBe(true)
    expect(originalConfig.tooltips.dateDisplayFormat).toBe('')
    expect(originalConfig.dataFormat.commas).toBe(false)
    expect(originalConfig.general.palette.name).toBe('qualitative_bold')
  })

  it('modernizes dashboard title style and chart visualizations recursively', () => {
    const originalConfig = {
      type: 'dashboard',
      dashboard: { title: 'Dashboard title', titleStyle: 'legacy' },
      visualizations: {
        chart1: {
          type: 'chart',
          titleStyle: 'legacy',
          visualizationType: 'Combo',
          orientation: 'vertical',
          barHasBorder: 'false',
          series: [{ dataKey: 'value', type: 'Bar' }],
          yAxis: { titlePlacement: 'side', rightTitlePlacement: 'side', numTicks: 7, min: '' },
          legend: { position: 'right' },
          xAxis: { dateDisplayFormat: '%Y-%m-%d', tickRotation: 45 },
          table: { expanded: true },
          isResponsiveTicks: true
        },
        nestedDashboard: {
          type: 'dashboard',
          dashboard: { title: 'Nested dashboard', titleStyle: 'legacy' },
          visualizations: {
            nestedChart: {
              type: 'chart',
              titleStyle: 'legacy',
              yAxis: { titlePlacement: 'side' },
              legend: { position: 'right' },
              xAxis: { tickRotation: 45 },
              table: { expanded: true },
              isResponsiveTicks: true
            }
          }
        },
        map1: {
          type: 'map',
          general: { titleStyle: 'legacy' },
          table: { expanded: true }
        }
      },
      multiDashboards: [
        {
          label: 'Tab one',
          dashboard: { title: 'Tab dashboard', titleStyle: 'legacy' },
          rows: [],
          visualizations: {
            tabChart: {
              type: 'chart',
              titleStyle: 'legacy',
              yAxis: { titlePlacement: 'side' },
              legend: { position: 'right' },
              xAxis: { tickRotation: 45 },
              table: { expanded: true },
              isResponsiveTicks: true
            }
          }
        }
      ]
    }
    const recipe = getModernizationRecipe(originalConfig) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, originalConfig)

    expect(recipe.editorLocationDetails).toContainEqual({ path: 'Dashboard Settings > Title Style', value: 'Small' })
    expect(recipe.editorLocationDetails).toContainEqual({ path: 'Charts > General > Title Style', value: 'Small' })
    expect(recipe.editorLocationDetails).toContainEqual({
      path: 'Charts > Right Value Axis > Label Placement',
      value: 'Top'
    })
    expect(recipe.editorLocationDetails).toContainEqual({ path: 'Maps > General > Title Style', value: 'Small' })
    expect(recipe.editorLocationDetails).toContainEqual({
      path: 'Maps > Data Table > Map loads with data table expanded',
      value: 'Off'
    })
    expect(modernizedConfig).not.toBe(originalConfig)
    expect(modernizedConfig.dashboard.titleStyle).toBe('small')
    expect(modernizedConfig.visualizations.chart1.titleStyle).toBe('small')
    expect(modernizedConfig.visualizations.chart1.yAxis.titlePlacement).toBe('top')
    expect(modernizedConfig.visualizations.chart1.yAxis.rightTitlePlacement).toBe('top')
    expect(modernizedConfig.visualizations.chart1.yAxis.numTicks).toBe(4)
    expect(modernizedConfig.visualizations.chart1.barHasBorder).toBe('true')
    expect(modernizedConfig.visualizations.chart1.legend.position).toBe('top')
    expect(modernizedConfig.visualizations.chart1.legend.singleRow).toBe(true)
    expect(modernizedConfig.visualizations.chart1.xAxis.tickRotation).toBe(0)
    expect(modernizedConfig.visualizations.chart1.table.expanded).toBe(false)
    expect(modernizedConfig.visualizations.chart1.isResponsiveTicks).toBe(false)
    expect(modernizedConfig.visualizations.nestedDashboard.dashboard.titleStyle).toBe('small')
    expect(modernizedConfig.visualizations.nestedDashboard.visualizations.nestedChart.titleStyle).toBe('small')
    expect(modernizedConfig.visualizations.nestedDashboard.visualizations.nestedChart.legend.singleRow).toBe(true)
    expect(modernizedConfig.visualizations.map1.general.titleStyle).toBe('small')
    expect(modernizedConfig.visualizations.map1.table.expanded).toBe(false)
    expect(modernizedConfig.multiDashboards[0].dashboard.titleStyle).toBe('small')
    expect(modernizedConfig.multiDashboards[0].visualizations.tabChart.titleStyle).toBe('small')
    expect(modernizedConfig.multiDashboards[0].type).toBeUndefined()
    expect(originalConfig.dashboard.titleStyle).toBe('legacy')
    expect(originalConfig.visualizations.chart1.titleStyle).toBe('legacy')
    expect(originalConfig.visualizations.chart1.barHasBorder).toBe('false')
    expect(originalConfig.multiDashboards[0].dashboard.titleStyle).toBe('legacy')
  })

  it('leaves non-legacy chart title styles unchanged', () => {
    const recipe = getModernizationRecipe({
      type: 'chart',
      titleStyle: 'large',
      yAxis: { titlePlacement: 'side' }
    }) as ModernizationRecipe
    const modernizedConfig = applyModernizationRecipe(recipe, {
      type: 'chart',
      titleStyle: 'large',
      yAxis: { titlePlacement: 'side' }
    })

    expect(modernizedConfig.titleStyle).toBe('large')
    expect(modernizedConfig.yAxis.titlePlacement).toBe('top')
  })

  it('moves vertical Combo chart right-axis titles to the top as an atomic upgrade', () => {
    const config = {
      type: 'chart',
      visualizationType: 'Combo',
      orientation: 'vertical',
      titleStyle: 'small',
      yAxis: {
        titlePlacement: 'top',
        rightTitlePlacement: 'side',
        autoMaxStrategy: 'clean-top-tick',
        hideAxis: true,
        hideTicks: true,
        gridLines: true,
        numTicks: 4,
        min: 0
      },
      isResponsiveTicks: false,
      legend: { position: 'top', singleRow: true },
      xAxis: {
        dateDisplayFormat: '%b. %-d %Y',
        tickRotation: 0,
        numTicks: 6,
        viewportNumTicks: { xs: 4, xxs: 4 }
      },
      table: { expanded: false },
      tooltips: { dateDisplayFormat: '%B %-d, %Y' },
      dataFormat: { commas: true },
      series: [{ dataKey: 'value', type: 'Line', axis: 'Right' }]
    }
    const recipe = getModernizationRecipe(config) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, config)

    expect(recipe.editorLocations).toEqual(['Right Value Axis > Label Placement'])
    expect(recipe.editorLocationDetails).toEqual([{ path: 'Right Value Axis > Label Placement', value: 'Top' }])
    expect(modernizedConfig.yAxis.rightTitlePlacement).toBe('top')
    expect(config.yAxis.rightTitlePlacement).toBe('side')
  })

  it.each([
    ['horizontal Combo charts', { visualizationType: 'Combo', orientation: 'horizontal' }],
    ['vertical non-Combo charts', { visualizationType: 'Bar', orientation: 'vertical' }]
  ])('does not modernize right-axis title placement for %s', (_scenario, chartType) => {
    const config = {
      type: 'chart',
      ...chartType,
      titleStyle: 'small',
      barHasBorder: 'true',
      yAxis: {
        titlePlacement: 'top',
        rightTitlePlacement: 'side',
        autoMaxStrategy: 'clean-top-tick',
        hideAxis: true,
        hideTicks: true,
        gridLines: true,
        numTicks: 4,
        min: 0,
        labelPlacement: 'On Date/Category Axis'
      },
      isResponsiveTicks: false,
      legend: { position: 'top', singleRow: true },
      xAxis: {
        dateDisplayFormat: '%b. %-d %Y',
        tickRotation: 0,
        numTicks: 6,
        viewportNumTicks: { xs: 4, xxs: 4 },
        hideAxis: true,
        hideTicks: true
      },
      table: { expanded: false },
      tooltips: { dateDisplayFormat: '%B %-d, %Y' },
      dataFormat: { commas: true },
      series: [{ dataKey: 'value', type: 'Line', axis: 'Right' }]
    }

    expect(getModernizationRecipe(config)?.editorLocations ?? []).not.toContain('Right Value Axis > Label Placement')
  })

  it('only reports editor locations for chart settings that actually change', () => {
    const recipe = getModernizationRecipe({
      type: 'chart',
      titleStyle: 'legacy',
      yAxis: {
        titlePlacement: 'top',
        autoMaxStrategy: 'clean-top-tick',
        hideAxis: true,
        hideTicks: true,
        gridLines: true,
        numTicks: 4,
        min: 0
      },
      isResponsiveTicks: false,
      legend: { position: 'top', singleRow: true },
      xAxis: {
        dateDisplayFormat: '%b. %-d %Y',
        tickRotation: 0,
        numTicks: 6,
        viewportNumTicks: { xs: 4, xxs: 4 }
      },
      table: { expanded: false },
      tooltips: { dateDisplayFormat: '%B %-d, %Y' },
      dataFormat: { commas: true }
    })

    expect(recipe?.editorLocations).toEqual(['General > Title Style'])
  })

  it('shows borders on bar-capable charts as an atomic upgrade', () => {
    const config = {
      type: 'chart',
      visualizationType: 'Bar',
      orientation: 'vertical',
      titleStyle: 'small',
      barHasBorder: 'false',
      series: [{ dataKey: 'value', type: 'Bar' }],
      yAxis: {
        titlePlacement: 'top',
        autoMaxStrategy: 'clean-top-tick',
        hideAxis: true,
        hideTicks: true,
        gridLines: true,
        numTicks: 4,
        min: 0
      },
      isResponsiveTicks: false,
      legend: { position: 'top', singleRow: true },
      xAxis: {
        dateDisplayFormat: '%b. %-d %Y',
        tickRotation: 0,
        numTicks: 6,
        viewportNumTicks: { xs: 4, xxs: 4 }
      },
      table: { expanded: false },
      tooltips: { dateDisplayFormat: '%B %-d, %Y' },
      dataFormat: { commas: true }
    }
    const recipe = getModernizationRecipe(config) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, config)

    expect(recipe.editorLocations).toEqual(['Visual > Bar Borders'])
    expect(recipe.editorLocationDetails).toEqual([{ path: 'Visual > Bar Borders', value: 'On' }])
    expect(modernizedConfig.barHasBorder).toBe('true')
    expect(config.barHasBorder).toBe('false')
  })

  it.each([
    ['line chart', { visualizationType: 'Line', series: [{ dataKey: 'value', type: 'Line' }] }],
    ['barless combo chart', { visualizationType: 'Combo', series: [{ dataKey: 'value', type: 'Line' }] }]
  ])('does not modernize bar borders for a %s', (_scenario, chartConfig) => {
    const recipe = getModernizationRecipe({
      type: 'chart',
      titleStyle: 'small',
      barHasBorder: 'false',
      ...chartConfig
    })

    expect(recipe?.editorLocations ?? []).not.toContain('Visual > Bar Borders')
  })

  it('uses six vertical X-axis ticks and four on narrow viewports as an atomic upgrade', () => {
    const config = {
      type: 'chart',
      visualizationType: 'Bar',
      orientation: 'vertical',
      titleStyle: 'small',
      yAxis: {
        titlePlacement: 'top',
        autoMaxStrategy: 'clean-top-tick',
        hideAxis: true,
        hideTicks: true,
        gridLines: true,
        numTicks: 4,
        min: 0
      },
      isResponsiveTicks: false,
      legend: { position: 'top', singleRow: true },
      xAxis: {
        type: 'date-time',
        dateDisplayFormat: '%b. %-d %Y',
        tickRotation: 0,
        numTicks: '',
        viewportNumTicks: { sm: 8, xs: 7, xxs: 5 }
      },
      table: { expanded: false },
      tooltips: { dateDisplayFormat: '%B %-d, %Y' },
      dataFormat: { commas: true }
    }
    const recipe = getModernizationRecipe(config) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, config)

    expect(recipe.editorLocations).toEqual([
      'Date/Category Axis > Number Of Ticks',
      'Date/Category Axis > Number Of Ticks: Viewport Overrides > xs',
      'Date/Category Axis > Number Of Ticks: Viewport Overrides > xxs'
    ])
    expect(recipe.editorLocationDetails).toEqual([
      { path: 'Date/Category Axis > Number Of Ticks', value: '6' },
      { path: 'Date/Category Axis > Number Of Ticks: Viewport Overrides > xs', value: '4' },
      { path: 'Date/Category Axis > Number Of Ticks: Viewport Overrides > xxs', value: '4' }
    ])
    expect(modernizedConfig.xAxis).toEqual({
      ...config.xAxis,
      numTicks: 6,
      viewportNumTicks: { sm: 8, xs: 4, xxs: 4 }
    })
    expect(config.xAxis.numTicks).toBe('')
    expect(config.xAxis.viewportNumTicks).toEqual({ sm: 8, xs: 7, xxs: 5 })
  })

  it.each([
    ['horizontal chart', { orientation: 'horizontal', visualizationType: 'Bar', xAxis: {} }],
    ['heat map', { orientation: 'vertical', visualizationType: 'HeatMap', xAxis: {} }],
    ['spark line', { orientation: 'vertical', visualizationType: 'Spark Line', xAxis: {} }],
    [
      'manual categorical axis',
      { orientation: 'vertical', visualizationType: 'Bar', xAxis: { type: 'categorical', manual: true } }
    ]
  ])('does not modernize X-axis tick counts for a %s', (_scenario, axisConfig) => {
    const modernConfig = {
      type: 'chart',
      titleStyle: 'small',
      yAxis: {
        titlePlacement: 'top',
        autoMaxStrategy: 'clean-top-tick',
        hideAxis: true,
        hideTicks: true,
        gridLines: true,
        numTicks: 4,
        min: 0
      },
      isResponsiveTicks: false,
      legend: { position: 'top', singleRow: true },
      table: { expanded: false },
      tooltips: { dateDisplayFormat: '%B %-d, %Y' },
      dataFormat: { commas: true },
      ...axisConfig,
      xAxis: {
        dateDisplayFormat: '%b. %-d %Y',
        tickRotation: 0,
        ...axisConfig.xAxis
      }
    }

    expect(getModernizationRecipe(modernConfig)?.editorLocations ?? []).not.toContain(
      'Date/Category Axis > Number Of Ticks'
    )
  })

  it('moves single-series horizontal bar labels to the date/category axis', () => {
    const config = {
      type: 'chart',
      visualizationType: 'Bar',
      visualizationSubType: 'regular',
      orientation: 'horizontal',
      titleStyle: 'small',
      barHasBorder: 'true',
      yAxis: {
        titlePlacement: 'top',
        autoMaxStrategy: 'clean-top-tick',
        hideAxis: true,
        hideTicks: true,
        gridLines: true,
        numTicks: 4,
        min: 0,
        labelPlacement: 'Below Bar'
      },
      isResponsiveTicks: false,
      legend: { position: 'top', singleRow: true },
      xAxis: { dateDisplayFormat: '%b. %-d %Y', tickRotation: 0, hideAxis: true, hideTicks: true },
      table: { expanded: false },
      tooltips: { dateDisplayFormat: '%B %-d, %Y' },
      dataFormat: { commas: true },
      series: [{ dataKey: 'value', type: 'Bar' }]
    }
    const recipe = getModernizationRecipe(config) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, config)

    expect(recipe.editorLocations).toEqual(['General > Label Placement'])
    expect(recipe.editorLocationDetails).toEqual([
      { path: 'General > Label Placement', value: 'On Date/Category Axis' }
    ])
    expect(modernizedConfig.yAxis.labelPlacement).toBe('On Date/Category Axis')
  })

  it('applies supported horizontal upgrades without leaking vertical-only axis upgrades', () => {
    const config = {
      type: 'chart',
      visualizationType: 'Bar',
      visualizationSubType: 'regular',
      orientation: 'horizontal',
      titleStyle: 'legacy',
      barHasBorder: 'true',
      yAxis: {
        titlePlacement: 'side',
        autoMaxStrategy: 'default',
        hideAxis: false,
        hideTicks: false,
        gridLines: false,
        numTicks: 7,
        min: '',
        labelPlacement: 'Below Bar'
      },
      isResponsiveTicks: true,
      legend: { position: 'right', singleRow: false },
      xAxis: { dateDisplayFormat: '%Y-%m-%d', tickRotation: 45 },
      table: { expanded: true },
      tooltips: { dateDisplayFormat: '' },
      dataFormat: { commas: false },
      series: [{ dataKey: 'value', type: 'Bar' }]
    }
    const recipe = getModernizationRecipe(config) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, config)

    expect(recipe.editorLocations).toEqual([
      'General > Title Style',
      'General > Label Placement',
      'Date/Category Axis > Label Placement',
      'Value Axis > Number Of Ticks',
      'Value Axis > Use Responsive Ticks',
      'Value Axis > Number Formatting > Add Commas',
      'Value Axis > Show Gridlines',
      'Value Axis > Hide Axis',
      'Value Axis > Hide Ticks',
      'Value Axis > Value Axis Domain > Automatic Max Strategy',
      'Legend > Position',
      'Legend > Single Row Legend',
      'Data Table > Expanded by Default'
    ])
    expect(modernizedConfig.yAxis).toEqual({
      ...config.yAxis,
      titlePlacement: 'top',
      labelPlacement: 'On Date/Category Axis',
      gridLines: true,
      numTicks: 4,
      autoMaxStrategy: 'clean-top-tick'
    })
    expect(modernizedConfig.isResponsiveTicks).toBe(false)
    expect(modernizedConfig.xAxis).toEqual({
      ...config.xAxis,
      hideAxis: true,
      hideTicks: true
    })
    expect(modernizedConfig.tooltips).toEqual(config.tooltips)
    expect(modernizedConfig.dataFormat).toEqual({ commas: true })
    expect(modernizedConfig.titleStyle).toBe('small')
    expect(modernizedConfig.legend.position).toBe('top')
    expect(modernizedConfig.legend.singleRow).toBe(true)
    expect(modernizedConfig.table.expanded).toBe(false)
  })

  it('reports horizontal axis modernization details', () => {
    const config = {
      type: 'chart',
      visualizationType: 'Bar',
      visualizationSubType: 'regular',
      orientation: 'horizontal',
      titleStyle: 'small',
      barHasBorder: 'true',
      yAxis: {
        titlePlacement: 'side',
        labelPlacement: 'On Date/Category Axis',
        gridLines: false
      },
      isResponsiveTicks: true,
      legend: { position: 'top', singleRow: true },
      xAxis: { hideAxis: false, hideTicks: false },
      table: { expanded: false },
      tooltips: { dateDisplayFormat: '' },
      dataFormat: { commas: false },
      series: [{ dataKey: 'value', type: 'Bar' }]
    }
    const recipe = getModernizationRecipe(config) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, config)

    expect(recipe.editorLocations).toEqual([
      'Date/Category Axis > Label Placement',
      'Value Axis > Number Of Ticks',
      'Value Axis > Use Responsive Ticks',
      'Value Axis > Number Formatting > Add Commas',
      'Value Axis > Show Gridlines',
      'Value Axis > Hide Axis',
      'Value Axis > Hide Ticks',
      'Value Axis > Value Axis Domain > Automatic Max Strategy'
    ])
    expect(recipe.editorLocationDetails).toEqual([
      { path: 'Date/Category Axis > Label Placement', value: 'Top' },
      { path: 'Value Axis > Number Of Ticks', value: '4' },
      { path: 'Value Axis > Use Responsive Ticks', value: 'Off' },
      { path: 'Value Axis > Number Formatting > Add Commas', value: 'On' },
      { path: 'Value Axis > Show Gridlines', value: 'On' },
      { path: 'Value Axis > Hide Axis', value: 'On' },
      { path: 'Value Axis > Hide Ticks', value: 'On' },
      { path: 'Value Axis > Value Axis Domain > Automatic Max Strategy', value: 'Clean Top Tick' }
    ])
    expect(modernizedConfig.yAxis.numTicks).toBe(4)
    expect(modernizedConfig.isResponsiveTicks).toBe(false)
    expect(modernizedConfig.dataFormat.commas).toBe(true)
    expect(modernizedConfig.xAxis.hideAxis).toBe(true)
    expect(modernizedConfig.xAxis.hideTicks).toBe(true)
    expect(modernizedConfig.xAxis.gridLines).toBeUndefined()
    expect(modernizedConfig.yAxis).toEqual({
      ...config.yAxis,
      titlePlacement: 'top',
      numTicks: 4,
      gridLines: true,
      autoMaxStrategy: 'clean-top-tick'
    })
  })

  it('moves the horizontal category-axis title to the top as an atomic upgrade', () => {
    const config = {
      type: 'chart',
      visualizationType: 'Bar',
      visualizationSubType: 'regular',
      orientation: 'horizontal',
      titleStyle: 'small',
      barHasBorder: 'true',
      yAxis: {
        titlePlacement: 'side',
        labelPlacement: 'On Date/Category Axis',
        numTicks: 4,
        gridLines: true,
        autoMaxStrategy: 'clean-top-tick'
      },
      isResponsiveTicks: false,
      legend: { position: 'top', singleRow: true },
      xAxis: { hideAxis: true, hideTicks: true },
      table: { expanded: false },
      dataFormat: { commas: true },
      series: [{ dataKey: 'value', type: 'Bar' }]
    }
    const recipe = getModernizationRecipe(config) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, config)

    expect(recipe.editorLocations).toEqual(['Date/Category Axis > Label Placement'])
    expect(recipe.editorLocationDetails).toEqual([{ path: 'Date/Category Axis > Label Placement', value: 'Top' }])
    expect(modernizedConfig.yAxis.titlePlacement).toBe('top')
    expect(config.yAxis.titlePlacement).toBe('side')
  })

  it('adds missing horizontal gridlines through yAxis as an atomic upgrade', () => {
    const config = {
      type: 'chart',
      visualizationType: 'Bar',
      visualizationSubType: 'regular',
      orientation: 'horizontal',
      titleStyle: 'small',
      barHasBorder: 'true',
      yAxis: {
        titlePlacement: 'top',
        labelPlacement: 'On Date/Category Axis',
        numTicks: 4,
        autoMaxStrategy: 'clean-top-tick'
      },
      isResponsiveTicks: false,
      legend: { position: 'top', singleRow: true },
      xAxis: { hideAxis: true, hideTicks: true },
      table: { expanded: false },
      dataFormat: { commas: true },
      series: [{ dataKey: 'value', type: 'Bar' }]
    }
    const recipe = getModernizationRecipe(config) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, config)

    expect(recipe.editorLocations).toEqual(['Value Axis > Show Gridlines'])
    expect(recipe.editorLocationDetails).toEqual([{ path: 'Value Axis > Show Gridlines', value: 'On' }])
    expect(modernizedConfig.yAxis.gridLines).toBe(true)
    expect(modernizedConfig.xAxis.gridLines).toBeUndefined()
    expect(config.yAxis).not.toHaveProperty('gridLines')
  })

  it('does not change horizontal automatic max strategy when the value-axis max is explicit', () => {
    const config = {
      type: 'chart',
      visualizationType: 'Bar',
      visualizationSubType: 'regular',
      orientation: 'horizontal',
      titleStyle: 'small',
      barHasBorder: 'true',
      yAxis: {
        titlePlacement: 'top',
        labelPlacement: 'On Date/Category Axis',
        numTicks: 4,
        gridLines: true,
        autoMaxStrategy: 'default'
      },
      isResponsiveTicks: false,
      legend: { position: 'top', singleRow: true },
      xAxis: { max: 100, hideAxis: true, hideTicks: true },
      table: { expanded: false },
      dataFormat: { commas: true },
      series: [{ dataKey: 'value', type: 'Bar' }]
    }

    expect(getModernizationRecipe(config)).toBeUndefined()
  })

  it('moves stacked horizontal bar labels to the date/category axis', () => {
    const config = {
      type: 'chart',
      visualizationType: 'Bar',
      visualizationSubType: 'stacked',
      orientation: 'horizontal',
      titleStyle: 'small',
      barHasBorder: 'true',
      yAxis: {
        titlePlacement: 'top',
        autoMaxStrategy: 'clean-top-tick',
        hideAxis: true,
        hideTicks: true,
        gridLines: true,
        numTicks: 4,
        min: 0,
        labelPlacement: 'Below Bar'
      },
      isResponsiveTicks: false,
      legend: { position: 'top', singleRow: true },
      xAxis: { dateDisplayFormat: '%b. %-d %Y', tickRotation: 0, hideAxis: true, hideTicks: true },
      table: { expanded: false },
      tooltips: { dateDisplayFormat: '%B %-d, %Y' },
      dataFormat: { commas: true },
      series: [
        { dataKey: 'value1', type: 'Bar' },
        { dataKey: 'value2', type: 'Bar' }
      ]
    }
    const recipe = getModernizationRecipe(config) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, config)

    expect(recipe.editorLocations).toEqual(['General > Label Placement'])
    expect(modernizedConfig.yAxis.labelPlacement).toBe('On Date/Category Axis')
  })

  it('moves grouped horizontal bar labels to the date/category axis', () => {
    const config = {
      type: 'chart',
      visualizationType: 'Bar',
      visualizationSubType: 'regular',
      orientation: 'horizontal',
      titleStyle: 'small',
      barHasBorder: 'true',
      yAxis: {
        titlePlacement: 'top',
        autoMaxStrategy: 'clean-top-tick',
        hideAxis: true,
        hideTicks: true,
        gridLines: true,
        numTicks: 4,
        min: 0,
        labelPlacement: 'Below Bar'
      },
      isResponsiveTicks: false,
      legend: { position: 'top', singleRow: true },
      xAxis: { dateDisplayFormat: '%b. %-d %Y', tickRotation: 0, hideAxis: true, hideTicks: true },
      table: { expanded: false },
      tooltips: { dateDisplayFormat: '%B %-d, %Y' },
      dataFormat: { commas: true },
      series: [
        { dataKey: 'value1', type: 'Bar' },
        { dataKey: 'value2', type: 'Bar' }
      ]
    }
    const recipe = getModernizationRecipe(config)
    const modernizedConfig = applyModernizationRecipe(recipe as ModernizationRecipe, config)

    expect(recipe?.editorLocations).toEqual(['General > Label Placement'])
    expect(recipe?.editorLocationDetails).toEqual([
      { path: 'General > Label Placement', value: 'On Date/Category Axis' }
    ])
    expect(modernizedConfig.yAxis.labelPlacement).toBe('On Date/Category Axis')
  })

  it('dedupes dashboard chart locations by setting type', () => {
    const recipe = getModernizationRecipe({
      type: 'dashboard',
      dashboard: { titleStyle: 'small' },
      visualizations: {
        chart1: {
          type: 'chart',
          titleStyle: 'legacy',
          visualizationType: 'Bar',
          barHasBorder: 'false',
          series: [{ dataKey: 'value', type: 'Bar' }],
          yAxis: {
            titlePlacement: 'top',
            autoMaxStrategy: 'clean-top-tick',
            hideAxis: true,
            hideTicks: true,
            gridLines: true,
            numTicks: 4,
            min: 0
          },
          isResponsiveTicks: false,
          legend: { position: 'top', singleRow: true },
          xAxis: {
            dateDisplayFormat: '%b. %-d %Y',
            tickRotation: 0,
            numTicks: 6,
            viewportNumTicks: { xs: 4, xxs: 4 }
          },
          table: { expanded: false },
          tooltips: { dateDisplayFormat: '%B %-d, %Y' },
          dataFormat: { commas: true }
        },
        chart2: {
          type: 'chart',
          titleStyle: 'legacy',
          visualizationType: 'Bar',
          barHasBorder: 'false',
          series: [{ dataKey: 'value', type: 'Bar' }],
          yAxis: {
            titlePlacement: 'top',
            autoMaxStrategy: 'clean-top-tick',
            hideAxis: true,
            hideTicks: true,
            gridLines: true,
            numTicks: 4,
            min: 0
          },
          isResponsiveTicks: false,
          legend: { position: 'top', singleRow: true },
          xAxis: {
            dateDisplayFormat: '%b. %-d %Y',
            tickRotation: 0,
            numTicks: 6,
            viewportNumTicks: { xs: 4, xxs: 4 }
          },
          table: { expanded: false },
          tooltips: { dateDisplayFormat: '%B %-d, %Y' },
          dataFormat: { commas: true }
        }
      }
    })

    expect(recipe?.editorLocations).toEqual(['Charts > General > Title Style', 'Charts > Visual > Bar Borders'])
  })

  it('reports dashboard settings when only nested dashboard title styles change', () => {
    const recipe = getModernizationRecipe({
      type: 'dashboard',
      dashboard: { titleStyle: 'small' },
      visualizations: {
        nestedDashboard: {
          type: 'dashboard',
          dashboard: { titleStyle: 'legacy' },
          visualizations: {}
        }
      }
    })

    expect(recipe?.editorLocations).toEqual(['Dashboard Settings > Title Style'])
  })

  it.each([
    ['chart', { type: 'chart', title: 'Chart title', showTitle: true }],
    ['map', { type: 'map', general: { title: 'Map title', showTitle: true, titleStyle: 'small' } }],
    [
      'markup include',
      { type: 'markup-include', contentEditor: { title: 'Markup title', style: 'tp5', titleStyle: 'small' } }
    ]
  ])('uses a large dashboard title when a placed %s has a visible title', (_type, childConfig) => {
    const originalConfig = {
      type: 'dashboard',
      dashboard: { title: 'Dashboard title', titleStyle: 'small' },
      rows: [{ columns: [{ width: 12, widget: 'child1' }] }],
      visualizations: { child1: childConfig }
    }
    const recipe = getModernizationRecipe(originalConfig) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, originalConfig)

    expect(recipe.editorLocationDetails).toContainEqual({ path: 'Dashboard Settings > Title Style', value: 'Large' })
    expect(modernizedConfig.dashboard.titleStyle).toBe('large')
    expect(originalConfig.dashboard.titleStyle).toBe('small')
  })

  it('uses a small dashboard title when eligible child titles are hidden or empty', () => {
    const originalConfig = {
      type: 'dashboard',
      dashboard: { title: 'Dashboard title', titleStyle: 'large' },
      rows: [
        {
          columns: [
            { width: 4, widget: 'chart1' },
            { width: 4, widget: 'map1' },
            { width: 4, widget: 'markup1' }
          ]
        }
      ],
      visualizations: {
        chart1: { type: 'chart', title: 'Hidden chart title', showTitle: false },
        map1: { type: 'map', general: { title: 'Hidden map title', showTitle: false, titleStyle: 'small' } },
        markup1: { type: 'markup-include', contentEditor: { title: '   ', style: 'tp5', titleStyle: 'small' } }
      }
    }
    const recipe = getModernizationRecipe(originalConfig) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, originalConfig)

    expect(recipe.editorLocationDetails).toContainEqual({ path: 'Dashboard Settings > Title Style', value: 'Small' })
    expect(modernizedConfig.dashboard.titleStyle).toBe('small')
  })

  it('does not count titled data bites, waffle charts, or unplaced visualizations as titled children', () => {
    const originalConfig = {
      type: 'dashboard',
      dashboard: { title: 'Dashboard title', titleStyle: 'large' },
      rows: [
        {
          columns: [
            { width: 6, widget: 'bite1' },
            { width: 6, widget: 'waffle1' }
          ]
        }
      ],
      visualizations: {
        bite1: { type: 'data-bite', title: 'Data bite title', visual: { showTitle: true }, biteStyle: 'tp5' },
        waffle1: { type: 'waffle-chart', title: 'Waffle title', showTitle: true, visualizationType: 'TP5 Waffle' },
        orphanChart: { type: 'chart', title: 'Unplaced chart title', showTitle: true }
      }
    }
    const recipe = getModernizationRecipe(originalConfig) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, originalConfig)

    expect(modernizedConfig.dashboard.titleStyle).toBe('small')
  })

  it('counts titled visualizations from every conditional widget branch', () => {
    const originalConfig = {
      type: 'dashboard',
      dashboard: { title: 'Dashboard title', titleStyle: 'small' },
      rows: [
        {
          columns: [
            {
              width: 12,
              conditionalWidgets: [{ widget: 'table1' }, { widget: 'map1', dashboardCondition: { conditions: [] } }]
            }
          ]
        }
      ],
      visualizations: {
        table1: { type: 'table', table: { label: 'Data Table' } },
        map1: { type: 'map', general: { title: 'Conditional map title', showTitle: true, titleStyle: 'small' } }
      }
    }
    const recipe = getModernizationRecipe(originalConfig) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, originalConfig)

    expect(modernizedConfig.dashboard.titleStyle).toBe('large')
  })

  it('evaluates title hierarchy independently for each multidashboard', () => {
    const originalConfig = {
      type: 'dashboard',
      dashboard: { titleStyle: 'small' },
      rows: [],
      visualizations: {},
      multiDashboards: [
        {
          label: 'Titled chart tab',
          dashboard: { titleStyle: 'small' },
          rows: [{ columns: [{ width: 12, widget: 'chart1' }] }],
          visualizations: { chart1: { type: 'chart', title: 'Chart title', showTitle: true } }
        },
        {
          label: 'Untitled tab',
          dashboard: { titleStyle: 'large' },
          rows: [{ columns: [{ width: 12, widget: 'bite1' }] }],
          visualizations: { bite1: { type: 'data-bite', title: 'Data bite title', biteStyle: 'tp5' } }
        }
      ]
    }
    const recipe = getModernizationRecipe(originalConfig) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, originalConfig)

    expect(modernizedConfig.multiDashboards[0].dashboard.titleStyle).toBe('large')
    expect(modernizedConfig.multiDashboards[1].dashboard.titleStyle).toBe('small')
  })

  it('updates enabled dashboard image downloads from button to link style without mutating the original', () => {
    const originalConfig = {
      type: 'dashboard',
      dashboard: {
        titleStyle: 'small',
        downloads: {
          downloadImageButton: true,
          downloadImageButtonStyle: 'button',
          downloadImageLabel: 'Save dashboard image',
          downloadPdfButton: true
        }
      },
      visualizations: {}
    }
    const recipe = getModernizationRecipe(originalConfig) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, originalConfig)

    expect(recipe.editorLocations).toEqual(['Dashboard Settings > Image download control'])
    expect(recipe.editorLocationDetails).toEqual([
      { path: 'Dashboard Settings > Image download control', value: 'Download Image Link' }
    ])
    expect(modernizedConfig.dashboard.downloads).toEqual({
      ...originalConfig.dashboard.downloads,
      downloadImageButtonStyle: 'link'
    })
    expect(originalConfig.dashboard.downloads.downloadImageButtonStyle).toBe('button')
  })

  it('treats a missing enabled dashboard image download style as legacy button style', () => {
    const originalConfig = {
      type: 'dashboard',
      dashboard: {
        titleStyle: 'small',
        downloads: { downloadImageButton: true }
      },
      visualizations: {}
    }
    const recipe = getModernizationRecipe(originalConfig) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, originalConfig)

    expect(recipe.editorLocations).toEqual(['Dashboard Settings > Image download control'])
    expect(modernizedConfig.dashboard.downloads.downloadImageButtonStyle).toBe('link')
    expect(originalConfig.dashboard.downloads).not.toHaveProperty('downloadImageButtonStyle')
  })

  it('does not update dashboard image download styles when the control is disabled or already a link', () => {
    expect(
      getModernizationRecipe({
        type: 'dashboard',
        dashboard: {
          titleStyle: 'small',
          downloads: { downloadImageButton: false, downloadImageButtonStyle: 'button' }
        },
        visualizations: {}
      })
    ).toBeUndefined()

    expect(
      getModernizationRecipe({
        type: 'dashboard',
        dashboard: {
          titleStyle: 'small',
          downloads: { downloadImageButton: true, downloadImageButtonStyle: 'link' }
        },
        visualizations: {}
      })
    ).toBeUndefined()
  })

  it('modernizes map title style without mutating the original', () => {
    const originalConfig = {
      type: 'map',
      general: {
        title: 'Legacy map',
        titleStyle: 'legacy',
        showTitle: true
      },
      legend: { type: 'equalnumber', position: 'side', hideBorder: false, style: 'circles' }
    }
    const recipe = getModernizationRecipe(originalConfig) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, originalConfig)

    expect(recipe.editorLocations).toEqual(['General > Title Style'])
    expect(modernizedConfig).not.toBe(originalConfig)
    expect(modernizedConfig.general.titleStyle).toBe('small')
    expect(modernizedConfig.general.title).toBe('Legacy map')
    expect(modernizedConfig.legend.position).toBe('side')
    expect(modernizedConfig.legend.hideBorder).toBe(false)
    expect(modernizedConfig.legend.style).toBe('circles')
    expect(originalConfig.general.titleStyle).toBe('legacy')
    expect(originalConfig.legend.position).toBe('side')
    expect(originalConfig.legend.hideBorder).toBe(false)
  })

  it('collapses the map data table by default as an atomic upgrade', () => {
    const config = {
      type: 'map',
      general: { titleStyle: 'small', geoType: 'world' },
      legend: { type: 'equalnumber', numberOfItems: 6, position: 'top', hideBorder: true, style: 'gradient' },
      table: { expanded: true, label: 'Supporting data' }
    }
    const recipe = getModernizationRecipe(config) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, config)

    expect(recipe.editorLocations).toEqual(['Data Table > Map loads with data table expanded'])
    expect(recipe.editorLocationDetails).toEqual([
      { path: 'Data Table > Map loads with data table expanded', value: 'Off' }
    ])
    expect(modernizedConfig.table).toEqual({ expanded: false, label: 'Supporting data' })
    expect(config.table).toEqual({ expanded: true, label: 'Supporting data' })
  })

  it('does not modernize a map data table that already loads collapsed', () => {
    const config = {
      type: 'map',
      general: { titleStyle: 'small', geoType: 'world' },
      legend: { type: 'equalnumber', numberOfItems: 6, position: 'top', hideBorder: true, style: 'gradient' },
      table: { expanded: false }
    }

    expect(getModernizationRecipe(config)).toBeUndefined()
  })

  it('shows labels on non-hex US maps as an atomic upgrade', () => {
    const config = {
      type: 'map',
      general: {
        titleStyle: 'small',
        geoType: 'us',
        displayAsHex: false,
        displayStateLabels: false
      },
      legend: { type: 'equalnumber', numberOfItems: 6, position: 'top', hideBorder: true, style: 'gradient' }
    }
    const recipe = getModernizationRecipe(config) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, config)

    expect(recipe.editorLocations).toEqual(['Type > Show State Labels'])
    expect(recipe.editorLocationDetails).toEqual([{ path: 'Type > Show State Labels', value: 'On' }])
    expect(modernizedConfig.general).toEqual({ ...config.general, displayStateLabels: true })
    expect(config.general.displayStateLabels).toBe(false)
  })

  it.each([
    ['hex map', { geoType: 'us', displayAsHex: true, displayStateLabels: false }],
    ['county map', { geoType: 'us-county', displayAsHex: false, displayStateLabels: false }],
    ['world map', { geoType: 'world', displayAsHex: false, displayStateLabels: false }]
  ])('does not modernize state labels for a %s', (_scenario, general) => {
    const recipe = getModernizationRecipe({
      type: 'map',
      general: { titleStyle: 'small', ...general },
      legend: { type: 'equalnumber', numberOfItems: 6, position: 'top', hideBorder: true, style: 'gradient' }
    })

    expect(recipe).toBeUndefined()
  })

  it('reports dashboard map settings with a deduped map prefix', () => {
    const recipe = getModernizationRecipe({
      type: 'dashboard',
      dashboard: { titleStyle: 'small' },
      visualizations: {
        map1: {
          type: 'map',
          general: { titleStyle: 'legacy', geoType: 'us', displayAsHex: false, displayStateLabels: false },
          legend: { position: 'side', hideBorder: false }
        },
        map2: {
          type: 'map',
          general: { titleStyle: 'legacy', geoType: 'us', displayAsHex: false, displayStateLabels: false },
          legend: { position: 'side', hideBorder: false }
        }
      }
    })

    expect(recipe?.editorLocations).toEqual(['Maps > General > Title Style', 'Maps > Type > Show State Labels'])
  })

  it('does not select a map recipe for side position alone', () => {
    const recipe = getModernizationRecipe({
      type: 'map',
      general: { titleStyle: 'small' },
      legend: { position: 'side', hideBorder: true }
    })

    expect(recipe).toBeUndefined()
  })

  it('does not select a map recipe for hide border alone', () => {
    const recipe = getModernizationRecipe({
      type: 'map',
      general: { titleStyle: 'small' },
      legend: { position: 'bottom', hideBorder: false }
    })

    expect(recipe).toBeUndefined()
  })

  it('modernizes numeric map legend style when the legend can fit as a gradient', () => {
    const recipe = getModernizationRecipe({
      type: 'map',
      general: { titleStyle: 'small' },
      legend: { type: 'equalnumber', numberOfItems: 5, position: 'side', hideBorder: true, style: 'circles' }
    }) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, {
      type: 'map',
      general: { titleStyle: 'small' },
      legend: { type: 'equalnumber', numberOfItems: 5, position: 'side', hideBorder: true, style: 'circles' }
    })

    expect(recipe.editorLocations).toEqual(['Legend > Legend Position', 'Legend > Legend Style'])
    expect(modernizedConfig.legend.position).toBe('top')
    expect(modernizedConfig.legend.hideBorder).toBe(true)
    expect(modernizedConfig.legend.style).toBe('gradient')
  })

  it('quietly removes the legend box when moving an eligible map legend to a gradient at the top', () => {
    const config = {
      type: 'map',
      general: { titleStyle: 'small' },
      legend: { type: 'equalnumber', numberOfItems: 5, position: 'bottom', hideBorder: false, style: 'boxes' }
    }
    const recipe = getModernizationRecipe(config) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, config)

    expect(recipe.editorLocations).toEqual(['Legend > Legend Position', 'Legend > Legend Style'])
    expect(recipe.editorLocationDetails).toEqual([
      { path: 'Legend > Legend Position', value: 'Top' },
      { path: 'Legend > Legend Style', value: 'Gradient' }
    ])
    expect(modernizedConfig.legend.position).toBe('top')
    expect(modernizedConfig.legend.style).toBe('gradient')
    expect(modernizedConfig.legend.hideBorder).toBe(true)
  })

  it('only reports legend style when eligible map legends are already at the top', () => {
    const config = {
      type: 'map',
      general: { titleStyle: 'small' },
      legend: { type: 'equalnumber', numberOfItems: 5, position: 'top', hideBorder: true, style: 'circles' }
    }
    const recipe = getModernizationRecipe(config) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, config)

    expect(recipe.editorLocations).toEqual(['Legend > Legend Style'])
    expect(modernizedConfig.legend.position).toBe('top')
    expect(modernizedConfig.legend.style).toBe('gradient')
  })

  it('quietly removes the legend box when an eligible top map legend becomes a gradient', () => {
    const config = {
      type: 'map',
      general: { titleStyle: 'small' },
      legend: { type: 'equalnumber', numberOfItems: 5, position: 'top', hideBorder: false, style: 'circles' }
    }
    const recipe = getModernizationRecipe(config) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, config)

    expect(recipe.editorLocations).toEqual(['Legend > Legend Style'])
    expect(modernizedConfig.legend.position).toBe('top')
    expect(modernizedConfig.legend.style).toBe('gradient')
    expect(modernizedConfig.legend.hideBorder).toBe(true)
  })

  it('does not modernize numeric map legend style when there are too many legend items', () => {
    const recipe = getModernizationRecipe({
      type: 'map',
      general: { titleStyle: 'small' },
      legend: { type: 'equalnumber', numberOfItems: 6, position: 'bottom', hideBorder: true, style: 'circles' }
    })

    expect(recipe).toBeUndefined()
  })

  it('modernizes categorical map legend style when categories are numeric bins', () => {
    const config = {
      type: 'map',
      general: { titleStyle: 'small' },
      columns: { primary: { name: 'bin' } },
      legend: { type: 'category', position: 'bottom', hideBorder: true, style: 'boxes', specialClasses: [] },
      data: [{ bin: '0 - 4' }, { bin: '5 - 9' }, { bin: '10+' }]
    }
    const recipe = getModernizationRecipe(config) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, config)

    expect(recipe.editorLocations).toEqual(['Legend > Legend Position', 'Legend > Legend Style'])
    expect(modernizedConfig.legend.position).toBe('top')
    expect(modernizedConfig.legend.style).toBe('gradient')
  })

  it('does not modernize categorical map legend style when categories are not numeric bins', () => {
    const recipe = getModernizationRecipe({
      type: 'map',
      general: { titleStyle: 'small' },
      columns: { primary: { name: 'status' } },
      legend: { type: 'category', position: 'bottom', hideBorder: true, style: 'boxes', specialClasses: [] },
      data: [{ status: 'Urban' }, { status: 'Rural' }]
    })

    expect(recipe).toBeUndefined()
  })

  it('does not modernize categorical map legend style when numeric bins exceed the gradient item limit', () => {
    const recipe = getModernizationRecipe({
      type: 'map',
      general: { titleStyle: 'small' },
      columns: { primary: { name: 'bin' } },
      legend: { type: 'category', position: 'bottom', hideBorder: true, style: 'boxes', specialClasses: [] },
      data: [
        { bin: '0 - 4' },
        { bin: '5 - 9' },
        { bin: '10 - 14' },
        { bin: '15 - 19' },
        { bin: '20 - 24' },
        { bin: '25+' }
      ]
    })

    expect(recipe).toBeUndefined()
  })

  it('ignores map special classes when checking categorical numeric bins', () => {
    const config = {
      type: 'map',
      general: { titleStyle: 'small' },
      columns: { primary: { name: 'bin' } },
      legend: {
        type: 'category',
        position: 'bottom',
        hideBorder: true,
        style: 'boxes',
        specialClasses: [{ key: 'bin', value: 'N/A', label: 'Not available' }]
      },
      data: [{ bin: '0 - 4' }, { bin: '5 - 9' }, { bin: 'N/A' }]
    }
    const recipe = getModernizationRecipe(config) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, config)

    expect(recipe.editorLocations).toEqual(['Legend > Legend Position', 'Legend > Legend Style'])
    expect(modernizedConfig.legend.position).toBe('top')
    expect(modernizedConfig.legend.style).toBe('gradient')
  })

  it('modernizes data bite style and comma formatting without mutating the original', () => {
    const originalConfig = {
      type: 'data-bite',
      title: 'Legacy data bite',
      biteStyle: 'title',
      dataFormat: {
        commas: false,
        suffix: '%'
      }
    }
    const recipe = getModernizationRecipe(originalConfig) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, originalConfig)

    expect(recipe.id).toBe('modernize-data-bite')
    expect(recipe.editorLocations).toEqual(['General > Data Bite Style', 'Data > Add Commas'])
    expect(recipe.editorLocationDetails).toEqual([
      { path: 'General > Data Bite Style', value: 'TP5' },
      { path: 'Data > Add Commas', value: 'On' }
    ])
    expect(modernizedConfig).not.toBe(originalConfig)
    expect(modernizedConfig.biteStyle).toBe('tp5')
    expect(modernizedConfig.dataFormat.commas).toBe(true)
    expect(modernizedConfig.dataFormat.suffix).toBe('%')
    expect(originalConfig.biteStyle).toBe('title')
    expect(originalConfig.dataFormat.commas).toBe(false)
  })

  it('only reports data bite settings that actually change', () => {
    const recipe = getModernizationRecipe({
      type: 'data-bite',
      biteStyle: 'tp5',
      dataFormat: {
        commas: false
      }
    })

    expect(recipe?.editorLocations).toEqual(['Data > Add Commas'])
  })

  it('does not select a data bite recipe when style and commas are already modernized', () => {
    const recipe = getModernizationRecipe({
      type: 'data-bite',
      biteStyle: 'tp5',
      dataFormat: {
        commas: true
      }
    })

    expect(recipe).toBeUndefined()
  })

  it('modernizes legacy waffle charts to TP5 waffle charts with comma formatting', () => {
    const originalConfig = {
      type: 'waffle-chart',
      visualizationType: 'Waffle',
      showPercent: false,
      showDenominator: true,
      valueDescription: 'out of'
    }
    const recipe = getModernizationRecipe(originalConfig) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, originalConfig)

    expect(recipe.id).toBe('modernize-waffle-chart')
    expect(recipe.editorLocations).toEqual(['General > Chart Type', 'Data > Add Commas'])
    expect(recipe.editorLocationDetails).toEqual([
      { path: 'General > Chart Type', value: 'TP5 Waffle' },
      { path: 'Data > Add Commas', value: 'On' }
    ])
    expect(modernizedConfig.visualizationType).toBe('TP5 Waffle')
    expect(modernizedConfig.dataFormat.commas).toBe(true)
    expect(modernizedConfig.showPercent).toBe(false)
    expect(modernizedConfig.showDenominator).toBe(true)
    expect(modernizedConfig.valueDescription).toBe('out of')
    expect(originalConfig.visualizationType).toBe('Waffle')
    expect(originalConfig.dataFormat).toBeUndefined()
  })

  it('modernizes missing and legacy package-name waffle chart types to TP5 waffle charts', () => {
    expect(
      applyModernizationRecipe(
        getModernizationRecipe({ type: 'waffle-chart', visualizationType: 'waffle-chart' }) as ModernizationRecipe,
        { type: 'waffle-chart', visualizationType: 'waffle-chart' }
      ).visualizationType
    ).toBe('TP5 Waffle')

    expect(
      applyModernizationRecipe(getModernizationRecipe({ type: 'waffle-chart' }) as ModernizationRecipe, {
        type: 'waffle-chart'
      }).visualizationType
    ).toBe('TP5 Waffle')
  })

  it('modernizes legacy gauge charts to TP5 gauge charts', () => {
    const recipe = getModernizationRecipe({
      type: 'waffle-chart',
      visualizationType: 'Gauge'
    }) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, {
      type: 'waffle-chart',
      visualizationType: 'Gauge'
    })

    expect(recipe.editorLocations).toEqual(['General > Chart Type', 'Data > Add Commas'])
    expect(modernizedConfig.visualizationType).toBe('TP5 Gauge')
    expect(modernizedConfig.dataFormat.commas).toBe(true)
  })

  it.each(['TP5 Waffle', 'TP5 Gauge'])('adds comma formatting to an already-modern %s', visualizationType => {
    const originalConfig = {
      type: 'waffle-chart',
      visualizationType,
      dataFormat: { commas: false, customSetting: 'preserved' }
    }
    const recipe = getModernizationRecipe(originalConfig) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, originalConfig)

    expect(recipe.editorLocations).toEqual(['Data > Add Commas'])
    expect(recipe.editorLocationDetails).toEqual([{ path: 'Data > Add Commas', value: 'On' }])
    expect(modernizedConfig.dataFormat).toEqual({ commas: true, customSetting: 'preserved' })
    expect(originalConfig.dataFormat.commas).toBe(false)
  })

  it('does not select a waffle chart recipe when its type and comma formatting are already modern', () => {
    expect(
      getModernizationRecipe({
        type: 'waffle-chart',
        visualizationType: 'TP5 Waffle',
        dataFormat: { commas: true }
      })
    ).toBeUndefined()
    expect(
      getModernizationRecipe({
        type: 'waffle-chart',
        visualizationType: 'TP5 Gauge',
        dataFormat: { commas: true }
      })
    ).toBeUndefined()
  })

  it('modernizes dashboard data bites, waffle charts, and gauge charts recursively', () => {
    const originalConfig = {
      type: 'dashboard',
      dashboard: { titleStyle: 'small' },
      visualizations: {
        bite1: { type: 'data-bite', biteStyle: 'title', dataFormat: { commas: false } },
        bite2: { type: 'data-bite', biteStyle: 'tp5', dataFormat: { commas: false } },
        waffle1: {
          type: 'waffle-chart',
          visualizationType: 'Waffle',
          showPercent: false,
          showDenominator: true,
          valueDescription: 'out of'
        },
        gauge1: { type: 'waffle-chart', visualizationType: 'Gauge' },
        nestedDashboard: {
          type: 'dashboard',
          visualizations: {
            nestedBite: { type: 'data-bite', biteStyle: 'graphic', dataFormat: { commas: true } },
            nestedWaffle: { type: 'waffle-chart', visualizationType: 'waffle-chart' }
          }
        }
      }
    }
    const recipe = getModernizationRecipe(originalConfig) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, originalConfig)

    expect(recipe.editorLocations).toEqual([
      'Data Bites > General > Data Bite Style',
      'Data Bites > Data > Add Commas',
      'Waffle Charts > General > Chart Type',
      'Waffle Charts > Data > Add Commas',
      'Gauge Charts > General > Chart Type',
      'Gauge Charts > Data > Add Commas'
    ])
    expect(modernizedConfig.visualizations.bite1.biteStyle).toBe('tp5')
    expect(modernizedConfig.visualizations.bite1.dataFormat.commas).toBe(true)
    expect(modernizedConfig.visualizations.bite2.dataFormat.commas).toBe(true)
    expect(modernizedConfig.visualizations.waffle1.visualizationType).toBe('TP5 Waffle')
    expect(modernizedConfig.visualizations.waffle1.dataFormat.commas).toBe(true)
    expect(modernizedConfig.visualizations.waffle1.showPercent).toBe(false)
    expect(modernizedConfig.visualizations.waffle1.showDenominator).toBe(true)
    expect(modernizedConfig.visualizations.waffle1.valueDescription).toBe('out of')
    expect(modernizedConfig.visualizations.gauge1.visualizationType).toBe('TP5 Gauge')
    expect(modernizedConfig.visualizations.gauge1.dataFormat.commas).toBe(true)
    expect(modernizedConfig.visualizations.nestedDashboard.visualizations.nestedBite.biteStyle).toBe('tp5')
    expect(modernizedConfig.visualizations.nestedDashboard.visualizations.nestedWaffle.visualizationType).toBe(
      'TP5 Waffle'
    )
    expect(modernizedConfig.visualizations.nestedDashboard.visualizations.nestedWaffle.dataFormat.commas).toBe(true)
    expect(originalConfig.visualizations.bite1.biteStyle).toBe('title')
    expect(originalConfig.visualizations.waffle1.visualizationType).toBe('Waffle')
  })

  it('modernizes non-TP5 markup include title styles without mutating the original', () => {
    const originalConfig = {
      type: 'markup-include',
      contentEditor: {
        style: 'default',
        title: 'Legacy markup',
        titleStyle: 'legacy',
        inlineHTML: '<p>Body</p>'
      }
    }
    const recipe = getModernizationRecipe(originalConfig) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, originalConfig)

    expect(recipe.id).toBe('modernize-markup-include')
    expect(recipe.editorLocations).toEqual(['General > Title Style'])
    expect(modernizedConfig).not.toBe(originalConfig)
    expect(modernizedConfig.contentEditor.titleStyle).toBe('small')
    expect(modernizedConfig.contentEditor.title).toBe('Legacy markup')
    expect(modernizedConfig.contentEditor.inlineHTML).toBe('<p>Body</p>')
    expect(originalConfig.contentEditor.titleStyle).toBe('legacy')
  })

  it('modernizes non-TP5 markup include title styles when stale configs omit the field', () => {
    const originalConfig = {
      type: 'markup-include',
      contentEditor: {
        style: 'default',
        title: 'Stale markup include'
      }
    }
    const recipe = getModernizationRecipe(originalConfig) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, originalConfig)

    expect(recipe.editorLocations).toEqual(['General > Title Style'])
    expect(modernizedConfig.contentEditor.titleStyle).toBe('small')
    expect(originalConfig.contentEditor.titleStyle).toBeUndefined()
  })

  it('modernizes non-TP5 markup include title styles when stale configs store an empty string', () => {
    const originalConfig = {
      type: 'markup-include',
      contentEditor: {
        style: 'default',
        title: 'Stale markup include',
        titleStyle: ''
      }
    }
    const recipe = getModernizationRecipe(originalConfig) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, originalConfig)

    expect(recipe.editorLocations).toEqual(['General > Title Style'])
    expect(modernizedConfig.contentEditor.titleStyle).toBe('small')
    expect(originalConfig.contentEditor.titleStyle).toBe('')
  })

  it('does not modernize TP5 markup include title styles', () => {
    const recipe = getModernizationRecipe({
      type: 'markup-include',
      contentEditor: {
        style: 'tp5',
        titleStyle: 'legacy'
      }
    })

    expect(recipe).toBeUndefined()
  })

  it('does not select a markup include recipe when title style is already modernized', () => {
    const recipe = getModernizationRecipe({
      type: 'markup-include',
      contentEditor: {
        style: 'default',
        titleStyle: 'small'
      }
    })

    expect(recipe).toBeUndefined()
  })

  it('modernizes dashboard markup includes recursively with a deduped prefix', () => {
    const originalConfig = {
      type: 'dashboard',
      dashboard: { titleStyle: 'small' },
      visualizations: {
        markup1: { type: 'markup-include', contentEditor: { style: 'default', titleStyle: 'legacy' } },
        markup2: { type: 'markup-include', contentEditor: { title: 'Missing title style' } },
        markup3: { type: 'markup-include', contentEditor: { title: 'Empty title style', titleStyle: '' } },
        tp5Markup: { type: 'markup-include', contentEditor: { style: 'tp5', titleStyle: 'legacy' } },
        nestedDashboard: {
          type: 'dashboard',
          visualizations: {
            nestedMarkup: { type: 'markup-include', contentEditor: { style: 'default', titleStyle: 'legacy' } }
          }
        }
      }
    }
    const recipe = getModernizationRecipe(originalConfig) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, originalConfig)

    expect(recipe.editorLocations).toEqual(['Markup Includes > General > Title Style'])
    expect(modernizedConfig.visualizations.markup1.contentEditor.titleStyle).toBe('small')
    expect(modernizedConfig.visualizations.markup2.contentEditor.titleStyle).toBe('small')
    expect(modernizedConfig.visualizations.markup3.contentEditor.titleStyle).toBe('small')
    expect(modernizedConfig.visualizations.tp5Markup.contentEditor.titleStyle).toBe('legacy')
    expect(modernizedConfig.visualizations.nestedDashboard.visualizations.nestedMarkup.contentEditor.titleStyle).toBe(
      'small'
    )
    expect(originalConfig.visualizations.markup1.contentEditor.titleStyle).toBe('legacy')
  })

  it('modernizes markup include title styles in the stale dataset keys dashboard fixture', () => {
    const recipe = getModernizationRecipe(staleDatasetKeysDashboard) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, staleDatasetKeysDashboard)

    expect(staleDatasetKeysDashboard.dashboard.titleStyle).toBeUndefined()
    expect(staleDatasetKeysDashboard.visualizations['intro-markup'].contentEditor.titleStyle).toBeUndefined()
    expect(staleDatasetKeysDashboard.visualizations['valid-row-chart'].contentEditor.titleStyle).toBeUndefined()
    expect(recipe.editorLocations).toContain('Dashboard Settings > Title Style')
    expect(recipe.editorLocations).toContain('Markup Includes > General > Title Style')
    expect(modernizedConfig.dashboard.titleStyle).toBe('large')
    expect(modernizedConfig.visualizations['intro-markup'].contentEditor.titleStyle).toBe('small')
    expect(modernizedConfig.visualizations['valid-row-chart'].contentEditor.titleStyle).toBe('small')
  })

  it('keeps the registry extensible for additional visualization types', () => {
    const dashboardRecipe: ModernizationRecipe = {
      id: 'dashboard-test',
      appliesTo: 'dashboard',
      apply: config => ({ ...config, dashboard: { ...(config.dashboard || {}), theme: 'theme-blue' } }),
      editorLocations: ['Dashboard settings > Theme']
    }

    modernizationRecipes.push(dashboardRecipe)

    try {
      expect(getModernizationRecipe({ type: 'dashboard' })?.id).toBe('dashboard-test')
    } finally {
      modernizationRecipes.pop()
    }
  })

  it('exposes chart changes as independently applicable options from the original snapshot', () => {
    const originalConfig = {
      type: 'chart',
      visualizationType: 'Bar',
      orientation: 'vertical',
      titleStyle: 'legacy',
      yAxis: { titlePlacement: 'side', numTicks: 7 }
    }
    const recipe = getModernizationRecipe(originalConfig) as ModernizationRecipe
    const options = getModernizationOptions(recipe)
    const titleOption = options.find(option => option.id === 'chart-title-style')

    expect(options.map(option => option.id)).toContain('chart-y-axis-title-placement')
    expect(titleOption?.label).toBe('Use small title style')
    expect(titleOption?.editorLocationDetails).toEqual([{ path: 'General > Title Style', value: 'Small' }])
    expect(titleOption?.apply(originalConfig as any)).toMatchObject({
      titleStyle: 'small',
      yAxis: { titlePlacement: 'side', numTicks: 7 }
    })
    expect(originalConfig.titleStyle).toBe('legacy')
  })

  it('keeps multiple breadcrumbs on one atomic option', () => {
    const recipe = getModernizationRecipe({
      type: 'chart',
      visualizationType: 'Bar',
      orientation: 'vertical',
      titleStyle: 'small',
      yAxis: { titlePlacement: 'top', numTicks: 4, min: 0, hideAxis: true, hideTicks: true, gridLines: true },
      isResponsiveTicks: false,
      xAxis: { type: 'date-time', numTicks: 3, viewportNumTicks: { xs: 2, xxs: 1 } },
      table: { expanded: false },
      legend: { position: 'top', singleRow: true },
      dataFormat: { commas: true }
    }) as ModernizationRecipe
    const option = getModernizationOptions(recipe).find(change => change.id === 'chart-x-axis-num-ticks')

    expect(option?.editorLocationDetails).toHaveLength(3)
  })

  it('exposes map changes as independently applicable options', () => {
    const originalConfig = {
      type: 'map',
      general: { geoType: 'us', displayAsHex: false, displayStateLabels: false, titleStyle: 'legacy' },
      table: { expanded: true }
    }
    const recipe = getModernizationRecipe(originalConfig) as ModernizationRecipe
    const options = getModernizationOptions(recipe)

    expect(options.map(option => option.id)).toEqual(
      expect.arrayContaining(['map-title-style', 'map-state-labels', 'map-table-expanded'])
    )
    const stateLabels = options.find(option => option.id === 'map-state-labels')
    expect(stateLabels?.apply(originalConfig as any).general.displayStateLabels).toBe(true)
    expect(stateLabels?.apply(originalConfig as any).general.titleStyle).toBe('legacy')
  })

  it('aggregates repeated dashboard changes and identifies mixed values', () => {
    const originalConfig = {
      type: 'dashboard',
      dashboard: { titleStyle: 'small' },
      visualizations: {},
      multiDashboards: [
        {
          type: 'dashboard',
          dashboard: { titleStyle: 'legacy' },
          rows: [],
          visualizations: {}
        },
        {
          type: 'dashboard',
          dashboard: { titleStyle: 'legacy' },
          rows: [{ columns: [{ widget: 'chart1' }] }],
          visualizations: { chart1: { type: 'chart', title: 'Child title', titleStyle: 'small' } }
        }
      ]
    }
    const recipe = getModernizationRecipe(originalConfig) as ModernizationRecipe
    const option = getModernizationOptions(recipe).find(change => change.id === 'dashboard-title-style')
    const modernized = option?.apply(originalConfig as any) as any

    expect(getModernizationOptions(recipe).filter(change => change.id === 'dashboard-title-style')).toHaveLength(1)
    expect(option?.editorLocationDetails).toEqual([
      { path: 'Dashboard Settings > Title Style', value: 'Varies by dashboard' }
    ])
    expect(modernized.multiDashboards[0].dashboard.titleStyle).toBe('small')
    expect(modernized.multiDashboards[1].dashboard.titleStyle).toBe('large')
  })

  it('applies one selectable child option across root, nested, and multidashboard occurrences', () => {
    const legacyChart = () => ({
      type: 'chart',
      visualizationType: 'Bar',
      orientation: 'vertical',
      titleStyle: 'legacy',
      yAxis: { titlePlacement: 'side' }
    })
    const originalConfig = {
      type: 'dashboard',
      dashboard: { titleStyle: 'small' },
      rows: [],
      visualizations: {
        rootChart: legacyChart(),
        nestedDashboard: {
          type: 'dashboard',
          dashboard: { titleStyle: 'small' },
          rows: [],
          visualizations: { nestedChart: legacyChart() }
        }
      },
      multiDashboards: [
        {
          dashboard: { titleStyle: 'small' },
          rows: [],
          visualizations: { tabChart: legacyChart() }
        }
      ]
    }
    const recipe = getModernizationRecipe(originalConfig) as ModernizationRecipe
    const options = getModernizationOptions(recipe)
    const titleOptions = options.filter(change => change.id === 'chart-title-style')
    const modernized = titleOptions[0].apply(originalConfig as any) as any

    expect(titleOptions).toHaveLength(1)
    expect(titleOptions[0].editorLocationDetails).toEqual([{ path: 'Charts > General > Title Style', value: 'Small' }])
    expect(modernized.visualizations.rootChart.titleStyle).toBe('small')
    expect(modernized.visualizations.nestedDashboard.visualizations.nestedChart.titleStyle).toBe('small')
    expect(modernized.multiDashboards[0].visualizations.tabChart.titleStyle).toBe('small')
    expect(modernized.visualizations.rootChart.yAxis.titlePlacement).toBe('side')
    expect(modernized.visualizations.nestedDashboard.visualizations.nestedChart.yAxis.titlePlacement).toBe('side')
    expect(modernized.multiDashboards[0].visualizations.tabChart.yAxis.titlePlacement).toBe('side')
  })

  it('provides a selectable fallback for legacy aggregate recipes', () => {
    const recipe: ModernizationRecipe = {
      id: 'legacy-custom',
      appliesTo: 'chart',
      apply: config => ({ ...config, titleStyle: 'small' }),
      editorLocations: ['General > Title Style']
    }
    const [option] = getModernizationOptions(recipe)

    expect(option).toMatchObject({ id: 'legacy-custom', label: 'Apply modernized styles' })
    expect(option.apply({ type: 'chart', titleStyle: 'legacy' }).titleStyle).toBe('small')
  })
})
