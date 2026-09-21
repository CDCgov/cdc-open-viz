import type { Meta, StoryObj } from '@storybook/react-vite'

import { expect, waitFor } from 'storybook/test'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import Chart from '../CdcChart'
import barChartStacked from './_mock/barchart_labels.mock.json'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Data Cutoff',
  component: Chart
}

type Story = StoryObj<typeof Chart>

const wastewaterVariantData = [
  {
    'Week ending': '2024-08-03',
    JN1: 84.16,
    KP2: 9.84,
    KP3: 5.52,
    LB1: 0.99,
    XEC: 0.12
  },
  {
    'Week ending': '2024-08-10',
    JN1: 71.08,
    KP2: 17.82,
    KP3: 10.48,
    LB1: 1,
    XEC: 0.18
  },
  {
    'Week ending': '2024-08-17',
    JN1: 61.22,
    KP2: 22.95,
    KP3: 14.86,
    LB1: 1.04,
    XEC: 0.26
  }
]

const variantSeries = [
  { dataKey: 'JN1', name: 'JN.1', type: 'Bar', axis: 'Left', tooltip: true },
  { dataKey: 'KP2', name: 'KP.2', type: 'Bar', axis: 'Left', tooltip: true },
  { dataKey: 'KP3', name: 'KP.3', type: 'Bar', axis: 'Left', tooltip: true },
  { dataKey: 'LB1', name: 'LB.1', type: 'Bar', axis: 'Left', tooltip: true },
  { dataKey: 'XEC', name: 'XEC', type: 'Bar', axis: 'Left', tooltip: true }
]

const wastewaterVariantDataCutoffConfig = editConfigKeys(barChartStacked, [
  {
    path: ['title'],
    value: 'SARS-CoV-2 Variant Abundances in Triturator Wastewater Samples Over Time'
  },
  { path: ['showTitle'], value: true },
  { path: ['visualizationType'], value: 'Bar' },
  { path: ['visualizationSubType'], value: 'stacked' },
  { path: ['orientation'], value: 'vertical' },
  { path: ['dataCutoff'], value: '1' },
  { path: ['dataFormat', 'preserveOriginalDecimals'], value: true },
  { path: ['dataFormat', 'suffix'], value: '%' },
  { path: ['xAxis', 'dataKey'], value: 'Week ending' },
  { path: ['xAxis', 'label'], value: 'Week ending' },
  { path: ['xAxis', 'type'], value: 'categorical' },
  { path: ['xAxis', 'tickRotation'], value: 45 },
  { path: ['yAxis', 'label'], value: 'Variant abundance (%)' },
  { path: ['yAxis', 'min'], value: '0' },
  { path: ['yAxis', 'max'], value: '100' },
  { path: ['yAxis', 'numTicks'], value: '5' },
  { path: ['legend', 'singleRow'], value: false },
  { path: ['table', 'show'], value: true },
  { path: ['table', 'expanded'], value: true },
  { path: ['table', 'showVertical'], value: true },
  { path: ['table', 'indexLabel'], value: 'Week ending' },
  { path: ['series'], value: variantSeries },
  {
    path: ['columns'],
    value: Object.fromEntries(
      variantSeries.map((series, index) => [
        series.dataKey,
        {
          name: series.dataKey,
          label: series.name,
          dataTable: true,
          tooltips: true,
          prefix: '',
          suffix: '',
          order: index + 2
        }
      ])
    )
  },
  { path: ['data'], value: wastewaterVariantData },
  { path: ['formattedData'], value: wastewaterVariantData }
])

export const Wastewater_Variant_Abundance_Under_One_Percent: Story = {
  args: {
    config: wastewaterVariantDataCutoffConfig,
    isEditor: false
  },
  parameters: {
    docs: {
      description: {
        story:
          'Reproduces the data cutoff report for stacked SARS-CoV-2 wastewater variant abundances: sub-1% values such as 0.12, 0.26, and 0.99 render as <1% in the tooltip and data table when Data Cutoff is set to 1.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    await waitFor(() => {
      const tooltips = Array.from(canvasElement.querySelectorAll('[data-tooltip-html]')).map(
        element => element.getAttribute('data-tooltip-html') || ''
      )
      const underOneTooltip = tooltips.find(
        tooltip => tooltip.includes('Week ending: 2024-08-03') && tooltip.includes('LB.1: <1%')
      )
      const xecUnderOneTooltip = tooltips.find(
        tooltip => tooltip.includes('Week ending: 2024-08-17') && tooltip.includes('XEC: <1%')
      )
      const exactCutoffTooltip = tooltips.find(
        tooltip => tooltip.includes('Week ending: 2024-08-10') && tooltip.includes('LB.1: 1%')
      )
      const aboveCutoffTooltip = tooltips.find(
        tooltip => tooltip.includes('Week ending: 2024-08-17') && tooltip.includes('LB.1: 1.04%')
      )
      const dataTable = canvasElement.querySelector('.data-table')
      const tableRows = Array.from(dataTable?.querySelectorAll('tbody tr') || []).map(row =>
        Array.from(row.querySelectorAll('th, td')).map(cell => cell.textContent?.trim())
      )

      expect(underOneTooltip).toBeDefined()
      expect(xecUnderOneTooltip).toBeDefined()
      expect(exactCutoffTooltip).toBeDefined()
      expect(aboveCutoffTooltip).toBeDefined()
      expect(dataTable).toBeInTheDocument()
      expect(tableRows[0]).toEqual(['2024-08-03', '84.16%', '9.84%', '5.52%', '<1%', '<1%'])
      expect(tableRows[1]).toEqual(['2024-08-10', '71.08%', '17.82%', '10.48%', '1%', '<1%'])
      expect(tableRows[2]).toEqual(['2024-08-17', '61.22%', '22.95%', '14.86%', '1.04%', '<1%'])
    })
  }
}

export default meta
