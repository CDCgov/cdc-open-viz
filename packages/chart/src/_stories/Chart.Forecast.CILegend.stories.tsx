import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fireEvent, fn, userEvent, waitFor, within } from 'storybook/test'
import cloneConfig from '@cdc/core/helpers/cloneConfig'
import { assertVisualizationRendered, openAccordion, performAndAssert, waitForEditor } from '@cdc/core/helpers/testing'

import Chart from '../CdcChartComponent'
import forecastComboWithGaps from './_mock/forecast_combo_with_gaps.json'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Forecast/Confidence Interval Legend',
  component: Chart
}

export default meta
type Story = StoryObj<typeof Chart>

const buildConfig = () => {
  const config = cloneConfig(forecastComboWithGaps) as any
  config.title = 'Forecast Confidence Intervals'
  config.visualizationType = 'Forecasting'
  config.legend.hide = false
  config.legend.position = 'bottom'
  config.legend.expandForecastConfidenceIntervals = true
  config.xAxis.label = 'Date'
  config.xAxis.tickRotation = 0
  config.yAxis.label = 'Cases'
  config.yAxis.max = ''
  config.general.palette = { name: 'qualitative_standard', version: '2.0', isReversed: false }
  config.columns = Object.fromEntries(
    ['Lower 50%', 'Upper 50%', 'Lower 90%', 'Upper 90%'].map(name => [
      name,
      {
        name,
        label: name,
        dataTable: true,
        tooltips: name.includes('90%'),
        prefix: '',
        suffix: '',
        roundToPlace: 0,
        commas: false
      }
    ])
  )
  config.series = [
    {
      dataKey: 'Stage',
      type: 'Forecasting',
      axis: 'Left',
      tooltip: false,
      stageColumn: 'Stage',
      stages: [
        { key: 'Estimate', color: 'sequential-blue' },
        { key: 'Forecast', color: 'sequential-orange' }
      ],
      confidenceIntervals: [
        { high: 'Upper 90%', low: 'Lower 90%' },
        { high: 'Upper 50%', low: 'Lower 50%' }
      ]
    }
  ]
  config.data = [
    {
      'Target End Date': '01/01/2026',
      Stage: 'Estimate',
      'Lower 50%': 90,
      'Upper 50%': 110,
      'Lower 90%': 75,
      'Upper 90%': 125
    },
    {
      'Target End Date': '01/08/2026',
      Stage: 'Estimate',
      'Lower 50%': 98,
      'Upper 50%': 118,
      'Lower 90%': 82,
      'Upper 90%': 135
    },
    {
      'Target End Date': '01/15/2026',
      Stage: 'Estimate',
      'Lower 50%': 105,
      'Upper 50%': 126,
      'Lower 90%': 88,
      'Upper 90%': 144
    },
    {
      'Target End Date': '01/22/2026',
      Stage: 'Forecast',
      'Lower 50%': 101,
      'Upper 50%': 130,
      'Lower 90%': 80,
      'Upper 90%': 154
    },
    {
      'Target End Date': '01/29/2026',
      Stage: 'Forecast',
      'Lower 50%': 96,
      'Upper 50%': 132,
      'Lower 90%': 72,
      'Upper 90%': 160
    },
    {
      'Target End Date': '02/05/2026',
      Stage: 'Forecast',
      'Lower 50%': 91,
      'Upper 50%': 136,
      'Lower 90%': 65,
      'Upper 90%': 168
    }
  ]
  return config
}

const tooltipConfigUpdates = fn()

const showForecastTooltip = async (canvasElement: HTMLElement) => {
  const hitArea = canvasElement.querySelector<SVGRectElement>('.forecasting-items rect')
  expect(hitArea).toBeTruthy()
  const bounds = hitArea!.getBoundingClientRect()

  fireEvent.mouseOut(hitArea!)
  await waitFor(() => expect(canvasElement.querySelector('.tooltip.cove-visualization')).toBeNull())
  fireEvent.mouseMove(hitArea!, {
    clientX: bounds.left + bounds.width * 0.65,
    clientY: bounds.top + bounds.height * 0.5
  })

  await waitFor(() => expect(canvasElement.querySelector('.tooltip.cove-visualization')).toBeTruthy())
}

const getTooltipBoundsState = (canvasElement: HTMLElement) => {
  const tooltipText = canvasElement.querySelector('.tooltip.cove-visualization')?.textContent || ''

  return {
    has50Bounds: tooltipText.includes('Lower 50%') && tooltipText.includes('Upper 50%'),
    has90Bounds: tooltipText.includes('Lower 90%') && tooltipText.includes('Upper 90%')
  }
}

export const LegendRowsAndIndependentInteraction: Story = {
  args: { config: buildConfig(), isEditor: false },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    const canvas = within(canvasElement)
    const legendItems = canvas.getAllByRole('button').filter(button => button.closest('[aria-label="legend"]'))

    expect(legendItems.map(item => item.textContent?.trim())).toEqual([
      '50% CI Estimate',
      '50% CI Forecast',
      '90% CI Estimate',
      '90% CI Forecast'
    ])
    expect(canvas.queryByRole('button', { name: 'Show All' })).not.toBeInTheDocument()

    const innerMarker = legendItems[0].querySelector<HTMLElement>('span.legend-item')
    const outerMarker = legendItems[2].querySelector<HTMLElement>('span.legend-item')
    expect(innerMarker).toBeTruthy()
    expect(outerMarker).toBeTruthy()
    expect(getComputedStyle(innerMarker!).backgroundColor).not.toBe(getComputedStyle(outerMarker!).backgroundColor)

    await userEvent.click(legendItems[0])
    await waitFor(() => {
      expect(legendItems[0]).toHaveClass('highlighted')
      legendItems.slice(1).forEach(item => expect(item).toHaveClass('inactive'))
      expect(canvas.getByRole('button', { name: 'Show All' })).toBeInTheDocument()

      const forecastBands = Array.from(canvasElement.querySelectorAll<SVGGElement>('[data-forecast-legend-key]'))
      const activeBands = forecastBands.filter(band => band.dataset.forecastActive === 'true')
      expect(activeBands).toHaveLength(1)
      expect(activeBands[0].dataset.forecastLegendKey).toBe('forecast-ci:Estimate:percentage%3A50')
      expect(activeBands[0].querySelector('path')).not.toHaveAttribute('fill', 'transparent')
      forecastBands
        .filter(band => band !== activeBands[0])
        .forEach(band => expect(band.querySelector('path')).toHaveAttribute('fill', 'transparent'))
    })

    await showForecastTooltip(canvasElement)
    const tooltipText = canvasElement.querySelector('.tooltip.cove-visualization')?.textContent || ''
    expect(getTooltipBoundsState(canvasElement)).toEqual({ has50Bounds: false, has90Bounds: true })
    expect(tooltipText.match(/Lower 90%/g)).toHaveLength(1)
    expect(tooltipText.match(/Upper 90%/g)).toHaveLength(1)

    for (const legendItem of legendItems.slice(1)) {
      await userEvent.click(legendItem)
    }
    await waitFor(() => {
      legendItems.forEach(item => expect(item).toHaveClass('highlighted'))
      expect(canvas.queryByRole('button', { name: 'Show All' })).not.toBeInTheDocument()
    })
  }
}

export const TooltipAuthoring: Story = {
  args: { config: buildConfig(), isEditor: true, setConfig: tooltipConfigUpdates },
  play: async ({ canvasElement }) => {
    tooltipConfigUpdates.mockClear()
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Columns')

    const getColumnTooltipToggle = (columnName: string) => {
      const columnButton = canvas
        .getAllByRole('button', { name: new RegExp(columnName) })
        .find(button => button.classList.contains('accordion__button')) as HTMLElement
      expect(columnButton).toBeTruthy()
      return within(columnButton.closest('.series-item--chart') as HTMLElement).getByRole('checkbox', {
        name: 'Show in tooltip'
      })
    }

    await showForecastTooltip(canvasElement)
    expect(getTooltipBoundsState(canvasElement)).toEqual({ has50Bounds: false, has90Bounds: true })

    await performAndAssert(
      'Include both 50% confidence interval bounds in tooltips',
      () => getTooltipBoundsState(canvasElement),
      async () => {
        await userEvent.click(getColumnTooltipToggle('Lower 50%'))
        await userEvent.click(getColumnTooltipToggle('Upper 50%'))
        await showForecastTooltip(canvasElement)
      },
      (before, after) => !before.has50Bounds && after.has50Bounds && after.has90Bounds
    )

    await performAndAssert(
      'Remove both 50% confidence interval bounds from tooltips',
      () => getTooltipBoundsState(canvasElement),
      async () => {
        await userEvent.click(getColumnTooltipToggle('Lower 50%'))
        await userEvent.click(getColumnTooltipToggle('Upper 50%'))
        await showForecastTooltip(canvasElement)
      },
      (before, after) => before.has50Bounds && !after.has50Bounds && after.has90Bounds
    )
  }
}
