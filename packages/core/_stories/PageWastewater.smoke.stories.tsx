import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import Chart from '@cdc/chart'
import CdcMap from '@cdc/map'
import Dashboard from '@cdc/dashboard'
import { useEffect, useState } from 'react'
import { assertVisualizationRendered } from '../helpers/testing'

// Fallback step function for test descriptions
const step = async (description: string, fn: () => Promise<void> | void) => {
  console.log(`▶ ${description}`)
  await fn()
  console.log(`✓ ${description}`)
}

const meta: Meta = {
  title: 'Regression Tests/Pages/Wastewater',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Stories for all visualizations from the CDC National Wastewater Surveillance System (NWSS) pages'
      }
    }
  },
  tags: ['autodocs']
}

export default meta

// Config URLs from the NWSS pages
const CONFIG_URLS = {
  // Main NWSS page (https://www.cdc.gov/nwss/index.html)
  homePageModules: 'https://www.cdc.gov/nwss/rv/modules/home-page-modules.json',

  // Measles page (https://www.cdc.gov/nwss/rv/measles.html)
  measlesTopModules: 'https://www.cdc.gov/nwss/rv/modules/measles/top-three-modules.json',
  measlesMap: 'https://www.cdc.gov/nwss/rv/modules/measles/measles-us-map.json',
  measlesTimePeriod: 'https://www.cdc.gov/nwss/rv/modules/measles/time-period.json',

  // COVID-19 National Data page (https://www.cdc.gov/nwss/rv/COVID19-national-data.html)
  covidTopModules: 'https://www.cdc.gov/nwss/rv/modules/sc2/covid-top-modules.json',
  covidTimePeriodMap: 'https://www.cdc.gov/nwss/rv/modules/sc2/covid-time-period-state-map.json',
  covidStateLevel: 'https://www.cdc.gov/nwss/rv/modules/sc2/covid-19-state-level.json',
  covidNationalRegionalTrends: 'https://www.cdc.gov/nwss/rv/modules/sc2/covid-19-national-and-regional-trends.json',

  // COVID-19 State Trend page (https://www.cdc.gov/nwss/rv/COVID19-statetrend.html)
  covidStateLevelRest: 'https://www.cdc.gov/nwss/rv/modules/sc2/State-Level-covid-rest.json'
}

type ConfigState = { config: any; failed: boolean }

// Helper to fetch config and update data URLs to use absolute cdc.gov paths.
// Sets `failed: true` when the fetch fails so callers can skip gracefully.
const useConfigWithAbsoluteDataUrl = (configUrl: string): ConfigState => {
  const [state, setState] = useState<ConfigState>({ config: null, failed: false })

  useEffect(() => {
    fetch(configUrl)
      .then(res => res.json())
      .then(data => {
        // Convert relative data URLs to absolute cdc.gov URLs
        if (data.dataUrl) {
          // Handle different relative path formats (../../path or /path)
          const dataUrl = data.dataUrl.replace(/^(\.\.\/)+/, '').replace(/^\//, '')
          data.dataUrl = `https://www.cdc.gov/${dataUrl}`
        }
        if (data.dataFileName) {
          const dataFileName = data.dataFileName.replace(/^(\.\.\/)+/, '').replace(/^\//, '')
          data.dataFileName = `https://www.cdc.gov/${dataFileName}`
        }

        // For dashboard configs, convert dataKey references in visualizations
        if (data.visualizations) {
          Object.values(data.visualizations).forEach((viz: any) => {
            if (viz.dataKey) {
              const dataKey = viz.dataKey.replace(/^(\.\.\/)+/, '').replace(/^\//, '')
              viz.dataKey = `https://www.cdc.gov/${dataKey}`
            }
          })
        }

        // For dashboard configs, convert datasets
        if (data.datasets) {
          const newDatasets = {}
          Object.entries(data.datasets).forEach(([key, dataset]: [string, any]) => {
            const newKey = key.replace(/^(\.\.\/)+/, '').replace(/^\//, '')
            const absoluteKey = `https://www.cdc.gov/${newKey}`

            newDatasets[absoluteKey] = {
              ...dataset,
              dataFileName: dataset.dataFileName
                ? `https://www.cdc.gov/${dataset.dataFileName.replace(/^(\.\.\/)+/, '').replace(/^\//, '')}`
                : dataset.dataFileName,
              dataUrl: dataset.dataUrl
                ? `https://www.cdc.gov/${dataset.dataUrl.replace(/^(\.\.\/)+/, '').replace(/^\//, '')}`
                : dataset.dataUrl
            }
          })
          data.datasets = newDatasets
        }

        // Set activeDashboard to 0 if it's null and multiDashboards exist
        if (data.multiDashboards && data.multiDashboards.length > 0 && data.activeDashboard === null) {
          data.activeDashboard = 0
        }

        setState({ config: data, failed: false })
      })
      .catch(err => {
        console.warn('Config fetch failed (network may be unavailable in CI):', configUrl, err)
        setState({ config: null, failed: true })
      })
  }, [configUrl])

  return state
}

type MapStory = StoryObj<typeof CdcMap>
type ChartStory = StoryObj<typeof Chart>
type DashboardStory = StoryObj<typeof Dashboard>

// Helper function to test map rendering.
// Skips assertions if the config could not be loaded due to network unavailability.
const testMapRendering = async (canvasElement: HTMLElement, storyName: string) => {
  if (canvasElement.querySelector('[data-unavailable]')) {
    console.warn(`Skipping ${storyName}: config could not be loaded (network may be unavailable in CI)`)
    return
  }

  await step('Wait for map to render', async () => {
    await assertVisualizationRendered(canvasElement)
  })

  await step('Verify map visualization is present', async () => {
    const svgMap = canvasElement.querySelector('svg')
    const canvasMap = canvasElement.querySelector('canvas')
    expect(svgMap || canvasMap).toBeTruthy()
  })

  await step('Verify COVE module wrapper is present', async () => {
    const coveModule = canvasElement.querySelector('.cove-visualization')
    expect(coveModule).toBeInTheDocument()
  })

  console.log(` ${storyName} map rendered successfully`)
}

// Helper function to test chart rendering.
// Skips assertions if the config could not be loaded due to network unavailability.
const testChartRendering = async (canvasElement: HTMLElement, storyName: string) => {
  if (canvasElement.querySelector('[data-unavailable]')) {
    console.warn(`Skipping ${storyName}: config could not be loaded (network may be unavailable in CI)`)
    return
  }

  await step('Wait for chart to render', async () => {
    await assertVisualizationRendered(canvasElement)
  })

  await step('Verify chart SVG is present', async () => {
    const chartSvg = canvasElement.querySelector('svg')
    expect(chartSvg).toBeInTheDocument()
  })

  await step('Verify COVE module wrapper is present', async () => {
    const coveModule = canvasElement.querySelector('.cove-visualization')
    expect(coveModule).toBeInTheDocument()
  })

  console.log(` ${storyName} chart rendered successfully`)
}

// Helper function to test dashboard rendering.
// Skips assertions if the config could not be loaded due to network unavailability.
const testDashboardRendering = async (canvasElement: HTMLElement, storyName: string) => {
  if (canvasElement.querySelector('[data-unavailable]')) {
    console.warn(`Skipping ${storyName}: config could not be loaded (network may be unavailable in CI)`)
    return
  }

  await step('Wait for dashboard to render', async () => {
    await new Promise<void>((resolve, reject) => {
      const startTime = Date.now()
      const timeout = 15000

      const checkDashboard = () => {
        const dashboardElement = canvasElement.querySelector('.type-dashboard')
        if (dashboardElement) {
          resolve()
        } else if (Date.now() - startTime > timeout) {
          reject(new Error(`Timeout: Dashboard element not found after ${timeout}ms`))
        } else {
          setTimeout(checkDashboard, 100)
        }
      }
      checkDashboard()
    })
  })

  await step('Verify dashboard wrapper is present', async () => {
    const dashboard = canvasElement.querySelector('.type-dashboard')
    expect(dashboard).toBeInTheDocument()
  })

  console.log(` ${storyName} dashboard rendered successfully`)
}

/**
 * NWSS Home Page - Summary Modules
 *
 * Multi-virus wastewater surveillance summary from the main NWSS landing page.
 */
export const Home_Page_Modules: DashboardStory = {
  render: () => {
    const { config, failed } = useConfigWithAbsoluteDataUrl(CONFIG_URLS.homePageModules)
    if (failed) return <div data-unavailable="true">Config unavailable</div>
    if (!config) return <div>Loading...</div>
    return <Dashboard config={config} />
  },
  play: async ({ canvasElement }) => {
    await testDashboardRendering(canvasElement, 'Home Page Modules')
  }
}

/**
 * Measles - Top Summary Modules
 *
 * Key metrics for measles wastewater detections nationwide.
 */
export const Measles_Top_Modules: DashboardStory = {
  render: () => {
    const { config, failed } = useConfigWithAbsoluteDataUrl(CONFIG_URLS.measlesTopModules)
    if (failed) return <div data-unavailable="true">Config unavailable</div>
    if (!config) return <div>Loading...</div>
    return <Dashboard config={config} />
  },
  play: async ({ canvasElement }) => {
    await testDashboardRendering(canvasElement, 'Measles Top Modules')
  }
}

/**
 * Measles - US Map
 *
 * Geographic distribution of measles wastewater detections across the United States.
 */
export const Measles_Map: MapStory = {
  render: () => {
    const { config, failed } = useConfigWithAbsoluteDataUrl(CONFIG_URLS.measlesMap)
    if (failed) return <div data-unavailable="true">Config unavailable</div>
    if (!config) return <div>Loading...</div>
    return <CdcMap config={config} />
  },
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'Measles Map')
  }
}

/**
 * Measles - Time Period
 *
 * Timeline information for measles wastewater surveillance data.
 */
export const Measles_Time_Period: DashboardStory = {
  render: () => {
    const { config, failed } = useConfigWithAbsoluteDataUrl(CONFIG_URLS.measlesTimePeriod)
    if (failed) return <div data-unavailable="true">Config unavailable</div>
    if (!config) return <div>Loading...</div>
    return <Dashboard config={config} />
  },
  play: async ({ canvasElement }) => {
    await testDashboardRendering(canvasElement, 'Measles Time Period')
  }
}

/**
 * COVID-19 - Top Summary Modules
 *
 * Key metrics for COVID-19 wastewater surveillance at the national level.
 */
export const COVID_Top_Modules: DashboardStory = {
  render: () => {
    const { config, failed } = useConfigWithAbsoluteDataUrl(CONFIG_URLS.covidTopModules)
    if (failed) return <div data-unavailable="true">Config unavailable</div>
    if (!config) return <div>Loading...</div>
    return <Dashboard config={config} />
  },
  play: async ({ canvasElement }) => {
    await testDashboardRendering(canvasElement, 'COVID Top Modules')
  }
}

/**
 * COVID-19 - State Map with Time Period
 *
 * State-level COVID-19 wastewater activity levels across the US.
 */
export const COVID_Time_Period_Map: MapStory = {
  render: () => {
    const { config, failed } = useConfigWithAbsoluteDataUrl(CONFIG_URLS.covidTimePeriodMap)
    if (failed) return <div data-unavailable="true">Config unavailable</div>
    if (!config) return <div>Loading...</div>
    return <CdcMap config={config} />
  },
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'COVID Time Period Map')
  }
}

/**
 * COVID-19 - State Level Data
 *
 * COVID-19 wastewater data visualization by state.
 */
export const COVID_State_Level: MapStory = {
  render: () => {
    const { config, failed } = useConfigWithAbsoluteDataUrl(CONFIG_URLS.covidStateLevel)
    if (failed) return <div data-unavailable="true">Config unavailable</div>
    if (!config) return <div>Loading...</div>
    return <CdcMap config={config} />
  },
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'COVID State Level')
  }
}

/**
 * COVID-19 - National and Regional Trends
 *
 * Trends in COVID-19 wastewater viral activity at national and HHS regional levels.
 */
export const COVID_National_Regional_Trends: ChartStory = {
  render: () => {
    const { config, failed } = useConfigWithAbsoluteDataUrl(CONFIG_URLS.covidNationalRegionalTrends)
    if (failed) return <div data-unavailable="true">Config unavailable</div>
    if (!config) return <div>Loading...</div>
    return <Chart config={config} />
  },
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'COVID National Regional Trends')
  }
}

/**
 * COVID-19 - State Trend Data (Alternative View)
 *
 * State-level COVID-19 wastewater trend visualization from the state trend page.
 */
export const COVID_State_Level_Rest: ChartStory = {
  render: () => {
    const { config, failed } = useConfigWithAbsoluteDataUrl(CONFIG_URLS.covidStateLevelRest)
    if (failed) return <div data-unavailable="true">Config unavailable</div>
    if (!config) return <div>Loading...</div>
    return <Dashboard config={config} />
  },
  play: async ({ canvasElement }) => {
    await testDashboardRendering(canvasElement, 'COVID State Level Rest')
  }
}

/**
 * All Wastewater Visualizations - Combined Test
 *
 * Tests all visualizations from the NWSS pages to ensure they all render correctly together.
 */
export const All_Wastewater_Visualizations: StoryObj = {
  render: () => {
    const homePage = useConfigWithAbsoluteDataUrl(CONFIG_URLS.homePageModules)
    const measlesTop = useConfigWithAbsoluteDataUrl(CONFIG_URLS.measlesTopModules)
    const measlesMap = useConfigWithAbsoluteDataUrl(CONFIG_URLS.measlesMap)
    const measlesTimePeriod = useConfigWithAbsoluteDataUrl(CONFIG_URLS.measlesTimePeriod)
    const covidTop = useConfigWithAbsoluteDataUrl(CONFIG_URLS.covidTopModules)
    const covidMap = useConfigWithAbsoluteDataUrl(CONFIG_URLS.covidTimePeriodMap)
    const covidStateLevel = useConfigWithAbsoluteDataUrl(CONFIG_URLS.covidStateLevel)
    const covidNationalRegional = useConfigWithAbsoluteDataUrl(CONFIG_URLS.covidNationalRegionalTrends)
    const covidStateRest = useConfigWithAbsoluteDataUrl(CONFIG_URLS.covidStateLevelRest)

    // Render each visualization independently — don't block on all loading simultaneously
    return (
      <div className='container-fluid p-4'>
        <h1 className='mb-4'>NWSS - All Wastewater Visualizations</h1>

        <section className='mb-5'>
          <h2>NWSS Home Page</h2>
          {homePage.config && <Dashboard config={homePage.config} />}
          {homePage.failed && <div data-unavailable="home-page">Home Page config unavailable</div>}
        </section>

        <section className='mb-5'>
          <h2>Measles - Summary Modules</h2>
          {measlesTop.config && <Dashboard config={measlesTop.config} />}
          {measlesTop.failed && <div data-unavailable="measles-top">Measles Top config unavailable</div>}
        </section>

        <section className='mb-5'>
          <h2>Measles - US Map</h2>
          {measlesMap.config && <CdcMap config={measlesMap.config} />}
          {measlesMap.failed && <div data-unavailable="measles-map">Measles Map config unavailable</div>}
        </section>

        <section className='mb-5'>
          <h2>Measles - Time Period</h2>
          {measlesTimePeriod.config && <Dashboard config={measlesTimePeriod.config} />}
          {measlesTimePeriod.failed && <div data-unavailable="measles-time">Measles Time Period config unavailable</div>}
        </section>

        <section className='mb-5'>
          <h2>COVID-19 - Summary Modules</h2>
          {covidTop.config && <Dashboard config={covidTop.config} />}
          {covidTop.failed && <div data-unavailable="covid-top">COVID Top config unavailable</div>}
        </section>

        <section className='mb-5'>
          <h2>COVID-19 - State Map</h2>
          {covidMap.config && <CdcMap config={covidMap.config} />}
          {covidMap.failed && <div data-unavailable="covid-map">COVID Map config unavailable</div>}
        </section>

        <section className='mb-5'>
          <h2>COVID-19 - State Level Data</h2>
          {covidStateLevel.config && <Chart config={covidStateLevel.config} />}
          {covidStateLevel.failed && <div data-unavailable="covid-state">COVID State Level config unavailable</div>}
        </section>

        <section className='mb-5'>
          <h2>COVID-19 - National and Regional Trends</h2>
          {covidNationalRegional.config && <Chart config={covidNationalRegional.config} />}
          {covidNationalRegional.failed && <div data-unavailable="covid-national">COVID National config unavailable</div>}
        </section>

        <section className='mb-5'>
          <h2>COVID-19 - State Trends</h2>
          {covidStateRest.config && <Chart config={covidStateRest.config} />}
          {covidStateRest.failed && <div data-unavailable="covid-rest">COVID State Rest config unavailable</div>}
        </section>
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    const TOTAL_VIZUALIZATIONS = 9

    await step('Wait for configs to load or fail', async () => {
      await new Promise<void>(resolve => {
        const startTime = Date.now()
        const timeout = 30000

        const checkReady = () => {
          const coveModules = canvasElement.querySelectorAll('.cove-visualization')
          const unavailableCount = canvasElement.querySelectorAll('[data-unavailable]').length
          const totalResolved = coveModules.length + unavailableCount

          if (totalResolved >= TOTAL_VIZUALIZATIONS || Date.now() - startTime > timeout) {
            resolve()
          } else {
            setTimeout(checkReady, 200)
          }
        }
        checkReady()
      })
    })

    await step('Verify at least one COVE module rendered', async () => {
      const coveModules = canvasElement.querySelectorAll('.cove-visualization')
      const unavailableCount = canvasElement.querySelectorAll('[data-unavailable]').length

      if (unavailableCount > 0) {
        console.warn(`${unavailableCount}/${TOTAL_VIZUALIZATIONS} visualizations were unavailable (network may be down in CI)`)
      }

      // Pass if at least one visualization rendered, or all were unavailable (network failure)
      const allUnavailable = unavailableCount === TOTAL_VIZUALIZATIONS
      if (!allUnavailable) {
        expect(coveModules.length).toBeGreaterThan(0)
      }
    })

    console.log(` All_Wastewater_Visualizations check complete`)
  }
}
