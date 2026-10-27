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
import annualChangeConfig from '../../examples/feature/bar/bar-chart-race-annual-change.json'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Bar Race',
  component: Chart,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof Chart>

export const AnnualChangesOverTime: Story = {
  name: 'Annual Changes Over Time',
  args: {
    config: annualChangeConfig as any,
    isEditor: false,
    interactionLabel: 'Annual program reach bar race'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await assertVisualizationRendered(canvasElement)

    expect(canvasElement.querySelector('.bar-chart-race__frame')).toHaveTextContent('2018')
    expect(canvasElement.querySelectorAll('.bar-chart-race__row')).toHaveLength(8)
    const frameAxis = canvas.getByRole('group', { name: 'Year axis' })
    expect(frameAxis).toHaveTextContent('2018')
    expect(frameAxis).toHaveTextContent('2024')
    expect(frameAxis.querySelectorAll('.bar-chart-race__frame-axis-tick')).toHaveLength(7)
    expect(frameAxis.querySelector('[aria-current="step"]')).toHaveTextContent('2018')
    expect(canvasElement.querySelector('.component--has-accent')).not.toBeInTheDocument()
    expect(canvas.getByRole('button', { name: 'Play' })).toBeInTheDocument()
    expect(canvasElement.querySelector('[data-category="Northeast"] .bar-chart-race__value')).toHaveTextContent('74')
    expect(canvasElement.querySelector('[data-category="Mountain"] .bar-chart-race__value')).toHaveTextContent('61')

    await performAndAssert(
      'Advance the annual time series',
      () => canvasElement.querySelector('.bar-chart-race__frame')?.textContent?.trim(),
      async () => userEvent.click(canvas.getByRole('button', { name: 'Play' })),
      (before, after) => before === '2018' && after === '2019'
    )

    expect(frameAxis.querySelector('[aria-current="step"]')).toHaveTextContent('2019')
    expect(canvasElement.querySelector('[data-category="Northeast"] .bar-chart-race__value')).toHaveTextContent('73')
    expect(canvasElement.querySelector('[data-category="Mountain"] .bar-chart-race__value')).toHaveTextContent('67')
  }
}

export const GeneralSectionTests: Story = {
  name: 'Editor: General Section',
  parameters: { test: { timeout: 30000 } },
  beforeEach: () => {
    const originalUrl = window.location.href
    const originalState = window.history.state
    const developerUrl = new URL(originalUrl)
    developerUrl.searchParams.set('isCoveDeveloper', 'true')
    window.history.replaceState(originalState, '', developerUrl)

    return () => window.history.replaceState(originalState, '', originalUrl)
  },
  args: {
    config: {
      ...annualChangeConfig,
      visualizationSubType: 'regular',
      orientation: 'vertical'
    } as any,
    isEditor: true,
    interactionLabel: 'Bar race editor story'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'General')

    expect(canvasElement.querySelector('.bar-chart-race')).not.toBeInTheDocument()
    const subtype = canvas.getByLabelText(/chart subtype/i) as HTMLSelectElement
    expect(Array.from(subtype.options).map(option => option.value)).toEqual(['regular', 'stacked', 'racing'])
    await performAndAssert(
      'Enable racing mode',
      () => Boolean(canvasElement.querySelector('.bar-chart-race')),
      async () => userEvent.selectOptions(subtype, 'racing'),
      (_before, after) => after
    )

    await waitForPresence('.bar-chart-race', canvasElement)
    const labelPlacement = canvasElement.querySelector('select[name="labelPlacement"]') as HTMLSelectElement
    expect(labelPlacement).toBeInTheDocument()
    expect(Array.from(labelPlacement.options).map(option => option.value)).toEqual([
      'Below Bar',
      'On Date/Category Axis'
    ])
    await performAndAssert(
      'Move race labels below their bars',
      () => {
        const race = canvasElement.querySelector('.bar-chart-race')
        return {
          labelsBelowBar: race?.classList.contains('bar-chart-race--labels-below-bar') ?? false,
          labelsOnAxis: race?.classList.contains('bar-chart-race--labels-on-axis') ?? false,
          plotHeight: Number.parseFloat(
            (canvasElement.querySelector('.bar-chart-race__plot') as HTMLElement | null)?.style.height || '0'
          )
        }
      },
      async () => userEvent.selectOptions(labelPlacement, 'Below Bar'),
      (before, after) =>
        before.labelsOnAxis &&
        !before.labelsBelowBar &&
        after.labelsBelowBar &&
        !after.labelsOnAxis &&
        after.plotHeight > before.plotHeight
    )

    const displayNumbersOnBar = canvas.getByLabelText(/display numbers on bar/i) as HTMLInputElement
    await performAndAssert(
      'Move race values after their bars',
      () => ({
        inside: canvasElement.querySelectorAll('.bar-chart-race__value--inside').length,
        after: canvasElement.querySelectorAll('.bar-chart-race__value--after').length
      }),
      async () => userEvent.click(displayNumbersOnBar),
      (before, after) => before.inside > 0 && before.after === 0 && after.inside === 0 && after.after > 0
    )
    await performAndAssert(
      'Show race value labels on fitting bars',
      () => ({
        inside: canvasElement.querySelectorAll('.bar-chart-race__value--inside').length,
        after: canvasElement.querySelectorAll('.bar-chart-race__value--after').length
      }),
      async () => userEvent.click(displayNumbersOnBar),
      (_before, after) => after.inside > 0
    )

    const timing = canvas.getByRole('slider', { name: /seconds per time step/i }) as HTMLInputElement
    expect(timing.valueAsNumber).toBe(0.5)
    expect(timing).toHaveAttribute('min', '0')
    expect(timing).toHaveAttribute('max', '1.5')
    expect(timing).toHaveAttribute('step', '0.5')

    const maximumBars = canvas.getByLabelText(/maximum bars/i) as HTMLInputElement
    await performAndAssert(
      'Limit visible bars',
      () => canvasElement.querySelectorAll('.bar-chart-race__row').length,
      async () => {
        await userEvent.clear(maximumBars)
        await userEvent.type(maximumBars, '2')
        await userEvent.tab()
      },
      (_before, after) => after === 2
    )

    await fireEvent.change(timing, { target: { value: '0' } })
    await performAndAssert(
      'Apply instant playback timing',
      () => canvasElement.querySelector('.bar-chart-race__frame')?.textContent?.trim(),
      async () => userEvent.click(canvas.getByRole('button', { name: 'Play' })),
      (before, after) => before === '2018' && after === '2024'
    )
    expect(canvas.getByRole('button', { name: 'Replay' })).toBeInTheDocument()

    await performAndAssert(
      'Switch to stacked bars without playback',
      () => Boolean(canvasElement.querySelector('.bar-chart-race')),
      async () => userEvent.selectOptions(subtype, 'stacked'),
      (before, after) => before && !after
    )
  }
}

export const ExistingRaceSubtypeTests: Story = {
  name: 'Editor: Existing Race Subtype',
  parameters: { test: { timeout: 30000 } },
  args: {
    config: annualChangeConfig as any,
    isEditor: true,
    interactionLabel: 'Existing bar race subtype story'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'General')

    const subtype = canvas.getByLabelText(/chart subtype/i) as HTMLSelectElement
    expect(Array.from(subtype.options).map(option => option.value)).toContain('racing')
    await performAndAssert(
      'Switch an existing race to Standard without losing Racing',
      () => ({
        options: Array.from((canvas.getByLabelText(/chart subtype/i) as HTMLSelectElement).options).map(
          option => option.value
        ),
        raceRendered: Boolean(canvasElement.querySelector('.bar-chart-race')),
        subtype: (canvas.getByLabelText(/chart subtype/i) as HTMLSelectElement).value
      }),
      async () => userEvent.selectOptions(subtype, 'regular'),
      (before, after) =>
        before.subtype === 'racing' &&
        before.raceRendered &&
        after.subtype === 'regular' &&
        !after.raceRendered &&
        after.options.includes('racing')
    )
    await performAndAssert(
      'Switch the same chart back to Racing',
      () => Boolean(canvasElement.querySelector('.bar-chart-race')),
      async () => userEvent.selectOptions(canvas.getByLabelText(/chart subtype/i), 'racing'),
      (before, after) => !before && after
    )
  }
}

export const ValueAxisTests: Story = {
  name: 'Editor: Race Value Axis',
  parameters: { test: { timeout: 30000 } },
  args: {
    config: annualChangeConfig as any,
    isEditor: true,
    interactionLabel: 'Bar race value axis story'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    const valueAxisButton = canvas.getByRole('button', { name: 'Value Axis' })
    await performAndAssert(
      'Open the race Value Axis panel',
      () => valueAxisButton.getAttribute('aria-expanded'),
      async () => userEvent.click(valueAxisButton),
      (before, after) => before === 'false' && after === 'true'
    )

    expect(canvas.queryByLabelText('Axis Type')).not.toBeInTheDocument()
    expect(canvas.queryByLabelText('Hide Axis')).not.toBeInTheDocument()
    expect(canvas.queryByLabelText('Hide Tick Labels')).not.toBeInTheDocument()
    expect(canvasElement.querySelector('#checkbox-dataFormat-none-commas')).toBeInTheDocument()
    expect(canvasElement.querySelector('#input-dataFormat-none-roundTo')).toBeInTheDocument()
    const prefix = canvasElement.querySelector('#input-dataFormat-none-prefix') as HTMLInputElement
    await performAndAssert(
      'Apply value-axis number formatting to race labels',
      () => canvasElement.querySelector('[data-category="Northeast"] .bar-chart-race__value')?.textContent,
      async () => {
        await userEvent.type(prefix, '$')
        await userEvent.tab()
      },
      (before, after) => before === '74K' && after === '$74K'
    )
  }
}

export const DateCategoryAxisTests: Story = {
  name: 'Editor: Race Date Category Axis',
  parameters: { test: { timeout: 30000 } },
  args: {
    config: {
      ...annualChangeConfig,
      exclusions: { active: false, keys: [] }
    } as any,
    isEditor: true,
    interactionLabel: 'Bar race date category axis story'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    const dateCategoryAxisButton = canvas.getByRole('button', { name: 'Date/Category Axis' })
    await performAndAssert(
      'Open the race Date/Category Axis panel',
      () => dateCategoryAxisButton.getAttribute('aria-expanded'),
      async () => userEvent.click(dateCategoryAxisButton),
      (before, after) => before === 'false' && after === 'true'
    )

    expect(canvas.queryByLabelText('Data Scaling Type')).not.toBeInTheDocument()
    expect(canvas.queryByLabelText('Manual Ticks')).not.toBeInTheDocument()
    expect(canvas.queryByLabelText('Number of Ticks')).not.toBeInTheDocument()
    expect(canvas.queryByLabelText(/tick rotation/i)).not.toBeInTheDocument()
    expect(canvas.queryByLabelText('Hide Axis')).not.toBeInTheDocument()
    expect(canvas.queryByLabelText('Hide Tick Labels')).not.toBeInTheDocument()
    expect(canvas.queryByLabelText(/show years once/i)).not.toBeInTheDocument()
    expect(canvas.getByLabelText(/data key/i)).toBeInTheDocument()

    const exclusionsToggle = canvas.getByLabelText(/exclude one or more values/i)
    await userEvent.click(exclusionsToggle)
    const getAddExclusion = () =>
      canvasElement.querySelector('select option[value="2018"]')?.parentElement as HTMLSelectElement | null
    const addExclusion = getAddExclusion() as HTMLSelectElement
    await performAndAssert(
      'Exclude the first race frame',
      () => canvasElement.querySelector('.bar-chart-race__frame')?.textContent?.trim(),
      async () => userEvent.selectOptions(addExclusion, '2018'),
      (before, after) => before === '2018' && after === '2019'
    )
    await performAndAssert(
      'Remove the final exclusion without corrupting its config',
      () => ({
        addExclusionVisible: Boolean(getAddExclusion()),
        frame: canvasElement.querySelector('.bar-chart-race__frame')?.textContent?.trim(),
        removeButtonVisible: Boolean(canvasElement.querySelector('.series-list__remove'))
      }),
      async () => userEvent.click(canvasElement.querySelector('.series-list__remove') as HTMLButtonElement),
      (before, after) =>
        before.frame === '2019' &&
        before.removeButtonVisible &&
        after.frame === '2018' &&
        !after.removeButtonVisible &&
        after.addExclusionVisible
    )
    expect(exclusionsToggle).toBeChecked()
  }
}

export const UnsupportedPanelsTests: Story = {
  name: 'Editor: Race Unsupported Panels',
  args: {
    config: {
      ...annualChangeConfig,
      filters: [
        {
          active: '2018',
          columnName: 'Year',
          filterStyle: 'dropdown',
          values: ['2018', '2019', '2020', '2021', '2022', '2023', '2024']
        }
      ]
    } as any,
    isEditor: true,
    interactionLabel: 'Bar race unsupported panels story'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)

    expect(canvasElement.querySelector('.bar-chart-race')).toBeInTheDocument()
    expect(canvasElement.querySelectorAll('.bar-chart-race__frame-axis-tick')).toHaveLength(7)
    for (const name of ['Regions', 'Legend', 'Filters', 'PatternSettings', 'Text Annotations']) {
      expect(canvas.queryByRole('button', { name })).not.toBeInTheDocument()
    }
  }
}

export const VisualSectionTests: Story = {
  name: 'Editor: Race Visual Section',
  args: {
    config: annualChangeConfig as any,
    isEditor: true,
    interactionLabel: 'Bar race visual section story'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, '^Visual$')

    expect(canvas.queryByLabelText('Bar Borders')).not.toBeInTheDocument()
  }
}

export const IneligibleGeneralSectionTests: Story = {
  name: 'Editor: Ineligible General Section',
  parameters: { test: { timeout: 30000 } },
  beforeEach: () => {
    const originalUrl = window.location.href
    const originalState = window.history.state
    const developerUrl = new URL(originalUrl)
    developerUrl.searchParams.set('isCoveDeveloper', 'true')
    window.history.replaceState(originalState, '', developerUrl)

    return () => window.history.replaceState(originalState, '', originalUrl)
  },
  args: {
    config: {
      ...annualChangeConfig,
      visualizationSubType: 'regular',
      orientation: 'horizontal',
      barStyle: 'rounded',
      series: annualChangeConfig.series.slice(0, 1)
    } as any,
    isEditor: true,
    interactionLabel: 'Ineligible bar race editor story'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'General')

    const subtype = canvas.getByLabelText(/chart subtype/i) as HTMLSelectElement
    await performAndAssert(
      'Keep ineligible racing mode selected with the regular Bar fallback',
      () => {
        const fallbackBars = Array.from(canvasElement.querySelectorAll('svg .horizontal path[id^="barGroup"]'))
        return {
          fallbackRendered: Boolean(canvasElement.querySelector('svg .horizontal')),
          flatBarsRendered:
            fallbackBars.length > 0 && fallbackBars.every(path => !path.getAttribute('d')?.includes('Q')),
          guidanceInPreviewAlerts: Boolean(
            Array.from(canvasElement.querySelectorAll('.chart-required-fields-alerts .alert-info')).find(alert =>
              /requires at least two ordinary data series/i.test(alert.textContent || '')
            )
          ),
          guidanceInEditorPanel: /requires at least two ordinary data series/i.test(
            canvasElement.querySelector('.editor-panel')?.textContent || ''
          ),
          lollipopRendered: Boolean(canvasElement.querySelector('svg .horizontal circle[data-tooltip-html]')),
          raceRendered: Boolean(canvasElement.querySelector('.bar-chart-race')),
          subtype: (canvas.getByLabelText(/chart subtype/i) as HTMLSelectElement).value
        }
      },
      async () => userEvent.selectOptions(subtype, 'racing'),
      (_before, after) =>
        after.subtype === 'racing' &&
        after.guidanceInPreviewAlerts &&
        !after.guidanceInEditorPanel &&
        after.fallbackRendered &&
        after.flatBarsRendered &&
        !after.lollipopRendered &&
        !after.raceRendered
    )

    await performAndAssert(
      'Exit an ineligible race through the same subtype control',
      () => ({
        fallbackRendered: Boolean(canvasElement.querySelector('svg .horizontal')),
        guidanceInPreviewAlerts: Boolean(
          Array.from(canvasElement.querySelectorAll('.chart-required-fields-alerts .alert-info')).find(alert =>
            /requires at least two ordinary data series/i.test(alert.textContent || '')
          )
        ),
        subtype: (canvas.getByLabelText(/chart subtype/i) as HTMLSelectElement).value
      }),
      async () => userEvent.selectOptions(canvas.getByLabelText(/chart subtype/i), 'regular'),
      (before, after) =>
        before.subtype === 'racing' &&
        before.guidanceInPreviewAlerts &&
        after.subtype === 'regular' &&
        !after.guidanceInPreviewAlerts &&
        after.fallbackRendered
    )
  }
}
