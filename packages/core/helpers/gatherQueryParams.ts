import _ from 'lodash'

export const gatherQueryParams = (baseEndpoint: string, params: { key: string; value: string }[]) => {
  const baseEndpointHasQueryParams = baseEndpoint.includes('?')
  return params
    .filter(({ value }) => value !== '')
    .map(({ key, value }, i) => {
      const leadingCharacter = i === 0 && !baseEndpointHasQueryParams ? '?' : '&'
      const isStatementParam = key.match(/\$.*/)
      if (!_.isNaN(parseInt(value)) || isStatementParam) return leadingCharacter + key + '=' + value
      return leadingCharacter + key + '=' + `"${value}"`
    })
    .join('')
}
