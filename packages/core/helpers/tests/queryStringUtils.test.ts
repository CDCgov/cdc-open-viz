import { getQueryStringFilterValue, isFilterHiddenByQuery, getQueryParams, getQueryParam } from '../queryStringUtils'
import { expect, describe, it, beforeEach, afterEach, vi } from 'vitest'

describe('getQueryStringFilterValue', () => {
  let originalLocation: Location

  beforeEach(() => {
    // Save original location
    originalLocation = window.location
  })

  afterEach(() => {
    // Restore original location
    Object.defineProperty(window, 'location', {
      value: originalLocation,
      writable: true,
      configurable: true
    })
  })

  const mockLocation = (search: string) => {
    delete (window as any).location
    Object.defineProperty(window, 'location', {
      value: { search },
      writable: true,
      configurable: true
    })
  }

  it('should return the matching filter value from query string (case-insensitive)', () => {
    mockLocation('?location=home')
    const filter = {
      setByQueryParameter: 'location',
      values: ['Home', 'School', 'Work']
    }
    const result = getQueryStringFilterValue(filter)
    expect(result).toBe('Home') // Returns value with original casing
  })

  it('should return the matching filter value when query param is uppercase', () => {
    mockLocation('?state=CALIFORNIA')
    const filter = {
      setByQueryParameter: 'state',
      values: ['California', 'Texas', 'New York']
    }
    const result = getQueryStringFilterValue(filter)
    expect(result).toBe('California')
  })

  it('should return undefined when setByQueryParameter is not defined', () => {
    mockLocation('?location=home')
    const filter = {
      values: ['Home', 'School', 'Work']
    }
    const result = getQueryStringFilterValue(filter)
    expect(result).toBeUndefined()
  })

  it('should return undefined when query parameter is not in URL', () => {
    mockLocation('?other=value')
    const filter = {
      setByQueryParameter: 'location',
      values: ['Home', 'School', 'Work']
    }
    const result = getQueryStringFilterValue(filter)
    expect(result).toBeUndefined()
  })

  it('should return undefined when query value does not match any filter values', () => {
    mockLocation('?location=park')
    const filter = {
      setByQueryParameter: 'location',
      values: ['Home', 'School', 'Work']
    }
    const result = getQueryStringFilterValue(filter)
    expect(result).toBeUndefined()
  })

  it('should return undefined when filter has no values', () => {
    mockLocation('?location=home')
    const filter = {
      setByQueryParameter: 'location',
      values: []
    }
    const result = getQueryStringFilterValue(filter)
    expect(result).toBeUndefined()
  })

  it('should handle filters with null values in array', () => {
    mockLocation('?location=school')
    const filter = {
      setByQueryParameter: 'location',
      values: ['Home', null, 'School', 'Work']
    }
    const result = getQueryStringFilterValue(filter)
    expect(result).toBe('School')
  })
})

describe('isFilterHiddenByQuery', () => {
  let originalLocation: Location

  beforeEach(() => {
    originalLocation = window.location
  })

  afterEach(() => {
    Object.defineProperty(window, 'location', {
      value: originalLocation,
      writable: true,
      configurable: true
    })
  })

  const mockLocation = (search: string) => {
    delete (window as any).location
    Object.defineProperty(window, 'location', {
      value: { search },
      writable: true,
      configurable: true
    })
  }

  it('should return true when query parameter is "true"', () => {
    mockLocation('?hideState=true')
    const filter = {
      setByQueryParameter: 'State'
    }
    const result = isFilterHiddenByQuery(filter)
    expect(result).toBe(true)
  })

  it('should return true when query parameter is "TRUE" (case insensitive)', () => {
    mockLocation('?hideState=TRUE')
    const filter = {
      setByQueryParameter: 'State'
    }
    const result = isFilterHiddenByQuery(filter)
    expect(result).toBe(true)
  })

  it('should return true when query parameter is "1"', () => {
    mockLocation('?hideLocation=1')
    const filter = {
      setByQueryParameter: 'Location'
    }
    const result = isFilterHiddenByQuery(filter)
    expect(result).toBe(true)
  })

  it('should return true when query parameter is "yes"', () => {
    mockLocation('?hideYear=yes')
    const filter = {
      setByQueryParameter: 'Year'
    }
    const result = isFilterHiddenByQuery(filter)
    expect(result).toBe(true)
  })

  it('should return true when query parameter is "YES" (case insensitive)', () => {
    mockLocation('?hideYear=YES')
    const filter = {
      setByQueryParameter: 'Year'
    }
    const result = isFilterHiddenByQuery(filter)
    expect(result).toBe(true)
  })

  it('should return false when setByQueryParameter is not defined', () => {
    mockLocation('?hideState=true')
    const filter = {}
    const result = isFilterHiddenByQuery(filter)
    expect(result).toBe(false)
  })

  it('should return false when filter is null', () => {
    mockLocation('?hideState=true')
    const result = isFilterHiddenByQuery(null)
    expect(result).toBe(false)
  })

  it('should return false when filter is undefined', () => {
    mockLocation('?hideState=true')
    const result = isFilterHiddenByQuery(undefined)
    expect(result).toBe(false)
  })

  it('should return false when query parameter is not in URL', () => {
    mockLocation('?other=value')
    const filter = {
      setByQueryParameter: 'State'
    }
    const result = isFilterHiddenByQuery(filter)
    expect(result).toBe(false)
  })

  it('should return false when query parameter is "false"', () => {
    mockLocation('?hideState=false')
    const filter = {
      setByQueryParameter: 'State'
    }
    const result = isFilterHiddenByQuery(filter)
    expect(result).toBe(false)
  })

  it('should return false when query parameter is "0"', () => {
    mockLocation('?hideLocation=0')
    const filter = {
      setByQueryParameter: 'Location'
    }
    const result = isFilterHiddenByQuery(filter)
    expect(result).toBe(false)
  })

  it('should return false when query parameter is "no"', () => {
    mockLocation('?hideYear=no')
    const filter = {
      setByQueryParameter: 'Year'
    }
    const result = isFilterHiddenByQuery(filter)
    expect(result).toBe(false)
  })

  it('should return false when query parameter is empty string', () => {
    mockLocation('?hideState=')
    const filter = {
      setByQueryParameter: 'State'
    }
    const result = isFilterHiddenByQuery(filter)
    expect(result).toBe(false)
  })

  it('should return false when query parameter has an arbitrary value', () => {
    mockLocation('?hideState=maybe')
    const filter = {
      setByQueryParameter: 'State'
    }
    const result = isFilterHiddenByQuery(filter)
    expect(result).toBe(false)
  })

  it('should handle multiple query parameters correctly', () => {
    mockLocation('?location=home&hideState=true&year=2024')
    const filter = {
      setByQueryParameter: 'State'
    }
    const result = isFilterHiddenByQuery(filter)
    expect(result).toBe(true)
  })

  it('should not hide when different parameter is true', () => {
    mockLocation('?hideLocation=true&hideState=false')
    const filter = {
      setByQueryParameter: 'State'
    }
    const result = isFilterHiddenByQuery(filter)
    expect(result).toBe(false)
  })

  it('should construct parameter name with exact case from setByQueryParameter', () => {
    mockLocation('?hidecolor=true')
    const filter = {
      setByQueryParameter: 'color'
    }
    const result = isFilterHiddenByQuery(filter)
    expect(result).toBe(true)
  })

  it('should work with multi-word parameter names', () => {
    mockLocation('?hideAnimal Category=1')
    const filter = {
      setByQueryParameter: 'Animal Category'
    }
    const result = isFilterHiddenByQuery(filter)
    expect(result).toBe(true)
  })

  it('should only check setByQueryParameter (not key, label, or columnName)', () => {
    mockLocation('?hidegeography=true')
    const filter = {
      setByQueryParameter: 'State',
      key: 'geography',
      label: 'geography',
      columnName: 'geography'
    }
    const result = isFilterHiddenByQuery(filter)
    expect(result).toBe(false) // Should NOT match because setByQueryParameter is 'State', not 'geography'
  })

  it('should match when setByQueryParameter matches URL param', () => {
    mockLocation('?hideState=true')
    const filter = {
      setByQueryParameter: 'State',
      key: 'geography',
      label: 'Select Geography',
      columnName: 'geography'
    }
    const result = isFilterHiddenByQuery(filter)
    expect(result).toBe(true) // Should match because setByQueryParameter is 'State'
  })
})

describe('getQueryParams', () => {
  let originalLocation: Location

  beforeEach(() => {
    originalLocation = window.location
  })

  afterEach(() => {
    Object.defineProperty(window, 'location', {
      value: originalLocation,
      writable: true,
      configurable: true
    })
  })

  const mockLocation = (search: string) => {
    delete (window as any).location
    Object.defineProperty(window, 'location', {
      value: { search },
      writable: true,
      configurable: true
    })
  }

  it('should return an object of query parameters', () => {
    mockLocation('?state=CA&year=2024')
    const result = getQueryParams()
    expect(result).toEqual({ state: 'CA', year: '2024' })
  })

  it('should return empty object when no query parameters', () => {
    mockLocation('')
    const result = getQueryParams()
    expect(result).toEqual({})
  })

  it('should handle multiple values for the same key', () => {
    mockLocation('?tag=health&tag=safety&tag=education')
    const result = getQueryParams()
    expect(result.tag).toEqual(['health', 'safety', 'education'])
  })
})

describe('getQueryParam', () => {
  let originalLocation: Location

  beforeEach(() => {
    originalLocation = window.location
  })

  afterEach(() => {
    Object.defineProperty(window, 'location', {
      value: originalLocation,
      writable: true,
      configurable: true
    })
  })

  const mockLocation = (search: string) => {
    delete (window as any).location
    Object.defineProperty(window, 'location', {
      value: { search },
      writable: true,
      configurable: true
    })
  }

  it('should return the value of a specific query parameter', () => {
    mockLocation('?state=CA&year=2024')
    const result = getQueryParam('state')
    expect(result).toBe('CA')
  })

  it('should return undefined for non-existent parameter', () => {
    mockLocation('?state=CA')
    const result = getQueryParam('year')
    expect(result).toBeUndefined()
  })
})
