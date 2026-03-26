import React from 'react'
import { render, waitFor } from '@testing-library/react'

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
})
