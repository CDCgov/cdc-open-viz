import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import CdcMapComponent from '../CdcMapComponent'
import cityStateConfig from './_mock/example-city-state.json'

const meta: Meta<typeof CdcMapComponent> = {
  title: 'Components/Templates/Data Table Download Filename',
  component: CdcMapComponent
}

type Story = StoryObj<typeof CdcMapComponent>

const captureImageDownloadName = async (downloadButton: HTMLElement) => {
  const downloads: string[] = []
  const originalClick = HTMLAnchorElement.prototype.click

  HTMLAnchorElement.prototype.click = function () {
    if (this.download) downloads.push(this.download)
  }

  try {
    await userEvent.click(downloadButton)
    await waitFor(() => expect(downloads.length).toBeGreaterThan(0), { timeout: 10000 })
    return downloads[0]
  } finally {
    HTMLAnchorElement.prototype.click = originalClick
    document.body.querySelectorAll('a[download]').forEach(anchor => anchor.remove())
  }
}

export const MapImageDownloadUsesTableFilenameFallback: Story = {
  args: {
    config: editConfigKeys(cityStateConfig, [
      { path: ['general', 'title'], value: '' },
      { path: ['general', 'showTitle'], value: false },
      { path: ['general', 'showDownloadImgButton'], value: true },
      { path: ['table', 'download'], value: true },
      { path: ['table', 'downloadFileName'], value: 'Map Table Report.csv' },
      { path: ['table', 'showDownloadLinkBelow'], value: false }
    ])
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    const canvas = within(canvasElement)
    const downloadButton = await canvas.findByRole('button', { name: 'Download Map as Image' })
    const downloadName = await captureImageDownloadName(downloadButton)

    expect(downloadName).toMatch(/^map-table-report-\d{4}-\d{2}-\d{2}\.png$/)
  }
}

export default meta
