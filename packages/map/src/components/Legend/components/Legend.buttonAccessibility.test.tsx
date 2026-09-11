import { render, screen } from '@testing-library/react'
import { beforeAll, describe, expect, it, vi } from 'vitest'
import ConfigContext, { MapDispatchContext } from '../../../context'
import Legend from './Legend'

beforeAll(() => {
  Object.defineProperty((globalThis as any).HTMLCanvasElement.prototype, 'getContext', {
    configurable: true,
    value: () => ({
      measureText: (text = '') => ({ width: String(text).length * 8 })
    })
  })
})

const baseRuntimeLegend = {
  disabledAmt: 0,
  items: [{ color: '#075290', label: '10 - 20', rawLabel: '10 - 20', special: false, min: 10, max: 20 }]
}

const baseConfig = {
  type: 'map',
  data: [{ Region: 'North', Rate: '10 - 20', State: 'Alabama' }],
  columns: {
    geo: { name: 'State' },
    primary: { name: 'Rate' }
  },
  general: {
    geoType: 'us',
    type: 'data'
  },
  map: {
    patterns: []
  },
  visual: {
    additionalCityStyles: [],
    cityStyleLabel: ''
  },
  legend: {
    behavior: 'highlight',
    groupBy: '',
    hideBorder: false,
    position: 'right',
    specialClasses: [],
    style: 'boxes',
    type: 'equalnumber',
    unified: false
  }
} as any

const renderLegend = ({ config = baseConfig, runtimeBubbleLegend = [], runtimeLegend = baseRuntimeLegend } = {}) =>
  render(
    <ConfigContext.Provider
      value={
        {
          config,
          currentViewport: 'lg',
          dimensions: [640, 360],
          mapId: 'legend-button-accessibility-test',
          runtimeBubbleLegend,
          runtimeFilters: [],
          runtimeLegend
        } as any
      }
    >
      <MapDispatchContext.Provider value={vi.fn()}>
        <Legend
          bubbleLegendScale={1}
          containerWidthPadding={0}
          currentViewport='lg'
          dimensions={[640, 360]}
          interactionLabel='legend-button-accessibility-test'
          skipId='legend-button-accessibility-test'
        />
      </MapDispatchContext.Provider>
    </ConfigContext.Provider>
  )

describe('legend item buttons', () => {
  it('uses accessible labels without native title tooltips for map legend items', () => {
    renderLegend()

    const button = screen.getByRole('button', { name: 'Legend item 10 - 20 - Click to disable' })

    expect(button).not.toHaveAttribute('title')
  })

  it('uses accessible labels without native title tooltips for grouped legend items', () => {
    renderLegend({ config: { ...baseConfig, legend: { ...baseConfig.legend, groupBy: 'Region' } } })

    const button = screen.getByRole('button', { name: 'Legend item 10 - 20 - Click to disable' })

    expect(button).not.toHaveAttribute('title')
  })

  it('uses accessible labels without native title tooltips for bubble legend items', () => {
    renderLegend({
      config: {
        ...baseConfig,
        bubble: {
          layers: [
            {
              columns: {
                geo: { name: 'State' },
                primary: { name: 'Rate' }
              },
              legend: { show: true, size: { show: false } },
              locationSource: 'data-column',
              maxBubbleSize: 20,
              minBubbleSize: 5,
              showBubbleZeros: true
            }
          ]
        }
      },
      runtimeBubbleLegend: [
        {
          disabledAmt: 0,
          items: [{ color: '#4b8bbe', max: undefined, min: undefined, special: false, value: 'High' }]
        }
      ]
    })

    const button = screen.getByRole('button', { name: 'Bubble legend item High - Click to disable' })

    expect(button).not.toHaveAttribute('title')
  })
})
