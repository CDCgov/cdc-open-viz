import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import DynamicSeriesBarConfig from './_mock/dynamic_series_bar_config.json'
import SuppressedBarConfig from './_mock/bar-chart-suppressed.json'
import { assertVisualizationRendered, waitForPresence } from '@cdc/core/helpers/testing'

import Chart from '../CdcChart'
import MinimalExampleConfig from '../../examples/minimal-example.json'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Percentage Values',
  component: Chart
}

export default meta
type Story = StoryObj<typeof Chart>

const percentageValueConfig = {
  ...MinimalExampleConfig,
  title: 'Mixed Percentage and Numeric Values',
  dataFormat: {
    ...MinimalExampleConfig.dataFormat,
    roundTo: 1
  },
  data: [
    { category: 'Percentage', value: '12.5%' },
    { category: 'Count', value: 20 }
  ]
}

const horizontalPercentageValueConfig = {
  ...percentageValueConfig,
  title: 'Horizontal Percentage Value',
  orientation: 'horizontal'
}

const getPercentageBar = (canvasElement: HTMLElement) =>
  Array.from(canvasElement.querySelectorAll<SVGPathElement>('path[data-tooltip-html]')).find(path =>
    path.getAttribute('data-tooltip-html')?.includes('Percentage')
  )

const stackedPercentageValueConfig = {
  ...MinimalExampleConfig,
  title: 'Stacked Percentage Value',
  visualizationSubType: 'stacked',
  orientation: 'vertical',
  dataFormat: {
    ...MinimalExampleConfig.dataFormat,
    roundTo: 1
  },
  data: [
    { category: 'Stack A', rate: '12.5%', count: 20 },
    { category: 'Stack B', rate: 5, count: 10 }
  ],
  series: [
    { dataKey: 'rate', name: 'Rate', type: 'Bar', axis: 'Left', tooltip: true },
    { dataKey: 'count', name: 'Count', type: 'Bar', axis: 'Left', tooltip: true }
  ]
}

const stackedHorizontalPercentageValueConfig = {
  ...stackedPercentageValueConfig,
  title: 'Stacked Horizontal Percentage Value',
  orientation: 'horizontal'
}

const dynamicPercentageData = DynamicSeriesBarConfig.data.map(row =>
  row.YearStart === 2015 && row.Stratification1 === '65 years or older' ? { ...row, Data_Value: '56.4%' } : row
)

const dynamicPercentageValueConfig = {
  ...DynamicSeriesBarConfig,
  title: 'Dynamic Series Percentage Value',
  dataFormat: {
    ...DynamicSeriesBarConfig.dataFormat,
    roundTo: 1
  },
  data: dynamicPercentageData,
  formattedData: dynamicPercentageData
}

const suppressionPercentageValueConfig = {
  ...SuppressedBarConfig,
  data: SuppressedBarConfig.data.map((row, index) => (index === 1 ? { ...row, 'Data 2': '110%' } : row))
}

const dynamicSuppressionCategory = '65 years or older'
const dynamicSuppressionData = DynamicSeriesBarConfig.data.map(row =>
  row.YearStart === 2015 && row.Stratification1 === dynamicSuppressionCategory ? { ...row, Data_Value: 'ABC' } : row
)
const dynamicSuppressionConfig = {
  ...DynamicSeriesBarConfig,
  data: dynamicSuppressionData,
  formattedData: dynamicSuppressionData,
  preliminaryData: [
    {
      ...SuppressedBarConfig.preliminaryData[0],
      column: dynamicSuppressionCategory,
      value: 'ABC'
    }
  ]
}

export const Percent_Decorated_Value_Renders_As_Bar: Story = {
  args: {
    config: percentageValueConfig
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('path[data-tooltip-html]', canvasElement)

    const percentageBar = getPercentageBar(canvasElement)

    expect(percentageBar).toBeDefined()
    expect(percentageBar?.closest('g[display]')).toHaveAttribute('display', 'block')
    expect(percentageBar?.getBBox().height).toBeGreaterThan(3)
  }
}

export const Percent_Decoration_Is_Preserved_In_Tooltip: Story = {
  args: {
    config: percentageValueConfig
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('path[data-tooltip-html]', canvasElement)

    const percentageBar = getPercentageBar(canvasElement)

    expect(percentageBar).toBeDefined()

    expect(percentageBar?.getAttribute('data-tooltip-html')).toContain('12.5%')
  }
}

export const Dynamic_Percent_Decoration_Is_Preserved_In_Tooltip: Story = {
  args: {
    config: dynamicPercentageValueConfig
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('path[data-tooltip-html]', canvasElement)

    const dynamicPercentageBar = Array.from(
      canvasElement.querySelectorAll<SVGPathElement>('path[data-tooltip-html]')
    ).find(path => {
      const tooltip = path.getAttribute('data-tooltip-html') || ''

      return tooltip.includes('2015') && tooltip.includes('65 years or older')
    })

    expect(dynamicPercentageBar).toBeDefined()
    expect(dynamicPercentageBar?.closest('g[display]')).toHaveAttribute('display', 'block')
    expect(dynamicPercentageBar?.getAttribute('data-tooltip-html')).toContain('56.4%')
  }
}

export const Suppression_Config_Does_Not_Hide_Percentage_Bars: Story = {
  args: {
    config: suppressionPercentageValueConfig
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('path[data-tooltip-html]', canvasElement)

    const percentageBar = Array.from(canvasElement.querySelectorAll<SVGPathElement>('path[data-tooltip-html]')).find(
      path => path.getAttribute('data-tooltip-html')?.includes('110%')
    )

    expect(percentageBar).toBeDefined()
    expect(percentageBar?.closest('g[display]')).toHaveAttribute('display', 'block')
    expect(percentageBar?.getBBox().height).toBeGreaterThan(3)
  }
}

export const Dynamic_Suppression_Target_Is_Preserved: Story = {
  args: {
    config: dynamicSuppressionConfig
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('path[data-tooltip-html]', canvasElement)

    const suppressedBar = Array.from(canvasElement.querySelectorAll<SVGPathElement>('path[data-tooltip-html]')).find(
      path => {
        const tooltip = path.getAttribute('data-tooltip-html') || ''

        return tooltip.includes('2015') && tooltip.includes(dynamicSuppressionCategory)
      }
    )
    const suppressedBarGroup = suppressedBar?.closest('g[display]')

    expect(suppressedBar).toBeDefined()
    expect(suppressedBarGroup).toHaveAttribute('display', 'block')
    expect(suppressedBarGroup).toHaveTextContent('†')
  }
}

export const Horizontal_Percent_Decoration_Is_Preserved_In_Tooltip: Story = {
  args: {
    config: horizontalPercentageValueConfig
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('path[data-tooltip-html]', canvasElement)

    const percentageBar = getPercentageBar(canvasElement)

    expect(percentageBar).toBeDefined()
    expect(percentageBar?.closest('g[display]')).toHaveAttribute('display', 'block')
    expect(percentageBar?.getBBox().width).toBeGreaterThan(3)
    expect(percentageBar?.getAttribute('data-tooltip-html')).toContain('12.5%')
  }
}

export const Stacked_Vertical_Percent_Decoration_Is_Preserved_In_Tooltip: Story = {
  args: {
    config: stackedPercentageValueConfig
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('path[data-tooltip-html]', canvasElement)

    const percentageSegment = Array.from(
      canvasElement.querySelectorAll<SVGPathElement>('path[data-tooltip-html]')
    ).find(path => {
      const tooltip = path.getAttribute('data-tooltip-html') || ''

      return tooltip.includes('Stack A') && tooltip.includes('Rate:')
    })

    expect(percentageSegment).toBeDefined()
    expect(percentageSegment).toHaveStyle({ display: 'block' })
    expect(percentageSegment?.getAttribute('data-tooltip-html')).toContain('12.5%')
  }
}

export const Stacked_Horizontal_Percent_Decoration_Is_Preserved_In_Tooltip: Story = {
  args: {
    config: stackedHorizontalPercentageValueConfig
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('path[data-tooltip-html]', canvasElement)

    const percentageSegment = Array.from(
      canvasElement.querySelectorAll<SVGPathElement>('path[data-tooltip-html]')
    ).find(path => {
      const tooltip = path.getAttribute('data-tooltip-html') || ''

      return tooltip.includes('Stack A') && tooltip.includes('Rate:')
    })

    expect(percentageSegment).toBeDefined()
    expect(percentageSegment).toHaveStyle({ display: 'block' })
    expect(percentageSegment?.getAttribute('data-tooltip-html')).toContain('12.5%')
  }
}
