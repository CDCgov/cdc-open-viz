import _ from 'lodash'

const symbols = [
  ['*', 'Astrerisk'],
  ['†', 'Dagger'],
  ['§', 'Section Symbol'],
  ['¶', 'Paragraph Symbol']
]

export const footnotesSymbols = symbols.concat(symbols.map(([symbol, name]) => [symbol + symbol, 'Double ' + name]))
export const adjustedSymbols = _.fromPairs(_.map(footnotesSymbols, ([symbol, name]) => [name, symbol]))
