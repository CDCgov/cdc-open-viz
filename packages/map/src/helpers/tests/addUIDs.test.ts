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

const createWorldConfig = (countryNames: string[]) =>
  ({
    general: {
      displayAsHex: false,
      geoType: 'world',
      type: 'data'
    },
    columns: {
      geo: { name: 'Location' },
      latitude: {},
      longitude: {}
    },
    data: countryNames.map(Location => ({ Location }))
  } as any)

describe('addUIDs', () => {
  it('assigns canonical world geography keys to the new country aliases', () => {
    const config = createWorldConfig(['Republic of Chad', 'Democratic Republic of Congo'])

    addUIDs(config, 'Location')

    expect(config.data.map(row => row.uid)).toEqual(['TCD', 'COD'])
  })

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
