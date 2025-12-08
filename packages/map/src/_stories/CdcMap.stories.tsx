import type { Meta, StoryObj } from '@storybook/react-vite'
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

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map',
  component: CdcMap
}

type Story = StoryObj<typeof CdcMap>

export const Equal_Interval_Map: Story = {
  args: {
    isEditor: true,
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
    isEditor: true,
    config: EqualNumberMap
  }
}

export const Scale_Based: Story = {
  args: {
    configUrl:
      'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Scale-Based-Categorical-Map-With-Special-Classes.json',
    isEditor: true
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

export const City_Styles_By_Variable: Story = {
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
