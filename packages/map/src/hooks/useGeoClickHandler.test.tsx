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

describe('Data map location link flags', () => {
  it.each([false, true])('direct navigation enabled=%s preserves shared filter actions', enabled => {
    const config = createConfig()
    config.columns.navigate.name = 'URL'
    config.tooltips.appearanceType = 'hover'
    config.locationLinks = { enableMapNavigation: enabled }
    const callback = vi.fn(),
      sharedFilter = vi.fn(),
      dispatch = vi.fn()
    const wrapper = ({ children }) => (
      <ConfigContext.Provider
        value={{ config, customNavigationHandler: callback, setSharedFilter: sharedFilter } as any}
      >
        <MapDispatchContext.Provider value={dispatch}>{children}</MapDispatchContext.Provider>
      </ConfigContext.Provider>
    )
    const { result } = renderHook(useGeoClickHandler, { wrapper })
    const row = { State: 'Alabama', URL: '/al' }
    result.current.geoClickHandler('Alabama', row)
    expect(sharedFilter).toHaveBeenCalledWith('map-test', row)
    expect(callback.mock.calls).toEqual(enabled ? [['/al']] : [])
  })
  it('preserves click modals when direct navigation is disabled', () => {
    const config = createConfig()
    config.columns.navigate.name = 'URL'
    config.locationLinks = { enableMapNavigation: false }
    const dispatch = vi.fn()
    const { result } = renderHook(useGeoClickHandler, { wrapper: createWrapper(config, dispatch) })
    result.current.geoClickHandler('Alabama', { State: 'Alabama', URL: '/al' })
    expect(dispatch).toHaveBeenCalledWith(expect.objectContaining({ type: 'SET_MODAL' }))
  })
  it('preserves Navigation map navigation despite disabled Data-map flags', () => {
    const config = createConfig()
    config.general.type = 'navigation'
    config.tooltips.appearanceType = 'hover'
    config.columns.navigate.name = 'URL'
    config.locationLinks = { enableMapNavigation: false }
    const callback = vi.fn()
    const wrapper = ({ children }) => (
      <ConfigContext.Provider value={{ config, customNavigationHandler: callback } as any}>
        <MapDispatchContext.Provider value={vi.fn()}>{children}</MapDispatchContext.Provider>
      </ConfigContext.Provider>
    )
    const { result } = renderHook(useGeoClickHandler, { wrapper })
    result.current.geoClickHandler('Alabama', { URL: '/al' })
    expect(callback).toHaveBeenCalledWith('/al')
  })
})

describe('direct map target resolution', () => {
  it.each(['_self', '_blank'])('opens relative URLs in %s', target => {
    const config = createConfig()
    config.general.navigationTarget = target
    config.columns.navigate.name = 'URL'
    config.tooltips.appearanceType = 'hover'
    config.locationLinks = { enableMapNavigation: true }
    const open = vi.spyOn(window, 'open').mockImplementation(() => null)
    const wrapper = ({ children }) => (
      <ConfigContext.Provider value={{ config } as any}>
        <MapDispatchContext.Provider value={vi.fn()}>{children}</MapDispatchContext.Provider>
      </ConfigContext.Provider>
    )
    const { result } = renderHook(useGeoClickHandler, { wrapper })
    result.current.geoClickHandler('Alabama', { URL: '/al' })
    expect(open).toHaveBeenCalledWith(`${window.location.origin}/al`, target)
    open.mockRestore()
  })
})
