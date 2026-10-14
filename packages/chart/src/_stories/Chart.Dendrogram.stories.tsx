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
    orientation: 'horizontal',
    height: 420,
    nodeRadius: 6,
    nodeColor: '#005eaa',
    linkColor: '#333333',
    leafSpacing: 40,
    depthSpacing: 140
  }
})

const labelCollisionData = [
  { node: 'WWWW Public Health Operations', parent: '', style: 'solid', nodeColor: '#005eaa' },
  {
    node: 'Community Prevention Programs',
    parent: 'WWWW Public Health Operations',
    style: 'solid',
    nodeColor: '#4b830d'
  },
  {
    node: '区域 Clinical and Laboratory Partners 🙂',
    parent: 'WWWW Public Health Operations',
    style: 'dashed',
    nodeColor: '#712177'
  },
  {
    node: 'Regional Public Health Laboratories',
    parent: '区域 Clinical and Laboratory Partners 🙂',
    style: 'dashed',
    nodeColor: '#c05600'
  }
]

const labelOverlapsLink = (label: SVGTextElement, link: SVGPathElement) => {
  const labelBounds = label.getBBox()
  const labelTransform = label.getCTM()
  const linkTransform = link.getCTM()
  if (!labelTransform || !linkTransform) {
    throw new Error('Dendrogram collision characterization requires SVG label and link CTMs.')
  }

  const overlapsAtDistance = (distance: number) => {
    const point = link
      .getPointAtLength(distance)
      .matrixTransform(linkTransform)
      .matrixTransform(labelTransform.inverse())
    if (
      point.x >= labelBounds.x &&
      point.x <= labelBounds.x + labelBounds.width &&
      point.y >= labelBounds.y &&
      point.y <= labelBounds.y + labelBounds.height
    ) {
      return true
    }
    return false
  }

  const linkLength = link.getTotalLength()
  for (let distance = 0; distance < linkLength; distance += 1) {
    if (overlapsAtDistance(distance)) return true
  }

  return overlapsAtDistance(linkLength)
}

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
    const linkStyles = within(canvasElement).getByRole('group', { name: 'Link styles' })
    expect(within(linkStyles).getByText('Solid')).toBeVisible()
    expect(within(linkStyles).getByText('Dashed')).toBeVisible()
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

export const Dendrogram_Label_Collision_And_Link_Styles: Story = {
  args: {
    config: createNewChartConfig({
      ...dendrogramConfig,
      title: 'Dendrogram Label and Link Style Characterization',
      data: labelCollisionData,
      dendrogram: {
        ...dendrogramConfig.dendrogram,
        height: 360,
        linkStyleLabels: {
          solid: ' Established relationships across programs ',
          dashed: ' Provisional partnerships under review '
        },
        leafSpacing: 32,
        depthSpacing: 150
      }
    }),
    isEditor: false
  },
  decorators: [
    Story => (
      <div style={{ width: 700 }}>
        <Story />
      </div>
    )
  ],
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    const labels = [...canvasElement.querySelectorAll<SVGTextElement>('.dendrogram-chart__label')]
    const links = [
      ...canvasElement.querySelectorAll<SVGPathElement>('.dendrogram-chart__viewport .dendrogram-chart__link')
    ]
    expect(labels).toHaveLength(labelCollisionData.length)
    expect(getComputedStyle(labels[0]).fontSize).toBe('12px')
    expect(labels.some(label => links.some(link => labelOverlapsLink(label, link)))).toBe(false)

    const canvas = within(canvasElement)
    const linkStyles = canvas.getByRole('group', { name: 'Link styles' })
    expect(within(linkStyles).getByText('Established relationships across programs')).toBeVisible()
    expect(within(linkStyles).getByText('Provisional partnerships under review')).toBeVisible()
    expect(getComputedStyle(linkStyles).overflowX).toBe('auto')
    expect(getComputedStyle(linkStyles).whiteSpace).toBe('nowrap')
    expect(getComputedStyle(linkStyles.querySelector('.dendrogram-chart__link-key-item')!).flexShrink).toBe('0')

    const legendLines = linkStyles.querySelectorAll('line')
    expect(legendLines).toHaveLength(2)
    const renderedSolid = canvasElement.querySelector(
      '.dendrogram-chart__viewport .dendrogram-chart__link:not(.dendrogram-chart__link--dashed)'
    )!
    const renderedDashed = canvasElement.querySelector('.dendrogram-chart__viewport .dendrogram-chart__link--dashed')!
    expect(getComputedStyle(legendLines[0]).strokeDasharray).toBe(getComputedStyle(renderedSolid).strokeDasharray)
    expect(getComputedStyle(legendLines[1]).strokeDasharray).toBe(getComputedStyle(renderedDashed).strokeDasharray)
  }
}

export const Dendrogram_Vertical_Label_Collision: Story = {
  args: {
    config: createNewChartConfig({
      ...dendrogramConfig,
      title: 'Vertical Dendrogram Label Collision Characterization',
      data: labelCollisionData,
      dendrogram: {
        ...dendrogramConfig.dendrogram,
        orientation: 'vertical',
        height: 480,
        leafSpacing: 56,
        depthSpacing: 150
      }
    }),
    isEditor: false
  },
  decorators: [
    Story => (
      <div style={{ width: 760 }}>
        <Story />
      </div>
    )
  ],
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    const labels = [...canvasElement.querySelectorAll<SVGTextElement>('.dendrogram-chart__label')]
    const links = [
      ...canvasElement.querySelectorAll<SVGPathElement>('.dendrogram-chart__viewport .dendrogram-chart__link')
    ]

    expect(labels).toHaveLength(labelCollisionData.length)
    expect(labels.some(label => links.some(link => labelOverlapsLink(label, link)))).toBe(false)
  }
}

export const Dendrogram_Editor: Story = {
  args: { config: dendrogramConfig, isEditor: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Dendrogram')
    expect(canvas.queryByLabelText('Show Tooltips')).not.toBeInTheDocument()
    expect(canvas.queryByLabelText('Horizontal Alignment')).not.toBeInTheDocument()
    expect(canvas.queryByLabelText('Vertical Alignment')).not.toBeInTheDocument()
    expect(canvas.queryByLabelText('Show Node Labels')).not.toBeInTheDocument()

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
      () => canvasElement.querySelectorAll('.dendrogram-chart__viewport .dendrogram-chart__link--dashed').length,
      () => userEvent.selectOptions(linkStyleColumn, ''),
      (before, after) => before === 1 && after === 0
    )
    await userEvent.selectOptions(linkStyleColumn, 'style')

    const getLegendCaptions = () =>
      [...canvasElement.querySelectorAll('.dendrogram-chart__link-key-item span')].map(item => item.textContent)
    const solidLinkLabel = canvas.getByLabelText('Solid Link Legend Label')
    await performAndAssert(
      'Solid link legend label updates the rendered key',
      getLegendCaptions,
      async () => {
        await userEvent.clear(solidLinkLabel)
        await userEvent.type(solidLinkLabel, 'Established')
      },
      (before, after) => before.includes('Solid') && after.includes('Established')
    )

    const dashedLinkLabel = canvas.getByLabelText('Dashed Link Legend Label')
    await performAndAssert(
      'Dashed link legend label updates the rendered key',
      getLegendCaptions,
      async () => {
        await userEvent.clear(dashedLinkLabel)
        await userEvent.type(dashedLinkLabel, 'Provisional')
      },
      (before, after) => before.includes('Dashed') && after.includes('Provisional')
    )

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

    const connectionType = canvas.getByLabelText('Connection Type')
    const getLinkPath = () =>
      canvasElement.querySelector('.dendrogram-chart__viewport .dendrogram-chart__link')?.getAttribute('d') || ''
    await performAndAssert(
      'Straight connections use direct line segments',
      getLinkPath,
      () => userEvent.selectOptions(connectionType, 'line'),
      (before, after) => before.includes('C') && after.includes('L') && !after.includes('C')
    )
    await performAndAssert(
      'Elbow connections use orthogonal line segments',
      getLinkPath,
      () => userEvent.selectOptions(connectionType, 'elbow'),
      (before, after) => before !== after && after.split('L').length === 4
    )
    await performAndAssert(
      'Curved connections restore the default path',
      getLinkPath,
      () => userEvent.selectOptions(connectionType, 'curve'),
      (before, after) => before.includes('L') && after.includes('C')
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
