import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import CdcMap from '../CdcMap'
import initialState from '../data/initial-state'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'

const renderedConfigs = vi.hoisted(() => [] as any[])

vi.hoisted(() => {
  Object.defineProperty((globalThis as any).HTMLCanvasElement.prototype, 'getContext', {
    configurable: true,
    value: () => ({ measureText: () => ({ width: 0 }) })
  })
})

vi.mock('@cdc/core/helpers/fetchRemoteData', () => ({ default: vi.fn() }))
vi.mock('../CdcMapComponent', () => ({
  default: ({ config }) => {
    renderedConfigs.push(config)
    return null
  }
}))

describe('CdcMap remote Vega data', () => {
  it('processes the fetched data before rendering an imported map', async () => {
    renderedConfigs.length = 0
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

    await waitFor(() => expect(renderedConfigs.at(-1)?.data?.[0]).toMatchObject({ STATE: 'Alabama', Rate: 42 }), {
      timeout: 5000
    })
  })
})
