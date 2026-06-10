import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { assertVisualizationRendered, waitForPresence } from '@cdc/core/helpers/testing'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import CdcMap from '../CdcMap'
import worldBubbleDiseaseType from './_mock/world-bubble-disease-type.json'
import usBubble from '../../examples/bubble-us.json'

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

export const Bubble_Size_Legend_Custom_Text: Story = {
  args: {
    config: editConfigKeys(worldBubbleDiseaseType, [
      { path: ['bubble', 'legend', 'size', 'show'], value: true },
      { path: ['bubble', 'legend', 'size', 'title'], value: 'Case Count' },
      {
        path: ['bubble', 'legend', 'size', 'description'],
        value: 'Circle size shows the number of reported cases.'
      }
    ]),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('circle.bubble', canvasElement)
    const sizeLegend = await waitForPresence('ul[aria-label="Bubble size legend items"]', canvasElement)
    expect(canvasElement).toHaveTextContent('Case Count')
    expect(canvasElement).toHaveTextContent('Circle size shows the number of reported cases.')
    expect(sizeLegend).toHaveTextContent('45')
    expect(sizeLegend).toHaveTextContent('390')
    expect(sizeLegend).toHaveTextContent('740')
  }
}

export const Bubble_Size_Legend_Hidden_By_Default: Story = {
  args: {
    config: worldBubbleDiseaseType,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('circle.bubble', canvasElement)
    expect(canvasElement.querySelector('ul[aria-label="Bubble size legend items"]')).not.toBeInTheDocument()
  }
}

export const US_Bubble_Size_Legend: Story = {
  args: {
    config: editConfigKeys(usBubble, [
      { path: ['version'], value: '4.26.7' },
      { path: ['general', 'showSidebar'], value: true },
      { path: ['bubble', 'minBubbleSize'], value: 1 },
      { path: ['bubble', 'maxBubbleSize'], value: 20 },
      { path: ['bubble', 'extraBubbleBorder'], value: false },
      { path: ['bubble', 'showBubbleZeros'], value: false },
      { path: ['bubble', 'columns', 'geo', 'name'], value: 'State' },
      { path: ['bubble', 'columns', 'primary', 'name'], value: 'Cases' },
      { path: ['bubble', 'legend', 'show'], value: true },
      { path: ['bubble', 'legend', 'size', 'show'], value: true },
      { path: ['bubble', 'legend', 'size', 'title'], value: 'Case Count' }
    ]),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('circle.bubble', canvasElement)
    const sizeLegend = await waitForPresence('ul[aria-label="Bubble size legend items"]', canvasElement)
    expect(canvasElement).toHaveTextContent('Case Count')
    expect(sizeLegend).toHaveTextContent('1')
    expect(sizeLegend).toHaveTextContent('10,700')
  }
}
