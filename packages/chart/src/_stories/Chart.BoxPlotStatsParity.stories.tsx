import { useMemo } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, waitFor } from 'storybook/test'

import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import Chart from '../CdcChartComponent'
import { createPlots } from '../components/BoxPlot/helpers'
import { getBoxPlotConfig } from '../helpers/getBoxPlotConfig'
import type { ChartConfig } from '../types/ChartConfig'

const expectedOutlier = '1000'
const expectedMetadataValues = '10,20,30,40,1000'

const boxPlotRows = [
  { Group: 'Group A', Score: '10' },
  { Group: 'Group A', Score: '20' },
  { Group: 'Group A', Score: '30' },
  { Group: 'Group A', Score: '40' },
  { Group: 'Group A', Score: '1,000' }
]

const boxPlotLabels = {
  maximum: 'Maximum',
  q3: 'Upper Quartile',
  median: 'Median',
  q1: 'Lower Quartile',
  minimum: 'Minimum',
  count: 'Count',
  mean: 'Mean',
  sd: 'Standard Deviation',
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
    title: 'Box Plot Stats Parity Regression',
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
      plotOutlierValues: true,
      plotNonOutlierValues: true,
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

function BoxPlotStatsParityRegression() {
  const config = useMemo(() => getConfig(), [])
  const [metadataPlots] = getBoxPlotConfig(config, config.data)
  const rendererPlots = createPlots(config.data, config)
  const metadataPlot = metadataPlots[0]
  const rendererPlot = rendererPlots[0]

  const metadataValues = metadataPlot?.values?.join(',') || ''
  const metadataOutliers = metadataPlot?.columnOutliers?.join(',') || '(none)'
  const rendererAcceptedValues =
    [...(rendererPlot?.columnNonOutliers?.Score || []), ...(rendererPlot?.columnOutliers?.Score || [])].join(',') ||
    '(none)'
  const rendererOutliers = rendererPlot?.columnOutliers?.Score?.join(',') || '(none)'
  const hasStatsParity = metadataValues === rendererAcceptedValues && metadataOutliers === rendererOutliers

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
        <Chart config={config} isEditor={false} interactionLabel='boxplot-stats-parity-regression' />
      </section>

      <section
        aria-label='Box plot stats parity diagnostic'
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
          <strong>Input score values:</strong> <span>10,20,30,40,1,000</span>
        </div>
        <div>
          <strong>Metadata values:</strong> <span data-testid='boxplot-metadata-values'>{metadataValues}</span>
        </div>
        <div>
          <strong>Metadata outliers:</strong> <span data-testid='boxplot-metadata-outliers'>{metadataOutliers}</span>
        </div>
        <div>
          <strong>Renderer accepted values:</strong>{' '}
          <span data-testid='boxplot-renderer-values'>{rendererAcceptedValues}</span>
        </div>
        <div>
          <strong>Renderer outliers:</strong> <span data-testid='boxplot-renderer-outliers'>{rendererOutliers}</span>
        </div>
        <div data-testid='boxplot-stats-parity-status'>
          <strong>Status:</strong> {hasStatsParity ? 'Stats parity preserved' : 'Issue reproduced'}
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

const meta: Meta<typeof BoxPlotStatsParityRegression> = {
  title: 'Components/Templates/Chart/Box Plot Stats Parity Regression',
  component: BoxPlotStatsParityRegression,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof BoxPlotStatsParityRegression>

export const Formatted_Numeric_Values_Keep_Stats_Parity: Story = {
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    await waitFor(() => {
      expect(canvasElement.querySelector('[data-testid="boxplot-metadata-values"]')?.textContent).toBe(
        expectedMetadataValues
      )
      expect(canvasElement.querySelector('[data-testid="boxplot-metadata-outliers"]')?.textContent).toBe(
        expectedOutlier
      )
      expect(canvasElement.querySelector('[data-testid="boxplot-renderer-values"]')?.textContent).toBe(
        expectedMetadataValues
      )
      expect(canvasElement.querySelector('[data-testid="boxplot-renderer-outliers"]')?.textContent).toBe(
        expectedOutlier
      )
      expect(canvasElement.querySelector('[data-testid="boxplot-stats-parity-status"]')?.textContent).toContain(
        'Stats parity preserved'
      )
      expect(getBoxPlotTableValue(canvasElement, 'Values')).toBe(expectedMetadataValues)
      expect(getBoxPlotTableValue(canvasElement, 'Outliers')).toBe(expectedOutlier)
    })
  }
}
