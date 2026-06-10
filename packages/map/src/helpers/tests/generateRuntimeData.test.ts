import { describe, expect, it } from 'vitest'
import generateRuntimeData from '../generateRuntimeData'

describe('generateRuntimeData', () => {
  it('keeps separate rows for latitude/longitude bubble layers with duplicate labels', () => {
    const config: any = {
      columns: {
        geo: { name: '' },
        primary: { name: '' },
        latitude: { name: '' },
        longitude: { name: '' },
        navigate: { name: '' },
        categorical: { name: '' }
      },
      general: {
        displayAsHex: false,
        geoType: 'us',
        type: 'data'
      },
      legend: {
        type: 'equalnumber'
      },
      bubble: {
        layers: [
          {
            locationSource: 'latitude-longitude',
            minBubbleSize: 1,
            maxBubbleSize: 20,
            extraBubbleBorder: false,
            showBubbleZeros: false,
            columns: {
              geo: { name: 'site' },
              latitude: { name: 'latitude' },
              longitude: { name: 'longitude' },
              primary: { name: 'visits' }
            }
          }
        ]
      },
      data: [
        { site: 'Clinic', latitude: 39.7392, longitude: -104.9903, visits: 10 },
        { site: 'Clinic', latitude: 47.6062, longitude: -122.3321, visits: 20 }
      ]
    }

    const result = generateRuntimeData(config, [], 1, false)

    expect(Object.keys(result)).toEqual(['coordinate-bubble-0-clinic', 'coordinate-bubble-1-clinic'])
  })
})
