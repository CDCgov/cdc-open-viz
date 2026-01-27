import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, expect } from 'storybook/test'
import Dashboard from '@cdc/dashboard'
import { useEffect, useState } from 'react'

// Fallback step function for test descriptions
const step = async (description: string, fn: () => Promise<void> | void) => {
  console.log(`▶ ${description}`)
  await fn()
  console.log(`✓ ${description}`)
}

const meta: Meta = {
  title: 'Regression Tests/Pages/BRFSS',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Stories for visualizations from the CDC Behavioral Risk Factor Surveillance System (BRFSS) Prevalence Data & Data Analysis Tools page (https://www.cdc.gov/brfss/brfssprevalence/index.html)'
      }
    }
  },
  tags: ['autodocs']
}

export default meta

// Config URLs from the BRFSS prevalence page
const CONFIG_URLS = {
  exploreByLocation: 'https://www.cdc.gov/brfss/brfssprevalence/modules/explore-by-location.json',
  exploreByTopic: 'https://www.cdc.gov/brfss/brfssprevalence/modules/explore-by-topic.json'
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

        // For dashboard configs with multiDashboards, convert dataKey references in visualizations
        if (data.multiDashboards) {
          data.multiDashboards.forEach((dashboard: any) => {
            if (dashboard.visualizations) {
              Object.values(dashboard.visualizations).forEach((viz: any) => {
                // Only convert dataKey if it's a URL path (starts with / or ../)
                if (viz.dataKey && (viz.dataKey.startsWith('/') || viz.dataKey.startsWith('../'))) {
                  const dataKey = viz.dataKey.replace(/^(\.\.\/)+/, '').replace(/^\//, '')
                  viz.dataKey = `https://www.cdc.gov/${dataKey}`
                }
              })
            }
          })
        }

        // For dashboard configs, convert dataKey references in visualizations
        if (data.visualizations) {
          Object.values(data.visualizations).forEach((viz: any) => {
            // Only convert dataKey if it's a URL path (starts with / or ../)
            if (viz.dataKey && (viz.dataKey.startsWith('/') || viz.dataKey.startsWith('../'))) {
              const dataKey = viz.dataKey.replace(/^(\.\.\/)+/, '').replace(/^\//, '')
              viz.dataKey = `https://www.cdc.gov/${dataKey}`
            }
          })
        }

        // For dashboard configs, convert datasets only if they reference external files
        if (data.datasets) {
          const newDatasets = {}
          Object.entries(data.datasets).forEach(([key, dataset]: [string, any]) => {
            // Check if dataset has embedded data
            const hasEmbeddedData = (dataset as any).data && Array.isArray((dataset as any).data)

            // If data is embedded, keep the original key
            if (hasEmbeddedData) {
              newDatasets[key] = dataset
            } else {
              // Otherwise, convert paths to absolute URLs (but keep absolute URLs as-is)
              const newKey = key.replace(/^(\.\.\/)+/, '').replace(/^\//, '')
              const absoluteKey = key.startsWith('http') ? key : `https://www.cdc.gov/${newKey}`

              newDatasets[absoluteKey] = {
                ...dataset,
                dataFileName: (dataset as any).dataFileName && !(dataset as any).dataFileName.startsWith('http')
                  ? `https://www.cdc.gov/${(dataset as any).dataFileName.replace(/^(\.\.\/)+/, '').replace(/^\//, '')}`
                  : (dataset as any).dataFileName,
                dataUrl: (dataset as any).dataUrl && !(dataset as any).dataUrl.startsWith('http')
                  ? `https://www.cdc.gov/${(dataset as any).dataUrl.replace(/^(\.\.\/)+/, '').replace(/^\//, '')}`
                  : (dataset as any).dataUrl
              }
            }
          })
          data.datasets = newDatasets
        }

        // Set activeDashboard to 0 if it's null and multiDashboards exist
        if (data.multiDashboards && data.multiDashboards.length > 0 && data.activeDashboard === null) {
          data.activeDashboard = 0
        }

        // Log config info for debugging
        console.log('✓ Config loaded:', {
          type: data.type,
          hasMultiDashboards: !!data.multiDashboards,
          dashboardCount: data.multiDashboards?.length || 0,
          activeDashboard: data.activeDashboard,
          datasetCount: Object.keys(data.datasets || {}).length,
          vizCount: data.visualizations ? Object.keys(data.visualizations).length : 0
        })

        setConfig(data)
      })
      .catch(err => {
        console.error('Failed to fetch config:', configUrl, err)
      })
  }, [configUrl])

  return config
}

type DashboardStory = StoryObj<typeof Dashboard>

// Helper function to test dashboard rendering
const testDashboardRendering = async (canvasElement: HTMLElement, storyName: string) => {
  await step('Wait for dashboard to render', async () => {
    await new Promise<void>((resolve, reject) => {
      const startTime = Date.now()
      const timeout = 30000 // Longer timeout for external data loading

      const checkDashboard = () => {
        const dashboardElement = canvasElement.querySelector('.cove-dashboard')
        const loadingDiv = canvasElement.querySelector('div')

        // Log current state for debugging
        if (!dashboardElement && loadingDiv?.textContent?.includes('Loading')) {
          console.log('Still loading config...')
        }

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

  await step('Verify at least one visualization rendered', async () => {
    const coveModules = canvasElement.querySelectorAll('.cdc-open-viz-module')
    expect(coveModules.length).toBeGreaterThan(0)
  })

  console.log(` ${storyName} dashboard rendered successfully`)
}

/**
 * Explore by Location Dashboard
 *
 * Interactive dashboard showing BRFSS prevalence data organized by geographic location.
 * Users can explore health indicators by state, territory, and metropolitan/micropolitan
 * statistical areas (MMSA).
 */
export const Explore_By_Location: DashboardStory = {
  render: () => {
    const config = useConfigWithAbsoluteDataUrl(CONFIG_URLS.exploreByLocation)
    if (!config) return <div>Loading...</div>
    return <Dashboard config={config} />
  },
  play: async ({ canvasElement }) => {
    await testDashboardRendering(canvasElement, 'Explore By Location Dashboard')
  }
}

/**
 * Explore by Topic Dashboard
 *
 * Interactive dashboard showing BRFSS prevalence data organized by health topics.
 * Users can explore various health indicators and risk factors across different
 * categories such as chronic diseases, health behaviors, and preventive practices.
 */
export const Explore_By_Topic: DashboardStory = {
  render: () => {
    const config = useConfigWithAbsoluteDataUrl(CONFIG_URLS.exploreByTopic)
    if (!config) return <div>Loading...</div>
    return <Dashboard config={config} />
  },
  play: async ({ canvasElement }) => {
    await testDashboardRendering(canvasElement, 'Explore By Topic Dashboard')
  }
}

/**
 * All BRFSS Dashboards - Combined Test
 *
 * Tests both BRFSS dashboards to ensure they all render correctly together.
 */
export const All_BRFSS_Dashboards: StoryObj = {
  render: () => {
    const locationConfig = useConfigWithAbsoluteDataUrl(CONFIG_URLS.exploreByLocation)
    const topicConfig = useConfigWithAbsoluteDataUrl(CONFIG_URLS.exploreByTopic)

    if (!locationConfig || !topicConfig) {
      return <div>Loading...</div>
    }

    return (
      <div className="container-fluid p-4">
        <h1 className="mb-4">BRFSS Prevalence Data - All Dashboards</h1>

        <section className="mb-5">
          <h2>Explore by Location</h2>
          <Dashboard config={locationConfig} />
        </section>

        <section className="mb-5">
          <h2>Explore by Topic</h2>
          <Dashboard config={topicConfig} />
        </section>
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

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

    await step('Wait for both dashboards to render', async () => {
      await new Promise<void>((resolve, reject) => {
        const startTime = Date.now()
        const timeout = 40000

        const checkDashboards = () => {
          const dashboards = canvasElement.querySelectorAll('.cove-dashboard')
          if (dashboards.length >= 2) {
            resolve()
          } else if (Date.now() - startTime > timeout) {
            reject(new Error(`Timeout: Only ${dashboards.length}/2 dashboards found after ${timeout}ms`))
          } else {
            setTimeout(checkDashboards, 200)
          }
        }
        checkDashboards()
      })
    })

    await step('Verify both dashboards are present', async () => {
      const dashboards = canvasElement.querySelectorAll('.cove-dashboard')
      expect(dashboards.length).toBe(2)
    })

    console.log(` All 2 BRFSS dashboards rendered successfully`)
  }
}
