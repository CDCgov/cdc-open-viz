import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, expect } from 'storybook/test'
import Chart from '@cdc/chart'
import CdcMap from '@cdc/map'
import { useEffect, useState } from 'react'

// Fallback step function for test descriptions
const step = async (description: string, fn: () => Promise<void> | void) => {
  console.log(`▶ ${description}`)
  await fn()
  console.log(`✓ ${description}`)
}

const meta: Meta = {
  title: 'Regression Tests/Respiratory Viruses Activity Levels',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Stories for all visualizations from the CDC Respiratory Viruses Activity Levels page (https://www.cdc.gov/respiratory-viruses/data/activity-levels.html)'
      }
    }
  },
  tags: ['autodocs']
}

export default meta

// Config URLs from the respiratory viruses activity levels page
const CONFIG_URLS = {
  ariMap: 'https://www.cdc.gov/respiratory-viruses/modules/respiratory-virus-activity/ARI_Map_Viz.json',
  cfaMap: 'https://www.cdc.gov/respiratory-viruses/modules/respiratory-virus-activity/CFA_Map_Viz.json',
  wastewaterMap: 'https://www.cdc.gov/respiratory-viruses/modules/respiratory-virus-activity/wastewatermap.json',
  testPositivity: 'https://www.cdc.gov/respiratory-viruses/modules/test-in-percent-test-positivity-in-usa.json'
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

        // Validate that color configuration exists
        if (!data.customColors || data.customColors.length === 0) {
          console.warn('⚠️ No customColors found in config:', configUrl)
        } else {
          console.log(`✓ Config has ${data.customColors.length} custom colors`, data.customColors)
        }

        // Validate legend configuration
        if (data.legend) {
          console.log('✓ Legend config:', {
            type: data.legend.type,
            categories: data.legend.categoryValuesOrder || data.legend.additionalCategories,
            style: data.legend.style
          })
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

// Helper to verify colors in visualizations (Playwright assertions)
const verifyColors = (canvasElement: HTMLElement, storyName: string) => {
  // Check for colored paths (maps)
  const mapPaths = canvasElement.querySelectorAll('svg path[fill]')
  let coloredPaths = 0
  mapPaths.forEach(path => {
    const fill = path.getAttribute('fill')
    if (fill && fill !== 'none' && fill !== '#cccccc' && fill !== '#e0e0e0' && !fill.toLowerCase().includes('gray')) {
      coloredPaths++
    }
  })

  // Check for colored chart elements (lines, strokes)
  const chartElements = canvasElement.querySelectorAll('svg path[stroke], svg line[stroke]')
  let coloredElements = 0
  chartElements.forEach(element => {
    const stroke = element.getAttribute('stroke')
    if (stroke && stroke !== 'none' && !stroke.toLowerCase().includes('gray')) {
      coloredElements++
    }
  })

  const totalColored = coloredPaths + coloredElements

  // Assert that colored elements exist (will fail Playwright test if not)
  expect(totalColored).toBeGreaterThan(0)

  console.log(`✓ ${storyName}: ${totalColored} colored elements verified (${coloredPaths} paths, ${coloredElements} strokes)`)
}

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

  await step('Verify colors are applied to map regions', async () => {
    verifyColors(canvasElement, storyName)
  })

  console.log(` ${storyName} map rendered successfully`)
}

// Helper function to test chart rendering
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

  await step('Verify colors are applied to chart elements', async () => {
    verifyColors(canvasElement, storyName)
  })

  console.log(` ${storyName} chart rendered successfully`)
}
/**
 * Level of Respiratory Illness Activity Map
 *
 * Displays respiratory illness activity monitored using the acute respiratory
 * illness (ARI) metric. ARI captures a broad range of diagnoses from emergency
 * department visits for respiratory illnesses.
 */
export const ARI_Activity_Map: MapStory = {
  render: () => {
    const config = useConfigWithAbsoluteDataUrl(CONFIG_URLS.ariMap)
    if (!config) return <div>Loading...</div>
    return <CdcMap config={config} />
  },
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'ARI Activity Map')
  }
}

/**
 * Epidemic Trends Map
 *
 * CDC uses data from emergency department visits to model epidemic trends.
 * This model helps tell whether the number of new respiratory infections
 * is growing or declining in your state.
 */
export const Epidemic_Trends_Map: MapStory = {
  render: () => {
    const config = useConfigWithAbsoluteDataUrl(CONFIG_URLS.cfaMap)
    if (!config) return <div>Loading...</div>
    return <CdcMap config={config} />
  },
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'Epidemic Trends Map')
  }
}

/**
 * Wastewater Surveillance Map
 *
 * Wastewater surveillance for COVID-19, influenza, and RSV by state/territory.
 * Wastewater data can detect infections before clinical symptoms appear.
 */
export const Wastewater_Surveillance_Map: MapStory = {
  render: () => {
    const config = useConfigWithAbsoluteDataUrl(CONFIG_URLS.wastewaterMap)
    if (!config) return <div>Loading...</div>
    return <CdcMap config={config} />
  },
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'Wastewater Surveillance Map')
  }
}

/**
 * Percent of Tests Positive for Respiratory Viruses
 *
 * Weekly percent of tests positive for the viruses that cause COVID-19,
 * influenza, and RSV at the national level.
 */
export const Test_Positivity_Chart: ChartStory = {
  render: () => {
    const config = useConfigWithAbsoluteDataUrl(CONFIG_URLS.testPositivity)
    if (!config) return <div>Loading...</div>
    return <Chart config={config} />
  },
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Test Positivity Chart')
  }
}

/**
 * All Visualizations - Combined Test
 *
 * Tests all four visualizations from the respiratory viruses page to ensure
 * they all render correctly together.
 */
export const All_Visualizations: StoryObj = {
  render: () => {
    const ariConfig = useConfigWithAbsoluteDataUrl(CONFIG_URLS.ariMap)
    const cfaConfig = useConfigWithAbsoluteDataUrl(CONFIG_URLS.cfaMap)
    const wastewaterConfig = useConfigWithAbsoluteDataUrl(CONFIG_URLS.wastewaterMap)
    const testPositivityConfig = useConfigWithAbsoluteDataUrl(CONFIG_URLS.testPositivity)

    if (!ariConfig || !cfaConfig || !wastewaterConfig || !testPositivityConfig) {
      return <div>Loading...</div>
    }

    return (
      <div className="container-fluid p-4">
        <h1 className="mb-4">Respiratory Viruses Activity Levels - All Visualizations</h1>

        <section className="mb-5">
          <h2>Level of Respiratory Illness Activity</h2>
          <CdcMap config={ariConfig} />
        </section>

        <section className="mb-5">
          <h2>Epidemic Trends</h2>
          <CdcMap config={cfaConfig} />
        </section>

        <section className="mb-5">
          <h2>Wastewater Surveillance</h2>
          <CdcMap config={wastewaterConfig} />
        </section>

        <section className="mb-5">
          <h2>Percent of Tests Positive for Respiratory Viruses</h2>
          <Chart config={testPositivityConfig} />
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

    await step('Wait for all 4 COVE modules to render', async () => {
      await new Promise<void>((resolve, reject) => {
        const startTime = Date.now()
        const timeout = 20000

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

    await step('Verify all 4 SVG visualizations are present', async () => {
      const allSvgs = await canvas.findAllByRole('img', { hidden: true }, { timeout: 5000 })
      expect(allSvgs.length).toBeGreaterThanOrEqual(4)
    })

    await step('Verify exactly 4 COVE modules are present', async () => {
      const coveModules = canvasElement.querySelectorAll('.cdc-open-viz-module')
      expect(coveModules.length).toBe(4)
    })

    console.log(` All 4 visualizations rendered successfully`)
  }
}
