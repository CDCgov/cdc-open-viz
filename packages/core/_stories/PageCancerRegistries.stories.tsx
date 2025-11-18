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
  title: 'Regression Tests/Pages/Cancer Registries',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Stories for visualizations from the CDC National Program of Cancer Registries (NPCR) Contact page (https://www.cdc.gov/national-program-cancer-registries/contact/index.html)'
      }
    }
  },
  tags: ['autodocs']
}

export default meta

// Config URL from the cancer registries contact page
const CONFIG_URLS = {
  npcrPrograms: 'https://www.cdc.gov/cancer/npcr/modules/npcr-programs.json'
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
          datasetCount: Object.keys(data.datasets || {}).length,
          vizCount: data.visualizations ? Object.keys(data.visualizations).length : 0,
          vizTypes: data.visualizations ? Object.values(data.visualizations).map((v: any) => v.type) : []
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

  await step('Verify map visualization is present', async () => {
    const mapElement = canvasElement.querySelector('svg')
    expect(mapElement).toBeInTheDocument()
  })

  console.log(` ${storyName} dashboard rendered successfully`)
}

/**
 * NPCR Programs Contact Map
 *
 * Interactive navigation map showing National Program of Cancer Registries (NPCR) programs
 * across the United States, territories, and U.S.-affiliated Pacific Islands. Users can
 * click on states to access contact information for their local cancer registry program.
 *
 * The NPCR supports central cancer registries in all 50 states, the District of Columbia,
 * Puerto Rico, the U.S. Pacific Island Jurisdictions, and the U.S. Virgin Islands.
 */
export const NPCR_Programs_Map: DashboardStory = {
  render: () => {
    const config = useConfigWithAbsoluteDataUrl(CONFIG_URLS.npcrPrograms)
    if (!config) return <div>Loading...</div>
    return <Dashboard config={config} />
  },
  play: async ({ canvasElement }) => {
    await testDashboardRendering(canvasElement, 'NPCR Programs Map')
  }
}
