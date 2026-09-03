import {
  applyModernizationRecipe,
  getModernizationOptions,
  getModernizationRecipe,
  modernizationRecipes,
  ModernizationRecipe
} from './modernizationRecipes'
import dashboardGallery from '@cdc/dashboard/examples/dashboard-gallery.json'
import staleDatasetKeysDashboard from '@cdc/dashboard/examples/dashboard-stale-dataset-keys.json'

const getDateModernizationOptionIds = (
  dateDisplayFormat: string | null | undefined,
  dateParseFormat: string | undefined,
  tooltipDateDisplayFormat: string | null | undefined
) => {
  const recipe = getModernizationRecipe({
    type: 'chart',
    visualizationType: 'Line',
    orientation: 'vertical',
    titleStyle: 'legacy',
    xAxis: { type: 'date', dateDisplayFormat, dateParseFormat },
    tooltips: { dateDisplayFormat: tooltipDateDisplayFormat }
  }) as ModernizationRecipe

  return getModernizationOptions(recipe).map(option => option.id)
}

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

  it.each(['%Y-%m-%d', '%m/%d/%Y', '%d/%m/%Y'])(
    'modernizes the approved numeric date display format %s',
    dateDisplayFormat => {
      const optionIds = getDateModernizationOptionIds(dateDisplayFormat, '%Y-%m-%d', dateDisplayFormat)

      expect(optionIds).toContain('chart-date-display-format')
      expect(optionIds).toContain('chart-tooltip-date-display-format')
    }
  )

  it.each([undefined, null, ''])('uses the parse format when the axis display format is %s', dateDisplayFormat => {
    const optionIds = getDateModernizationOptionIds(dateDisplayFormat, '%m/%d/%Y', dateDisplayFormat)

    expect(optionIds).toContain('chart-date-display-format')
    expect(optionIds).toContain('chart-tooltip-date-display-format')
  })

  it('uses the ISO fallback when both axis display and parse formats are missing', () => {
    const optionIds = getDateModernizationOptionIds(undefined, undefined, undefined)

    expect(optionIds).toContain('chart-date-display-format')
    expect(optionIds).toContain('chart-tooltip-date-display-format')
  })

  it.each([
    ['an explicit year-only display', '%Y', '%Y'],
    ['a blank display that inherits a year-only parse format', '', '%Y'],
    ['an explicit month-and-year display', '%m/%Y', '%m/%Y']
  ])('preserves %s', (_scenario, dateDisplayFormat, dateParseFormat) => {
    const optionIds = getDateModernizationOptionIds(dateDisplayFormat, dateParseFormat, '')

    expect(optionIds).not.toContain('chart-date-display-format')
    expect(optionIds).not.toContain('chart-tooltip-date-display-format')
  })

  it('preserves an explicit custom tooltip date display when the axis format is replaceable', () => {
    const optionIds = getDateModernizationOptionIds('%Y-%m-%d', '%Y-%m-%d', '%Y')

    expect(optionIds).toContain('chart-date-display-format')
    expect(optionIds).not.toContain('chart-tooltip-date-display-format')
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

  it('does not modernize an omitted dashboard title style when the effective style is already small', () => {
    expect(
      getModernizationRecipe({
        type: 'dashboard',
        dashboard: { title: 'Dashboard title' },
        visualizations: {}
      })
    ).toBeUndefined()
  })

  it('selects the dashboard modernization recipe when a stale config has an empty dashboard title style', () => {
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
        min: -5
      },
      isResponsiveTicks: true,
      xAxis: {
        type: 'date-time',
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
      general: { palette: { name: 'qualitative_bold', version: '2.1', isReversed: true } },
      legend: { position: 'right', singleRow: false, hideBorder: { side: false, topBottom: false } },
      visual: { accent: false, background: false, border: true },
      visualizationType: 'Bar',
      barStyle: 'flat'
    }
    const recipe = getModernizationRecipe(originalConfig) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, originalConfig)

    expect(getModernizationOptions(recipe).find(option => option.id === 'chart-y-axis-num-ticks')?.label).toBe(
      'Use about four Y-axis ticks'
    )
    expect(recipe.editorLocations).toEqual([
      'General > Title Style',
      'Left Value Axis > Label Placement',
      'Left Value Axis > Number Of Ticks',
      'Left Value Axis > Show Gridlines',
      'Left Value Axis > Number Formatting > Add Commas',
      'Left Value Axis > Hide Axis',
      'Left Value Axis > Hide Ticks',
      'Left Value Axis > Value Axis Domain > Axis Min Value',
      'Left Value Axis > Value Axis Domain > Automatic Max Strategy',
      'Date/Category Axis > Axis Date Display Format',
      'Date/Category Axis > Hover Date Display Format',
      'Date/Category Axis > Number Of Ticks',
      'Date/Category Axis > Number Of Ticks: Viewport Overrides > xs',
      'Date/Category Axis > Number Of Ticks: Viewport Overrides > xxs',
      'Date/Category Axis > Use Responsive Ticks',
      'Date/Category Axis > Tick Rotation (Degrees)',
      'Legend > Position',
      'Legend > Single Row Legend',
      'Visual > Bar Thickness',
      'Data Table > Expanded by Default'
    ])
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
    expect(modernizedConfig.barThickness).toBe(0.8)
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
    expect(originalConfig.yAxis.min).toBe(-5)
    expect(originalConfig.isResponsiveTicks).toBe(true)
    expect(originalConfig.legend.position).toBe('right')
    expect(originalConfig.legend.singleRow).toBe(false)
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
          legend: { position: 'right', singleRow: false },
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
              legend: { position: 'right', singleRow: false },
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
              legend: { position: 'right', singleRow: false },
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
      barThickness: 0.8,
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

  it('does not modernize omitted bar borders because the chart runtime defaults them on', () => {
    const recipe = getModernizationRecipe({
      type: 'chart',
      visualizationType: 'Bar',
      orientation: 'vertical',
      titleStyle: 'small',
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
    })

    expect(getModernizationOptions(recipe as ModernizationRecipe).map(option => option.id)).toEqual([
      'chart-bar-thickness'
    ])
  })

  it('changes rounded Bar charts to the flat bar style without removing dormant rounding settings', () => {
    const config = {
      type: 'chart',
      visualizationType: 'Bar',
      barStyle: 'rounded',
      roundingStyle: 'shallow',
      tipRounding: 'top'
    }
    const recipe = getModernizationRecipe(config) as ModernizationRecipe
    const option = getModernizationOptions(recipe).find(option => option.id === 'chart-bar-style')
    const modernizedConfig = option?.apply(config as any)

    expect(option?.editorLocations).toEqual(['General > Bar Style'])
    expect(option?.editorLocationDetails).toEqual([{ path: 'General > Bar Style', value: 'Flat' }])
    expect(modernizedConfig).toEqual({ ...config, barStyle: 'flat' })
    expect(config.barStyle).toBe('rounded')
  })

  it.each([
    ['flat Bar chart', { visualizationType: 'Bar', barStyle: 'flat' }],
    ['lollipop Bar chart', { visualizationType: 'Bar', barStyle: 'lollipop' }],
    ['rounded Combo chart', { visualizationType: 'Combo', barStyle: 'rounded' }],
    ['rounded Deviation Bar chart', { visualizationType: 'Deviation Bar', barStyle: 'rounded' }]
  ])('does not modernize bar style for a %s', (_scenario, chartConfig) => {
    const recipe = getModernizationRecipe({ type: 'chart', ...chartConfig }) as ModernizationRecipe

    expect(getModernizationOptions(recipe).map(option => option.id)).not.toContain('chart-bar-style')
  })

  it('modernizes rounded Bar chart styles inside dashboards without changing other chart types', () => {
    const config = {
      type: 'dashboard',
      dashboard: { titleStyle: 'small' },
      visualizations: {
        roundedBar: { type: 'chart', visualizationType: 'Bar', barStyle: 'rounded' },
        flatBar: { type: 'chart', visualizationType: 'Bar', barStyle: 'flat' },
        roundedCombo: { type: 'chart', visualizationType: 'Combo', barStyle: 'rounded' }
      }
    }
    const recipe = getModernizationRecipe(config) as ModernizationRecipe
    const option = getModernizationOptions(recipe).find(option => option.id === 'chart-bar-style')
    const modernizedConfig = option?.apply(config as any)

    expect(option?.editorLocations).toEqual(['Charts > General > Bar Style'])
    expect(modernizedConfig.visualizations.roundedBar.barStyle).toBe('flat')
    expect(modernizedConfig.visualizations.flatBar.barStyle).toBe('flat')
    expect(modernizedConfig.visualizations.roundedCombo.barStyle).toBe('rounded')
    expect(config.visualizations.roundedBar.barStyle).toBe('rounded')
  })

  it.each([undefined, 0.35, '0.35', 0.37, '0.37'])(
    'modernizes legacy vertical bar thickness %s to a numeric 0.8',
    barThickness => {
      const config = {
        type: 'chart',
        visualizationType: 'Bar',
        orientation: 'vertical',
        ...(barThickness === undefined ? {} : { barThickness })
      }
      const recipe = getModernizationRecipe(config) as ModernizationRecipe
      const option = getModernizationOptions(recipe).find(option => option.id === 'chart-bar-thickness')

      expect(option?.editorLocations).toEqual(['Visual > Bar Thickness'])
      expect(option?.editorLocationDetails).toEqual([{ path: 'Visual > Bar Thickness', value: '0.8' }])
      expect(option?.apply(config as any).barThickness).toBe(0.8)
      expect(config).toEqual({
        type: 'chart',
        visualizationType: 'Bar',
        orientation: 'vertical',
        ...(barThickness === undefined ? {} : { barThickness })
      })
    }
  )

  it.each([
    ['modern value', { visualizationType: 'Bar', orientation: 'vertical', barThickness: 0.8 }],
    ['epi value', { visualizationType: 'Bar', orientation: 'vertical', barThickness: '0.95' }],
    ['custom value', { visualizationType: 'Bar', orientation: 'vertical', barThickness: 0.6 }],
    ['horizontal bar', { visualizationType: 'Bar', orientation: 'horizontal', barThickness: 0.35 }],
    ['combo chart', { visualizationType: 'Combo', orientation: 'vertical', barThickness: 0.35 }]
  ])('does not modernize bar thickness for a %s', (_scenario, chartConfig) => {
    const recipe = getModernizationRecipe({ type: 'chart', ...chartConfig }) as ModernizationRecipe

    expect(getModernizationOptions(recipe).map(option => option.id)).not.toContain('chart-bar-thickness')
  })

  it('modernizes a missing bar thickness inside a dashboard', () => {
    const config = {
      type: 'dashboard',
      dashboard: { titleStyle: 'small' },
      visualizations: {
        chart1: { type: 'chart', visualizationType: 'Bar', orientation: 'vertical' }
      }
    }
    const recipe = getModernizationRecipe(config) as ModernizationRecipe
    const option = getModernizationOptions(recipe).find(option => option.id === 'chart-bar-thickness')
    const modernizedConfig = option?.apply(config as any)

    expect(option?.editorLocations).toEqual(['Charts > Visual > Bar Thickness'])
    expect(modernizedConfig.visualizations.chart1.barThickness).toBe(0.8)
    expect(config.visualizations.chart1).not.toHaveProperty('barThickness')
  })

  it.each([undefined, null, '', 0, '0'])(
    'does not offer a zero minimum for a vertical bar chart with an automatic or zero minimum (%s)',
    min => {
      const recipe = getModernizationRecipe({
        type: 'chart',
        visualizationType: 'Bar',
        orientation: 'vertical',
        yAxis: min === undefined ? {} : { min }
      }) as ModernizationRecipe

      expect(getModernizationOptions(recipe).map(option => option.id)).not.toContain('chart-y-axis-min')
    }
  )

  it('offers a zero minimum for a vertical bar chart with an explicit negative minimum', () => {
    const recipe = getModernizationRecipe({
      type: 'chart',
      visualizationType: 'Bar',
      orientation: 'vertical',
      yAxis: { min: -5 }
    }) as ModernizationRecipe

    expect(getModernizationOptions(recipe).map(option => option.id)).toContain('chart-y-axis-min')
  })

  it.each([undefined, null, '', 0, '0'])(
    'does not offer a zero minimum for a vertical line chart with an automatic or zero minimum (%s)',
    min => {
      const recipe = getModernizationRecipe({
        type: 'chart',
        visualizationType: 'Line',
        orientation: 'vertical',
        yAxis: min === undefined ? {} : { min }
      }) as ModernizationRecipe

      expect(getModernizationOptions(recipe).map(option => option.id)).not.toContain('chart-y-axis-min')
    }
  )

  it('offers a zero minimum for a vertical line chart with an explicit negative minimum', () => {
    const recipe = getModernizationRecipe({
      type: 'chart',
      visualizationType: 'Line',
      orientation: 'vertical',
      yAxis: { min: -5 }
    }) as ModernizationRecipe

    expect(getModernizationOptions(recipe).map(option => option.id)).toContain('chart-y-axis-min')
  })

  it('does not offer ineffective chart changes for the categorical dashboard gallery chart', () => {
    const recipe = getModernizationRecipe(dashboardGallery) as ModernizationRecipe
    const optionIds = getModernizationOptions(recipe).map(option => option.id)

    expect(optionIds).not.toEqual(
      expect.arrayContaining([
        'chart-bar-borders',
        'chart-date-display-format',
        'chart-tooltip-date-display-format',
        'chart-x-axis-num-ticks',
        'chart-responsive-ticks'
      ])
    )
  })

  it('does not offer generic vertical value-axis changes for HeatMaps', () => {
    const recipe = getModernizationRecipe({
      type: 'chart',
      visualizationType: 'HeatMap',
      orientation: 'vertical',
      yAxis: {
        titlePlacement: 'side',
        numTicks: 7,
        gridLines: false,
        hideAxis: false,
        hideTicks: false,
        autoMaxStrategy: 'default'
      }
    }) as ModernizationRecipe
    const optionIds = getModernizationOptions(recipe).map(option => option.id)

    expect(optionIds).not.toEqual(
      expect.arrayContaining([
        'chart-y-axis-title-placement',
        'chart-y-axis-num-ticks',
        'chart-y-axis-grid-lines',
        'chart-y-axis-hide-axis',
        'chart-y-axis-hide-ticks',
        'chart-y-axis-auto-max-strategy'
      ])
    )
  })

  it('preserves the specialized Warming Stripes legend position', () => {
    const recipe = getModernizationRecipe({
      type: 'chart',
      visualizationType: 'Warming Stripes',
      orientation: 'vertical',
      legend: { position: 'bottom' }
    }) as ModernizationRecipe

    expect(getModernizationOptions(recipe).map(option => option.id)).not.toContain('chart-legend-position')
  })

  it('does not offer chart changes for omitted settings that inherit modern runtime defaults', () => {
    const verticalRecipe = getModernizationRecipe({
      type: 'chart',
      visualizationType: 'Line',
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
      legend: { position: 'top' },
      xAxis: { type: 'categorical' },
      table: { expanded: false },
      dataFormat: { commas: true }
    })
    const horizontalRecipe = getModernizationRecipe({
      type: 'chart',
      visualizationType: 'Bar',
      orientation: 'horizontal',
      titleStyle: 'small',
      barHasBorder: 'true',
      yAxis: {
        titlePlacement: 'top',
        autoMaxStrategy: 'clean-top-tick',
        gridLines: true,
        numTicks: 4,
        labelPlacement: 'On Date/Category Axis'
      },
      legend: { position: 'top', singleRow: true },
      xAxis: { hideAxis: true, hideTicks: true },
      table: { expanded: false },
      dataFormat: { commas: true },
      series: [{ dataKey: 'value', type: 'Bar' }]
    })

    expect(verticalRecipe).toBeUndefined()
    expect(horizontalRecipe).toBeUndefined()
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
      barThickness: 0.8,
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

  it('moves legacy horizontal-subtype bar labels to the date/category axis', () => {
    const config = {
      type: 'chart',
      visualizationType: 'Bar',
      visualizationSubType: 'horizontal',
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

    expect(getModernizationOptions(recipe)).toEqual(
      expect.arrayContaining([expect.objectContaining({ id: 'chart-horizontal-bar-label-placement' })])
    )
    expect(applyModernizationRecipe(recipe, config).yAxis.labelPlacement).toBe('On Date/Category Axis')
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

    expect(
      getModernizationOptions(recipe).find(option => option.id === 'chart-horizontal-value-axis-num-ticks')?.label
    ).toBe('Use about four horizontal value-axis ticks')
    expect(recipe.editorLocations).toEqual([
      'General > Title Style',
      'General > Label Placement',
      'Value Axis > Number Of Ticks',
      'Value Axis > Use Responsive Ticks',
      'Value Axis > Show Gridlines',
      'Value Axis > Number Formatting > Add Commas',
      'Value Axis > Hide Axis',
      'Value Axis > Hide Ticks',
      'Value Axis > Value Axis Domain > Automatic Max Strategy',
      'Date/Category Axis > Label Placement',
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
      'Value Axis > Number Of Ticks',
      'Value Axis > Use Responsive Ticks',
      'Value Axis > Show Gridlines',
      'Value Axis > Number Formatting > Add Commas',
      'Value Axis > Hide Axis',
      'Value Axis > Hide Ticks',
      'Value Axis > Value Axis Domain > Automatic Max Strategy',
      'Date/Category Axis > Label Placement'
    ])
    expect(recipe.editorLocationDetails).toEqual([
      { path: 'Value Axis > Number Of Ticks', value: '4' },
      { path: 'Value Axis > Use Responsive Ticks', value: 'Off' },
      { path: 'Value Axis > Show Gridlines', value: 'On' },
      { path: 'Value Axis > Number Formatting > Add Commas', value: 'On' },
      { path: 'Value Axis > Hide Axis', value: 'On' },
      { path: 'Value Axis > Hide Ticks', value: 'On' },
      { path: 'Value Axis > Value Axis Domain > Automatic Max Strategy', value: 'Clean Top Tick' },
      { path: 'Date/Category Axis > Label Placement', value: 'Top' }
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

    expect(recipe?.editorLocations).toEqual([
      'Charts > General > Title Style',
      'Charts > Visual > Bar Borders',
      'Charts > Visual > Bar Thickness'
    ])
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
        showTitle: true,
        palette: { name: 'qualitative_standard' }
      },
      legend: {
        type: 'equalnumber',
        position: 'top',
        hideBorder: false,
        style: 'circles',
        showSpecialClassesLast: true
      }
    }
    const recipe = getModernizationRecipe(originalConfig) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, originalConfig)

    expect(recipe.editorLocations).toEqual(['General > Title Style'])
    expect(modernizedConfig).not.toBe(originalConfig)
    expect(modernizedConfig.general.titleStyle).toBe('small')
    expect(modernizedConfig.general.title).toBe('Legacy map')
    expect(modernizedConfig.legend.position).toBe('top')
    expect(modernizedConfig.legend.hideBorder).toBe(false)
    expect(modernizedConfig.legend.style).toBe('circles')
    expect(originalConfig.general.titleStyle).toBe('legacy')
    expect(originalConfig.legend.position).toBe('top')
    expect(originalConfig.legend.hideBorder).toBe(false)
  })

  it('orders map changes to match the map editor sections', () => {
    const recipe = getModernizationRecipe({
      type: 'map',
      general: {
        titleStyle: 'legacy',
        geoType: 'us',
        displayAsHex: false,
        displayStateLabels: false
      },
      legend: { type: 'equalnumber', numberOfItems: 5, position: 'side', hideBorder: false, style: 'circles' },
      table: { expanded: true }
    }) as ModernizationRecipe

    expect(recipe.editorLocations).toEqual([
      'General > Title Style',
      'Type > Show State Labels',
      'Legend > Legend Position',
      'Legend > Legend Style',
      'Legend > Show Special Classes Last',
      'Data Table > Map loads with data table expanded'
    ])
  })

  it('collapses the map data table by default as an atomic upgrade', () => {
    const config = {
      type: 'map',
      general: { titleStyle: 'small', geoType: 'world' },
      legend: {
        type: 'equalnumber',
        numberOfItems: 6,
        position: 'top',
        hideBorder: true,
        style: 'gradient',
        showSpecialClassesLast: true
      },
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
      legend: {
        type: 'equalnumber',
        numberOfItems: 6,
        position: 'top',
        hideBorder: true,
        style: 'gradient',
        showSpecialClassesLast: true
      },
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
      legend: {
        type: 'equalnumber',
        numberOfItems: 6,
        position: 'top',
        hideBorder: true,
        style: 'gradient',
        showSpecialClassesLast: true
      }
    }
    const recipe = getModernizationRecipe(config) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, config)

    expect(recipe.editorLocations).toEqual(['Type > Show State Labels'])
    expect(recipe.editorLocationDetails).toEqual([{ path: 'Type > Show State Labels', value: 'On' }])
    expect(modernizedConfig.general).toEqual({ ...config.general, displayStateLabels: true })
    expect(config.general.displayStateLabels).toBe(false)
  })

  it('does not modernize omitted state labels because maps inherit the enabled runtime default', () => {
    expect(
      getModernizationRecipe({
        type: 'map',
        general: { titleStyle: 'small', geoType: 'us', displayAsHex: false },
        legend: {
          type: 'equalnumber',
          numberOfItems: 6,
          position: 'top',
          hideBorder: true,
          style: 'gradient',
          showSpecialClassesLast: true
        },
        table: { expanded: false }
      })
    ).toBeUndefined()
  })

  it.each([
    ['hex map', { geoType: 'us', displayAsHex: true, displayStateLabels: false }],
    ['county map', { geoType: 'us-county', displayAsHex: false, displayStateLabels: false }],
    ['world map', { geoType: 'world', displayAsHex: false, displayStateLabels: false }]
  ])('does not modernize state labels for a %s', (_scenario, general) => {
    const recipe = getModernizationRecipe({
      type: 'map',
      general: { titleStyle: 'small', ...general },
      legend: {
        type: 'equalnumber',
        numberOfItems: 6,
        position: 'top',
        hideBorder: true,
        style: 'gradient',
        showSpecialClassesLast: true
      }
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

    expect(recipe?.editorLocations).toEqual([
      'Maps > General > Title Style',
      'Maps > Type > Show State Labels',
      'Maps > Legend > Legend Position',
      'Maps > Legend > Show Special Classes Last'
    ])
  })

  it.each([false, undefined])(
    'shows special classes last as an atomic upgrade when the setting is %s',
    showSpecialClassesLast => {
      const config = {
        type: 'map',
        general: { titleStyle: 'small', geoType: 'world' },
        legend: {
          type: 'equalnumber',
          numberOfItems: 6,
          position: 'top',
          hideBorder: true,
          style: 'gradient',
          showSpecialClassesLast
        },
        table: { expanded: false }
      }
      const recipe = getModernizationRecipe(config) as ModernizationRecipe

      const modernizedConfig = applyModernizationRecipe(recipe, config)

      expect(recipe.editorLocations).toEqual(['Legend > Show Special Classes Last'])
      expect(recipe.editorLocationDetails).toEqual([{ path: 'Legend > Show Special Classes Last', value: 'On' }])
      expect(modernizedConfig.legend).toEqual({ ...config.legend, showSpecialClassesLast: true })
      expect(config.legend.showSpecialClassesLast).toBe(showSpecialClassesLast)
    }
  )

  it('does not modernize special-class order when special classes already appear last', () => {
    expect(
      getModernizationRecipe({
        type: 'map',
        general: { titleStyle: 'small', geoType: 'world' },
        legend: {
          type: 'equalnumber',
          numberOfItems: 6,
          position: 'top',
          hideBorder: true,
          style: 'gradient',
          showSpecialClassesLast: true
        },
        table: { expanded: false }
      })
    ).toBeUndefined()
  })

  it('moves a side map legend to the top and removes its border', () => {
    const config = {
      type: 'map',
      general: { titleStyle: 'small' },
      legend: { position: 'side', hideBorder: false, showSpecialClassesLast: true }
    }
    const recipe = getModernizationRecipe(config) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, config)

    expect(recipe.editorLocations).toEqual(['Legend > Legend Position'])
    expect(modernizedConfig.legend.position).toBe('top')
    expect(modernizedConfig.legend.hideBorder).toBe(true)
  })

  it('does not select a map recipe for hide border alone', () => {
    const recipe = getModernizationRecipe({
      type: 'map',
      general: { titleStyle: 'small' },
      legend: { position: 'top', hideBorder: false, showSpecialClassesLast: true }
    })

    expect(recipe).toBeUndefined()
  })

  it('uses a single-row layout for a non-gradient map legend with an explicit false setting', () => {
    const config = {
      type: 'map',
      general: { titleStyle: 'small' },
      legend: { position: 'top', style: 'boxes', singleRow: false, showSpecialClassesLast: true }
    }
    const recipe = getModernizationRecipe(config) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, config)

    expect(recipe.editorLocations).toEqual(['Legend > Single Row Legend'])
    expect(recipe.editorLocationDetails).toEqual([{ path: 'Legend > Single Row Legend', value: 'On' }])
    expect(modernizedConfig.legend.singleRow).toBe(true)
    expect(config.legend.singleRow).toBe(false)
  })

  it.each([undefined, true])('does not select a single-row map recipe when the setting is %s', singleRow => {
    const recipe = getModernizationRecipe({
      type: 'map',
      general: { titleStyle: 'small' },
      legend: { position: 'top', style: 'boxes', singleRow, showSpecialClassesLast: true }
    })

    expect(recipe).toBeUndefined()
  })

  it('does not select a single-row map recipe for a gradient legend', () => {
    const recipe = getModernizationRecipe({
      type: 'map',
      general: { titleStyle: 'small' },
      legend: { position: 'top', style: 'gradient', singleRow: false, showSpecialClassesLast: true }
    })

    expect(recipe).toBeUndefined()
  })

  it('modernizes numeric map legend style when the legend can fit as a gradient', () => {
    const recipe = getModernizationRecipe({
      type: 'map',
      general: { titleStyle: 'small' },
      legend: {
        type: 'equalnumber',
        numberOfItems: 5,
        position: 'side',
        hideBorder: true,
        style: 'circles',
        singleRow: false,
        showSpecialClassesLast: true
      }
    }) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, {
      type: 'map',
      general: { titleStyle: 'small' },
      legend: {
        type: 'equalnumber',
        numberOfItems: 5,
        position: 'side',
        hideBorder: true,
        style: 'circles',
        singleRow: false,
        showSpecialClassesLast: true
      }
    })

    expect(recipe.editorLocations).toEqual(['Legend > Legend Position', 'Legend > Legend Style'])
    expect(modernizedConfig.legend.position).toBe('top')
    expect(modernizedConfig.legend.hideBorder).toBe(true)
    expect(modernizedConfig.legend.style).toBe('gradient')
    expect(modernizedConfig.legend.singleRow).toBe(false)
  })

  it('quietly removes the legend box when moving an eligible map legend to a gradient at the top', () => {
    const config = {
      type: 'map',
      general: { titleStyle: 'small' },
      legend: {
        type: 'equalnumber',
        numberOfItems: 5,
        position: 'bottom',
        hideBorder: false,
        style: 'boxes',
        showSpecialClassesLast: true
      }
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
      legend: {
        type: 'equalnumber',
        numberOfItems: 5,
        position: 'top',
        hideBorder: true,
        style: 'circles',
        showSpecialClassesLast: true
      }
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
      legend: {
        type: 'equalnumber',
        numberOfItems: 5,
        position: 'top',
        hideBorder: false,
        style: 'circles',
        showSpecialClassesLast: true
      }
    }
    const recipe = getModernizationRecipe(config) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, config)

    expect(recipe.editorLocations).toEqual(['Legend > Legend Style'])
    expect(modernizedConfig.legend.position).toBe('top')
    expect(modernizedConfig.legend.style).toBe('gradient')
    expect(modernizedConfig.legend.hideBorder).toBe(true)
  })

  it('modernizes map legend style regardless of configured item count when the palette is not qualitative', () => {
    const recipe = getModernizationRecipe({
      type: 'map',
      general: { titleStyle: 'small' },
      legend: {
        type: 'equalnumber',
        numberOfItems: 6,
        position: 'top',
        hideBorder: true,
        style: 'circles',
        showSpecialClassesLast: true
      }
    }) as ModernizationRecipe

    expect(getModernizationOptions(recipe).map(option => option.id)).toContain('map-legend-style')
  })

  it('modernizes categorical map legend style without examining its data', () => {
    const config = {
      type: 'map',
      general: { titleStyle: 'small' },
      columns: { primary: { name: 'bin' } },
      legend: {
        type: 'category',
        position: 'bottom',
        hideBorder: false,
        style: 'boxes',
        singleRow: false,
        specialClasses: [],
        showSpecialClassesLast: true
      },
      data: []
    }
    const recipe = getModernizationRecipe(config) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, config)

    expect(recipe.editorLocations).toEqual(['Legend > Legend Position', 'Legend > Legend Style'])
    expect(modernizedConfig.legend.position).toBe('top')
    expect(modernizedConfig.legend.style).toBe('gradient')
    expect(modernizedConfig.legend.singleRow).toBe(false)
  })

  it('modernizes a remote categorical map with a sequential palette and six configured categories', () => {
    const config = {
      type: 'map',
      dataUrl: 'https://example.com/remote-map-data.json',
      general: { titleStyle: 'small', palette: { name: 'sequential_blue' } },
      columns: { primary: { name: 'bin' } },
      legend: {
        type: 'category',
        position: 'top',
        hideBorder: true,
        style: 'boxes',
        singleRow: true,
        specialClasses: [],
        showSpecialClassesLast: true,
        additionalCategories: ['Limited/No Data', 'Very Low', 'Low', 'Moderate', 'High', 'Very High']
      },
      data: []
    }
    const recipe = getModernizationRecipe(config) as ModernizationRecipe

    expect(getModernizationOptions(recipe).map(option => option.id)).toContain('map-legend-style')
  })

  it('does not modernize categorical map legend style when the palette is qualitative', () => {
    const recipe = getModernizationRecipe({
      type: 'map',
      general: { titleStyle: 'small', palette: { name: 'qualitative_standard' } },
      columns: { primary: { name: 'bin' } },
      legend: {
        type: 'category',
        position: 'top',
        hideBorder: true,
        style: 'boxes',
        singleRow: true,
        specialClasses: [],
        showSpecialClassesLast: true,
        additionalCategories: ['1 to 4', '5 to 49', '50 to 249', '250+']
      },
      data: [{ bin: '1 to 4' }, { bin: '5 to 49' }]
    })

    expect(recipe).toBeUndefined()
  })

  it('moves a qualitative categorical legend to the top without changing its style', () => {
    const config = {
      type: 'map',
      general: { titleStyle: 'small', palette: { name: 'qualitative_standard' } },
      columns: { primary: { name: 'status' } },
      legend: {
        type: 'category',
        position: 'bottom',
        hideBorder: true,
        style: 'boxes',
        singleRow: false,
        specialClasses: [],
        showSpecialClassesLast: true
      },
      data: [{ status: 'Urban' }, { status: 'Rural' }]
    }
    const recipe = getModernizationRecipe(config) as ModernizationRecipe

    const modernizedConfig = applyModernizationRecipe(recipe, config)

    expect(recipe.editorLocations).toEqual(['Legend > Legend Position', 'Legend > Single Row Legend'])
    expect(modernizedConfig.legend.position).toBe('top')
    expect(modernizedConfig.legend.hideBorder).toBe(true)
    expect(modernizedConfig.legend.style).toBe('boxes')
    expect(modernizedConfig.legend.singleRow).toBe(true)
  })

  it('recognizes a legacy top-level qualitative palette', () => {
    const recipe = getModernizationRecipe({
      type: 'map',
      color: 'colorblindsafe',
      general: { titleStyle: 'small' },
      columns: { primary: { name: 'bin' } },
      legend: {
        type: 'category',
        position: 'top',
        hideBorder: true,
        style: 'boxes',
        singleRow: true,
        specialClasses: [],
        showSpecialClassesLast: true
      },
      data: [{ bin: '0 - 4' }, { bin: '5 - 9' }]
    })

    expect(recipe).toBeUndefined()
  })

  it('does not let data or special classes block a gradient for a non-qualitative palette', () => {
    const config = {
      type: 'map',
      general: { titleStyle: 'small' },
      columns: { primary: { name: 'bin' } },
      legend: {
        type: 'category',
        position: 'bottom',
        hideBorder: true,
        style: 'boxes',
        specialClasses: [{ key: 'bin', value: 'N/A', label: 'Not available' }],
        showSpecialClassesLast: true
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

  it('does not modernize omitted data bite comma formatting because it inherits the enabled runtime default', () => {
    expect(getModernizationRecipe({ type: 'data-bite', biteStyle: 'tp5', dataFormat: {} })).toBeUndefined()
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

  it.each([
    ['border', 'markup-include-visual-border', 'Visual > Display Border'],
    ['borderColorTheme', 'markup-include-visual-border-color-theme', 'Visual > Use Border Color Theme'],
    ['accent', 'markup-include-visual-accent', 'Visual > Use Accent Style'],
    ['background', 'markup-include-visual-background', 'Visual > Use Theme Background Color'],
    ['hideBackgroundColor', 'markup-include-visual-hide-background-color', 'Visual > Hide Background Color']
  ])('disables the non-TP5 markup include %s visual setting', (field, optionId, editorLocation) => {
    const originalConfig = {
      type: 'markup-include',
      contentEditor: { style: 'default', titleStyle: 'small' },
      visual: { [field]: true, roundedBorders: true }
    }
    const recipe = getModernizationRecipe(originalConfig) as ModernizationRecipe
    const option = getModernizationOptions(recipe).find(option => option.id === optionId)
    const modernizedConfig = option?.apply(originalConfig as any)

    expect(option?.editorLocations).toEqual([editorLocation])
    expect(option?.editorLocationDetails).toEqual([{ path: editorLocation, value: 'Off' }])
    expect(modernizedConfig.visual[field]).toBe(false)
    expect(modernizedConfig.visual.roundedBorders).toBe(true)
    expect(originalConfig.visual[field]).toBe(true)
  })

  it('does not modernize TP5 markup include title or visual styles', () => {
    const recipe = getModernizationRecipe({
      type: 'markup-include',
      contentEditor: {
        style: 'tp5',
        titleStyle: 'legacy'
      },
      visual: {
        border: true,
        borderColorTheme: true,
        accent: true,
        background: true,
        hideBackgroundColor: true
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

  it('modernizes non-TP5 markup include visual settings across dashboards', () => {
    const originalConfig = {
      type: 'dashboard',
      dashboard: { titleStyle: 'small' },
      visualizations: {
        markup1: {
          type: 'markup-include',
          contentEditor: { style: 'default', titleStyle: 'small' },
          visual: { accent: true, background: true, roundedBorders: true }
        },
        markup2: {
          type: 'markup-include',
          contentEditor: { style: 'default', titleStyle: 'small' },
          visual: { border: true, accent: true }
        },
        tp5Markup: {
          type: 'markup-include',
          contentEditor: { style: 'tp5', titleStyle: 'small' },
          visual: { border: true, accent: true, background: true }
        }
      }
    }
    const recipe = getModernizationRecipe(originalConfig) as ModernizationRecipe
    const optionIds = getModernizationOptions(recipe).map(option => option.id)
    const modernizedConfig = applyModernizationRecipe(recipe, originalConfig)

    expect(optionIds).toEqual([
      'markup-include-visual-accent',
      'markup-include-visual-background',
      'markup-include-visual-border'
    ])
    expect(recipe.editorLocations).toEqual([
      'Markup Includes > Visual > Use Accent Style',
      'Markup Includes > Visual > Use Theme Background Color',
      'Markup Includes > Visual > Display Border'
    ])
    expect(modernizedConfig.visualizations.markup1.visual).toEqual({
      accent: false,
      background: false,
      roundedBorders: true
    })
    expect(modernizedConfig.visualizations.markup2.visual).toEqual({ border: false, accent: false })
    expect(modernizedConfig.visualizations.tp5Markup.visual).toEqual({
      border: true,
      accent: true,
      background: true
    })
    expect(originalConfig.visualizations.markup1.visual.accent).toBe(true)
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

  it('upgrades only an explicitly versioned 2.0 chart palette while preserving its metadata', () => {
    const originalConfig = {
      type: 'chart',
      visualizationType: 'Line',
      general: {
        palette: {
          name: 'qualitative_standard',
          version: '2.0',
          isReversed: true,
          customColors: ['#123456'],
          colorAssignmentMode: 'by-value',
          colorAssignments: [{ key: 'Series A', color: '#654321' }],
          backups: [{ name: 'qualitative-bold', version: '1.0' }]
        }
      }
    }
    const recipe = getModernizationRecipe(originalConfig) as ModernizationRecipe
    const option = getModernizationOptions(recipe).find(change => change.id === 'chart-palette-version-2-1')
    const modernizedConfig = option?.apply(originalConfig as any) as any

    expect(option?.label).toBe('Use improved Palette 2.1 color distribution')
    expect(option?.editorLocationDetails).toEqual([{ path: 'Visual > Chart Color Palette', value: '2.1' }])
    expect(modernizedConfig.general.palette).toEqual({ ...originalConfig.general.palette, version: '2.1' })
    expect(originalConfig.general.palette.version).toBe('2.0')
  })

  it('upgrades only an explicitly versioned 2.0 map palette while preserving its metadata', () => {
    const originalConfig = {
      type: 'map',
      general: {
        titleStyle: 'small',
        palette: {
          name: 'sequential_blue',
          version: '2.0',
          isReversed: false,
          customColorsOrdered: ['#123456', '#654321'],
          backups: [{ name: 'bluegreen', version: '1.0' }]
        }
      }
    }
    const recipe = getModernizationRecipe(originalConfig) as ModernizationRecipe
    const option = getModernizationOptions(recipe).find(change => change.id === 'map-palette-version-2-1')
    const modernizedConfig = option?.apply(originalConfig as any) as any

    expect(option?.label).toBe('Use improved Palette 2.1 color distribution')
    expect(option?.editorLocationDetails).toEqual([{ path: 'Visual > Map Color Palette', value: '2.1' }])
    expect(modernizedConfig.general.palette).toEqual({ ...originalConfig.general.palette, version: '2.1' })
    expect(originalConfig.general.palette.version).toBe('2.0')
  })

  it.each([
    ['chart', 'chart-palette-version-2-1'],
    ['map', 'map-palette-version-2-1']
  ])('does not offer the Palette 2.1 upgrade to ineligible %s palettes', (type, optionId) => {
    const optionIdsForVersion = (version?: string) => {
      const recipe = getModernizationRecipe({
        type,
        titleStyle: 'small',
        visualizationType: 'Warming Stripes',
        general: { titleStyle: 'small', palette: { name: 'sequential_blue', ...(version ? { version } : {}) } },
        dataFormat: { commas: true },
        table: { expanded: false }
      })

      return recipe ? getModernizationOptions(recipe).map(option => option.id) : []
    }

    expect(optionIdsForVersion('1.0')).not.toContain(optionId)
    expect(optionIdsForVersion()).not.toContain(optionId)
    expect(optionIdsForVersion('2.1')).not.toContain(optionId)
    expect(optionIdsForVersion('unknown')).not.toContain(optionId)

    const configWithoutPalette = getModernizationRecipe({ type, general: { titleStyle: 'small' } })
    const optionIdsWithoutPalette = configWithoutPalette
      ? getModernizationOptions(configWithoutPalette).map(option => option.id)
      : []
    expect(optionIdsWithoutPalette).not.toContain(optionId)
  })

  it('keeps chart and map palette upgrades separate across nested and multidashboard visualizations', () => {
    const paletteConfig = (type: 'chart' | 'map', version: '1.0' | '2.0') => ({
      type,
      general: { titleStyle: 'small', palette: { name: 'sequential_blue', version } }
    })
    const originalConfig = {
      type: 'dashboard',
      dashboard: { titleStyle: 'small' },
      rows: [],
      visualizations: {
        rootChart: paletteConfig('chart', '2.0'),
        rootMap: paletteConfig('map', '2.0'),
        nestedDashboard: {
          type: 'dashboard',
          dashboard: { titleStyle: 'small' },
          rows: [],
          visualizations: {
            nestedChart: paletteConfig('chart', '2.0'),
            legacyMap: paletteConfig('map', '1.0')
          }
        }
      },
      multiDashboards: [
        {
          dashboard: { titleStyle: 'small' },
          rows: [],
          visualizations: { tabMap: paletteConfig('map', '2.0') }
        }
      ]
    }
    const recipe = getModernizationRecipe(originalConfig) as ModernizationRecipe
    const options = getModernizationOptions(recipe)
    const chartOptions = options.filter(change => change.id === 'chart-palette-version-2-1')
    const mapOptions = options.filter(change => change.id === 'map-palette-version-2-1')
    const chartModernized = chartOptions[0].apply(originalConfig as any) as any
    const mapModernized = mapOptions[0].apply(originalConfig as any) as any

    expect(chartOptions).toHaveLength(1)
    expect(mapOptions).toHaveLength(1)
    expect(chartOptions[0].editorLocationDetails).toEqual([
      { path: 'Charts > Visual > Chart Color Palette', value: '2.1' }
    ])
    expect(mapOptions[0].editorLocationDetails).toEqual([{ path: 'Maps > Visual > Map Color Palette', value: '2.1' }])
    expect(chartModernized.visualizations.rootChart.general.palette.version).toBe('2.1')
    expect(chartModernized.visualizations.nestedDashboard.visualizations.nestedChart.general.palette.version).toBe(
      '2.1'
    )
    expect(chartModernized.visualizations.rootMap.general.palette.version).toBe('2.0')
    expect(chartModernized.multiDashboards[0].visualizations.tabMap.general.palette.version).toBe('2.0')
    expect(mapModernized.visualizations.rootMap.general.palette.version).toBe('2.1')
    expect(mapModernized.multiDashboards[0].visualizations.tabMap.general.palette.version).toBe('2.1')
    expect(mapModernized.visualizations.nestedDashboard.visualizations.legacyMap.general.palette.version).toBe('1.0')
    expect(mapModernized.visualizations.rootChart.general.palette.version).toBe('2.0')
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
