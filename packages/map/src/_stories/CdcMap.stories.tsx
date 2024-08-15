import type { Meta, StoryObj } from '@storybook/react'
import CdcMap from '../CdcMap'
import EqualNumberOptInExample from './_mock/DEV-7286.json'
import SingleStateWithFilters from './_mock/DEV-8942.json'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map',
  component: CdcMap
}

type Story = StoryObj<typeof CdcMap>

export const Equal_Interval_Map: Story = {
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/page-elements/equal-interval-map.json'
  }
}

export const Equal_Number_Opt_In: Story = {
  args: {
    config: EqualNumberOptInExample
  }
}

export const Equal_Number_Map: Story = {
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/page-elements/equal-number-map.json'
  }
}

export const Scale_Based: Story = {
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Scale-Based-Categorical-Map-With-Special-Classes.json'
  }
}
export const Qualitative: Story = {
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/page-elements/qualitative-map.json'
  }
}

export const World_Map: Story = {
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/world-data-map-example.json'
  }
}

export const Filterable_Map: Story = {
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/page-elements/gender-rate-map.json'
  }
}

export const Hex_Map: Story = {
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Hex_Map.json'
  }
}

export const County_Map: Story = {
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/US-County-Level-Map.json'
  }
}

export const Single_State: Story = {
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/example-data-map-counties.json'
  }
}

export const Bubble_Map: Story = {
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/example-Bubble-Map-world.json'
  }
}

export const HHS_Region_Map: Story = {
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/example-hhs-regions-data.json'
  }
}

export const Custom_Map_Layers: Story = {
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/custom-layer-map.json'
  }
}
export const Geocode: Story = {
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/example-u-s-geo-code-dat.json'
  }
}

export const Single_State_With_Filters: Story = {
  args: {
    config: SingleStateWithFilters
  }
}

export default meta
