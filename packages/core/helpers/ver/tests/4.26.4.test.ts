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
})
