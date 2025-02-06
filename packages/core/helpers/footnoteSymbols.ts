import { fromPairs, map } from 'lodash-es'

const symbols = [
  ['*', 'Asterisk'],
  ['†', 'Dagger'],
  ['§', 'Section Symbol'],
  ['¶', 'Paragraph Symbol']
]

export const footnotesSymbols = symbols.concat(symbols.map(([symbol, name]) => [symbol + symbol, 'Double ' + name]))
export const adjustedSymbols = fromPairs(map(footnotesSymbols, ([symbol, name]) => [name, symbol]))
