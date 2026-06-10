import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { assertVisualizationRendered, waitForPresence } from '@cdc/core/helpers/testing'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import CdcMap from '../CdcMap'
import worldBubbleDiseaseType from './_mock/world-bubble-disease-type.json'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Bubble Legend',
  component: CdcMap
}

type Story = StoryObj<typeof CdcMap>

export default meta

export const Bubble_Legend_Custom_Text: Story = {
  args: {
    config: editConfigKeys(worldBubbleDiseaseType, [
      { path: ['bubble', 'legend', 'title'], value: 'Disease Type' },
      { path: ['bubble', 'legend', 'description'], value: 'Bubble colors group countries by disease type.' }
    ]),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('circle.bubble', canvasElement)
    await waitForPresence('ul[aria-label="Bubble legend items"]', canvasElement)
    expect(canvasElement).toHaveTextContent('Disease Type')
    expect(canvasElement).toHaveTextContent('Bubble colors group countries by disease type.')
  }
}

export const Bubble_Legend_Hidden: Story = {
  args: {
    config: editConfigKeys(worldBubbleDiseaseType, [{ path: ['bubble', 'legend', 'show'], value: false }]),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('circle.bubble', canvasElement)
    expect(canvasElement.querySelector('ul[aria-label="Bubble legend items"]')).not.toBeInTheDocument()
  }
}
