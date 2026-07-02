import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, waitFor } from 'storybook/test'
import { assertVisualizationRendered, waitForPresence } from '@cdc/core/helpers/testing'
import CdcMap from '../CdcMap'
import bubbleUsLatLong from '../../examples/bubble-us-lat-long.json'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Bubble Location',
  component: CdcMap
}

type Story = StoryObj<typeof CdcMap>

export default meta

export const US_Bubble_Lat_Long_Columns: Story = {
  args: {
    config: bubbleUsLatLong,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('circle.bubble--coordinate', canvasElement)

    await waitFor(() => {
      expect(canvasElement.querySelectorAll('circle.bubble--coordinate[data-tooltip-id]')).toHaveLength(
        bubbleUsLatLong.data.length
      )
    })

    const tooltipHtml = Array.from(canvasElement.querySelectorAll('circle.bubble--coordinate[data-tooltip-html]'))
      .map(element => element.getAttribute('data-tooltip-html') || '')
      .join(' ')

    expect(tooltipHtml).toContain('Seattle')
    expect(tooltipHtml).toContain('823')
  }
}
