import { describe, expect, it } from 'vitest'
import { addUIDs } from '../addUIDs'

const createUsConfig = (stateName: string, displayAsHex = false) =>
  ({
    general: {
      displayAsHex,
      geoType: 'us',
      type: 'data'
    },
    columns: {
      geo: {
        name: 'State'
      },
      latitude: {},
      longitude: {}
    },
    data: [{ State: stateName }]
  } as any)

describe('addUIDs', () => {
  it.each(['District of Columbia', 'DISTRICT OF COLUMBIA', 'DC'])(
    'maps %s to the DC geography key through state matching',
    stateName => {
      const config = createUsConfig(stateName)

      addUIDs(config, 'State')

      expect(config.data[0].uid).toBe('US-DC')
    }
  )

  it.each([
    ['Washington D.C.', 'WASHINGTON D.C.'],
    ['Washington DC.', 'WASHINGTON DC.'],
    ['Washington DC', 'WASHINGTON DC']
  ])('keeps %s mapped to its city key', (stateName, expectedUid) => {
    const config = createUsConfig(stateName)

    addUIDs(config, 'State')

    expect(config.data[0].uid).toBe(expectedUid)
  })

  it.each(['Washington D.C.', 'Washington DC.', 'Washington DC'])(
    'maps %s to the DC geography key for hex maps',
    stateName => {
      const config = createUsConfig(stateName, true)

      addUIDs(config, 'State')

      expect(config.data[0].uid).toBe('US-DC')
    }
  )
})
