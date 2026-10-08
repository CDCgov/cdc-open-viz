import { useMemo } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, waitFor } from 'storybook/test'

import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import Chart from '../CdcChartComponent'
import { getBoxPlotConfig } from '../helpers/getBoxPlotConfig'
import { ChartConfig } from '../types/ChartConfig'

const expectedNumericValueOrder = '1,2,3,10,20,100'
const expectedNumericNonOutlierOrder = '1,2,3,10,20'

const boxPlotRows = [
  { Group: 'Group A', Score: '1' },
  { Group: 'Group A', Score: '2' },
  { Group: 'Group A', Score: '3' },
  { Group: 'Group A', Score: '10' },
  { Group: 'Group A', Score: '20' },
  { Group: 'Group A', Score: '100' }
]

const boxPlotLabels = {
  maximum: 'Maximum',
  q3: 'Upper Quartile',
  median: 'Median',
  q1: 'Lower Quartile',
  minimum: 'Minimum',
  count: 'Count',
  mean: 'Mean',
  iqr: 'Interquartile Range',
  outliers: 'Outliers',
  values: 'Values',
  lowerBounds: 'Lower Bounds',
  upperBounds: 'Upper Bounds'
}

const getConfig = (): ChartConfig =>
  ({
    version: '4.26.8',
    type: 'chart',
    visualizationType: 'Box Plot',
    title: 'Box Plot Numeric Sort Regression',
    orientation: 'vertical',
    animate: false,
    data: boxPlotRows,
    table: {
      show: true,
      expanded: true,
      download: false,
      label: 'Data Table',
      indexLabel: ''
    },
    xAxis: {
      dataKey: 'Group',
      type: 'categorical',
      label: 'Group'
    },
    yAxis: {
      dataKey: 'Score',
      label: 'Score',
      hideAxis: false,
      hideTicks: false,
      gridLines: true,
      numTicks: 5
    },
    series: [
      {
        dataKey: 'Score',
        name: 'Score'
      }
    ],
    boxplot: {
      plots: [],
      categories: [],
      borders: 'true',
      plotOutlierValues: false,
      plotNonOutlierValues: false,
      labels: boxPlotLabels
    },
    legend: {
      hide: true
    },
    dataFormat: {
      roundTo: 0,
      commas: false
    }
  } as ChartConfig)

function BoxPlotNumericSortRegression() {
  const config = useMemo(() => getConfig(), [])
  const [plots] = getBoxPlotConfig(config, config.data)
  const currentValues = plots[0]?.values?.join(',') || ''
  const currentNonOutliers = plots[0]?.columnNonOutliers?.join(',') || ''
  const preservesNumericOrder =
    currentValues === expectedNumericValueOrder && currentNonOutliers === expectedNumericNonOutlierOrder

  return (
    <div
      style={{
        background: '#eef2f7',
        display: 'grid',
        gap: 16,
        padding: 16
      }}
    >
      <section
        style={{
          background: '#fff',
          border: '1px solid #d9dfe7',
          borderRadius: 6,
          padding: 16
        }}
      >
        <Chart config={config} isEditor={false} interactionLabel='boxplot-numeric-sort-regression' />
      </section>

      <section
        aria-label='Box plot numeric sort diagnostic'
        style={{
          background: '#f7f8fa',
          border: '1px solid #d9dfe7',
          borderRadius: 6,
          display: 'grid',
          gap: 8,
          padding: 12
        }}
      >
        <div>
          <strong>Expected numeric values:</strong> <span>{expectedNumericValueOrder}</span>
        </div>
        <div>
          <strong>Generated boxplot values:</strong> <span data-testid='boxplot-current-values'>{currentValues}</span>
        </div>
        <div>
          <strong>Generated non-outliers:</strong>{' '}
          <span data-testid='boxplot-current-non-outliers'>{currentNonOutliers}</span>
        </div>
        <div data-testid='boxplot-numeric-sort-status'>
          <strong>Status:</strong> {preservesNumericOrder ? 'Numeric order preserved' : 'Issue reproduced'}
        </div>
      </section>
    </div>
  )
}

const getBoxPlotTableValue = (canvasElement: HTMLElement, rowLabel: string) => {
  const row = Array.from(canvasElement.querySelectorAll('tr')).find(tableRow => {
    const firstCell = tableRow.querySelector('th, td')
    return firstCell?.textContent?.trim() === rowLabel
  })

  return Array.from(row?.querySelectorAll('th, td') || [])
    .slice(1)
    .map(cell => cell.textContent?.trim())
    .join('')
}

const meta: Meta<typeof BoxPlotNumericSortRegression> = {
  title: 'Components/Templates/Chart/Box Plot Numeric Sort Regression',
  component: BoxPlotNumericSortRegression,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof BoxPlotNumericSortRegression>

export const Generated_Values_Use_Numeric_Order: Story = {
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    await waitFor(() => {
      expect(canvasElement.querySelector('[data-testid="boxplot-current-values"]')?.textContent).toBe(
        expectedNumericValueOrder
      )
      expect(canvasElement.querySelector('[data-testid="boxplot-current-non-outliers"]')?.textContent).toBe(
        expectedNumericNonOutlierOrder
      )
      expect(canvasElement.querySelector('[data-testid="boxplot-numeric-sort-status"]')?.textContent).toContain(
        'Numeric order preserved'
      )
      expect(getBoxPlotTableValue(canvasElement, 'Values')).toBe(expectedNumericValueOrder)
      expect(getBoxPlotTableValue(canvasElement, 'Non Outliers')).toBe(expectedNumericNonOutlierOrder)
      expect(canvasElement.textContent).toContain(expectedNumericValueOrder)
      expect(canvasElement.textContent).toContain(expectedNumericNonOutlierOrder)
    })
  }
}
