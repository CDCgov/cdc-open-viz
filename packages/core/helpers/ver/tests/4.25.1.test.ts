import { describe, expect, it } from 'vitest'
import update from '../4.25.1'

describe('4.25.1 territory label removal', () => {
  it('removes the obsolete label while preserving other settings and the input', () => {
    const config = { type: 'map', general: { territoriesLabel: 'Territories', geoType: 'us' } }
    const result = update(config)

    expect(result.general).not.toHaveProperty('territoriesLabel')
    expect(result.general.geoType).toBe('us')
    expect(config.general.territoriesLabel).toBe('Territories')
  })

  it('does not materialize an absent general section', () => {
    expect(update({ type: 'map' })).not.toHaveProperty('general')
  })
})
