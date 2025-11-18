import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, expect } from 'storybook/test'
import CdcMap from '@cdc/map'

// Fallback step function for test descriptions
const step = async (description: string, fn: () => Promise<void> | void) => {
  console.log(`▶ ${description}`)
  await fn()
  console.log(`✓ ${description}`)
}

const meta: Meta = {
  title: 'Gallery/Maps',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Map visualization examples from the CDC COVE Gallery'
      }
    }
  },
  tags: ['autodocs']
}

export default meta

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

// Bubble Maps
export const Bubble_Map_World: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/example-Bubble-Map-world.json" />,
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'Bubble Map World')
  }
}

export const Bubble_Map_US: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/Example-Bubble-US-Data-Map.json" />,
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'Bubble Map US')
  }
}

// Categorical Maps
export const Categorical_Map_With_Special_Classes: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/data-files/Scale-Based-Categorical-Map-With-Special-Classes.json" />,
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'Categorical Map With Special Classes')
  }
}

export const Qualitative_Categorical_Map: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/data-files/qualitative-map.json" />,
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'Qualitative Categorical Map')
  }
}

// Custom Layer Map
export const Custom_Layer_Map: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/custom-layer-map.json" />,
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'Custom Layer Map')
  }
}

// Filterable Data Maps
export const Map_Multiple_Filters: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/map-multiple-filters.json" />,
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'Map Multiple Filters')
  }
}

export const Map_Tab_Filters: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/map-tab-filters.json" />,
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'Map Tab Filters')
  }
}

// Geocode Map
export const US_Geocode_Map: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/example-u-s-geo-code-dat.json" />,
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'US Geocode Map')
  }
}

// HHS Region Map
export const HHS_Regions_Map: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/example-hhs-regions-data.json" />,
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'HHS Regions Map')
  }
}

// Hex Maps
export const Standard_Hex_Map: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/Hex_Map.json" />,
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'Standard Hex Map')
  }
}

export const Hex_Map_With_Filter: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/example-hex-map-with-filter.json" />,
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'Hex Map With Filter')
  }
}

export const Hex_Map_With_Arrows: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/Hex_Map_Arrows.json" />,
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'Hex Map With Arrows')
  }
}

// Map with Cities
export const US_Map_With_Cities: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/city-data-map-example.json" />,
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'US Map With Cities')
  }
}

// Navigation-Only Maps
export const US_Navigation_Map: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/us-nav-map.json" />,
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'US Navigation Map')
  }
}

export const World_Navigation_Map: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/world-nav-map-example.json" />,
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'World Navigation Map')
  }
}

// Numeric Maps
export const Equal_Interval_Map: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/equal-interval-map.json" />,
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'Equal Interval Map')
  }
}

export const Equal_Number_Map: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/equal-number-map.json" />,
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'Equal Number Map')
  }
}

export const Equal_Number_Map_New_Quantile: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/equal-number-map_new_quantile.json" />,
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'Equal Number Map New Quantile')
  }
}

// Single State Maps
export const Single_State_Map_Counties: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/example-data-map-counties.json" />,
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'Single State Map Counties')
  }
}

export const Single_State_With_Census_Toggle: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/single-state-map-with-census-toggle.json" />,
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'Single State With Census Toggle')
  }
}

export const Single_State_Filter_With_Zoom: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/single-state-filter-change-with-zoom.json" />,
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'Single State Filter With Zoom')
  }
}

export const Multi_State_County_Map: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/multistate-county-map.json" />,
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'Multi State County Map')
  }
}

// US County Map
export const US_County_Level_Map: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/US-County-Level-Map.json" />,
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'US County Level Map')
  }
}

// World Map
export const World_Data_Map: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/world-data-map-example.json" />,
  play: async ({ canvasElement }) => {
    await testMapRendering(canvasElement, 'World Data Map')
  }
}
