import type { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '../CdcChartComponent'
import smallMultiplesBars from './_mock/small_multiples/small_multiples_bars.json'
import smallMultiplesBigDataBars from './_mock/small_multiples/small_multiples_big_data_bars.json'
import smallMultiplesLinesColors from './_mock/small_multiples/small_multiples_lines_colors.json'
import smallMultiplesLines from './_mock/small_multiples/small_multiples_lines.json'
import smallMultiplesStackedBars from './_mock/small_multiples/small_multiples_stacked_bars.json'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Small Multiples',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const smallMultiples_Bars: Story = {
  args: {
    config: smallMultiplesBars,
    isEditor: false
  }
}

export const smallMultiples_BigDataBars: Story = {
  args: {
    config: smallMultiplesBigDataBars,
    isEditor: false
  }
}
export const smallMultiples_LinesColors: Story = {
  args: {
    config: smallMultiplesLinesColors,
    isEditor: false
  }
}
export const smallMultiples_Lines: Story = {
  args: {
    config: smallMultiplesLines,
    isEditor: false
  }
}
export const smallMultiples_StackedBars: Story = {
  args: {
    config: smallMultiplesStackedBars,
    isEditor: false
  }
}
export default meta
