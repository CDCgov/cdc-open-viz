import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import CdcMap from '../CdcMap'
import wastewaterMapSmallMultiples from './_mock/small_multiples/wastewater-map-small-multiples.json'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Download Title',
  component: CdcMap
}

export default meta

type Story = StoryObj<typeof CdcMap>

export const SmallMultiplesHiddenDownloadTitle: Story = {
  args: {
    config: editConfigKeys(wastewaterMapSmallMultiples, [
      { path: ['general', 'title'], value: 'Wastewater trends' },
      { path: ['general', 'showTitle'], value: false },
      { path: ['general', 'includeTitleInDownload'], value: true },
      { path: ['general', 'showDownloadImgButton'], value: true }
    ]),
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    const exportOnlyTitles = canvasElement.querySelectorAll('[data-download-only]')

    expect(exportOnlyTitles).toHaveLength(1)
    expect(exportOnlyTitles[0]).toHaveAttribute('hidden')
    expect(exportOnlyTitles[0]).toHaveTextContent('Wastewater trends')
  }
}
