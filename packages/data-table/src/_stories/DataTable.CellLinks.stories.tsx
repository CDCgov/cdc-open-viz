import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import CdcDataTable from '../CdcDataTable'

const meta: Meta<typeof CdcDataTable> = {
  title: 'Components/Templates/DataTable/Cell Links',
  component: CdcDataTable,
  parameters: {
    docs: {
      description: {
        component: 'Demonstrates clickable HTML links rendered inside data table cells.'
      }
    }
  }
}

type Story = StoryObj<typeof CdcDataTable>

const linkedDataTableConfig = {
  version: '4.26.6',
  type: 'table',
  visualizationType: 'Table',
  locale: 'en-US',
  general: {
    showMissingDataLabel: true,
    showSuppressedSymbol: true
  },
  data: [
    {
      topic: 'Respiratory viruses',
      source:
        'View <a href="https://www.cdc.gov/respiratory-viruses/" target="_blank" rel="noopener noreferrer">CDC Respiratory Viruses</a> guidance',
      contact: '<a href="mailto:respiratory@example.gov">respiratory@example.gov</a>'
    },
    {
      topic: 'Vaccines',
      source:
        'Review <a href="https://www.cdc.gov/vaccines/" target="_blank" rel="noopener noreferrer">CDC Vaccines</a> resources',
      contact: '<a href="mailto:vaccines@example.gov">vaccines@example.gov</a>'
    }
  ],
  table: {
    label: 'Data Table',
    expanded: true,
    limitHeight: false,
    height: '',
    caption: 'Data table with links in cells.',
    showDownloadUrl: false,
    showDataTableLink: false,
    showDownloadLinkBelow: false,
    search: false,
    indexLabel: '',
    download: false,
    showVertical: true,
    show: true,
    collapsible: false,
    defaultSort: {}
  },
  filters: [],
  columns: {
    topic: { name: 'topic', label: 'Topic', dataTable: true, order: 1 },
    source: { name: 'source', label: 'Source Link', dataTable: true, order: 2 },
    contact: { name: 'contact', label: 'Contact Link', dataTable: true, order: 3 }
  },
  dataFormat: {
    commas: false,
    prefix: '',
    suffix: '',
    abbreviated: false,
    roundTo: 0
  }
}

export const CellLinks: Story = {
  name: 'Cell Links',
  args: {
    config: linkedDataTableConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    const canvas = within(canvasElement)
    const table = await canvas.findByRole('table', { name: 'Data table with links in cells.' })
    const tableScope = within(table)
    const headers = Array.from(table.querySelectorAll('thead th > span:first-child')).map(header =>
      header.textContent?.trim()
    )
    const bodyLinks = Array.from(table.querySelectorAll('tbody td a'))

    expect(headers).toEqual(['Topic', 'Source Link', 'Contact Link'])
    expect(bodyLinks).toHaveLength(4)

    const sourceLink = tableScope.getByRole('link', { name: 'CDC Respiratory Viruses' })
    const sourceLinkStyle = getComputedStyle(sourceLink)
    const vaccinesLink = tableScope.getByRole('link', { name: 'CDC Vaccines' })
    const contactLink = tableScope.getByRole('link', { name: 'respiratory@example.gov' })
    const vaccinesContactLink = tableScope.getByRole('link', { name: 'vaccines@example.gov' })

    expect(sourceLink).toHaveAttribute('href', 'https://www.cdc.gov/respiratory-viruses/')
    expect(sourceLink).toHaveAttribute('target', '_blank')
    expect(sourceLink).toHaveAttribute('rel', 'noopener noreferrer')
    expect(sourceLinkStyle.color).toBe('rgb(0, 94, 162)')
    expect(sourceLinkStyle.textDecorationLine).toContain('underline')
    expect(sourceLink.closest('td')?.cellIndex).toBe(1)
    expect(vaccinesLink).toHaveAttribute('href', 'https://www.cdc.gov/vaccines/')
    expect(vaccinesLink).toHaveAttribute('target', '_blank')
    expect(vaccinesLink).toHaveAttribute('rel', 'noopener noreferrer')
    expect(vaccinesLink.closest('td')?.cellIndex).toBe(1)
    expect(contactLink).toHaveAttribute('href', 'mailto:respiratory@example.gov')
    expect(contactLink.closest('td')?.cellIndex).toBe(2)
    expect(vaccinesContactLink).toHaveAttribute('href', 'mailto:vaccines@example.gov')
    expect(vaccinesContactLink.closest('td')?.cellIndex).toBe(2)
  }
}

export default meta
