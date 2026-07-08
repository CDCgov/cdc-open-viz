import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import initialState from '../data/initial-state'
import CdcMapComponent from '../CdcMapComponent'
import { DISABLED_MAP_COLOR } from '../helpers/constants'

vi.mock('../hooks/useResizeObserver', () => ({
  default: () => ({
    currentViewport: 'lg',
    vizViewport: 'lg',
    dimensions: [800, 600],
    container: document.createElement('div'),
    outerContainerRef: () => undefined
  }),
  useResizeObserver: () => ({
    currentViewport: 'lg',
    vizViewport: 'lg',
    dimensions: [800, 600],
    container: document.createElement('div'),
    outerContainerRef: () => undefined
  })
}))

Object.defineProperty((globalThis as any).HTMLCanvasElement.prototype, 'getContext', {
  configurable: true,
  value: () => ({
    measureText: (text = '') => ({ width: String(text).length * 8 })
  })
})

const buildConfig = () => {
  const config = JSON.parse(JSON.stringify(initialState))

  config.type = 'map'
  config.data = [
    { state: 'Alabama', value: 'No' },
    { state: 'Alaska', value: 'Yes' },
    { state: 'Arizona', value: 'No' }
  ]
  config.general.geoType = 'us'
  config.general.type = 'data'
  config.general.showSidebar = true
  config.general.showTitle = false
  config.columns.geo.name = 'state'
  config.columns.primary.name = 'value'
  config.legend.type = 'category'
  config.legend.categoryValuesOrder = ['No', 'Yes']
  config.legend.position = 'side'
  config.legend.style = 'boxes'
  config.table.forceDisplay = false

  return config
}

const renderMap = config => (
  <CdcMapComponent
    config={config}
    interactionLabel='legend-toggle-test'
    navigationHandler={() => undefined}
    setSharedFilter={() => undefined}
    setSharedFilterValue={'' as any}
  />
)

describe('CdcMapComponent legend toggles', () => {
  it('highlights the matching state geographies when No is clicked', async () => {
    const user = userEvent.setup()

    render(renderMap(buildConfig()))

    const noLegendButton = await screen.findByRole('button', { name: 'No' })

    await waitFor(() => {
      expect(document.querySelector('#Alabama')).toBeInTheDocument()
      expect(document.querySelector('#Alaska')).toBeInTheDocument()
      expect(document.querySelector('#Arizona')).toBeInTheDocument()
    })

    const alabamaFill = (document.querySelector('#Alabama') as HTMLElement).style.fill
    const arizonaFill = (document.querySelector('#Arizona') as HTMLElement).style.fill

    await user.click(noLegendButton)

    await waitFor(() => {
      expect((document.querySelector('#Alabama') as HTMLElement).style.fill).toBe(alabamaFill)
      expect((document.querySelector('#Arizona') as HTMLElement).style.fill).toBe(arizonaFill)
      expect((document.querySelector('#Alaska') as HTMLElement).style.fill).toBe(DISABLED_MAP_COLOR)
    })
  })
})
