import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, expect, userEvent } from 'storybook/test'
import CdcMap from '../CdcMap'
import { assertVisualizationRendered, waitForPresence } from '@cdc/core/helpers/testing'
import singleStateConfig from './_mock/DEV-8942.json'
import worldBubbleReset from './_mock/world-bubble-reset.json'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Focus Visibility',
  component: CdcMap,
  parameters: {
    docs: {
      description: {
        component:
          'Regression coverage for map focus treatment so single-state maps suppress pointer-only outlines while keeping keyboard-visible focus.'
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof CdcMap>

export const SingleStateFocusVisibility: Story = {
  args: {
    config: singleStateConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('path.county', canvasElement)

    const mapRegion = canvasElement.querySelector('.map-container[role="region"]') as HTMLElement
    const geographyContainer = canvasElement.querySelector('.geography-container') as HTMLElement
    const countyPath = canvasElement.querySelector('path.county') as SVGPathElement

    expect(mapRegion).toBeTruthy()
    expect(geographyContainer).toBeTruthy()
    expect(countyPath).toBeTruthy()

    await userEvent.click(countyPath)
    expect(geographyContainer.matches(':focus-visible')).toBe(false)
    expect(geographyContainer).not.toHaveFocus()
    expect(mapRegion.matches(':focus-visible')).toBe(false)
    expect(mapRegion).not.toHaveFocus()

    await userEvent.tab()

    const focusedElement = document.activeElement as HTMLElement | null
    expect(focusedElement).toBeTruthy()
    expect(canvasElement.contains(focusedElement)).toBe(true)
    expect(focusedElement?.matches(':focus-visible')).toBe(true)
  }
}

export const WorldBubbleFocusVisibility: Story = {
  args: {
    config: worldBubbleReset,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('circle.bubble.country--France', canvasElement)

    const mapRegion = canvasElement.querySelector('.map-container[role="region"]') as HTMLElement
    const geographyContainer = canvasElement.querySelector('.geography-container') as HTMLElement
    const bubble = canvasElement.querySelector('circle.bubble.country--France') as SVGCircleElement

    expect(mapRegion).toBeTruthy()
    expect(geographyContainer).toBeTruthy()
    expect(bubble).toBeTruthy()

    await userEvent.click(bubble)
    expect(bubble.matches(':focus-visible')).toBe(false)
    expect(bubble).not.toHaveFocus()
    expect(geographyContainer.matches(':focus-visible')).toBe(false)
    expect(mapRegion.matches(':focus-visible')).toBe(false)

    await userEvent.tab()

    const focusedElement = document.activeElement as HTMLElement | null
    expect(focusedElement).toBeTruthy()
    expect(canvasElement.contains(focusedElement)).toBe(true)
    expect(focusedElement?.matches(':focus-visible')).toBe(true)
  }
}
