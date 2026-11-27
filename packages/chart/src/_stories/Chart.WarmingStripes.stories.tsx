import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor } from 'storybook/test'
import { assertVisualizationRendered, waitForPresence } from '@cdc/core/helpers/testing'

import Chart from '../CdcChartComponent'
import simplifiedLine from './_mock/simplified_line.json'

const warmingStripesData = [
  { Year: '2013', 'Temperature anomaly': -0.62 },
  { Year: '2014', 'Temperature anomaly': -0.48 },
  { Year: '2015', 'Temperature anomaly': -0.29 },
  { Year: '2016', 'Temperature anomaly': -0.35 },
  { Year: '2017', 'Temperature anomaly': 0.02 },
  { Year: '2018', 'Temperature anomaly': -0.29 },
  { Year: '2019', 'Temperature anomaly': 0.31 },
  { Year: '2020', 'Temperature anomaly': 0.45 },
  { Year: '2021', 'Temperature anomaly': 0.38 },
  { Year: '2022', 'Temperature anomaly': 0.71 },
  { Year: '2023', 'Temperature anomaly': 0.89 },
  { Year: '2024', 'Temperature anomaly': 1.12 }
]

const warmingStripesConfig = {
  ...simplifiedLine,
  title: 'Annual Temperature Anomaly',
  description: 'Each stripe represents one year. Blue years are cooler and orange years are warmer.',
  interactionLabel: 'Annual temperature anomaly stripe',
  visualizationType: 'Warming Stripes' as const,
  data: warmingStripesData,
  formattedData: warmingStripesData,
  dataUrl: undefined,
  runtimeDataUrl: undefined,
  dataFileName: undefined,
  dataFileSourceType: 'file',
  xAxis: {
    ...simplifiedLine.xAxis,
    dataKey: 'Year',
    type: 'categorical',
    sortDates: false
  },
  series: [{ dataKey: 'Temperature anomaly', type: 'Line', axis: 'Left', tooltip: true }],
  columns: {
    Year: { name: 'Year', label: 'Year' },
    'Temperature anomaly': { name: 'Temperature anomaly', label: 'Temperature anomaly' }
  },
  general: {
    ...simplifiedLine.general,
    palette: { name: 'divergent_blue_orange' }
  },
  legend: {
    ...simplifiedLine.legend,
    label: 'Temperature anomaly (°C)',
    description: 'Cooler to warmer',
    position: 'bottom',
    style: 'gradient'
  },
  dataFormat: {
    ...simplifiedLine.dataFormat,
    abbreviated: false,
    roundTo: 2,
    suffix: '°C',
    onlyShowTopPrefixSuffix: false
  },
  tooltips: {
    ...simplifiedLine.tooltips,
    singleSeries: false
  }
}

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Warming Stripes',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const AnnualTemperatureAnomaly: Story = {
  args: {
    config: warmingStripesConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('.warming-stripes rect', canvasElement)

    const stripes = canvasElement.querySelectorAll<SVGRectElement>('.warming-stripes rect')
    expect(stripes).toHaveLength(warmingStripesData.length)
    expect(stripes[2].getAttribute('fill')).toBe(stripes[5].getAttribute('fill'))
    expect(stripes[0].getAttribute('fill')).not.toBe(stripes[stripes.length - 1].getAttribute('fill'))

    const legend = await waitForPresence('.warming-stripes-gradient-legend', canvasElement)
    expect(legend?.textContent).toContain('Temperature anomaly (°C)')
    expect(legend?.textContent).toContain('Cooler to warmer')
    expect(legend?.querySelector('linearGradient')).toBeTruthy()

    await userEvent.hover(stripes[6])
    const tooltip = await waitForPresence('.tooltip.cove-visualization', canvasElement)

    expect(tooltip?.textContent).toContain('2019')
    expect(tooltip?.textContent).toContain('Temperature anomaly: 0.31°C')
    expect(tooltip?.textContent).not.toContain('undefined')
    expect(stripes[6]).toHaveAttribute('fill-opacity', '1')
    expect(stripes[0]).toHaveAttribute('fill-opacity', '0.5')

    await userEvent.unhover(stripes[6])
    await waitFor(() => {
      expect(canvasElement.querySelector('.tooltip.cove-visualization')).toBeNull()
      expect(Array.from(stripes).every(stripe => stripe.getAttribute('fill-opacity') === '1')).toBe(true)
    })
  }
}

export default meta
