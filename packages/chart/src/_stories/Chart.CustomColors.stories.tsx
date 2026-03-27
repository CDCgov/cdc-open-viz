import type { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '../CdcChartComponent'
import scatterPlotCustomColorConfig from './_mock/scatterplot_mock.json'
import pieCustomColorConfig from './_mock/pie_custom_colors.json'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import { expect, userEvent, waitFor } from 'storybook/test'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Custom Colors',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const ScatterPlot: Story = {
  args: {
    config: scatterPlotCustomColorConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

const pieCustomColors = ['#0B6E4F', '#C75000', '#7C4DFF', '#0077B6', '#D7263D']
const pieFallbackCustomColors = ['#004E89', '#1A659E', '#47A8BD', '#D1495B', '#EDAE49']

const normalizeColor = (color: string) => {
  const swatch = document.createElement('div')
  swatch.style.color = color
  document.body.appendChild(swatch)
  const normalized = getComputedStyle(swatch).color
  swatch.remove()
  return normalized
}

const assertPieCustomColorStory = async (canvasElement: HTMLElement, expectedColors: string[]) => {
  await assertVisualizationRendered(canvasElement)

  const chart = canvasElement.querySelector('svg.animated-pie')
  const legend = canvasElement.querySelector('.legend-container')
  expect(chart).toBeTruthy()
  expect(legend).toBeTruthy()

  await waitFor(() => {
    expect(chart?.querySelectorAll('path')).toHaveLength(expectedColors.length)
  })

  const legendItems = Array.from(legend!.querySelectorAll('[role="button"]')) as HTMLElement[]
  expect(legendItems).toHaveLength(expectedColors.length)

  const sliceColors = Array.from(chart!.querySelectorAll('path')).map(path =>
    normalizeColor(path.getAttribute('fill') || '')
  )
  expect(sliceColors).toEqual(expectedColors.map(normalizeColor))

  const legendColors = legendItems.map(item => {
    const swatch = item.querySelector('span.legend-item') as HTMLElement | null
    return normalizeColor(swatch ? getComputedStyle(swatch).backgroundColor : '')
  })
  expect(legendColors).toEqual(expectedColors.map(normalizeColor))

  await userEvent.click(legendItems[0])

  await waitFor(() => {
    expect(chart?.querySelectorAll('path')).toHaveLength(1)
    expect(legendItems[0].className).toContain('highlighted')
    expect(legendItems[1].className).toContain('inactive')
  })
}

export const PieChart: Story = {
  args: {
    config: pieCustomColorConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertPieCustomColorStory(canvasElement, pieCustomColors)
  }
}

const pieChartCustomColorsFallbackConfig = JSON.parse(JSON.stringify(pieCustomColorConfig))
pieChartCustomColorsFallbackConfig.title = 'Pie Chart Custom Colors Fallback'
pieChartCustomColorsFallbackConfig.general.palette.customColors = pieFallbackCustomColors
delete pieChartCustomColorsFallbackConfig.general.palette.customColorsOrdered

export const PieChartCustomColorsFallback: Story = {
  args: {
    config: pieChartCustomColorsFallbackConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertPieCustomColorStory(canvasElement, pieFallbackCustomColors)
  }
}

export default meta
