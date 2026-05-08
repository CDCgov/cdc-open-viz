import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, userEvent, expect } from 'storybook/test'
import CdcMap from '../CdcMap'
import SingleStateWithFilters from './_mock/DEV-8942.json'
import MultiCountry from './_mock/multi-country.json'
import CountyPatterns from './_mock/county-patterns.json'
import { assertVisualizationRendered, performAndAssert, waitForPresence } from '@cdc/core/helpers/testing'

type Story = StoryObj<typeof CdcMap>

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Zoom',
  component: CdcMap,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta

const readZoomState = (canvasElement: HTMLElement) => {
  const zoomTarget = canvasElement.querySelector('[data-zoom-transform]') as HTMLElement | null

  return {
    transform: zoomTarget?.getAttribute('data-zoom-transform') || '',
    scale: Number(zoomTarget?.getAttribute('data-zoom-scale') || '0')
  }
}

const verifyBasicZoomCycle = async (canvasElement: HTMLElement) => {
  const canvas = within(canvasElement)

  await assertVisualizationRendered(canvasElement)
  await waitForPresence('button[aria-label="Zoom In"]', canvasElement)

  const zoomInButton = canvas.getByLabelText('Zoom In')

  await performAndAssert(
    'Map zooms in',
    () => readZoomState(canvasElement),
    async () => {
      await userEvent.click(zoomInButton)
    },
    (before, after) => before.transform !== after.transform && after.scale > before.scale
  )

  const resetButton = canvas.queryByRole('button', { name: 'Reset Zoom' })

  if (resetButton) {
    await performAndAssert(
      'Map reset returns zoom to default',
      () => readZoomState(canvasElement),
      async () => {
        await userEvent.click(resetButton)
      },
      (before, after) => before.transform !== after.transform && after.scale === 1
    )
  } else {
    expect(readZoomState(canvasElement).scale).toBeGreaterThan(1)
  }
}

export const SingleState: Story = {
  args: {
    config: SingleStateWithFilters
  },
  parameters: {
    docs: {
      description: {
        story: 'Single-state zoom baseline. Use this to confirm local zoom and reset behavior outside dashboards.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    await verifyBasicZoomCycle(canvasElement)
  }
}

export const County: Story = {
  args: {
    config: CountyPatterns
  },
  parameters: {
    docs: {
      description: {
        story:
          'County-map zoom baseline. Useful for checking that pan/zoom controls still behave correctly on county geographies.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    await verifyBasicZoomCycle(canvasElement)
  }
}

export const World: Story = {
  args: {
    config: MultiCountry
  },
  parameters: {
    docs: {
      description: {
        story:
          'World-map zoom baseline. Useful for checking that world-map zoom and reset controls still behave after single-state zoom changes.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    await verifyBasicZoomCycle(canvasElement)
  }
}
