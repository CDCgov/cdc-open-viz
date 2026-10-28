import React from 'react'
import { render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import CdcMap from '../CdcMap'
import initialState from '../data/initial-state'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'

const mapRender = vi.hoisted(() => ({ onRender: undefined as undefined | ((config: any) => void) }))

vi.hoisted(() => {
  Object.defineProperty((globalThis as any).HTMLCanvasElement.prototype, 'getContext', {
    configurable: true,
    value: () => ({ measureText: () => ({ width: 0 }) })
  })
})

vi.mock('@cdc/core/helpers/fetchRemoteData', () => ({ default: vi.fn() }))
vi.mock('../CdcMapComponent', () => ({
  default: ({ config }) => {
    if (config.data?.length) {
      mapRender.onRender?.(config)
      mapRender.onRender = undefined
    }
    return null
  }
}))

describe('CdcMap remote Vega data', () => {
  it('processes the fetched data before rendering an imported map', async () => {
    const mapWithData = new Promise<any>(resolve => {
      mapRender.onRender = resolve
    })
    vi.mocked(fetchRemoteData).mockResolvedValue({
      data: { source: [{ STATE: 'Alabama', Rate: 42 }] } as any,
      dataMetadata: {}
    })

    render(
      <CdcMap
        config={
          {
            ...initialState,
            dataUrl: '/vega-map-data.json',
            columns: {
              ...initialState.columns,
              geo: { ...initialState.columns.geo, name: 'STATE' },
              primary: { ...initialState.columns.primary, name: 'Rate' }
            },
            vegaConfig: {
              data: [{ name: 'source', values: [{ STATE: 'Stale', Rate: 1 }] }],
              marks: [{ type: 'rect', from: { data: 'source' } }],
              scales: []
            }
          } as any
        }
        navigationHandler={vi.fn()}
        setConfig={vi.fn()}
      />
    )

    expect((await mapWithData).data[0]).toMatchObject({ STATE: 'Alabama', Rate: 42 })
  })
})
