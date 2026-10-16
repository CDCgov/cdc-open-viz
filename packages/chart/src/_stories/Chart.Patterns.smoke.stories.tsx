import type { Meta, StoryObj } from '@storybook/react'
import { expect } from 'storybook/test'
import StackedPattern from './_mock/stacked-pattern-test.json'

import Chart from '../CdcChartComponent'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Patterns',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const Stacked_Bar_Pattern: Story = {
  args: {
    config: StackedPattern,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Large_Wave_Pattern: Story = {
  args: {
    config: {
      ...StackedPattern,
      legend: {
        ...StackedPattern.legend,
        patterns: {
          Provisional: {
            ...StackedPattern.legend.patterns.Provisional,
            shape: 'waves',
            patternSize: 16
          }
        }
      }
    } as any
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    const wavePaths = Array.from(canvasElement.querySelectorAll('path.visx-pattern-wave'))
    expect(wavePaths.length).toBeGreaterThan(0)

    wavePaths.forEach(path => {
      expect(path).toHaveAttribute('fill', 'transparent')
      expect(path).toHaveAttribute('stroke', '#000000')
      expect(path).toHaveAttribute('stroke-width', '0.75')
    })
  }
}

export default meta
