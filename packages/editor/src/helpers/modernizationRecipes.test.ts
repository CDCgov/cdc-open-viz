import {
  applyModernizationRecipe,
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
      legend: { position: 'top' },
      xAxis: { dateDisplayFormat: '%b. %-d %Y', tickRotation: 0 },
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
      legend: { position: 'top' },
      xAxis: { dateDisplayFormat: '%b. %-d %Y', tickRotation: 0 },
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
        tickRotation: 45
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
    expect(recipe.editorLocationDetails).toContainEqual({ path: 'Legend > Position', value: 'Top' })
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
    expect(modernizedConfig.xAxis.dateParseFormat).toBe('%m/%d/%Y')
    expect(modernizedConfig.xAxis.dateDisplayFormat).toBe('%b. %-d %Y')
    expect(modernizedConfig.xAxis.tickRotation).toBe(0)
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
    expect(originalConfig.xAxis.dateDisplayFormat).toBe('%Y-%m-%d')
    expect(originalConfig.xAxis.tickRotation).toBe(45)
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
          yAxis: { titlePlacement: 'side', numTicks: 7, min: '' },
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
          general: { titleStyle: 'legacy' }
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
    expect(recipe.editorLocationDetails).toContainEqual({ path: 'Maps > General > Title Style', value: 'Small' })
    expect(modernizedConfig).not.toBe(originalConfig)
    expect(modernizedConfig.dashboard.titleStyle).toBe('small')
    expect(modernizedConfig.visualizations.chart1.titleStyle).toBe('small')
    expect(modernizedConfig.visualizations.chart1.yAxis.titlePlacement).toBe('top')
    expect(modernizedConfig.visualizations.chart1.yAxis.numTicks).toBe(4)
    expect(modernizedConfig.visualizations.chart1.legend.position).toBe('top')
    expect(modernizedConfig.visualizations.chart1.xAxis.tickRotation).toBe(0)
    expect(modernizedConfig.visualizations.chart1.table.expanded).toBe(false)
    expect(modernizedConfig.visualizations.chart1.isResponsiveTicks).toBe(false)
    expect(modernizedConfig.visualizations.nestedDashboard.dashboard.titleStyle).toBe('small')
    expect(modernizedConfig.visualizations.nestedDashboard.visualizations.nestedChart.titleStyle).toBe('small')
    expect(modernizedConfig.visualizations.map1.general.titleStyle).toBe('small')
    expect(modernizedConfig.multiDashboards[0].dashboard.titleStyle).toBe('small')
    expect(modernizedConfig.multiDashboards[0].visualizations.tabChart.titleStyle).toBe('small')
    expect(modernizedConfig.multiDashboards[0].type).toBeUndefined()
    expect(originalConfig.dashboard.titleStyle).toBe('legacy')
    expect(originalConfig.visualizations.chart1.titleStyle).toBe('legacy')
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
      legend: { position: 'top' },
      xAxis: { dateDisplayFormat: '%b. %-d %Y', tickRotation: 0 },
      table: { expanded: false },
      tooltips: { dateDisplayFormat: '%B %-d, %Y' },
      dataFormat: { commas: true }
    })

    expect(recipe?.editorLocations).toEqual(['General > Title Style'])
  })

  it('dedupes dashboard chart locations by setting type', () => {
    const recipe = getModernizationRecipe({
      type: 'dashboard',
      dashboard: { titleStyle: 'small' },
      visualizations: {
        chart1: {
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
          legend: { position: 'top' },
          xAxis: { dateDisplayFormat: '%b. %-d %Y', tickRotation: 0 },
          table: { expanded: false },
          tooltips: { dateDisplayFormat: '%B %-d, %Y' },
          dataFormat: { commas: true }
        },
        chart2: {
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
          legend: { position: 'top' },
          xAxis: { dateDisplayFormat: '%b. %-d %Y', tickRotation: 0 },
          table: { expanded: false },
          tooltips: { dateDisplayFormat: '%B %-d, %Y' },
          dataFormat: { commas: true }
        }
      }
    })

    expect(recipe?.editorLocations).toEqual(['Charts > General > Title Style'])
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

  it('reports dashboard map settings with a deduped map prefix', () => {
    const recipe = getModernizationRecipe({
      type: 'dashboard',
      dashboard: { titleStyle: 'small' },
      visualizations: {
        map1: { type: 'map', general: { titleStyle: 'legacy' }, legend: { position: 'side', hideBorder: false } },
        map2: { type: 'map', general: { titleStyle: 'legacy' }, legend: { position: 'side', hideBorder: false } }
      }
    })

    expect(recipe?.editorLocations).toEqual(['Maps > General > Title Style'])
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

  it('modernizes legacy waffle charts to TP5 waffle charts without changing display defaults', () => {
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
    expect(recipe.editorLocations).toEqual(['General > Chart Type'])
    expect(modernizedConfig.visualizationType).toBe('TP5 Waffle')
    expect(modernizedConfig.showPercent).toBe(false)
    expect(modernizedConfig.showDenominator).toBe(true)
    expect(modernizedConfig.valueDescription).toBe('out of')
    expect(originalConfig.visualizationType).toBe('Waffle')
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

    expect(recipe.editorLocations).toEqual(['General > Chart Type'])
    expect(modernizedConfig.visualizationType).toBe('TP5 Gauge')
  })

  it('does not select a waffle chart recipe when the chart type is already TP5', () => {
    expect(getModernizationRecipe({ type: 'waffle-chart', visualizationType: 'TP5 Waffle' })).toBeUndefined()
    expect(getModernizationRecipe({ type: 'waffle-chart', visualizationType: 'TP5 Gauge' })).toBeUndefined()
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
      'Gauge Charts > General > Chart Type'
    ])
    expect(modernizedConfig.visualizations.bite1.biteStyle).toBe('tp5')
    expect(modernizedConfig.visualizations.bite1.dataFormat.commas).toBe(true)
    expect(modernizedConfig.visualizations.bite2.dataFormat.commas).toBe(true)
    expect(modernizedConfig.visualizations.waffle1.visualizationType).toBe('TP5 Waffle')
    expect(modernizedConfig.visualizations.waffle1.showPercent).toBe(false)
    expect(modernizedConfig.visualizations.waffle1.showDenominator).toBe(true)
    expect(modernizedConfig.visualizations.waffle1.valueDescription).toBe('out of')
    expect(modernizedConfig.visualizations.gauge1.visualizationType).toBe('TP5 Gauge')
    expect(modernizedConfig.visualizations.nestedDashboard.visualizations.nestedBite.biteStyle).toBe('tp5')
    expect(modernizedConfig.visualizations.nestedDashboard.visualizations.nestedWaffle.visualizationType).toBe(
      'TP5 Waffle'
    )
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
    expect(modernizedConfig.dashboard.titleStyle).toBe('small')
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
})
