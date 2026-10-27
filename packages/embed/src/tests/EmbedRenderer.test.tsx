// @vitest-environment jsdom

import React from 'react'
import { act, render } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import EmbedRenderer from '../embed-page/EmbedRenderer'
import { publishAnalyticsEvent } from '@cdc/core/helpers/metrics/helpers'

vi.mock('../shared/useCoveContainer', () => ({
  useCoveContainer: vi.fn()
}))

vi.mock('@cdc/core/helpers/embed', () => ({
  getConfigUrlParam: vi.fn(() => '/configs/example.json')
}))

vi.mock('@cdc/core/helpers/metrics/helpers', () => ({
  publishAnalyticsEvent: vi.fn()
}))

class ResizeObserverMock {
  observe = vi.fn()
  disconnect = vi.fn()
}

const config = {
  type: 'chart',
  title: 'Example Chart',
  visualizationType: 'Bar'
}

const dispatchCoveLoaded = (eventConfig: unknown = config) => {
  document.dispatchEvent(new CustomEvent('cove_loaded', { detail: { config: eventConfig } }))
}

const dispatchSetId = (embedPageUrl?: string) => {
  window.dispatchEvent(
    new MessageEvent('message', {
      data: {
        type: 'cove:setId',
        id: 'cove-1',
        embedPageUrl
      }
    })
  )
}

describe('EmbedRenderer analytics', () => {
  beforeEach(() => {
    vi.stubGlobal('ResizeObserver', ResizeObserverMock)
  })

  afterEach(() => {
    vi.clearAllMocks()
    vi.unstubAllGlobals()
  })

  it('publishes the established embed_loaded payload when load arrives before ID', () => {
    render(<EmbedRenderer />)

    act(() => dispatchCoveLoaded())
    expect(publishAnalyticsEvent).not.toHaveBeenCalled()

    act(() => dispatchSetId('https://www.cdc.gov/embedding-page'))

    expect(publishAnalyticsEvent).toHaveBeenCalledOnce()
    expect(publishAnalyticsEvent).toHaveBeenCalledWith({
      vizType: 'chart',
      vizSubType: 'bar',
      vizTitle: 'example chart',
      eventType: 'embed_loaded',
      eventAction: 'load',
      eventLabel: '/configs/example.json',
      specifics: 'embedPageUrl: https://www.cdc.gov/embedding-page'
    })
  })

  it('publishes embed_loaded when ID arrives before load', () => {
    render(<EmbedRenderer />)

    act(() => dispatchSetId('https://www.cdc.gov/embedding-page'))
    expect(publishAnalyticsEvent).not.toHaveBeenCalled()

    act(() => dispatchCoveLoaded())

    expect(publishAnalyticsEvent).toHaveBeenCalledOnce()
  })

  it('preserves the first metadata and publishes only once for repeated signals', () => {
    render(<EmbedRenderer />)

    act(() => {
      dispatchCoveLoaded()
      dispatchCoveLoaded({ type: 'map', title: 'Child Map', general: { geoType: 'us' } })
      dispatchSetId('https://www.cdc.gov/embedding-page')
      dispatchSetId('https://www.cdc.gov/different-page')
      dispatchCoveLoaded()
    })

    expect(publishAnalyticsEvent).toHaveBeenCalledOnce()
    expect(publishAnalyticsEvent).toHaveBeenCalledWith(
      expect.objectContaining({
        vizType: 'chart',
        specifics: 'embedPageUrl: https://www.cdc.gov/embedding-page'
      })
    )
  })

  it('does not publish without both config and embedding page URL', () => {
    const firstRender = render(<EmbedRenderer />)

    act(() => dispatchCoveLoaded())
    expect(publishAnalyticsEvent).not.toHaveBeenCalled()
    firstRender.unmount()

    render(<EmbedRenderer />)
    act(() => dispatchSetId())

    expect(publishAnalyticsEvent).not.toHaveBeenCalled()
  })

  it('does not replace a missing first config with a later dashboard child config', () => {
    render(<EmbedRenderer />)

    act(() => {
      dispatchCoveLoaded(null)
      dispatchCoveLoaded({ type: 'map', title: 'Child Map', general: { geoType: 'us' } })
      dispatchSetId('https://www.cdc.gov/embedding-page')
    })

    expect(publishAnalyticsEvent).not.toHaveBeenCalled()
  })

  it('marks embed analytics as fired before synchronous lifecycle re-entry', () => {
    vi.mocked(publishAnalyticsEvent).mockImplementationOnce(() => dispatchCoveLoaded())
    render(<EmbedRenderer />)

    act(() => {
      dispatchCoveLoaded()
      dispatchSetId('https://www.cdc.gov/embedding-page')
    })

    expect(publishAnalyticsEvent).toHaveBeenCalledOnce()
  })
})
