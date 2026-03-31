import { processMarkupVariables, validateMarkupVariables } from '../markupProcessor'
import { MarkupVariable } from '../../types/MarkupVariable'
import { expect, describe, it } from 'vitest'

describe('processMarkupVariables', () => {
  const testData = [
    { state: 'California', population: '39538223', year: '2023' },
    { state: 'Texas', population: '29145505', year: '2023' },
    { state: 'Florida', population: '21538187', year: '2023' }
  ]

  describe('Basic Variable Substitution', () => {
    it('should replace simple variable tags with data values', () => {
      const variables: MarkupVariable[] = [
        {
          name: 'State',
          tag: '{{state}}',
          columnName: 'state',
          conditions: []
        }
      ]

      const content = 'The state is {{state}}'
      const result = processMarkupVariables(content, testData, variables, { locale: 'en-US' })

      expect(result.processedContent).toBe('The state is California, Texas, and Florida')
      expect(result.shouldHideSection).toBe(false)
      expect(result.shouldShowNoDataMessage).toBe(false)
    })

    it('should handle multiple variables in same content', () => {
      const variables: MarkupVariable[] = [
        { name: 'State', tag: '{{state}}', columnName: 'state', conditions: [] },
        { name: 'Year', tag: '{{year}}', columnName: 'year', conditions: [] }
      ]

      const content = 'Data for {{state}} in {{year}}'
      const result = processMarkupVariables(content, testData, variables, { locale: 'en-US' })

      expect(result.processedContent).toContain('California, Texas, and Florida')
      expect(result.processedContent).toContain('2023')
    })

    it('should return original content if no variables defined', () => {
      const content = 'Text with {{undefined}}'
      const result = processMarkupVariables(content, testData, [], { locale: 'en-US' })

      expect(result.processedContent).toBe('Text with {{undefined}}')
    })

    it('should leave unknown variable tags unchanged', () => {
      const variables: MarkupVariable[] = [{ name: 'State', tag: '{{state}}', columnName: 'state', conditions: [] }]

      const content = 'Known: {{state}}, Unknown: {{unknown}}'
      const result = processMarkupVariables(content, testData, variables, { locale: 'en-US' })

      expect(result.processedContent).toContain('California, Texas, and Florida')
      expect(result.processedContent).toContain('{{unknown}}')
    })
  })

  describe('Number Formatting with Commas', () => {
    it('should add commas to numbers when addCommas is true', () => {
      const variables: MarkupVariable[] = [
        {
          name: 'Population',
          tag: '{{population}}',
          columnName: 'population',
          conditions: [],
          addCommas: true
        }
      ]

      const content = 'Population: {{population}}'
      const result = processMarkupVariables(content, testData, variables, { locale: 'en-US' })

      expect(result.processedContent).toContain('39,538,223')
      expect(result.processedContent).toContain('29,145,505')
      expect(result.processedContent).toContain('21,538,187')
    })

    it('should not add commas when addCommas is false', () => {
      const variables: MarkupVariable[] = [
        {
          name: 'Population',
          tag: '{{population}}',
          columnName: 'population',
          conditions: [],
          addCommas: false
        }
      ]

      const content = 'Population: {{population}}'
      const result = processMarkupVariables(content, testData, variables, { locale: 'en-US' })

      expect(result.processedContent).toContain('39538223')
      expect(result.processedContent).not.toContain('39,538,223')
    })
  })

  describe('Conditional Filtering', () => {
    it('should filter data with single "is" condition', () => {
      const variables: MarkupVariable[] = [
        {
          name: 'State',
          tag: '{{state}}',
          columnName: 'state',
          conditions: [{ columnName: 'state', isOrIsNotEqualTo: 'is', value: 'California' }]
        }
      ]

      const content = 'The state is {{state}}'
      const result = processMarkupVariables(content, testData, variables, { locale: 'en-US' })

      expect(result.processedContent).toBe('The state is California')
    })

    it('should filter data with single "is not" condition', () => {
      const variables: MarkupVariable[] = [
        {
          name: 'State',
          tag: '{{state}}',
          columnName: 'state',
          conditions: [{ columnName: 'state', isOrIsNotEqualTo: 'is not', value: 'California' }]
        }
      ]

      const content = 'States: {{state}}'
      const result = processMarkupVariables(content, testData, variables, { locale: 'en-US' })

      expect(result.processedContent).toBe('States: Texas and Florida')
      expect(result.processedContent).not.toContain('California')
    })

    it('should handle multiple AND conditions', () => {
      const dataWithYears = [
        { state: 'California', year: '2022' },
        { state: 'California', year: '2023' },
        { state: 'Texas', year: '2023' }
      ]

      const variables: MarkupVariable[] = [
        {
          name: 'State',
          tag: '{{state}}',
          columnName: 'state',
          conditions: [
            { columnName: 'state', isOrIsNotEqualTo: 'is', value: 'California' },
            { columnName: 'year', isOrIsNotEqualTo: 'is', value: '2023' }
          ]
        }
      ]

      const content = 'State: {{state}}'
      const result = processMarkupVariables(content, dataWithYears, variables, { locale: 'en-US' })

      expect(result.processedContent).toBe('State: California')
    })

    it('should return empty string when no data matches conditions', () => {
      const variables: MarkupVariable[] = [
        {
          name: 'State',
          tag: '{{state}}',
          columnName: 'state',
          conditions: [{ columnName: 'state', isOrIsNotEqualTo: 'is', value: 'NonExistent' }]
        }
      ]

      const content = 'State: {{state}}'
      const result = processMarkupVariables(content, testData, variables, { locale: 'en-US' })

      expect(result.processedContent).toBe('State: ')
    })
  })

  describe('Empty Values and Null Handling', () => {
    it('should filter out empty string values', () => {
      const dataWithEmpty = [{ name: 'Alice' }, { name: '' }, { name: 'Bob' }, { name: '' }]

      const variables: MarkupVariable[] = [{ name: 'Name', tag: '{{name}}', columnName: 'name', conditions: [] }]

      const content = 'Names: {{name}}'
      const result = processMarkupVariables(content, dataWithEmpty, variables, { locale: 'en-US' })

      expect(result.processedContent).toBe('Names: Alice and Bob')
    })

    it('should handle null values gracefully', () => {
      const dataWithNull = [{ value: 'A' }, { value: null }, { value: 'B' }]

      const variables: MarkupVariable[] = [{ name: 'Value', tag: '{{value}}', columnName: 'value', conditions: [] }]

      const content = 'Values: {{value}}'
      const result = processMarkupVariables(content, dataWithNull, variables, { locale: 'en-US' })

      expect(result.processedContent).toBe('Values: A and B')
    })

    it('should handle undefined values', () => {
      const dataWithUndefined = [{ value: 'A' }, { value: undefined }, { value: 'B' }]

      const variables: MarkupVariable[] = [{ name: 'Value', tag: '{{value}}', columnName: 'value', conditions: [] }]

      const content = 'Values: {{value}}'
      const result = processMarkupVariables(content, dataWithUndefined, variables, { locale: 'en-US' })

      expect(result.processedContent).toBe('Values: A and B')
    })

    it('should return empty when all values are empty/null', () => {
      const dataEmpty = [{ value: '' }, { value: null }, { value: undefined }]

      const variables: MarkupVariable[] = [{ name: 'Value', tag: '{{value}}', columnName: 'value', conditions: [] }]

      const content = 'Values: {{value}}'
      const result = processMarkupVariables(content, dataEmpty, variables, { locale: 'en-US' })

      expect(result.processedContent).toBe('Values: ')
    })
  })

  describe('List Formatting', () => {
    it('should format two items with "and" in production mode', () => {
      const data = [{ state: 'CA' }, { state: 'TX' }]
      const variables: MarkupVariable[] = [{ name: 'State', tag: '{{state}}', columnName: 'state', conditions: [] }]

      const content = '{{state}}'
      const result = processMarkupVariables(content, data, variables, { isEditor: false, locale: 'en-US' })

      expect(result.processedContent).toBe('CA and TX')
    })

    it('should format three items with Oxford comma and "and"', () => {
      const data = [{ state: 'CA' }, { state: 'TX' }, { state: 'FL' }]
      const variables: MarkupVariable[] = [{ name: 'State', tag: '{{state}}', columnName: 'state', conditions: [] }]

      const content = '{{state}}'
      const result = processMarkupVariables(content, data, variables, { isEditor: false, locale: 'en-US' })

      expect(result.processedContent).toBe('CA, TX, and FL')
    })

    it('should use "or" conjunction in editor mode', () => {
      const data = [{ state: 'CA' }, { state: 'TX' }]
      const variables: MarkupVariable[] = [{ name: 'State', tag: '{{state}}', columnName: 'state', conditions: [] }]

      const content = '{{state}}'
      const result = processMarkupVariables(content, data, variables, { isEditor: true, locale: 'en-US' })

      expect(result.processedContent).toBe('CA or TX')
    })
  })

  describe('XSS Prevention and Security', () => {
    it('should handle data with HTML tags safely', () => {
      const maliciousData = [{ value: '<script>alert("xss")</script>' }, { value: '<img src=x onerror=alert(1)>' }]

      const variables: MarkupVariable[] = [{ name: 'Value', tag: '{{value}}', columnName: 'value', conditions: [] }]

      const content = 'Data: {{value}}'
      const result = processMarkupVariables(content, maliciousData, variables, { locale: 'en-US' })

      // Should return the raw strings, parsing responsibility is on the component using html-react-parser
      expect(result.processedContent).toContain('<script>')
      expect(result.processedContent).toContain('<img')
    })

    it('should handle special characters in data', () => {
      const specialData = [{ value: 'Test & Value' }, { value: 'Price: $100 < $200' }]

      const variables: MarkupVariable[] = [{ name: 'Value', tag: '{{value}}', columnName: 'value', conditions: [] }]

      const content = '{{value}}'
      const result = processMarkupVariables(content, specialData, variables, { locale: 'en-US' })

      expect(result.processedContent).toContain('Test & Value')
      expect(result.processedContent).toContain('Price: $100 < $200')
    })
  })

  describe('Hide Section Logic', () => {
    it('should set shouldHideSection when allowHideSection is true and values are empty', () => {
      const emptyData = [{ value: '' }]
      const variables: MarkupVariable[] = [{ name: 'Value', tag: '{{value}}', columnName: 'value', conditions: [] }]

      const content = '{{value}}'
      const result = processMarkupVariables(content, emptyData, variables, {
        allowHideSection: true,
        isEditor: false,
        locale: 'en-US'
      })

      expect(result.shouldHideSection).toBe(true)
    })

    it('should not hide section in editor mode even if values are empty', () => {
      const emptyData = [{ value: '' }]
      const variables: MarkupVariable[] = [{ name: 'Value', tag: '{{value}}', columnName: 'value', conditions: [] }]

      const content = '{{value}}'
      const result = processMarkupVariables(content, emptyData, variables, {
        allowHideSection: true,
        isEditor: true,
        locale: 'en-US'
      })

      expect(result.shouldHideSection).toBe(false)
    })
  })

  describe('No Data Message Logic', () => {
    it('should set shouldShowNoDataMessage when enabled and values are empty', () => {
      const emptyData = [{ value: '' }]
      const variables: MarkupVariable[] = [{ name: 'Value', tag: '{{value}}', columnName: 'value', conditions: [] }]

      const content = '{{value}}'
      const result = processMarkupVariables(content, emptyData, variables, {
        showNoDataMessage: true,
        isEditor: false,
        locale: 'en-US'
      })

      expect(result.shouldShowNoDataMessage).toBe(true)
    })
  })

  describe('Metadata-Sourced Variables', () => {
    it('should resolve metadata variable from dataMetadata', () => {
      const variables: MarkupVariable[] = [
        {
          name: 'Last Updated',
          tag: '{{lastUpdated}}',
          metadataKey: 'lastUpdated',
          conditions: []
        }
      ]

      const content = 'Data last updated {{lastUpdated}}'
      const result = processMarkupVariables(content, testData, variables, {
        dataMetadata: { lastUpdated: 'January 15, 2026' }
      })

      expect(result.processedContent).toBe('Data last updated January 15, 2026')
      expect(result.shouldHideSection).toBe(false)
      expect(result.shouldShowNoDataMessage).toBe(false)
    })

    it('should return empty string when dataMetadata does not contain the key', () => {
      const variables: MarkupVariable[] = [
        {
          name: 'Last Updated',
          tag: '{{lastUpdated}}',
          metadataKey: 'lastUpdated',
          conditions: []
        }
      ]

      const content = 'Data last updated {{lastUpdated}}'
      const result = processMarkupVariables(content, testData, variables, {
        dataMetadata: { source: 'CDC' }
      })

      expect(result.processedContent).toBe('Data last updated ')
    })

    it('should resolve metadata variable even when conditions are defined', () => {
      const variables: MarkupVariable[] = [
        {
          name: 'Last Updated',
          tag: '{{lastUpdated}}',
          metadataKey: 'lastUpdated',
          conditions: [{ columnName: 'state', isOrIsNotEqualTo: 'is', value: 'California' }]
        }
      ]

      const content = '{{lastUpdated}}'
      const result = processMarkupVariables(content, testData, variables, {
        dataMetadata: { lastUpdated: 'January 15, 2026' }
      })

      expect(result.processedContent).toBe('January 15, 2026')
    })

    it('should handle mixed metadata and column variables in the same content', () => {
      const variables: MarkupVariable[] = [
        {
          name: 'Last Updated',
          tag: '{{lastUpdated}}',
          metadataKey: 'lastUpdated',
          conditions: []
        },
        {
          name: 'State',
          tag: '{{state}}',
          columnName: 'state',
          conditions: [{ columnName: 'state', isOrIsNotEqualTo: 'is', value: 'California' }]
        }
      ]

      const content = '{{state}} data last updated {{lastUpdated}}'
      const result = processMarkupVariables(content, testData, variables, {
        dataMetadata: { lastUpdated: 'January 15, 2026' }
      })

      expect(result.processedContent).toBe('California data last updated January 15, 2026')
    })

    it('should not trigger columnName warning for metadata variable without columnName', () => {
      const variables: MarkupVariable[] = [
        {
          name: 'Source',
          tag: '{{source}}',
          metadataKey: 'source',
          conditions: []
        }
      ]

      const content = 'Source: {{source}}'
      const result = processMarkupVariables(content, testData, variables, {
        dataMetadata: { source: 'CDC NREVSS' }
      })

      expect(result.processedContent).toBe('Source: CDC NREVSS')
    })

    it('should return empty string for metadata variable when dataMetadata is empty', () => {
      const variables: MarkupVariable[] = [
        {
          name: 'Last Updated',
          tag: '{{lastUpdated}}',
          metadataKey: 'lastUpdated',
          conditions: []
        }
      ]

      const content: string = 'Updated: {{lastUpdated}}'
      const result = processMarkupVariables(content, testData, variables, {
        dataMetadata: {}
      })

      expect(result.processedContent).toBe('Updated: ')
    })

    it('should return empty string for metadata variable when dataMetadata is undefined', () => {
      const variables: MarkupVariable[] = [
        {
          name: 'Last Updated',
          tag: '{{lastUpdated}}',
          metadataKey: 'lastUpdated',
          conditions: []
        }
      ]

      const content = 'Updated: {{lastUpdated}}'
      const result = processMarkupVariables(content, testData, variables)

      expect(result.processedContent).toBe('Updated: ')
    })

    it('should format numeric metadata value with commas when addCommas is true', () => {
      const variables: MarkupVariable[] = [
        {
          name: 'Count',
          tag: '{{count}}',
          metadataKey: 'count',
          conditions: [],
          addCommas: true
        }
      ]

      const content = 'Total: {{count}}'
      const result = processMarkupVariables(content, testData, variables, {
        dataMetadata: { count: '1234567' }
      })

      expect(result.processedContent).toBe('Total: 1,234,567')
    })

    it('should not format non-numeric metadata value even when addCommas is true', () => {
      const variables: MarkupVariable[] = [
        {
          name: 'Source',
          tag: '{{source}}',
          metadataKey: 'source',
          conditions: [],
          addCommas: true
        }
      ]

      const content = 'Source: {{source}}'
      const result = processMarkupVariables(content, testData, variables, {
        dataMetadata: { source: 'CDC' }
      })

      expect(result.processedContent).toBe('Source: CDC')
    })

    it('should set shouldHideSection when metadata value is empty and allowHideSection is true', () => {
      const variables: MarkupVariable[] = [
        {
          name: 'Last Updated',
          tag: '{{lastUpdated}}',
          metadataKey: 'lastUpdated',
          conditions: [],
          hideOnNull: true
        }
      ]

      const content = '{{lastUpdated}}'
      const result = processMarkupVariables(content, testData, variables, {
        dataMetadata: {},
        allowHideSection: true,
        isEditor: false
      })

      expect(result.shouldHideSection).toBe(true)
    })

    it('should not set shouldHideSection when metadata value exists', () => {
      const variables: MarkupVariable[] = [
        {
          name: 'Last Updated',
          tag: '{{lastUpdated}}',
          metadataKey: 'lastUpdated',
          conditions: [],
          hideOnNull: true
        }
      ]

      const content = '{{lastUpdated}}'
      const result = processMarkupVariables(content, testData, variables, {
        dataMetadata: { lastUpdated: 'Jan 2026' },
        allowHideSection: true,
        isEditor: false
      })

      expect(result.shouldHideSection).toBe(false)
    })
  })

  describe('Icon Output', () => {
    const trendData = [
      { state: 'California', trend: 'Up' },
      { state: 'Texas', trend: 'Down' }
    ]

    it('should render inline SVG for a static icon variable', () => {
      const variables: MarkupVariable[] = [
        {
          sourceType: 'icon',
          name: 'Trend Up',
          tag: '{{trend-arrow-up}}',
          iconId: 'trend-arrow-up',
          svgScale: 1.2,
          conditions: []
        }
      ]

      const result = processMarkupVariables('Static: {{trend-arrow-up}}', trendData, variables)

      expect(result.processedContent).toContain('<svg')
      expect(result.processedContent).toContain('transform: scale(1.2)')
    })

    it('should return empty output for an icon variable without an icon id', () => {
      const variables: MarkupVariable[] = [
        {
          sourceType: 'icon',
          name: 'Broken Icon',
          tag: '{{broken-icon}}',
          conditions: []
        }
      ]

      const result = processMarkupVariables('{{broken-icon}}', trendData, variables)

      expect(result.processedContent).toBe('')
    })

    it('should render inline SVG when a single mapped value is resolved', () => {
      const variables: MarkupVariable[] = [
        {
          name: 'Trend',
          tag: '{{trend}}',
          outputType: 'svg',
          columnName: 'trend',
          svgMappings: [{ sourceValue: 'Up', svgId: 'trend-arrow-up' }],
          conditions: [{ columnName: 'state', isOrIsNotEqualTo: 'is', value: 'California' }]
        }
      ]

      const content = 'Trend: {{trend}}'
      const result = processMarkupVariables(content, trendData, variables)

      expect(result.processedContent).toContain('<svg')
      expect(result.processedContent).toContain('cove-trend-arrow')
    })

    it('should apply svgScale to the inline SVG style', () => {
      const variables: MarkupVariable[] = [
        {
          name: 'Trend',
          tag: '{{trend}}',
          outputType: 'svg',
          columnName: 'trend',
          svgMappings: [{ sourceValue: 'Up', svgId: 'trend-arrow-up' }],
          svgScale: 1.5,
          conditions: []
        }
      ]

      const content = '{{trend}}'
      const result = processMarkupVariables(content, trendData, variables)

      expect(result.processedContent).toContain('transform: scale(1.5)')
    })

    it('should render multiple SVGs when multiple values are resolved', () => {
      const variables: MarkupVariable[] = [
        {
          name: 'Trend',
          tag: '{{trend}}',
          outputType: 'svg',
          columnName: 'trend',
          svgMappings: [
            { sourceValue: 'Up', svgId: 'trend-arrow-up' },
            { sourceValue: 'Down', svgId: 'trend-arrow-down' }
          ],
          conditions: []
        }
      ]

      const content = '{{trend}}'
      const result = processMarkupVariables(content, trendData, variables)

      const svgCount = result.processedContent.match(/<svg/g)?.length || 0
      expect(svgCount).toBe(2)
    })

    it('should return empty string when the mapped value is missing', () => {
      const variables: MarkupVariable[] = [
        {
          name: 'Trend',
          tag: '{{trend}}',
          outputType: 'svg',
          columnName: 'trend',
          svgMappings: [{ sourceValue: 'Up', svgId: 'trend-arrow-up' }],
          conditions: [{ columnName: 'state', isOrIsNotEqualTo: 'is', value: 'Texas' }]
        }
      ]

      const content = '{{trend}}'
      const result = processMarkupVariables(content, trendData, variables)

      expect(result.processedContent).toBe('')
    })
  })

  describe('Edge Cases', () => {
    it('should handle empty data array', () => {
      const variables: MarkupVariable[] = [{ name: 'Value', tag: '{{value}}', columnName: 'value', conditions: [] }]

      const content = '{{value}}'
      const result = processMarkupVariables(content, [], variables, { locale: 'en-US' })

      expect(result.processedContent).toBe('')
    })

    it('should handle empty content string', () => {
      const variables: MarkupVariable[] = [{ name: 'Value', tag: '{{value}}', columnName: 'value', conditions: [] }]

      const result = processMarkupVariables('', testData, variables, { locale: 'en-US' })

      expect(result.processedContent).toBe('')
    })

    it('should handle single item (no conjunction)', () => {
      const data = [{ state: 'California' }]
      const variables: MarkupVariable[] = [{ name: 'State', tag: '{{state}}', columnName: 'state', conditions: [] }]

      const content = '{{state}}'
      const result = processMarkupVariables(content, data, variables, { locale: 'en-US' })

      expect(result.processedContent).toBe('California')
    })

    it('should remove duplicate values from list', () => {
      const duplicateData = [{ state: 'California' }, { state: 'Texas' }, { state: 'California' }]

      const variables: MarkupVariable[] = [{ name: 'State', tag: '{{state}}', columnName: 'state', conditions: [] }]

      const content = '{{state}}'
      const result = processMarkupVariables(content, duplicateData, variables, { locale: 'en-US' })

      expect(result.processedContent).toBe('California and Texas')
    })
  })
})

describe('validateMarkupVariables', () => {
  const testData = [{ state: 'CA', population: '1000' }]

  it('should return no errors for valid configuration', () => {
    const variables: MarkupVariable[] = [
      {
        name: 'State',
        tag: '{{state}}',
        columnName: 'state',
        conditions: []
      }
    ]

    const errors = validateMarkupVariables(variables, testData)
    expect(errors).toHaveLength(0)
  })

  it('should detect invalid tag format', () => {
    const variables: MarkupVariable[] = [
      {
        name: 'State',
        tag: 'invalid-tag',
        columnName: 'state',
        conditions: []
      }
    ]

    const errors = validateMarkupVariables(variables, testData)
    expect(errors).toContain('Variable 1: Tag must be in format {{tagName}}')
  })

  it('should detect missing column name', () => {
    const variables: MarkupVariable[] = [
      {
        name: 'State',
        tag: '{{state}}',
        columnName: '',
        conditions: []
      }
    ]

    const errors = validateMarkupVariables(variables, testData)
    expect(errors).toContain('Variable 1: Column name is required')
  })

  it('should detect column not found in data', () => {
    const variables: MarkupVariable[] = [
      {
        name: 'Invalid',
        tag: '{{invalid}}',
        columnName: 'nonexistent',
        conditions: []
      }
    ]

    const errors = validateMarkupVariables(variables, testData)
    expect(errors).toContain('Variable 1: Column "nonexistent" not found in data')
  })

  it('should detect invalid conditions', () => {
    const variables: MarkupVariable[] = [
      {
        name: 'State',
        tag: '{{state}}',
        columnName: 'state',
        conditions: [
          { columnName: '', isOrIsNotEqualTo: 'is', value: 'CA' },
          { columnName: 'badcolumn', isOrIsNotEqualTo: 'is', value: 'test' },
          { columnName: 'state', isOrIsNotEqualTo: 'is', value: '' }
        ]
      }
    ]

    const errors = validateMarkupVariables(variables, testData)
    expect(errors).toContain('Variable 1, Condition 1: Column name is required')
    expect(errors).toContain('Variable 1, Condition 2: Column "badcolumn" not found in data')
    expect(errors).toContain('Variable 1, Condition 3: Value is required')
  })

  it('should handle empty data gracefully', () => {
    const variables: MarkupVariable[] = [
      {
        name: 'State',
        tag: '{{state}}',
        columnName: 'state',
        conditions: []
      }
    ]

    const errors = validateMarkupVariables(variables, [])
    expect(errors).toHaveLength(0) // Should not error on column validation when data is empty
  })

  it('should handle null or invalid input gracefully', () => {
    const errors1 = validateMarkupVariables(null as any, testData)
    expect(errors1).toHaveLength(0)

    const errors2 = validateMarkupVariables(undefined as any, testData)
    expect(errors2).toHaveLength(0)

    const errors3 = validateMarkupVariables('not an array' as any, testData)
    expect(errors3).toHaveLength(0)
  })

  it('should skip columnName validation when variable has metadataKey', () => {
    const variables: MarkupVariable[] = [
      {
        name: 'Last Updated',
        tag: '{{lastUpdated}}',
        metadataKey: 'lastUpdated',
        conditions: []
      }
    ]

    const errors = validateMarkupVariables(variables, testData)
    expect(errors).toHaveLength(0)
    expect(errors).not.toContain('Variable 1: Column name is required')
  })

  it('should still require columnName when neither metadataKey nor columnName is set', () => {
    const variables: MarkupVariable[] = [
      {
        name: 'Bad Variable',
        tag: '{{bad}}',
        conditions: []
      }
    ]

    const errors = validateMarkupVariables(variables, testData)
    expect(errors).toContain('Variable 1: Column name is required')
  })

  it('should skip column-not-found validation when variable has metadataKey', () => {
    const variables: MarkupVariable[] = [
      {
        name: 'Source',
        tag: '{{source}}',
        metadataKey: 'source',
        conditions: []
      }
    ]

    const errors = validateMarkupVariables(variables, testData)
    expect(errors).toHaveLength(0)
    expect(errors.find(e => e.includes('not found in data'))).toBeUndefined()
  })

  it('should validate data-driven icon requirements', () => {
    const variables: MarkupVariable[] = [
      {
        name: 'Trend',
        tag: '{{trend}}',
        outputType: 'svg',
        columnName: 'trend',
        svgMappings: [{ sourceValue: 'Up', svgId: 'trend-arrow-up' }],
        conditions: []
      }
    ]

    const errors = validateMarkupVariables(variables, [{ trend: 'Up' }])
    expect(errors).toHaveLength(0)
  })

  it('should require icon mappings when data-driven icons are enabled', () => {
    const variables: MarkupVariable[] = [
      {
        name: 'Trend',
        tag: '{{trend}}',
        outputType: 'svg',
        columnName: 'trend',
        svgMappings: [],
        conditions: []
      }
    ]

    const errors = validateMarkupVariables(variables, [{ trend: 'Up' }])
    expect(errors).toContain('Variable 1: Icon mappings are required')
  })

  it('should validate icon source requirements', () => {
    const variables: MarkupVariable[] = [
      {
        sourceType: 'icon',
        name: 'Trend Up',
        tag: '{{trend-up}}',
        conditions: []
      }
    ]

    const errors = validateMarkupVariables(variables, testData)
    expect(errors).toContain('Variable 1: Icon is required')
  })
})
