import type { Meta, StoryObj } from '@storybook/react-vite'
import { zoomTransform } from 'd3-zoom'
import { geoAlbersUsaTerritories } from 'd3-composite-projections'
import { expect, fireEvent, userEvent, within } from 'storybook/test'
import { performAndAssert, waitForPresence } from '@cdc/core/helpers/testing'
import CountyDotDensityPrototype from './dotDensity/CountyDotDensityPrototype'
import CountyDotDensityRuntimeHarness from './dotDensity/CountyDotDensityRuntimeHarness'
import countyTopology from '../components/UsaMap/data/cb_2019_us_county_20m.json'
import { diseaseSeries, outbreakCounts } from './dotDensity/outbreakData'

const meta: Meta<typeof CountyDotDensityPrototype> = {
  title: 'Components/Templates/Map/Dot Density Prototype',
  component: CountyDotDensityPrototype,
  beforeEach: () => {
    const originalFetch = globalThis.fetch
    globalThis.fetch = (input, init) => {
      const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url
      if (url.startsWith('https://www.cdc.gov/TemplatePackage/contrib/data/county-topography/')) {
        return Promise.resolve(
          new Response(JSON.stringify(countyTopology), { status: 200, headers: { 'Content-Type': 'application/json' } })
        )
      }
      return originalFetch(input, init)
    }
    return () => {
      globalThis.fetch = originalFetch
    }
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'County-only dot layer rendered by the actual CdcMap county Canvas, including its boundaries, state focus, tooltips, table, and zoom controls. Use Controls to change geography, dot value, radius, or seed. Data is synthetic; dots are reproducible approximate locations. There is no fixed dot-count cap; incomplete placement is rejected rather than silently thinned.'
      }
    }
  },
  args: { geography: '04', dotValue: 1000, dotRadius: 1.25, seed: 42, empty: false },
  argTypes: {
    dataset: { control: 'select', options: ['population', 'outbreaks'] },
    geography: { control: 'select', options: ['04', '06', 'all'] },
    dotValue: { control: { type: 'number', min: 1, step: 100 } },
    dotRadius: { control: { type: 'range', min: 0.5, max: 3, step: 0.25 } },
    seed: { control: { type: 'number', step: 1 } }
  }
}
export default meta
type Story = StoryObj<typeof CountyDotDensityPrototype>

const readMap = (root: HTMLElement) => {
  const canvas = root.querySelector('canvas')!
  return {
    count: Number(canvas.dataset.drawnDots),
    scale: Number(canvas.dataset.zoomScale),
    width: canvas.getBoundingClientRect().width,
    signature: canvas.dataset.positionSignature,
    pixels: (() => {
      const data = canvas.getContext('2d')!.getImageData(0, 0, canvas.width, canvas.height).data
      let hash = 2166136261
      for (let i = 0; i < data.length; i++) hash = Math.imul(hash ^ data[i], 16777619)
      return hash >>> 0
    })()
  }
}

export const Arizona: Story = {
  play: async ({ canvasElement }) => {
    await waitForPresence('canvas[data-drawn-dots]', canvasElement)
    const canvas = within(canvasElement)
    const original = readMap(canvasElement)
    expect(original.count).toBeGreaterThan(0)
    expect(original.signature).toContain('04013:')
    await performAndAssert(
      'Zoom changes Canvas output while geographic positions remain stable',
      () => readMap(canvasElement),
      async () => userEvent.click(canvas.getByRole('button', { name: 'Zoom In' })),
      (before, after) =>
        after.scale > before.scale &&
        after.pixels !== before.pixels &&
        after.signature === before.signature &&
        after.count === before.count
    )
    await performAndAssert(
      'Native reset returns to the nationwide view without regenerating dots',
      () => readMap(canvasElement),
      async () => userEvent.click(canvas.getByRole('button', { name: 'Reset Zoom' })),
      (_, after) => after.scale === 1 && after.count === original.count && after.signature === original.signature
    )
    expect(canvasElement.querySelector('canvas.county-map-canvas')).not.toBeNull()
    expect(canvas.getByRole('combobox', { name: /Select Location/ })).toHaveValue('United States')
  }
}

export const Nationwide: Story = { args: { geography: 'all', dotValue: 5000 } }
export const DenseArizona: Story = { args: { dotValue: 100 } }
export const California: Story = { args: { geography: '06' } }
export const ResizeAfterZoom: Story = {
  play: async ({ canvasElement }) => {
    await waitForPresence('canvas[data-drawn-dots]', canvasElement)
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Zoom In' }))
    const beforeResize = readMap(canvasElement)
    const container = canvasElement.querySelector('main')!
    await performAndAssert(
      'Resize preserves map-space translation and geographic positions',
      () => readMap(canvasElement),
      async () => {
        container.style.width = '600px'
      },
      (before, after) =>
        after.width < before.width &&
        after.scale === before.scale &&
        after.signature === before.signature &&
        after.count === before.count
    )
    await performAndAssert(
      'Production zoom remains usable after resizing',
      () => readMap(canvasElement),
      async () => userEvent.click(canvas.getByRole('button', { name: 'Zoom In' })),
      (_, after) =>
        Math.abs(after.scale - beforeResize.scale * 1.2) < 0.001 && after.signature === beforeResize.signature
    )
    container.style.width = ''
  }
}
export const Empty: Story = {
  args: { empty: true },
  play: async ({ canvasElement }) => {
    await waitForPresence('canvas[data-drawn-dots="0"]', canvasElement)
    expect(within(canvasElement).getByText('No data to display.')).toBeVisible()
  }
}
export const AboveFormerDotLimit: Story = {
  render: () => <CountyDotDensityRuntimeHarness rows={[{ FIPS: '04013', Cases: 500005 }]} />,
  play: async ({ canvasElement }) => {
    const map = (await waitForPresence('canvas[data-drawn-dots="100001"]', canvasElement)) as HTMLCanvasElement
    expect(map.dataset.densityError).toBe('')
    expect(JSON.parse(map.dataset.seriesCounts!)).toEqual({ cases: 100001 })
  }
}

const outbreakArgs = { dataset: 'outbreaks' as const, geography: '04' as const, dotValue: 5, dotRadius: 2 }

export const DiseaseOutbreaks: Story = {
  args: outbreakArgs,
  parameters: {
    docs: {
      description: {
        story:
          'Three invented disease outbreaks during one simulated reporting period in Arizona. Each dot represents five cases of the disease identified in the legend. Compare overlapping county distributions with disease checkboxes. These are case counts, not population-adjusted rates or actual case locations.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    await waitForPresence('canvas[data-series-counts]', canvasElement)
    const canvas = within(canvasElement)
    const map = canvasElement.querySelector('canvas')!
    const read = () => ({ ...readMap(canvasElement), series: JSON.parse(map.dataset.seriesCounts!) })
    const original = read()
    diseaseSeries.forEach((disease, index) => {
      const expectedDots = Object.values(outbreakCounts).reduce((sum, values) => sum + Math.floor(values[index] / 5), 0)
      expect(original.series[disease.id]).toBe(expectedDots)
    })
    // Verify each disease color actually reaches the Canvas, not just the legend.
    const pixels = map.getContext('2d')!.getImageData(0, 0, map.width, map.height).data
    let backgroundPixels = 0
    for (let i = 0; i < pixels.length; i += 4) {
      if (pixels[i] === 245 && pixels[i + 1] === 246 && pixels[i + 2] === 247 && pixels[i + 3] === 255) {
        backgroundPixels++
      }
    }
    expect(backgroundPixels).toBeGreaterThan(100)
    for (const disease of diseaseSeries) {
      const rgb = [1, 3, 5].map(offset => parseInt(disease.color.slice(offset, offset + 2), 16))
      let matches = 0
      for (let i = 0; i < pixels.length; i += 4) {
        if (pixels[i] === rgb[0] && pixels[i + 1] === rgb[1] && pixels[i + 2] === rgb[2]) matches++
      }
      expect(matches).toBeGreaterThan(10)
    }
    await performAndAssert(
      'Native zoom redraws the dots',
      read,
      async () => userEvent.click(canvas.getByRole('button', { name: 'Zoom In' })),
      (before, after) => after.scale > before.scale && after.pixels !== before.pixels
    )
    const zoomed = read()
    await performAndAssert(
      'Hiding measles removes only its dots while preserving positions and zoom',
      read,
      async () => userEvent.click(canvas.getByRole('checkbox', { name: /Measles/ })),
      (before, after) =>
        after.series.measles === 0 &&
        after.count === before.count - before.series.measles &&
        after.pixels !== before.pixels &&
        after.signature === before.signature &&
        after.scale === before.scale
    )
    await performAndAssert(
      'Restoring measles reproduces the exact combined map',
      read,
      async () => userEvent.click(canvas.getByRole('checkbox', { name: /Measles/ })),
      (_, after) => after.pixels === zoomed.pixels && after.count === zoomed.count
    )
    await performAndAssert(
      'All diseases can be hidden without losing geography or zoom',
      read,
      async () => {
        for (const disease of diseaseSeries)
          await userEvent.click(canvas.getByRole('checkbox', { name: new RegExp(disease.label) }))
      },
      (_, after) => after.count === 0 && after.scale === zoomed.scale
    )
    expect(canvas.getByText(/No diseases selected/)).toBeVisible()
    for (const disease of diseaseSeries)
      await userEvent.click(canvas.getByRole('checkbox', { name: new RegExp(disease.label) }))
    await userEvent.click(canvas.getByRole('button', { name: /County totals/i }))
    expect(canvas.getByRole('columnheader', { name: /Measles cases/i })).toBeVisible()
    expect(canvas.getByRole('columnheader', { name: /Salmonellosis cases/i })).toBeVisible()
    expect(canvas.getByRole('columnheader', { name: /Pertussis cases/i })).toBeVisible()
    await userEvent.click(canvas.getByRole('button', { name: 'Reset Zoom' }))
  }
}

export const DenseDiseaseOutbreaks: Story = { args: { ...outbreakArgs, dotValue: 1 } }
export const CountySelection: Story = {
  args: outbreakArgs,
  play: async ({ canvasElement }) => {
    const map = (await waitForPresence('canvas.county-map-canvas[data-drawn-dots]', canvasElement)) as HTMLCanvasElement
    const canvas = within(canvasElement)
    const pixels = map.getContext('2d')!.getImageData(0, 0, map.width, map.height).data
    let pixel = -1
    for (let i = 0; i < pixels.length; i += 4) {
      if (pixels[i] === 0 && pixels[i + 1] === 114 && pixels[i + 2] === 178) {
        pixel = i / 4
        break
      }
    }
    expect(pixel).toBeGreaterThanOrEqual(0)
    const bounds = map.getBoundingClientRect()
    const tooltip = canvasElement.querySelector('[id$="-canvas"].tooltip')!
    await performAndAssert(
      'Native county tooltip includes each disease count',
      () => tooltip.textContent || '',
      async () => {
        fireEvent.mouseMove(map, {
          clientX: bounds.left + (((pixel % map.width) + 0.5) * bounds.width) / map.width,
          clientY: bounds.top + ((Math.floor(pixel / map.width) + 0.5) * bounds.height) / map.height
        })
      },
      (_, text) =>
        text.includes('Measles cases:') && text.includes('Salmonellosis cases:') && text.includes('Pertussis cases:')
    )
    await performAndAssert(
      'County selection highlights its border without erasing or relocating dots',
      () => readMap(canvasElement),
      async () => userEvent.selectOptions(canvas.getByRole('combobox', { name: /Select County/ }), '04013'),
      (before, after) =>
        after.pixels !== before.pixels && after.count === before.count && after.signature === before.signature
    )
    await performAndAssert(
      'Hiding a disease updates the selected county map',
      () => JSON.parse(map.dataset.seriesCounts!),
      async () => userEvent.click(canvas.getByRole('checkbox', { name: /Measles/ })),
      (_, after) => after.measles === 0
    )
    await performAndAssert(
      'Native zoom keeps the hidden disease hidden on later animation frames',
      () => ({ ...readMap(canvasElement), series: JSON.parse(map.dataset.seriesCounts!) }),
      async () => userEvent.click(canvas.getByRole('button', { name: 'Zoom In' })),
      (before, after) => after.scale > before.scale && after.pixels !== before.pixels && after.series.measles === 0
    )
  }
}
export const EmptyDiseaseOutbreaks: Story = { ...Empty, args: { ...outbreakArgs, empty: true } }
export const NoOutbreakFixtureData: Story = { ...Empty, args: { ...outbreakArgs, geography: '06' } }

export const DisabledDensityStaysDisabledAfterZoom: Story = {
  render: () => <CountyDotDensityRuntimeHarness />,
  play: async ({ canvasElement }) => {
    const map = (await waitForPresence('canvas[data-drawn-dots="10"]', canvasElement)) as HTMLCanvasElement
    const canvas = within(canvasElement)
    const read = () => ({
      signature: map.dataset.positionSignature,
      scale: zoomTransform(map).k,
      painted: map
        .getContext('2d')!
        .getImageData(0, 0, map.width, map.height)
        .data.some(value => value !== 0)
    })
    await performAndAssert(
      'Disabling a runtime density-only map clears its Canvas',
      read,
      async () => userEvent.click(canvas.getByRole('button', { name: 'Toggle runtime density' })),
      (_, after) => after.signature === undefined && !after.painted
    )
    await performAndAssert(
      'Button zoom does not restore disabled dots',
      read,
      async () => {
        await userEvent.click(canvas.getByRole('button', { name: 'Zoom In' }))
        await new Promise<void>(resolve => requestAnimationFrame(() => resolve()))
      },
      (before, after) => after.scale > before.scale
    )
    expect(read().signature).toBeUndefined()
    expect(read().painted).toBe(false)
    await performAndAssert(
      'Wheel zoom does not restore disabled dots',
      read,
      async () => {
        fireEvent.wheel(map, { deltaY: -100, clientX: 200, clientY: 150 })
        await new Promise<void>(resolve => requestAnimationFrame(() => resolve()))
      },
      (before, after) => after.scale > before.scale
    )
    expect(read().signature).toBeUndefined()
    expect(read().painted).toBe(false)
    expect(canvasElement.querySelector('canvas')).toBe(map)
  }
}

export const UnsupportedCountyDoesNotGenerateDots: Story = {
  render: () => (
    <CountyDotDensityRuntimeHarness
      rows={[
        { FIPS: '04013', Cases: 50 },
        { FIPS: '51620', Cases: 1000000 }
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const map = (await waitForPresence('canvas[data-drawn-dots="10"]', canvasElement)) as HTMLCanvasElement
    expect(map.dataset.densityError).toBe('')
    expect(map.dataset.positionSignature).toContain('04013:cases:')
    expect(map.dataset.positionSignature).not.toContain('51620:')
  }
}

export const MissingCountyData: Story = {
  render: () => (
    <CountyDotDensityRuntimeHarness
      rows={[
        { FIPS: '04013', Cases: 0 },
        { FIPS: '04021', Cases: 1 },
        { FIPS: '04019', Cases: 50 }
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const map = (await waitForPresence('canvas[data-drawn-dots="10"]', canvasElement)) as HTMLCanvasElement
    const projection = geoAlbersUsaTerritories()
      .scale(map.width * 1.25)
      .translate([map.width / 2, map.height / 2])
    const zero = projection([-112.1, 33.5])!
    const belowOneDot = projection([-111.4, 32.9])!
    const missing = projection([-112.5, 34.6])!
    const readFill = ([x, y]: number[]) =>
      Array.from(map.getContext('2d')!.getImageData(Math.floor(x), Math.floor(y), 1, 1).data)

    expect(readFill(zero)).toEqual([245, 246, 247, 255])
    expect(readFill(belowOneDot)).toEqual([245, 246, 247, 255])
    expect(readFill(missing)).toEqual([223, 225, 226, 255])

    const tooltip = canvasElement.querySelector('#runtime-density-tooltip') as HTMLElement
    const hover = ([x, y]: number[]) => {
      const bounds = map.getBoundingClientRect()
      fireEvent.mouseMove(map, {
        clientX: bounds.left + (x * bounds.width) / map.width,
        clientY: bounds.top + (y * bounds.height) / map.height
      })
    }
    await performAndAssert(
      'A county with reported zero retains its hover tooltip',
      () => tooltip.style.display,
      async () => hover(zero),
      (_, display) => display === 'block'
    )
    expect(tooltip).toBeVisible()
    await performAndAssert(
      'A county without a data row hides the preceding county tooltip',
      () => tooltip.style.display,
      async () => hover(missing),
      (_, display) => display === 'none'
    )
    expect(tooltip).not.toBeVisible()
  }
}
