import update_4_25_11 from '../4.25.11'
import { expect, describe, it } from 'vitest'

describe('update_4_25_11 - Theme to HeaderColor Migration', () => {
  it('should migrate chart config.theme to config.general.headerColor', () => {
    const config: any = {
      type: 'chart',
      theme: 'theme-blue',
      version: '4.25.10',
      general: {
        title: 'Chart Title'
      }
    }

    const result = update_4_25_11(config)

    expect(result.general.headerColor).toBe('theme-blue')
    expect(result.theme).toBeUndefined()
    expect(result.version).toBe('4.25.11')
  })

  it('should migrate data-bite config.theme to config.general.headerColor', () => {
    const config: any = {
      type: 'data-bite',
      theme: 'theme-purple',
      version: '4.25.10',
      general: {
        isCompactStyle: false
      }
    }

    const result = update_4_25_11(config)

    expect(result.general.headerColor).toBe('theme-purple')
    expect(result.theme).toBeUndefined()
    expect(result.general.isCompactStyle).toBe(false)
    expect(result.version).toBe('4.25.11')
  })

  it('should migrate waffle-chart config.theme to config.general.headerColor', () => {
    const config: any = {
      type: 'waffle-chart',
      theme: 'theme-green',
      version: '4.25.10'
    }

    const result = update_4_25_11(config)

    expect(result.general.headerColor).toBe('theme-green')
    expect(result.theme).toBeUndefined()
    expect(result.version).toBe('4.25.11')
  })

  it('should migrate filtered-text config.theme to config.general.headerColor', () => {
    const config: any = {
      type: 'filtered-text',
      theme: 'theme-orange',
      version: '4.25.10'
    }

    const result = update_4_25_11(config)

    expect(result.general.headerColor).toBe('theme-orange')
    expect(result.theme).toBeUndefined()
    expect(result.version).toBe('4.25.11')
  })

  it('should not modify map config (map already uses headerColor)', () => {
    const config: any = {
      type: 'map',
      theme: 'theme-blue',
      version: '4.25.10',
      general: {
        headerColor: 'theme-cyan',
        geoType: 'single-state'
      }
    }

    const result = update_4_25_11(config)

    // Map should keep its existing headerColor and theme should remain
    expect(result.general.headerColor).toBe('theme-cyan')
    expect(result.theme).toBe('theme-blue')
    expect(result.version).toBe('4.25.11')
  })

  it('should handle dashboard configs with nested visualizations', () => {
    const config: any = {
      type: 'dashboard',
      version: '4.25.10',
      visualizations: {
        viz1: {
          type: 'chart',
          theme: 'theme-blue',
          general: {
            title: 'Chart 1'
          }
        },
        viz2: {
          type: 'data-bite',
          theme: 'theme-purple',
          general: {
            isCompactStyle: true
          }
        },
        viz3: {
          type: 'waffle-chart',
          theme: 'theme-green'
        },
        viz4: {
          type: 'map',
          theme: 'should-not-migrate',
          general: {
            headerColor: 'theme-cyan'
          }
        }
      }
    }

    const result = update_4_25_11(config)

    // Chart should be migrated
    expect(result.visualizations.viz1.general.headerColor).toBe('theme-blue')
    expect(result.visualizations.viz1.theme).toBeUndefined()

    // Data-bite should be migrated
    expect(result.visualizations.viz2.general.headerColor).toBe('theme-purple')
    expect(result.visualizations.viz2.theme).toBeUndefined()
    expect(result.visualizations.viz2.general.isCompactStyle).toBe(true)

    // Waffle-chart should be migrated
    expect(result.visualizations.viz3.general.headerColor).toBe('theme-green')
    expect(result.visualizations.viz3.theme).toBeUndefined()

    // Map should NOT be migrated (already uses headerColor)
    expect(result.visualizations.viz4.general.headerColor).toBe('theme-cyan')
    expect(result.visualizations.viz4.theme).toBe('should-not-migrate')
  })

  it('should not override existing headerColor if config.theme and headerColor both exist', () => {
    const config: any = {
      type: 'chart',
      theme: 'theme-blue',
      version: '4.25.10',
      general: {
        headerColor: 'theme-purple'
      }
    }

    const result = update_4_25_11(config)

    // Should preserve existing headerColor, not override with theme
    expect(result.general.headerColor).toBe('theme-purple')
    expect(result.theme).toBeUndefined()
  })

  it('should create general object if it does not exist', () => {
    const config: any = {
      type: 'chart',
      theme: 'theme-blue',
      version: '4.25.10'
    }

    const result = update_4_25_11(config)

    expect(result.general).toBeDefined()
    expect(result.general.headerColor).toBe('theme-blue')
    expect(result.theme).toBeUndefined()
  })

  it('should be idempotent - safe to run multiple times', () => {
    const config: any = {
      type: 'chart',
      theme: 'theme-blue',
      version: '4.25.10',
      general: {
        title: 'Chart'
      }
    }

    // Run migration twice
    const result1 = update_4_25_11(config)
    const result2 = update_4_25_11(result1)

    // Should produce same result
    expect(result2.general.headerColor).toBe('theme-blue')
    expect(result2.theme).toBeUndefined()
    expect(result2.version).toBe('4.25.11')
  })

  it('should not modify configs without theme property', () => {
    const config: any = {
      type: 'chart',
      version: '4.25.10',
      general: {
        title: 'Chart'
      }
    }

    const result = update_4_25_11(config)

    expect(result.theme).toBeUndefined()
    expect(result.general.headerColor).toBeUndefined()
    expect(result.general.title).toBe('Chart')
    expect(result.version).toBe('4.25.11')
  })

  it('should preserve other config properties', () => {
    const config: any = {
      type: 'chart',
      theme: 'theme-blue',
      version: '4.25.10',
      title: 'My Chart',
      data: [{ x: 1, y: 2 }],
      general: {
        title: 'General Title',
        showTitle: true
      }
    }

    const result = update_4_25_11(config)

    expect(result.title).toBe('My Chart')
    expect(result.data).toEqual([{ x: 1, y: 2 }])
    expect(result.general.title).toBe('General Title')
    expect(result.general.showTitle).toBe(true)
    expect(result.general.headerColor).toBe('theme-blue')
  })
})
