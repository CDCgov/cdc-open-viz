import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import CdcMap from '../CdcMap'
import MultiCountry from './_mock/multi-country.json'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import CdcLogo from '@cdc/core/assets/logo2.svg?url'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Logo',
  component: CdcMap
}

export default meta

type Story = StoryObj<typeof CdcMap>

export const ShowsLogo: Story = {
  args: {
    config: MultiCountry,
    logo: CdcLogo,
    isEditor: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Verifies that passing a logo URL renders the map logo image.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    const logo = canvasElement.querySelector('img.map-logo') as HTMLImageElement | null
    expect(logo).toBeInTheDocument()
    expect(logo?.getAttribute('src')).toBe(CdcLogo)
  }
}
