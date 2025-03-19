import { describe, it, expect, beforeEach, vi } from 'vitest'
import { isSolrCsv, isSolrJson } from '@cdc/core/helpers/isSolr'
import { getFileExtension } from '../helpers/getFileExtension'
import { supportedDataTypes } from './../helpers/supportedDataTypes'

describe('getFileExtension', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should return .csv if isSolrCsv returns true', () => {
    const url = new URL('http://example.com/data.csv')
    const externalUrl = 'http://example.com/data.csv?wt=csv'
    const result = getFileExtension(url, externalUrl)
    expect(result).toBe('.csv')
  })

  it('should return .json if isSolrJson returns true', () => {
    const url = new URL('http://example.com/data.json')
    const externalUrl = 'http://example.com/data.json?wt=json'
    const result = getFileExtension(url, externalUrl)
    expect(result).toBe('.json')
  })

  it('should return the correct extension based on the URL pathname', () => {
    const url = new URL('http://example.com/data.csv')
    const externalUrl = 'http://example.com/data.csv'
    supportedDataTypes['.csv'] = 'text/csv'
    const result = getFileExtension(url, externalUrl)
    expect(result).toBe('.csv')
  })

  it('should return undefined if no matching extension is found', () => {
    const url = new URL('http://example.com/data.unknown')
    const externalUrl = 'http://example.com/data.unknown'
    const result = getFileExtension(url, externalUrl)
    expect(result).toBeUndefined()
  })
})
