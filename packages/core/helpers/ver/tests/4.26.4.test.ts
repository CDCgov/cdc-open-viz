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

  it('should set markup-include contentEditor.style to default when missing', () => {
    const config: any = {
      type: 'markup-include',
      version: '4.26.3',
      contentEditor: {
        title: 'Title'
      }
    }

    const result = update_4_26_4(config)

    expect(result.contentEditor.style).toBe('default')
    expect(result.version).toBe('4.26.4')
  })

  it('does not overwrite existing markup-include contentEditor.style', () => {
    const config: any = {
      type: 'markup-include',
      version: '4.26.3',
      contentEditor: {
        title: 'Title',
        style: 'tp5'
      }
    }

    const result = update_4_26_4(config)

    expect(result.contentEditor.style).toBe('tp5')
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
        },
        markup1: {
          type: 'markup-include',
          contentEditor: {
            title: 'Markup 1'
          }
        },
        markup2: {
          type: 'markup-include',
          contentEditor: {
            title: 'Markup 2',
            style: 'tp5'
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
    expect(result.visualizations.markup1.contentEditor.style).toBe('default')
    expect(result.visualizations.markup2.contentEditor.style).toBe('tp5')
  })

  it('creates contentEditor object when missing on markup-include', () => {
    const config: any = {
      type: 'markup-include',
      version: '4.26.3'
    }

    const result = update_4_26_4(config)

    expect(result.contentEditor).toBeTruthy()
    expect(result.contentEditor.style).toBe('default')
  })

  it('does not mutate original chart config', () => {
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

  it('does not mutate original markup-include config', () => {
    const config: any = {
      type: 'markup-include',
      version: '4.26.3',
      contentEditor: {
        title: 'Title'
      }
    }

    const result = update_4_26_4(config)

    expect(config.contentEditor.style).toBeUndefined()
    expect(result.contentEditor.style).toBe('default')
  })

  it('overrides waffle mode configs with new value descriptor defaults', () => {
    const config: any = {
      type: 'waffle-chart',
      visualizationType: 'Waffle',
      valueDescription: 'out of',
      showPercent: false,
      showDenominator: true
    }

    const result = update_4_26_4(config)

    expect(result.valueDescription).toBe('')
    expect(result.showPercent).toBe(true)
    expect(result.showDenominator).toBe(false)
    expect(result.version).toBe('4.26.4')
  })

  it('does not modify gauge mode waffle-chart configs', () => {
    const config: any = {
      type: 'waffle-chart',
      visualizationType: 'Gauge',
      valueDescription: 'out of',
      showPercent: false,
      showDenominator: true
    }

    const result = update_4_26_4(config)

    expect(result.valueDescription).toBe('out of')
    expect(result.showPercent).toBe(false)
    expect(result.showDenominator).toBe(true)
  })

  it('updates waffle visualizations but not gauge visualizations in mixed dashboards', () => {
    const config: any = {
      type: 'dashboard',
      visualizations: {
        waffle: {
          type: 'waffle-chart',
          visualizationType: 'Waffle',
          valueDescription: 'legacy',
          showPercent: false,
          showDenominator: true
        },
        gauge: {
          type: 'waffle-chart',
          visualizationType: 'TP5 Gauge',
          valueDescription: 'keep',
          showPercent: false,
          showDenominator: true
        }
      }
    }

    const result = update_4_26_4(config)

    expect(result.visualizations.waffle.valueDescription).toBe('')
    expect(result.visualizations.waffle.showPercent).toBe(true)
    expect(result.visualizations.waffle.showDenominator).toBe(false)

    expect(result.visualizations.gauge.valueDescription).toBe('keep')
    expect(result.visualizations.gauge.showPercent).toBe(false)
    expect(result.visualizations.gauge.showDenominator).toBe(true)
  })

  it('leaves configs with missing or unexpected visualizationType unchanged', () => {
    const missingTypeConfig: any = {
      type: 'waffle-chart',
      valueDescription: 'legacy',
      showPercent: false,
      showDenominator: true
    }

    const unexpectedTypeConfig: any = {
      type: 'waffle-chart',
      visualizationType: 'Unknown Mode',
      valueDescription: 'legacy',
      showPercent: false,
      showDenominator: true
    }

    const missingTypeResult = update_4_26_4(missingTypeConfig)
    const unexpectedTypeResult = update_4_26_4(unexpectedTypeConfig)

    expect(missingTypeResult.valueDescription).toBe('legacy')
    expect(missingTypeResult.showPercent).toBe(false)
    expect(missingTypeResult.showDenominator).toBe(true)

    expect(unexpectedTypeResult.valueDescription).toBe('legacy')
    expect(unexpectedTypeResult.showPercent).toBe(false)
    expect(unexpectedTypeResult.showDenominator).toBe(true)
  })

  it('recursively updates nested dashboard visualizations', () => {
    const config: any = {
      type: 'dashboard',
      visualizations: {
        nestedDashboard: {
          type: 'dashboard',
          visualizations: {
            nestedWaffle: {
              type: 'waffle-chart',
              visualizationType: 'TP5 Waffle',
              valueDescription: 'legacy',
              showPercent: false,
              showDenominator: true
            }
          }
        }
      }
    }

    const result = update_4_26_4(config)

    expect(result.visualizations.nestedDashboard.visualizations.nestedWaffle.valueDescription).toBe('')
    expect(result.visualizations.nestedDashboard.visualizations.nestedWaffle.showPercent).toBe(true)
    expect(result.visualizations.nestedDashboard.visualizations.nestedWaffle.showDenominator).toBe(false)
  })
})
