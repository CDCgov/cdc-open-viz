import update_4_25_10 from '../4.25.10'
import { expect, describe, it } from 'vitest'

describe('update_4_25_10 - Markup Variables Migration', () => {
  it('should migrate markup-include variables from contentEditor to root level', () => {
    const config: any = {
      type: 'markup-include',
      version: '4.25.9',
      contentEditor: {
        markupVariables: [
          { name: 'State', tag: '{{state}}', columnName: 'state', conditions: [] }
        ]
      }
    }

    const result = update_4_25_10(config)

    expect(result.markupVariables).toEqual([
      { name: 'State', tag: '{{state}}', columnName: 'state', conditions: [] }
    ])
    expect(result.contentEditor.markupVariables).toBeUndefined()
    expect(result.enableMarkupVariables).toBe(true)
    expect(result.version).toBe('4.25.10')
  })

  it('should enable markup variables flag when variables exist', () => {
    const config: any = {
      type: 'markup-include',
      version: '4.25.9',
      contentEditor: {
        markupVariables: [
          { name: 'Var1', tag: '{{var1}}', columnName: 'col1', conditions: [] },
          { name: 'Var2', tag: '{{var2}}', columnName: 'col2', conditions: [] }
        ]
      }
    }

    const result = update_4_25_10(config)

    expect(result.enableMarkupVariables).toBe(true)
    expect(result.markupVariables).toHaveLength(2)
  })

  it('should initialize empty markupVariables array if none exist', () => {
    const config: any = {
      type: 'markup-include',
      version: '4.25.9',
      contentEditor: {}
    }

    const result = update_4_25_10(config)

    expect(result.markupVariables).toEqual([])
    expect(result.enableMarkupVariables).toBeUndefined()
  })

  it('should handle dashboard configs with nested visualizations', () => {
    const config: any = {
      type: 'dashboard',
      version: '4.25.9',
      visualizations: {
        viz1: {
          type: 'markup-include',
          contentEditor: {
            markupVariables: [
              { name: 'Test', tag: '{{test}}', columnName: 'test', conditions: [] }
            ]
          }
        },
        viz2: {
          type: 'chart',
          title: 'Chart'
        },
        viz3: {
          type: 'markup-include',
          contentEditor: {
            markupVariables: [
              { name: 'Another', tag: '{{another}}', columnName: 'another', conditions: [] }
            ]
          }
        }
      }
    }

    const result = update_4_25_10(config)

    expect(result.visualizations.viz1.markupVariables).toHaveLength(1)
    expect(result.visualizations.viz1.enableMarkupVariables).toBe(true)
    expect(result.visualizations.viz1.contentEditor.markupVariables).toBeUndefined()

    expect(result.visualizations.viz3.markupVariables).toHaveLength(1)
    expect(result.visualizations.viz3.enableMarkupVariables).toBe(true)
    expect(result.visualizations.viz3.contentEditor.markupVariables).toBeUndefined()

    // Chart should remain unchanged except version
    expect(result.visualizations.viz2.title).toBe('Chart')
  })

  it('should not modify non-markup-include configs', () => {
    const config: any = {
      type: 'chart',
      version: '4.25.9',
      title: 'My Chart'
    }

    const result = update_4_25_10(config)

    expect(result.markupVariables).toBeUndefined()
    expect(result.enableMarkupVariables).toBeUndefined()
    expect(result.title).toBe('My Chart')
    expect(result.version).toBe('4.25.10')
  })

  it('should be idempotent - safe to run multiple times', () => {
    const config: any = {
      type: 'markup-include',
      version: '4.25.9',
      contentEditor: {
        markupVariables: [
          { name: 'State', tag: '{{state}}', columnName: 'state', conditions: [] }
        ]
      }
    }

    // Run migration twice
    const result1 = update_4_25_10(config)
    const result2 = update_4_25_10(result1)

    // Should produce same result
    expect(result2.markupVariables).toEqual(result1.markupVariables)
    expect(result2.enableMarkupVariables).toBe(result1.enableMarkupVariables)
    expect(result2.version).toBe('4.25.10')
  })

  it('should preserve other contentEditor properties', () => {
    const config: any = {
      type: 'markup-include',
      version: '4.25.9',
      contentEditor: {
        markupVariables: [
          { name: 'Test', tag: '{{test}}', columnName: 'test', conditions: [] }
        ],
        otherProperty: 'should remain',
        nested: {
          value: 123
        }
      }
    }

    const result = update_4_25_10(config)

    expect(result.contentEditor.otherProperty).toBe('should remain')
    expect(result.contentEditor.nested).toEqual({ value: 123 })
    expect(result.contentEditor.markupVariables).toBeUndefined()
  })

  it('should handle empty markupVariables array in contentEditor', () => {
    const config: any = {
      type: 'markup-include',
      version: '4.25.9',
      contentEditor: {
        markupVariables: []
      }
    }

    const result = update_4_25_10(config)

    expect(result.markupVariables).toEqual([])
    expect(result.enableMarkupVariables).toBeUndefined() // Should not enable if array is empty
  })

  it('should preserve conditions in markup variables during migration', () => {
    const config: any = {
      type: 'markup-include',
      version: '4.25.9',
      contentEditor: {
        markupVariables: [
          {
            name: 'Conditional Var',
            tag: '{{conditional-var}}',
            columnName: 'value',
            conditions: [
              { columnName: 'state', isOrIsNotEqualTo: 'is', value: 'California' },
              { columnName: 'year', isOrIsNotEqualTo: 'is not', value: '2020' }
            ],
            addCommas: true,
            hideOnNull: true
          }
        ]
      }
    }

    const result = update_4_25_10(config)

    expect(result.markupVariables[0].conditions).toHaveLength(2)
    expect(result.markupVariables[0].conditions[0]).toEqual({
      columnName: 'state',
      isOrIsNotEqualTo: 'is',
      value: 'California'
    })
    expect(result.markupVariables[0].addCommas).toBe(true)
    expect(result.markupVariables[0].hideOnNull).toBe(true)
  })
})