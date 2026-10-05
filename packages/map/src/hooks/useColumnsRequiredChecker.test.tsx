import { renderHook } from '@testing-library/react'
import { type ReactNode } from 'react'
import { describe, expect, it, vi } from 'vitest'
import ConfigContext, { MapDispatchContext } from '../context'
import useColumnsRequiredChecker from './useColumnsRequiredChecker'

const createConfig = (type: string) => ({
  general: { type },
  columns: {
    geo: { name: '' },
    primary: { name: '' },
    navigate: { name: '' },
    latitude: { name: '' },
    longitude: { name: '' }
  },
  bubble: { layers: [] }
})

const createWrapper = (type: string, dispatch: ReturnType<typeof vi.fn>) =>
  function Wrapper({ children }: { children: ReactNode }) {
    return (
      <ConfigContext.Provider value={{ config: createConfig(type) } as any}>
        <MapDispatchContext.Provider value={dispatch}>{children}</MapDispatchContext.Provider>
      </ConfigContext.Provider>
    )
  }

const checkRequiredColumns = (type: string) => {
  const dispatch = vi.fn()
  const { result } = renderHook(() => useColumnsRequiredChecker(), {
    wrapper: createWrapper(type, dispatch)
  })

  result.current.columnsRequiredChecker()
  return dispatch
}

describe('useColumnsRequiredChecker', () => {
  it('preserves Geography and Navigation requirements for Navigation maps', () => {
    expect(checkRequiredColumns('navigation')).toHaveBeenCalledWith({
      type: 'SET_REQUIRED_COLUMNS',
      payload: ['Geography', 'Navigation']
    })
  })

  it.each(['us-geocode', 'world-geocode'])('preserves all legacy requirements for %s maps', type => {
    expect(checkRequiredColumns(type)).toHaveBeenCalledWith({
      type: 'SET_REQUIRED_COLUMNS',
      payload: ['Geography', 'Latitude', 'Longitude']
    })
  })

  it.each(['data', 'map'])('leaves %s maps to the structured alert checker', type => {
    expect(checkRequiredColumns(type)).toHaveBeenCalledWith({
      type: 'SET_REQUIRED_COLUMNS',
      payload: null
    })
  })
})
