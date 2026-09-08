import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import CdcMap from '../CdcMap'
import EqualNumberMap from './_mock/equal-number.json'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import { assertVisualizationRendered, performAndAssert, waitForPresence } from '@cdc/core/helpers/testing'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Legend Compatibility',
  component: CdcMap,
  parameters: {
    layout: 'fullscreen'
  }
}

type Story = StoryObj<typeof CdcMap>

export default meta

type ComparisonRow = {
  STATE: string
  Rate: number | string
  Location: string
  URL: string
}

const comparisonData: ComparisonRow[] = [
  { STATE: 'AL', Rate: 10, Location: 'Alabama', URL: 'https://www.cdc.gov/' },
  { STATE: 'AK', Rate: 20, Location: 'Alaska', URL: 'https://www.cdc.gov/' },
  { STATE: 'AZ', Rate: 20, Location: 'Arizona', URL: 'https://www.cdc.gov/' },
  { STATE: 'AR', Rate: 30, Location: 'Arkansas', URL: 'https://www.cdc.gov/' },
  { STATE: 'CA', Rate: 30, Location: 'California', URL: 'https://www.cdc.gov/' },
  { STATE: 'CO', Rate: 40, Location: 'Colorado', URL: 'https://www.cdc.gov/' }
]

const zeroComparisonData: ComparisonRow[] = [
  { STATE: 'AL', Rate: 0, Location: 'Alabama', URL: 'https://www.cdc.gov/' },
  { STATE: 'AK', Rate: 10, Location: 'Alaska', URL: 'https://www.cdc.gov/' },
  { STATE: 'AZ', Rate: 20, Location: 'Arizona', URL: 'https://www.cdc.gov/' },
  { STATE: 'AR', Rate: 20, Location: 'Arkansas', URL: 'https://www.cdc.gov/' },
  { STATE: 'CA', Rate: 30, Location: 'California', URL: 'https://www.cdc.gov/' },
  { STATE: 'CO', Rate: 30, Location: 'Colorado', URL: 'https://www.cdc.gov/' },
  { STATE: 'CT', Rate: 40, Location: 'Connecticut', URL: 'https://www.cdc.gov/' }
]

const percentageComparisonData = comparisonData.map(row => ({ ...row, Rate: `${row.Rate}%` }))
const percentageZeroComparisonData = percentageComparisonData.map((row, index) =>
  index === 0 ? { ...row, Rate: '0%' } : row
)

const baseUpdates = [
  { path: ['general', 'showTitle'], value: true },
  { path: ['general', 'showSidebar'], value: true },
  { path: ['legend', 'type'], value: 'equalnumber' },
  { path: ['legend', 'numberOfItems'], value: 3 },
  { path: ['legend', 'position'], value: 'side' },
  { path: ['legend', 'style'], value: 'circles' },
  { path: ['legend', 'singleColumn'], value: true },
  { path: ['legend', 'hideBorder'], value: false },
  { path: ['columns', 'primary', 'roundToPlace'], value: 0 },
  { path: ['columns', 'primary', 'suffix'], value: '' },
  { path: ['data'], value: comparisonData }
]

const makeMapConfig = ({
  equalNumberOptIn,
  title,
  legendType = 'equalnumber',
  separateZero = false,
  version = '4.25.8',
  data = comparisonData
}: {
  equalNumberOptIn: boolean
  title: string
  legendType?: string
  separateZero?: boolean
  version?: string
  data?: ComparisonRow[]
}) =>
  editConfigKeys(EqualNumberMap, [
    ...baseUpdates,
    { path: ['version'], value: version },
    { path: ['general', 'title'], value: title },
    { path: ['general', 'equalNumberOptIn'], value: equalNumberOptIn },
    { path: ['legend', 'type'], value: legendType },
    { path: ['legend', 'separateZero'], value: separateZero },
    { path: ['data'], value: data }
  ])

const falseFlagConfig = () =>
  makeMapConfig({ equalNumberOptIn: false, title: 'Legacy equal-number legend with false compatibility flag' })
const trueFlagConfig = () =>
  makeMapConfig({ equalNumberOptIn: true, title: 'Current equal-number legend with true compatibility flag' })
const percentageConfig = () =>
  makeMapConfig({
    equalNumberOptIn: true,
    title: 'Percentage-decorated equal-number legend',
    data: percentageComparisonData
  })
const percentageZeroConfig = () =>
  editConfigKeys(
    makeMapConfig({
      equalNumberOptIn: true,
      title: 'Percentage-decorated separate-zero legend',
      separateZero: true,
      data: percentageZeroComparisonData
    }),
    [
      { path: ['legend', 'style'], value: 'gradient' },
      { path: ['legend', 'subStyle'], value: 'smooth' },
      { path: ['legend', 'position'], value: 'top' }
    ]
  )
const percentageManualConfig = () =>
  editConfigKeys(
    makeMapConfig({
      equalNumberOptIn: true,
      title: 'Percentage-decorated manual legend',
      legendType: 'manual',
      data: percentageComparisonData
    }),
    [{ path: ['legend', 'breakpoints'], value: [20, 30] }]
  )
const legacyEqualIntervalConfig = () =>
  makeMapConfig({
    equalNumberOptIn: true,
    title: 'Legacy equal-interval legend from old config',
    legendType: 'equalinterval',
    separateZero: true,
    version: '4.25.7',
    data: zeroComparisonData
  })
const currentEqualIntervalConfig = () =>
  makeMapConfig({
    equalNumberOptIn: true,
    title: 'Current equal-interval legend from new config',
    legendType: 'equalinterval',
    separateZero: true,
    version: '4.25.8',
    data: zeroComparisonData
  })
const legacyLegendLabels = ['10 - 20', '20 - 30', '30 - 40']
const currentLegendLabels = ['10 - 20', '20.1 - 30', '30.1 - 40']
const percentageLegendLabels = ['10% - 20%', '20.1% - 30%', '30.1% - 40%']
const percentageManualLegendLabels = ['10% - 19%', '20% - 29%', '30% - 40%']
const hasSeparatedZeroLabel = (labels: string[]) => labels.some(label => label === '0')

const getLegendLabels = (canvasElement: HTMLElement) =>
  Array.from(canvasElement.querySelectorAll('.legend-container__li-btn'))
    .map(item => item.textContent?.replace(/\s+/g, ' ').trim() || '')
    .filter(Boolean)

const expectLegendLabels = async (canvasElement: HTMLElement, expectedLabels: string[]) => {
  await assertVisualizationRendered(canvasElement)
  await waitForPresence('aside[aria-label="Legend"]', canvasElement)
  await waitForPresence('.legend-container__li-btn', canvasElement)
  await performAndAssert(
    'Legend labels settle',
    () => getLegendLabels(canvasElement),
    () => undefined,
    (_before, after) => JSON.stringify(after) === JSON.stringify(expectedLabels),
    after => expect(after).toEqual(expectedLabels)
  )
}

export const FalseFlagEqualNumberLegend: Story = {
  args: {
    config: falseFlagConfig(),
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await expectLegendLabels(canvasElement, legacyLegendLabels)
  }
}

export const TrueFlagEqualNumberLegend: Story = {
  args: {
    config: trueFlagConfig(),
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await expectLegendLabels(canvasElement, currentLegendLabels)
  }
}

export const PercentageDecoratedEqualNumberLegend: Story = {
  args: {
    config: percentageConfig(),
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await expectLegendLabels(canvasElement, percentageLegendLabels)
    await waitForPresence('g.geo-group[data-tooltip-html]', canvasElement)

    const tooltipHtml = Array.from(canvasElement.querySelectorAll('g.geo-group[data-tooltip-html]'))
      .map(group => group.getAttribute('data-tooltip-html') || '')
      .join(' ')

    expect(tooltipHtml).toContain('Rate: 10%')
  }
}

export const PercentageDecoratedSeparateZeroLegend: Story = {
  args: {
    config: percentageZeroConfig(),
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    const legend = await waitForPresence('aside[aria-label="Legend"]', canvasElement)
    await waitForPresence('.legend-gradient__zero-block', canvasElement)

    const tickLabels = Array.from(legend.querySelectorAll('text')).map(label => label.textContent?.trim())
    expect(tickLabels).toEqual(['0%', '1% - 30%', '30.1% - 40%'])
  }
}

export const PercentageDecoratedManualLegend: Story = {
  args: {
    config: percentageManualConfig(),
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await expectLegendLabels(canvasElement, percentageManualLegendLabels)
  }
}

export const CompatibilityFlagComparison: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.5rem',
        padding: '1rem'
      }}
    >
      <section aria-label='False flag equal-number map'>
        <CdcMap config={falseFlagConfig()} isEditor={false} />
      </section>
      <section aria-label='True flag equal-number map'>
        <CdcMap config={trueFlagConfig()} isEditor={false} />
      </section>
    </div>
  ),
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('[aria-label="False flag equal-number map"] .legend-container__li-btn', canvasElement)
    await waitForPresence('[aria-label="True flag equal-number map"] .legend-container__li-btn', canvasElement)

    await performAndAssert(
      'Equal-number labels preserve legacy and current behavior',
      () => {
        const falseFlagRoot = canvasElement.querySelector('[aria-label="False flag equal-number map"]') as HTMLElement
        const trueFlagRoot = canvasElement.querySelector('[aria-label="True flag equal-number map"]') as HTMLElement

        return {
          falseFlagLabels: getLegendLabels(falseFlagRoot),
          trueFlagLabels: getLegendLabels(trueFlagRoot)
        }
      },
      () => undefined,
      (_before, after) =>
        JSON.stringify(after.falseFlagLabels) === JSON.stringify(legacyLegendLabels) &&
        JSON.stringify(after.trueFlagLabels) === JSON.stringify(currentLegendLabels),
      after => {
        expect(after.falseFlagLabels).toEqual(legacyLegendLabels)
        expect(after.trueFlagLabels).toEqual(currentLegendLabels)
        expect(after.falseFlagLabels).not.toEqual(after.trueFlagLabels)
      }
    )
  }
}

export const EqualIntervalLegacyVsCurrentComparison: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.5rem',
        padding: '1rem'
      }}
    >
      <section aria-label='Legacy equal-interval map'>
        <CdcMap config={legacyEqualIntervalConfig()} isEditor={false} />
      </section>
      <section aria-label='Current equal-interval map'>
        <CdcMap config={currentEqualIntervalConfig()} isEditor={false} />
      </section>
    </div>
  ),
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('[aria-label="Legacy equal-interval map"] .legend-container__li-btn', canvasElement)
    await waitForPresence('[aria-label="Current equal-interval map"] .legend-container__li-btn', canvasElement)

    await performAndAssert(
      'Equal-interval zero handling preserves legacy and current behavior',
      () => {
        const legacyRoot = canvasElement.querySelector('[aria-label="Legacy equal-interval map"]') as HTMLElement
        const currentRoot = canvasElement.querySelector('[aria-label="Current equal-interval map"]') as HTMLElement

        return {
          legacyLabels: getLegendLabels(legacyRoot),
          currentLabels: getLegendLabels(currentRoot)
        }
      },
      () => undefined,
      (_before, after) =>
        after.legacyLabels.length > 0 &&
        after.currentLabels.length > 0 &&
        !hasSeparatedZeroLabel(after.legacyLabels) &&
        hasSeparatedZeroLabel(after.currentLabels),
      after => {
        expect(hasSeparatedZeroLabel(after.legacyLabels)).toBe(false)
        expect(hasSeparatedZeroLabel(after.currentLabels)).toBe(true)
      }
    )
  }
}
