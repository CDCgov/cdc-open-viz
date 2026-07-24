import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import Chart from '../CdcChartComponent'
import sankeyConfig from './_mock/sankey_mock.json'
import {
  assertVisualizationRendered,
  openAccordion,
  performAndAssert,
  waitForEditor,
  waitForOptionsToPopulate,
  waitForPresence
} from '@cdc/core/helpers/testing'

const tabularSankeyRows = sankeyConfig.data
const expectedPaletteColors = {
  node: '#032659',
  link: '#dbe8f7'
}

const normalizeColor = (color: string | null) => color?.toLowerCase() || ''

const longLabelRows = [
  {
    source: 'Public health program referral source with a long label',
    target: 'Eligibility review and documentation step',
    value: '1,200'
  },
  {
    source: 'Public health program referral source with a long label',
    target: 'Not eligible after review',
    value: 240
  },
  {
    source: 'Eligibility review and documentation step',
    target: 'Enrolled in follow up services',
    value: 820
  },
  {
    source: 'Eligibility review and documentation step',
    target: 'Declined services after review',
    value: 140
  },
  {
    source: 'Ignored zero value',
    target: 'Should not render',
    value: 0
  },
  {
    source: 'Ignored invalid value',
    target: 'Should not render',
    value: 'not available'
  }
]

const mappedColumnRows = [
  { Step: 'Intake', Next: 'Eligible', People: 12 },
  { Step: 'Eligible', Next: 'Enrolled', People: 9 },
  { Step: 'Eligible', Next: 'Declined', People: 3 }
]

const assertSankeyRendered = async (
  canvasElement: HTMLElement,
  expectedRejectedRows = 0,
  expectedScrollable = false,
  expectedLabelSides: Record<string, 'left' | 'right'> = {},
  expectedColors?: { node: string; link: string }
) => {
  await assertVisualizationRendered(canvasElement)

  const svg = (await waitForPresence('.sankey-chart__diagram', canvasElement)) as SVGElement
  const scrollArea = (await waitForPresence('.sankey-chart__scroll-area', canvasElement)) as HTMLElement
  const nodes = Array.from(svg.querySelectorAll('.sankey-chart__node'))
  const links = Array.from(svg.querySelectorAll('.sankey-chart__link'))
  const labels = Array.from(svg.querySelectorAll('.sankey-chart__label'))
  const svgRect = svg.getBoundingClientRect()
  const scrollAreaRect = scrollArea.getBoundingClientRect()

  expect(nodes.length).toBeGreaterThan(0)
  expect(links.length).toBeGreaterThan(0)
  expect(labels.length).toBe(nodes.length)
  expect(svgRect.width).toBeGreaterThan(250)
  expect(svgRect.height).toBeGreaterThan(300)
  expect(Number(svg.getAttribute('data-rejected-row-count'))).toBe(expectedRejectedRows)

  if (expectedScrollable) {
    expect(scrollArea.scrollWidth).toBeGreaterThan(scrollArea.clientWidth)
    expect(svgRect.width).toBeGreaterThan(scrollAreaRect.width)
  } else {
    expect(scrollArea.scrollWidth).toBeLessThanOrEqual(scrollArea.clientWidth + 1)
  }

  labels.forEach(label => {
    const labelRect = label.getBoundingClientRect()
    expect(labelRect.width).toBeGreaterThan(0)
    expect(labelRect.left).toBeGreaterThanOrEqual(svgRect.left - 1)
    expect(labelRect.right).toBeLessThanOrEqual(svgRect.right + 1)
  })

  Object.entries(expectedLabelSides).forEach(([nodeId, side]) => {
    const label = labels.find(label => label.getAttribute('data-node-id') === nodeId)
    expect(label?.getAttribute('data-label-side')).toBe(side)
  })

  if (expectedColors) {
    nodes.forEach(node => {
      expect(normalizeColor(node.getAttribute('fill'))).toBe(expectedColors.node)
    })
    links.forEach(link => {
      expect(normalizeColor(link.getAttribute('stroke'))).toBe(expectedColors.link)
    })
  }
}

const expectedTabularLabelSides = {
  Screened: 'left',
  Eligible: 'right',
  Enrolled: 'right',
  'Completed Treatment': 'right',
  Ineligible: 'right',
  Declined: 'right',
  'Dropped Out': 'right',
  Recovered: 'right',
  'Ongoing Care': 'right'
} as const

const getSankeyNodeIds = (canvasElement: HTMLElement) =>
  Array.from(canvasElement.querySelectorAll('.sankey-chart__node'))
    .map(node => node.getAttribute('data-node-id') || '')
    .filter(Boolean)
    .sort()

const getSankeyTooltipAttributeCount = (canvasElement: HTMLElement) =>
  Array.from(canvasElement.querySelectorAll('.sankey-chart__node, .sankey-chart__link')).filter(element =>
    element.getAttribute('data-tooltip-html')
  ).length

const getSankeyHighlightState = (canvasElement: HTMLElement) => {
  const nodeOpacity = Object.fromEntries(
    Array.from(canvasElement.querySelectorAll('.sankey-chart__node')).map(node => [
      node.getAttribute('data-node-id') || '',
      node.getAttribute('fill-opacity') || ''
    ])
  )
  const linkOpacity = Object.fromEntries(
    Array.from(canvasElement.querySelectorAll('.sankey-chart__link')).map(link => [
      `${link.getAttribute('data-link-source-id')}->${link.getAttribute('data-link-target-id')}`,
      link.getAttribute('stroke-opacity') || ''
    ])
  )

  return { linkOpacity, nodeOpacity }
}

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Sankey',
  component: Chart
}

export default meta
type Story = StoryObj<typeof Chart>

export const Sankey_TabularImport: Story = {
  args: {
    config: {
      ...sankeyConfig,
      title: 'Patient Care Pathway',
      data: tabularSankeyRows
    },
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertSankeyRendered(canvasElement, 0, false, expectedTabularLabelSides, expectedPaletteColors)

    await performAndAssert(
      'Sankey downstream highlight',
      () => getSankeyHighlightState(canvasElement),
      async () => {
        const enrolledNode = canvasElement.querySelector('[data-node-id="Enrolled"]') as SVGRectElement
        await userEvent.click(enrolledNode)
      },
      (_before, after) =>
        ['Enrolled', 'Completed Treatment', 'Dropped Out', 'Recovered', 'Ongoing Care'].every(
          nodeId => after.nodeOpacity[nodeId] === '1'
        ) &&
        ['Screened', 'Eligible', 'Ineligible', 'Declined'].every(nodeId => after.nodeOpacity[nodeId] === '0.1') &&
        [
          'Enrolled->Completed Treatment',
          'Enrolled->Dropped Out',
          'Completed Treatment->Recovered',
          'Completed Treatment->Ongoing Care'
        ].every(linkId => after.linkOpacity[linkId] === '0.6') &&
        ['Screened->Eligible', 'Screened->Ineligible', 'Eligible->Enrolled', 'Eligible->Declined'].every(
          linkId => after.linkOpacity[linkId] === '0.1'
        )
    )
  }
}

export const Sankey_NarrowViewport: Story = {
  decorators: [
    Story => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>
    )
  ],
  args: {
    config: {
      ...sankeyConfig,
      title: 'Patient Care Pathway - Narrow',
      data: tabularSankeyRows,
      sankey: {
        ...sankeyConfig.sankey,
        horizontalScrollWidth: 900
      }
    },
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertSankeyRendered(canvasElement, 0, true, expectedTabularLabelSides, expectedPaletteColors)
  }
}

export const Sankey_MediumViewportFullWidthWhenUnset: Story = {
  decorators: [
    Story => (
      <div style={{ width: '760px' }}>
        <Story />
      </div>
    )
  ],
  args: {
    config: {
      ...sankeyConfig,
      title: 'Patient Care Pathway - Medium Full Width',
      data: tabularSankeyRows,
      sankey: {
        ...sankeyConfig.sankey,
        horizontalScrollWidth: ''
      }
    },
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertSankeyRendered(canvasElement, 0, false, expectedTabularLabelSides, expectedPaletteColors)
  }
}

export const Sankey_MediumViewport: Story = {
  decorators: [
    Story => (
      <div style={{ width: '760px' }}>
        <Story />
      </div>
    )
  ],
  args: {
    config: {
      ...sankeyConfig,
      title: 'Patient Care Pathway - Medium',
      data: tabularSankeyRows,
      sankey: {
        ...sankeyConfig.sankey,
        horizontalScrollWidth: 900
      }
    },
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertSankeyRendered(canvasElement, 0, true, expectedTabularLabelSides, expectedPaletteColors)
  }
}

export const Sankey_CustomHorizontalScrollWidth: Story = {
  decorators: [
    Story => (
      <div style={{ width: '980px' }}>
        <Story />
      </div>
    )
  ],
  args: {
    config: {
      ...sankeyConfig,
      title: 'Patient Care Pathway - Custom Scroll Width',
      data: tabularSankeyRows,
      sankey: {
        ...sankeyConfig.sankey,
        horizontalScrollWidth: 1100
      }
    },
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertSankeyRendered(canvasElement, 0, true, expectedTabularLabelSides, expectedPaletteColors)
  }
}

export const Sankey_LongLabelsAndInvalidRows: Story = {
  args: {
    config: {
      ...sankeyConfig,
      title: 'Sankey with Long Labels and Invalid Rows',
      data: longLabelRows
    },
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertSankeyRendered(canvasElement, 2)
  }
}

export const Sankey_TooltipsDisabled: Story = {
  args: {
    config: {
      ...sankeyConfig,
      title: 'Sankey - Tooltips Disabled',
      data: tabularSankeyRows,
      enableTooltips: false
    },
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertSankeyRendered(canvasElement)
    expect(getSankeyTooltipAttributeCount(canvasElement)).toBe(0)
  }
}

export const Sankey_DataColumnControls: Story = {
  args: {
    config: {
      ...sankeyConfig,
      title: 'Sankey - Data Column Controls',
      data: mappedColumnRows,
      sankey: {
        ...sankeyConfig.sankey,
        horizontalScrollWidth: '',
        columns: {
          source: '',
          target: '',
          value: ''
        }
      }
    },
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Sankey')

    const sourceSelect = canvas.getByLabelText('Source Column') as HTMLSelectElement
    await waitForOptionsToPopulate(sourceSelect, 4)
    const scrollWidthInput = canvas.getByLabelText('Horizontal Scroll Width') as HTMLInputElement
    expect(scrollWidthInput.value).toBe('')

    await userEvent.type(scrollWidthInput, '640')
    expect(scrollWidthInput.value).toBe('640')

    await performAndAssert(
      'Sankey data column mapping',
      () => getSankeyNodeIds(canvasElement),
      async () => {
        await userEvent.selectOptions(canvas.getByLabelText('Source Column'), 'Step')
        await userEvent.selectOptions(canvas.getByLabelText('Target Column'), 'Next')
        await userEvent.selectOptions(canvas.getByLabelText('Value Column'), 'People')
      },
      (before, after) =>
        before.length === 0 && ['Declined', 'Eligible', 'Enrolled', 'Intake'].every(nodeId => after.includes(nodeId))
    )
  }
}

export const Sankey_TooltipControl: Story = {
  args: {
    config: {
      ...sankeyConfig,
      title: 'Sankey - Tooltip Control',
      data: tabularSankeyRows,
      enableTooltips: false
    },
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Sankey')
    const scrollWidthInput = canvas.getByLabelText('Horizontal Scroll Width') as HTMLInputElement

    await performAndAssert(
      'Sankey horizontal scroll width input',
      () => scrollWidthInput.value,
      async () => {
        await userEvent.clear(scrollWidthInput)
        await userEvent.type(scrollWidthInput, '640')
      },
      (before, after) => before === '900' && after === '640'
    )

    await performAndAssert(
      'Sankey tooltip toggle',
      () => getSankeyTooltipAttributeCount(canvasElement),
      async () => {
        await userEvent.click(canvas.getByLabelText('Show Tooltips'))
      },
      (before, after) => before === 0 && after > 0
    )
  }
}
