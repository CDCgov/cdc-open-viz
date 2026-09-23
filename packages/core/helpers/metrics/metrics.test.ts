import { beforeEach, describe, expect, it, vi } from 'vitest'
import { publish } from '../events'
import { publishAnalyticsEvent } from './helpers'
import { getVizTitle } from './utils'

vi.mock('../events', () => ({
  publish: vi.fn()
}))

describe('analytics visualization titles', () => {
  beforeEach(() => {
    vi.mocked(publish).mockClear()
  })

  it.each([undefined, '', '   '])('uses the standard fallback for a dashboard title of %p', title => {
    expect(getVizTitle({ type: 'dashboard', dashboard: { title } })).toBe('No Title')
  })

  it.each([
    undefined,
    {},
    { title: '' },
    { title: '   ' },
    { general: {} },
    { title: '', general: { title: '' } },
    { general: { title: '   ' } }
  ])('uses the standard fallback when a visualization has no usable title: %p', config => {
    expect(getVizTitle(config)).toBe('No Title')
  })

  it('preserves configured title precedence and lowercasing', () => {
    expect(getVizTitle({ type: 'dashboard', dashboard: { title: 'Health Dashboard' } })).toBe('health dashboard')
    expect(getVizTitle({ title: 'Top-Level Title', general: { title: 'General Title' } })).toBe('top-level title')
    expect(getVizTitle({ title: '   ', general: { title: 'General Title' } })).toBe('general title')
    expect(getVizTitle({ general: { title: 'General Title' } })).toBe('general title')
  })

  it.each([undefined, '', '   '])('formats an omitted or empty title as No Title: %p', vizTitle => {
    publishAnalyticsEvent({
      vizType: 'chart',
      vizTitle,
      eventType: 'data_downloaded',
      eventAction: 'click'
    })

    expect(publish).toHaveBeenCalledWith('cove:analytics', {
      formattedEvent: 'cove|chart|No Title|data_downloaded|click|no details',
      eventLabel: undefined
    })
  })

  it('publishes a configured resolved title without changing existing casing behavior', () => {
    publishAnalyticsEvent({
      vizType: 'chart',
      vizTitle: getVizTitle({ title: 'Configured Title' }),
      eventType: 'data_downloaded',
      eventAction: 'click'
    })

    expect(publish).toHaveBeenCalledWith('cove:analytics', {
      formattedEvent: 'cove|chart|configured title|data_downloaded|click|no details',
      eventLabel: undefined
    })
  })
})
