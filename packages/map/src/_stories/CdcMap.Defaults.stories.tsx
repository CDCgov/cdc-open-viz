import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import CdcMap from '../CdcMap'
import EqualNumberMap from './_mock/equal-number.json'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import { assertVisualizationRendered, waitForPresence } from '@cdc/core/helpers/testing'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Defaults',
  component: CdcMap
}

type Story = StoryObj<typeof CdcMap>

const oldConfig = editConfigKeys(EqualNumberMap, [
  { path: ['legend', 'style'], value: 'circles' },
  { path: ['legend', 'position'], value: 'side' },
  { path: ['legend', 'numberOfItems'], value: 3 },
  { path: ['legend', 'hideBorder'], value: false }
])

const newConfig = editConfigKeys(EqualNumberMap, [
  { path: ['legend', 'style'], value: 'gradient' },
  { path: ['legend', 'position'], value: 'top' },
  { path: ['legend', 'numberOfItems'], value: 5 },
  { path: ['legend', 'hideBorder'], value: true }
])

export const OldConfig_Preserves_Legacy_Defaults: Story = {
  args: {
    config: oldConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    await waitForPresence('aside[aria-label="Legend"]', canvasElement)
    await waitForPresence('.legend-container__li', canvasElement)
    const legend = canvasElement.querySelector('aside[aria-label="Legend"]')
    expect(legend).toBeInTheDocument()
    expect(legend?.classList.contains('side')).toBe(true)

    expect(legend?.classList.contains('no-border')).toBe(false)

    const legendContainer = canvasElement.querySelector('.legend-container')
    const legendItems = legendContainer?.querySelectorAll('.legend-container__li')
    expect(legendItems?.length).toBeGreaterThan(0)

    const linearGradient = legendContainer?.querySelector('linearGradient')
    expect(linearGradient).toBeNull()
  }
}

export const NewConfig_Gets_New_Defaults: Story = {
  args: {
    config: newConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    await waitForPresence('aside[aria-label="Legend"]', canvasElement)
    const legend = canvasElement.querySelector('aside[aria-label="Legend"]')
    expect(legend).toBeInTheDocument()
    expect(legend?.classList.contains('top')).toBe(true)

    expect(legend?.classList.contains('no-border')).toBe(true)

    await waitForPresence('linearGradient', canvasElement)
    const legendContainer = canvasElement.querySelector('.legend-container')
    const linearGradient = legendContainer?.querySelector('linearGradient')
    expect(linearGradient).toBeInTheDocument()
  }
}

export default meta
