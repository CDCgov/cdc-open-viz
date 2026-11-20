import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import {
  assertVisualizationRendered,
  performAndAssert,
  waitForAbsence,
  waitForEditor,
  waitForOptionsToPopulate,
  waitForPresence
} from '@cdc/core/helpers/testing'
import CdcEditor from '../CdcEditor'

// Source regression: docs/qa/regression-scripts/build-and-configure-a-sankey-diagram.md

const meta: Meta<typeof CdcEditor> = {
  title: 'Regression Tests/Chart Scripts/Sankey',
  component: CdcEditor,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof CdcEditor>
type Canvas = ReturnType<typeof within>
type User = ReturnType<typeof userEvent.setup>

const CSV = `Source,Target,People
Referral,Screened,100
Screened,Eligible,80
Screened,Ineligible,20
Eligible,Enrolled,60`

const HEADINGS = ['Source', 'Target', 'People']
const EXPECTED_ROWS = [
  ['Referral', 'Screened', '100'],
  ['Screened', 'Eligible', '80'],
  ['Screened', 'Ineligible', '20'],
  ['Eligible', 'Enrolled', '60']
]
const EXPECTED_NODES = ['Eligible', 'Enrolled', 'Ineligible', 'Referral', 'Screened']
const EXPECTED_LINKS = ['Eligible->Enrolled', 'Referral->Screened', 'Screened->Eligible', 'Screened->Ineligible']
const LINK_VALUES = {
  'Eligible->Enrolled': 60,
  'Referral->Screened': 100,
  'Screened->Eligible': 80,
  'Screened->Ineligible': 20
}
const EXPECTED_LABELS = [
  'Eligible|Eligible (80)',
  'Enrolled|Enrolled (60)',
  'Ineligible|Ineligible (20)',
  'Referral|Referral (100)',
  'Screened|Screened (100)'
]

const normalize = (value: string | null | undefined) => value?.replace(/\s+/g, ' ').trim() || ''
const approximatelyEqual = (left: number, right: number, tolerance = 0.01) => Math.abs(left - right) <= tolerance

const diagram = (root: HTMLElement) => root.querySelector<SVGSVGElement>('.sankey-chart__diagram')
const nodes = (root: HTMLElement) => Array.from(root.querySelectorAll<SVGRectElement>('.sankey-chart__node'))
const links = (root: HTMLElement) => Array.from(root.querySelectorAll<SVGPathElement>('.sankey-chart__link'))
const labels = (root: HTMLElement) => Array.from(root.querySelectorAll<SVGTextElement>('.sankey-chart__label'))

const nodeIds = (root: HTMLElement) =>
  nodes(root)
    .map(node => node.getAttribute('data-node-id') || '')
    .sort()

const linkIds = (root: HTMLElement) =>
  links(root)
    .map(link => `${link.getAttribute('data-link-source-id')}->${link.getAttribute('data-link-target-id')}`)
    .sort()

const labelInventory = (root: HTMLElement) =>
  labels(root)
    .map(label => `${label.getAttribute('data-node-id')}|${normalize(label.textContent)}`)
    .sort()

const semanticInventory = (root: HTMLElement) => ({
  labels: labelInventory(root),
  links: linkIds(root),
  nodes: nodeIds(root)
})

const hasExactInventory = (root: HTMLElement) => {
  const inventory = semanticInventory(root)
  return (
    JSON.stringify(inventory.nodes) === JSON.stringify(EXPECTED_NODES) &&
    JSON.stringify(inventory.links) === JSON.stringify(EXPECTED_LINKS) &&
    JSON.stringify(inventory.labels) === JSON.stringify(EXPECTED_LABELS)
  )
}

const hasValidGeometry = (root: HTMLElement) => {
  const svg = diagram(root)
  if (!svg || svg.getAttribute('data-rejected-row-count') !== '0') return false

  const linkRatios = links(root).map(link => {
    const id = `${link.getAttribute('data-link-source-id')}->${link.getAttribute('data-link-target-id')}`
    return Number(link.getAttribute('stroke-width')) / LINK_VALUES[id as keyof typeof LINK_VALUES]
  })

  return (
    nodes(root).length === EXPECTED_NODES.length &&
    links(root).length === EXPECTED_LINKS.length &&
    nodes(root).every(node => {
      if (!['x', 'y', 'width', 'height'].every(attribute => node.hasAttribute(attribute))) return false
      const values = ['x', 'y', 'width', 'height'].map(attribute => Number(node.getAttribute(attribute)))
      return values.every(Number.isFinite) && values[0] >= 0 && values[1] >= 0 && values[2] > 0 && values[3] > 0
    }) &&
    links(root).every(link => {
      const width = Number(link.getAttribute('stroke-width'))
      const pathLength = link.getTotalLength()
      return (
        Boolean(link.getAttribute('d')) &&
        Number.isFinite(pathLength) &&
        pathLength > 0 &&
        Number.isFinite(width) &&
        width > 0
      )
    }) &&
    linkRatios.every(ratio => Number.isFinite(ratio) && approximatelyEqual(ratio, linkRatios[0]))
  )
}

const requiredAlerts = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<HTMLElement>('.chart-required-fields-alerts .alert-info'))

const requiredAlertText = (root: HTMLElement) =>
  requiredAlerts(root)
    .map(alert => normalize(alert.textContent))
    .join('|')

const expectRequiredFields = (root: HTMLElement, fields: string[]) => {
  const alerts = requiredAlerts(root)
  expect(alerts).toHaveLength(fields.length)
  fields.forEach(field => {
    const alert = alerts.find(candidate => candidate.textContent?.includes(`Missing field: ${field}.`))
    expect(alert, `Expected missing-field alert for ${field}`).toBeTruthy()
    expect(within(alert!).getByRole('button', { name: `Open Sankey and focus ${field}` })).toBeVisible()
  })
}

const assertAlertNavigation = async (canvas: Canvas, root: HTMLElement, field: string, user: User) => {
  const action = within(root).getByRole('button', { name: `Open Sankey and focus ${field}` })
  const control = canvas.getByLabelText(field)
  const sankeyAccordion = canvas.getByRole('button', { name: /^Sankey/ })
  await performAndAssert(
    `${field} guidance opens Sankey and focuses its control`,
    () => ({
      expanded: sankeyAccordion.getAttribute('aria-expanded'),
      focused: root.ownerDocument.activeElement === control
    }),
    () => user.click(action),
    (_before, after) => after.expanded === 'true' && after.focused
  )
}

const tooltipText = (element: Element) => {
  const body = new DOMParser().parseFromString(element.getAttribute('data-tooltip-html') || '', 'text/html').body
  return normalize(body.textContent)
}

const tooltipState = (root: HTMLElement) => {
  const state: Record<string, string> = {}
  nodes(root).forEach(node => {
    state[`node:${node.getAttribute('data-node-id')}`] = tooltipText(node)
  })
  links(root).forEach(link => {
    const id = `${link.getAttribute('data-link-source-id')}->${link.getAttribute('data-link-target-id')}`
    state[`link:${id}`] = tooltipText(link)
  })
  return Object.fromEntries(Object.entries(state).sort(([left], [right]) => left.localeCompare(right)))
}

const EXPECTED_TOOLTIPS = Object.fromEntries(
  Object.entries({
    'link:Eligible->Enrolled': 'Eligible → Enrolled 60',
    'link:Referral->Screened': 'Referral → Screened 100',
    'link:Screened->Eligible': 'Screened → Eligible 80',
    'link:Screened->Ineligible': 'Screened → Ineligible 20',
    'node:Eligible': 'Eligible Eligible: 80',
    'node:Enrolled': 'Enrolled Enrolled: 60',
    'node:Ineligible': 'Ineligible Ineligible: 20',
    'node:Referral': 'Referral Referral: 100',
    'node:Screened': 'Screened Screened: 100'
  }).sort(([left], [right]) => left.localeCompare(right))
)

const layoutState = (root: HTMLElement) => {
  const chart = root.querySelector<HTMLElement>('.sankey-chart')
  const scrollArea = root.querySelector<HTMLElement>('.sankey-chart__scroll-area')
  const svg = diagram(root)
  return {
    inventory: semanticInventory(root),
    validGeometry: hasValidGeometry(root),
    scrollableClass: Boolean(chart?.classList.contains('sankey-chart--scrollable')),
    regionLabel: scrollArea?.getAttribute('aria-label') || '',
    svgWidth: svg?.getAttribute('width') || '',
    clientWidth: scrollArea?.clientWidth || 0,
    scrollWidth: scrollArea?.scrollWidth || 0
  }
}

const highlightState = (root: HTMLElement) => ({
  links: Object.fromEntries(
    links(root).map(link => [
      `${link.getAttribute('data-link-source-id')}->${link.getAttribute('data-link-target-id')}`,
      link.getAttribute('stroke-opacity') || ''
    ])
  ),
  nodes: Object.fromEntries(
    nodes(root).map(node => [node.getAttribute('data-node-id') || '', node.getAttribute('fill-opacity') || ''])
  )
})

const replaceText = async (user: User, control: HTMLElement, value: string) => {
  await user.clear(control)
  if (value) await user.type(control, value)
}

export const SANKEY001: Story = {
  name: 'SANKEY-001 — Build and configure a Sankey diagram',
  args: { config: {} },
  decorators: [
    Story => (
      <div style={{ width: '1200px' }}>
        <Story />
      </div>
    )
  ],
  parameters: { test: { timeout: 120000 } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()

    await user.click(await canvas.findByRole('button', { name: 'Sankey Diagram' }))
    await user.click(canvas.getByText('2. Import Data'))
    const upload = canvasElement.querySelector<HTMLInputElement>('input[type="file"]')
    expect(upload, 'Expected Data Import file input').toBeTruthy()
    await user.upload(upload!, new File([CSV], 'sankey-regression.csv', { type: 'text/csv' }))

    expect(await canvas.findByText('Data Preview')).toBeVisible()
    await waitForPresence('table.data-table tbody tr', canvasElement)
    expect(canvasElement.querySelectorAll('table.data-table tbody tr')).toHaveLength(4)
    HEADINGS.forEach(heading =>
      expect(canvasElement.querySelector(`table.data-table th[title="${heading}"]`)).toBeVisible()
    )
    const previewRows = Array.from(canvasElement.querySelectorAll<HTMLElement>('table.data-table tbody tr'))
    expect(previewRows.map(row => Array.from(row.querySelectorAll('td'), cell => normalize(cell.textContent)))).toEqual(
      EXPECTED_ROWS
    )

    const configure = await canvas.findByRole('button', { name: 'Configure your visualization' })
    expect(configure).toBeVisible()
    expect(configure).toBeEnabled()
    await user.click(configure)
    await waitForEditor(canvas)
    await waitForPresence('.chart-required-fields-alerts .alert-info', canvasElement)

    expectRequiredFields(canvasElement, ['Source Column', 'Target Column', 'Value Column'])
    expect(diagram(canvasElement)).toBeNull()
    await assertAlertNavigation(canvas, canvasElement, 'Source Column', user)
    await assertAlertNavigation(canvas, canvasElement, 'Target Column', user)
    await assertAlertNavigation(canvas, canvasElement, 'Value Column', user)

    const source = canvas.getByLabelText('Source Column') as HTMLSelectElement
    await waitForOptionsToPopulate(source)
    await performAndAssert(
      'Source mapping leaves Target and Value guidance while rendering stays blocked',
      () => ({ required: requiredAlertText(canvasElement), rendered: Boolean(diagram(canvasElement)) }),
      () => user.selectOptions(source, 'Source'),
      (before, after) =>
        before.required.includes('Source Column') &&
        !after.required.includes('Source Column') &&
        after.required.includes('Target Column') &&
        after.required.includes('Value Column') &&
        !after.rendered
    )
    expectRequiredFields(canvasElement, ['Target Column', 'Value Column'])

    const target = canvas.getByLabelText('Target Column') as HTMLSelectElement
    await performAndAssert(
      'Target mapping leaves only Value guidance while rendering stays blocked',
      () => ({ required: requiredAlertText(canvasElement), rendered: Boolean(diagram(canvasElement)) }),
      () => user.selectOptions(target, 'Target'),
      (before, after) =>
        before.required.includes('Target Column') &&
        !after.required.includes('Target Column') &&
        after.required.includes('Value Column') &&
        !after.rendered
    )
    expectRequiredFields(canvasElement, ['Value Column'])

    await performAndAssert(
      'Value mapping clears guidance and renders the exact valid Sankey diagram',
      () => ({
        inventory: semanticInventory(canvasElement),
        required: requiredAlertText(canvasElement),
        validGeometry: hasValidGeometry(canvasElement)
      }),
      () => user.selectOptions(canvas.getByLabelText('Value Column'), 'People'),
      (before, after) =>
        before.required.includes('Value Column') &&
        after.required === '' &&
        hasExactInventory(canvasElement) &&
        after.validGeometry
    )
    await waitForAbsence('.chart-required-fields-alerts', canvasElement)
    await assertVisualizationRendered(canvasElement)
    expect(hasExactInventory(canvasElement)).toBe(true)
    expect(hasValidGeometry(canvasElement)).toBe(true)
    EXPECTED_NODES.forEach(nodeId => {
      const value =
        nodeId === 'Referral' || nodeId === 'Screened'
          ? 100
          : nodeId === 'Eligible'
          ? 80
          : nodeId === 'Ineligible'
          ? 20
          : 60
      expect(canvas.getByRole('button', { name: `${nodeId}, ${value}` })).toBeVisible()
    })

    const showTooltips = canvas.getByRole('checkbox', { name: 'Show Tooltips' })
    await performAndAssert(
      'Show Tooltips adds all nine exact semantic payloads',
      () => ({ inventory: semanticInventory(canvasElement), tooltips: tooltipState(canvasElement) }),
      () => user.click(showTooltips),
      (before, after) =>
        Object.values(before.tooltips).every(value => value === '') &&
        JSON.stringify(after.tooltips) === JSON.stringify(EXPECTED_TOOLTIPS) &&
        JSON.stringify(before.inventory) === JSON.stringify(after.inventory)
    )
    await performAndAssert(
      'Hiding tooltips removes all payloads without changing diagram identity',
      () => ({ inventory: semanticInventory(canvasElement), tooltips: tooltipState(canvasElement) }),
      () => user.click(showTooltips),
      (before, after) =>
        JSON.stringify(before.tooltips) === JSON.stringify(EXPECTED_TOOLTIPS) &&
        Object.values(after.tooltips).every(value => value === '') &&
        JSON.stringify(before.inventory) === JSON.stringify(after.inventory)
    )

    const scrollWidth = canvas.getByRole('spinbutton', { name: 'Horizontal Scroll Width' })
    expect(scrollWidth).toHaveValue(900)
    await performAndAssert(
      'Clearing Horizontal Scroll Width makes the diagram fluid without semantic drift',
      () => layoutState(canvasElement),
      () => replaceText(user, scrollWidth, ''),
      (before, after) =>
        before.scrollableClass &&
        before.scrollWidth > before.clientWidth &&
        before.validGeometry &&
        !after.scrollableClass &&
        after.regionLabel === '' &&
        after.svgWidth === '100%' &&
        after.scrollWidth <= after.clientWidth + 1 &&
        after.validGeometry &&
        JSON.stringify(before.inventory) === JSON.stringify(after.inventory)
    )
    await performAndAssert(
      'Horizontal Scroll Width 1100 restores an accessible scrollable diagram',
      () => layoutState(canvasElement),
      () => replaceText(user, scrollWidth, '1100'),
      (before, after) =>
        !before.scrollableClass &&
        before.validGeometry &&
        after.scrollableClass &&
        after.regionLabel === 'Scrollable Sankey diagram' &&
        after.svgWidth === '1100' &&
        after.scrollWidth > after.clientWidth &&
        after.validGeometry &&
        JSON.stringify(before.inventory) === JSON.stringify(after.inventory)
    )

    const screened = canvas.getByRole('button', { name: 'Screened, 100' })
    screened.focus()
    expect(screened).toHaveFocus()
    await performAndAssert(
      'Enter highlights Screened and its complete downstream flow',
      () => highlightState(canvasElement),
      () => user.keyboard('{Enter}'),
      (before, after) =>
        Object.values(before.nodes).every(opacity => opacity === '1') &&
        after.nodes.Referral === '0.1' &&
        ['Screened', 'Eligible', 'Ineligible', 'Enrolled'].every(nodeId => after.nodes[nodeId] === '1') &&
        after.links['Referral->Screened'] === '0.1' &&
        ['Screened->Eligible', 'Screened->Ineligible', 'Eligible->Enrolled'].every(
          linkId => after.links[linkId] === '1'
        )
    )

    expect(hasExactInventory(canvasElement)).toBe(true)
    expect(hasValidGeometry(canvasElement)).toBe(true)
  }
}
