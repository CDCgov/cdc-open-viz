import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import CdcMap from '../CdcMap'
import MultiCountry from './_mock/multi-country.json'
import MultiState from './_mock/multi-state.json'
import StateMapWithTerritories from './_mock/example-city-state.json'
import CountyMapConfig from './_mock/county-patterns.json'
import RegionMapConfig from '../../examples/default-usa-regions.json'
import { assertVisualizationRendered, waitForPresence } from '@cdc/core/helpers/testing'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import CdcLogo from '@cdc/core/assets/logo2.svg?url'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Logo',
  component: CdcMap
}

export default meta

type Story = StoryObj<typeof CdcMap>

const assertLogoRendered = async (canvasElement: HTMLElement) => {
  await assertVisualizationRendered(canvasElement)

  const logo = (await waitForPresence('img.map-logo', canvasElement)) as HTMLImageElement | null
  expect(logo).toBeInTheDocument()
  expect(logo?.getAttribute('src')).toBe(CdcLogo)

  const downloadPngButton = await waitForPresence('button[aria-label="Download Map as Image"]', canvasElement)
  expect(downloadPngButton).toBeInTheDocument()
}

const logoStory = (config: NonNullable<Story['args']>['config'], description: string): Story => ({
  args: {
    config: editConfigKeys(config, [{ path: ['general', 'showDownloadImgButton'], value: true }]),
    logo: CdcLogo,
    isEditor: false
  },
  parameters: {
    docs: {
      description: {
        story: description
      }
    }
  },
  play: async ({ canvasElement }) => {
    await assertLogoRendered(canvasElement)
  }
})

export const ShowsLogo: Story = logoStory(
  MultiCountry,
  'Verifies that passing a logo URL renders the map logo image on a world map.'
)

export const StateMap: Story = logoStory(
  StateMapWithTerritories,
  'Verifies that passing a logo URL renders the map logo image on a U.S. state map.'
)

export const CountyMap: Story = logoStory(
  CountyMapConfig,
  'Verifies that passing a logo URL renders the map logo image on a U.S. county map.'
)

export const RegionMap: Story = logoStory(
  RegionMapConfig,
  'Verifies that passing a logo URL renders the map logo image on a U.S. region map.'
)

export const SingleStateMap: Story = logoStory(
  MultiState,
  'Verifies that passing a logo URL renders the map logo image on a single-state map.'
)
