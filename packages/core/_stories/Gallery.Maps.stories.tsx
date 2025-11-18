import type { Meta, StoryObj } from '@storybook/react-vite'
import CdcMap from '@cdc/map'

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

// Bubble Maps
export const Bubble_Map_World: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/example-Bubble-Map-world.json" />
}

export const Bubble_Map_US: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/Example-Bubble-US-Data-Map.json" />
}

// Categorical Maps
export const Categorical_Map_With_Special_Classes: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/data-files/Scale-Based-Categorical-Map-With-Special-Classes.json" />
}

export const Qualitative_Categorical_Map: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/data-files/qualitative-map.json" />
}

// Custom Layer Map
export const Custom_Layer_Map: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/custom-layer-map.json" />
}

// Filterable Data Maps
export const Map_Multiple_Filters: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/map-multiple-filters.json" />
}

export const Map_Tab_Filters: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/map-tab-filters.json" />
}

// Geocode Map
export const US_Geocode_Map: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/example-u-s-geo-code-dat.json" />
}

// HHS Region Map
export const HHS_Regions_Map: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/example-hhs-regions-data.json" />
}

// Hex Maps
export const Standard_Hex_Map: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/Hex_Map.json" />
}

export const Hex_Map_With_Filter: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/example-hex-map-with-filter.json" />
}

export const Hex_Map_With_Arrows: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/Hex_Map_Arrows.json" />
}

// Map with Cities
export const US_Map_With_Cities: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/city-data-map-example.json" />
}

// Navigation-Only Maps
export const US_Navigation_Map: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/us-nav-map.json" />
}

export const World_Navigation_Map: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/world-nav-map-example.json" />
}

// Numeric Maps
export const Equal_Interval_Map: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/equal-interval-map.json" />
}

export const Equal_Number_Map: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/equal-number-map.json" />
}

export const Equal_Number_Map_New_Quantile: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/equal-number-map_new_quantile.json" />
}

// Single State Maps
export const Single_State_Map_Counties: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/example-data-map-counties.json" />
}

export const Single_State_With_Census_Toggle: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/single-state-map-with-census-toggle.json" />
}

export const Single_State_Filter_With_Zoom: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/single-state-filter-change-with-zoom.json" />
}

export const Multi_State_County_Map: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/multistate-county-map.json" />
}

// US County Map
export const US_County_Level_Map: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/US-County-Level-Map.json" />
}

// World Map
export const World_Data_Map: Story = {
  render: () => <CdcMap configUrl="https://www.cdc.gov/cove/examples/world-data-map-example.json" />
}
