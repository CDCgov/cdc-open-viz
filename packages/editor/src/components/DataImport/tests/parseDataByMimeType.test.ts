import { describe, it, expect, vi } from 'vitest'
import { parseTextByMimeType } from './../helpers/parseTextByMimeType'
import { errorMessages } from '../../../helpers/errorMessages'
import { isSolrJson } from '@cdc/core/helpers/isSolr'
import { csvParse } from 'd3'

vi.mock('@cdc/core/helpers/isSolr', () => ({
  isSolrJson: vi.fn()
}))

vi.mock('d3', () => ({
  csvParse: vi.fn()
}))

describe('parseTextByMimeType', () => {
  const errorHandler = vi.fn()

  it('should parse CSV text correctly', () => {
    const csvText = 'name,age\nJohn,30\nJane,25'
    const parsedCsv = [
      { name: 'John', age: '30' },
      { name: 'Jane', age: '25' }
    ]
    csvParse.mockReturnValue(parsedCsv)

    const result = parseTextByMimeType(csvText, 'text/csv', '', errorHandler)

    expect(result).toEqual(parsedCsv)
    expect(csvParse).toHaveBeenCalledWith(csvText)
    expect(errorHandler).not.toHaveBeenCalled()
  })

  it('should parse JSON text correctly', () => {
    const jsonText = '{"name":"John","age":30}'
    const parsedJson = { name: 'John', age: 30 }

    isSolrJson.mockReturnValue(false)

    const result = parseTextByMimeType(jsonText, 'application/json', '', errorHandler)

    expect(result).toEqual(parsedJson)
    expect(errorHandler).not.toHaveBeenCalled()
  })

  it('should parse Solr JSON text correctly', () => {
    const solrJsonText = '{"response":{"docs":[{"name":"John","age":30}]}}'
    const parsedSolrJson = [{ name: 'John', age: 30 }]

    isSolrJson.mockReturnValue(true)

    const result = parseTextByMimeType(solrJsonText, 'application/json', '', errorHandler)

    expect(result).toEqual(parsedSolrJson)
    expect(errorHandler).not.toHaveBeenCalled()
  })

  it('should handle JSON parsing errors', () => {
    const invalidJsonText = '{"name":"John","age":30'

    isSolrJson.mockReturnValue(false)

    const result = parseTextByMimeType(invalidJsonText, 'application/json', '', errorHandler)

    expect(result).toBeUndefined()
    expect(errorHandler).toHaveBeenCalledWith([errorMessages.formatting])
  })

  it('should handle unsupported MIME types', () => {
    const text = 'unsupported text'

    const result = parseTextByMimeType(text, 'unsupported/type', '', errorHandler)

    expect(result).toBeUndefined()
    expect(errorHandler).toHaveBeenCalledWith([errorMessages.fileType])
  })
})
