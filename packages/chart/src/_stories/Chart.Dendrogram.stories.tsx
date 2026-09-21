import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fireEvent, userEvent, within } from 'storybook/test'
import {
  assertVisualizationRendered,
  openAccordion,
  performAndAssert,
  waitForEditor,
  waitForPresence
} from '@cdc/core/helpers/testing'
import Chart from '../CdcChartComponent'
import { createNewChartConfig } from '../helpers/createNewChartConfig'

const data = [
  { node: 'Public Health', parent: '', style: 'solid', nodeColor: '#005eaa' },
  { node: 'Programs', parent: 'Public Health', style: 'solid', nodeColor: '#4b830d' },
  { node: 'Partners', parent: 'Public Health', style: 'dashed', nodeColor: '#712177' },
  { node: 'Clinics', parent: 'Partners', style: 'solid', nodeColor: '#c05600' }
]

const dendrogramConfig = createNewChartConfig({
  type: 'chart',
  visualizationType: 'Dendrogram',
  title: 'Public Health Hierarchy',
  enableTooltips: true,
  data,
  dendrogram: {
    columns: { node: 'node', parent: 'parent', style: 'style', nodeColor: 'nodeColor' },
    alignment: 'left',
    verticalAlignment: 'top',
    orientation: 'horizontal',
    height: 420,
    nodeRadius: 6,
    nodeColor: '#005eaa',
    linkColor: '#333333',
    showLabels: true,
    leafSpacing: 40,
    depthSpacing: 140
  }
})

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Dendrogram',
  component: Chart
}

export default meta
type Story = StoryObj<typeof Chart>

export const Dendrogram_Runtime: Story = {
  args: { config: dendrogramConfig, isEditor: false },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    const svg = await waitForPresence('.dendrogram-chart', canvasElement)
    expect(svg.querySelectorAll('.dendrogram-chart__node')).toHaveLength(4)
    expect(svg.querySelectorAll('.dendrogram-chart__link')).toHaveLength(3)
    expect(svg.querySelectorAll('.dendrogram-chart__link--dashed')).toHaveLength(1)
    await userEvent.click(within(canvasElement).getByRole('button', { name: 'Zoom in' }))
    await userEvent.click(within(canvasElement).getByRole('button', { name: 'Reset view' }))
  }
}

export const Dendrogram_Narrow: Story = {
  args: { config: dendrogramConfig, isEditor: false },
  decorators: [
    Story => (
      <div style={{ width: 360 }}>
        <Story />
      </div>
    )
  ],
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    const svg = await waitForPresence('.dendrogram-chart', canvasElement)
    expect(svg.querySelectorAll('.dendrogram-chart__node')).toHaveLength(4)
    expect(within(canvasElement).getByRole('button', { name: 'Zoom in' })).toBeVisible()
  }
}

export const Dendrogram_Editor: Story = {
  args: { config: dendrogramConfig, isEditor: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Dendrogram')

    const nodeColumn = canvas.getByLabelText('Node ID Column')
    await performAndAssert(
      'Node mapping validates the hierarchy',
      () => canvasElement.querySelector('[role="alert"]')?.textContent || '',
      () => userEvent.selectOptions(nodeColumn, 'nodeColor'),
      (_before, after) => after.includes('references missing parent')
    )
    await userEvent.selectOptions(nodeColumn, 'node')

    const parentColumn = canvas.getByLabelText('Parent ID Column')
    await performAndAssert(
      'Parent mapping validates the hierarchy',
      () => canvasElement.querySelector('[role="alert"]')?.textContent || '',
      () => userEvent.selectOptions(parentColumn, 'style'),
      (_before, after) => after.includes('references missing parent')
    )
    await userEvent.selectOptions(parentColumn, 'parent')

    const linkStyleColumn = canvas.getByLabelText('Link Style Column (Optional)')
    await performAndAssert(
      'Link style mapping changes rendered dashes',
      () => canvasElement.querySelectorAll('.dendrogram-chart__link--dashed').length,
      () => userEvent.selectOptions(linkStyleColumn, ''),
      (before, after) => before === 1 && after === 0
    )
    await userEvent.selectOptions(linkStyleColumn, 'style')

    const nodeColorColumn = canvas.getByLabelText('Node Color Column (Optional)')
    await performAndAssert(
      'Node color mapping changes rendered fills',
      () =>
        [...canvasElement.querySelectorAll('.dendrogram-chart__node circle')].map(node => node.getAttribute('fill')),
      () => userEvent.selectOptions(nodeColorColumn, ''),
      (before, after) => new Set(before).size > 1 && new Set(after).size === 1
    )
    await userEvent.selectOptions(nodeColorColumn, 'nodeColor')

    const orientation = canvas.getByLabelText('Orientation')
    await performAndAssert(
      'Vertical orientation changes node placement',
      () => canvasElement.querySelector('.dendrogram-chart__node')?.getAttribute('transform'),
      () => userEvent.selectOptions(orientation, 'vertical'),
      (before, after) => Boolean(before && after && before !== after && after.startsWith('translate('))
    )

    const alignment = canvas.getByLabelText('Horizontal Alignment')
    const getHorizontalTranslation = () => {
      const transform = canvasElement.querySelector('.dendrogram-chart__viewport')?.getAttribute('transform') || ''
      return Number(transform.match(/^translate\(([^ ]+)/)?.[1])
    }
    await performAndAssert(
      'Center alignment moves complete content bounds',
      getHorizontalTranslation,
      () => userEvent.selectOptions(alignment, 'center'),
      (before, after) => after > before
    )
    await performAndAssert(
      'Right alignment moves complete content bounds',
      getHorizontalTranslation,
      () => userEvent.selectOptions(alignment, 'right'),
      (before, after) => after > before
    )
    await performAndAssert(
      'Left alignment restores the initial placement',
      getHorizontalTranslation,
      () => userEvent.selectOptions(alignment, 'left'),
      (before, after) => after < before
    )

    const verticalAlignment = canvas.getByLabelText('Vertical Alignment')
    const getVerticalTranslation = () => {
      const transform = canvasElement.querySelector('.dendrogram-chart__viewport')?.getAttribute('transform') || ''
      return Number(transform.match(/^translate\([^ ]+ ([^)]+)/)?.[1])
    }
    await performAndAssert(
      'Center vertical alignment moves complete content bounds',
      getVerticalTranslation,
      () => userEvent.selectOptions(verticalAlignment, 'center'),
      (before, after) => after > before
    )
    await performAndAssert(
      'Bottom vertical alignment moves complete content bounds',
      getVerticalTranslation,
      () => userEvent.selectOptions(verticalAlignment, 'bottom'),
      (before, after) => after > before
    )
    await performAndAssert(
      'Top vertical alignment restores the initial placement',
      getVerticalTranslation,
      () => userEvent.selectOptions(verticalAlignment, 'top'),
      (before, after) => after < before
    )

    await performAndAssert(
      'Label toggle changes rendered labels',
      () => canvasElement.querySelectorAll('.dendrogram-chart__label').length,
      () => userEvent.click(canvas.getByLabelText('Show Node Labels')),
      (before, after) => before === 4 && after === 0
    )
    await performAndAssert(
      'Tooltip toggle removes tooltip bindings',
      () => canvasElement.querySelectorAll('[data-tooltip-id]').length,
      () => userEvent.click(canvas.getByLabelText('Show Tooltips')),
      (before, after) => before > 0 && after === 0
    )

    const height = canvas.getByLabelText('Height')
    await performAndAssert(
      'Height changes the chart container',
      () => (canvasElement.querySelector('.dendrogram-chart__container') as HTMLElement)?.style.height,
      () => fireEvent.change(height, { target: { value: '480' } }),
      (before, after) => before === '420px' && after === '480px'
    )

    const nodeRadius = canvas.getByLabelText('Node Radius')
    await performAndAssert(
      'Node radius changes rendered circles',
      () => canvasElement.querySelector('.dendrogram-chart__node circle')?.getAttribute('r'),
      () => fireEvent.change(nodeRadius, { target: { value: '10' } }),
      (before, after) => before === '6' && after === '10'
    )

    const leafSpacing = canvas.getByLabelText('Leaf Spacing')
    await performAndAssert(
      'Leaf spacing changes cross-axis placement',
      () => canvasElement.querySelectorAll('.dendrogram-chart__node')[3]?.getAttribute('transform'),
      () => fireEvent.change(leafSpacing, { target: { value: '45' } }),
      (before, after) => Boolean(before && after && before !== after)
    )

    const depthSpacing = canvas.getByLabelText('Depth Spacing')
    await performAndAssert(
      'Depth spacing changes hierarchy-level placement',
      () => canvasElement.querySelectorAll('.dendrogram-chart__node')[3]?.getAttribute('transform'),
      () => fireEvent.change(depthSpacing, { target: { value: '150' } }),
      (before, after) => Boolean(before && after && before !== after)
    )
  }
}

export const Dendrogram_Validation: Story = {
  args: {
    config: createNewChartConfig({
      ...dendrogramConfig,
      data: [{ node: 'Child', parent: 'Missing' }]
    }),
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await waitForPresence('[role="alert"]', canvasElement)
    expect(within(canvasElement).getByRole('alert')).toHaveTextContent('references missing parent')
  }
}
