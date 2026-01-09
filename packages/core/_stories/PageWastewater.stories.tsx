import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, expect } from 'storybook/test'
import Chart from '@cdc/chart'
import CdcMap from '@cdc/map'
import Dashboard from '@cdc/dashboard'
import { useEffect, useState } from 'react'

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

// Helper to fetch config and update data URLs to use absolute cdc.gov paths
const useConfigWithAbsoluteDataUrl = (configUrl: string) => {
  const [config, setConfig] = useState(null)

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

        setConfig(data)
      })
      .catch(err => {
        console.error('Failed to fetch config:', configUrl, err)
      })
  }, [configUrl])

  return config
}

type MapStory = StoryObj<typeof CdcMap>
type ChartStory = StoryObj<typeof Chart>
type DashboardStory = StoryObj<typeof Dashboard>

// Helper function to test map rendering
const testMapRendering = async (canvasElement: HTMLElement, storyName: string) => {
  const canvas = within(canvasElement)

  await step('Wait for map to render', async () => {
    const mapElement = await canvas.findByRole('img', { hidden: true }, { timeout: 10000 })
    expect(mapElement).toBeInTheDocument()
  })

  await step('Verify SVG element is present', async () => {
    const svgElement = canvasElement.querySelector('svg')
    expect(svgElement).toBeInTheDocument()
  })

  await step('Verify COVE module wrapper is present', async () => {
    const coveModule = canvasElement.querySelector('.cdc-open-viz-module')
    expect(coveModule).toBeInTheDocument()
  })

  console.log(` ${storyName} map rendered successfully`)
}

// Helper function to test chart rendering
const testChartRendering = async (canvasElement: HTMLElement, storyName: string) => {
  const canvas = within(canvasElement)

  await step('Wait for chart to render', async () => {
    const svgElement = await canvas.findByRole('img', { hidden: true }, { timeout: 10000 })
    expect(svgElement).toBeInTheDocument()
  })

  await step('Verify chart SVG is present', async () => {
    const chartSvg = canvasElement.querySelector('svg')
    expect(chartSvg).toBeInTheDocument()
  })

  await step('Verify COVE module wrapper is present', async () => {
    const coveModule = canvasElement.querySelector('.cdc-open-viz-module')
    expect(coveModule).toBeInTheDocument()
  })

  console.log(` ${storyName} chart rendered successfully`)
}

// Helper function to test dashboard rendering
const testDashboardRendering = async (canvasElement: HTMLElement, storyName: string) => {
  await step('Wait for dashboard to render', async () => {
    await new Promise<void>((resolve, reject) => {
      const startTime = Date.now()
      const timeout = 15000

      const checkDashboard = () => {
        const dashboardElement = canvasElement.querySelector('.cove-dashboard')
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
    const dashboard = canvasElement.querySelector('.cove-dashboard')
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
    const config = useConfigWithAbsoluteDataUrl(CONFIG_URLS.homePageModules)
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
    const config = useConfigWithAbsoluteDataUrl(CONFIG_URLS.measlesTopModules)
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
    const config = useConfigWithAbsoluteDataUrl(CONFIG_URLS.measlesMap)
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
    const config = useConfigWithAbsoluteDataUrl(CONFIG_URLS.measlesTimePeriod)
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
    const config = useConfigWithAbsoluteDataUrl(CONFIG_URLS.covidTopModules)
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
    const config = useConfigWithAbsoluteDataUrl(CONFIG_URLS.covidTimePeriodMap)
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
export const COVID_State_Level: ChartStory = {
  render: () => {
    const config = useConfigWithAbsoluteDataUrl(CONFIG_URLS.covidStateLevel)
    if (!config) return <div>Loading...</div>
    return <Chart config={config} />
  },
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'COVID State Level')
  }
}

/**
 * COVID-19 - National and Regional Trends
 *
 * Trends in COVID-19 wastewater viral activity at national and HHS regional levels.
 */
export const COVID_National_Regional_Trends: ChartStory = {
  render: () => {
    const config = useConfigWithAbsoluteDataUrl(CONFIG_URLS.covidNationalRegionalTrends)
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
    const config = useConfigWithAbsoluteDataUrl(CONFIG_URLS.covidStateLevelRest)
    if (!config) return <div>Loading...</div>
    return <Chart config={config} />
  },
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'COVID State Level Rest')
  }
}

/**
 * All Wastewater Visualizations - Combined Test
 *
 * Tests all visualizations from the NWSS pages to ensure they all render correctly together.
 */
export const All_Wastewater_Visualizations: StoryObj = {
  render: () => {
    const homePageConfig = useConfigWithAbsoluteDataUrl(CONFIG_URLS.homePageModules)
    const measlesTopConfig = useConfigWithAbsoluteDataUrl(CONFIG_URLS.measlesTopModules)
    const measlesMapConfig = useConfigWithAbsoluteDataUrl(CONFIG_URLS.measlesMap)
    const measlesTimePeriodConfig = useConfigWithAbsoluteDataUrl(CONFIG_URLS.measlesTimePeriod)
    const covidTopConfig = useConfigWithAbsoluteDataUrl(CONFIG_URLS.covidTopModules)
    const covidMapConfig = useConfigWithAbsoluteDataUrl(CONFIG_URLS.covidTimePeriodMap)
    const covidStateLevelConfig = useConfigWithAbsoluteDataUrl(CONFIG_URLS.covidStateLevel)
    const covidNationalRegionalConfig = useConfigWithAbsoluteDataUrl(CONFIG_URLS.covidNationalRegionalTrends)
    const covidStateRestConfig = useConfigWithAbsoluteDataUrl(CONFIG_URLS.covidStateLevelRest)

    const allLoaded =
      homePageConfig &&
      measlesTopConfig &&
      measlesMapConfig &&
      measlesTimePeriodConfig &&
      covidTopConfig &&
      covidMapConfig &&
      covidStateLevelConfig &&
      covidNationalRegionalConfig &&
      covidStateRestConfig

    if (!allLoaded) {
      return <div>Loading...</div>
    }

    return (
      <div className="container-fluid p-4">
        <h1 className="mb-4">NWSS - All Wastewater Visualizations</h1>

        <section className="mb-5">
          <h2>NWSS Home Page</h2>
          <Dashboard config={homePageConfig} />
        </section>

        <section className="mb-5">
          <h2>Measles - Summary Modules</h2>
          <Dashboard config={measlesTopConfig} />
        </section>

        <section className="mb-5">
          <h2>Measles - US Map</h2>
          <CdcMap config={measlesMapConfig} />
        </section>

        <section className="mb-5">
          <h2>Measles - Time Period</h2>
          <Dashboard config={measlesTimePeriodConfig} />
        </section>

        <section className="mb-5">
          <h2>COVID-19 - Summary Modules</h2>
          <Dashboard config={covidTopConfig} />
        </section>

        <section className="mb-5">
          <h2>COVID-19 - State Map</h2>
          <CdcMap config={covidMapConfig} />
        </section>

        <section className="mb-5">
          <h2>COVID-19 - State Level Data</h2>
          <Chart config={covidStateLevelConfig} />
        </section>

        <section className="mb-5">
          <h2>COVID-19 - National and Regional Trends</h2>
          <Chart config={covidNationalRegionalConfig} />
        </section>

        <section className="mb-5">
          <h2>COVID-19 - State Trends</h2>
          <Chart config={covidStateRestConfig} />
        </section>
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    await step('Wait for all configs to load', async () => {
      await new Promise<void>(resolve => {
        const checkLoading = () => {
          const loadingDiv = canvasElement.querySelector('div:not(.container-fluid)')
          if (!loadingDiv || !loadingDiv.textContent?.includes('Loading')) {
            resolve()
          } else {
            setTimeout(checkLoading, 100)
          }
        }
        checkLoading()
      })
    })

    await step('Wait for visualizations to start rendering', async () => {
      await new Promise<void>(resolve => setTimeout(resolve, 2000))
    })

    await step('Wait for all 9 COVE modules to render', async () => {
      await new Promise<void>((resolve, reject) => {
        const startTime = Date.now()
        const timeout = 30000

        const checkModules = () => {
          const coveModules = canvasElement.querySelectorAll('.cdc-open-viz-module')
          if (coveModules.length >= 9) {
            resolve()
          } else if (Date.now() - startTime > timeout) {
            reject(new Error(`Timeout: Only ${coveModules.length}/9 COVE modules found after ${timeout}ms`))
          } else {
            setTimeout(checkModules, 200)
          }
        }
        checkModules()
      })
    })

    await step('Verify at least 9 visualizations are present', async () => {
      const coveModules = canvasElement.querySelectorAll('.cdc-open-viz-module')
      expect(coveModules.length).toBeGreaterThanOrEqual(9)
    })

    console.log(` All 9+ wastewater visualizations rendered successfully`)
  }
}
