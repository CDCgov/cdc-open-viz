import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, userEvent, expect } from 'storybook/test'
import CdcMap from '../CdcMap'
import usaStateGradientConfig from './_mock/usa-state-gradient.json'
import { performAndAssert, waitForEditor, waitForPresence, openAccordion } from '@cdc/core/helpers/testing'

type Story = StoryObj<typeof CdcMap>

const mapMeta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Editor Tests',
  component: CdcMap,
  parameters: {
    layout: 'fullscreen'
  }
}

export default mapMeta

const DEFAULT_ARGS = {
  isEditor: true,
  config: usaStateGradientConfig
}

export const ZoomControlsTest: Story = {
  args: {
    ...DEFAULT_ARGS
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitForEditor(canvas)
    await waitForPresence('.map-container', canvasElement)
    await openAccordion(canvas, 'Type')

    const getZoomControlsState = () => {
      const zoomControls = canvasElement.querySelector('.zoom-controls')
      const zoomInButton = canvasElement.querySelector('button[aria-label="Zoom In"]')
      const zoomOutButton = canvasElement.querySelector('button[aria-label="Zoom Out"]')
      const mapContainer = canvasElement.querySelector('.map-container')

      return {
        hasZoomControls: Boolean(zoomControls),
        hasZoomInButton: Boolean(zoomInButton),
        hasZoomOutButton: Boolean(zoomOutButton),
        mapClasses: mapContainer ? Array.from(mapContainer.classList) : []
      }
    }

    const worldButton = Array.from(canvasElement.querySelectorAll('.geo-buttons button')).find(button =>
      button.textContent?.trim().toLowerCase().includes('world')
    ) as HTMLButtonElement
    expect(worldButton).toBeTruthy()

    await performAndAssert(
      'World Data Map → Switch geo type to world',
      getZoomControlsState,
      async () => {
        await userEvent.click(worldButton)
      },
      (before, after) => !before.mapClasses.includes('world') && after.mapClasses.includes('world')
    )

    const mapTypeSelect = canvas.getByLabelText(/Map Type/i) as HTMLSelectElement
    await performAndAssert(
      'World Data Map → Switch type to data',
      getZoomControlsState,
      async () => {
        await userEvent.selectOptions(mapTypeSelect, 'data')
      },
      (_before, after) => after.mapClasses.includes('world')
    )

    const allowMapZoomingCheckbox = canvas.getByLabelText(/Allow Map Zooming/i) as HTMLInputElement
    expect(allowMapZoomingCheckbox).toBeTruthy()

    await performAndAssert(
      'World Data Map → Enable map zooming',
      getZoomControlsState,
      async () => {
        await userEvent.click(allowMapZoomingCheckbox)
      },
      (before, after) =>
        before.hasZoomControls && !after.hasZoomControls && !after.hasZoomInButton && !after.hasZoomOutButton
    )
  }
}
