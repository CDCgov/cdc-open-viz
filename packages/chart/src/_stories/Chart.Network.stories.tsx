import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fireEvent, userEvent, within } from 'storybook/test'
import Chart from '../CdcChartComponent'
import { createNewChartConfig } from '../helpers/createNewChartConfig'
import {
  assertVisualizationRendered,
  openAccordion,
  performAndAssert,
  waitForEditor,
  waitForPresence
} from '@cdc/core/helpers/testing'

const rows = [
  {
    source: 'Clinic',
    target: 'Health Department',
    weight: 8,
    style: 'solid',
    nodeColor: '#005eaa',
    alternateSource: 'A',
    alternateTarget: 'B',
    alternateWeight: 1,
    alternateStyle: 'solid',
    alternateNodeColor: '#111111'
  },
  {
    source: 'Health Department',
    target: 'Hospital',
    weight: 5,
    style: 'dashed',
    nodeColor: '#4b830d',
    alternateSource: 'B',
    alternateTarget: 'C',
    alternateWeight: 5,
    alternateStyle: 'dashed',
    alternateNodeColor: '#222222'
  },
  {
    source: 'Clinic',
    target: 'Hospital',
    weight: 3,
    style: 'solid',
    nodeColor: '#005eaa',
    alternateSource: 'A',
    alternateTarget: 'C',
    alternateWeight: 10,
    alternateStyle: 'solid',
    alternateNodeColor: '#111111'
  },
  {
    source: 'Hospital',
    target: 'Clinic',
    weight: 2,
    style: 'dashed',
    nodeColor: '#712177',
    alternateSource: 'C',
    alternateTarget: 'A',
    alternateWeight: 20,
    alternateStyle: 'dashed',
    alternateNodeColor: '#333333'
  }
]

const networkConfig = createNewChartConfig({
  type: 'chart',
  visualizationType: 'Network',
  title: 'Partner Network',
  showTitle: true,
  enableTooltips: true,
  data: rows,
  network: {
    columns: {
      source: 'source',
      target: 'target',
      weight: 'weight',
      style: 'style',
      nodeColor: 'nodeColor'
    },
    directed: false,
    height: 420,
    nodeRadius: 8,
    nodeColor: '#005eaa',
    linkColor: '#333333',
    showLabels: true,
    linkDistance: 90,
    chargeStrength: -240,
    rotation: 0,
    scale: 1,
    offsetX: 0,
    offsetY: 0
  }
})

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Network',
  component: Chart
}

export default meta
type Story = StoryObj<typeof Chart>

export const Network_Runtime: Story = {
  args: { config: networkConfig, isEditor: false },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    const svg = await waitForPresence('.network-chart', canvasElement)
    const nodes = svg.querySelectorAll('.network-chart__node')
    const links = svg.querySelectorAll('.network-chart__link')
    const linkGroups = svg.querySelectorAll('.network-chart__link-group')

    expect(nodes).toHaveLength(3)
    expect(links).toHaveLength(3)
    expect(nodes[0]).toHaveAttribute('tabindex', '0')
    expect(nodes[0]).toHaveAttribute('aria-label')
    expect(linkGroups[0]).toHaveAttribute('data-tooltip-content')
    expect(svg.querySelectorAll('.network-chart__link--dashed')).toHaveLength(2)
    expect(svg.querySelectorAll('.network-chart__link:not(.network-chart__link--dashed)')).toHaveLength(1)
    expect(svg.querySelector('[aria-label^="Clinic,"] circle')).toHaveAttribute('fill', '#005eaa')
    expect(svg.querySelector('[aria-label^="Health Department,"] circle')).toHaveAttribute('fill', '#4b830d')
    expect(svg.querySelector('[aria-label^="Hospital,"] circle')).toHaveAttribute('fill', '#712177')

    const viewport = svg.querySelector('.network-chart__viewport')
    const initialTransform = viewport?.getAttribute('transform')
    fireEvent.wheel(svg, { deltaY: -100 })
    expect(viewport?.getAttribute('transform')).toBe(initialTransform)

    within(canvasElement).getByLabelText('Zoom in').focus()
    await userEvent.keyboard('{Enter}')
    expect(viewport?.getAttribute('transform')).not.toBe(initialTransform)
    await userEvent.click(within(canvasElement).getByLabelText('Rotate right'))
    expect(viewport?.getAttribute('transform')).toContain('rotate(15)')
    await userEvent.click(within(canvasElement).getByLabelText('Reset view'))
    expect(viewport?.getAttribute('transform')).toBe(initialTransform)
    await userEvent.hover(svg.querySelector('.network-chart__link-hitbox')!)
    const tooltip = await waitForPresence('.network-chart__tooltip', document.body)
    expect(window.getComputedStyle(tooltip).backgroundColor).toBe('rgb(255, 255, 255)')
  }
}

export const Network_NarrowViewport: Story = {
  args: { config: networkConfig, isEditor: false },
  decorators: [
    Story => (
      <div style={{ width: 360 }}>
        <Story />
      </div>
    )
  ],
  play: async ({ canvasElement }) => {
    const svg = (await waitForPresence('.network-chart', canvasElement)) as SVGSVGElement
    const [, , width, height] = (svg.getAttribute('viewBox') || '').split(' ').map(Number)
    expect(width).toBeGreaterThanOrEqual(160)
    expect(height).toBe(420)
    expect(svg.querySelectorAll('.network-chart__node')).toHaveLength(3)
  }
}

export const Network_Editor: Story = {
  args: {
    config: {
      ...networkConfig,
      network: {
        ...networkConfig.network,
        columns: { ...networkConfig.network.columns, style: '', nodeColor: '' }
      }
    },
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Network')
    expect(canvas.getByLabelText('Source Column')).toBeInTheDocument()
    expect(canvas.getByLabelText('Target Column')).toBeInTheDocument()
    expect(canvas.getByLabelText('Weight Column (Optional)')).toBeInTheDocument()
    expect(canvas.getByLabelText('Link Style Column (Optional)')).toBeInTheDocument()
    expect(canvas.getByLabelText('Node Color Column (Optional)')).toBeInTheDocument()
    expect(canvas.getByLabelText('Directed Network')).toBeInTheDocument()
    expect(canvas.getByLabelText('Show Node Labels')).toBeInTheDocument()
    expect(canvas.getByLabelText('Show Tooltips')).toBeInTheDocument()
    expect(canvas.getByLabelText('Link Distance')).toHaveAttribute('type', 'range')
    expect(canvas.getByLabelText('Repulsion Strength')).toHaveAttribute('type', 'range')
    expect(canvas.queryByLabelText('Initial Rotation (Degrees)')).not.toBeInTheDocument()
    expect(canvas.queryByLabelText('Initial Zoom')).not.toBeInTheDocument()
    expect(canvas.queryByLabelText('Initial Horizontal Offset')).not.toBeInTheDocument()
    expect(canvas.queryByLabelText('Initial Vertical Offset')).not.toBeInTheDocument()
    expect(canvas.queryByLabelText('Default Node Color')).not.toBeInTheDocument()
    expect(canvas.queryByLabelText('Link Color')).not.toBeInTheDocument()
    expect(canvas.queryByRole('button', { name: 'Reset Initial View' })).not.toBeInTheDocument()
    expect(canvas.queryByText('Pattern Settings')).not.toBeInTheDocument()
    expect(canvas.queryByText('Text Annotations')).not.toBeInTheDocument()
    expect(canvas.getByRole('button', { name: 'Columns' })).toBeInTheDocument()

    await openAccordion(canvas, 'Columns')
    expect(canvas.getByRole('button', { name: 'Add Configuration' })).toBeInTheDocument()
    await openAccordion(canvas, 'Network')

    const nodeLabels = () =>
      Array.from(canvasElement.querySelectorAll('.network-chart__label'))
        .map(label => label.textContent)
        .sort()
        .join('|')
    const linkWidths = () =>
      Array.from(canvasElement.querySelectorAll('.network-chart__link'))
        .map(link => link.getAttribute('stroke-width'))
        .join('|')
    const linkCoordinates = () =>
      Array.from(canvasElement.querySelectorAll('.network-chart__link'))
        .map(link => ['x1', 'y1', 'x2', 'y2'].map(attribute => link.getAttribute(attribute)).join(','))
        .join('|')
    const nodeFills = () =>
      Array.from(canvasElement.querySelectorAll('.network-chart__node circle'))
        .map(node => node.getAttribute('fill'))
        .sort()
        .join('|')

    await performAndAssert(
      'Source mapping changes rendered nodes',
      nodeLabels,
      async () => userEvent.selectOptions(canvas.getByLabelText('Source Column'), 'alternateSource'),
      (before, after) => before !== after && after.includes('A')
    )

    await performAndAssert(
      'Target mapping changes rendered nodes',
      nodeLabels,
      async () => userEvent.selectOptions(canvas.getByLabelText('Target Column'), 'alternateTarget'),
      (before, after) => before !== after && after === 'A|B|C'
    )

    await performAndAssert(
      'Weight mapping changes rendered link widths',
      linkWidths,
      async () => userEvent.selectOptions(canvas.getByLabelText('Weight Column (Optional)'), 'alternateWeight'),
      (before, after) => before !== after
    )

    await performAndAssert(
      'Directed links show arrowheads',
      () =>
        Array.from(canvasElement.querySelectorAll('.network-chart__link')).filter(link =>
          link.hasAttribute('marker-end')
        ).length,
      async () => userEvent.click(canvas.getByLabelText('Directed Network')),
      (before, after) => before === 0 && after === 4
    )

    await performAndAssert(
      'Node labels can be hidden',
      () => canvasElement.querySelectorAll('.network-chart__label').length,
      async () => userEvent.click(canvas.getByLabelText('Show Node Labels')),
      (before, after) => before > 0 && after === 0
    )

    await performAndAssert(
      'Tooltips can be disabled',
      () => canvasElement.querySelectorAll('[data-tooltip-content]').length,
      async () => userEvent.click(canvas.getByLabelText('Show Tooltips')),
      (before, after) => before > 0 && after === 0
    )

    await performAndAssert(
      'Node color mapping applies source-node data colors',
      nodeFills,
      async () => userEvent.selectOptions(canvas.getByLabelText('Node Color Column (Optional)'), 'alternateNodeColor'),
      (before, after) => before !== after && after.includes('#111111')
    )

    await performAndAssert(
      'Link style mapping applies styles per row',
      () => canvasElement.querySelectorAll('.network-chart__link--dashed').length,
      async () => userEvent.selectOptions(canvas.getByLabelText('Link Style Column (Optional)'), 'alternateStyle'),
      (before, after) => before === 0 && after === 2
    )

    await performAndAssert(
      'Height changes the rendered SVG viewport',
      () => canvasElement.querySelector('.network-chart')?.getAttribute('viewBox'),
      async () => fireEvent.change(canvas.getByLabelText('Height'), { target: { value: '360' } }),
      (before, after) => before !== after && after?.endsWith(' 360')
    )

    await performAndAssert(
      'Node radius changes rendered circles',
      () => canvasElement.querySelector('.network-chart__node circle')?.getAttribute('r'),
      async () => fireEvent.change(canvas.getByLabelText('Node Radius'), { target: { value: '12' } }),
      (before, after) => before !== after && after === '12'
    )

    await performAndAssert(
      'Link distance changes node layout',
      linkCoordinates,
      async () => fireEvent.change(canvas.getByLabelText('Link Distance'), { target: { value: '140' } }),
      (before, after) => before !== after
    )

    await performAndAssert(
      'Repulsion strength changes node layout',
      linkCoordinates,
      async () => fireEvent.change(canvas.getByLabelText('Repulsion Strength'), { target: { value: '-80' } }),
      (before, after) => before !== after
    )
  }
}
