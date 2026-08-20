import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import CdcMap from '../CdcMap'
import EqualNumberMap from './_mock/equal-number.json'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import { assertVisualizationRendered, performAndAssert, waitForPresence } from '@cdc/core/helpers/testing'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Equal Number Current Behavior',
  component: CdcMap,
  parameters: {
    layout: 'fullscreen'
  }
}

type Story = StoryObj<typeof CdcMap>

export default meta

const comparisonData = [
  { STATE: 'AL', Rate: 10, Location: 'Alabama', URL: 'https://www.cdc.gov/' },
  { STATE: 'AK', Rate: 20, Location: 'Alaska', URL: 'https://www.cdc.gov/' },
  { STATE: 'AZ', Rate: 20, Location: 'Arizona', URL: 'https://www.cdc.gov/' },
  { STATE: 'AR', Rate: 30, Location: 'Arkansas', URL: 'https://www.cdc.gov/' },
  { STATE: 'CA', Rate: 30, Location: 'California', URL: 'https://www.cdc.gov/' },
  { STATE: 'CO', Rate: 40, Location: 'Colorado', URL: 'https://www.cdc.gov/' }
]

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

const makeMapConfig = (equalNumberOptIn: boolean, title: string) =>
  editConfigKeys(EqualNumberMap, [
    ...baseUpdates,
    { path: ['general', 'title'], value: title },
    { path: ['general', 'equalNumberOptIn'], value: equalNumberOptIn }
  ])

const falseFlagConfig = () => makeMapConfig(false, 'Equal-number legend with false compatibility flag')
const trueFlagConfig = () => makeMapConfig(true, 'Equal-number legend with true compatibility flag')
const currentLegendLabels = ['0 - 20', '20.1 - 30', '30.1 - 40']

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
    await expectLegendLabels(canvasElement, currentLegendLabels)
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
      'Equal-number labels match regardless of compatibility flag',
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
        JSON.stringify(after.falseFlagLabels) === JSON.stringify(currentLegendLabels) &&
        JSON.stringify(after.trueFlagLabels) === JSON.stringify(currentLegendLabels),
      after => {
        expect(after.falseFlagLabels).toEqual(currentLegendLabels)
        expect(after.trueFlagLabels).toEqual(currentLegendLabels)
        expect(after.falseFlagLabels).toEqual(after.trueFlagLabels)
      }
    )
  }
}
