import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, expect } from 'storybook/test'
import CdcMap from '../CdcMap'
import EqualNumberOptInExample from './_mock/DEV-7286.json'
import EqualNumberMap from './_mock/equal-number.json'
import MultiState from './_mock/multi-state.json'
import MultiCountry from './_mock/multi-country.json'
import MultiCountryHide from './_mock/multi-country-hide.json'
import SingleStateWithFilters from './_mock/DEV-8942.json'
import exampleCityState from './_mock/example-city-state.json'
import USBubbleCities from './_mock/us-bubble-cities.json'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import exampleLegendBins from './_mock/legend-bins.json'

// Fallback step function for test descriptions
const step = async (description: string, fn: () => Promise<void> | void) => {
  console.log(`▶ ${description}`)
  await fn()
  console.log(`✓ ${description}`)
}

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map',
  component: CdcMap
}

type Story = StoryObj<typeof CdcMap>

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
  }
}

export const Equal_Number_Map: Story = {
  args: {
    isEditor: true,
    config: EqualNumberMap
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
  }
}

export const Multi_Country: Story = {
  args: {
    config: MultiCountry
  }
}

export const Multi_Country_Hide_Mode: Story = {
  args: {
    config: MultiCountryHide
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
  }
}

export const Custom_Color_Distributions_Without_Special_Classes: Story = {
  args: {
    config: editConfigKeys(newConfig, [{ path: ['legend', 'specialClasses'], value: [] }]),
    isEditor: true
  }
}

export const Standard_Color_Distributions_With_Special_Classes: Story = {
  args: {
    config: exampleCityStateStandardColors,
    isEditor: true
  }
}

export const Standard_Color_Distributions_Without_Special_Classes: Story = {
  args: {
    config: editConfigKeys(exampleCityStateStandardColors, [{ path: ['legend', 'specialClasses'], value: [] }]),
    isEditor: true
  }
}

export const Custom_Color_Distributions_With_Update_Needed: Story = {
  args: {
    config: editConfigKeys(newConfig, [{ path: ['version'], value: '4.24.10' }]),
    isEditor: true
  }
}

export const Legend_Bins: Story = {
  args: {
    config: exampleLegendBins,
    isEditor: true
  }
}

export const US_Bubble_Cities_Test: Story = {
  args: {
    config: USBubbleCities,
    isEditor: true
  }
}

export default meta
