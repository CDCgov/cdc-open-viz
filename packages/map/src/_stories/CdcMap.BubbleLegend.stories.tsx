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
      { path: ['bubble', 'layers', 0, 'legend', 'title'], value: 'Disease Type' },
      {
        path: ['bubble', 'layers', 0, 'legend', 'description'],
        value: 'Bubble colors group countries by disease type.'
      }
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
    config: editConfigKeys(worldBubbleDiseaseType, [{ path: ['bubble', 'layers', 0, 'legend', 'show'], value: false }]),
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
      { path: ['bubble', 'layers', 0, 'legend', 'size', 'show'], value: true },
      { path: ['bubble', 'layers', 0, 'legend', 'size', 'title'], value: 'Case Count' },
      {
        path: ['bubble', 'layers', 0, 'legend', 'size', 'description'],
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
      { path: ['bubble', 'layers', 0, 'minBubbleSize'], value: 1 },
      { path: ['bubble', 'layers', 0, 'maxBubbleSize'], value: 20 },
      { path: ['bubble', 'layers', 0, 'extraBubbleBorder'], value: false },
      { path: ['bubble', 'layers', 0, 'showBubbleZeros'], value: false },
      { path: ['bubble', 'layers', 0, 'columns', 'geo', 'name'], value: 'State' },
      { path: ['bubble', 'layers', 0, 'columns', 'primary', 'name'], value: 'Cases' },
      { path: ['bubble', 'layers', 0, 'legend', 'show'], value: true },
      { path: ['bubble', 'layers', 0, 'legend', 'size', 'show'], value: true },
      { path: ['bubble', 'layers', 0, 'legend', 'size', 'title'], value: 'Case Count' }
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

export const US_Bubble_Data_Table_Uses_Layer_Columns: Story = {
  args: {
    config: editConfigKeys(usBubble, [
      { path: ['version'], value: '4.26.7' },
      { path: ['table', 'expanded'], value: true },
      { path: ['table', 'forceDisplay'], value: true },
      { path: ['table', 'download'], value: false }
    ]),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('circle.bubble', canvasElement)
    const dataTable = await waitForPresence('.data-table', canvasElement)
    const headers = Array.from(dataTable.querySelectorAll('thead th')).map(header => header.textContent?.trim())

    expect(headers.join(' ')).toContain('Location')
    expect(headers.join(' ')).toContain('Total Confirmed Cases')
    expect(dataTable).toHaveTextContent('California')
    expect(dataTable).toHaveTextContent('10,700')
  }
}
