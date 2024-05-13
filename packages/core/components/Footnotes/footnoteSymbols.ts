const symbols = [
  ['*', 'Astrerisk'],
  ['†', 'Dagger'],
  ['‡', 'Double-Dagger'],
  ['§', 'Section'],
  ['¶', 'Pilcrow'],
  ['#', 'Hash']
]

export const footnotesSymbols = symbols.concat(symbols.map(([symbol, name]) => [symbol + symbol, 'Double ' + name]))
