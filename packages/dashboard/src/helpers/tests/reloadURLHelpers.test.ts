import { isUpdateNeeded, getDataURL, getNewFileName, filterUsedByDataUrl } from '../reloadURLHelpers'
import { SharedFilter } from '../../types/SharedFilter'

describe('isUpdateNeeded', () => {
  it('should return false when there are no filters and no query params', () => {
    const filters: SharedFilter[] = []
    const currentQueryParams = {}
    const newQueryParams = {}
    expect(isUpdateNeeded(filters, currentQueryParams, newQueryParams)).toBe(false)
  })

  it('should return true when there is a filter with type "urlfilter" and filterBy "File Name"', () => {
    const filters: SharedFilter[] = [{ type: 'urlfilter', active: 'someValue', filterBy: 'File Name' }]
    const currentQueryParams = {}
    const newQueryParams = {}
    expect(isUpdateNeeded(filters, currentQueryParams, newQueryParams)).toBe(true)
  })

  it('should return true when query params are different', () => {
    const filters: SharedFilter[] = []
    const currentQueryParams = { param1: 'value1' }
    const newQueryParams = { param1: 'value2' }
    expect(isUpdateNeeded(filters, currentQueryParams, newQueryParams)).toBe(true)
  })

  it('should return false when query params are the same', () => {
    const filters: SharedFilter[] = []
    const currentQueryParams = { param1: 'value1' }
    const newQueryParams = { param1: 'value1' }
    expect(isUpdateNeeded(filters, currentQueryParams, newQueryParams)).toBe(false)
  })

  it('should return false when filter type is "urlfilter" but filterBy is not "File Name"', () => {
    const filters: SharedFilter[] = [{ type: 'urlfilter', active: 'someValue', filterBy: 'Other' }]
    const currentQueryParams = {}
    const newQueryParams = {}
    expect(isUpdateNeeded(filters, currentQueryParams, newQueryParams)).toBe(false)
  })

  it('should return false when filter type is "urlfilter" and filterBy is "File Name" but active is an array', () => {
    const filters: SharedFilter[] = [{ type: 'urlfilter', active: ['someValue'], filterBy: 'File Name' }]
    const currentQueryParams = {}
    const newQueryParams = {}
    expect(isUpdateNeeded(filters, currentQueryParams, newQueryParams)).toBe(false)
  })
})

describe('getDataURL', () => {
  it('should return the base URL when there are no query parameters and no new file name', () => {
    const updatedQSParams = {}
    const dataUrl = new URL('https://example.com/path/to/file.csv')
    const newFileName = ''
    expect(getDataURL(updatedQSParams, dataUrl, newFileName)).toBe('https://example.com/path/to/file.csv')
  })

  it('should append query parameters correctly when they are strings and there is no new file name', () => {
    const updatedQSParams = { param1: 'value1', param2: 'value2' }
    const dataUrl = new URL('https://example.com/path/to/file.csv')
    const newFileName = ''
    expect(getDataURL(updatedQSParams, dataUrl, newFileName)).toBe(
      'https://example.com/path/to/file.csv?param1="value1"&param2="value2"'
    )
  })

  it('should append query parameters correctly when they are arrays and there is no new file name', () => {
    const updatedQSParams = { param1: ['value1', 'value2'], param2: 'value3' }
    const dataUrl = new URL('https://example.com/path/to/file.csv')
    const newFileName = ''
    expect(getDataURL(updatedQSParams, dataUrl, newFileName)).toBe(
      'https://example.com/path/to/file.csv?param1="value1"&param1="value2"&param2="value3"'
    )
  })

  it('should change the file name correctly when there are no query parameters but there is a new file name', () => {
    const updatedQSParams = {}
    const dataUrl = new URL('https://example.com/path/to/file.csv')
    const newFileName = 'newfile'
    expect(getDataURL(updatedQSParams, dataUrl, newFileName)).toBe('https://example.com/path/to/newfile.csv')
  })

  it('should change the file name and append query parameters correctly when they are strings and there is a new file name', () => {
    const updatedQSParams = { param1: 'value1', param2: 'value2' }
    const dataUrl = new URL('https://example.com/path/to/file.csv')
    const newFileName = 'newfile'
    expect(getDataURL(updatedQSParams, dataUrl, newFileName)).toBe(
      'https://example.com/path/to/newfile.csv?param1="value1"&param2="value2"'
    )
  })

  it('should change the file name and append query parameters correctly when they are arrays and there is a new file name', () => {
    const updatedQSParams = { param1: ['value1', 'value2'], param2: 'value3' }
    const dataUrl = new URL('https://example.com/path/to/file.csv')
    const newFileName = 'newfile'
    expect(getDataURL(updatedQSParams, dataUrl, newFileName)).toBe(
      'https://example.com/path/to/newfile.csv?param1="value1"&param1="value2"&param2="value3"'
    )
  })

  it('should filter out empty query parameters', () => {
    const currentQSParams = {
      $datakey: 'topic',
      $limit: '5000',
      'TEST TEST': '"undefined"',
      AgeGroupSelector: '"undefined"',
      Category: '"undefined"',
      Indicator: '"undefined"',
      Location: '"undefined"',
      Year: '"undefined"'
    }
    const updatedQSParams = {
      AgeGroupSelector: undefined,
      Category: undefined,
      Indicator: undefined,
      Location: undefined,
      Year: undefined
    }
    const runtimeURL = `http://example.com/public?$datakey=topic&$limit=5000&Location="undefined"&Category="undefined"&Indicator="undefined"&Year="undefined"&AgeGroupSelector="undefined"`
    const dataUrl = new URL(runtimeURL, 'http://example.com')
    const newFileName = ''
    const dataUrlFinal = getDataURL({ ...currentQSParams, ...updatedQSParams }, dataUrl, newFileName)
    expect(dataUrlFinal).toBe('http://example.com/public?$datakey=topic&$limit=5000')
    updatedQSParams.Category = 'something'
    expect(getDataURL({ ...currentQSParams, ...updatedQSParams }, dataUrl, newFileName)).toBe(
      'http://example.com/public?$datakey=topic&$limit=5000&Category="something"'
    )
  })
})

describe('getNewFileName', () => {
  it('should return the formatted fileName when filter matches datasetKey and has a fileName', () => {
    const newFileName = 'defaultFile'
    const filter = {
      datasetKey: 'dataset1',
      fileName: 'state_${query}',
      active: 'activeFilter',
      whitespaceReplacement: 'Replace With Underscore'
    }
    const datasetKey = 'dataset1'
    expect(getNewFileName(newFileName, filter, datasetKey)).toBe('State_ActiveFilter')
  })

  it('should return the active filter when filter matches datasetKey and does not have a fileName', () => {
    const newFileName = 'defaultFile'
    const filter = {
      datasetKey: 'dataset1',
      active: 'activeFilter',
      whitespaceReplacement: 'Keep Spaces'
    }
    const datasetKey = 'dataset1'
    expect(getNewFileName(newFileName, filter, datasetKey)).toBe('activeFilter')
  })

  it('should return the newFileName as is when filter does not match datasetKey', () => {
    const newFileName = 'defaultFile'
    const filter = {
      datasetKey: 'dataset2',
      fileName: 'state_${query}',
      active: 'activeFilter',
      whitespaceReplacement: 'Replace With Underscore'
    }
    const datasetKey = 'dataset1'
    expect(getNewFileName(newFileName, filter, datasetKey)).toBe('defaultFile')
  })

  it('should replace ${query} with the active filter when filter matches datasetKey, has a fileName, and includes ${query}', () => {
    const newFileName = 'defaultFile'
    const filter = {
      datasetKey: 'dataset1',
      fileName: 'state_${query}',
      active: 'activeFilter',
      whitespaceReplacement: 'Keep Spaces'
    }
    const datasetKey = 'dataset1'
    expect(getNewFileName(newFileName, filter, datasetKey)).toBe('State_ActiveFilter')
  })

  it('should handle whitespace replacement options correctly', () => {
    const newFileName = 'defaultFile'
    const filter = {
      datasetKey: 'dataset1',
      fileName: 'state_${query}',
      active: 'active Filter',
      whitespaceReplacement: 'Remove Spaces'
    }
    const datasetKey = 'dataset1'
    expect(getNewFileName(newFileName, filter, datasetKey)).toBe('State_ActiveFilter')

    filter.whitespaceReplacement = 'Keep Spaces'
    expect(getNewFileName(newFileName, filter, datasetKey)).toBe('State_Active Filter')

    filter.whitespaceReplacement = 'Replace With Underscore'
    expect(getNewFileName(newFileName, filter, datasetKey)).toBe('State_Active_Filter')
  })
})

describe('filterUsedByDataUrl', () => {
  const visualizations = {
    viz1: { dataKey: 'dataset1' },
    viz2: { dataKey: 'dataset2' },
    viz3: { dataKey: 'dataset1' }
  }

  it('should return true when filter has no usedBy property', () => {
    const filter = { datasetKey: 'dataset1' }
    const datasetKey = 'dataset1'
    expect(filterUsedByDataUrl(filter, datasetKey, visualizations)).toBe(true)
  })

  it('should return true when filter has an empty usedBy array', () => {
    const filter = { usedBy: [], datasetKey: 'dataset1' }
    const datasetKey = 'dataset1'
    expect(filterUsedByDataUrl(filter, datasetKey, visualizations)).toBe(true)
  })

  it('should return true when filter has usedBy array with visualization keys that match the datasetKey', () => {
    const filter = { usedBy: ['viz1', 'viz3'], datasetKey: 'dataset1' }
    const datasetKey = 'dataset1'
    expect(filterUsedByDataUrl(filter, datasetKey, visualizations)).toBe(true)
  })

  it('should return false when filter has usedBy array with visualization keys that do not match the datasetKey', () => {
    const filter = { usedBy: ['viz2'], datasetKey: 'dataset1' }
    const datasetKey = 'dataset1'
    expect(filterUsedByDataUrl(filter, datasetKey, visualizations)).toBe(false)
  })

  it('should return true when filter has usedBy array with a mix of matching and non-matching visualization keys', () => {
    const filter = { usedBy: ['viz1', 'viz2'], datasetKey: 'dataset1' }
    const datasetKey = 'dataset1'
    expect(filterUsedByDataUrl(filter, datasetKey, visualizations)).toBe(true)
  })
})
