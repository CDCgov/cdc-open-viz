import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { assertVisualizationRendered, waitForPresence } from '@cdc/core/helpers/testing'
import CdcMap from '../CdcMap'
import usBubble from '../../examples/bubble-us.json'
import worldBubble from '../../examples/bubble-world.json'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Legacy Bubble Maps',
  component: CdcMap
}

type Story = StoryObj<typeof CdcMap>

export default meta

const clone = <T,>(value: T): T => JSON.parse(JSON.stringify(value))

const makeLegacyBubbleTypeConfig = (
  baseConfig: Record<string, any>,
  geoColumnName: string,
  primaryColumnName: string,
  title: string
) => {
  const config = clone(baseConfig)

  config.version = '4.26.6'
  config.color = 'sequential_blue'
  config.general = {
    ...config.general,
    title,
    type: 'bubble',
    showSidebar: true,
    palette: {
      name: 'sequential_blue',
      isReversed: false,
      version: '2.0'
    }
  }
  config.columns = {
    ...config.columns,
    geo: {
      ...(config.columns?.geo ?? {}),
      name: geoColumnName,
      label: config.columns?.geo?.label || 'Location',
      dataTable: true
    },
    primary: {
      ...(config.columns?.primary ?? {}),
      name: primaryColumnName,
      label: config.columns?.primary?.label || primaryColumnName,
      dataTable: true,
      tooltip: true
    }
  }
  config.visual = {
    ...(config.visual ?? {}),
    minBubbleSize: 2,
    maxBubbleSize: 24,
    extraBubbleBorder: true,
    showBubbleZeros: false
  }
  config.bubble = {
    minBubbleSize: 2,
    maxBubbleSize: 24,
    extraBubbleBorder: true,
    showBubbleZeros: false,
    legend: {
      show: true
    },
    columns: {
      geo: { name: geoColumnName },
      primary: { name: primaryColumnName }
    }
  }

  return config
}

const legacyUsBubbleTypeConfig = makeLegacyBubbleTypeConfig(usBubble, 'State', 'Cases', 'Legacy US Bubble Map')

const legacyWorldBubbleTypeConfig = makeLegacyBubbleTypeConfig(
  worldBubble,
  'Country',
  'Cases',
  'Legacy World Bubble Map'
)

const legacyFlatBubbleObjectConfig = (() => {
  const config = makeLegacyBubbleTypeConfig(
    worldBubble,
    'Country',
    'Cases',
    'Legacy World Bubble Map With Flat Bubble Object'
  )

  config.bubble = {
    minBubbleSize: 3,
    maxBubbleSize: 28,
    extraBubbleBorder: false,
    showBubbleZeros: false,
    legend: {
      show: true,
      type: 'category',
      title: 'Legacy Disease Category'
    },
    columns: {
      geo: { name: 'Country' },
      primary: { name: 'Category' },
      size: { name: 'Cases' },
      categorical: { name: 'Category' }
    }
  }

  return config
})()

const assertLegacyBubbleMapRendered = async (canvasElement: HTMLElement) => {
  await assertVisualizationRendered(canvasElement)
  await waitForPresence('.map-container.bubble-layers', canvasElement)
  const bubble = await waitForPresence('circle.bubble[data-tooltip-id]', canvasElement)

  expect(bubble).toBeInTheDocument()
  expect(canvasElement.querySelectorAll('circle.bubble[data-tooltip-id]').length).toBeGreaterThan(0)
}

export const Legacy_US_Bubble_Type: Story = {
  args: {
    config: legacyUsBubbleTypeConfig,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertLegacyBubbleMapRendered(canvasElement)
    expect(canvasElement).toHaveTextContent('Legacy US Bubble Map')
  }
}

export const Legacy_World_Bubble_Type: Story = {
  args: {
    config: legacyWorldBubbleTypeConfig,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertLegacyBubbleMapRendered(canvasElement)
    expect(canvasElement).toHaveTextContent('Legacy World Bubble Map')
  }
}

export const Legacy_World_Flat_Bubble_Object: Story = {
  args: {
    config: legacyFlatBubbleObjectConfig,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertLegacyBubbleMapRendered(canvasElement)
    const bubbleLegend = await waitForPresence('ul[aria-label="Bubble legend items"]', canvasElement)

    expect(canvasElement).toHaveTextContent('Legacy World Bubble Map With Flat Bubble Object')
    expect(canvasElement).toHaveTextContent('Legacy Disease Category')
    expect(bubbleLegend).toHaveTextContent('Has historically reported monkeypox')
  }
}
