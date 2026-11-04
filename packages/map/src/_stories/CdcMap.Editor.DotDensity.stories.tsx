import { useContext, useMemo, useRef, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fireEvent, userEvent, within } from 'storybook/test'
import EditorContext from '@cdc/core/contexts/EditorContext'
import { openAccordion, performAndAssert, waitForEditor, waitForPresence } from '@cdc/core/helpers/testing'
import { stripConfig } from '@cdc/dashboard/src/helpers/formatConfigBeforeSave'
import CdcMap from '../CdcMap'
import { createNewMapConfig } from '../helpers/createNewMapConfig'
import { createDefaultDotDensityConfig } from '../helpers/dotDensityConfig'
import type { DotDensityConfig, MapConfig } from '../types/MapConfig'
import countyTopology from '../components/UsaMap/data/cb_2019_us_county_20m.json'
import { outbreakCounts, diseaseSeries } from './dotDensity/outbreakData'
import importableDensitySample from '../../examples/dot-density-outbreaks.json'

const fixture = createNewMapConfig({
  type: 'map',
  general: {
    type: 'data',
    geoType: 'us-county',
    title: 'Simulated outbreaks — editor authoring',
    showStateDropdown: true,
    showSidebar: true,
    allowMapZoom: true,
    countyCensusYear: '2019'
  },
  columns: {
    geo: { name: 'FIPS', label: 'County', tooltip: true, dataTable: true },
    primary: { name: 'Total', label: 'Total cases', tooltip: true, dataTable: true }
  },
  data: Object.entries(outbreakCounts).map(([FIPS, counts]) => ({
    FIPS,
    Total: counts.reduce((a, b) => a + b, 0),
    ...Object.fromEntries(diseaseSeries.map((series, index) => [series.id, counts[index]]))
  })),
  table: { label: 'County totals', expanded: false, forceDisplay: true },
  dotDensity: createDefaultDotDensityConfig()
} as unknown as MapConfig)

function EditorHarness({ config }: { config: MapConfig }) {
  const parent = useContext(EditorContext)
  const latest = useRef(config)
  const [loaded, setLoaded] = useState(config)
  const [generation, setGeneration] = useState(0)
  const [saved, setSaved] = useState('')
  const editor = useMemo(
    () => ({
      ...parent,
      setTempConfig: (next: MapConfig) => {
        latest.current = next
      }
    }),
    [parent]
  )
  return (
    <>
      <button
        type='button'
        onClick={() => {
          const next = JSON.parse(JSON.stringify(stripConfig(latest.current)))
          setSaved(JSON.stringify(next.dotDensity))
          setLoaded(next)
          setGeneration(value => value + 1)
        }}
      >
        Save and Reload Map
      </button>
      <output aria-label='Saved Dot Density Config'>{saved}</output>
      <EditorContext.Provider value={editor}>
        <CdcMap key={generation} config={loaded} isEditor navigationHandler={() => {}} setConfig={() => {}} />
      </EditorContext.Provider>
    </>
  )
}

const meta: Meta<typeof EditorHarness> = {
  title: 'Components/Templates/Map/Editor Tests/Dot Density',
  component: EditorHarness,
  args: { config: fixture },
  parameters: { layout: 'fullscreen', coveDeveloperMode: 'true' },
  beforeEach: ({ parameters }) => {
    const originalUrl = window.location.href
    const url = new URL(originalUrl)
    if (parameters.coveDeveloperMode === 'absent') url.searchParams.delete('isCoveDeveloper')
    else url.searchParams.set('isCoveDeveloper', parameters.coveDeveloperMode)
    window.history.replaceState({}, '', url)
    const original = globalThis.fetch
    globalThis.fetch = (input, init) => {
      const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url
      if (url.startsWith('https://www.cdc.gov/TemplatePackage/contrib/data/county-topography/')) {
        return Promise.resolve(new Response(JSON.stringify(countyTopology), { status: 200 }))
      }
      return original(input, init)
    }
    return () => {
      globalThis.fetch = original
      window.history.replaceState({}, '', originalUrl)
    }
  }
}
export default meta
type Story = StoryObj<typeof EditorHarness>

const readMap = (root: HTMLElement) => {
  const map = root.querySelector<HTMLCanvasElement>('canvas.county-map-canvas')
  let pixels = 0
  if (map?.width) {
    const data = map.getContext('2d')!.getImageData(0, 0, map.width, map.height).data
    for (let i = 0; i < data.length; i++) pixels = Math.imul(pixels ^ data[i], 16777619)
  }
  return { count: Number(map?.dataset.drawnDots || 0), signature: map?.dataset.positionSignature || '', pixels }
}

export const AuthorAndReload: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Type')
    await userEvent.selectOptions(canvas.getByLabelText(/Map Type/i, { selector: 'select' }), 'dot-density')
    await userEvent.click(canvas.getByRole('button', { name: /Count Column/ }))
    expect(canvas.getByRole('button', { name: 'Add Count Series' })).toHaveFocus()
    await userEvent.click(canvas.getByRole('button', { name: 'Add Count Series' }))
    await userEvent.selectOptions(canvas.getByLabelText('Count column 1'), 'measles')
    await waitForPresence('canvas[data-drawn-dots]', canvasElement)
    await performAndAssert(
      'Authored value per dot changes the Canvas dot count',
      () => readMap(canvasElement),
      async () => {
        const input = canvas.getByLabelText('Value per dot')
        await userEvent.clear(input)
        await userEvent.type(input, '5')
      },
      (_, after) => after.count === 101
    )
    await userEvent.click(canvas.getByRole('button', { name: 'Add Count Series' }))
    await performAndAssert(
      'A second authored count series adds its own dots',
      () => readMap(canvasElement),
      async () => userEvent.selectOptions(canvas.getByLabelText('Count column 2'), 'salmonellosis'),
      (_, after) => after.count === 331
    )
    await performAndAssert(
      'Changing a series color changes the rendered Canvas',
      () => readMap(canvasElement),
      async () => {
        fireEvent.change(canvas.getByLabelText('Series color 1'), { target: { value: '#008000' } })
      },
      (before, after) => after.pixels !== before.pixels && after.count === before.count
    )
    await performAndAssert(
      'Series labels reach the runtime legend',
      () => Boolean(canvas.queryByRole('button', { name: 'Measles cases' })),
      async () => userEvent.type(canvas.getByLabelText('Series label 1'), 'Measles cases'),
      (_, after) => after
    )
    const beforeReload = readMap(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Save and Reload Map' }))
    await waitForEditor(canvas)
    await performAndAssert(
      'Saved JSON reloads the layer without changing positions or count',
      () => readMap(canvasElement),
      async () => {},
      (_, after) => after.count === beforeReload.count && after.signature === beforeReload.signature
    )
    await openAccordion(canvas, 'Type')
    expect(canvas.getByLabelText(/Map Type/i, { selector: 'select' })).toHaveValue('dot-density')
    const saved = JSON.parse(canvas.getByLabelText('Saved Dot Density Config').textContent!) as DotDensityConfig
    expect(saved.enabled).toBe(true)
    expect(saved.dotValue).toBe(5)
    expect(saved.series[0]).toMatchObject({ column: 'measles', label: 'Measles cases', color: '#008000' })
    expect(saved.series[1].column).toBe('salmonellosis')
    expect(new Set(saved.series.map(series => series.id)).size).toBe(2)
    expect(saved).not.toHaveProperty('hiddenSeries')
    await performAndAssert(
      'Runtime legend toggles hide only the chosen series',
      () => readMap(canvasElement),
      async () => userEvent.click(canvas.getByRole('button', { name: 'Measles cases' })),
      (before, after) => after.count === 230 && after.signature === before.signature
    )
  }
}

export const EditSettings: Story = {
  args: {
    config: {
      ...fixture,
      dotDensity: {
        ...createDefaultDotDensityConfig(),
        enabled: true,
        dotValue: 5,
        series: [{ id: 'measles-series', column: 'measles', label: 'Measles', color: '#0072B2' }]
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await waitForPresence('canvas[data-drawn-dots="101"]', canvasElement)
    await openAccordion(canvas, 'Dot Density')
    await performAndAssert(
      'Changing radius redraws dots at stable positions',
      () => readMap(canvasElement),
      async () => {
        const input = canvas.getByLabelText('Dot radius')
        await userEvent.clear(input)
        await userEvent.type(input, '3')
      },
      (before, after) => after.pixels !== before.pixels && after.signature === before.signature
    )
    await performAndAssert(
      'Changing seed changes positions but preserves represented counts',
      () => readMap(canvasElement),
      async () => {
        const input = canvas.getByLabelText('Placement seed')
        await userEvent.clear(input)
        await userEvent.type(input, '123')
      },
      (before, after) => after.signature !== before.signature && after.count === before.count
    )
    await openAccordion(canvas, 'Legend')
    await performAndAssert(
      'Legend title reaches the rendered legend',
      () => Boolean(canvas.queryByText('Outbreak density')),
      async () => {
        const input = canvas.getByLabelText('Legend Title')
        await userEvent.clear(input)
        await userEvent.type(input, 'Outbreak density')
      },
      (_, after) => after
    )
    await performAndAssert(
      'Legend visibility affects the rendered legend',
      () => Boolean(canvas.queryByRole('button', { name: 'Measles' })),
      async () => userEvent.click(canvas.getByRole('checkbox', { name: 'Show Legend' })),
      (before, after) => before && !after
    )
    const beforeSwitch = readMap(canvasElement)
    await openAccordion(canvas, 'Type')
    await performAndAssert(
      'Selecting Data removes the density layer',
      () => Boolean(canvasElement.querySelector('canvas[data-drawn-dots]')),
      async () => userEvent.selectOptions(canvas.getByLabelText(/Map Type/i, { selector: 'select' }), 'data'),
      (before, after) => before && !after
    )
    expect(canvas.queryByRole('button', { name: 'Dot Density' })).toBeNull()
    await performAndAssert(
      'Selecting Dot Density restores the same dots and placement',
      () => readMap(canvasElement),
      async () => userEvent.selectOptions(canvas.getByLabelText(/Map Type/i, { selector: 'select' }), 'dot-density'),
      (_, after) => after.count === beforeSwitch.count && after.signature === beforeSwitch.signature
    )
    await openAccordion(canvas, 'Dot Density')
    expect(canvas.getByLabelText('Dot radius')).toHaveValue(3)
    expect(canvas.getByLabelText('Placement seed')).toHaveValue(123)
    await performAndAssert(
      'Removing the last series reveals the count-column authoring requirement',
      () => Boolean(canvasElement.querySelector('canvas[data-drawn-dots]')),
      async () => userEvent.click(canvas.getByRole('button', { name: 'Remove Count Series 1' })),
      (before, after) => before && !after
    )
    expect(canvas.getByRole('button', { name: /Count Column/ })).toBeVisible()
  }
}

export const NeutralDensityMap: Story = {
  args: {
    config: {
      ...fixture,
      columns: { ...fixture.columns, primary: { ...fixture.columns.primary, name: '' } },
      dotDensity: {
        ...createDefaultDotDensityConfig(),
        enabled: true,
        dotValue: 5,
        series: [{ id: 'measles-series', column: 'measles', label: 'Measles', color: '#0072B2' }]
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await waitForPresence('canvas[data-drawn-dots="101"]', canvasElement)
    expect(canvas.queryByRole('button', { name: 'Data Column' })).toBeNull()
    await userEvent.click(canvas.getByRole('button', { name: /County totals/ }))
    expect(canvas.getByRole('columnheader', { name: /Measles/ })).toBeVisible()
  }
}

export const MultipleDiseases: Story = {
  args: {
    config: {
      ...fixture,
      columns: { ...fixture.columns, primary: { ...fixture.columns.primary, name: '' } },
      dotDensity: {
        ...createDefaultDotDensityConfig(),
        enabled: true,
        dotValue: 5,
        legend: { show: true, title: 'Simulated outbreaks' },
        series: diseaseSeries.map(disease => ({
          id: `outbreak-${disease.id}`,
          column: disease.id,
          label: disease.label,
          color: disease.color
        }))
      }
    }
  }
}

export const ImportableSample: Story = {
  args: { config: importableDensitySample as unknown as MapConfig },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await waitForPresence('canvas[data-drawn-dots="560"]', canvasElement)
    expect(canvas.queryByText(/visible dots/)).toBeNull()
    await openAccordion(canvas, 'Type')
    expect(canvas.getByLabelText(/Map Type/i, { selector: 'select' })).toHaveValue('dot-density')
    await openAccordion(canvas, 'Dot Density')
    expect(canvas.getByLabelText('Value per dot')).toHaveValue(5)
    expect(canvas.getByLabelText('Count column 1')).toHaveValue('Measles')
    expect(canvas.getByLabelText('Count column 2')).toHaveValue('Salmonellosis')
    expect(canvas.getByLabelText('Count column 3')).toHaveValue('Pertussis')
    await userEvent.selectOptions(canvas.getByRole('combobox', { name: /Select Location/ }), '04')
  }
}

export const CountyOnlyDiscovery: Story = {
  args: {
    config: {
      ...fixture,
      dotDensity: {
        ...createDefaultDotDensityConfig(),
        enabled: true,
        dotValue: 5,
        series: [{ id: 'retained-measles', column: 'measles', label: 'Measles', color: '#0072B2' }]
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await waitForPresence('canvas[data-drawn-dots="101"]', canvasElement)
    const initial = readMap(canvasElement)
    await openAccordion(canvas, 'Type')
    const subtype = () => canvas.getByLabelText(/Geography Subtype/i)
    const mapType = () => canvas.getByLabelText(/Map Type/i, { selector: 'select' })
    await performAndAssert(
      'State geography suspends county density',
      () => Boolean(canvasElement.querySelector('canvas[data-drawn-dots]')),
      async () => userEvent.selectOptions(subtype(), 'us'),
      (before, after) => before && !after
    )
    expect(within(mapType()).queryByRole('option', { name: 'Dot Density' })).toBeNull()
    expect(canvas.queryByRole('button', { name: 'Dot Density' })).toBeNull()
    await performAndAssert(
      'Returning to county geography restores retained density',
      () => readMap(canvasElement),
      async () => userEvent.selectOptions(subtype(), 'us-county'),
      (_, after) => after.count === initial.count && after.signature === initial.signature
    )
    expect(mapType()).toHaveValue('dot-density')
    await performAndAssert(
      'Geocode disables density rendering',
      () => Boolean(canvasElement.querySelector('canvas[data-drawn-dots]')),
      async () => userEvent.selectOptions(mapType(), 'us-geocode'),
      (before, after) => before && !after
    )
    expect(canvas.queryByRole('button', { name: 'Dot Density' })).toBeNull()
    await performAndAssert(
      'Selecting Dot Density from Geocode restores the authored layer',
      () => readMap(canvasElement),
      async () => userEvent.selectOptions(mapType(), 'dot-density'),
      (_, after) => after.count === initial.count && after.signature === initial.signature
    )
    await userEvent.click(canvas.getByRole('button', { name: 'Save and Reload Map' }))
    await waitForEditor(canvas)
    const saved = JSON.parse(canvas.getByLabelText('Saved Dot Density Config').textContent!)
    expect(saved.series).toEqual([{ id: 'retained-measles', column: 'measles', label: 'Measles', color: '#0072B2' }])
  }
}

export const SharedLegendControls: Story = {
  args: {
    config: {
      ...fixture,
      columns: { ...fixture.columns, primary: { ...fixture.columns.primary, name: '' } },
      dotDensity: {
        ...createDefaultDotDensityConfig(),
        enabled: true,
        dotValue: 5,
        series: [{ id: 'shared-measles', column: 'measles', label: 'Measles', color: '#0072B2' }]
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await waitForPresence('canvas[data-drawn-dots="101"]', canvasElement)
    await openAccordion(canvas, 'Legend')
    const legend = () => canvas.getByRole('region', { name: 'Legend' })
    expect(within(legend()).queryByText(/1 dot =/)).toBeNull()
    expect(canvas.queryByLabelText('Legend Type')).toBeNull()
    expect(canvas.queryByLabelText('Number of Items')).toBeNull()
    await performAndAssert(
      'Shared legend title labels a density-only map',
      () => within(legend()).queryByRole('heading', { name: 'Disease outbreaks' }) !== null,
      async () => {
        await userEvent.clear(canvas.getByLabelText('Legend Title'))
        await userEvent.type(canvas.getByLabelText('Legend Title'), 'Disease outbreaks')
      },
      (_, after) => after
    )
    await performAndAssert(
      'Shared legend description supplies the density explanation',
      () => within(legend()).queryByText('Synthetic county counts') !== null,
      async () => userEvent.type(canvas.getByLabelText('Legend Description'), 'Synthetic county counts'),
      (_, after) => after
    )
    await performAndAssert(
      'Shared position control moves the density legend',
      () => legend().classList.contains('bottom'),
      async () => userEvent.selectOptions(canvas.getByLabelText('Legend Position'), 'bottom'),
      (_, after) => after
    )
    await performAndAssert(
      'Shared single-row layout applies to density series',
      () => canvas.getByRole('list', { name: 'Dot density legend items' }).classList.contains('single-row'),
      async () => userEvent.click(canvas.getByRole('checkbox', { name: 'Single Row Legend' })),
      (_, after) => after
    )
    await performAndAssert(
      'Shared shape control changes density swatches',
      () =>
        canvas.getByRole('list', { name: 'Dot density legend items' }).querySelector<HTMLElement>('.legend-item')?.style
          .borderRadius === '0px',
      async () => userEvent.selectOptions(canvas.getByLabelText(/Legend Style/i, { selector: 'select' }), 'boxes'),
      (_, after) => after
    )
    await performAndAssert(
      'Shared border control applies to the density legend',
      () => legend().classList.contains('no-border'),
      async () => userEvent.click(canvas.getByRole('checkbox', { name: /Hide Legend Box/ })),
      (before, after) => before && !after
    )
    const before = readMap(canvasElement)
    await performAndAssert(
      'Native legend buttons hide density dots',
      () => readMap(canvasElement),
      async () => userEvent.click(canvas.getByRole('button', { name: 'Measles' })),
      (_, after) => after.count === 0 && after.signature === before.signature
    )
    expect(canvas.getByRole('button', { name: 'Measles' })).toHaveAttribute('aria-pressed', 'false')
    await performAndAssert(
      'Native Show All restores density dots',
      () => readMap(canvasElement),
      async () => userEvent.click(canvas.getByRole('button', { name: 'Show All' })),
      (_, after) => after.count === before.count && after.signature === before.signature
    )
    await performAndAssert(
      'Shared Show Legend hides the entire legend without changing density',
      () => canvas.queryByRole('region', { name: 'Legend' }) !== null,
      async () => userEvent.click(canvas.getByRole('checkbox', { name: 'Show Legend' })),
      (before, after) => before && !after
    )
    expect(readMap(canvasElement).count).toBe(101)
    await performAndAssert(
      'Shared Show Legend restores the density key',
      () => canvas.queryByRole('region', { name: 'Legend' }) !== null,
      async () => userEvent.click(canvas.getByRole('checkbox', { name: 'Show Legend' })),
      (_, after) => after
    )
    await userEvent.click(canvas.getByRole('button', { name: 'Save and Reload Map' }))
    await waitForEditor(canvas)
    await waitForPresence('canvas[data-drawn-dots="101"]', canvasElement)
    expect(within(legend()).getByRole('heading', { name: 'Disease outbreaks' })).toBeVisible()
    expect(within(legend()).getByText('Synthetic county counts')).toBeVisible()
    expect(legend()).toHaveClass('bottom')
    expect(canvas.getByRole('list', { name: 'Dot density legend items' })).toHaveClass('single-row')
    expect(legend()).not.toHaveClass('no-border')
    expect(JSON.parse(canvas.getByLabelText('Saved Dot Density Config').textContent!)).not.toHaveProperty('legend')
  }
}

export const SparseCountData: Story = {
  args: {
    config: {
      ...fixture,
      columns: { ...fixture.columns, primary: { ...fixture.columns.primary, name: '' } },
      data: [{ FIPS: '04001' }, { FIPS: '04013', Cases: 33 }],
      dotDensity: {
        ...createDefaultDotDensityConfig(),
        enabled: true,
        dotValue: 1.1,
        series: [{ id: 'sparse-cases', column: 'Cases', label: 'Cases', color: '#0072B2' }]
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await waitForPresence('canvas[data-drawn-dots="30"]', canvasElement)
    expect(canvas.getByText('1 missing or invalid count values omitted.')).toBeVisible()
    expect(canvas.queryByRole('button', { name: /Count Column/ })).toBeNull()
    await openAccordion(canvas, 'Dot Density')
    const column = canvas.getByLabelText('Count column 1')
    expect(within(column).getByRole('option', { name: 'Cases' })).toHaveValue('Cases')
    expect(within(column).queryByRole('option', { name: /missing/ })).toBeNull()
    await userEvent.click(canvas.getByRole('button', { name: 'Save and Reload Map' }))
    await waitForPresence('canvas[data-drawn-dots="30"]', canvasElement)
  }
}

export const FocusMissingMappedSeries: Story = {
  args: {
    config: {
      ...fixture,
      dotDensity: {
        ...createDefaultDotDensityConfig(),
        enabled: true,
        series: [
          { id: 'blank-draft', column: '', label: '', color: '#0072B2' },
          { id: 'missing-count', column: 'DeletedColumn', label: 'Cases', color: '#D55E00' }
        ]
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await performAndAssert(
      'Required-field navigation focuses the missing mapped series ahead of a blank draft',
      () => canvasElement.ownerDocument.activeElement === canvas.getByLabelText('Count column 2'),
      async () => userEvent.click(canvas.getByRole('button', { name: /Count Column/ })),
      (_, after) => after
    )
    await userEvent.selectOptions(canvas.getByLabelText('Count column 2'), 'measles')
    await waitForPresence('canvas[data-drawn-dots]', canvasElement)
    expect(canvas.queryByRole('button', { name: /Count Column/ })).toBeNull()
    expect(canvas.getByLabelText('Count column 1')).toHaveValue('')
  }
}

const assertDensityAuthoringHidden = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement)
  await waitForEditor(canvas)
  await waitForPresence('canvas[data-drawn-dots="560"]', canvasElement)
  await openAccordion(canvas, 'Type')
  const mapType = canvas.getByLabelText(/Map Type/i, { selector: 'select' })
  expect(within(mapType).queryByRole('option', { name: 'Dot Density' })).toBeNull()
  expect(mapType).toHaveValue('data')
  expect(canvas.queryByRole('button', { name: 'Dot Density' })).toBeNull()
  expect(canvas.queryByText(/Select "Dot Density"/)).toBeNull()
}

export const HiddenWithoutDeveloperFlag: Story = {
  args: { config: importableDensitySample as unknown as MapConfig },
  parameters: { coveDeveloperMode: 'absent' },
  play: assertDensityAuthoringHidden
}

export const HiddenWithDeveloperFlagFalse: Story = {
  args: { config: importableDensitySample as unknown as MapConfig },
  parameters: { coveDeveloperMode: 'false' },
  play: assertDensityAuthoringHidden
}
