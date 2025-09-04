import { setBinNumbers, sortSpecialClassesLast } from '.'
import { GeneratedLegend } from './generateRuntimeLegend'

/**
 * Initializes the legend result object with default values
 */
export const initializeLegendResult = (hash: string, runtimeFilters: object[]): GeneratedLegend => {
  const result: GeneratedLegend = {
    fromHash: null,
    runtimeDataHash: null,
    items: []
  }

  if (hash) {
    result.fromHash = hash
  }

  result.runtimeDataHash = runtimeFilters?.fromHash || null

  return result
}

/**
 * Finalizes the legend by setting bin numbers and sorting special classes
 */
export const finalizeLegend = (
  result: GeneratedLegend,
  legend: any,
  newLegendMemo: Map<string, number>,
  newLegendSpecialClassLastMemo: Map<string, number>,
  legendMemo: React.MutableRefObject<Map<string, number>>,
  legendSpecialClassLastMemo: React.MutableRefObject<Map<string, number>>
): void => {
  setBinNumbers(result)
  sortSpecialClassesLast(result, legend)

  const assignSpecialClassLastIndex = (value, key) => {
    const newIndex = result.items.findIndex(d => d.bin === value)
    newLegendSpecialClassLastMemo.set(key, newIndex)
  }

  newLegendMemo.forEach(assignSpecialClassLastIndex)
  legendMemo.current = newLegendMemo
  legendSpecialClassLastMemo.current = newLegendSpecialClassLastMemo
}
