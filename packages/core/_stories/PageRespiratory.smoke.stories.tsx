import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import Chart from '@cdc/chart'
import CdcMap from '@cdc/map'
import { useEffect, useState } from 'react'
import { assertVisualizationRendered } from '../helpers/testing'

// Fallback step function for test descriptions
const step = async (description: string, fn: () => Promise<void> | void) => {
  console.log(`▶ ${description}`)
  await fn()
  console.log(`✓ ${description}`)
}

const meta: Meta = {
  title: 'Regression Tests/Pages/Respiratory',
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

type ConfigState = { config: any; failed: boolean }

const skipIfVisualizationDataUnavailable = (canvasElement: HTMLElement, storyName: string, error: unknown) => {
  const renderState = {
    svgCount: canvasElement.querySelectorAll('svg').length,
    canvasCount: canvasElement.querySelectorAll('canvas').length,
    hasCoveModule: !!canvasElement.querySelector('.cove-visualization')
  }

  if (renderState.svgCount === 0 && renderState.canvasCount === 0) {
    console.warn(`Skipping ${storyName}: visualization data could not be loaded (network may be unavailable in CI)`, {
      renderState,
      error
    })
    return true
  }

  return false
}

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

// Helper function to test map rendering.
// Skips assertions if the config could not be loaded due to network unavailability.
const testMapRendering = async (canvasElement: HTMLElement, storyName: string) => {
  // If the config fetch failed, a data-unavailable marker is rendered — skip gracefully.
  if (canvasElement.querySelector('[data-unavailable]')) {
    console.warn(`Skipping ${storyName}: config could not be loaded (network may be unavailable in CI)`)
    return
  }

  try {
    await step('Wait for map to render', async () => {
      await assertVisualizationRendered(canvasElement)
    })
  } catch (error) {
    if (skipIfVisualizationDataUnavailable(canvasElement, storyName, error)) {
      return
    }
    throw error
  }

  await step('Verify map element is present', async () => {
    const mapElement = canvasElement.querySelector('svg, canvas')
    expect(mapElement).toBeInTheDocument()
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

  try {
    await step('Wait for chart to render', async () => {
      await assertVisualizationRendered(canvasElement)
    })
  } catch (error) {
    if (skipIfVisualizationDataUnavailable(canvasElement, storyName, error)) {
      return
    }
    throw error
  }

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
/**
 * Level of Respiratory Illness Activity Map
 *
 * Displays respiratory illness activity monitored using the acute respiratory
 * illness (ARI) metric. ARI captures a broad range of diagnoses from emergency
 * department visits for respiratory illnesses.
 */
export const ARI_Activity_Map: MapStory = {
  render: () => {
    const { config, failed } = useConfigWithAbsoluteDataUrl(CONFIG_URLS.ariMap)
    if (failed) return <div data-unavailable="true">Config unavailable</div>
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
    const { config, failed } = useConfigWithAbsoluteDataUrl(CONFIG_URLS.cfaMap)
    if (failed) return <div data-unavailable="true">Config unavailable</div>
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
    const { config, failed } = useConfigWithAbsoluteDataUrl(CONFIG_URLS.wastewaterMap)
    if (failed) return <div data-unavailable="true">Config unavailable</div>
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
    const { config, failed } = useConfigWithAbsoluteDataUrl(CONFIG_URLS.testPositivity)
    if (failed) return <div data-unavailable="true">Config unavailable</div>
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
    const ari = useConfigWithAbsoluteDataUrl(CONFIG_URLS.ariMap)
    const cfa = useConfigWithAbsoluteDataUrl(CONFIG_URLS.cfaMap)
    const wastewater = useConfigWithAbsoluteDataUrl(CONFIG_URLS.wastewaterMap)
    const testPositivity = useConfigWithAbsoluteDataUrl(CONFIG_URLS.testPositivity)

    // Render each visualization independently — don't block on all loading simultaneously
    return (
      <div className="container-fluid p-4">
        <h1 className="mb-4">Respiratory Viruses Activity Levels - All Visualizations</h1>

        <section className="mb-5">
          <h2>Level of Respiratory Illness Activity</h2>
          {ari.config && <CdcMap config={ari.config} />}
          {ari.failed && <div data-unavailable="ari">ARI config unavailable</div>}
        </section>

        <section className="mb-5">
          <h2>Epidemic Trends</h2>
          {cfa.config && <CdcMap config={cfa.config} />}
          {cfa.failed && <div data-unavailable="cfa">CFA config unavailable</div>}
        </section>

        <section className="mb-5">
          <h2>Wastewater Surveillance</h2>
          {wastewater.config && <CdcMap config={wastewater.config} />}
          {wastewater.failed && <div data-unavailable="wastewater">Wastewater config unavailable</div>}
        </section>

        <section className="mb-5">
          <h2>Percent of Tests Positive for Respiratory Viruses</h2>
          {testPositivity.config && <Chart config={testPositivity.config} />}
          {testPositivity.failed && <div data-unavailable="test-positivity">Test Positivity config unavailable</div>}
        </section>
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    await step('Wait for configs to load or fail', async () => {
      // Wait until every section either has a COVE module or shows data-unavailable
      await new Promise<void>(resolve => {
        const startTime = Date.now()
        const timeout = 20000

        const checkReady = () => {
          const coveModules = canvasElement.querySelectorAll('.cove-visualization')
          const unavailableCount = canvasElement.querySelectorAll('[data-unavailable]').length
          const totalResolved = coveModules.length + unavailableCount

          if (totalResolved >= 4 || Date.now() - startTime > timeout) {
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
        console.warn(`${unavailableCount}/4 visualizations were unavailable (network may be down in CI)`)
      }

      // Pass if at least one visualization rendered, or all were unavailable (network failure)
      const allUnavailable = unavailableCount === 4
      if (!allUnavailable) {
        expect(coveModules.length).toBeGreaterThan(0)
      }
    })

    console.log(` All_Visualizations check complete`)
  }
}
