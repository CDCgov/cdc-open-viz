import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import CdcMap from '../CdcMap'
import CountyPatterns from './_mock/county-patterns.json'
import { within, expect, userEvent } from 'storybook/test'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Hidden Mount',
  component: CdcMap,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof CdcMap>

const HiddenMountHarness = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div style={{ padding: 24 }}>
      <div style={{ maxWidth: 960, marginBottom: 16 }}>
        <p style={{ marginBottom: 12 }}>
          This story mounts the county map while hidden, mimicking host-page CSS or JS that reveals it later.
        </p>
        <button type='button' onClick={() => setIsVisible(true)}>
          Reveal county map
        </button>
      </div>

      <div
        data-testid='county-hidden-mount-wrapper'
        style={{
          display: isVisible ? 'block' : 'none',
          width: 960
        }}
      >
        <CdcMap config={CountyPatterns} />
      </div>
    </div>
  )
}

export const County_Map_Revealed_After_Hidden_Mount: Story = {
  render: () => <HiddenMountHarness />,
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates the original county-map hidden-mount scenario: the map is mounted while hidden and only shown after host-page interaction.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const revealButton = canvas.getByRole('button', { name: 'Reveal county map' })

    await userEvent.click(revealButton)

    const renderedCanvas = await canvas.findByRole('img', { hidden: true }, { timeout: 10000 })
    expect(renderedCanvas).toBeInTheDocument()

    const mapCanvas = canvasElement.querySelector('canvas') as HTMLCanvasElement | null
    expect(mapCanvas?.width).toBeGreaterThan(0)
    expect(mapCanvas?.height).toBeGreaterThan(0)
  }
}
