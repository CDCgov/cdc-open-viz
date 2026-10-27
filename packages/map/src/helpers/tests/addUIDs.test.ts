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

  it.each([
    ['American Samoa', 'US-AS'],
    ['VI', 'US-VI'],
    ['Virgin Islands', 'US-VI'],
    ['CNMI', 'US-MP'],
    ['Micronesia', 'US-FM'],
    ['FM', 'US-FM'],
    ['Palau', 'US-PW'],
    ['RMI', 'US-MH']
  ])('maps territory and freely associated state identifier %s to %s', (geographyName, expectedUid) => {
    const config = createUsConfig(geographyName)

    addUIDs(config, 'State')

    expect(config.data[0].uid).toBe(expectedUid)
  })

  it.each([
    ['NUEVO MÉXICO', 'US-NM'],
    ['nuevo mexico', 'US-NM'],
    ['DISTRITO DE COLUMBIA', 'US-DC'],
    ['ISLAS VÍRGENES DE LOS EE. UU.', 'US-VI']
  ])('maps Spanish geography name %s to %s', (geographyName, expectedUid) => {
    const config = createUsConfig(geographyName)

    addUIDs(config, 'State')

    expect(config.data[0].uid).toBe(expectedUid)
  })
})
