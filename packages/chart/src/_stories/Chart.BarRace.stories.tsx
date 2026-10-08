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
      (_before, after) => after.inside > 0 && after.after === 0
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
      xAxis: { ...annualChangeConfig.xAxis, type: 'date' }
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
              /requires a categorical Date\/Category Axis/i.test(alert.textContent || '')
            )
          ),
          guidanceInEditorPanel: /requires a categorical Date\/Category Axis/i.test(
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
            /requires a categorical Date\/Category Axis/i.test(alert.textContent || '')
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
