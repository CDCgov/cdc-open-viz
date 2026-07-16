import { renderHook } from '@testing-library/react'
import { type ReactNode } from 'react'
import ConfigContext, { MapDispatchContext } from '../context'
import useGeoClickHandler from './useGeoClickHandler'

vi.mock('@cdc/core/helpers/metrics/helpers', () => ({
  publishAnalyticsEvent: vi.fn()
}))

const createConfig = (withBubbleLayer = false) =>
  ({
    uid: 'map-test',
    general: {
      type: 'data',
      navigationTarget: '_blank'
    },
    columns: {
      geo: { name: 'State' },
      latitude: { name: '' },
      longitude: { name: '' },
      navigate: { name: '' },
      primary: { name: 'Rate' }
    },
    bubble: withBubbleLayer
      ? {
          layers: [
            {
              minBubbleSize: 4,
              maxBubbleSize: 28,
              extraBubbleBorder: false,
              showBubbleZeros: false,
              columns: {
                geo: { name: 'State' },
                primary: { name: 'Rate' }
              }
            }
          ]
        }
      : { layers: [] },
    tooltips: {
      appearanceType: 'click'
    }
  } as any)

const createWrapper =
  (config: any, dispatch = vi.fn()) =>
  ({ children }: { children: ReactNode }) =>
    (
      <ConfigContext.Provider
        value={
          {
            config,
            setConfig: vi.fn(),
            setSharedFilter: undefined,
            customNavigationHandler: vi.fn(),
            interactionLabel: 'test-map'
          } as any
        }
      >
        <MapDispatchContext.Provider value={dispatch}>{children}</MapDispatchContext.Provider>
      </ConfigContext.Provider>
    )

describe('useGeoClickHandler', () => {
  it('opens click tooltip modals for non-bubble maps', () => {
    const dispatch = vi.fn()
    const config = createConfig(false)
    const { result } = renderHook(() => useGeoClickHandler(), { wrapper: createWrapper(config, dispatch) })

    result.current.geoClickHandler('Alabama', { State: 'Alabama', Rate: 10 })

    expect(dispatch).toHaveBeenCalledWith({
      type: 'SET_MODAL',
      payload: {
        geoName: 'Alabama',
        keyedData: { State: 'Alabama', Rate: 10 }
      }
    })
  })

  it('does not open click tooltip modals for bubble maps', () => {
    const dispatch = vi.fn()
    const config = createConfig(true)
    const { result } = renderHook(() => useGeoClickHandler(), { wrapper: createWrapper(config, dispatch) })

    result.current.geoClickHandler('Alabama', { State: 'Alabama', Rate: 10 })

    expect(dispatch).not.toHaveBeenCalledWith(expect.objectContaining({ type: 'SET_MODAL' }))
  })
})
