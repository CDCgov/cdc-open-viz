import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { assertVisualizationRendered, openAccordion, performAndAssert, waitForEditor } from '@cdc/core/helpers/testing'

import Chart from '../CdcChartComponent'
import type { ChartConfig } from '../types/ChartConfig'
import comboConfig from './_mock/combo.json'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Editor Tests/Right Value Axis',
  component: Chart
}

export default meta

type Story = StoryObj<typeof Chart>

const rightAxisConfig = {
  ...comboConfig,
  animate: false,
  data: comboConfig.data.map((row, index) => ({
    ...row,
    'Monthly-Goal': String(1000.25 + index * 125.25)
  })),
  series: comboConfig.series.map((series, index) => ({
    ...series,
    axis: index === 4 ? 'Right' : series.axis
  })),
  yAxis: {
    ...comboConfig.yAxis,
    rightAxisSize: 160,
    rightHideAxis: false,
    rightHideLabel: false,
    rightHideTicks: false,
    rightLabel: 'Rate',
    rightTitlePlacement: 'side',
    rightNumTicks: 4,
    rightMin: '0',
    rightMax: '3000',
    smallestRightAxisMax: '',
    rightAnchors: [{ value: '1500', color: '#246', lineStyle: 'dashed' }]
  },
  dataFormat: {
    ...comboConfig.dataFormat,
    rightCommas: false,
    rightRoundTo: 0,
    rightPrefix: '',
    rightSuffix: ''
  }
} as ChartConfig

const getRightAxisState = (canvasElement: HTMLElement) => ({
  sideTitle: canvasElement.querySelector('.right-axis text.y-label')?.textContent?.trim() || '',
  topTitle: canvasElement.querySelector('.y-axis-top-title--right')?.textContent?.trim() || '',
  tickLabels: Array.from(canvasElement.querySelectorAll('.right-axis .vx-axis-tick text')).map(
    tick => tick.textContent?.trim() || ''
  ),
  axisLineCount: canvasElement.querySelectorAll('.right-axis > line').length,
  tickLineCount: canvasElement.querySelectorAll('.right-axis .vx-axis-tick > line').length,
  anchorCount: canvasElement.querySelectorAll('.anchor-y-right').length
})

export const RightValueAxisSectionTests: Story = {
  name: 'Right Value Axis Section Tests',
  args: {
    config: rightAxisConfig,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitForEditor(canvas)
    await assertVisualizationRendered(canvasElement)
    await openAccordion(canvas, 'Right Value Axis')

    expect(getRightAxisState(canvasElement).anchorCount).toBe(1)

    const labelInput = canvasElement.querySelector('#input-yAxis-none-rightLabel') as HTMLInputElement
    expect(labelInput).toBeTruthy()
    await performAndAssert(
      'Right axis label updates the side title',
      () => getRightAxisState(canvasElement),
      async () => {
        await userEvent.clear(labelInput)
        await userEvent.type(labelInput, 'Updated Rate')
      },
      (before, after) => before.sideTitle === 'Rate' && after.sideTitle === 'Updated Rate'
    )

    const placementSelect = canvasElement.querySelector('#select-yAxis-none-rightTitlePlacement') as HTMLSelectElement
    expect(placementSelect).toBeTruthy()
    await performAndAssert(
      'Right axis title moves from side to top',
      () => getRightAxisState(canvasElement),
      () => userEvent.selectOptions(placementSelect, 'top'),
      (before, after) =>
        before.sideTitle === 'Updated Rate' && after.sideTitle === '' && after.topTitle === 'Updated Rate'
    )

    const tickCountInput = canvasElement.querySelector('#input-yAxis-none-rightNumTicks') as HTMLInputElement
    expect(tickCountInput).toBeTruthy()
    await performAndAssert(
      'Right axis tick count changes rendered ticks',
      () => getRightAxisState(canvasElement).tickLabels.length,
      async () => {
        await userEvent.clear(tickCountInput)
        await userEvent.type(tickCountInput, '2')
      },
      (before, after) => before !== after && after > 0
    )

    const commasCheckbox = canvasElement.querySelector('input[name="rightCommas"]') as HTMLInputElement
    expect(commasCheckbox).toBeTruthy()
    await performAndAssert(
      'Right axis comma formatting updates rendered tick labels',
      () => getRightAxisState(canvasElement).tickLabels,
      () => userEvent.click(commasCheckbox),
      (before, after) => !before.some(label => label.includes(',')) && after.some(label => label.includes(','))
    )

    const roundInput = canvasElement.querySelector('#input-dataFormat-none-rightRoundTo') as HTMLInputElement
    expect(roundInput).toBeTruthy()
    await performAndAssert(
      'Right axis rounding updates rendered tick labels',
      () => getRightAxisState(canvasElement).tickLabels,
      async () => {
        await userEvent.clear(roundInput)
        await userEvent.type(roundInput, '2')
      },
      (before, after) =>
        !before.some(label => label.includes('.00')) && after.length > 0 && after.every(label => label.includes('.00'))
    )

    const prefixInput = canvasElement.querySelector('#input-dataFormat-none-rightPrefix') as HTMLInputElement
    expect(prefixInput).toBeTruthy()
    await performAndAssert(
      'Right axis prefix updates rendered tick labels',
      () => getRightAxisState(canvasElement).tickLabels,
      () => userEvent.type(prefixInput, '$'),
      (_before, after) => after.length > 0 && after.every(label => label.startsWith('$'))
    )

    const suffixInput = canvasElement.querySelector('#input-dataFormat-none-rightSuffix') as HTMLInputElement
    expect(suffixInput).toBeTruthy()
    await performAndAssert(
      'Right axis suffix updates rendered tick labels',
      () => getRightAxisState(canvasElement).tickLabels,
      () => userEvent.type(suffixInput, '%'),
      (_before, after) => after.length > 0 && after.every(label => label.endsWith('%'))
    )

    const hideAxisCheckbox = canvasElement.querySelector('input[name="rightHideAxis"]') as HTMLInputElement
    expect(hideAxisCheckbox).toBeTruthy()
    await performAndAssert(
      'Hide Axis removes the rendered right axis line',
      () => getRightAxisState(canvasElement).axisLineCount,
      () => userEvent.click(hideAxisCheckbox),
      (before, after) => before === 1 && after === 0
    )

    const hideLabelsCheckbox = canvasElement.querySelector('input[name="rightHideLabel"]') as HTMLInputElement
    expect(hideLabelsCheckbox).toBeTruthy()
    await performAndAssert(
      'Hide Tick Labels removes rendered right axis labels',
      () => getRightAxisState(canvasElement).tickLabels.length,
      () => userEvent.click(hideLabelsCheckbox),
      (before, after) => before > 0 && after === 0
    )

    const hideTicksCheckbox = canvasElement.querySelector('input[name="rightHideTicks"]') as HTMLInputElement
    expect(hideTicksCheckbox).toBeTruthy()
    await performAndAssert(
      'Hide Ticks removes rendered right axis tick lines',
      () => getRightAxisState(canvasElement).tickLineCount,
      () => userEvent.click(hideTicksCheckbox),
      (before, after) => before > 0 && after === 0
    )

    await userEvent.click(hideLabelsCheckbox)

    const maxInput = canvasElement.querySelector('#input-yAxis-none-rightMax') as HTMLInputElement
    expect(maxInput).toBeTruthy()
    await performAndAssert(
      'Right axis maximum updates the rendered domain',
      () => getRightAxisState(canvasElement).tickLabels,
      async () => {
        await userEvent.clear(maxInput)
        await userEvent.type(maxInput, '5000')
      },
      (before, after) => before.join('|') !== after.join('|') && after.some(label => label.includes('4,000'))
    )

    const minInput = canvasElement.querySelector('#input-yAxis-none-rightMin') as HTMLInputElement
    expect(minInput).toBeTruthy()
    await performAndAssert(
      'Right axis minimum updates the rendered domain',
      () => getRightAxisState(canvasElement).tickLabels,
      async () => {
        await userEvent.clear(minInput)
        await userEvent.type(minInput, '500')
      },
      (before, after) =>
        before.some(label => label.includes('$0.00%')) &&
        !after.some(label => label.includes('$0.00%')) &&
        after.length > 0
    )

    const smallestMaxInput = canvasElement.querySelector('#input-yAxis-none-smallestRightAxisMax') as HTMLInputElement
    expect(smallestMaxInput).toBeTruthy()
    await performAndAssert(
      'Smallest right axis maximum updates the rendered domain',
      () => getRightAxisState(canvasElement).tickLabels,
      async () => {
        await userEvent.clear(smallestMaxInput)
        await userEvent.type(smallestMaxInput, '7000')
      },
      (before, after) => before.join('|') !== after.join('|') && after.some(label => label.includes('5,000'))
    )

    expect(getRightAxisState(canvasElement).anchorCount).toBe(1)
  }
}
