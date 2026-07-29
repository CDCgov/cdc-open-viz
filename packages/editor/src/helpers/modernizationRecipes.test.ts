import {
  applyModernizationRecipe,
  getModernizationRecipe,
  modernizationRecipes,
  ModernizationRecipe
} from './modernizationRecipes'

describe('modernizationRecipes', () => {
  it('does not select a recipe when none applies', () => {
    expect(getModernizationRecipe({ type: 'map' })).toBeUndefined()
  })

  it('selects the chart modernization recipe for legacy chart title configs', () => {
    expect(getModernizationRecipe({ type: 'chart', titleStyle: 'legacy' })?.id).toBe('chart-modern-clean')
  })

  it('selects the dashboard modernization recipe when dashboard title style can be modernized', () => {
    expect(
      getModernizationRecipe({
        type: 'dashboard',
        dashboard: { title: 'Dashboard title', titleStyle: 'legacy' },
        visualizations: {}
      })?.id
    ).toBe('dashboard-modern-clean')
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
    ).toBe('dashboard-modern-clean')
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
      table: { expanded: false }
    }

    expect(getModernizationRecipe(modernConfig)).toBeUndefined()
    expect(getModernizationRecipe({ ...modernConfig, titleStyle: 'large' })).toBeUndefined()
  })

  it('returns a cloned modernized config without mutating the original', () => {
    const recipe = modernizationRecipes.find(recipe => recipe.id === 'chart-modern-clean') as ModernizationRecipe
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
        dateDisplayFormat: '%B %-d, %Y',
        expanded: true
      },
      general: { palette: { name: 'qualitative_bold', version: '2.0', isReversed: true } },
      legend: { position: 'right', hideBorder: { side: false, topBottom: false } },
      visual: { accent: false, background: false, border: true },
      visualizationType: 'Bar',
      barStyle: 'flat'
    }

    const modernizedConfig = applyModernizationRecipe(recipe, originalConfig)

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
    expect(modernizedConfig.table.dateDisplayFormat).toBe('%B %-d, %Y')
    expect(modernizedConfig.table.expanded).toBe(false)
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
    expect(originalConfig.table.expanded).toBe(true)
    expect(originalConfig.general.palette.name).toBe('qualitative_bold')
  })

  it('modernizes dashboard title style and chart visualizations recursively', () => {
    const recipe = modernizationRecipes.find(recipe => recipe.id === 'dashboard-modern-clean') as ModernizationRecipe
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

    const modernizedConfig = applyModernizationRecipe(recipe, originalConfig)

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
    expect(modernizedConfig.visualizations.map1.general.titleStyle).toBe('legacy')
    expect(modernizedConfig.multiDashboards[0].dashboard.titleStyle).toBe('small')
    expect(modernizedConfig.multiDashboards[0].visualizations.tabChart.titleStyle).toBe('small')
    expect(modernizedConfig.multiDashboards[0].type).toBeUndefined()
    expect(originalConfig.dashboard.titleStyle).toBe('legacy')
    expect(originalConfig.visualizations.chart1.titleStyle).toBe('legacy')
    expect(originalConfig.multiDashboards[0].dashboard.titleStyle).toBe('legacy')
  })

  it('leaves non-legacy chart title styles unchanged', () => {
    const recipe = modernizationRecipes.find(recipe => recipe.id === 'chart-modern-clean') as ModernizationRecipe
    const modernizedConfig = applyModernizationRecipe(recipe, {
      type: 'chart',
      titleStyle: 'large',
      yAxis: { titlePlacement: 'side' }
    })

    expect(modernizedConfig.titleStyle).toBe('large')
    expect(modernizedConfig.yAxis.titlePlacement).toBe('top')
  })

  it('keeps the registry extensible for additional visualization types', () => {
    const dashboardRecipe: ModernizationRecipe = {
      id: 'dashboard-test',
      label: 'Dashboard test',
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
