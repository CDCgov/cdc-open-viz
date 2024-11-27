import _ from 'lodash'

const strip = (paramVal: string) => {
  return paramVal.replace(/"/g, '')
}

const isNumber = (value: string) => {
  // matches int and float and negative numbers
  return String(value).match(/^[-]?[0-9\.]+$/)
}

export const gatherQueryParams = (baseEndpoint: string, params: { key: string; value: string }[]) => {
  const baseEndpointHasQueryParams = baseEndpoint.includes('?')
  return params
    .filter(({ value }) => value !== '')
    .map(({ key, value }, i) => {
      const leadingCharacter = i === 0 && !baseEndpointHasQueryParams ? '?' : '&'
      const isStatementParam = key.match(/\$.*/)
      if (isNumber(value) || isStatementParam) return leadingCharacter + key + '=' + value
      return leadingCharacter + key + '=' + `"${strip(value)}"`
    })
    .join('')
}
