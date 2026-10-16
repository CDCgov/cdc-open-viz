import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import Chart from '../CdcChart'
import simplifiedLine from './_mock/simplified_line.json'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Data Table Download Filename',
  component: Chart
}

type Story = StoryObj<typeof Chart>

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

export const ChartImageDownloadUsesTableFilenameFallback: Story = {
  args: {
    config: editConfigKeys(simplifiedLine, [
      { path: ['title'], value: '' },
      { path: ['dataFileSourceType'], value: 'file' },
      { path: ['dataUrl'], value: '' },
      { path: ['dataFileName'], value: '' },
      { path: ['table', 'show'], value: true },
      { path: ['table', 'expanded'], value: true },
      { path: ['table', 'download'], value: true },
      { path: ['table', 'showDownloadImgButton'], value: true },
      { path: ['table', 'downloadFileName'], value: 'Chart Table Report.csv' },
      { path: ['table', 'showDownloadLinkBelow'], value: false }
    ]),
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    const canvas = within(canvasElement)
    const downloadButton = await canvas.findByRole('button', { name: 'Download Chart as Image' })
    const downloadName = await captureImageDownloadName(downloadButton)

    expect(downloadName).toMatch(/^chart-table-report-\d{4}-\d{2}-\d{2}\.png$/)
  }
}

export default meta
