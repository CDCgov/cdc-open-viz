import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, expect } from 'storybook/test'
import Chart from '@cdc/chart'
import CdcMap from '@cdc/map'
import Dashboard from '@cdc/dashboard'

// Fallback step function for test descriptions
const step = async (description: string, fn: () => Promise<void> | void) => {
  console.log(`▶ ${description}`)
  await fn()
  console.log(`✓ ${description}`)
}

const meta: Meta = {
  title: 'Regression Tests/Pages/Eastern Equine Encephalitis',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Stories for all visualizations from the CDC Eastern Equine Encephalitis historic data page'
      }
    }
  },
  tags: ['autodocs']
}

export default meta

// Config URLs from the EEE historic data page
const CONFIG_URLS = {
  cumulativeData: 'https://www.cdc.gov/eastern-equine-encephalitis/data-maps/cumulative-data_1.json',
  exploreHumanData: 'https://www.cdc.gov/eastern-equine-encephalitis/data-maps/explore-human-data.json',
  exploreCountyData: 'https://www.cdc.gov/eastern-equine-encephalitis/data-maps/explore-county-data.json',
  ct2022: 'https://www.cdc.gov/eastern-equine-encephalitis/data-maps/ct-2022.json'
}

type MapStory = StoryObj<typeof CdcMap>
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

  console.log(`✅ ${storyName} map rendered successfully`)
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

  console.log(`✅ ${storyName} dashboard rendered successfully`)
}

/**
 * Cumulative Data for 2003–2024
 *
 * Summary dashboard showing cumulative Eastern Equine Encephalitis cases.
 */
export const Cumulative_Data: DashboardStory = {
  render: () => <Dashboard configUrl={CONFIG_URLS.cumulativeData} />,
  play: async ({ canvasElement }) => {
    await testDashboardRendering(canvasElement, 'Cumulative Data')
  }
}

/**
 * Explore Human Data for 2003–2024
 *
 * Interactive dashboard allowing exploration of human EEE cases with filters.
 * Note: May experience slow load times after selecting filters.
 */
export const Explore_Human_Data: DashboardStory = {
  render: () => <Dashboard configUrl={CONFIG_URLS.exploreHumanData} />,
  play: async ({ canvasElement }) => {
    await testDashboardRendering(canvasElement, 'Explore Human Data')
  }
}

/**
 * Explore County Level Data for 2003–2024
 *
 * Interactive map showing county-level EEE data across the United States.
 */
export const Explore_County_Data: MapStory = {
  render: () => <CdcMap configUrl={CONFIG_URLS.exploreCountyData} />,
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'Explore County Data')
  }
}

/**
 * Connecticut 2022 Data
 *
 * Map visualization showing EEE data specific to Connecticut for 2022.
 */
export const Connecticut_2022: MapStory = {
  render: () => <CdcMap configUrl={CONFIG_URLS.ct2022} />,
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'Connecticut 2022')
  }
}

/**
 * All EEE Visualizations - Combined Test
 *
 * Tests all visualizations from the Eastern Equine Encephalitis historic data page.
 */
export const All_EEE_Visualizations: StoryObj = {
  render: () => (
    <div className="container-fluid p-4">
      <h1 className="mb-4">Eastern Equine Encephalitis - Historic Data</h1>

      <section className="mb-5">
        <h2>Cumulative Data for 2003–2024</h2>
        <Dashboard configUrl={CONFIG_URLS.cumulativeData} />
      </section>

      <section className="mb-5">
        <h2>Explore Human Data for 2003–2024</h2>
        <Dashboard configUrl={CONFIG_URLS.exploreHumanData} />
      </section>

      <section className="mb-5">
        <h2>Explore County Level Data for 2003–2024</h2>
        <CdcMap configUrl={CONFIG_URLS.exploreCountyData} />
      </section>

      <section className="mb-5">
        <h2>Connecticut 2022 Data</h2>
        <CdcMap configUrl={CONFIG_URLS.ct2022} />
      </section>
    </div>
  ),
  play: async ({ canvasElement }) => {
    await step('Wait for all visualizations to start rendering', async () => {
      await new Promise<void>(resolve => setTimeout(resolve, 2000))
    })

    await step('Wait for all 4 COVE modules to render', async () => {
      await new Promise<void>((resolve, reject) => {
        const startTime = Date.now()
        const timeout = 30000

        const checkModules = () => {
          const coveModules = canvasElement.querySelectorAll('.cdc-open-viz-module')
          if (coveModules.length >= 4) {
            resolve()
          } else if (Date.now() - startTime > timeout) {
            reject(new Error(`Timeout: Only ${coveModules.length}/4 COVE modules found after ${timeout}ms`))
          } else {
            setTimeout(checkModules, 200)
          }
        }
        checkModules()
      })
    })

    await step('Verify at least 4 visualizations are present', async () => {
      const coveModules = canvasElement.querySelectorAll('.cdc-open-viz-module')
      expect(coveModules.length).toBeGreaterThanOrEqual(4)
    })

    console.log(`✅ All 4+ EEE visualizations rendered successfully`)
  }
}
