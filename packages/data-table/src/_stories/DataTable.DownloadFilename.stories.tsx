import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import CdcDataTable from '../CdcDataTable'

const meta: Meta<typeof CdcDataTable> = {
  title: 'Components/Templates/Data Table Download Filename',
  component: CdcDataTable
}

type Story = StoryObj<typeof CdcDataTable>

const dataTableConfig = {
  version: '4.26.4',
  type: 'table',
  visualizationType: 'Table',
  locale: 'en-US',
  data: [
    { year: '2020', value: 77.3 },
    { year: '2021', value: 76.4 }
  ],
  table: {
    label: 'Data Table',
    expanded: true,
    limitHeight: false,
    height: '',
    caption: '',
    showDownloadUrl: false,
    showDataTableLink: true,
    showDownloadLinkBelow: false,
    search: false,
    indexLabel: '',
    download: true,
    downloadFileName: 'Standalone Table Report.csv',
    showVertical: true,
    show: true,
    defaultSort: {}
  },
  columns: {
    year: { name: 'year', label: 'Year', dataTable: true },
    value: { name: 'value', label: 'Value', dataTable: true }
  },
  dataFormat: {}
}

const captureCsvDownloadName = async (downloadButton: HTMLElement) => {
  const downloads: string[] = []
  const originalClick = HTMLAnchorElement.prototype.click

  HTMLAnchorElement.prototype.click = function () {
    if (this.download) downloads.push(this.download)
  }

  try {
    await userEvent.click(downloadButton)
    await waitFor(() => expect(downloads.length).toBeGreaterThan(0))
    return downloads[0]
  } finally {
    HTMLAnchorElement.prototype.click = originalClick
  }
}

export const StandaloneCsvDownloadUsesConfiguredFilename: Story = {
  args: {
    config: dataTableConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    const canvas = within(canvasElement)
    const downloadButton = await canvas.findByRole('button', {
      name: 'Download this data in a CSV file format.'
    })
    const downloadName = await captureCsvDownloadName(downloadButton)

    expect(downloadName).toBe('Standalone Table Report.csv')
  }
}

export default meta
