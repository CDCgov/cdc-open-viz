import React, { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, expect } from 'storybook/test'
import CdcMap from '../CdcMap'
import MinimalExampleConfig from '../../examples/minimal-example.json'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import EqualNumberOptInExample from './_mock/DEV-7286.json'
import EqualNumberMap from './_mock/equal-number.json'
import MultiState from './_mock/multi-state.json'
import MultiStateShowUnselected from './_mock/multi-state-show-unselected.json'
import MultiCountry from './_mock/multi-country.json'
import MultiCountryHide from './_mock/multi-country-hide.json'
import SingleStateWithFilters from './_mock/DEV-8942.json'
import exampleCityState from './_mock/example-city-state.json'
import USBubbleCities from './_mock/us-bubble-cities.json'
import worldBubbleReset from './_mock/world-bubble-reset.json'
import CountyPatterns from './_mock/county-patterns.json'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import exampleLegendBins from './_mock/legend-bins.json'
import { performAndAssert, waitForPresence } from '@cdc/core/helpers/testing'

// Fallback step function for test descriptions
const step = async (description: string, fn: () => Promise<void> | void) => {
  await fn()
}

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map',
  component: CdcMap
}

type Story = StoryObj<typeof CdcMap>

const HiddenThenRevealCountyMap = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const revealTimer = window.setTimeout(() => setIsVisible(true), 150)
    return () => window.clearTimeout(revealTimer)
  }, [])

  return (
    <div style={{ width: 960 }}>
      <div
        data-testid='county-hidden-container'
        style={{ display: isVisible ? 'block' : 'none' }}
        aria-hidden={!isVisible}
      >
        <CdcMap config={CountyPatterns} />
      </div>
    </div>
  )
}

// Helper function to test map rendering
const testMapRendering = async (canvasElement: HTMLElement, storyName: string) => {
  const canvas = within(canvasElement)

  await step('Wait for map to render', async () => {
    const mapElement = await canvas
      .findByRole('img', { hidden: true }, { timeout: 10000 })
      .catch(() => canvasElement.querySelector('canvas'))
    expect(mapElement).toBeInTheDocument()
  })

  await step('Verify SVG or canvas element is present', async () => {
    const vizElement = canvasElement.querySelector('svg, canvas')
    expect(vizElement).toBeInTheDocument()
  })

  await step('Verify COVE module wrapper is present', async () => {
    const coveModule = canvasElement.querySelector('.cove-visualization')
    expect(coveModule).toBeInTheDocument()
  })
}

export const Equal_Interval_Map: Story = {
  args: {
    isEditor: true,
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/page-elements/equal-interval-map.json'
  },
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'Equal Interval Map')
  }
}

export const Equal_Number_Opt_In: Story = {
  args: {
    config: EqualNumberOptInExample
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Minimal_Config: Story = {
  args: {
    config: MinimalExampleConfig
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    expect(canvasElement.querySelector('.map-container')).toBeInTheDocument()
    expect(canvasElement.textContent).toContain('Minimal US Map')
  }
}

export const Equal_Number_Map: Story = {
  args: {
    isEditor: true,
    config: EqualNumberMap
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Scale_Based: Story = {
  args: {
    configUrl:
      'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Scale-Based-Categorical-Map-With-Special-Classes.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'Scale Based')
  }
}
export const Qualitative: Story = {
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/page-elements/qualitative-map.json'
  },
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'Qualitative')
  }
}

export const World_Map: Story = {
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/world-data-map-example.json'
  },
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'World Map')
  }
}

export const Filterable_Map: Story = {
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/page-elements/gender-rate-map.json'
  },
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'Filterable Map')
  }
}

export const Hex_Map: Story = {
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Hex_Map.json'
  },
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'Hex Map')
  }
}

export const County_Map: Story = {
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/US-County-Level-Map.json'
  },
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'County Map')
  }
}

export const County_Map_Revealed_After_Hidden_Mount: Story = {
  render: () => <HiddenThenRevealCountyMap />,
  parameters: {
    docs: {
      description: {
        story:
          'Regression for county maps rendered while hidden by host-page CSS/JS, then revealed without a browser resize.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    const hiddenContainer = canvasElement.querySelector('[data-testid="county-hidden-container"]') as HTMLElement | null

    expect(hiddenContainer).toBeInTheDocument()

    const countyCanvas = await within(canvasElement).findByRole('img', { hidden: true }, { timeout: 10000 })
    expect(countyCanvas).toBeInTheDocument()

    await testMapRendering(canvasElement, 'County Map Revealed After Hidden Mount')

    const renderedCanvas = canvasElement.querySelector('canvas') as HTMLCanvasElement | null
    expect(renderedCanvas).toBeInTheDocument()
    expect(renderedCanvas?.width).toBeGreaterThan(0)
    expect(renderedCanvas?.height).toBeGreaterThan(0)
  }
}

export const Single_State: Story = {
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/example-data-map-counties.json'
  },
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'Single State')
  }
}

export const Multi_State: Story = {
  args: {
    config: MultiState
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Multi_State_Show_Unselected: Story = {
  args: {
    config: MultiStateShowUnselected
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Multi_Country: Story = {
  args: {
    config: MultiCountry
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Multi_Country_Hide_Mode: Story = {
  args: {
    config: MultiCountryHide
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Bubble_Map: Story = {
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/example-Bubble-Map-world.json'
  },
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'Bubble Map')
  }
}

export const World_Bubble_Reset_Restores_All_Bubbles: Story = {
  args: {
    config: worldBubbleReset,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('circle.bubble.country--France', canvasElement)

    const getBubbleState = () => ({
      bubbleCount: canvasElement.querySelectorAll('circle.bubble[data-tooltip-id]').length
    })

    const dispatchBubblePointerClick = (bubble: Element) => {
      const rect = bubble.getBoundingClientRect()
      const clientX = rect.left + rect.width / 2
      const clientY = rect.top + rect.height / 2

      bubble.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, clientX, clientY }))
      bubble.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, clientX, clientY }))
    }

    await performAndAssert(
      'World bubble click narrows the rendered bubble set',
      getBubbleState,
      async () => {
        const franceBubble = canvasElement.querySelector('circle.bubble.country--France')
        expect(franceBubble).toBeTruthy()
        dispatchBubblePointerClick(franceBubble as Element)
      },
      (before, after) => after.bubbleCount > 0 && after.bubbleCount < before.bubbleCount
    )

    await performAndAssert(
      'Reset Zoom restores all world bubbles',
      getBubbleState,
      async () => {
        const resetButton = canvasElement.querySelector('button[aria-label="Reset Zoom"]') as HTMLButtonElement | null
        expect(resetButton).toBeTruthy()
        resetButton?.click()
      },
      (_before, after) => after.bubbleCount === worldBubbleReset.data.length
    )
  }
}

export const HHS_Region_Map: Story = {
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/example-hhs-regions-data.json'
  },
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'HHS Region Map')
  }
}

export const Custom_Map_Layers: Story = {
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/custom-layer-map.json'
  },
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'Custom Map Layers')
  }
}

export const Single_State_With_Filters: Story = {
  args: {
    config: SingleStateWithFilters
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

let newConfig = editConfigKeys(exampleCityState, [
  { path: ['general', 'palette', 'customColors'], value: ['red', 'orange', 'yellow', 'green', 'blue', 'violet'] }
])
newConfig = editConfigKeys(newConfig, [
  {
    path: ['legend', 'specialClasses'],
    value: [
      {
        key: 'Rate',
        value: '*',
        label: '*'
      }
    ]
  }
])
let exampleCityStateStandardColors = editConfigKeys(exampleCityState, [
  {
    path: ['legend', 'specialClasses'],
    value: [
      {
        key: 'Rate',
        value: '*',
        label: '*'
      }
    ]
  }
])
export const Custom_Color_Distributions_With_Special_Classes: Story = {
  args: {
    config: newConfig,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Custom_Color_Distributions_Without_Special_Classes: Story = {
  args: {
    config: editConfigKeys(newConfig, [{ path: ['legend', 'specialClasses'], value: [] }]),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Standard_Color_Distributions_With_Special_Classes: Story = {
  args: {
    config: exampleCityStateStandardColors,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Standard_Color_Distributions_Without_Special_Classes: Story = {
  args: {
    config: editConfigKeys(exampleCityStateStandardColors, [{ path: ['legend', 'specialClasses'], value: [] }]),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Custom_Color_Distributions_With_Update_Needed: Story = {
  args: {
    config: editConfigKeys(newConfig, [{ path: ['version'], value: '4.24.10' }]),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Legend_Bins: Story = {
  args: {
    config: exampleLegendBins,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const US_Bubble_Cities_Test: Story = {
  args: {
    config: USBubbleCities,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const City_Styles_By_Variable: Story = {
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  },
  args: {
    config: editConfigKeys(exampleCityState, [
      {
        path: ['visual', 'additionalCityStyles'],
        value: [
          {
            label: 'High Risk (Rate > 20)',
            column: 'Rate',
            value: '22',
            shape: 'Star'
          },
          {
            label: 'School Location',
            column: 'Location',
            value: 'School',
            shape: 'Triangle'
          },
          {
            label: 'Vehicle Location',
            column: 'Location',
            value: 'Vehicle',
            shape: 'Diamond'
          }
        ]
      },
      {
        path: ['visual', 'cityStyle'],
        value: 'circle'
      }
    ]),
    isEditor: true
  }
}

export default meta
