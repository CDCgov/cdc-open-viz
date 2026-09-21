import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, waitFor, within } from 'storybook/test'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import CdcDataTable from '../CdcDataTable'

const meta: Meta<typeof CdcDataTable> = {
  title: 'Components/Templates/DataTable/Sticky First Column',
  component: CdcDataTable,
  decorators: [
    Story => (
      <div style={{ maxWidth: '100%', width: '28rem' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    docs: {
      description: {
        component: 'Demonstrates the optional fixed first column while a wide data table scrolls horizontally.'
      }
    }
  }
}

type Story = StoryObj<typeof CdcDataTable>

const stickyFirstColumnConfig = {
  version: '4.26.6',
  type: 'table',
  visualizationType: 'Table',
  locale: 'en-US',
  data: [
    { location: 'Apache County', year: 2024, population: 66024, rate: 12.4, status: 'Reported' },
    { location: 'Cochise County', year: 2024, population: 124640, rate: 9.8, status: 'Reported' },
    { location: 'Coconino County', year: 2024, population: 145101, rate: 10.7, status: 'Provisional' }
  ],
  table: {
    label: 'County Data',
    caption: 'County data with a fixed first column.',
    cellMinWidth: 180,
    stickyFirstColumn: true,
    expanded: true,
    collapsible: false,
    showDownloadLinkBelow: false,
    download: false,
    showVertical: true,
    show: true
  },
  columns: {
    location: { name: 'location', label: 'Location', dataTable: true, order: 1 },
    year: { name: 'year', label: 'Year', dataTable: true, order: 2 },
    population: { name: 'population', label: 'Population', dataTable: true, order: 3 },
    rate: { name: 'rate', label: 'Rate', dataTable: true, order: 4 },
    status: { name: 'status', label: 'Status', dataTable: true, order: 5 }
  },
  dataFormat: {}
}

export const StickyFirstColumn: Story = {
  args: {
    config: stickyFirstColumnConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    const canvas = within(canvasElement)
    const table = await canvas.findByRole('table', { name: 'County data with a fixed first column.' })
    const scrollContainer = table.closest('.table-container') as HTMLElement
    const firstHeader = table.querySelector('thead th:first-child') as HTMLElement
    const firstColumnCells = table.querySelectorAll<HTMLElement>('tbody td:first-child')
    const firstCell = firstColumnCells[0]
    const secondCell = firstColumnCells[1]
    const initialHeaderLeft = firstHeader.getBoundingClientRect().left
    const initialCellLeft = firstCell.getBoundingClientRect().left

    expect(scrollContainer.scrollWidth).toBeGreaterThan(scrollContainer.clientWidth)
    expect(getComputedStyle(firstHeader).position).toBe('sticky')
    expect(getComputedStyle(firstCell).position).toBe('sticky')
    expect(getComputedStyle(firstCell).backgroundColor).toBe('rgb(242, 242, 242)')
    expect(getComputedStyle(secondCell).backgroundColor).toBe('rgb(255, 255, 255)')

    scrollContainer.scrollLeft = 240

    await waitFor(() => {
      expect(scrollContainer.scrollLeft).toBeGreaterThan(0)
      expect(firstHeader.getBoundingClientRect().left).toBeCloseTo(initialHeaderLeft, 0)
      expect(firstCell.getBoundingClientRect().left).toBeCloseTo(initialCellLeft, 0)
    })
  }
}

export default meta
