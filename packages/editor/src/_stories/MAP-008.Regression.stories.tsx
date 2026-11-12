import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import {
  assertVisualizationRendered,
  openAccordion,
  performAndAssert,
  waitForAbsence,
  waitForEditor,
  waitForOptionsToPopulate,
  waitForPresence
} from '@cdc/core/helpers/testing'
import oregonTopology from '@cdc/map/src/_stories/_mock/oregon-topojson.json'
import CdcEditor from '../CdcEditor'

// Source regression: docs/qa/regression-scripts/build-a-standard-us-categorical-map.md

const meta: Meta<typeof CdcEditor> = {
  title: 'Regression Tests/Map Scripts',
  component: CdcEditor,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof CdcEditor>
type Canvas = ReturnType<typeof within>

const CATEGORIES = ['Vehicle', 'Work', 'Home', 'School', 'NA']
const OREGON_FILL = '#00ffff'
const oregonTopologyUrl = `data:application/json,${encodeURIComponent(JSON.stringify(oregonTopology))}`
const normalize = (value: string | null | undefined) => value?.replace(/\s+/g, ' ').trim() || ''

const accordionButton = (root: HTMLElement, name: string) =>
  Array.from(root.querySelectorAll<HTMLElement>('[data-accordion-component="AccordionItemButton"]')).find(
    button => normalize(button.textContent).toLowerCase() === name.toLowerCase() && button.closest('.editor-panel')
  )

const openSection = async (canvas: Canvas, root: HTMLElement, name: string) => {
  await waitFor(() => expect(accordionButton(root, name), `Missing editor accordion ${name}`).toBeTruthy())
  if (accordionButton(root, name)?.getAttribute('aria-expanded') !== 'true') await openAccordion(canvas, name)
  await waitFor(() => expect(accordionButton(root, name)).toHaveAttribute('aria-expanded', 'true'))
  return accordionButton(root, name)!.closest<HTMLElement>('[data-accordion-component="AccordionItem"]')!
}

const columnSelect = (section: HTMLElement, target: 'map-geography' | 'map-data-column') => {
  const select = section.querySelector<HTMLSelectElement>(`[data-required-field-control="${target}"]`)
  expect(select).toBeTruthy()
  return select!
}

const geography = (root: HTMLElement, name: string) => {
  const group = root.querySelector<SVGGElement>(`g[data-name="${name}"] > g.geo-group`)
  expect(group, `Expected rendered state ${name}`).toBeTruthy()
  return group!
}

const tooltipText = (root: HTMLElement) => {
  const tooltip = Array.from(root.querySelectorAll<HTMLElement>('.tooltip-test')).find(element => {
    const style = getComputedStyle(element)
    return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0'
  })
  return normalize(tooltip?.innerText)
}

const legendLabels = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<SVGTextElement>('.legend-container svg text')).map(label =>
    normalize(label.textContent)
  )

const legendColor = (root: HTMLElement, category: string) => {
  const index = legendLabels(root).indexOf(category)
  expect(index, `Missing ${category} legend label`).toBeGreaterThanOrEqual(0)
  const block = root.querySelectorAll<SVGRectElement>('.legend-container svg g rect')[index]
  expect(block, `Missing ${category} legend color`).toBeTruthy()
  return getComputedStyle(block).fill
}

const geographyFill = (group: SVGGElement) => {
  const path = group.querySelector<SVGPathElement>('path')
  expect(path, 'Expected rendered geography path').toBeTruthy()
  return getComputedStyle(path!).fill
}

export const MAP008: Story = {
  name: 'MAP-008 — Build a standard US categorical map',
  args: { config: {} },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()
    const originalFetch = window.fetch
    const fetchInputs: string[] = []
    const originalConsoleError = console.error
    const consoleErrors: string[] = []
    const unhandledRejections: unknown[] = []
    const windowErrors: unknown[] = []

    const onConsoleError = (...args: unknown[]) => {
      consoleErrors.push(args.map(value => String(value)).join(' '))
      originalConsoleError(...args)
    }
    const onRejection = (event: PromiseRejectionEvent) => unhandledRejections.push(event.reason)
    const onWindowError = (event: ErrorEvent) => windowErrors.push(event.error ?? event.message)

    try {
      console.error = onConsoleError
      window.fetch = (input, init) => {
        fetchInputs.push(String(input))
        return originalFetch(input, init)
      }
      window.addEventListener('unhandledrejection', onRejection)
      window.addEventListener('error', onWindowError)

      await user.click(await canvas.findByRole('button', { name: 'United States (State- or County-Level)' }))
      expect(canvas.getByText('2. Import Data')).toBeVisible()
      await user.click(canvas.getByText('2. Import Data'))
      await user.click(await canvas.findByRole('button', { name: 'United States: State Sample Data' }))

      expect(await canvas.findByText('Data Preview')).toBeVisible()
      for (const heading of ['STATE', 'Rate', 'Location', 'URL']) {
        expect(canvasElement.querySelector(`table.data-table th[title="${heading}"]`)).toBeVisible()
      }

      const vertical = canvas.getByRole('button', { name: /^Vertical/ })
      await user.click(vertical)
      expect(vertical).toHaveClass('active')
      const noSeries = canvas.getByRole('button', { name: 'No', exact: true })
      const yesSeries = canvas.getByRole('button', { name: 'Yes', exact: true })
      await performAndAssert(
        'No is the active multiple-series selection',
        () => ({ no: noSeries.style.backgroundColor, yes: yesSeries.style.backgroundColor }),
        async () => {
          await user.click(noSeries)
          await user.tab()
        },
        (_before, after) => after.no === 'rgb(1, 93, 170)' && after.yes === 'rgb(0, 52, 93)'
      )

      await user.click(await canvas.findByRole('button', { name: 'Configure your visualization' }))
      await waitForEditor(canvas)

      let typeSection = await openSection(canvas, canvasElement, 'Type')
      expect(within(typeSection).getByRole('button', { name: /United States/ })).toHaveClass('active')
      expect(within(typeSection).getByLabelText('Geography Subtype')).toHaveValue('us')
      const mapType = within(typeSection)
        .getAllByLabelText(/Map Type/, { selector: 'select' })
        .find(select => Array.from((select as HTMLSelectElement).options).some(option => option.value === 'navigation'))
      expect(mapType).toHaveValue('data')
      const categorical = within(typeSection).getByRole('radio', { name: 'Categorical' })
      await user.click(categorical)
      expect(categorical).toBeChecked()

      const columnsSection = await openSection(canvas, canvasElement, 'Columns')
      const geographySelect = columnSelect(columnsSection, 'map-geography')
      await waitForOptionsToPopulate(geographySelect)
      await user.selectOptions(geographySelect, 'STATE')
      expect(geographySelect).toHaveValue('STATE')

      const dataSelect = columnSelect(columnsSection, 'map-data-column')
      await waitForOptionsToPopulate(dataSelect)
      await waitForPresence('.map-required-fields-alerts', canvasElement)
      await performAndAssert(
        'Location renders the five categorical legend values',
        () => ({
          labels: legendLabels(canvasElement),
          alabamaTooltip: canvasElement
            .querySelector<SVGGElement>('g[data-name="Alabama"] > g.geo-group')
            ?.getAttribute('data-tooltip-html')
        }),
        async () => user.selectOptions(dataSelect, 'Location'),
        (_before, after) =>
          CATEGORIES.every(category => after.labels.includes(category)) &&
          Boolean(after.alabamaTooltip?.includes('Location: Vehicle'))
      )
      expect(dataSelect).toHaveValue('Location')
      await waitForAbsence('.map-required-fields-alerts', canvasElement)
      await waitForPresence('.map-container', canvasElement)
      await assertVisualizationRendered(canvasElement)

      typeSection = await openSection(canvas, canvasElement, 'Type')
      expect(within(typeSection).getByRole('radio', { name: 'Categorical' })).toBeChecked()

      expect(legendLabels(canvasElement)).toHaveLength(CATEGORIES.length)
      expect(new Set(legendLabels(canvasElement))).toEqual(new Set(CATEGORIES))
      expect(canvasElement.querySelectorAll('.legend-container linearGradient stop')).toHaveLength(5)

      const alabama = geography(canvasElement, 'Alabama')
      const colorado = geography(canvasElement, 'Colorado')
      const alaska = geography(canvasElement, 'Alaska')
      const oregon = geography(canvasElement, 'Oregon')
      const vehicleColor = legendColor(canvasElement, 'Vehicle')
      const workColor = legendColor(canvasElement, 'Work')
      const stateFillsBeforeOverlay = {
        alabama: geographyFill(alabama),
        colorado: geographyFill(colorado),
        alaska: geographyFill(alaska),
        oregon: geographyFill(oregon)
      }

      expect(geographyFill(alabama)).toBe(vehicleColor)
      expect(geographyFill(colorado)).toBe(vehicleColor)
      expect(geographyFill(alabama)).toBe(geographyFill(colorado))
      expect(geographyFill(alaska)).toBe(workColor)
      expect(geographyFill(alaska)).not.toBe(geographyFill(alabama))

      const layersSection = await openSection(canvas, canvasElement, 'Custom Map Layers')
      await user.click(within(layersSection).getByRole('button', { name: 'Add Map Layer' }))
      const layerButton = within(layersSection).getByRole('button', { name: 'Layer 1: New Custom Layer' })
      await user.click(layerButton)
      const layerItem = layerButton.closest<HTMLElement>('.map-layers-list')!
      const fileInput = layerItem.querySelector<HTMLInputElement>('input[name="layerFilename"]')!
      const namespaceInput = layerItem.querySelector<HTMLInputElement>('input[name="layerNamespace"]')!
      const fillInput = layerItem.querySelector<HTMLInputElement>('input[name="layerFill"][type="text"]')!

      await user.click(fileInput)
      await user.paste(oregonTopologyUrl)
      await user.clear(namespaceInput)
      await user.type(namespaceInput, 'cove (1)')
      await performAndAssert(
        'Oregon polygon layer renders over the categorical map',
        () => {
          const polygon = canvasElement.querySelector<SVGPathElement>('.custom-map-layer--Oregon path')
          const bounds = polygon?.getBBox()
          const clientBounds = polygon?.getBoundingClientRect()
          const svgBounds = polygon?.ownerSVGElement?.getBoundingClientRect()
          const styles = polygon ? getComputedStyle(polygon) : undefined
          const statePath = oregon.querySelector<SVGPathElement>('path')
          return {
            path: polygon?.getAttribute('d') || '',
            fill: polygon?.getAttribute('fill') || '',
            width: bounds?.width || 0,
            height: bounds?.height || 0,
            visible: styles?.display !== 'none' && styles?.visibility !== 'hidden' && styles?.opacity !== '0',
            intersectsMap: Boolean(
              clientBounds &&
                svgBounds &&
                clientBounds.right > svgBounds.left &&
                clientBounds.left < svgBounds.right &&
                clientBounds.bottom > svgBounds.top &&
                clientBounds.top < svgBounds.bottom
            ),
            aboveStates: Boolean(
              polygon && statePath && statePath.compareDocumentPosition(polygon) & Node.DOCUMENT_POSITION_FOLLOWING
            ),
            labels: legendLabels(canvasElement),
            stateFills: {
              alabama: geographyFill(alabama),
              colorado: geographyFill(colorado),
              alaska: geographyFill(alaska),
              oregon: geographyFill(oregon)
            }
          }
        },
        async () => {
          await user.clear(fillInput)
          await user.type(fillInput, OREGON_FILL)
        },
        (_before, after) =>
          Boolean(after.path) &&
          after.fill === OREGON_FILL &&
          after.width > 0 &&
          after.height > 0 &&
          after.visible &&
          after.intersectsMap &&
          after.aboveStates &&
          after.labels.length === CATEGORIES.length &&
          new Set(after.labels).size === CATEGORIES.length &&
          CATEGORIES.every(category => after.labels.includes(category)) &&
          JSON.stringify(after.stateFills) === JSON.stringify(stateFillsBeforeOverlay)
      )

      await performAndAssert(
        'Alabama hover shows its Vehicle category',
        () => tooltipText(canvasElement),
        async () => user.hover(alabama),
        (_before, after) => after === 'State: Alabama Location: Vehicle'
      )
      await user.unhover(alabama)
      await waitFor(() => expect(tooltipText(canvasElement)).toBe(''))

      await performAndAssert(
        'Alaska hover shows its Work category',
        () => tooltipText(canvasElement),
        async () => user.hover(alaska),
        (_before, after) => after === 'State: Alaska Location: Work'
      )
      await user.unhover(alaska)
      await waitFor(() => expect(tooltipText(canvasElement)).toBe(''))

      expect(consoleErrors).toEqual([])
      expect(fetchInputs).not.toContain('')
      expect(unhandledRejections).toEqual([])
      expect(windowErrors).toEqual([])
    } finally {
      window.fetch = originalFetch
      console.error = originalConsoleError
      window.removeEventListener('unhandledrejection', onRejection)
      window.removeEventListener('error', onWindowError)
    }
  }
}
