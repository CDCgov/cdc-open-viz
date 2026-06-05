import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import ConfigContext, { EditorDispatchContext } from '@cdc/core/contexts/EditorContext'
import ChooseTab from './ChooseTab'

describe('ChooseTab', () => {
  it('dispatches EDITOR_SAVE once when tempConfig is present', async () => {
    const dispatch = vi.fn()
    const tempConfig = { type: 'chart', data: [{ x: 'A', y: 1 }] }

    render(
      <ConfigContext.Provider
        value={
          {
            config: { type: 'chart' },
            tempConfig,
            errors: [],
            currentViewport: 'lg',
            globalActive: 0,
            setTempConfig: vi.fn()
          } as any
        }
      >
        <EditorDispatchContext.Provider value={dispatch}>
          <ChooseTab />
        </EditorDispatchContext.Provider>
      </ConfigContext.Provider>
    )

    await waitFor(() => {
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({ type: 'EDITOR_SAVE', payload: tempConfig })
    })
  })

  it('creates a HeatMap starter config when the HeatMap button is selected', () => {
    const dispatch = vi.fn()

    render(
      <ConfigContext.Provider
        value={
          {
            config: { type: 'chart' },
            tempConfig: null,
            errors: [],
            currentViewport: 'lg',
            globalActive: 0,
            setTempConfig: vi.fn()
          } as any
        }
      >
        <EditorDispatchContext.Provider value={dispatch}>
          <ChooseTab />
        </EditorDispatchContext.Provider>
      </ConfigContext.Provider>
    )

    expect(
      screen.getByRole('button', { name: 'HeatMap' }).querySelector('.choose-vis__heatmap-icon')
    ).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'HeatMap' }))

    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'EDITOR_SET_CONFIG',
        payload: expect.objectContaining({
          visualizationType: 'HeatMap',
          type: 'chart',
          xAxis: expect.objectContaining({
            type: 'categorical'
          }),
          yAxis: expect.objectContaining({
            titlePlacement: 'side'
          }),
          heatmap: expect.objectContaining({
            cellPadding: 2
          }),
          legend: expect.objectContaining({
            position: 'top',
            style: 'gradient'
          })
        })
      })
    )

    const payload = dispatch.mock.calls.find(([action]) => action.type === 'EDITOR_SET_CONFIG')![0].payload
    expect(payload.title).toBeUndefined()
    expect(payload.xAxis.dataKey).toBeUndefined()
    expect(payload.yAxis.label).toBeUndefined()
    expect(payload.series).toBeUndefined()
  })
})
