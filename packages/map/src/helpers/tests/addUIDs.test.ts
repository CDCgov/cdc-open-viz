import { describe, expect, it } from 'vitest'
import { addUIDs } from '../addUIDs'

const buildCountyConfig = (data: Array<Record<string, string | number>>) =>
  ({
    general: {
      displayAsHex: false,
      geoType: 'us-county',
      type: 'data'
    },
    columns: {
      geo: {
        name: 'Location'
      },
      latitude: { name: '' },
      longitude: { name: '' }
    },
    data
  } as any)

describe('addUIDs', () => {
  it('maps freely associated state names to territory-style UIDs for county maps', () => {
    const config = buildCountyConfig([
      { Location: 'Micronesia', Value: 65 },
      { Location: 'Marshall Islands', Value: 49 },
      { Location: 'Palau', Value: 54 }
    ])

    addUIDs(config, 'Location')

    expect(config.data[0].uid).toBe('US-FM')
    expect(config.data[1].uid).toBe('US-MH')
    expect(config.data[2].uid).toBe('US-PW')
  })

  it('preserves standard county FIPS handling alongside territory aliases', () => {
    const config = buildCountyConfig([
      { Location: '01001', Value: 12 },
      { Location: '60010', Value: 52 }
    ])

    addUIDs(config, 'Location')

    expect(config.data[0].uid).toBe('01001')
    expect(config.data[1].uid).toBe('60010')
  })
})
