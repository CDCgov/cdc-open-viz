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
    linkDistance: 90,
    chargeStrength: -240,
    rotation: 0,
    scale: 1,
    offsetX: 0,
    offsetY: 0
  }
})

const labelOverlapsLink = (label: SVGTextElement, link: SVGLineElement) => {
  const labelBounds = label.getBBox()
  const labelTransform = label.getCTM()
  const linkTransform = link.getCTM()
  if (!labelTransform || !linkTransform) {
    throw new Error('Network collision characterization requires SVG label and link CTMs.')
  }

  const overlapsAtDistance = (distance: number) => {
    const point = link
      .getPointAtLength(distance)
      .matrixTransform(linkTransform)
      .matrixTransform(labelTransform.inverse())
    return (
      point.x >= labelBounds.x &&
      point.x <= labelBounds.x + labelBounds.width &&
      point.y >= labelBounds.y &&
      point.y <= labelBounds.y + labelBounds.height
    )
  }

  const linkLength = link.getTotalLength()
  for (let distance = 0; distance < linkLength; distance += 1) {
    if (overlapsAtDistance(distance)) return true
  }
  return overlapsAtDistance(linkLength)
}

const expectLabelsWithinSvg = (svg: SVGSVGElement) => {
  const svgBounds = svg.getBoundingClientRect()
  svg.querySelectorAll<SVGTextElement>('.network-chart__label').forEach(label => {
    const labelBounds = label.getBoundingClientRect()
    expect(labelBounds.left).toBeGreaterThanOrEqual(svgBounds.left - 1)
    expect(labelBounds.right).toBeLessThanOrEqual(svgBounds.right + 1)
    expect(labelBounds.top).toBeGreaterThanOrEqual(svgBounds.top - 1)
    expect(labelBounds.bottom).toBeLessThanOrEqual(svgBounds.bottom + 1)
  })
}

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Network',
  component: Chart
}

export default meta
type Story = StoryObj<typeof Chart>

export const Network_Runtime: Story = {
  args: {
    config: createNewChartConfig({
      ...networkConfig,
      network: { ...networkConfig.network, rotation: 30 }
    }),
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    const table = await waitForPresence('.data-table', canvasElement)
    const tableHeaders = Array.from(table.querySelectorAll('thead th > span:first-child')).map(header =>
      header.textContent?.trim()
    )
    expect(tableHeaders).toEqual([
      'source',
      'target',
      'alternateSource',
      'alternateTarget',
      'alternateWeight',
      'alternateStyle',
      'alternateNodeColor'
    ])
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
    expect(window.getComputedStyle(svg.querySelector('.network-chart__label')!).fontSize).toBe('16px')
    const labels = [...svg.querySelectorAll<SVGTextElement>('.network-chart__label')]
    const renderedLinks = [...svg.querySelectorAll<SVGLineElement>('.network-chart__viewport .network-chart__link')]
    expect(labels.some(label => renderedLinks.some(link => labelOverlapsLink(label, link)))).toBe(false)
    const linkStyles = within(canvasElement).getByRole('group', { name: 'Link styles' })
    expect(linkStyles).toHaveTextContent('Solid')
    expect(linkStyles).toHaveTextContent('Dashed')

    const viewport = svg.querySelector('.network-chart__viewport')
    const initialTransform = viewport?.getAttribute('transform')
    expect(initialTransform).toContain('rotate(30)')
    expectLabelsWithinSvg(svg as SVGSVGElement)
    fireEvent.wheel(svg, { deltaY: -100 })
    expect(viewport?.getAttribute('transform')).toBe(initialTransform)

    within(canvasElement).getByLabelText('Zoom in').focus()
    await userEvent.keyboard('{Enter}')
    expect(viewport?.getAttribute('transform')).not.toBe(initialTransform)
    expect(within(canvasElement).queryByLabelText('Rotate left')).not.toBeInTheDocument()
    expect(within(canvasElement).queryByLabelText('Rotate right')).not.toBeInTheDocument()
    await userEvent.click(within(canvasElement).getByLabelText('Reset view'))
    expect(viewport?.getAttribute('transform')).toBe(initialTransform)
    expectLabelsWithinSvg(svg as SVGSVGElement)
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
    expect(height).toBe(388)
    expect(svg.querySelectorAll('.network-chart__node')).toHaveLength(3)
  }
}

export const Network_MinimumHeightWithLinkKey: Story = {
  args: {
    config: createNewChartConfig({
      ...networkConfig,
      network: { ...networkConfig.network, height: 160 }
    }),
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    const svg = (await waitForPresence('.network-chart', canvasElement)) as SVGSVGElement
    const [, , width, height] = (svg.getAttribute('viewBox') || '').split(' ').map(Number)
    expect(width).toBeGreaterThanOrEqual(160)
    expect(height).toBe(128)
    expect(within(canvasElement).getByRole('group', { name: 'Link styles' })).toBeVisible()
    expectLabelsWithinSvg(svg)
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
    expect(canvas.getByLabelText('Solid Link Legend Label')).toHaveValue('Solid')
    expect(canvas.getByLabelText('Dashed Link Legend Label')).toHaveValue('Dashed')
    expect(canvas.getByLabelText('Node Color Column (Optional)')).toBeInTheDocument()
    expect(canvas.getByLabelText('Directed Network')).toBeInTheDocument()
    expect(canvas.queryByLabelText('Show Node Labels')).not.toBeInTheDocument()
    expect(canvas.queryByLabelText('Show Tooltips')).not.toBeInTheDocument()
    expect(canvasElement.querySelector('[data-tooltip-content]')).toBeInTheDocument()
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
    expect(canvas.getByRole('button', { name: 'Legend' })).toBeInTheDocument()

    await openAccordion(canvas, 'Columns')
    expect(canvas.getByRole('button', { name: 'Add Configuration' })).toBeInTheDocument()
    await openAccordion(canvas, 'Network')

    const nodeLabels = () =>
      Array.from(canvasElement.querySelectorAll('.network-chart__label'))
        .map(label => label.textContent)
        .sort()
        .join('|')
    const linkWidths = () =>
      Array.from(canvasElement.querySelectorAll('.network-chart__viewport .network-chart__link'))
        .map(link => link.getAttribute('stroke-width'))
        .join('|')
    const linkCoordinates = () =>
      Array.from(canvasElement.querySelectorAll('.network-chart__viewport .network-chart__link'))
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
      'Node color mapping applies source-node data colors',
      nodeFills,
      async () => userEvent.selectOptions(canvas.getByLabelText('Node Color Column (Optional)'), 'alternateNodeColor'),
      (before, after) => before !== after && after.includes('#111111')
    )

    await performAndAssert(
      'Link style mapping applies styles per row',
      () => canvasElement.querySelectorAll('.network-chart__viewport .network-chart__link--dashed').length,
      async () => userEvent.selectOptions(canvas.getByLabelText('Link Style Column (Optional)'), 'alternateStyle'),
      (before, after) => before === 0 && after === 2
    )

    await performAndAssert(
      'Solid link legend label updates the rendered key',
      () => canvasElement.querySelector('[aria-label="Link styles"]')?.textContent || '',
      async () =>
        fireEvent.change(canvas.getByLabelText('Solid Link Legend Label'), { target: { value: 'Established' } }),
      (before, after) => before.includes('Solid') && after.includes('Established')
    )

    await performAndAssert(
      'Dashed link legend label updates the rendered key',
      () => canvasElement.querySelector('[aria-label="Link styles"]')?.textContent || '',
      async () =>
        fireEvent.change(canvas.getByLabelText('Dashed Link Legend Label'), { target: { value: 'Provisional' } }),
      (before, after) => before.includes('Dashed') && after.includes('Provisional')
    )

    await openAccordion(canvas, 'Legend')
    const legendPanel = within(
      canvas.getByRole('button', { name: 'Legend' }).closest('.accordion__item') as HTMLElement
    )
    expect(legendPanel.getByRole('checkbox', { name: /Hide Legend/ })).toBeInTheDocument()
    expect(legendPanel.queryByLabelText('Position')).not.toBeInTheDocument()
    expect(legendPanel.queryByLabelText('Legend Style')).not.toBeInTheDocument()
    expect(legendPanel.queryByLabelText('Title')).not.toBeInTheDocument()
    expect(legendPanel.queryByLabelText('Legend Description')).not.toBeInTheDocument()

    await performAndAssert(
      'Hide Legend removes the rendered link-style key',
      () => canvasElement.querySelectorAll('[aria-label="Link styles"]').length,
      async () => userEvent.click(legendPanel.getByRole('checkbox', { name: /Hide Legend/ })),
      (before, after) => before === 1 && after === 0
    )

    await performAndAssert(
      'Show Legend restores the rendered link-style key',
      () => canvasElement.querySelectorAll('[aria-label="Link styles"]').length,
      async () => userEvent.click(legendPanel.getByRole('checkbox', { name: /Hide Legend/ })),
      (before, after) => before === 0 && after === 1
    )

    await openAccordion(canvas, 'Network')

    await performAndAssert(
      'Height changes the rendered SVG viewport',
      () => Number(canvasElement.querySelector('.network-chart')?.getAttribute('viewBox')?.split(' ')[3]),
      async () => {
        const heightInput = canvas.getByLabelText('Height')
        await userEvent.clear(heightInput)
        await userEvent.type(heightInput, '360')
      },
      (before, after) => before !== after && after === 328
    )

    await performAndAssert(
      'Blank height restores the rendered SVG viewport default',
      () => Number(canvasElement.querySelector('.network-chart')?.getAttribute('viewBox')?.split(' ')[3]),
      async () => userEvent.clear(canvas.getByLabelText('Height')),
      (before, after) => before === 328 && after === 468
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
