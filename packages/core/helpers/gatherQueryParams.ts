import _ from 'lodash'

const strip = (paramVal: string) => {
  return paramVal.replace(/"/g, '')
}

const isNumber = (value: string) => {
  const hasLetters = value.match(/[a-zA-Z]/)
  if (hasLetters) return false
  return !isNaN(parseInt(value))
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
