import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, waitFor } from 'storybook/test'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import Chart from '../CdcChartComponent'
import brushEnabledConfig from './_mock/brush_enabled.json'

const brushEffectConfig = {
  ...brushEnabledConfig,
  title: 'Brush Slider with Limited Coverage Markers',
  xAxis: {
    ...brushEnabledConfig.xAxis,
    type: 'date',
    brushDefaultRecentDateCount: 4
  },
  data: brushEnabledConfig.data.slice(0, 8).map(row => ({
    ...row,
    Coverage: 'Limited Coverage'
  })),
  preliminaryData: [
    {
      type: 'effect',
      seriesKeys: ['Production'],
      label: 'Limited Coverage',
      column: 'Coverage',
      value: 'Limited Coverage',
      style: 'Open Circles',
      displayTooltip: true,
      displayLegend: true,
      displayTable: true,
      circleSize: 4
    }
  ]
}

const brushSuppressionConfig = {
  ...brushEnabledConfig,
  title: 'Brush Slider with Suppressed Bars',
  visualizationType: 'Bar',
  visualizationSubType: 'regular',
  xAxis: {
    ...brushEnabledConfig.xAxis,
    type: 'date',
    brushDefaultRecentDateCount: 4
  },
  general: {
    showMissingDataLabel: true,
    showSuppressedSymbol: true,
    showZeroValueData: true
  },
  data: brushEnabledConfig.data.slice(0, 8).map((row, index) => ({
    ...row,
    Production: index === 0 ? 'Suppressed' : row.Production
  })),
  series: brushEnabledConfig.series.slice(0, 2).map(series => ({
    ...series,
    type: 'Bar'
  })),
  preliminaryData: [
    {
      type: 'suppression',
      seriesKeys: ['Production'],
      label: 'Suppressed',
      column: 'Production',
      value: 'Suppressed',
      style: '',
      displayTooltip: true,
      displayLegend: true,
      displayTable: true,
      symbol: 'Dagger',
      iconCode: '†',
      hideBarSymbol: false
    }
  ]
}

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/BrushSlider/Regression',
  component: Chart
}

export default meta

type Story = StoryObj<typeof Chart>

export const EffectMarkersStayInsideSelection: Story = {
  args: {
    config: brushEffectConfig,
    isEditor: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Effect markers render only for dates inside the active brush selection.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    await waitFor(() => {
      const effectCircles = Array.from(canvasElement.querySelectorAll('.line-chart-group > g > circle'))

      expect(effectCircles).toHaveLength(4)
      effectCircles.forEach(circle => {
        expect(Number.isFinite(Number(circle.getAttribute('cx')))).toBe(true)
      })
    })
  }
}

export const SuppressedBarsStayInsideSelection: Story = {
  args: {
    config: brushSuppressionConfig,
    isEditor: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Suppression metadata does not cause bars outside the active brush selection to render at the origin.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    await waitFor(() => {
      const barGroups = Array.from(canvasElement.querySelectorAll('g[class*="bar-group-"]'))

      expect(barGroups).toHaveLength(4)
      barGroups.forEach(group => {
        expect(group.getAttribute('transform')).not.toContain('NaN')
      })
    })
  }
}
