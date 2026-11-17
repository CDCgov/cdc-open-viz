import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { assertVisualizationRendered, openAccordion, performAndAssert, waitForEditor } from '@cdc/core/helpers/testing'
import Chart from '../CdcChartComponent'
import baseConfig from './_mock/line_chart_dashed_dates.json'

const config = {
  ...baseConfig,
  animate: false,
  title: 'Preliminary line effect compatibility',
  data: [
    { date: '2024-10-01', Value: '52', Status: 'final' },
    { date: '2025-01-01', Value: '57', Status: 'preliminary' },
    { date: '2025-04-01', Value: '54', Status: 'preliminary' }
  ]
}

const getIncomingPath = (canvasElement: HTMLElement) =>
  canvasElement.querySelector<SVGPathElement>('.line-chart-group path.visx-linepath')

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Special Lines/Compatibility',
  component: Chart
}

export default meta
type Story = StoryObj<typeof Chart>

export const ExistingPreliminaryRule: Story = {
  args: { config, isEditor: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await assertVisualizationRendered(canvasElement)
    const incomingPath = getIncomingPath(canvasElement)
    expect(incomingPath).toHaveAttribute('stroke-dasharray', '5 5')
    expect(incomingPath.getTotalLength()).toBeGreaterThan(1)
    const originalPath = incomingPath.getAttribute('d')

    await openAccordion(canvas, 'Data Series')
    const effect = within(
      canvasElement.querySelector<HTMLElement>('[data-rfd-draggable-id="preliminaryData-0"] .accordion')
    )
    await openAccordion(effect, 'Effect Data 1')
    expect(effect.getByLabelText('Apply style to')).toHaveValue('')
    await performAndAssert(
      'Editing an existing rule preserves its incoming dashed segment',
      () => canvasElement.querySelector('.legend-preliminary')?.textContent,
      async () => {
        const label = effect.getByLabelText('Label', { exact: true })
        await userEvent.clear(label)
        await userEvent.type(label, 'Updated preliminary')
      },
      (_, after) => after?.includes('Updated preliminary'),
      () => {
        expect(getIncomingPath(canvasElement)).toHaveAttribute('stroke-dasharray', '5 5')
        expect(getIncomingPath(canvasElement)).toHaveAttribute('d', originalPath)
      }
    )
  }
}

export const SavedOutgoingRule: Story = {
  args: {
    config: {
      ...config,
      preliminaryData: config.preliminaryData.map(rule => ({ ...rule, lineEffectScope: 'outgoing' }))
    },
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    expect(getIncomingPath(canvasElement)).toHaveAttribute('stroke-dasharray', '0')
    const outgoingPath = canvasElement.querySelector<SVGPathElement>('.line-chart-group path[stroke-dasharray="5 5"]')
    expect(outgoingPath).not.toBeNull()
    expect(outgoingPath.getTotalLength()).toBeGreaterThan(1)
  }
}

export const NewlyAddedRule: Story = {
  args: { config: { ...config, preliminaryData: [] }, isEditor: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await assertVisualizationRendered(canvasElement)
    await openAccordion(canvas, 'Data Series')
    await userEvent.click(canvas.getByRole('button', { name: 'Add Special Line' }))
    const effect = within(
      canvasElement.querySelector<HTMLElement>('[data-rfd-draggable-id="preliminaryData-0"] .accordion')
    )
    await openAccordion(effect, 'Effect Data 1')
    await userEvent.click(effect.getByRole('button', { name: 'Expand', exact: true }))
    await userEvent.click(within(effect.getByRole('list')).getByRole('option', { name: 'Value', exact: true }))
    await userEvent.selectOptions(effect.getByLabelText('COLUMN WITH CONFIGURATION VALUE'), 'Status')
    await userEvent.type(effect.getByLabelText(/VALUE TO TRIGGER/), 'preliminary')
    await performAndAssert(
      'A newly added rule styles only the outgoing interval',
      () => canvasElement.querySelectorAll('.line-chart-group path[stroke-dasharray="5 5"]').length,
      () => userEvent.selectOptions(effect.getByLabelText('Style', { exact: true }), 'Dashed Small'),
      (before, after) => before === 0 && after > 0,
      () => {
        expect(getIncomingPath(canvasElement)).toHaveAttribute('stroke-dasharray', '0')
        const outgoingPath = canvasElement.querySelector<SVGPathElement>(
          '.line-chart-group path[stroke-dasharray="5 5"]'
        )
        expect(outgoingPath.getTotalLength()).toBeGreaterThan(1)
      }
    )
    expect(effect.getByLabelText('Apply style to')).toHaveValue('outgoing')
    await performAndAssert(
      'A newly added rule can also style the incoming interval',
      () => getIncomingPath(canvasElement)?.getAttribute('stroke-dasharray'),
      () => userEvent.selectOptions(effect.getByLabelText('Apply style to'), ''),
      (before, after) => before === '0' && after === '5 5',
      () => expect(getIncomingPath(canvasElement).getTotalLength()).toBeGreaterThan(1)
    )
    await userEvent.selectOptions(effect.getByLabelText('Style', { exact: true }), 'Open Circles')
    expect(effect.queryByLabelText('Apply style to')).not.toBeInTheDocument()
  }
}

export const InheritedSeriesStyle: Story = {
  args: {
    config: {
      ...config,
      title: 'Inherited series style',
      data: [
        { date: '2024-10-01', Value: '52', Value2: '42', Status: 'preliminary' },
        { date: '2025-01-01', Value: '57', Value2: '47', Status: 'preliminary' },
        { date: '2025-04-01', Value: '54', Value2: '44', Status: 'final' }
      ],
      series: [
        { ...config.series[0], dataKey: 'Value', weight: 1 },
        { ...config.series[0], dataKey: 'Value2', weight: 3 }
      ],
      preliminaryData: [
        {
          ...config.preliminaryData[0],
          seriesKeys: ['Value', 'Value2'],
          inheritSeriesStyle: true
        }
      ]
    },
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    const swatch = canvasElement.querySelector<SVGLineElement>('.legend-preliminary svg line')
    expect(swatch).not.toBeNull()
    expect(swatch).toHaveAttribute('stroke', '#000')
    expect(swatch).toHaveAttribute('stroke-width', '2')
  }
}

export const InheritedSeriesCircleSize: Story = {
  args: {
    config: {
      ...config,
      title: 'Inherited circle size',
      data: [
        { date: '2024-10-01', Value: '52', Status: 'preliminary' },
        { date: '2025-01-01', Value: '57', Status: 'final' }
      ],
      preliminaryData: [
        {
          ...config.preliminaryData[0],
          style: 'Open Circles',
          lineCode: '◯',
          circleSize: 10,
          inheritSeriesStyle: true
        }
      ]
    },
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    const legendCircle = canvasElement.querySelector('.legend-preliminary circle')
    expect(legendCircle).toHaveAttribute('r', '10')
    expect(legendCircle?.parentElement).toHaveStyle({ width: '20px', height: '20px' })
    expect(canvasElement.querySelector('.line-chart-group circle')).toHaveAttribute('r', '10')
  }
}
