import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import CdcMap from '../CdcMap'
import countyHsaToggle from '../../examples/county-hsa-toggle.json'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Territories',
  component: CdcMap,
  args: {
    isEditor: true
  }
}

export default meta

type Story = StoryObj<typeof CdcMap>

const countyWithPuertoRicoData = countyHsaToggle.data.filter(row =>
  ['01001', '01003', '72001', '72127'].includes(row['FIPS Codes'])
)

const countyTerritoriesStoryBaseConfig = {
  ...countyHsaToggle,
  general: {
    ...countyHsaToggle.general,
    showHSABoundaries: false
  },
  migrations: {
    ...countyHsaToggle.migrations,
    preserveDataBackedCountyTerritories: false
  },
  data: countyWithPuertoRicoData
}

const assertCountyTerritoriesVisibility = async (canvasElement: HTMLElement, shouldShowTerritories: boolean) => {
  await assertVisualizationRendered(canvasElement)
  expect(canvasElement.querySelector('.map-container canvas')).toBeInTheDocument()

  if (shouldShowTerritories) {
    expect(canvasElement.textContent).toContain('U.S. territories')
    return
  }

  expect(canvasElement.textContent).not.toContain('U.S. territories')
}

export const Legacy_Preserve_Data_Backed_Territories: Story = {
  args: {
    config: {
      ...countyTerritoriesStoryBaseConfig,
      version: '4.26.3',
      general: {
        ...countyTerritoriesStoryBaseConfig.general,
        title: 'Legacy County Map With Puerto Rico Data',
        territoriesAlwaysShow: false
      },
      migrations: {
        ...countyTerritoriesStoryBaseConfig.migrations,
        preserveDataBackedCountyTerritories: true
      }
    }
  },
  play: async ({ canvasElement }) => {
    await assertCountyTerritoriesVisibility(canvasElement, true)
  }
}

export const Current_Hide_Available_Territories: Story = {
  args: {
    config: {
      ...countyTerritoriesStoryBaseConfig,
      general: {
        ...countyTerritoriesStoryBaseConfig.general,
        title: 'County Map Hide Available Territories',
        territoriesAlwaysShow: false
      }
    }
  },
  play: async ({ canvasElement }) => {
    await assertCountyTerritoriesVisibility(canvasElement, false)
  }
}

export const Current_Show_Available_Territories: Story = {
  args: {
    config: {
      ...countyTerritoriesStoryBaseConfig,
      general: {
        ...countyTerritoriesStoryBaseConfig.general,
        title: 'County Map Show Available Territories',
        territoriesAlwaysShow: true
      }
    }
  },
  play: async ({ canvasElement }) => {
    await assertCountyTerritoriesVisibility(canvasElement, true)
  }
}
