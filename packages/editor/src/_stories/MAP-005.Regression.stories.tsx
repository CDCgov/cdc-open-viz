import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fireEvent, userEvent, waitFor, within } from 'storybook/test'
import { geoAlbersUsaTerritories } from 'd3-composite-projections'
import {
  assertVisualizationRendered,
  openAccordion,
  performAndAssert,
  waitForAbsence,
  waitForEditor,
  waitForOptionsToPopulate,
  waitForPresence
} from '@cdc/core/helpers/testing'
import countyTopology from '../../../map/src/components/UsaMap/data/cb_2019_us_county_20m.json'
import CdcEditor from '../CdcEditor'

// Source regression: docs/qa/regression-scripts/build-a-us-geocode-map.md

const meta: Meta<typeof CdcEditor> = {
  title: 'Regression Tests/Map Scripts',
  component: CdcEditor,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof CdcEditor>
type Config = Record<string, any>
type Canvas = ReturnType<typeof within>

const ALBUQUERQUE = { longitude: -106.650421, latitude: 35.084385 }
const BOSTON = { longitude: -71.058884, latitude: 42.360081 }
const TOPOLOGY_URL = 'https://www.cdc.gov/TemplatePackage/contrib/data/county-topography/'

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

const labeled = <T extends HTMLElement>(scope: HTMLElement, label: string, selector: string): T => {
  const control = Array.from(scope.querySelectorAll<T>(selector)).find(element => {
    const wrapper = element.closest('label')
    return normalize(wrapper?.textContent).startsWith(label)
  })
  expect(control, `Expected ${selector} labelled ${label}`).toBeTruthy()
  return control!
}

const mapCanvas = (root: HTMLElement) => {
  const element = root.querySelector<HTMLCanvasElement>('canvas.county-map-canvas[role="img"]:not(.d-none)')
  expect(element, 'Expected a visible geocode Canvas').toBeTruthy()
  return element!
}

const markerPoint = (canvas: HTMLCanvasElement, location: { longitude: number; latitude: number }) => {
  const projection = geoAlbersUsaTerritories()
    .scale(canvas.width * 1.25)
    .translate([canvas.width / 2, canvas.height / 2])
  const projected = projection([location.longitude, location.latitude])
  expect(projected, `Expected ${location.longitude},${location.latitude} to project onto the U.S. map`).toBeTruthy()
  const [mapX, mapY] = projected!
  return { mapX, mapY }
}

const markerClientPoint = (canvas: HTMLCanvasElement, location: { longitude: number; latitude: number }) => {
  const { mapX, mapY } = markerPoint(canvas, location)
  const bounds = canvas.getBoundingClientRect()
  return {
    clientX: bounds.left + mapX / (canvas.width / bounds.width),
    clientY: bounds.top + mapY / (canvas.height / bounds.height)
  }
}

const markerPixels = (canvas: HTMLCanvasElement, location = ALBUQUERQUE) => {
  const { mapX, mapY } = markerPoint(canvas, location)
  const context = canvas.getContext('2d')!
  const radius = 24
  const image = context.getImageData(
    Math.floor(mapX) - radius,
    Math.floor(mapY) - radius,
    radius * 2 + 1,
    radius * 2 + 1
  )
  const center = radius * image.width * 4 + radius * 4
  const centerColor = Array.from(image.data.slice(center, center + 4))
  let matchingColor = 0
  let signature = 2166136261

  for (let index = 0; index < image.data.length; index += 4) {
    if (
      image.data[index] === centerColor[0] &&
      image.data[index + 1] === centerColor[1] &&
      image.data[index + 2] === centerColor[2] &&
      image.data[index + 3] === centerColor[3]
    ) {
      matchingColor += 1
    }
    for (let channel = 0; channel < 4; channel += 1) {
      signature ^= image.data[index + channel]
      signature = Math.imul(signature, 16777619)
    }
  }

  return { matchingColor, signature: signature >>> 0 }
}

const canvasSignature = (canvas: HTMLCanvasElement) => {
  const pixels = canvas.getContext('2d')!.getImageData(0, 0, canvas.width, canvas.height).data
  let signature = 2166136261
  for (let index = 0; index < pixels.length; index += 16) {
    signature ^= pixels[index]
    signature = Math.imul(signature, 16777619)
  }
  return signature >>> 0
}

const requiredFields = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<HTMLElement>('.waiting-container strong')).map(field => normalize(field.textContent))

export const MAP005: Story = {
  name: 'MAP-005 — Build a U.S. geocode map',
  args: { config: {} },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()
    const originalConsoleError = console.error
    const originalFetch = window.fetch
    const consoleErrors: string[] = []
    const unhandledRejections: unknown[] = []
    const windowErrors: unknown[] = []
    let latestConfig: Config = {}

    const onConfig = (event: Event) => {
      latestConfig = JSON.parse((event as CustomEvent<string>).detail)
    }
    const onConsoleError = (...args: unknown[]) => {
      consoleErrors.push(args.map(value => String(value)).join(' '))
      originalConsoleError(...args)
    }
    const onRejection = (event: PromiseRejectionEvent) => unhandledRejections.push(event.reason)
    const onWindowError = (event: ErrorEvent) => windowErrors.push(event.error ?? event.message)

    console.error = onConsoleError
    window.addEventListener('unhandledrejection', onRejection)
    window.addEventListener('error', onWindowError)
    window.addEventListener('updateVizConfig', onConfig)
    window.fetch = async input => {
      const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url
      if (url.startsWith(TOPOLOGY_URL)) {
        return new Response(JSON.stringify(countyTopology), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        })
      }
      throw new Error(`Unexpected network request in MAP-005: ${url}`)
    }

    try {
      await user.click(await canvas.findByRole('button', { name: 'U.S. Geocode' }))
      expect(canvas.getByText('2. Import Data')).toBeVisible()
      await user.click(canvas.getByText('2. Import Data'))
      await user.click(await canvas.findByRole('button', { name: 'United States: Geo Point Sample Data' }))

      expect(await canvas.findByText('Data Preview')).toBeVisible()
      for (const heading of ['City', 'Longitude', 'Latitude', 'Value']) {
        expect(canvasElement.querySelector(`table.data-table th[title="${heading}"]`)).toBeVisible()
      }

      const verticalButton = canvas.getByRole('button', { name: /^Vertical/ })
      await user.click(verticalButton)
      expect(verticalButton).toHaveClass('active')

      const noSeriesButton = canvas.getByRole('button', { name: 'No', exact: true })
      const yesSeriesButton = canvas.getByRole('button', { name: 'Yes', exact: true })
      await performAndAssert(
        'No is the active multiple-series selection',
        () => ({ no: noSeriesButton.style.backgroundColor, yes: yesSeriesButton.style.backgroundColor }),
        async () => {
          await user.click(noSeriesButton)
          await user.tab()
        },
        (_before, after) => after.no === 'rgb(1, 93, 170)' && after.yes === 'rgb(0, 52, 93)'
      )

      await user.click(await canvas.findByRole('button', { name: 'Configure your visualization' }))
      await waitForEditor(canvas)

      const typeSection = await openSection(canvas, canvasElement, 'Type')
      expect(labeled<HTMLSelectElement>(typeSection, 'Geography Subtype', 'select')).toHaveValue('us-county')
      const mapType = Array.from(typeSection.querySelectorAll<HTMLSelectElement>('select')).find(element =>
        Array.from(element.options).some(option => option.value === 'us-geocode')
      )
      expect(mapType).toHaveValue('us-geocode')

      await waitFor(() => {
        expect(requiredFields(canvasElement)).toEqual(['Latitude', 'Longitude'])
      })

      const columnsSection = await openSection(canvas, canvasElement, 'Columns')
      const geography = columnsSection.querySelector<HTMLSelectElement>(
        '[data-required-field-control="map-geography"]'
      )!
      await waitForOptionsToPopulate(geography)
      expect(geography).toHaveValue('Select Option')
      await user.selectOptions(geography, 'City')
      await waitFor(() => {
        expect(latestConfig.columns.geo.name).toBe('City')
        expect(requiredFields(canvasElement)).toEqual(['Latitude', 'Longitude'])
      })

      const mappedColumnsSection = await openSection(canvas, canvasElement, 'Columns')
      const dataColumn = mappedColumnsSection.querySelector<HTMLSelectElement>(
        '[data-required-field-control="map-data-column"]'
      )!
      await waitForOptionsToPopulate(dataColumn)
      expect(dataColumn).toHaveValue('Select Option')
      await user.selectOptions(dataColumn, 'Value')
      await waitFor(() => {
        expect(latestConfig.columns.primary.name).toBe('Value')
        expect(requiredFields(canvasElement)).toEqual(['Latitude', 'Longitude'])
      })

      const latitude = labeled<HTMLSelectElement>(mappedColumnsSection, 'Latitude Column', 'select')
      await waitForOptionsToPopulate(latitude)
      await user.selectOptions(latitude, 'Latitude')

      const longitudeColumnsSection = await openSection(canvas, canvasElement, 'Columns')
      const longitude = labeled<HTMLSelectElement>(longitudeColumnsSection, 'Longitude Column', 'select')
      await waitForOptionsToPopulate(longitude)
      await user.selectOptions(longitude, 'Longitude')

      await waitForAbsence('.waiting-container', canvasElement)
      await waitForPresence('canvas.county-map-canvas:not(.d-none)', canvasElement)
      await assertVisualizationRendered(canvasElement)
      await waitFor(() => {
        expect(latestConfig.columns).toMatchObject({
          geo: { name: 'City' },
          primary: { name: 'Value' },
          latitude: { name: 'Latitude' },
          longitude: { name: 'Longitude' }
        })
        expect(mapCanvas(canvasElement).width).toBeGreaterThan(0)
        expect(mapCanvas(canvasElement).height).toBe(Math.floor(mapCanvas(canvasElement).clientWidth * 0.6))
      })

      expect(Number(latestConfig.visual.geoCodeCircleSize)).toBe(8)
      const initialMarker = markerPixels(mapCanvas(canvasElement))
      const visualSection = await openSection(canvas, canvasElement, 'Visual')
      const defaultCityStyle = labeled<HTMLSelectElement>(visualSection, 'Default City Style', 'select')
      await performAndAssert(
        'Default geocode markers change from circles to stars',
        () => ({ style: latestConfig.visual?.cityStyle, marker: markerPixels(mapCanvas(canvasElement)).signature }),
        async () => user.selectOptions(defaultCityStyle, 'star'),
        (_before, after) => after.style === 'star' && after.marker !== initialMarker.signature
      )

      const styleLabel = labeled<HTMLInputElement>(visualSection, 'Label (Optional)', 'input')
      await performAndAssert(
        'Star marker label appears in the legend',
        () => ({
          label: latestConfig.visual?.cityStyleLabel,
          legend: normalize(canvasElement.querySelector('[aria-label="Map Legend"]')?.textContent),
          star: Boolean(canvasElement.querySelector('[aria-label="Map Legend"] .visx-glyph-star'))
        }),
        async () => {
          await user.clear(styleLabel)
          await user.type(styleLabel, 'Reporting sites')
        },
        (_before, after) => after.label === 'Reporting sites' && after.legend.includes('Reporting sites') && after.star
      )

      const starAtEight = markerPixels(mapCanvas(canvasElement))
      const markerSize = labeled<HTMLInputElement>(visualSection, 'Geocode Circle Size', 'input[type="number"]')
      await performAndAssert(
        'Geocode marker size increases from 8 to 10',
        () => ({ size: latestConfig.visual?.geoCodeCircleSize, marker: markerPixels(mapCanvas(canvasElement)) }),
        async () => {
          await user.clear(markerSize)
          await user.type(markerSize, '10')
          await user.tab()
        },
        (_before, after) =>
          Number(after.size) === 10 &&
          after.marker.signature !== starAtEight.signature &&
          after.marker.matchingColor > starAtEight.matchingColor
      )

      const interactivitySection = await openSection(canvas, canvasElement, 'Interactivity')
      const detailDisplay = labeled<HTMLSelectElement>(interactivitySection, 'Detail displays on', 'select')
      expect(detailDisplay).toHaveValue('hover')

      const geocodeCanvas = mapCanvas(canvasElement)
      const overviewSignature = canvasSignature(geocodeCanvas)
      const overviewMarker = markerPixels(geocodeCanvas)
      const tooltip = (await waitForPresence('[id$="-canvas"].tooltip', canvasElement)) as HTMLElement
      await performAndAssert(
        'Albuquerque hover shows its mapped value',
        () => normalize(tooltip.textContent),
        async () => fireEvent.mouseMove(geocodeCanvas, markerClientPoint(geocodeCanvas, ALBUQUERQUE)),
        (_before, after) => after.includes('County: Albuquerque') && after.includes('Value: 1')
      )

      await user.selectOptions(detailDisplay, 'click')
      await waitFor(() => expect(latestConfig.tooltips.appearanceType).toBe('click'))
      fireEvent.mouseOut(geocodeCanvas)
      fireEvent.mouseMove(geocodeCanvas, markerClientPoint(geocodeCanvas, ALBUQUERQUE))
      await waitFor(() => expect(getComputedStyle(tooltip).display).toBe('none'))

      expect(canvas.queryByRole('button', { name: 'Reset Zoom' })).not.toBeInTheDocument()
      fireEvent.click(geocodeCanvas, markerClientPoint(geocodeCanvas, BOSTON))
      const modal = (await waitForPresence('.modal-content', canvasElement)) as HTMLElement
      expect(normalize(modal.textContent)).toContain('County: Boston')
      expect(normalize(modal.textContent)).toContain('Value: 12')

      const modalClose = modal.querySelector<HTMLElement>('.modal-close')
      expect(modalClose).toBeTruthy()
      await user.click(modalClose!)
      await waitForAbsence('.modal-content', canvasElement)

      const resetZoom = canvas.getByRole('button', { name: 'Reset Zoom' })
      expect(resetZoom).toBeVisible()
      await waitFor(() => expect(canvasSignature(geocodeCanvas)).not.toBe(overviewSignature))
      resetZoom.focus()
      expect(resetZoom).toHaveFocus()
      await user.keyboard('{Enter}')
      await waitFor(() => expect(canvas.queryByRole('button', { name: 'Reset Zoom' })).not.toBeInTheDocument())
      await waitFor(() => expect(canvasSignature(geocodeCanvas)).toBe(overviewSignature))
      expect(markerPixels(geocodeCanvas)).toEqual(overviewMarker)

      expect(latestConfig.visual).toMatchObject({
        cityStyle: 'star',
        cityStyleLabel: 'Reporting sites'
      })
      expect(Number(latestConfig.visual.geoCodeCircleSize)).toBe(10)
      expect(canvasElement.querySelector('[aria-label="Map Legend"]')).toHaveTextContent('Reporting sites')
      expect(canvasElement.querySelector('[aria-label="Map Legend"] .visx-glyph-star')).toBeVisible()

      const finalColumnsSection = await openSection(canvas, canvasElement, 'Columns')
      expect(
        finalColumnsSection.querySelector<HTMLSelectElement>('[data-required-field-control="map-geography"]')
      ).toHaveValue('City')
      expect(
        finalColumnsSection.querySelector<HTMLSelectElement>('[data-required-field-control="map-data-column"]')
      ).toHaveValue('Value')
      expect(labeled<HTMLSelectElement>(finalColumnsSection, 'Latitude Column', 'select')).toHaveValue('Latitude')
      expect(labeled<HTMLSelectElement>(finalColumnsSection, 'Longitude Column', 'select')).toHaveValue('Longitude')
      expect(consoleErrors, 'Expected the MAP-005 workflow to emit no console errors').toEqual([])
      expect(unhandledRejections).toEqual([])
      expect(windowErrors).toEqual([])
    } finally {
      console.error = originalConsoleError
      window.fetch = originalFetch
      window.removeEventListener('unhandledrejection', onRejection)
      window.removeEventListener('error', onWindowError)
      window.removeEventListener('updateVizConfig', onConfig)
    }
  }
}
