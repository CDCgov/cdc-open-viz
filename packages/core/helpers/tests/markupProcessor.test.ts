import { processMarkupVariables, validateMarkupVariables } from '../markupProcessor'
import { MarkupVariable } from '../../types/EditorPanel_MarkupVariables'
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
      const result = processMarkupVariables(content, testData, variables)

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
      const result = processMarkupVariables(content, testData, variables)

      expect(result.processedContent).toContain('California, Texas, and Florida')
      expect(result.processedContent).toContain('2023')
    })

    it('should return original content if no variables defined', () => {
      const content = 'Text with {{undefined}}'
      const result = processMarkupVariables(content, testData, [])

      expect(result.processedContent).toBe('Text with {{undefined}}')
    })

    it('should leave unknown variable tags unchanged', () => {
      const variables: MarkupVariable[] = [
        { name: 'State', tag: '{{state}}', columnName: 'state', conditions: [] }
      ]

      const content = 'Known: {{state}}, Unknown: {{unknown}}'
      const result = processMarkupVariables(content, testData, variables)

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
      const result = processMarkupVariables(content, testData, variables)

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
      const result = processMarkupVariables(content, testData, variables)

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
          conditions: [
            { columnName: 'state', isOrIsNotEqualTo: 'is', value: 'California' }
          ]
        }
      ]

      const content = 'The state is {{state}}'
      const result = processMarkupVariables(content, testData, variables)

      expect(result.processedContent).toBe('The state is California')
    })

    it('should filter data with single "is not" condition', () => {
      const variables: MarkupVariable[] = [
        {
          name: 'State',
          tag: '{{state}}',
          columnName: 'state',
          conditions: [
            { columnName: 'state', isOrIsNotEqualTo: 'is not', value: 'California' }
          ]
        }
      ]

      const content = 'States: {{state}}'
      const result = processMarkupVariables(content, testData, variables)

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
      const result = processMarkupVariables(content, dataWithYears, variables)

      expect(result.processedContent).toBe('State: California')
    })

    it('should return empty string when no data matches conditions', () => {
      const variables: MarkupVariable[] = [
        {
          name: 'State',
          tag: '{{state}}',
          columnName: 'state',
          conditions: [
            { columnName: 'state', isOrIsNotEqualTo: 'is', value: 'NonExistent' }
          ]
        }
      ]

      const content = 'State: {{state}}'
      const result = processMarkupVariables(content, testData, variables)

      expect(result.processedContent).toBe('State: ')
    })
  })

  describe('Empty Values and Null Handling', () => {
    it('should filter out empty string values', () => {
      const dataWithEmpty = [
        { name: 'Alice' },
        { name: '' },
        { name: 'Bob' },
        { name: '' }
      ]

      const variables: MarkupVariable[] = [
        { name: 'Name', tag: '{{name}}', columnName: 'name', conditions: [] }
      ]

      const content = 'Names: {{name}}'
      const result = processMarkupVariables(content, dataWithEmpty, variables)

      expect(result.processedContent).toBe('Names: Alice and Bob')
    })

    it('should handle null values gracefully', () => {
      const dataWithNull = [
        { value: 'A' },
        { value: null },
        { value: 'B' }
      ]

      const variables: MarkupVariable[] = [
        { name: 'Value', tag: '{{value}}', columnName: 'value', conditions: [] }
      ]

      const content = 'Values: {{value}}'
      const result = processMarkupVariables(content, dataWithNull, variables)

      expect(result.processedContent).toBe('Values: A and B')
    })

    it('should handle undefined values', () => {
      const dataWithUndefined = [
        { value: 'A' },
        { value: undefined },
        { value: 'B' }
      ]

      const variables: MarkupVariable[] = [
        { name: 'Value', tag: '{{value}}', columnName: 'value', conditions: [] }
      ]

      const content = 'Values: {{value}}'
      const result = processMarkupVariables(content, dataWithUndefined, variables)

      expect(result.processedContent).toBe('Values: A and B')
    })

    it('should return empty when all values are empty/null', () => {
      const dataEmpty = [
        { value: '' },
        { value: null },
        { value: undefined }
      ]

      const variables: MarkupVariable[] = [
        { name: 'Value', tag: '{{value}}', columnName: 'value', conditions: [] }
      ]

      const content = 'Values: {{value}}'
      const result = processMarkupVariables(content, dataEmpty, variables)

      expect(result.processedContent).toBe('Values: ')
    })
  })

  describe('List Formatting', () => {
    it('should format two items with "and" in production mode', () => {
      const data = [{ state: 'CA' }, { state: 'TX' }]
      const variables: MarkupVariable[] = [
        { name: 'State', tag: '{{state}}', columnName: 'state', conditions: [] }
      ]

      const content = '{{state}}'
      const result = processMarkupVariables(content, data, variables, { isEditor: false })

      expect(result.processedContent).toBe('CA and TX')
    })

    it('should format three items with Oxford comma and "and"', () => {
      const data = [{ state: 'CA' }, { state: 'TX' }, { state: 'FL' }]
      const variables: MarkupVariable[] = [
        { name: 'State', tag: '{{state}}', columnName: 'state', conditions: [] }
      ]

      const content = '{{state}}'
      const result = processMarkupVariables(content, data, variables, { isEditor: false })

      expect(result.processedContent).toBe('CA, TX, and FL')
    })

    it('should use "or" conjunction in editor mode', () => {
      const data = [{ state: 'CA' }, { state: 'TX' }]
      const variables: MarkupVariable[] = [
        { name: 'State', tag: '{{state}}', columnName: 'state', conditions: [] }
      ]

      const content = '{{state}}'
      const result = processMarkupVariables(content, data, variables, { isEditor: true })

      expect(result.processedContent).toBe('CA or TX')
    })
  })

  describe('XSS Prevention and Security', () => {
    it('should handle data with HTML tags safely', () => {
      const maliciousData = [
        { value: '<script>alert("xss")</script>' },
        { value: '<img src=x onerror=alert(1)>' }
      ]

      const variables: MarkupVariable[] = [
        { name: 'Value', tag: '{{value}}', columnName: 'value', conditions: [] }
      ]

      const content = 'Data: {{value}}'
      const result = processMarkupVariables(content, maliciousData, variables)

      // Should return the raw strings, parsing responsibility is on the component using html-react-parser
      expect(result.processedContent).toContain('<script>')
      expect(result.processedContent).toContain('<img')
    })

    it('should handle special characters in data', () => {
      const specialData = [
        { value: 'Test & Value' },
        { value: 'Price: $100 < $200' }
      ]

      const variables: MarkupVariable[] = [
        { name: 'Value', tag: '{{value}}', columnName: 'value', conditions: [] }
      ]

      const content = '{{value}}'
      const result = processMarkupVariables(content, specialData, variables)

      expect(result.processedContent).toContain('Test & Value')
      expect(result.processedContent).toContain('Price: $100 < $200')
    })
  })

  describe('Hide Section Logic', () => {
    it('should set shouldHideSection when allowHideSection is true and values are empty', () => {
      const emptyData = [{ value: '' }]
      const variables: MarkupVariable[] = [
        { name: 'Value', tag: '{{value}}', columnName: 'value', conditions: [] }
      ]

      const content = '{{value}}'
      const result = processMarkupVariables(content, emptyData, variables, {
        allowHideSection: true,
        isEditor: false
      })

      expect(result.shouldHideSection).toBe(true)
    })

    it('should not hide section in editor mode even if values are empty', () => {
      const emptyData = [{ value: '' }]
      const variables: MarkupVariable[] = [
        { name: 'Value', tag: '{{value}}', columnName: 'value', conditions: [] }
      ]

      const content = '{{value}}'
      const result = processMarkupVariables(content, emptyData, variables, {
        allowHideSection: true,
        isEditor: true
      })

      expect(result.shouldHideSection).toBe(false)
    })
  })

  describe('No Data Message Logic', () => {
    it('should set shouldShowNoDataMessage when enabled and values are empty', () => {
      const emptyData = [{ value: '' }]
      const variables: MarkupVariable[] = [
        { name: 'Value', tag: '{{value}}', columnName: 'value', conditions: [] }
      ]

      const content = '{{value}}'
      const result = processMarkupVariables(content, emptyData, variables, {
        showNoDataMessage: true,
        isEditor: false
      })

      expect(result.shouldShowNoDataMessage).toBe(true)
    })
  })

  describe('Edge Cases', () => {
    it('should handle empty data array', () => {
      const variables: MarkupVariable[] = [
        { name: 'Value', tag: '{{value}}', columnName: 'value', conditions: [] }
      ]

      const content = '{{value}}'
      const result = processMarkupVariables(content, [], variables)

      expect(result.processedContent).toBe('')
    })

    it('should handle empty content string', () => {
      const variables: MarkupVariable[] = [
        { name: 'Value', tag: '{{value}}', columnName: 'value', conditions: [] }
      ]

      const result = processMarkupVariables('', testData, variables)

      expect(result.processedContent).toBe('')
    })

    it('should handle single item (no conjunction)', () => {
      const data = [{ state: 'California' }]
      const variables: MarkupVariable[] = [
        { name: 'State', tag: '{{state}}', columnName: 'state', conditions: [] }
      ]

      const content = '{{state}}'
      const result = processMarkupVariables(content, data, variables)

      expect(result.processedContent).toBe('California')
    })

    it('should remove duplicate values from list', () => {
      const duplicateData = [
        { state: 'California' },
        { state: 'Texas' },
        { state: 'California' }
      ]

      const variables: MarkupVariable[] = [
        { name: 'State', tag: '{{state}}', columnName: 'state', conditions: [] }
      ]

      const content = '{{state}}'
      const result = processMarkupVariables(content, duplicateData, variables)

      expect(result.processedContent).toBe('California and Texas')
    })
  })
})

describe('validateMarkupVariables', () => {
  const testData = [
    { state: 'CA', population: '1000' }
  ]

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
})
