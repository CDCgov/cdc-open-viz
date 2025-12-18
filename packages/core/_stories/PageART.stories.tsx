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
  title: 'Regression Tests/Pages/ART',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Stories for visualizations from the CDC ART (Assisted Reproductive Technology) Surveillance State-Specific page (https://www.cdc.gov/art/php/surveillance-state-specific/index.html)'
      }
    }
  },
  tags: ['autodocs']
}

export default meta

// Config URL from the ART surveillance state-specific page
const CONFIG_URLS = {
  stateSpecificDashboard: 'https://www.cdc.gov/art/dfe-modules/state-specific-dashboard.json'
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
              // Otherwise, convert paths to absolute URLs
              const newKey = key.replace(/^(\.\.\/)+/, '').replace(/^\//, '')
              const absoluteKey = `https://www.cdc.gov/${newKey}`

              newDatasets[absoluteKey] = {
                ...dataset,
                dataFileName: (dataset as any).dataFileName
                  ? `https://www.cdc.gov/${(dataset as any).dataFileName.replace(/^(\.\.\/)+/, '').replace(/^\//, '')}`
                  : (dataset as any).dataFileName,
                dataUrl: (dataset as any).dataUrl
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
          hasMultiDashboards: !!data.multiDashboards,
          dashboardCount: data.multiDashboards?.length || 0,
          activeDashboard: data.activeDashboard,
          datasetCount: Object.keys(data.datasets || {}).length,
          firstDashboardVizCount: data.multiDashboards?.[0]?.visualizations
            ? Object.keys(data.multiDashboards[0].visualizations).length
            : 0
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
      const timeout = 20000

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
 * ART State-Specific Surveillance Dashboard
 *
 * Interactive dashboard showing Assisted Reproductive Technology (ART) surveillance
 * data for different states. This visualization allows users to explore state-specific
 * ART outcomes and trends.
 */
export const State_Specific_Dashboard: DashboardStory = {
  render: () => {
    const config = useConfigWithAbsoluteDataUrl(CONFIG_URLS.stateSpecificDashboard)
    if (!config) return <div>Loading...</div>
    return <Dashboard config={config} />
  },
  play: async ({ canvasElement }) => {
    await testDashboardRendering(canvasElement, 'State Specific Dashboard')
  }
}
