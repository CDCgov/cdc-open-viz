import defaults from '../../data/initial-state'
import { createNewMapConfig } from '../createNewMapConfig'

describe('createNewMapConfig', () => {
  it('deeply combines starter settings with current map defaults', () => {
    const starterConfig = {
      type: 'map',
      general: { geoType: 'us', equalNumberOptIn: true },
      filters: []
    }

    const config = createNewMapConfig(starterConfig)

    expect(config).toMatchObject({
      type: 'map',
      general: {
        geoType: 'us',
        equalNumberOptIn: true,
        titleStyle: 'small',
        displayStateLabels: true,
        palette: {
          isReversed: false,
          name: 'sequential_blue',
          version: '2.1'
        }
      },
      legend: {
        position: 'top',
        style: 'gradient',
        showSpecialClassesLast: true
      },
      table: { expanded: false },
      visual: {
        border: false,
        borderColorTheme: false,
        accent: false,
        background: false,
        hideBackgroundColor: false
      }
    })
    expect(config.filters).toEqual([])
    expect(starterConfig).toEqual({
      type: 'map',
      general: { geoType: 'us', equalNumberOptIn: true },
      filters: []
    })
  })

  it('replaces explicitly supplied arrays instead of merging them with defaults', () => {
    const layers = [
      {
        label: 'Custom layer',
        locationSource: 'data-column',
        minBubbleSize: 5,
        maxBubbleSize: 15,
        extraBubbleBorder: false,
        showBubbleZeros: true,
        columns: { geo: { name: 'state' }, primary: { name: 'value' } }
      }
    ]

    const config = createNewMapConfig({ type: 'map', bubble: { layers } })

    expect(config.bubble.layers).toEqual(layers)
    expect(config.bubble.layers).not.toBe(layers)
  })

  it('preserves an explicit palette instead of replacing it with the map default', () => {
    const config = createNewMapConfig({
      type: 'map',
      general: { palette: { name: 'qualitative_bold', isReversed: true, version: '2.1' } }
    })

    expect(config.general.palette).toMatchObject({ name: 'qualitative_bold', isReversed: true, version: '2.1' })
    expect(defaults.general.palette.name).toBe('sequential_blue')
  })
})
