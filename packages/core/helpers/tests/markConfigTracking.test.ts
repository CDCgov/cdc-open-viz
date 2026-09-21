import { markConfigTracking } from '../markConfigTracking'

describe('markConfigTracking', () => {
  it('marks a tracking field without mutating the config or its tracking object', () => {
    const nestedConfig = { title: 'Example' }
    const tracking = { modernizationDiscarded: true }
    const config = { nestedConfig, tracking }

    const result = markConfigTracking(config, 'modernizationAccepted', true)

    expect(result).toEqual({
      nestedConfig,
      tracking: {
        modernizationAccepted: true,
        modernizationDiscarded: true
      }
    })
    expect(result).not.toBe(config)
    expect(result.tracking).not.toBe(tracking)
    expect(result.nestedConfig).toBe(nestedConfig)
    expect(config.tracking).toEqual({ modernizationDiscarded: true })
  })

  it('creates the tracking object and preserves a false value', () => {
    expect(markConfigTracking({ title: 'Example' }, 'modernizationDiscarded', false)).toEqual({
      title: 'Example',
      tracking: { modernizationDiscarded: false }
    })
  })
})
