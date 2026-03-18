import update_4_26_4 from '../4.26.4'
import { describe, expect, it } from 'vitest'

describe('update_4_26_4', () => {
  it('turns off extra visual settings for a standalone chart config', () => {
    const config: any = {
      type: 'chart',
      version: '4.26.3',
      visual: {
        border: true,
        borderColorTheme: true,
        accent: true,
        background: true,
        hideBackgroundColor: true
      }
    }

    const result = update_4_26_4(config)

    expect(result.visual).toEqual({
      border: false,
      borderColorTheme: false,
      accent: false,
      background: false,
      hideBackgroundColor: false
    })
    expect(result.version).toBe('4.26.4')
  })

  it('turns off extra visual settings for chart visualizations inside dashboards only', () => {
    const config: any = {
      type: 'dashboard',
      version: '4.26.3',
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

    const result = update_4_26_4(config)

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

  it('does not mutate the original config', () => {
    const config: any = {
      type: 'chart',
      version: '4.26.3',
      visual: {
        accent: true
      }
    }

    const result = update_4_26_4(config)

    expect(config.visual.accent).toBe(true)
    expect(result.visual.accent).toBe(false)
  })
})
