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

const findTooltipPath = (canvasElement: HTMLElement, ...requiredText: string[]) =>
  Array.from(canvasElement.querySelectorAll<SVGPathElement>('path[data-tooltip-html]')).find(path => {
    const tooltip = path.getAttribute('data-tooltip-html') || ''

    return requiredText.every(text => tooltip.includes(text))
  })

const getPercentageBar = (canvasElement: HTMLElement) => findTooltipPath(canvasElement, 'Percentage')

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

const suppressionConfidenceData = [
  { Race_Ethnicity: 'American Indian or Alaska Native', Data_Value: '73.1', CI_Lower: '70.4', CI_Upper: '75.8' },
  { Race_Ethnicity: 'Asian', Data_Value: '77.2', CI_Lower: '75.3', CI_Upper: '79.1' },
  { Race_Ethnicity: 'Black or African American', Data_Value: '68.4', CI_Lower: '66.7', CI_Upper: '70.1' },
  { Race_Ethnicity: 'Hispanic or Latino', Data_Value: '71.6', CI_Lower: '70.2', CI_Upper: '73.0' },
  { Race_Ethnicity: 'More than one race', Data_Value: '72.8', CI_Lower: '70.5', CI_Upper: '75.1' },
  { Race_Ethnicity: 'White', Data_Value: '76.4', CI_Lower: '75.8', CI_Upper: '77.0' },
  {
    Race_Ethnicity: 'NHOPI',
    Data_Value: 'Suppressed',
    CI_Lower: 'Suppressed',
    CI_Upper: 'Suppressed'
  }
]

const wildcardSuppressionConfidenceConfig = {
  ...SuppressedBarConfig,
  title: 'Wildcard Suppression with Confidence Intervals',
  general: {
    ...SuppressedBarConfig.general,
    showMissingDataLabel: false,
    showSuppressedSymbol: true,
    showZeroValueData: false
  },
  xAxis: {
    ...SuppressedBarConfig.xAxis,
    dataKey: 'Race_Ethnicity',
    type: 'categorical'
  },
  confidenceKeys: {
    lower: 'CI_Lower',
    upper: 'CI_Upper'
  },
  preliminaryData: [
    {
      ...SuppressedBarConfig.preliminaryData[0],
      column: '',
      value: 'Suppressed',
      hideBarSymbol: true
    }
  ],
  series: [{ ...SuppressedBarConfig.series[0], dataKey: 'Data_Value' }],
  data: suppressionConfidenceData
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

export const Percent_Decorated_Value_Renders_As_Bar_And_Tooltip: Story = {
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

    const dynamicPercentageBar = findTooltipPath(canvasElement, '2015', '65 years or older')

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

    const percentageBar = findTooltipPath(canvasElement, '110%')
    const suppressedBarGroup = Array.from(canvasElement.querySelectorAll<SVGGElement>('g[display="block"]')).find(
      group => group.textContent?.includes('†') && group.querySelector('path[data-tooltip-html]')
    )

    expect(percentageBar).toBeDefined()
    expect(percentageBar?.closest('g[display]')).toHaveAttribute('display', 'block')
    expect(percentageBar?.getBBox().height).toBeGreaterThan(3)
    expect(suppressedBarGroup).toBeDefined()
  }
}

export const Wildcard_Suppression_Does_Not_Corrupt_Confidence_Domain: Story = {
  args: {
    config: wildcardSuppressionConfidenceConfig
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('path[data-tooltip-html]', canvasElement)
    await waitForPresence('path[stroke-width="px"]', canvasElement)

    const visibleNumericBars = Array.from(
      canvasElement.querySelectorAll<SVGPathElement>('path[data-tooltip-html]')
    ).filter(path => path.closest('g[display]')?.getAttribute('display') === 'block')
    const visibleConfidenceIntervals = Array.from(
      canvasElement.querySelectorAll<SVGPathElement>('path[stroke-width="px"]')
    ).filter(path => path.closest('g[display]')?.getAttribute('display') === 'block')
    const suppressedBar = findTooltipPath(canvasElement, 'NHOPI')
    const suppressedBarGroup = suppressedBar?.closest('g[display]')

    expect(visibleNumericBars).toHaveLength(6)
    visibleNumericBars.forEach(bar => {
      expect(bar.getAttribute('d')).not.toContain('NaN')
      expect(bar.getBBox().height).toBeGreaterThan(3)
    })

    expect(visibleConfidenceIntervals).toHaveLength(6)
    visibleConfidenceIntervals.forEach(path => {
      const pathData = path.getAttribute('d') || ''
      const coordinates = pathData.match(/-?\d+(?:\.\d+)?/g)?.map(Number)

      expect(pathData).not.toMatch(/NaN|Infinity/)
      expect(coordinates?.length).toBeGreaterThan(0)
      expect(coordinates?.every(Number.isFinite)).toBe(true)
    })

    expect(suppressedBar).toBeDefined()
    expect(suppressedBarGroup).toHaveAttribute('display', 'none')
    expect(suppressedBarGroup?.querySelector('rect[data-tooltip-html]')).toBeTruthy()
    expect(suppressedBarGroup).not.toHaveTextContent('†')
  }
}

export const Dynamic_Suppression_Target_Is_Preserved: Story = {
  args: {
    config: dynamicSuppressionConfig
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('path[data-tooltip-html]', canvasElement)

    const suppressedBar = findTooltipPath(canvasElement, '2015', dynamicSuppressionCategory)
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
    expect(percentageBar?.getBBox().width).toBeGreaterThanOrEqual(3)
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

    const percentageSegment = findTooltipPath(canvasElement, 'Stack A', 'Rate:')

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

    const percentageSegment = findTooltipPath(canvasElement, 'Stack A', 'Rate:')

    expect(percentageSegment).toBeDefined()
    expect(percentageSegment).toHaveStyle({ display: 'block' })
    expect(percentageSegment?.getAttribute('data-tooltip-html')).toContain('12.5%')
  }
}
