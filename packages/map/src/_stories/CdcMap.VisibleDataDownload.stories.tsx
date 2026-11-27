import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import CdcMap from '../CdcMap'
import minimalConfig from '../../examples/minimal-example.json'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Visible Data Download',
  component: CdcMap
}

export default meta

type Story = StoryObj<typeof CdcMap>

const captureCsvDownload = async (downloadButton: HTMLElement) => {
  let downloadedBlob: Blob | undefined
  const originalAnchorClick = HTMLAnchorElement.prototype.click
  const originalCreateObjectUrl = URL.createObjectURL
  const originalRevokeObjectUrl = URL.revokeObjectURL

  HTMLAnchorElement.prototype.click = () => undefined
  URL.createObjectURL = blob => {
    if (blob instanceof Blob && blob.type.includes('text/csv')) downloadedBlob = blob
    return 'blob:visible-data-download'
  }
  URL.revokeObjectURL = () => undefined

  try {
    await userEvent.click(downloadButton)
    await waitFor(() => expect(downloadedBlob).toBeDefined())
    return await downloadedBlob!.text()
  } finally {
    HTMLAnchorElement.prototype.click = originalAnchorClick
    URL.createObjectURL = originalCreateObjectUrl
    URL.revokeObjectURL = originalRevokeObjectUrl
  }
}

export const FilterColumnAlsoVisible: Story = {
  args: {
    config: {
      ...minimalConfig,
      general: {
        ...minimalConfig.general,
        title: 'Visible Data Download Example'
      },
      columns: {
        ...minimalConfig.columns,
        category: {
          name: 'Category',
          label: 'Sample Category',
          tooltip: false,
          dataTable: true
        }
      },
      filters: [
        {
          columnName: 'Category',
          label: 'Category',
          filterStyle: 'dropdown',
          showDropdown: true,
          defaultValue: 'Alpha',
          values: ['Alpha', 'Beta']
        }
      ],
      table: {
        label: 'Data Table',
        forceDisplay: true,
        expanded: true,
        collapsible: false,
        download: true,
        downloadVisibleDataOnly: true,
        showDownloadLinkBelow: false,
        indexLabel: 'State'
      },
      data: [
        { 'FIPS Codes': 'Alabama', Rate: 10, Category: 'Alpha' },
        { 'FIPS Codes': 'Alaska', Rate: 20, Category: 'Beta' }
      ]
    } as any
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    const canvas = within(canvasElement)
    const downloadButton = await canvas.findByRole('button', {
      name: 'Download this data in a CSV file format.'
    })
    const csv = (await captureCsvDownload(downloadButton)).replace(/^\uFEFF/, '')
    const [header, firstRow] = csv.split(/\r?\n/)

    expect(header).toBe('State,Rate,Sample Category')
    expect(header.match(/Sample Category/g)).toHaveLength(1)
    expect(firstRow).toContain('Alpha')
    expect(csv).not.toContain('Beta')
    expect(csv.trim().split(/\r?\n/)).toHaveLength(2)
  }
}
