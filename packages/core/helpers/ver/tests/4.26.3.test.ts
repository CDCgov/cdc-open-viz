import update_4_26_3 from '../4.26.3'
import { expect, describe, it } from 'vitest'

describe('update_4_26_3', () => {
  it('should add locale "en-US" to a config without locale', () => {
    const config: any = {
      type: 'chart',
      version: '4.26.2',
      title: 'Test Chart'
    }

    const result = update_4_26_3(config)

    expect(result.locale).toBe('en-US')
    expect(result.version).toBe('4.26.3')
    expect(result.title).toBe('Test Chart')
  })

  it('should not overwrite an existing locale', () => {
    const config: any = {
      type: 'chart',
      version: '4.26.2',
      locale: 'es-MX'
    }

    const result = update_4_26_3(config)

    expect(result.locale).toBe('es-MX')
  })

  it('should add locale to dashboard child visualizations', () => {
    const config: any = {
      type: 'dashboard',
      version: '4.26.2',
      visualizations: {
        chart1: {
          type: 'chart',
          title: 'Chart 1'
        },
        map1: {
          type: 'map',
          title: 'Map 1'
        }
      }
    }

    const result = update_4_26_3(config)

    expect(result.locale).toBe('en-US')
    expect(result.visualizations.chart1.locale).toBe('en-US')
    expect(result.visualizations.map1.locale).toBe('en-US')
    expect(result.version).toBe('4.26.3')
  })

  it('should not overwrite existing locale on dashboard child visualizations', () => {
    const config: any = {
      type: 'dashboard',
      version: '4.26.2',
      locale: 'es-MX',
      visualizations: {
        chart1: {
          type: 'chart',
          locale: 'es-MX'
        }
      }
    }

    const result = update_4_26_3(config)

    expect(result.locale).toBe('es-MX')
    expect(result.visualizations.chart1.locale).toBe('es-MX')
  })

  it('should not mutate the original config', () => {
    const config: any = {
      type: 'chart',
      version: '4.26.2'
    }

    const result = update_4_26_3(config)

    expect(config.locale).toBeUndefined()
    expect(result.locale).toBe('en-US')
  })

  it('turns off extra visual settings for a standalone chart config', () => {
    const config: any = {
      type: 'chart',
      version: '4.26.2',
      visual: {
        border: true,
        borderColorTheme: true,
        accent: true,
        background: true,
        hideBackgroundColor: true
      }
    }

    const result = update_4_26_3(config)

    expect(result.visual).toEqual({
      border: false,
      borderColorTheme: false,
      accent: false,
      background: false,
      hideBackgroundColor: false
    })
  })

  it('turns off extra visual settings for chart visualizations inside dashboards only', () => {
    const config: any = {
      type: 'dashboard',
      version: '4.26.2',
      visualizations: {
        chart1: {
          type: 'chart',
          visual: {
            border: true,
            borderColorTheme: true,
            accent: true,
            background: true,
            hideBackgroundColor: true
          }
        },
        dataBite1: {
          type: 'data-bite',
          visual: {
            borderColorTheme: true,
            accent: true,
            background: true,
            hideBackgroundColor: true
          }
        }
      }
    }

    const result = update_4_26_3(config)

    expect(result.visualizations.chart1.visual).toEqual({
      border: false,
      borderColorTheme: false,
      accent: false,
      background: false,
      hideBackgroundColor: false
    })
    expect(result.visualizations.dataBite1.visual).toEqual({
      borderColorTheme: true,
      accent: true,
      background: true,
      hideBackgroundColor: true
    })
  })

  it('does not mutate the original config visual settings', () => {
    const config: any = {
      type: 'chart',
      version: '4.26.2',
      visual: {
        accent: true
      }
    }

    const result = update_4_26_3(config)

    expect(config.visual.accent).toBe(true)
    expect(result.visual.accent).toBe(false)
  })
})
